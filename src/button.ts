import { setBackground } from './utils';
import { pauseIcon } from './data';
import { ISoundButton } from 'models';

export class ButtonsListItem implements ISoundButton {
  private audio: HTMLAudioElement;
  private iconElement?: HTMLElement | null;
  constructor(
    public id: number,
    public icon: string, 
    public backgroundImg: string, 
    public soundFile: string, 
    public isSelected: boolean,
    public parentElem: HTMLElement,
  ) {
    this.audio = new Audio(soundFile);
    this.audio.loop = true;
    this.iconElement = null;
  }

  toggleIsSelected() {
    this.isSelected = !this.isSelected;
    return this;
  }

  audioStop() {
    this.audio.currentTime = 0;
    this.audio.pause();
    return this;
  }

  togglePauseIcon() {
    if (this.isSelected && this.iconElement) {
      setBackground(this.iconElement, pauseIcon);
    } else {
      setBackground(this.iconElement as HTMLElement, this.icon);
    }
    return this;
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

  changeVolume(value: number) {
    this.audio.volume = value;
    return this;
  }

  render() {
    // кнопка
    const element = document.createElement('button');
    element.setAttribute('id', `${this.id}`);
    element.className = 'buttons-list_item';
    setBackground(element, this.backgroundImg);

    // иконка
    this.iconElement = document.createElement('div');
    this.iconElement.className = 'buttons-list_icon';
    setBackground(this.iconElement, this.icon);

    element.append(this.iconElement);

    // element.append(rangeVolumeElement);
    this.parentElem.append(element);
    return this;
  }
}