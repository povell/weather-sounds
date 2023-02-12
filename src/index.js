import { buttons } from './data';
import { ButtonsListItem } from './button';
import { setBackground } from './utils';
import './styles/index.scss';

const buttonsListArray = [];
let currentButtonId;
let currentVolume = 1;
const listContainer = document.querySelector('.buttons-list');
const mainContainer = document.querySelector('.main_container');

const onListClick = (event) => {
  if (event.target && event.target.nodeName.toLowerCase() === 'button'){
    event.stopPropagation();

    const buttonIns = buttonsListArray.find(el => el.id === +event.target.id);
    if (buttonIns.id !== currentButtonId) {
      stopAllAudio();
      changeMainBackground(buttonIns.backgroundImg);
      resetAllIsSelected();
    }
    currentButtonId = +event.target.id;
    buttonIns.changeVolume(currentVolume);
    buttonIns.onClick();
  }
};

listContainer.addEventListener( "click" , onListClick, true);

function changeMainBackground(backgroundImg) {
  setBackground(mainContainer, backgroundImg);
};

function resetAllIsSelected() {
  buttonsListArray.forEach((button) => {
    button.isSelected = false;
    button.togglePauseIcon();
  });
}

function stopAllAudio() {
  buttonsListArray.forEach((button) => {
    button.audioStop();
  });
}

function render() {
  // Блок с кнопками
  buttons.forEach((buttonData) => {
    if (buttonData.isSelected) {
      setBackground(mainContainer, buttonData.backgroundImg);
    }
  
    const button = new ButtonsListItem(
      { 
        ...buttonData, 
        parentElem: listContainer,
      }
    );
    buttonsListArray.push(button);
    button.render();
  });

  // настройка громкости
  const rangeVolumeElementWrapper = document.createElement('div');
  const rangeVolumeElement = document.createElement('input');
  rangeVolumeElement.setAttribute('type', 'range');
  rangeVolumeElement.setAttribute('min', '0');
  rangeVolumeElement.setAttribute('max', '100');
  rangeVolumeElement.setAttribute('step', '1');
  rangeVolumeElement.setAttribute('value', '100');
  rangeVolumeElement.className = 'range-volume';
  rangeVolumeElement.onchange = (event) => {
    currentVolume = event.target.value/100;
    const currentButtonIns = buttonsListArray.find(el => el.id === currentButtonId);
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