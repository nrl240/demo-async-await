const fs = require('fs')

console.log('Getting Configuration')

fs.readFile('./readMe.js', 'utf8', (err, data) => {
  if (data) console.log('File contains:', data)
  else console.error(err)
})

console.log('Moving on…')
