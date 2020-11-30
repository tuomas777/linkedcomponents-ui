import { render, waitFor } from '@testing-library/react';
import { Formik, FormikProps } from 'formik';
import * as React from 'react';

import Persist from '../FormikPersist';

beforeEach(() => {
  // values stored in tests will also be available in other tests unless you run
  localStorage.clear();
  sessionStorage.clear();
});

const formName = 'form-name';

test('attempts to rehydrate on mount', async () => {
  let injected: FormikProps<{ name: string }>;

  (localStorage.getItem as jest.Mock).mockReturnValueOnce(
    '{"values":{"name":"Name from local storage"},"errors":{},"touched":{},"isSubmitting":false,"isValidating":false,"submitCount":0,"initialValues":{"name":"Test name"},"initialErrors":{},"initialTouched":{},"isValid":true,"dirty":true,"validateOnBlur":true,"validateOnChange":true,"validateOnMount":false}'
  );

  render(
    <Formik initialValues={{ name: 'Test name' }} onSubmit={jest.fn()}>
      {(props: FormikProps<{ name: string }>) => {
        injected = props;

        return (
          <div>
            <Persist name={formName} debounceTime={0} />
          </div>
        );
      }}
    </Formik>
  );

  expect(localStorage.getItem).toHaveBeenCalled();

  expect(injected.values.name).toEqual('Name from local storage');

  await waitFor(() => {
    injected.setValues({ name: 'changed value' });
  });

  expect(injected.values.name).toEqual('changed value');

  await waitFor(() => {
    expect(localStorage.setItem).toHaveBeenCalledWith(
      formName,
      '{"values":{"name":"changed value"},"errors":{},"touched":{},"isSubmitting":false,"isValidating":false,"submitCount":0,"initialValues":{"name":"Test name"},"initialErrors":{},"initialTouched":{},"isValid":true,"dirty":true,"validateOnBlur":true,"validateOnChange":true,"validateOnMount":false}'
    );
  });
});

test('attempts to rehydrate on mount if session storage is true on props', async () => {
  let injected: FormikProps<{ name: string }>;

  (sessionStorage.getItem as jest.Mock).mockReturnValueOnce(
    '{"values":{"name":"Name from session storage"},"errors":{},"touched":{},"isSubmitting":false,"isValidating":false,"submitCount":0,"initialValues":{"name":"Test name"},"initialErrors":{},"initialTouched":{},"isValid":true,"dirty":true,"validateOnBlur":true,"validateOnChange":true,"validateOnMount":false}'
  );

  render(
    <Formik initialValues={{ name: 'Test name' }} onSubmit={jest.fn()}>
      {(props: FormikProps<{ name: string }>) => {
        injected = props;

        return (
          <div>
            <Persist name={formName} debounceTime={0} isSessionStorage={true} />
          </div>
        );
      }}
    </Formik>
  );

  expect(sessionStorage.getItem).toHaveBeenCalled();

  expect(injected.values.name).toEqual('Name from session storage');

  await waitFor(() => {
    injected.setValues({ name: 'changed value' });
  });
  expect(injected.values.name).toEqual('changed value');

  await waitFor(() => {
    expect(sessionStorage.setItem).toHaveBeenCalledWith(
      formName,
      '{"values":{"name":"changed value"},"errors":{},"touched":{},"isSubmitting":false,"isValidating":false,"submitCount":0,"initialValues":{"name":"Test name"},"initialErrors":{},"initialTouched":{},"isValid":true,"dirty":true,"validateOnBlur":true,"validateOnChange":true,"validateOnMount":false}'
    );
  });
});
