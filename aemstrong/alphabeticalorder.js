
let string = prompt('Enter a sentence: ');

let words = string.split(' ');

words.sort();
document.write('The sorted words are:');

for (let element of words) {
  document.write(element);
}