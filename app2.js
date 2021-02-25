function getUserName(){
    let userName = prompt('Please enter your name')
    if (userName == 'Roger'){
        document.write ('<roger>' + 'Here is why Star Wars is the Pinnacle of Human Culture' + '</roger>')
    } else {
        document.write ('<others>' + 'Here is why Music is Way Better than Star Wars or Star Trek' + '</others>')
    }
    return userName;
}