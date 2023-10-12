export const cn = (...cNames: any): string =>
  cNames.filter(Boolean, String).join(' ');

export const createWrapperAndAppendToBody = (
  wrapperId: string
): HTMLDivElement => {
  const wrapperElement = document.createElement('div');
  wrapperElement.setAttribute('id', wrapperId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
};
