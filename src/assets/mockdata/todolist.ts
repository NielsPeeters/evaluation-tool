import { FunctionComponent } from 'react';
import Calendar from '../icons/calendar';
import Folder from '../icons/folder';
import TrendingUp from '../icons/trending-up';

export interface Todo {
  id: number;
  icon: FunctionComponent<any>;
  iconColor: string;
  name: string;
  date: string;
  urgent?: boolean;
}

// Normally dates would be in date type, so we can use them for filtering the data on time basis
export const Todos: Todo[] = [
  {
    id: 1,
    icon: Calendar,
    iconColor: '#FFA200',
    name: 'Year evaluation',
    date: 'Tomorrow',
    urgent: true,
  },
  {
    id: 2,
    icon: TrendingUp,
    iconColor: '#3D00FF',
    name: 'Year evaluation',
    date: '3 days to to',
  },
  {
    id: 3,
    icon: Folder,
    iconColor: '#42C989',
    name: 'Year evaluation',
    date: '18 days to go',
  },
  {
    id: 4,
    icon: TrendingUp,
    iconColor: '#3D00FF',
    name: 'Year evaluation',
    date: '19 days to go',
  },
];
