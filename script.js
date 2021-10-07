let order = [];
let clickedOrder = [];
let score = 0;

/* 
0 - green
1 - red
2 - yellow
3 - blue */

const blue = document.querySelector('.blue');
const green = document.querySelector('.green');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');

const lightColor = (element, number) => {
    number = number * 500;

    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);

    setTimeout(() => {
        element.classList.remove('selected');
    }, number);
};


const shuffleOrder = () => {
    const colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        const elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

const checkOrder = () => {
    for(let i in clickedOrder) {
        console.log('CLICKEDORDER: ', clickedOrder)
        console.log('ORDER: ', order)
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
        if(clickedOrder.length == order.length) {
            alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`)
            nextLevel();
        }
        
    }
}

const click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250)
}

const createColorElement = (color) => {
    if(color == 0) {
        return green;
    } else if(color == 1) {
        return red;
    } else if(color == 2) {
        return yellow;
    } else if(color == 3) {
        return blue;
    }
};

const nextLevel = () => {
    score++;
    shuffleOrder();
}

const gameOver = () => {
    alert(`Pontuação: ${score}\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo.`)
     order = [];
     clickedOrder = [];

     playGame();
}

const playGame = () => {
    score = 0;
    alert("Bem vindo ao Gênesis! Iniciando novo Jogo!");
    
    nextLevel();
}


green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);


playGame();