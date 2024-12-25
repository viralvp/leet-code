// some of positive
const temp = [1, -4, 7, 12];
const sumpos = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
};

console.log(sumpos(temp));
