import React, { Component, ComponentElement, PropsWithChildren } from 'react';
import SubTitle from '../../shared/subTitle';
import './style.scss';

interface ContainerProps {
  children: ComponentElement<string, Component<string>>;
  subtitle: string;
  action?: string;
  actionEvent?: () => void;
}

const Container = ({ subtitle, children, action, ...props }: PropsWithChildren<ContainerProps>) => {
  return (
    <div className="container">
      <div className="__titleSection">
        <SubTitle>{subtitle}</SubTitle>
        {action ? <span className="__action">{action}</span> : null}
      </div>

      <div className="__content">{children}</div>
    </div>
  );
};

export default Container;
