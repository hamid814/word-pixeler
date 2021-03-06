const letters = {
  A: {
    name: 'A',
    cols: [
      [1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 1, 0, 0, 1],
      [0, 0, 0, 1, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1],
    ],
  },
  B: {
    name: 'B',
    cols: [
      [1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 1, 0, 0, 1],
      [1, 0, 0, 1, 0, 0, 1],
      [0, 1, 1, 0, 1, 1, 0],
    ],
  },
  C: {
    name: 'C',
    cols: [
      [1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 1],
      [1, 1, 0, 0, 0, 1, 1],
    ],
  },
  D: {
    name: 'D',
    cols: [
      [1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 1],
      [0, 1, 1, 1, 1, 1, 0],
    ],
  },
  E: {
    name: 'E',
    cols: [
      [1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 1, 0, 0, 1],
      [1, 0, 0, 1, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 1],
    ],
  },
  F: {
    name: 'F',
    cols: [
      [1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 1, 0, 0, 1],
      [0, 0, 0, 1, 0, 0, 1],
      [0, 0, 0, 0, 0, 0, 1],
    ],
  },
  G: {
    name: 'G',
    cols: [
      [1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 0, 0, 0, 1],
      [1, 1, 1, 0, 0, 1, 1],
    ],
  },
  H: {
    name: 'H',
    cols: [
      [1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 1],
    ],
  },
  I: {
    name: 'I',
    cols: [
      [1, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 1],
    ],
  },
  J: {
    name: 'J',
    cols: [
      [1, 1, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 1],
    ],
  },
  K: {
    name: 'K',
    cols: [
      [1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 1, 0, 0, 0],
      [0, 0, 1, 0, 1, 0, 0],
      [0, 1, 0, 0, 0, 1, 0],
      [1, 0, 0, 0, 0, 0, 1],
    ],
  },
  L: {
    name: 'L',
    cols: [
      [1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0],
    ],
  },
  M: {
    name: 'M',
    cols: [
      [1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 1],
      [0, 0, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1],
    ],
  },
  N: {
    name: 'N',
    cols: [
      [1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 1, 0, 0, 0],
      [0, 0, 1, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 1],
    ],
  },
  O: {
    name: 'O',
    cols: [
      [1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1],
    ],
  },
  P: {
    name: 'P',
    cols: [
      [1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 1, 0, 0, 1],
      [0, 0, 0, 1, 0, 0, 1],
      [0, 0, 0, 1, 1, 1, 1],
    ],
  },
  Q: {
    name: 'Q',
    cols: [
      [1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 0],
    ],
  },
  R: {
    name: 'R',
    cols: [
      [1, 1, 1, 1, 1, 1, 1],
      [0, 0, 1, 1, 0, 0, 1],
      [0, 1, 0, 1, 0, 0, 1],
      [1, 0, 0, 1, 1, 1, 1],
    ],
  },
  S: {
    name: 'S',
    cols: [
      [1, 0, 0, 1, 1, 1, 1],
      [1, 0, 0, 1, 0, 0, 1],
      [1, 0, 0, 1, 0, 0, 1],
      [1, 1, 1, 1, 0, 0, 1],
    ],
  },
  T: {
    name: 'T',
    cols: [
      [0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 0, 1],
    ],
  },
  U: {
    name: 'U',
    cols: [
      [1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 1],
    ],
  },
  V: {
    name: 'V',
    cols: [
      [0, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 1, 1],
    ],
  },
  W: {
    name: 'W',
    cols: [
      [1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 0, 0],
      [1, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 1],
    ],
  },
  X: {
    name: 'X',
    cols: [
      [1, 0, 0, 0, 1, 0, 0],
      [0, 1, 0, 1, 0, 0, 0],
      [0, 0, 1, 0, 0, 0, 0],
      [0, 1, 0, 1, 0, 0, 0],
      [1, 0, 0, 0, 1, 0, 0],
    ],
    // cols: [
    //   [0,0,0,1,0,0,0],
    //   [0,0,1,0,1,0,0],
    //   [1,0,0,0,1,0,0],
    //   [0,1,0,0,1,0,0],
    //   [0,0,1,1,1,0,0],
    //   [0,1,0,1,0,0,0],
    //   [1,0,0,0,1,0,0],
    // ]
  },
  Y: {
    name: 'Y',
    cols: [
      [0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 1, 0],
      [1, 1, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 1, 0],
      [0, 0, 0, 0, 0, 0, 1],
    ],
  },
  Z: {
    name: 'Z',
    cols: [
      [1, 0, 0, 0, 1, 0, 0],
      [1, 1, 0, 0, 1, 0, 0],
      [1, 0, 1, 0, 1, 0, 0],
      [1, 0, 0, 1, 1, 0, 0],
      [1, 0, 0, 0, 1, 0, 0],
    ],
  },
  space: {
    name: 'SPACE',
    cols: [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ],
  },
  1: {
    name: 'ONE',
    cols: [
      [1, 0, 0, 0, 0, 1, 0],
      [1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 0],
    ],
  },
  2: {
    name: 'TWO',
    cols: [
      [1, 0, 0, 0, 0, 1, 0],
      [1, 1, 0, 0, 0, 0, 1],
      [1, 0, 1, 0, 0, 0, 1],
      [1, 0, 0, 1, 1, 1, 0],
    ],
  },
  3: {
    name: 'THREE',
    cols: [
      [1, 1, 0, 0, 0, 1, 1],
      [1, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 1, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1],
    ],
  },
  4: {
    name: 'FOUR',
    cols: [
      [0, 0, 1, 1, 0, 0, 0],
      [0, 0, 1, 0, 1, 0, 0],
      [0, 0, 1, 0, 0, 1, 0],
      [1, 1, 1, 1, 1, 1, 1],
    ],
  },
  5: {
    name: 'FIVE',
    cols: [
      [1, 0, 0, 0, 1, 1, 1],
      [1, 0, 0, 0, 1, 0, 1],
      [1, 0, 0, 0, 1, 0, 1],
      [1, 1, 1, 1, 1, 0, 1],
    ],
  },
  6: {
    name: 'SIX',
    cols: [
      [1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 1, 0, 0, 1],
      [1, 0, 0, 1, 0, 0, 1],
      [1, 1, 1, 1, 0, 0, 1],
    ],
  },
  7: {
    name: 'SEVEN',
    cols: [
      [0, 0, 0, 0, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1],
    ],
  },
  8: {
    name: 'EIGHT',
    cols: [
      [1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 1, 0, 0, 1],
      [1, 0, 0, 1, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1],
    ],
  },
  9: {
    name: 'NINE',
    cols: [
      [1, 0, 0, 1, 1, 1, 1],
      [1, 0, 0, 1, 0, 0, 1],
      [1, 0, 0, 1, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1],
    ],
  },
  0: {
    name: 'ZERO',
    cols: [
      [0, 1, 1, 1, 1, 1, 0],
      [1, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 1],
      [0, 1, 1, 1, 1, 1, 0],
    ],
  },
  a: {
    name: 'HEART',
    cols: [
      [0, 0, 0, 1, 1, 1, 0],
      [0, 0, 1, 1, 1, 1, 1],
      [0, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 0],
      [0, 1, 1, 1, 1, 1, 1],
      [0, 0, 1, 1, 1, 1, 1],
      [0, 0, 0, 1, 1, 1, 0],
    ],
  },
  b: {
    name: 'square',
    cols: [
      [0, 0, 0, 1, 0, 0, 0],
      [0, 0, 1, 1, 1, 0, 0],
      [0, 1, 1, 1, 1, 1, 0],
      [1, 1, 1, 1, 1, 1, 1],
      [0, 1, 1, 1, 1, 1, 0],
      [0, 0, 1, 1, 1, 0, 0],
      [0, 0, 0, 1, 0, 0, 0],
    ],
  },
  c: {
    name: 'DOT',
    cols: [[1, 0, 0, 0, 0, 0, 0]],
  },
  d: {
    name: 'QUESTION MARK',
    cols: [
      [0, 0, 0, 0, 1, 1, 1],
      [1, 0, 1, 0, 0, 0, 1],
      [0, 0, 0, 1, 1, 1, 1],
    ],
  },
  e: {
    name: '! MARK',
    cols: [[1, 0, 1, 1, 1, 1, 1]],
  },
  f: {
    name: 'PIPE',
    cols: [[1, 1, 1, 1, 1, 1, 1]],
  },
  g: {
    name: 'SMILE_1',
    cols: [
      [0, 1, 1, 1, 1, 1, 0],
      [1, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 0, 1, 1],
      [1, 0, 1, 0, 0, 0, 1],
      [1, 0, 1, 0, 0, 0, 1],
      [1, 0, 1, 1, 0, 1, 1],
      [1, 0, 0, 0, 0, 0, 1],
      [0, 1, 1, 1, 1, 1, 0],
    ],
  },
  h: {
    name: 'SMILE_2',
    cols: [
      [1, 1, 1, 1, 1, 1, 1],
      [1, 1, 0, 0, 1, 0, 1],
      [1, 1, 0, 1, 1, 1, 1],
      [1, 1, 0, 1, 1, 1, 1],
      [1, 1, 0, 0, 1, 0, 1],
      [1, 1, 1, 1, 1, 1, 1],
    ],
  },
  i: {
    name: 'symbol',
    cols: [
      [0, 1, 1, 1, 1, 1, 0],
      [1, 0, 0, 0, 0, 0, 1],
    ],
  },
  j: {
    name: 'symbol',
    cols: [
      [1, 0, 0, 0, 0, 0, 1],
      [0, 1, 1, 1, 1, 1, 0],
    ],
  },
  l: {
    name: 'symbol',
    cols: [
      [1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 1],
    ],
  },
  m: {
    name: 'symbol',
    cols: [
      [1, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1],
    ],
  },
  n: {
    name: 'symbol',
    cols: [
      [0, 0, 0, 1, 0, 0, 0],
      [1, 1, 1, 0, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 1],
    ],
  },
  o: {
    name: 'symbol',
    cols: [
      [1, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 0, 1, 1, 1],
      [0, 0, 0, 1, 0, 0, 0],
    ],
  },
  p: {
    name: 'symbol',
    cols: [
      [1, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 0, 0, 0],
    ],
  },
  q: {
    name: 'symbol',
    cols: [
      [0, 0, 1, 0, 0, 0, 0],
      [0, 1, 1, 1, 0, 0, 0],
      [0, 0, 1, 0, 0, 0, 0],
    ],
  },
  r: {
    name: 'symbol',
    cols: [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 1, 0, 0, 0],
      [0, 1, 0, 1, 0, 0, 0],
      [0, 1, 0, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ],
  },
  s: {
    name: 'symbol',
    cols: [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0, 0, 0],
      [0, 0, 1, 0, 0, 0, 0],
      [0, 0, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ],
  },
  t: {
    name: 'symbol',
    cols: [
      [1, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0],
    ],
  },
  u: {
    name: 'symbol',
    cols: [
      [1, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 0],
    ],
  },
  v: {
    name: 'symbol',
    cols: [
      [0, 1, 1, 0, 0, 0, 0],
      [1, 0, 0, 1, 0, 1, 1],
      [1, 0, 0, 0, 1, 0, 1],
      [0, 1, 0, 1, 0, 1, 1],
      [0, 0, 1, 0, 0, 0, 0],
      [0, 1, 0, 1, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0],
    ],
  },
  w: {
    name: 'symbol',
    cols: [
      [0, 1, 0, 1, 0, 0, 0],
      [1, 1, 1, 1, 1, 0, 0],
      [0, 1, 0, 1, 0, 0, 0],
      [1, 1, 1, 1, 1, 0, 0],
      [0, 1, 0, 1, 0, 0, 0],
    ],
  },
};

const getLetters = (word) => {
  const array = word.toUpperCase().split('');

  const changed = array.map((letter) => {
    switch (letter) {
      case ' ':
        return 'space';
      case '♥':
        return 'a';
      case '♦':
        return 'b';
      case '.':
        return 'c';
      case '?':
        return 'd';
      case '!':
        return 'e';
      case '|':
        return 'f';
      case '☺':
        return 'g';
      case '☻':
        return 'h';
      case '(':
        return 'i';
      case ')':
        return 'j';
      case '[':
        return 'l';
      case ']':
        return 'm';
      case '{':
        return 'n';
      case '}':
        return 'o';
      case ',':
        return 'p';
      case '+':
        return 'q';
      case '=':
        return 'r';
      case '-':
        return 's';
      case '_':
        return 't';
      case '/':
        return 'u';
      case '&':
        return 'v';
      case '#':
        return 'w';
      default:
        return letter;
    }
  });

  return changed;
};

const getLetterWidth = (letter) => {
  return letters[letter].cols.length + 1;
};

const getWordWidth = (word) => {
  let wordLength = 0;

  const lettersWidth = getLetters(word).map((letter) => {
    return getLetterWidth(letter);
  });

  lettersWidth.forEach((width) => {
    wordLength = wordLength + width;
  });

  return wordLength;
};

const getWordArray = (word) => {
  return getLetters(word).map((letter) => letters[letter]);
};

export const getWordLights = (word) => {
  const emptyCol = [0, 0, 0, 0, 0, 0, 0];

  let allLights = [];

  getWordArray(word).forEach((letter) => {
    for (let i = 0; i < letter.cols.length; i++) {
      allLights = [...allLights, letter.cols[i]];
    }
    allLights = [...allLights, emptyCol];
  });

  return allLights;
};

export const getAnimationSteps = (panelLength, word) => {
  let steps = 0;

  steps = 2 + panelLength + getWordWidth(word);

  return steps;
};
