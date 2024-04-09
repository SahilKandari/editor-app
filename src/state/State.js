import { atom } from "recoil";

export const leftExpandState = atom({
  key: 'leftExpandState',
  default: false, 
});

export const rightExpandState = atom({
  key: 'rightExpandState',
  default: false, 
});

export const codeFiles = atom({
  key: 'codeFiles',
  default: [], 
});