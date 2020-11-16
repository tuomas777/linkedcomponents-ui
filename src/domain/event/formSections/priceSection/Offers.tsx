import { FieldArray, useField } from 'formik';
import { IconPlus } from 'hds-react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import Button from '../../../../common/components/button/Button';
import { INPUT_MAX_WIDTHS } from '../../../../constants';
import { EVENT_FIELDS } from '../../constants';
import { Offer as OfferType } from '../../types';
import { getEmptyOffer } from '../../utils';
import FieldArrayRow from '../FieldArrayRow';
import Offer from './Offer';

const getOfferPath = (index: number) => `${EVENT_FIELDS.OFFERS}[${index}]`;

const Offers = () => {
  const { t } = useTranslation();

  const [{ value: type }] = useField({
    name: EVENT_FIELDS.TYPE,
  });
  const [{ value: offers }] = useField({
    name: EVENT_FIELDS.OFFERS,
  });

  return (
    <FieldArray
      name={EVENT_FIELDS.OFFERS}
      render={(arrayHelpers) => (
        <div>
          {offers.map((offer: OfferType, index: number) => {
            return (
              <Offer
                key={index}
                offerPath={getOfferPath(index)}
                onDelete={() => arrayHelpers.remove(index)}
                type={type}
              />
            );
          })}

          <FieldArrayRow
            input={
              <Button
                type="button"
                fullWidth={true}
                onClick={() => arrayHelpers.push(getEmptyOffer())}
                iconLeft={<IconPlus />}
                variant="primary"
              >
                {t('event.form.buttonAddOffer')}
              </Button>
            }
            inputWidth={INPUT_MAX_WIDTHS.MEDIUM}
          />
        </div>
      )}
    />
  );
};

export default Offers;
