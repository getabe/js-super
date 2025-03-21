
      //parse it back to object by json.parse and start scoring from the previous score
      let score = JSON.parse(localStorage.getItem('score')) || {
        wins: 0,
        loses: 0,
        ties: 0
        };

        updateScoreElement();
      //if score is null from local storage let us assign a default value
      /*if(!score){
        score = {
        wins: 0,
        loses: 0,
        ties: 0
        }
      }*/
     let isAutoPlaying = false;
     let intervalId;

      function autoPlay(){
        if(!isAutoPlaying){
          intervalId = setInterval(function(){
            const playerMove = pickComputerMove();
            playGame(playerMove);
          }, 1000);
          isAutoPlaying = true;
        }else{
          clearInterval(intervalId);
          isAutoPlaying = false;
        }
      }
      //event listner for buttons
      document.querySelector('.js-rock-button').addEventListener('click', ()=>{
        playGame('rock');
      });

      document.querySelector('.js-paper-button').addEventListener('click', ()=>{
        playGame('paper');
      });

      document.querySelector('.js-scissors-button').addEventListener('click', ()=>{
        playGame('scissors');
      });

      document.body.addEventListener('keydown', (event)=>{
        if(event.key ==='r' || event.key === 'R'){
          playGame('rock');
        }
        else if(event.key ==='p' || event.key === 'P'){
          playGame('paper');
        }else if(event.key === 's' || event.key === 'S'){
          playGame('scissors');
        }
      })

      function playGame(playerMove) {
        const computerMove = pickComputerMove();

        let result = '';

        if (playerMove === 'scissors') {
          if (computerMove === 'rock') {
            result = 'You lose.';
          } else if (computerMove === 'paper') {
            result = 'You win.';
          } else if (computerMove === 'scissors') {
            result = 'Tie.';
          }

        } else if (playerMove === 'paper') {
          if (computerMove === 'rock') {
            result = 'You win.';
          } else if (computerMove === 'paper') {
            result = 'Tie.';
          } else if (computerMove === 'scissors') {
            result = 'You lose.';
          }
          
        } else if (playerMove === 'rock') {
          if (computerMove === 'rock') {
            result = 'Tie.';
          } else if (computerMove === 'paper') {
            result = 'You lose.';
          } else if (computerMove === 'scissors') {
            result = 'You win.';
          }
        }
        //update the result
        if(result === 'You win.'){
          score.wins += 1;
        }
        else if(result ==='You lose.'){
          score.loses += 1;
        }
        else if(result ==='Tie.'){
          score.ties +=1;
        }


        //keep a a previous score after refresh the page
        localStorage.setItem('score', JSON.stringify(score));

        //to update the score
        updateScoreElement();

        //display the result
        document.querySelector('.js-result').innerHTML = result;

        //display the moves
        document.querySelector('.js-moves').innerHTML = `You
        <img src="images/${playerMove}-emoji.png" class="move-icon">
        <img src="images/${computerMove}-emoji.png" class="move-icon">
        Computer`;
        
        //alert the result
       /*alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
        Wins: ${score.wins}, Loses: ${score.loses}, Ties: ${score.ties}`); */
      }

      function updateScoreElement(){
        document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Loses: ${score.loses}, Ties: ${score.ties}`;
      }

      function pickComputerMove() {
        const randomNumber = Math.random();

        let computerMove = '';

        if (randomNumber >= 0 && randomNumber < 1 / 3) {
          computerMove = 'rock';
        } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
          computerMove = 'paper';
        } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
          computerMove = 'scissors';
        }

        return computerMove;
      }
      
     setInterval(function(){

     })
    