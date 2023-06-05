var x = 5;
var y = 7;
var z = x*5 + y;

console.log(x + '\n' + y + '\n' + z);

x = 155;
y = y - 3;
z = z - (x / 5*y);

console.log(x + '\n' + y + '\n' + z);

var image = document.createElement("img");
"img".src="./media/Chisatooo-0.jpg";

console.log(image);

function square(x) {
    var reslt = x*x;
    return reslt;
}

var input = prompt("Enter a number to be squared:");
var number = parseFloat(input);

console.log(square(number));

function cube(y) {
    var reslt = y*y*y;
    return reslt;
}

console.log(cube(7));

n = square(7);

console.log(n);

function addition(b, c) {
    var added = b + c;
    return added;
}

console.log(addition(5, 4));

function staddition(e, f) {
    var stadded = e + f;
    return stadded;
}

var www = "www";
var iiiwww = "iiiwww";

console.log(staddition(www, iiiwww));

const imug = new Image();

function get2Ddimentions() {
    console.log(this.width + 'x' + this.height);
}
imug.onload = get2Ddimentions;
imug.src = "./media/intel-core-i9-13900K-review-01-550x309.jpg";
//the function above is the shortest possible function to get the width and height of an image in js (I borrowed it from a fellow coder in stack overflow)
