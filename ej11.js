const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(param) {
    const numbers = param.filter(el => typeof el === 'number');
    const words = param.filter(el => typeof el === 'string');
    const averageNumbers = numbers.reduce((acc, el) => acc + el, 0) / numbers.length;
    const averageWords = words.reduce((acc, el) => acc + el.length, 0) / words.length;
    return averageNumbers + averageWords;

}