function phrase3words(vl1, vl2, vl3) {
    var p3wds = vl1 + ' ' + vl2 + ' ' + vl3;
    return p3wds;
}

console.log(phrase3words("I", "admire", "Chisato"))
console.log(phrase3words("I", "love", "programming"))
console.log(phrase3words("I", "am", "learning"))

function reformatName(pName, fName) {
    var reformName = fName + ', ' + pName;
    return reformName;
}

console.log(reformatName("Chiasato", "Nishikigi"));
console.log(reformatName("END-73", "Anonymous"));

const imuig = new Image();

function get2DandPixels() {
    var nOFpixels = this.width * this.height;
    console.log('Image Dimensions: ' + this.width + 'x' + this.height + '\n' + 'Number of pixels: ' + nOFpixels)
}
imuig.onload = get2DandPixels;
imuig.src = "./media/Chisatooo-0.jpg";
//this function is an evolution of the previous function inspired by stackoverflow, this function adds calculating the pixels in an image to the width and height

const imuiig = new Image();

function imgPerimeter() {
    var dperimeter = this.width * 2 + this.height *2;
    console.log('Image Perimeter: ' + dperimeter)
}

imuiig.onload = imgPerimeter;
imuiig.src = "./media/Chisatooo-0.jpg";
//this function displays the perimeter of an image (the number of pixels on the edge of an image)

var imagePaths = ['./media/Chisatooo-0.jpg', './media/nh_d15_1_10.jpg'];

function pixelARGB(wooow_an_imagePath) {
    var imuiiig = new Image();
    imuiiig.onload = function() {
        //creating a canvas
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');

        //setting the dimentions of the canvas (it should have the same width and height of the image)
        canvas.width = imuiiig.width;
        canvas.height = imuiiig.height;

        //drawing the image on the canvas
        context.drawImage(imuiiig, 0, 0);

        //getting the pixel data from the canvas
        var pixelData = context.getImageData(10, 10, 1, 1).data;
        var red = pixelData[0];
        var green = pixelData[1];
        var blue = pixelData[2];
        var alpha = pixelData[3];

        //output 
        console.log('Image: ' + wooow_an_imagePath + '\n' + 'The ARGB value of the pixel: ' + '\n' + 'Red: ' + red + '\n' + 'Green: ' + green + '\n' + 'Blue: ' + blue + '\n' + 'Alpha: ' + alpha);
    };
    imuiiig.src = wooow_an_imagePath;
}

//making the function functionality available for each selected image
imagePaths.forEach(function(wooow_an_imagePath)
{sumRGBpixel(wooow_an_imagePath)});
//this function displays the ARGB values of a given pixel in an image, or multiple images

var imagePaths = ['./media/Chisatooo-0.jpg', './media/nh_d15_1_10.jpg'];

function sumRGBpixel(wooow_an_imagePath) {
    var imuiiig = new Image();
    imuiiig.onload = function() {
        //creating a canvas
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');

        //setting the dimentions of the canvas (it should have the same width and height of the image)
        canvas.width = imuiiig.width;
        canvas.height = imuiiig.height;

        //drawing the image on the canvas
        context.drawImage(imuiiig, 0, 0);

        //getting the pixel data from the canvas
        var pixelData = context.getImageData(10, 10, 1, 1).data;
        var red = pixelData[0];
        var green = pixelData[1];
        var blue = pixelData[2];

        //sum of the pixel values
        var sumpixelRGB = red + green + blue;

        //output 
        console.log('Image: ' + wooow_an_imagePath + '\n' + 'The SUM of the RGB values of the pixel: ' + sumpixelRGB);
    };
    imuiiig.src = wooow_an_imagePath;
}

//making the function functionality available for each selected image
imagePaths.forEach(function(wooow_an_imagePath)
{pixelARGB(wooow_an_imagePath)});
//this function displays the sum (addition) of the RGB values of a given pixel in an image, or multiple images

