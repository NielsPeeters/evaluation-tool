import React from 'react';
import ArrowForward from '../../assets/icons/arrow-forward';
import People from '../../assets/icons/people';
import './style.scss';

interface ProjectCardProps {
  cardColors: string;
  projectName: string;
  amountTeamMembers: number;
}

const ProjectCard = (props: ProjectCardProps) => {
  return (
    <div className="projectCard" style={{ backgroundColor: `${props.cardColors}10`, color: props.cardColors }}>
      <div className="flex">
        <div className="__company">
          <span>{props.projectName}</span>
          <ArrowForward className="__icon"></ArrowForward>
        </div>
        <div className="__amount">
          <People className="__icon"></People>
          <span>{props.amountTeamMembers}</span>
        </div>
      </div>
      <span className="__feedback">Add feedback</span>
    </div>
  );
};

export default ProjectCard;
