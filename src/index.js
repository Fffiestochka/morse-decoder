const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
      let binaryArr10 = [];

      for (let i = 0; i < expr.length; i += 10) {
        binaryArr10.push(expr.slice(i, i + 10));
      }
      // console.log(binaryArr10); // [ '1111000011', '**********', '1100001111', '0000111100' ]
      for (let i = 0; i < binaryArr10.length; i++) {
        // перебираю каждое 10зн слово
        let index = binaryArr10[i].indexOf('1');
        if (index > -1) {
          let cutted = binaryArr10[i].slice(index);
          // console.log(cutted);
        }
      }
      let cuttedArr = binaryArr10.map((word10) => {
        if (word10 === '**********') {
          return ' ';
        } else {
          let index = word10.indexOf('1');
          // console.log(index);

          if (index > -1) {
            return word10.slice(index);
          }
        }
      });

      // console.log(cuttedArr); // [ '1111000011', ' ', '1100001111', '111100' ]

      let letterArr = cuttedArr.map((cuttedWord) => {
        if (cuttedWord.length > 1) {
          let binaryArr2 = []; // разбивка на пары символов
          for (let i = 0; i < cuttedWord.length; i += 2) {
            binaryArr2.push(cuttedWord.slice(i, i + 2));
          }
          // console.log(binaryArr2); // 1й - [ '11', '11', '00', '00', '11' ]

          let conversedArr = binaryArr2.map((pair) => {
            if (pair === '11') {
              return '-';
            } else if (pair === '10') {
              return '.';
            }
          });
          let morseWord = conversedArr.join('');
          // console.log(MORSE_TABLE[morseWord]);
          return MORSE_TABLE[morseWord];
        } else {
          return cuttedWord;
        }
      });
      // console.log(letterArr.join(''));
      return letterArr.join('');
}

module.exports = {
    decode
}