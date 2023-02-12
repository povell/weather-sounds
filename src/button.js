import { setBackground } from './utils';
import { pauseIcon } from './data';

export class ButtonsListItem {
  constructor({
    id,
    title, 
    icon, 
    backgroundImg, 
    soundFile, 
    isSelected,
    parentElem,
  }) {
    this.id = id;
    this.title = title;
    this.icon = icon;
    this.backgroundImg = backgroundImg;
    this.soundFile = soundFile;
    this.isSelected = isSelected;
    this.parentElem = parentElem;
    this.audio = new Audio(soundFile);
    this.audio.loop = true;
    this.iconElement = null;
  }

  getId() {
    return this.id;
  }

  toggleIsSelected() {
    this.isSelected = !this.isSelected;
  }

  audioStop() {
    this.audio.currentTime = 0;
    this.audio.pause();
  }

  togglePauseIcon() {
    if (this.isSelected && this.iconElement) {
      setBackground(this.iconElement, pauseIcon);
    } else {
      setBackground(this.iconElement, this.icon);
    }
  }

  onClick() {
    if (this.isSelected) {
      this.audio.pause();
      this.togglePauseIcon();
      this.isSelected = false;
    } else {
      this.audio.play();
      this.togglePauseIcon();
      this.isSelected = true;
    }
  }

  changeVolume(value) {
    this.audio.volume = value;
  }

  render() {
    // кнопка
    const element = document.createElement('button');
    element.setAttribute('id', this.id);
    element.className = 'buttons-list_item';
    setBackground(element, this.backgroundImg);

    // иконка
    this.iconElement = document.createElement('div');
    this.iconElement.className = 'buttons-list_icon';
    setBackground(this.iconElement, this.icon);

    element.append(this.iconElement);

    // element.append(rangeVolumeElement);
    this.parentElem.append(element);
  }
}