// if, short if

alert('Hello, help us to do some maths: (a*a)+(2*a*b)-(b*b)=?');

var a = prompt('Enter value a'),
    b = prompt('Then put value b'),
    value = (a * a) + (2 * a * b) - (b * b);

alert('Check console for results!');

console.log('The result of our operation is ' + value + '.');

if (value > 0) {
    console.log('Positive result!');	
} else if (value < 0) {
    console.log('Negative result!');	
}

(value == 0) ? console.log('The result is 0!') : console.log('The result is different to 0!');


