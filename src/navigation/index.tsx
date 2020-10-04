import React from 'react';
import Title from '../shared/title';
import './style.scss';
import Input from '../shared/input';
import NavLink from './navLink';
import { UserData, User } from '../assets/mockdata/user';
import UserLink from './userLink';
import { ButtonWithIcon } from '../shared/button';
import Search from '../assets/icons/search';
import Grid from '../assets/icons/grid';
import People from '../assets/icons/people';
import Breifcase from '../assets/icons/breifcase';
import TrendingUp from '../assets/icons/trending-up';
import Settings from '../assets/icons/settings';

const Navigation = () => {
  // Normally we'd use UseEffect to fetch the async user data
  const user: User = UserData;

  return (
    <nav className="navigation">
      <div className="topNavigation">
        <Title>Projectify tool</Title>
        <Input type="text" onChange={() => null} placeholder="Search" icon={Search}></Input>

        <div className="navLinks">
          <NavLink active icon={Grid} iconColor="#B0BDEC">
            Dashboard
          </NavLink>

          <NavLink icon={People} iconColor="#FF864F">
            Team
          </NavLink>

          <NavLink icon={Breifcase} iconColor="#42C989">
            Projects
          </NavLink>

          <NavLink icon={TrendingUp} iconColor="#3D00FF">
            Growth plan
          </NavLink>
        </div>
      </div>

      <div className="bottomNavigation">
        <UserLink picture={user.picture}>{user.name}</UserLink>
        <ButtonWithIcon icon={Settings}></ButtonWithIcon>
      </div>
    </nav>
  );
};

export default Navigation;
