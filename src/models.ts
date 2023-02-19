export interface IButtonData {
  id: number,
  icon: string,
  backgroundImg: string,
  soundFile: string,
  isSelected: boolean,
}

export interface ISoundButton extends IButtonData {
  parentElem: HTMLElement,
  toggleIsSelected: () => this;
  audioStop: () => this;
  togglePauseIcon: () => this;
  onClick: () => void;
  changeVolume: (a: number) => this;
  render: () => this;
}