import { FunctionComponent } from 'react';
import Calendar from '../icons/calendar';
import Folder from '../icons/folder';
import TrendingUp from '../icons/trending-up';

export interface Todo {
  icon: FunctionComponent<any>;
  iconColor: string;
  name: string;
  date: string;
  urgent?: boolean;
}

// Normally dates would be in date type, so we can use them for filtering the data on time basis
export const Todos: Todo[] = [
  {
    icon: Calendar,
    iconColor: '#FFA200',
    name: 'Year evaluation',
    date: 'Tomorrow',
    urgent: true,
  },
  {
    icon: TrendingUp,
    iconColor: '#3D00FF',
    name: 'Year evaluation',
    date: '3 days to to',
  },
  {
    icon: Folder,
    iconColor: '#42C989',
    name: 'Year evaluation',
    date: '18 days to go',
  },
  {
    icon: TrendingUp,
    iconColor: '#3D00FF',
    name: 'Year evaluation',
    date: '19 days to go',
  },
];
