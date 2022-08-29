export const swapArrayLocs = (arr, from, to) => {
  const tempArray = [...arr];
  [tempArray[from], tempArray[to]] = [tempArray[to], tempArray[from]];
  return tempArray;
};
