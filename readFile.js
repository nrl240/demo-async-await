const fs = require('fs');
const chalk = require('chalk');

/* Async Operation: Reading/Writing from files */

console.log('Line 6  >> Getting Configuration');

fs.readFile('./readMe.csv', 'utf8', (err, data) => {
  if (data) {
    console.log('Line 10 >> File contains…');
    console.log(chalk.yellow(data));
  } else {
    console.error('Line 13 >> Error!');
    console.log(chalk.red(err));
  }
});

console.log('Line 18 >> Moving on…');
