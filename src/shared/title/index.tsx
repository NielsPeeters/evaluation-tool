import React, { PropsWithChildren } from 'react';
import './style.scss';

interface TitleProps {
  children: string;
}

const Title = ({ children }: PropsWithChildren<TitleProps>) => {
  return <span className="title">{children}</span>;
};

export default Title;
