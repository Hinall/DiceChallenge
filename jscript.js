var randomNumber1=Math.floor((Math.random() * 5) + 1);
var src1="images/dice"+randomNumber1+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",src1);



var randomNumber2=Math.floor((Math.random() * 5) + 1);
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2 );


if(randomNumber1>randomNumber2){
document.querySelector("h1").innerHTML="player1 wins";
}
else if(randomNumber1<randomNumber2)
{
    document.querySelector("h1").innerHTML="player2 wins";
}
else
{
     document.querySelector("h1").innerHTML="draw";
}