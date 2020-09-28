import React from 'react';
import { Inbox } from '../assets/mockdata/inboxlist';
import { Todos } from '../assets/mockdata/todolist';
import Title from '../shared/title';
import Container from './container';
import InboxList from './inboxlist';
import MyGrowth from './mygrowth';
import MyProjects from './myprojects';
import './style.scss';
import TodoList from './todolist';

const Dashboard = () => {
  const todos = Todos;
  const inbox = Inbox;

  return (
    <main className="dashboard">
      <Title>Dashboard</Title>
      <div className="container-flex">
        <div className="col-1">
          <Container subtitle="To do">
            <TodoList todos={todos}></TodoList>
          </Container>
          <Container subtitle="Inbox">
            <InboxList inbox={inbox}></InboxList>
          </Container>
        </div>
        <div className="col-2">
          <Container subtitle="My growth" action="Show growth plan">
            <MyGrowth></MyGrowth>
          </Container>
          <MyProjects subtitle="My projects"></MyProjects>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
