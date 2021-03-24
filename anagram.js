function sortWord(word = '') {
  return word.split('').sort().join('');
}

function orderAnagram(input = []) {
  const anagramList = {};

  for (let word of input) {
    const sorted = sortWord(word);
    if (!anagramList[sorted]) {
      anagramList[sorted] = [word];
    } else {
      anagramList[sorted].push(word);
    }
  }

  return Object.values(anagramList);
}

console.log(orderAnagram(['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']));