alert ('Welcome to the score keeper app');
var btn1 = document.querySelector ('button');
var btn2 = document.getElementsByTagName ('button')[1];
var rset = document.getElementsByTagName('button')[2];
var ply1Display = document.querySelector('#ply1');
var ply2Display = document.querySelector('#ply2');
var ply1Score = 0;
var ply2Score = 0;
var input = document.querySelector('input[type="number"]');
var winningScoreDisplay = document.querySelector('p span');
var winningScore = 5;
var gameOver = false;

//<====Adds an event for the input box====>//
input.addEventListener('change', function () {
    winningScoreDisplay.textContent = this.value;
    winningScore = Number(this.value);
    reset();
})

//<=====This is the First Button====>//
btn1.addEventListener('click', function () {
    if (!gameOver){
        ply1Score += 1;
        ply1Display.textContent = (ply1Score);
        if (ply1Score === winningScore){
            alert ('GAME OVER!, Player one wins!');
            //<====var.classList (This adds css atrributes)  ====>//
            ply1Display.classList.add("win");
            gameOver = true;
        }
    }
});
//====>This is the second Button<====//
btn2.addEventListener('click', function(){
    if (!gameOver){
        ply2Score += 1;
        ply2Display.textContent = (ply2Score);
        if (ply2Score === winningScore) {
            alert('GAME OVER!, Player two wins!');
            ply2Display.classList.add("win");
            gameOver = true;
        }
    }
});
//<====This is the third button====>//
rset.addEventListener('click', function () {
    reset();
});

//<====Functions are place here====>//
function reset(){
    ply1Display.textContent = 0;
    ply1Score = 0;
    ply1Display.classList.remove('win')
    ply2Display.textContent = 0;
    ply2Score = 0;
    ply2Display.classList.remove('win')
    gameOver = false;
};

