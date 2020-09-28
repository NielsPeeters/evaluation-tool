import React, { PropsWithChildren } from 'react';
import './style.scss';

interface TitleProps {
  children: string;
}

const SubTitle = ({ children }: PropsWithChildren<TitleProps>) => {
  return <span className="subtitle">{children}</span>;
};

export default SubTitle;
