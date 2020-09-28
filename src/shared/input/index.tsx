import React, { FunctionComponent } from 'react';
import './style.scss';

interface InputProps {
  type: string;
  onChange: () => void;
  placeholder?: string;
  icon: FunctionComponent<any>;
}

const index = ({ icon: Icon, ...props }: InputProps) => {
  return (
    <div className="inputContainer">
      <input className="__input" {...props} />
      <Icon className="__icon"></Icon>
    </div>
  );
};

export default index;
