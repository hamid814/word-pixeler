const liht = 1; // = light
const dark = 0;

const letters = {
  A: {
    name: 'A',
    width: 4,
    height: 7,
    cols: [
      [liht,liht,liht,liht,liht,liht,liht],
      [dark,dark,dark,liht,dark,dark,liht],
      [dark,dark,dark,liht,dark,dark,liht],
      [liht,liht,liht,liht,liht,liht,liht]
    ]
  },
  B: {
    name: 'B',
    width: 4,
    height: 7,
    cols: [
      [liht,liht,liht,liht,liht,liht,liht],
      [liht,dark,dark,liht,dark,dark,liht],
      [liht,dark,dark,liht,dark,dark,liht],
      [dark,liht,liht,dark,liht,liht,dark]
    ]
  },
  C: {
    name: 'C',
    width: 4,
    height: 7,
    cols: [
      [liht,liht,liht,liht,liht,liht,liht],
      [liht,dark,dark,dark,dark,dark,liht],
      [liht,dark,dark,dark,dark,dark,liht],
      [liht,liht,dark,dark,dark,liht,liht]
    ]
  },
  D: {
    name: 'D',
    width: 4,
    height: 7,
    cols: [
      [liht,liht,liht,liht,liht,liht,liht],
      [liht,dark,dark,dark,dark,dark,liht],
      [liht,dark,dark,dark,dark,dark,liht],
      [dark,liht,liht,liht,liht,liht,dark]
    ]
  },
  E: {
    name: 'E',
    width: 4,
    height: 7,
    cols: [
      [liht,liht,liht,liht,liht,liht,liht],
      [liht,dark,dark,liht,dark,dark,liht],
      [liht,dark,dark,liht,dark,dark,liht],
      [liht,dark,dark,dark,dark,dark,liht]
    ]
  },
  F: {
    name: 'F',
    width: 4,
    height: 7,
    cols: [
      [liht,liht,liht,liht,liht,liht,liht],
      [dark,dark,dark,liht,dark,dark,liht],
      [dark,dark,dark,liht,dark,dark,liht],
      [dark,dark,dark,dark,dark,dark,liht]
    ]
  },
  G: {
    name: 'G',
    width: 4,
    height: 7,
    cols: [
      [liht,liht,liht,liht,liht,liht,liht],
      [liht,dark,dark,dark,dark,dark,liht],
      [liht,dark,liht,dark,dark,dark,liht],
      [liht,liht,liht,dark,dark,liht,liht]
    ]
  },
  H: {
    name: 'H',
    width: 4,
    height: 7,
    cols: [
      [liht,liht,liht,liht,liht,liht,liht],
      [dark,dark,dark,liht,dark,dark,dark],
      [dark,dark,dark,liht,dark,dark,dark],
      [liht,liht,liht,liht,liht,liht,liht]
    ]
  },
  I: {
    name: 'I',
    width: 3,
    height: 7,
    cols: [
      [liht,dark,dark,dark,dark,dark,liht],
      [liht,liht,liht,liht,liht,liht,liht],
      [liht,dark,dark,dark,dark,dark,liht],
    ]
  },
  J: {
    name: 'J',
    width: 4,
    height: 7,
    cols: [
      [liht,liht,dark,dark,dark,dark,dark],
      [liht,dark,dark,dark,dark,dark,liht],
      [liht,liht,liht,liht,liht,liht,liht],
      [dark,dark,dark,dark,dark,dark,liht],
    ]
  },
  K: {
    name: 'K',
    width: 5,
    height: 7,
    cols: [
      [liht,liht,liht,liht,liht,liht,liht],
      [dark,dark,dark,liht,dark,dark,dark],
      [dark,dark,liht,dark,liht,dark,dark],
      [dark,liht,dark,dark,dark,liht,dark],
      [liht,dark,dark,dark,dark,dark,liht],
    ]
  },
  L: {
    name: 'L',
    width: 4,
    height: 7,
    cols: [
      [liht,liht,liht,liht,liht,liht,liht],
      [liht,dark,dark,dark,dark,dark,dark],
      [liht,dark,dark,dark,dark,dark,dark],
      [liht,dark,dark,dark,dark,dark,dark],
    ]
  },
  M: {
    name: 'M',
    width: 7,
    height: 7,
    cols: [
      [liht,liht,liht,liht,liht,liht,liht],
      [dark,dark,dark,dark,dark,liht,dark],
      [dark,dark,dark,dark,liht,dark,dark],
      [dark,dark,dark,liht,dark,dark,dark],
      [dark,dark,dark,dark,liht,dark,dark],
      [dark,dark,dark,dark,dark,liht,dark],
      [liht,liht,liht,liht,liht,liht,liht],
    ]
  },
  N: {
    name: 'N',
    width: 5,
    height: 7,
    cols: [
      [liht,liht,liht,liht,liht,liht,liht],
      [dark,dark,dark,dark,liht,dark,dark],
      [dark,dark,dark,liht,dark,dark,dark],
      [dark,dark,liht,dark,dark,dark,dark],
      [liht,liht,liht,liht,liht,liht,liht],
    ]
  },
  O: {
    name: 'O',
    width: 4,
    height: 7,
    cols: [
      [liht,liht,liht,liht,liht,liht,liht],
      [liht,dark,dark,dark,dark,dark,liht],
      [liht,dark,dark,dark,dark,dark,liht],
      [liht,liht,liht,liht,liht,liht,liht],
    ]
  },
  P: {
    name: 'P',
    width: 4,
    height: 7,
    cols: [
      [liht,liht,liht,liht,liht,liht,liht],
      [dark,dark,dark,liht,dark,dark,liht],
      [dark,dark,dark,liht,dark,dark,liht],
      [dark,dark,dark,liht,liht,liht,liht],
    ]
  },
  Q: {
    name: 'Q',
    width: 4,
    height: 7,
    cols: [
      [liht,liht,liht,liht,liht,liht,liht],
      [liht,dark,dark,dark,dark,dark,liht],
      [liht,liht,liht,liht,liht,liht,liht],
      [liht,dark,dark,dark,dark,dark,dark],
    ]
  },
  R: {
    name: 'R',
    width: 4,
    height: 7,
    cols: [
      [liht,liht,liht,liht,liht,liht,liht],
      [dark,dark,liht,liht,dark,dark,liht],
      [dark,liht,dark,liht,dark,dark,liht],
      [liht,dark,dark,liht,liht,liht,liht],
    ]
  },
  S: {
    name: 'S',
    width: 4,
    height: 7,
    cols: [
      [liht,dark,dark,liht,liht,liht,liht],
      [liht,dark,dark,liht,dark,dark,liht],
      [liht,dark,dark,liht,dark,dark,liht],
      [liht,liht,liht,liht,dark,dark,liht],
    ]
  },
  T: {
    name: 'T',
    width: 5,
    height: 7,
    cols: [
      [dark,dark,dark,dark,dark,dark,liht],
      [dark,dark,dark,dark,dark,dark,liht],
      [liht,liht,liht,liht,liht,liht,liht],
      [dark,dark,dark,dark,dark,dark,liht],
      [dark,dark,dark,dark,dark,dark,liht],
    ]
  },
  U: {
    name: 'U',
    width: 4,
    height: 7,
    cols: [
      [liht,liht,liht,liht,liht,liht,liht],
      [liht,dark,dark,dark,dark,dark,dark],
      [liht,dark,dark,dark,dark,dark,dark],
      [liht,liht,liht,liht,liht,liht,liht],
    ]
  },
  V: {
    name: 'V',
    width: 4,
    height: 7,
    cols: [
      [dark,liht,liht,liht,liht,liht,liht],
      [liht,dark,dark,dark,dark,dark,dark],
      [liht,dark,dark,dark,dark,dark,dark],
      [dark,liht,liht,liht,liht,liht,liht],
    ]
  },
  W: {
    name: 'W',
    width: 7,
    height: 7,
    cols: [
      [liht,liht,liht,liht,liht,liht,liht],
      [dark,liht,dark,dark,dark,dark,dark],
      [dark,dark,liht,dark,dark,dark,dark],
      [dark,dark,dark,liht,dark,dark,dark],
      [dark,dark,liht,dark,dark,dark,dark],
      [dark,liht,dark,dark,dark,dark,dark],
      [liht,liht,liht,liht,liht,liht,liht],
    ]
  },
  X: {
    name: 'X',
    width: 5,
    height: 5,
    cols: [
      [liht,dark,dark,dark,liht,dark,dark],
      [dark,liht,dark,liht,dark,dark,dark],
      [dark,dark,liht,dark,dark,dark,dark],
      [dark,liht,dark,liht,dark,dark,dark],
      [liht,dark,dark,dark,liht,dark,dark],
    ]
  },
  Y: {
    name: 'Y',
    width: 5,
    height: 7,
    cols: [
      [dark,dark,dark,dark,dark,dark,liht],
      [dark,dark,dark,dark,dark,liht,dark],
      [liht,liht,liht,liht,liht,dark,dark],
      [dark,dark,dark,dark,dark,liht,dark],
      [dark,dark,dark,dark,dark,dark,liht],
    ]
  },
  Z: {
    name: 'Z',
    width: 5,
    height: 7,
    cols: [
      [liht,dark,dark,dark,liht,dark,dark],
      [liht,liht,dark,dark,liht,dark,dark],
      [liht,dark,liht,dark,liht,dark,dark],
      [liht,dark,dark,liht,liht,dark,dark],
      [liht,dark,dark,dark,liht,dark,dark],
    ]
  },
  space: {
    name: 'SPACE',
    width: 3,
    height: 7,
    cols: [
      [dark,dark,dark,dark,dark,dark,dark],
      [dark,dark,dark,dark,dark,dark,dark],
      [dark,dark,dark,dark,dark,dark,dark],
    ]
  },
  liht: {
    name: 'ONE',
    width: 3,
    height: 7,
    cols: [
      [liht,dark,dark,dark,dark,liht,dark],
      [liht,liht,liht,liht,liht,liht,liht],
      [liht,dark,dark,dark,dark,dark,dark],
    ]
  },
}

const getLetters = (word) => {
  const array = word.toUpperCase().split('')
  
  console.log('add numbers')
  
  const changed = array.map(letter => {
    const char = letter === ' '
      ? 'space'
      : letter
      
    return char
  })
  
  return changed
}

const getLetterWidth = letter => {
  return letters[letter].width + 1
}

const getWordWidth = word => {
  let wordLength = 0;
  
  const lettersWidth = getLetters(word).map(letter => {
    return getLetterWidth(letter)
  })

  lettersWidth.forEach(width => {
    wordLength = wordLength + width
  })

  return wordLength
}

const getWordArray = word => {
  return getLetters(word).map(letter => letters[letter])
}

export const getWordLights = word => {
  const emptyCol = [0,0,0,0,0,0,0]

  let allLights = [];

  getWordArray(word).forEach(letter => {
    for(let i = 0; i < letter.width; i++) {
      allLights = [...allLights, letter.cols[i]]
    }
    allLights = [...allLights, emptyCol]
  })

  return allLights
}

export const getAnimationSteps = (panelLength, word) => {
  let steps = 0;

  steps = 2 + panelLength + getWordWidth(word)

  return steps
}