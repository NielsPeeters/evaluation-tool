import React, { PropsWithChildren } from 'react';
import { Picture } from '../../assets/mockdata/user';
import './style.scss';

const UserLink = ({ children, picture }: PropsWithChildren<{ picture: Picture }>) => {
  const { path, alt, size }: Picture = picture;
  return (
    <div className="userlink">
      <img className="__picture" src={path} alt={alt} width={size} height={size} />
      <span className="__name">{children}</span>
    </div>
  );
};

export default UserLink;
