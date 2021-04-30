import { Formik } from 'formik';
import { advanceTo, clear } from 'jest-date-mock';
import React from 'react';

import {
  configure,
  render,
  screen,
  userEvent,
  waitFor,
} from '../../../../../utils/testUtils';
import { EVENT_TYPE } from '../../../constants';
import EventTimeTab, { EventTimeTabProps } from '../EventTimeTab';

configure({ defaultHidden: true });

const defaultProps: EventTimeTabProps = {
  events: [],
  eventType: EVENT_TYPE.EVENT,
  eventTimes: [],
  recurringEvents: [],
  setEvents: jest.fn(),
  setEventTimes: jest.fn(),
  setRecurringEvents: jest.fn(),
};

beforeEach(() => {
  clear();
});

const renderComponent = (props?: Partial<EventTimeTabProps>) =>
  render(
    <Formik initialValues={{}} onSubmit={jest.fn()}>
      <EventTimeTab {...defaultProps} {...props} />
    </Formik>
  );

const getElement = (key: 'addButton' | 'endTime' | 'startTime') => {
  switch (key) {
    case 'addButton':
      return screen.getByRole('button', { name: /lisää ajankohta/i });
    case 'endTime':
      return screen.getByRole('textbox', { name: /tapahtuma päättyy/i });
    case 'startTime':
      return screen.getByRole('textbox', { name: /tapahtuma alkaa/i });
  }
};

test('should call setEventTimes', async () => {
  advanceTo('2021-04-12');
  const setEventTimes = jest.fn();
  renderComponent({ setEventTimes });
  const startTimeInput = getElement('startTime');
  const endTimeInput = getElement('endTime');

  userEvent.click(startTimeInput);
  userEvent.type(startTimeInput, '14.04.2021 12.00');

  userEvent.click(endTimeInput);
  userEvent.type(endTimeInput, '14.04.2021 14.00');

  const addButton = getElement('addButton');
  await waitFor(() => {
    expect(addButton).toBeEnabled();
  });
  userEvent.click(addButton);

  await waitFor(() => {
    expect(setEventTimes).toBeCalledWith([
      {
        id: null,
        endTime: new Date('2021-04-14T14:00:00.000Z'),
        startTime: new Date('2021-04-14T12:00:00.000Z'),
      },
    ]);
  });
});
