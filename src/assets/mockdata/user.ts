import UserImg from './user.jpg';

export interface Picture {
  path: string;
  alt: string;
  size: number;
}

export interface User {
  name: string;
  picture: Picture;
}

export const UserPicture: Picture = {
  path: UserImg,
  alt: 'Picture of user',
  size: 40,
};

export const UserData: User = {
  name: 'Julie',
  picture: UserPicture,
};
