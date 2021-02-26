function getTime(){
    let today = new Date();
    let hourNow = today.getHours();
    let greeting;

    if (hourNow > 18) {
        greeting = 'Good evening!';
    } else if (hourNow > 12){
        greeting = 'Good afternoon!';
    } else if (hourNow > 0){
        greeting = 'Good morning!';
    } else {
        greeting = "Welcome!";
    }
        document.write('<h1 id="hjs">' + greeting + '</h1>');
}

function getUserName(){
    let userName = prompt('Please enter your name')
    if (userName == 'Roger'){
        document.write ('<h2 id="roger">' + 'Here is why Star Wars is the Pinnacle of Human Culture' + '</h2>')
    } else {
        document.write ('<h2 id="others">' + 'Here is why Music is Way Better than Star Wars or Star Trek' + '</h2>')
    }
    return userName;
}

// validation portion
function getBrains(){
    let brains = prompt('Are you smart?')
    let isCorrect = false
    while (isCorrect != true){
        if (brains == 'no'){
            alert('YES YOU ARE!')
        } else if (brains == 'yes'){
            isCorrect = true
            alert('Proud of you')
        } else {
            alert ('Enter yes or no')
        }
        if (isCorrect != true){
            brains = prompt('Are you sure you\'re not smart?')
        }
    }
    return brains;
}

//cat pic portion
function getDogPic(){
    let userAnswer = prompt('How good are dogs?')
    if(userAnswer > 5){
        userAnswer = 5
    }
    for (let i = 0; i < userAnswer; i++){
        console.log(userAnswer);
        document.write('<img src="https://png.clipart.me/previews/070/psd-vinyl-record-icon-45912.jpg">')
    }
}


function getGood(){
    let price;
    let quantity;
    let total;

    price = 100;
    quantity = 1430;
    total = price * quantity;

    let el = document.getElementById('cost');
    el.textContent = total + ' good';

    return getGood;
}
