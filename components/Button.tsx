import React from 'react';
import { Button, ButtonProps } from 'primereact/button';

const CustomButton = (props: ButtonProps) => {
  return <Button {...props} className={`prose ${props.className}`} />;
};

export default CustomButton;
