let titlePlayer = document.getElementById('title-player');
let options  = ['scisor', 'paper', 'rock', 'spock', 'lizard'];
let choice;
let computer;
let letsGo   = document.getElementById('lets-go').addEventListener('click',function(){
    choice = document.getElementById('choice').value;
    computer = options[randomNumber(options)];
    play(choice, computer);
    computerResponse(choice, computer);
});

function computerResponse(choice, computer){
    for(let i= 0; i < options.length; i++){
        if(choice === options[i]){
            console.log(options[i])
            createResult('computer', `${computer}`, 'h2', 2);
            break;
        }
        else{
            createResult('computer', 'buuh!!!...', 'h2', 2);
        }
    }
}
function createResult(idDOM, text, tag, n){
    let nameVar = document.getElementById(idDOM);
    nameVar.removeChild(nameVar.childNodes[n]);
    let resultText = document.createElement(tag);
    let textnode = document.createTextNode(text);
    resultText.appendChild(textnode);
    nameVar.appendChild(resultText);
    
    nameVar.childNodes[n].classList.add('titles');
    changeBackground(nameVar, text, 4);
}
function changeBackground(nameVar, result, n){
    if(result === 'Ganaste!!'){
        nameVar.childNodes[n].style.background = 'green';
        nameVar.childNodes[n].classList.add('play-result');
    }
    else if(result === 'Perdiste!!'){
        nameVar.childNodes[n].style.background = 'red';
        nameVar.childNodes[n].classList.add('play-result');
    }
    else if(result === 'Empate!!' || result==='Valor Invalido'){
        nameVar.childNodes[n].style.background = 'gray';
        nameVar.childNodes[n].classList.add('play-result');
    }
}
function play(choice, computer){
    if(choice.toLowerCase()===options[0]){
    MyScisor(computer);
    }
    else if(choice.toLowerCase()===options[1]){
        MyPaper(computer);
    }
    else if(choice.toLowerCase()===options[2]){
        MyRock(computer);
    }
    else if(choice.toLowerCase()===options[3]){
        MySpock(computer);
    }
    else if(choice.toLowerCase()===options[4]){
        MyLizard(computer);
    }
    else{
        createResult('container','Valor Invalido','H1',4);
    }
}
function MyScisor(computer){
    if(computer === options[1] || computer === options[4]){
        createResult('container','Ganaste!!','H2',4);
    }
    else if(computer === options[2] || computer === options[3]){
        createResult('container','Perdiste!!','H2',4);
    }
    else if(computer=== options[0]){
        createResult('container','Empate!!','H2',4);
    }
}
function MyPaper(computer){
    if(computer === options[2] || computer === options[3]){
        createResult('container','Ganaste!!','H2',4);
    }
    else if(computer === options[0] || computer === options[4]){
        createResult('container','Perdiste!!','H2',4);
    }
    else if(computer === options[1]){
        createResult('container','Empate!!','H2',4);

    }
}
function MyRock(computer){
    if(computer === options[0] || computer === options[4]){
        createResult('container','Ganaste!!','H2',4);
    }
    else if(computer === options[1] || computer === options[3]){
        createResult('container','Perdiste!!','H2',4);
    }
    else if(computer=== options[2]){
        createResult('container','Empate!!','H2',4);
    }
}
function MySpock(computer){
    if(computer === options[0] || computer === options[2]){
        createResult('container','Ganaste!!','H2',4);
    }
    else if(computer === options[1] || computer === options[4]){
        createResult('container','Perdiste!!','H2',4);
    }
    else if(computer=== options[3]){
        createResult('container','Empate!!','H2',4);
    }
}
function MyLizard(computer){
    if(computer === options[1] || computer === options[3]){
        createResult('container','Ganaste!!','H2',4);
    }
    else if(computer === options[0] || computer === options[2]){
        createResult('container','Perdiste!!','H2',4);
    }
    else if(computer=== options[4]){
        createResult('container','Empate!!','H2',4);
    }
}
let randomNumber = (arr) =>{
    let result = Math.floor(Math.random()*arr.length);
    return result
}