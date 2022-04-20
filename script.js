//Carousel

var i = 0
var images = []
var time = 3000

//image list

images[0] = "images/sale.jpg"
images[1] = "images/cyberpunk.png"
images[2] = "images/mario.jpg"

function changeImage() {
    document.slide.src = images[i]

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImage()", time);
}

window.onload = changeImage;

