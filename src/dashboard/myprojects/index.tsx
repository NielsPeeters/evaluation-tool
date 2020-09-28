import React, { PropsWithChildren } from 'react';
import SubTitle from '../../shared/subTitle';
import ProjectCard from '../projectcard';
import './style.scss';

interface MyProjectProps {
  subtitle: string;
  action?: string;
  actionEvent?: () => void;
}

const MyProjects = ({ subtitle, action, ...props }: PropsWithChildren<MyProjectProps>) => {
  return (
    <div>
      <div className="__titleSection">
        <SubTitle>{subtitle}</SubTitle>
        {action ? <span className="__action">{action}</span> : null}
      </div>
      <div className="projects-grid">
        <ProjectCard projectName="Google" amountTeamMembers={4} cardColors="#FFAE00"></ProjectCard>
        <ProjectCard projectName="Facebook" amountTeamMembers={3} cardColors="#165F8B"></ProjectCard>
        <ProjectCard projectName="Spotify" amountTeamMembers={2} cardColors="#76C357"></ProjectCard>
        <ProjectCard projectName="Netflix" amountTeamMembers={5} cardColors="#BE1F7A"></ProjectCard>
      </div>
    </div>
  );
};

export default MyProjects;
