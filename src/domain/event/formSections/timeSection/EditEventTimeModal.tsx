import { Field, Formik } from 'formik';
import { IconPen } from 'hds-react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import Button from '../../../../common/components/button/Button';
import DatepickerField from '../../../../common/components/formFields/DatepickerField';
import FormGroup from '../../../../common/components/formGroup/FormGroup';
import Modal from '../../../../common/components/modal/Modal';
import { EVENT_TIME_FIELDS } from '../../constants';
import { EventTime } from '../../types';
import { eventTimeValidationSchema } from '../../utils';
import styles from './timeSection.module.scss';

export interface EditEventTimeModalProps {
  eventTime: EventTime;
  eventType: string;
  isOpen: boolean;
  onCancel: () => void;
  onSave: (eventTime: EventTime) => void;
}

const EditEventTimeModal: React.FC<EditEventTimeModalProps> = ({
  eventTime,
  eventType,
  isOpen,
  onCancel,
  onSave,
}) => {
  const { t } = useTranslation();

  return (
    <Modal
      className={styles.editEventModal}
      isOpen={isOpen}
      onClose={onCancel}
      shouldCloseOnEsc={true}
      size="m"
      title={t('event.editEventTimeModal.title')}
      type="info"
    >
      <Formik
        initialValues={{
          endTime: eventTime.endTime,
          startTime: eventTime.startTime,
        }}
        onSubmit={(values) => {
          onSave({
            ...eventTime,
            endTime: values.endTime,
            startTime: values.startTime,
          });
        }}
        validateOnBlur
        validateOnChange
        validateOnMount
        validationSchema={eventTimeValidationSchema}
      >
        {({ handleSubmit, values: { startTime } }) => {
          return (
            <>
              <div>
                <FormGroup>
                  <Field
                    component={DatepickerField}
                    name={EVENT_TIME_FIELDS.START_TIME}
                    label={t(`event.form.labelStartTime.${eventType}`)}
                    placeholder={t('common.placeholderDateTime')}
                    required={true}
                    timeSelector={true}
                  />
                </FormGroup>
                <Field
                  component={DatepickerField}
                  name={EVENT_TIME_FIELDS.END_TIME}
                  focusedDate={startTime}
                  minBookingDate={startTime}
                  label={t(`event.form.labelEndTime.${eventType}`)}
                  placeholder={t('common.placeholderDateTime')}
                  required={true}
                  timeSelector={true}
                />
              </div>
              <div className={styles.buttonWrapper}>
                <Button
                  onClick={() => handleSubmit()}
                  iconLeft={<IconPen />}
                  type="button"
                  variant="primary"
                >
                  {t('event.editEventTimeModal.buttonSave')}
                </Button>
                <Button onClick={onCancel} type="button" variant="secondary">
                  {t('common.cancel')}
                </Button>
              </div>
            </>
          );
        }}
      </Formik>
    </Modal>
  );
};

export default EditEventTimeModal;
