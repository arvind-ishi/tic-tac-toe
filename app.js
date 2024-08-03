let boxes = document.querySelectorAll(".box");

let resetbtn = document.querySelector("#reset-btn");
let newGameBtn =document.querySelector("#new-btn");
let msg = document.querySelector("#msg")

let msgContainer= document.querySelector(".msg-container");

let turnO=true ;


const winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];


const resetGame =()=>{
    turnO = true;
     enableBoxes();
     msgContainer.classList.add('hide');
      
}


boxes.forEach((box)=> {
    box.addEventListener("click", () => {
 console.log("box was clicked");

        if (turnO) {
            box.innerText = "O";
            turnO = false;

        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.classList.add("disabled");

        checkWinner();

    });

});
// const disableBoxes = () =>{
//   for (let box of boxes) {
    
//     box.disabled = true;
//   }
// }

const disableBoxes = () => {
    boxes.forEach((box) => {
      box.classList.add("disabled");
    });
  };
  
  const enableBoxes = () => {
    boxes.forEach((box) => {
      box.classList.remove("disabled");
      box.innerText = '';

    });
  };



const showWinner =(winner)=>{

    msg.innerText =  ` congratulations ,winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();

}


const checkWinner = ()=>{
for (let pattern of winpattern){
    ///console.log(pattern);
   // console.log(pattern[0],pattern[1],pattern[2]);

    //console.log(boxes[pattern[0]], boxe[pattern[1]],boxes[pattern[2]]);

    
       let one  =  boxes[pattern[0]].innerText;

       let two  =  boxes[pattern[1]].innerText;

      let  three =   boxes[pattern[2]].innerText;


      if(one != "" && two != "" && three != ""){
             if(one === two && two ===three){
                console.log("winner",one);
                showWinner(one);

             }
    
      }



}
}


newGameBtn.addEventListener('click',resetGame);
resetbtn.addEventListener('click',resetGame)


// const disableBoxes = () =>{
//   for (let box of boxes) {
    
//     box.disabled = true;
//   }
// }


// const showwinner =(winner) =>{
//     msg.innerText = 'Congratulations, winner is $ {winner}';
//     msgContainer.classList.remove("hide");
//     // disableBoxes();
    
// }



// const checkWinner = () => {
//     for (let pattern of winPatterns){
//         // console.log [pattern [0], boxes [pattern][1],pattern[2]];
//         // console.log(
//        let pos1val=boxes[pattern[0]].innerText;
//        let pos2val=boxes[pattern[1]].innerText;
//        let pos3val=boxes[pattern[2]].innerText;

//        if (pos1val != "" && pos2val !="" &pos3val !=""){
//         if (pos1val === pos2val && pos2val === pos3val){
//             console.log ("winner",pos1val);
//             showwinner();
//         }
//        }
//     }
//     };
