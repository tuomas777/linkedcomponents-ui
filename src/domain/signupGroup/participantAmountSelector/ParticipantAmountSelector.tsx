/* eslint-disable max-len */
import { useField } from 'formik';
import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Button from '../../../common/components/button/Button';
import NumberInput from '../../../common/components/numberInput/NumberInput';
import { RegistrationFieldsFragment } from '../../../generated/graphql';
import getValue from '../../../utils/getValue';
import { getMaxSeatsAmount } from '../../registration/utils';
import useSeatsReservationActions from '../../seatsReservation/hooks/useSeatsReservationActions';
import { getSeatsReservationData } from '../../seatsReservation/utils';
import { SIGNUP_MODALS } from '../../signup/constants';
import { useSignupPageContext } from '../../signup/signupPageContext/hooks/useSignupPageContext';
import { useSignupServerErrorsContext } from '../../signup/signupServerErrorsContext/hooks/useSignupServerErrorsContext';
import { SIGNUP_GROUP_FIELDS } from '../constants';
import ConfirmDeleteParticipantModal from '../modals/confirmDeleteParticipantModal/ConfirmDeleteParticipantModal';
import { SignupFields } from '../types';
import styles from './participantAmountSelector.module.scss';

interface Props {
  disabled: boolean;
  registration: RegistrationFieldsFragment;
}

const ParticipantAmountSelector: React.FC<Props> = ({
  disabled,
  registration,
}) => {
  const { t } = useTranslation();

  const { closeModal, openModal, setOpenModal } = useSignupPageContext();

  const [{ value: signups }, , { setValue: setSignups }] = useField<
    SignupFields[]
  >({ name: SIGNUP_GROUP_FIELDS.SIGNUPS });

  const { saving, updateSeatsReservation } = useSeatsReservationActions({
    registration,
    setSignups,
    signups,
  });

  const { setServerErrorItems, showServerErrors } =
    useSignupServerErrorsContext();

  const [participantsToDelete, setParticipantsToDelete] = useState(0);

  const registrationId = getValue(registration.id, '');

  const [participantAmount, setParticipantAmount] = useState(
    disabled
      ? 1
      : Math.max(
          getSeatsReservationData(registrationId)?.seats ??
            /* istanbul ignore next */ 0,
          1
        )
  );

  const handleParticipantAmountChange: React.ChangeEventHandler<
    HTMLInputElement
  > = (event) => {
    setParticipantAmount(Number(event.target.value));
  };

  const updateParticipantAmount = () => {
    /* istanbul ignore else */
    if (participantAmount !== signups.length) {
      setServerErrorItems([]);

      updateSeatsReservation(participantAmount, {
        onError: (error) => showServerErrors({ error }, 'seatsReservation'),
      });
    }
  };

  const openDeleteParticipantModal = () => {
    setOpenModal(SIGNUP_MODALS.DELETE);
  };

  const handleUpdateClick = () => {
    if (participantAmount < signups.length) {
      setParticipantsToDelete(signups.length - participantAmount);
      openDeleteParticipantModal();
    } else {
      updateParticipantAmount();
    }
  };

  const maxSeatAmount = useMemo(
    () => getMaxSeatsAmount(registration),
    [registration]
  );

  return (
    <>
      <ConfirmDeleteParticipantModal
        isOpen={openModal === SIGNUP_MODALS.DELETE}
        isSaving={saving}
        onClose={closeModal}
        onConfirm={updateParticipantAmount}
        participantCount={participantsToDelete}
      />
      <div className={styles.participantAmountSelector}>
        <NumberInput
          id="participant-amount-field"
          disabled={disabled}
          label={t(`signup.form.labelParticipantAmount`)}
          min={1}
          max={maxSeatAmount}
          onChange={handleParticipantAmountChange}
          required
          step={1}
          value={participantAmount}
        />
        <div className={styles.buttonWrapper}>
          <Button
            disabled={disabled}
            onClick={handleUpdateClick}
            type="button"
            variant="secondary"
          >
            {t(`signup.form.buttonUpdateParticipantAmount`)}
          </Button>
        </div>
      </div>
    </>
  );
};

export default ParticipantAmountSelector;
