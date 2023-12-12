import { atom } from 'nanostores';

export const isHide = atom<boolean>(false);
export const onTop = atom<boolean>(false);

export const currentHeight = atom(0);
