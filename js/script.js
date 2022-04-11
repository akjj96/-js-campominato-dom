document.getElementById('play').addEventListener('click', setLevel);

// settiamo il livello
function setLevel(event){
    console.log(event.target);
    console.log(this);
    // impedisce l'azione di default del bottone
    event.preventDefault();
    // prendo il value della difficolta
    const level = document.getElementById('level').value;
    console.log(level);

    // quanti quadrati?

    let numSquare;
    switch(level){
        case '1':
        default:
            numSquare = 100;
            break;
        case '2':
          numSquare = 81;
            break;
        case '3':
          numSquare = 49;
            break;
        
        }
        let celleperRiga = Math.sqrt(numSquare);
        console.log('celle per lato: ', celleperRiga);
        generateBomb(numSquare);
        generaGriglia(numSquare, celleperRiga);
    }

    // LE BOMBE

    
    const BOMB_NUMBER = 16;
    const bombs = [];
    let maxAttempt;
    let attemps = 0;

    
    function generateBomb(numSquare){
        maxAttempt = numSquare - BOMB_NUMBER;
        while(bombs.length < BOMB_NUMBER){
        let bombNuber = getRandomInt(1,numSquare);
        if(!bombs.includes(bombNuber)){
            bombs.push(bombNuber)

        }
        }
    console.log(bombs);
    }








function generaGriglia(numSquare, celleperRiga){
let app = document.getElementById('app');
app.innerHTML = '';
let row = document.createElement('div');
row.setAttribute('class','gridrow');



for(let i = 1; i <= numSquare; i++){
    const square = generaCella(i, celleperRiga);
    row.append(square);

}
app.append(row);

}


function generaCella(numSquare, celleperRiga){
    let square = document.createElement('div');
    square.setAttribute('class','box');
    square.style.width = `calc(100% / ${celleperRiga})`;
    square.style.height = `calc(100% / ${celleperRiga})`;
    square.classList.add('pointer');
    square.innerHTML = `<span> ${numSquare}</span>`
    square.addEventListener('click', coloraCella);
    return square;
    

}

function coloraCella(){
    // console.log(this.innerText);
    let num =parseInt(this.innerText);
    attemps++;
    

    if(bombs.includes(num)){
        this.style.backgroundColor = 'red';
        this.innerHTML = `<i class="fa-solid fa-bomb"></i>`;
        gameOver();
    }else{
        
        this.style.backgroundColor = '#6495ed';
    }
    this.classList.remove('pointer');
    this.removeEventListener('click', coloraCella);
}




// utility
function getRandomInt(min, max) { //FUNZIONE BASE PER GEN NUMERI
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}



function gameOver(){
    if(attemps <= maxAttempt){
        let sconfitta = document.write('Hai perso la partita');
        console.log(sconfitta)
        
    }else{

        let vittoria = document.write('hai vinto')
        console.log(vittoria);
    }
}




