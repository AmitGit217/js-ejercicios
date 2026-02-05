const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
  return param.reduce((acc, curr) => acc + curr, 0);
}