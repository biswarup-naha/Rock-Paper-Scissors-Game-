const score=JSON.parse(localStorage.getItem("score")) || {
        wins:0,
        losses:0,
        ties:0
    }
// if(score==='null'){
//     score={
//         wins:0,
//         losses:0,
//         ties:0
//     }
// }
let compMove='';
let result='';

function playGame(playerMove){
    compMove=pickComputerMove();
    
    if(playerMove==='scissors'){
        if(compMove==='scissors'){
            result='tie'
        }
        else if(compMove==='rock'){
            result='lose'
        }
        else{
            result = 'win'
        }
        }

        if(playerMove==='paper'){
            if(compMove==='paper'){
            result='tie'
        }
        else if(compMove==='scissors'){
            result='lose'
        }
        else{
            result = 'win'
        }
        }


        if(playerMove==='rock'){
                    if(compMove==='rock'){
            result='tie'
        }
        else if(compMove==='paper'){
            result='lose'
        }
        else{
            result = 'win'
        }
        }
        
        // alert(`You picked ${playerMove}, the computer picked ${compMove}. Result: ${result.toUpperCase()}`)

        if(result==='win'){
            score.wins++;
        }
        if(result==='lose') score.losses++;
        if(result==='tie') score.ties++;
        
        localStorage.setItem('score',JSON.stringify(score))
        // console.log(score)

        displayScore()
        document.querySelector('.js-moves').innerHTML=`Player: ${playerMove} || Computer: ${compMove}`;
    }

function pickComputerMove(){
    const randN=Math.random();
    
    if(randN>=0 && randN<1/3){
        compMove='rock'
    }
    else if(randN>=1/3 && randN<2/3){
        compMove='paper'
    }
    else if(randN>=2/3 && randN<1){
        compMove='scissors'
    }

    return compMove;
}

function handleReset(){
    score.wins=0,
    score.losses=0,
    score.ties=0
    // console.log(score)
    localStorage.removeItem('score')
    displayScore()
}
const displayScore=()=>{
    document.querySelector('.js-score').innerHTML= `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`; 
}

