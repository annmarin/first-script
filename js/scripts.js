// calculating a field of an isosceles triangle

alert('Hello, let\'s calculate an isosceles triangle area!');

var a = prompt('Enter the length of the triangle base.'),
	h = prompt('We also need the height of our triangle.'),
	triangleArea = a*h/2;

alert('The area of our triangle is ' + triangleArea + '!');

console.log('Triangle field with base a: ' + a + ' and height h: ' + h + ' is equal to: ' + triangleArea);