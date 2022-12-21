'use strict'
let hiddenNumber = Math.trunc(Math.random() * 20) + 1;

let score = 4;

document.querySelector('.check').addEventListener
('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess)

    //WHEN THERE IS INPUT
    if(!guess){
        document.querySelector('.message').textContent = 'Input Number please';

        //WHEN PLAYER WIN
    }else if(guess === hiddenNumber){
        document.querySelector('.number').textContent = hiddenNumber;
        document.querySelector('.message').textContent = 'Yeah!! You get it !'; 
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.fontSize ='20rem';
        document.querySelector('.number').style.color ='white';
        document.querySelector('h1').textContent = 'YEAH !, YOU GET IT !!!';
        document.querySelector('h1').style.color = 'white';
        document.querySelector('h1').style.fontSize = '8rem';
        document.querySelector('.right').style.display = 'none';
        document.querySelector('.left').style.display = 'none';
        document.querySelector('.between').style.display = 'none';
    

        //WHEN GUESS IS HIGHER THAN HIDDEN NUMBER
    }else if(guess > hiddenNumber){
        if( score >= 1 ) {
            document.querySelector('.score').textContent = score;
            score--;
            document.querySelector('.message').textContent = 'Too high';
        }else{
            document.querySelector('.message').textContent = 'You lost the game';
            document.querySelector('.score').textContent = 0;
        }

        //WHEN GUESS IS LOWER THAN HIDDEN NUMBER
    }else if(guess < hiddenNumber){
        if( score >= 1 ) {
            document.querySelector('.score').textContent = score;
            score--;
            document.querySelector('.message').textContent = 'Too low';
        }else{
            document.querySelector('.message').textContent = 'You lost the game';
            document.querySelector('.score').textContent = 0;
            document.querySelector('h1').textContent = 'OH NO!, YOU LOST IT !!!';
            document.querySelector('h1').style.color = 'RED';
            document.querySelector('h1').style.fontSize = '8rem';
        }
    }
})

document.querySelector('.again').addEventListener
('click', function(){
    score = 5;
    hiddenNumber = Math.trunc(Math.random() * 20 ) + 1;
})