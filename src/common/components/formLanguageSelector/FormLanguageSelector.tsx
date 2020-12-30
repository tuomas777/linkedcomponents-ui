import classNames from 'classnames';
import { css } from 'emotion';
import { useFormikContext } from 'formik';
import React from 'react';

import { useTheme } from '../../../domain/app/theme/Theme';
import { OptionType } from '../../../types';
import { Item } from '../tabSelector/TabSelector';
import styles from '../tabSelector/tabSelector.module.scss';

interface Props {
  fields: string[];
  onChange: (selected: string) => void;
  options: OptionType[];
  selectedLanguage: string;
}

const FormLanguageSelector: React.FC<Props> = ({
  fields,
  onChange,
  options,
  selectedLanguage,
}) => {
  const { theme } = useTheme();
  const { getFieldMeta } = useFormikContext();
  const handleChange = (newLanguage: string) => {
    onChange(newLanguage);
  };

  return (
    <div
      className={classNames(styles.tabSelector, css(theme.tabSelector))}
      role="navigation"
    >
      {options.map((option) => {
        const errors = fields
          .map((field) => getFieldMeta(`${field}.${option.value}`).error)
          .filter((e) => e);
        const isCompleted = !errors.length;
        const isSelected = option.value === selectedLanguage;

        return (
          <Item
            key={option.value}
            isCompleted={isCompleted}
            isSelected={isSelected}
            option={option}
            onClick={handleChange}
          />
        );
      })}
    </div>
  );
};

export default FormLanguageSelector;
