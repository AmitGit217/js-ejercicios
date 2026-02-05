const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
];
function repeatCounter() {
    const foundedWords = {}
    counterWords.forEach(word => {
        foundedWords[word] = (foundedWords[word] || 0) + 1;
    });
    return foundedWords ? foundedWords : false;
}

repeatCounter();