
let last = parseInt(prompt('Enter a:'));
let first = parseInt(prompt('Enter b:'));

document.write ('Armstrong Numbers:');

for (let i = last; i <= first; i++) {

    let lines = i.toString().length;

    let sum = 0;

    let temp = i;

    while (temp > 0) {

        let remainder = temp % 10;
        sum += remainder ** lines;
        temp = parseInt(temp / 10); 
    }
 
    if (sum == i) {
        document.write(i);
    }
}