let playerPoints = 0;
let computerPoints = 0;

let computer 

function playGame(playerInput) {
    clearMessages();
    function getMoveName(argMoveId) {
        if(argMoveId == 1){
            return 'kamień'
        } else if(argMoveId == 2) {
            return 'papier';  
        } else if(argMoveId == 3) {
            return 'nożyce';
        }
    }
    
    let playerMove = getMoveName(playerInput);  
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    let computerMove = getMoveName(randomNumber);
    
    function displayResult(argComputerMove, argPlayerMove){
        printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
      
        if((argComputerMove == 'kamień' && argPlayerMove == 'papier') || (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') || (argComputerMove == 'papier' && argPlayerMove == 'nożyce') ){
        playerPoints = playerPoints + 1;
        printMessage('Ty wygrywasz! Zdobywasz punkt');
        } else if((argComputerMove == argPlayerMove) ){
        printMessage('Remis. Nikt nie zdobywa punktu');
        } else {
        computerPoints = computerPoints + 1;
        printMessage('Tym razem przegrywasz. Komputer zdobywa punkt');
        }
        // console.log(playerPoints + '-' + computerPoints);
        renderResult(playerPoints,computerPoints);
      }
    
    displayResult(computerMove,playerMove);
}

document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
});    

document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
});

document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
});
