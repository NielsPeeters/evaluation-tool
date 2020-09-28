import React, { FunctionComponent, PropsWithChildren } from 'react';
import './style.scss';

interface RowItemProps {
  icon: FunctionComponent<any>;
  iconColor: string;
  children: string;
  countdown?: boolean;
  urgent?: boolean;
  date: string;
}

const RowItem = ({
  children,
  icon: Icon,
  iconColor,
  urgent,
  countdown,
  date,
  ...props
}: PropsWithChildren<RowItemProps>) => {
  return (
    <div className="rowItem">
      <div className="__start">
        <Icon className="__icon" style={{ color: iconColor }}></Icon>
        <span className="__name">{children}</span>
      </div>

      <span className={urgent ? '__date --urgent' : '__date'}>{date}</span>
    </div>
  );
};

export default RowItem;
