'use strict';

let inputMaxScore = document.getElementsByClassName("maxScore");
let resetButton = document.getElementsByClassName("reset");
let scoreInput = document.getElementsByClassName("score");
let scoreContainer = document.getElementsByClassName("scorecontainer");
let scoreMaxSave = document.getElementsByClassName("save");
let buttonAdd=document.getElementsByClassName('add');
let maxScore = inputMaxScore[0].value ;
let scorePlayer1 = 0;
let scorePlayer2 = 0;
event();

function event (){
	scoreMaxSave[0].addEventListener('click',function(){
		if(scorePlayer1 == 0 && scorePlayer2 == 0){
			maxScore = inputMaxScore[0].value;
		}
		inputMaxScore[0].value =maxScore;
	});

	resetButton[0].addEventListener("click",function(){
		scorePlayer1 = 0;
		scorePlayer2 = 0;
		scoreInput[0].value = 0
		scoreInput[1].value = 0;
		hiddenScore();
	});

	for (var i = 0; i < buttonAdd.length ; i++) {
		buttonAdd[i].addEventListener('click',function(){
			countScore(this);
			winner();
		});
	}
}


function countScore(button){
	let player = button.dataset.player;
	if(scorePlayer1 != maxScore && scorePlayer2!= maxScore)
	{
		if(player == 1)
		{
			scorePlayer1 ++;
		}
		else
		{			
			scorePlayer2 ++;
		}
		scoreInput[0].value = scorePlayer1
		scoreInput[1].value = scorePlayer2;
	}
}

function winner(){
	if(scorePlayer1 == maxScore){
		scoreContainer[0].classList.add("winner");
		scoreContainer[1].classList.add("looser");
		displayScore();
	}
	else if (scorePlayer2 == maxScore){
		scoreContainer[1].classList.add("winner");
		scoreContainer[0].classList.add("looser");
		displayScore();
	}
}

function displayScore(){	
	scoreContainer[0].style.display = "block";
	scoreContainer[1].style.display = "block";
}

function hiddenScore(){
	for (var i = 0; i < scoreContainer.length ; i++) {
		scoreContainer[i].classList.remove("winner")
		scoreContainer[i].classList.remove("looser")
		scoreContainer[i].style.display = "none";
	}	
}





