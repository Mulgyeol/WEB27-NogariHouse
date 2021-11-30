import React from 'react';

import { CustomDefaultButton, DefaultButtonProps } from './style';

function DefaultButton({
  buttonType,
  children,
  size,
  isDisabled,
  onClick,
  font,
}: DefaultButtonProps) {
  return (
    <CustomDefaultButton
      type="button"
      buttonType={buttonType}
      size={size}
      disabled={isDisabled}
      onClick={onClick}
      font={font}
    >
      {children}
    </CustomDefaultButton>
  );
}

export default DefaultButton;
