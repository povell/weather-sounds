import { IButtonData } from './models';
import sunIcon from './assets/icons/sun.svg';
import rainIcon from './assets/icons/cloud-rain.svg';
import winterIcon from './assets/icons/cloud-snow.svg';
import summerBg from './assets/summer-bg.jpg';
import rainyBg from './assets/rainy-bg.jpg';
import winterBg from './assets/winter-bg.jpg';
import summerSound from './assets/sounds/summer.mp3';
import rainSound from './assets/sounds/rain.mp3';
import winterSound from './assets/sounds/winter.mp3';

export const buttons: IButtonData[] = [
  {
    id: 1,
    icon: sunIcon,
    backgroundImg: summerBg,
    soundFile: summerSound,
    isSelected: false,
  },
  {
    id: 2,
    icon: rainIcon,
    backgroundImg: rainyBg,
    soundFile: rainSound,
    isSelected: false,
  },
  {
    id: 3,
    icon: winterIcon,
    backgroundImg: winterBg,
    soundFile: winterSound,
    isSelected: false,
  },
];