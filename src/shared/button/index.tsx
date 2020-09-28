import React, { FunctionComponent } from 'react';
import './style.scss';

interface InputProps {
  icon: FunctionComponent<any>;
}

export const ButtonWithIcon = ({ icon: Icon, ...props }: InputProps) => {
  return (
    <button className="button">
      <Icon className="__icon"></Icon>
    </button>
  );
};
