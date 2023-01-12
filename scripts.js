const numeriGenerati = [];

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

function getNumber(min, max) {
    return Math.floor((Math.random()) * (max - min + 1)) + min;
}
let randomNumber;
for(let i = 0;i<16;i++){
    randomNumber = getNumber(1, 100);

    while(numeriGenerati.includes(randomNumber)){
        randomNumber = getNumber(1, 100);
    }

    numeriGenerati.push(randomNumber);
}
console.log(numeriGenerati);

console.log(randomNumber);

function createNewCell(num) {

    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.addEventListener('click',

        function () {
            const currNum = cell.innerHTML;
             if(numeriGenerati.includes(currNum)){
                cell.classList.add("flower");
                cell.classList.remove("bomb")
                
            }
            else{
                cell.classList.add("bomb");
                cell.classList.remove("flower")
                
            }
            
            console.log(num);

            this.classList.add('clicked');

        }

    );
    
        
        cell.innerHTML = num;

        return cell;

}

 












    

