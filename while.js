function syncroFunc(num) {
  console.log('Line 2  >> INSIDE:  Running syncroFunc...');

  while (num) {
    console.log(`Line 5  >> INSIDE:  ${num}`);
    num--;
  }

  console.log('Line 9  >> INSIDE:  Stopping syncroFunc...');

  return 'Blast Off!';
}

console.log('Line 14 >> OUTSIDE: About to run syncroFunc...');

let result = syncroFunc(5);

console.log(`Line 18 >> OUTSIDE: syncroFunc(5) ran; result --> ${result}`);
