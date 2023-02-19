export const setBackground = (element: HTMLElement, backgroundImg: string) => {
  element.style.backgroundImage = `url(${backgroundImg})`;
  element.style.backgroundRepeat = "no-repeat";
};