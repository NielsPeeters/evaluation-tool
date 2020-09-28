import React, { FunctionComponent, PropsWithChildren } from 'react';
import './style.scss';

interface NavLinkProps {
  icon: FunctionComponent<any>;
  children: string;
  active?: boolean;
  iconColor: string;
}

const NavLink = ({ children, active, icon: Icon, iconColor }: PropsWithChildren<NavLinkProps>) => {
  return (
    <div className={active ? 'navlink active' : 'navlink'}>
      <Icon className="__icon" style={{ color: iconColor }}></Icon>
      <span className="__name">{children}</span>
    </div>
  );
};

export default NavLink;
