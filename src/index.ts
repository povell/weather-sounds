import { buttons } from './data';
import { ButtonsListItem } from './button';
import { setBackground } from './utils';
import { IButtonData, ISoundButton } from './models';
import './styles/index.scss';

const buttonsListArray: ISoundButton[] = [];
let currentButtonId: number;
let currentVolume: number = 1;
const listContainer: HTMLElement = document.querySelector('.buttons-list')!;
const mainContainer: HTMLElement = document.querySelector('.main_container')!;

const onListClick = (event:MouseEvent) => {
  const target = event.target as HTMLElement;
  if (target && target.nodeName.toLowerCase() === 'button'
    ){
    event.stopPropagation();

    const buttonId: string = target.id;
    const buttonIns: ISoundButton | undefined = buttonsListArray.find((el: IButtonData) => el.id === +buttonId);
    if (!buttonIns) {
      return;
    }
    
    if (buttonIns.id !== currentButtonId) {
      stopAllAudio();
      changeMainBackground(buttonIns.backgroundImg);
      resetAllIsSelected();
      buttonIns.changeVolume(currentVolume);
      currentButtonId = +buttonId;
    }

    buttonIns.onClick();
  }
};

listContainer.addEventListener( "click" , onListClick, true);

function changeMainBackground(backgroundImg: string) {
  setBackground(mainContainer, backgroundImg);
};

function resetAllIsSelected() {
  buttonsListArray.forEach((button: ISoundButton) => {
    button.isSelected = false;
    button.togglePauseIcon();
  });
}

function stopAllAudio() {
  buttonsListArray.forEach((button: ISoundButton) => {
    button.audioStop();
  });
}

function render() {
  // Блок с кнопками
  buttons.forEach((buttonData) => {
    if (buttonData.isSelected) {
      setBackground(mainContainer as HTMLElement, buttonData.backgroundImg as string );
    }

    const { id, icon, backgroundImg, soundFile, isSelected } = buttonData;
  
    const button = new ButtonsListItem(
      id,
      icon,
      backgroundImg,
      soundFile,
      isSelected,
      listContainer,
    );
    buttonsListArray.push(button);
    button.render();
  });

  // настройка громкости
  const rangeVolumeElementWrapper = document.createElement('div');
  const rangeVolumeElement: HTMLInputElement = document.createElement('input')!;
  rangeVolumeElement.setAttribute('type', 'range');
  rangeVolumeElement.setAttribute('min', '0');
  rangeVolumeElement.setAttribute('max', '100');
  rangeVolumeElement.setAttribute('step', '1');
  rangeVolumeElement.setAttribute('value', '100');
  rangeVolumeElement.className = 'range-volume';
  rangeVolumeElement.onchange = (event) => {
    const target = event.target as HTMLInputElement;
    currentVolume = +target.value/100;
    
    const currentButtonIns = buttonsListArray.find((el: ISoundButton) => el.id === currentButtonId);
    if (currentButtonIns) {
      currentButtonIns.changeVolume(currentVolume);
    }
  }
  rangeVolumeElementWrapper.appendChild(rangeVolumeElement);
  mainContainer.appendChild(rangeVolumeElement);

  // начальный фон
  if (buttonsListArray && buttonsListArray.length > 0) {
    changeMainBackground(buttonsListArray[0].backgroundImg);
  }
}

render();