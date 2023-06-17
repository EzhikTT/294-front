const app = document.getElementById("app")

let player = "cross" // cross | zero
const cells = []
for(let i = 0; i < 9; i++) {
    const cell = document.createElement("div")
    cell.classList.add("cell")

    cell.addEventListener("click", (event) => onClickCell(event, i))

    app.appendChild(cell)
    cells.push(cell)
}

function onClickCell(event, index) {
    // let event, index
    const cell = cells[index]
    // cells[index].innerHTML = "<span>x</span>"
    if(!cell.classList.contains("cross") && !cell.classList.contains("zero")){
        cell.classList.add(player)
        checkWin(index, player)

        if(player === "cross"){
            // cell.innerText = "x"
            player = "zero"
        }
        else if(player === "zero"){
            // cell.innerText = "o"
            player = "cross"
        }
    }
}

function checkWin(index, player) {
    let isWin = false

    const row = Math.floor(index / 3)
    const column = index % 3

    const cell1 = cells[row], 
          cell2 = cells[row + 1], 
          cell3 = cells[row + 2]
    
    if(cell1.classList.contains(player) && cell2.classList.contains(player) && cell3.classList.contains(player)){
        isWin = true
    }

    if(!isWin){
        const cell1 = cells[column], 
              cell2 = cells[column + 3], 
              cell3 = cells[column + 6]

        if(cell1.classList.contains(player) && cell2.classList.contains(player) && cell3.classList.contains(player)){
            isWin = true
        }  
    }

    if(!isWin){
        let cell1, cell2, cell3
        if(
            (row === 0 || row === 2) && (column === 0 || column === 2) ||
            row === 1 && column === 1
        ){
            if(
                row === 0 && column === 0 || 
                row === 1 && column === 1 ||
                row === 2 && column === 2
            ){
                cell1 = cells[0]
                cell2 = cells[4]
                cell3 = cells[8]
            }

            if(
                row === 0 && column === 2 || 
                row === 1 && column === 1 ||
                row === 2 && column === 0
            ){
                cell1 = cells[2]
                cell2 = cells[4]
                cell3 = cells[6]
            }

            if(cell1.classList.contains(player) && cell2.classList.contains(player) && cell3.classList.contains(player)){
                isWin = true
            }
        }
    }

    if(isWin){
        setTimeout(
            () => {alert(`Win is ${player}`)},
            100
        ) 
    }
}