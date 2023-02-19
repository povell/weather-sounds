import { IButtonData } from './models';
export const buttons: IButtonData[] = [
  {
    id: 1,
    icon: './icons/sun.svg',
    backgroundImg: './summer-bg.jpg',
    soundFile: './sounds/summer.mp3',
    isSelected: false,
  },
  {
    id: 2,
    icon: './icons/cloud-rain.svg',
    backgroundImg: './rainy-bg.jpg',
    soundFile: './sounds/rain.mp3',
    isSelected: false,
  },
  {
    id: 3,
    icon: './icons/cloud-snow.svg',
    backgroundImg: './winter-bg.jpg',
    soundFile: './sounds/winter.mp3',
    isSelected: false,
  },
];

export const pauseIcon: string = './icons/pause.svg';