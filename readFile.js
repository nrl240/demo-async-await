const fs = require('fs');
const chalk = require('chalk');

console.log('Line 3  >> Getting Configuration');

fs.readFile('./readMe.csv', 'utf8', (err, data) => {
  if (data) {
    console.log('Line 8  >> File contains…');
    console.log(chalk.yellow(data));
  } else console.error('Line 7  >> err:', err);
});

console.log('Line 10 >> Moving on…');
