let count = 0;
let pre = document.getElementById("p-el");

function increment (){
count = count + 1;
document.getElementById("count").innerHTML = count;
}


function decrement(){
    count = count - 1;
    document.getElementById("count").innerHTML = count;

}

function save (){
    let dash = " " + count + " - ";
    pre.innerText = pre.innerHTML + dash;
    document.getElementById("count").innerHTML = 0;
    count = 0;
console.log(count);
}