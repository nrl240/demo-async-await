function syncroFunc(num) {
  console.log('INSIDE: Running syncroFunc...')

  while(num) {
    console.log(`INSIDE: ${num}`)
    num--
  }

  console.log('INSIDE: Stopping syncroFunc...')

  return 'Blast Off!'
}

console.log('OUTSIDE: About to run syncroFunc...')

let result = syncroFunc(5)

console.log(`OUTSIDE: syncroFunc(5) ran; result --> ${result}`)
