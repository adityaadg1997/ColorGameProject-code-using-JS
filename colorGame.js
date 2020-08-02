var numSquares = 6;
var colors = [];
var colorPicked;  
var square = document.querySelectorAll(".square");           
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".mode");

init();

function init(){
  setupModeButtons();
  setupSquares();
  reset();
}


function setupModeButtons(){
  for(var i=0; i<modeButton.length; i++){
    modeButton[i].addEventListener("click",function(){
      modeButton[0].classList.remove("selected");
      modeButton[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "EASY"? numSquares=3: numSquares=6;
      reset();
    });
  }
}


function setupSquares(){
  for(var i=0; i<square.length; i++){
    square[i].addEventListener("click",function(){    
      var clickedColor = this.style.backgroundColor; 
      if(clickedColor === colorPicked){
        messageDisplay.textContent="correct!!";
        resetButton.textContent = "Play Again?";
        changeColor(clickedColor);
        h1.style.backgroundColor = clickedColor; 
      }else{
        messageDisplay.textContent="Try Again";
        this.style.backgroundColor="#232323";
      }
    });
  }
}


function reset(){
  colors = generateRandomColors(numSquares);
  colorPicked = pickColor(); 
  colorDisplay.textContent = colorPicked;
  resetButton.textContent = "New Colors"

  messageDisplay.textContent = " ";

  for( var i=0; i<square.length; i++){
      if(colors[i]){
        square[i].style.display= "block";
        square[i].style.background = colors[i];
      } else{
        square[i].style.display = "none";
      }
  }
  h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click",function(){
  reset();
});

function changeColor(color){
  for(var i=0; i<square.length; i++){
    square[i].style.backgroundColor = color; 
  }
}


function pickColor(){
var random = Math.floor( Math.random() * colors.length);
return colors[random];
}


function generateRandomColors(num){
  var arr = [];
  for (var i=0; i<num; i++){
    arr.push(randomColor());

  }
  return arr;
}
function randomColor(){
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" +r+ ", " +  +g+ ", " +b+")";
}