const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
  return param.reduce((acc, el) => acc + el, 0) / param.length;
}