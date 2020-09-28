import { FunctionComponent } from 'react';
import Calendar from '../icons/calendar';
import Folder from '../icons/folder';
import Swap from '../icons/swap';
import TrendingUp from '../icons/trending-up';

export interface InboxItem {
  icon: FunctionComponent<any>;
  iconColor: string;
  name: string;
  date: string;
}

export const Inbox: InboxItem[] = [
  {
    icon: Folder,
    iconColor: '#42C989',
    name: 'Fill in project feedback',
    date: '3 Okt 2020',
  },
  {
    icon: TrendingUp,
    iconColor: '#3D00FF',
    name: 'Update growth plan',
    date: '16 Okt 2020',
  },
  {
    icon: Calendar,
    iconColor: '#FFA200',
    name: 'Peer evaluation for Jhon',
    date: '23 Okt 2020',
  },
  {
    icon: Swap,
    iconColor: '#FF4A00',
    name: 'Peer feedback from Yves',
    date: '2 Nov 2020',
  },
  {
    icon: Swap,
    iconColor: '#FF4A00',
    name: 'Peer feedback from Frank',
    date: '3 Nov 2020',
  },
];
