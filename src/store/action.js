import {Addition, Assign, Subtraction} from './type';

export const Add = (id,l) => {
  return {type: Addition, id:id,l: l};

};
export const Sub = (id,l) => {
  return {type: Subtraction,id:id,l: l};
};

export const AssignValue = (num, id) => {
  return {type: Assign, num: num, id: id};
};

export const importArray = (arr) => {
  return {type: 'array', arr: arr};
};
