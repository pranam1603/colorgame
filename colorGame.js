var numSquares=6
var colors = generateRandomColors(numSquares);
var container=document.getElementById("container")
var squares=document.getElementsByClassName("square");
var pickedColor=pickColor();
var colorDisplay=document.getElementById("rgb");
colorDisplay.textContent=pickedColor;
var message=document.getElementById("message")
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");

easyBtn.addEventListener("click" ,function(){
  numSquares=3;
  colors = generateRandomColors(numSquares);
  easyBtn.classList.add("selected")
  hardBtn.classList.remove("selected")
  pickedColor=pickColor();
  h1.style.backgroundColor="steelblue"
  message.textContent=""
  colorDisplay.textContent=pickedColor
  for (let i = 0; i < squares.length; i++) {
      if(colors[i]){
            squares[i].style.backgroundColor=colors[i] 
      }
      else{
           squares[i].style.display="none" 
      }  
        }
});

hardBtn.addEventListener("click", function(){
  hardBtn.classList.add("selected")
  easyBtn.classList.remove("selected")
  numSquares=6;
  colors = generateRandomColors(numSquares);
  h1.style.backgroundColor="steelblue"
  pickedColor=pickColor();
  colorDisplay.textContent=pickedColor
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor=colors[i] 
    squares[i].style.display="block"
    message.textContent=""
  }
});

resetButton.addEventListener("click", function(){
    // generate color
    colors = generateRandomColors(numSquares);
    // pick color
    pickedColor=pickColor();
    // change color of squares
    for (i = 0; i < colors.length; i++) {
     squares[i].style.backgroundColor= colors[i];      
    }
    h1.style.backgroundColor="steelblue"
    resetButton.textContent="New Colors"
    colorDisplay.textContent=pickedColor
    message.textContent=""
});
for (i = 0; i < colors.length; i++) {
   squares[i].style.backgroundColor= colors[i];  
   squares[i].addEventListener("click", function(){
     
var clickedcolor=(this.style.backgroundColor)
if(clickedcolor === pickedColor){
    colorChange(clickedcolor);
    h1.style.backgroundColor=clickedcolor;
    message.textContent="Correct!"
    resetButton.textContent="Play Again?"
}
else{
    this.style.backgroundColor="#232323"
    message.textContent="TryAgain!"
}
});
}

function colorChange(color){
    for (i = 0; i < squares.length; i++) {
      squares[i].style.backgroundColor= color
    }
}

function pickColor(){
   var random = Math.floor(Math.random() *colors.length);
    return colors[random]
}

function generateRandomColors(num){
var array= [];   

    for (i = 0; i < num; i++) {
    array.push(makeColor());
    }
    return array;
}

function makeColor(){
    // make red from 0-255
   var r=Math.floor(Math.random() * 256)  
    // make green from 0-255
   var g=Math.floor(Math.random() * 256)  
    // make blue from 0-255
   var b=Math.floor(Math.random() * 256)  
return "rgb("+r + ", " + g + ", " +b+")"
}