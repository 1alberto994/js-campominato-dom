const numeriGenerati = [];
const numeriGeneratiDue=[];

const gridContainer = document.getElementById('grid-container');

const playButton = document.getElementById('play');

playButton.addEventListener('click',

    function () {

        console.log('Cliccato play');

        gridContainer.innerHTML = '';

        for (let i = 1; i <= 100; i++) {

            const newCell = createNewCell(i);
            gridContainer.append(newCell);

        }

    }

);

function createNewCell(num) {

    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.addEventListener('click',

        function () {

            console.log(num);

            this.classList.add('clicked');

        }

    );
    

        cell.innerHTML = num;

        return cell;

}
function getNumber(min, max) {
    return Math.floor((Math.random()) * (max - min + 1)) + min;
}
let randomNumber = getNumber(1, 16);
    
while(numeriGenerati.includes(randomNumber)){
    randomNumber = getNumber(1, 16);
}

numeriGenerati.push(randomNumber);

console.log(numeriGenerati);

console.log(randomNumber);





function getSecondNumber(min, max) {
    return Math.floor((Math.random()) * (max - min + 1)) + min;
}
let randomSecondNumber = getSecondNumber(1, 100);
    
while(numeriGeneratiDue.includes(randomNumber)){
    randomSecondNumber = getSecondNumber(1, 100);
}

numeriGeneratiDue.push(randomSecondNumber);

console.log(numeriGeneratiDue);

console.log(randomSecondNumber);


    if (numeriGeneratiDue.includes(numeriGenerati) ) {
        numeriGeneratiDue.push(numeriGenerati)
        
        alert("hai perso")
    }
 












    

