function numberGuessingGame(){
    // set the correct number
    //maybe later we can get a random number, taken from w3schools
    let correctAnswer = Math.floor(Math.random() * 100) + 1;
 
    // i need to set the number of guesses
    let guesses = 8; 

    // i need to get a number from the user (we need to set a FOR loop)
    // check if they have guesses left
    for(let i = 0; i < guesses; i++){
        let userAnswer = prompt('Please Enter a Number from 1 to 100');
        while(userAnswer < 0 || userAnswer > 100){
            userAnswer = prompt('I said between 1 to 100, not something ridiculous');
        }
       

    // check if the guess is right
        if(userAnswer == correctAnswer){
            alert('THAT IS CORRECT')
            break;
    // stretch goal
    // let user know if number is high or low
    }else if(userAnswer > correctAnswer){
            alert('TOO HIGH, DO AGAIN')
    }else if(userAnswer < correctAnswer){
            alert('TOO LOW, DO AGAIN')
    }
}


}