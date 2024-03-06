import classNames from 'classnames';
import { IconAngleDown, IconAngleUp, useAccordion } from 'hds-react';
import React from 'react';

import styles from './accordion.module.scss';

interface AccordionProps {
  className?: string;
  initiallyOpen?: boolean;
  toggleButtonLabel: string;
}

const Accordion: React.FC<React.PropsWithChildren<AccordionProps>> = ({
  className,
  children,
  initiallyOpen = false,
  toggleButtonLabel,
}) => {
  const { isOpen, buttonProps, contentProps } = useAccordion({
    initiallyOpen,
  });

  const icon = isOpen ? (
    <IconAngleUp aria-hidden />
  ) : (
    <IconAngleDown aria-hidden />
  );

  return (
    <div className={classNames(styles.accordion, className)}>
      <button
        {...buttonProps}
        aria-label={toggleButtonLabel}
        className={styles.toggleButton}
        type="button"
      >
        <span aria-hidden={true}>{icon}</span>
        <span>{toggleButtonLabel}</span>
      </button>
      <div
        aria-label={toggleButtonLabel}
        {...contentProps}
        className={styles.content}
        role="region"
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
