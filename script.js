let btn = document.querySelectorAll(".btn");
console.log(btn)
let rst = document.querySelector(".rst");
let msg = document.querySelector(".msg");
let nst=document.querySelector(".nst");
let wms=document.querySelector(".wms");

let turnO = true;

let winp = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],

];
let rgame=()=>{
   turnO=true;
   eisb();
   msg.classList.add("hide");
}


let disb=()=>{
    btn.forEach((val)=> {
        val.disabled=true;
    })
}
let eisb=()=>{
    btn.forEach((val)=> {
        val.disabled=false;
        val.innerHTML="";
    })
}


btn.forEach((val) => {
    val.addEventListener("click", () => {

        if (turnO) {
            document.body.style.backgroundColor = "red";
            val.innerText = "O"
            turnO = false;
        }
        else {
            val.innerText = "X";
            document.body.style.backgroundColor = "cyan";
            turnO = true;
        }
        val.disabled = true;
        wincheck();
    })

});

let showwin=(winner)=>{
    disb();
    wms.innerText=`Congratulation the Winner is ${winner}`
    msg.classList.remove("hide");

}

let wincheck = () => {
    winp.forEach((val) => {
        let pos0=btn[val[0]].innerText;
        let pos1=btn[val[1]].innerText;
        let pos2=btn[val[2]].innerText;

        if(pos0!=="" && pos1!=="" && pos2!==""){
            if(pos0===pos1 && pos1===pos2){
                showwin(pos0);

               
            }
        }
    }
       
    )}

nst.addEventListener("click",rgame);
rst.addEventListener("click",rgame);

   