function getLuckyGem(birthMonth) {
  const gems = [
    'offset',
    'Garnet',
    'Amethyst',
    'Aquamarine',
    'Diamond',
    'Emerald',
    'Pearl',
    'Ruby',
    'Peridot',
    'Sapphire',
    'Opal',
    'Topaz',
    'Turquoise'
  ];
  if (gems[birthMonth]) {
    return gems[birthMonth];
  } else {
    throw new Error('Invalid birth Month');
  }
}

let myGem;
try {
  // statements to try
  myGem = getLuckyGem(13); // function could throw exception
} catch (error) {
  myGem = 'unknown';
  console.error(error.message);
}

console.log(`My Gem is ${myGem}.`);
