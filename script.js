let rps = ["rock","scroll","scissors"] 
let userRecord = 0
let botRecord = 0

let elementClick = function(element){
    let botChoice = rps[Math.floor(Math.random() * rps.length)];

    document.getElementById('user-choice').setAttribute('src',element+'.png')
    document.getElementById('bot-choice').setAttribute('src',botChoice+'.png')
    console.log('User Choice:',element)

    console.log('Bot Choice:',botChoice)

    if (element == 'rock'){
        if (botChoice == 'scissors'){
            console.log('You win!')
            userRecord += 1
        }
        else if (botChoice == 'scroll'){
            console.log('You lose!')
            botRecord += 1
        }
        else {
            console.log('Draw!')
        }
}
  else if (element == 'scroll'){
    if (botChoice == 'rock'){
        console.log('You win!')
        userRecord += 1
    }
    else if (botChoice == 'scissors'){
        console.log('You lose!')
        botRecord += 1
    }
    else {
        console.log('Draw!')
    }
  }
else if (element == 'scissors'){
    if (botChoice == 'scroll'){
        console.log('You win!')
        userRecord += 1
    }
    else if (botChoice == 'rock'){
        console.log('You lose!')
        botRecord += 1
    }
    else {
        console.log('Draw!')
    }
}
document.getElementById('score').innerHTML = `${userRecord} : ${botRecord}`
if (userRecord == 3){
    alert('You win')
    userRecord = 0
    botRecord = 0
    let winner = document.createElement("h1")
    winner.innerHTML = 'YOU WIN'
    winner.style.color = 'green'
    document.getElementById('sidebar').appendChild(winner)
    document.getElementById('score').innerHTML = `${userRecord} : ${botRecord}`
}
else if (botRecord == 3){
    alert('You lose')
    let winner = document.createElement("h1")
    winner.innerHTML = 'YOU LOSE'
    winner.style.color = 'red'
    document.getElementById('sidebar').appendChild(winner)
    userRecord = 0
    botRecord = 0
    document.getElementById('score').innerHTML = `${userRecord} : ${botRecord}`
}


}