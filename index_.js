var randomNumber1=Math.floor(Math.random()*6)+1;
var randomImageNum="dice"+randomNumber1+".png";
var randomImagesrc="images/"+randomImageNum;
var image1=document.querySelectorAll("img")[0];  //to select first image ele
image1.setAttribute("src",randomImagesrc);  //change the image attribute from src to new src
var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImageNum="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImageNum);
//image2.setAttribute("src",randomImagesrc);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="😀player 1 wins";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="😀player 2 wins";
}
else {
    document.querySelector("h1").innerHTML="Draw!";
}
// alert("heyy");