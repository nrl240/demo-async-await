const fs = require('fs')

console.log('Getting Configuration')

fs.readFile('./readMe.csv', 'utf8', (err, data) => {
  if (data) console.log('File contains:\n', data)
  else console.error(err)
})

console.log('Moving on…')
