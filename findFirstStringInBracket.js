function findFirstStringInBracket(str = '') {
  if (!str.length) {
    return '';
  }

  const result = str.split('(').slice(1).join('').split(')')[0];

  return result;
}

console.log(findFirstStringInBracket(`function findFirstStringInBracket(str){ if(str.length > 0){
  let indexFirstBracketFound = str.indexOf("("); if(indexFirstBracketFound >= 0){
  let wordsAfterFirstBracket = str.substr( indexFirstBracketFound ); if(wordsAfterFirstBracket){
  wordsAfterFirstBracket = wordsAfterFirstBracket.substr(1);
  let indexClosingBracketFound = wordsAfterFirstBracket.indexOf(")"); if(indexClosingBracketFound >= 0){
  return wordsAfterFirstBracket.substring(0, indexClosingBracketFound);
  } else{
  return ''; }
  }else{ return '';
  } }else{
  return ''; }
  }else{ return '';
  }
  }`))