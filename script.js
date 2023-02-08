console.log= ('A message to check the link');

function changeImage(){
    let image = document.getElementById("image1");
    if (image.scroll.match("image2")) {
        image.src = "image2";
    }
}
else {
    image.src = "image2";
}


//stolen code 

function changeImg() {
const mainImage = document.getElementById("image1");
const image1 = "./images/stanage.webp";
const image2 = "/images/more rocks.webp";

if (mainImage.src===image1){
    mainImage.src = image2;
    console.log(image2);

}

else {
    mainImage.src =image1;
    console.log(image1);
}
}


//stack overflow code ?

<img src="image1" onclick="this.src='image1'"></img>