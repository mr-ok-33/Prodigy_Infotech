
let currentPlayer = "X";
let ar = Array(9).fill(null);

function winner(){
    if(
        (ar[0]!== null && ar[0]==ar[1]&&ar[1]==ar[2])||
        (ar[3]!== null && ar[3]==ar[4]&&ar[4]==ar[5])||
        (ar[6]!== null && ar[6]==ar[7]&&ar[7]==ar[8])||

        (ar[0]!== null && ar[0]==ar[3]&&ar[3]==ar[6])||
        (ar[1]!== null && ar[1]==ar[4]&&ar[4]==ar[7])||
        (ar[2]!== null && ar[2]==ar[5]&&ar[5]==ar[8])||

        (ar[0]!== null && ar[0]==ar[4]&&ar[4]==ar[8])||
        (ar[2]!== null && ar[2]==ar[4]&&ar[4]==ar[6])
    ) {
        document.write(`Winner: ${currentPlayer}`);
        
    }
    else if(!ar.some((e)=>e === null)){
        document.write(`Draw!!`);                  
    }
    return 0;
}
function handleClick(el){

    const id = Number(el.id);
    if(ar[id]!==null) return;
    ar[id] = currentPlayer;
    el.innerText = currentPlayer;
    winner();
    currentPlayer = currentPlayer === "X" ? "O":"X";
   
}
