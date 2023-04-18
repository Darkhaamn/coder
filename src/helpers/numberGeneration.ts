import { numberGenerationType } from "../types/helpers/numberGeneration";

export const numberGeneration: numberGenerationType = (num: number) => {
  const arrNum: number[] = [];
  for (let i = 1; i <= num; i++) {
    arrNum.push(i);
  }

  return arrNum;
};
