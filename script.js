let carre1 = document.getElementById("carre1");
let carre2 = document.getElementById("carre2");
let carre3 = document.getElementById("carre3");
let carre4 = document.getElementById("carre4");
let carre5 = document.getElementById("carre5");
let carre6 = document.getElementById("carre6");
let carre7 = document.getElementById("carre7");
let carre8 = document.getElementById("carre8");
let carre9 = document.getElementById("carre9");
let winner = document.getElementById("winner");
let t = document.getElementById("title");
var turn = "X"


for (let index = 1; index < 10; index++) {
    document.getElementById("carre"+index).addEventListener("click",function(){
        if (document.getElementById("carre"+index).textContent =="") {
            document.getElementById("carre"+index).innerText = turn;
            win();
            if (turn == "X") {
                turn = "O";
            }
            else if(turn == "O")
            {
                turn = "X";
            }
        }
    });
}


function win(){
    if ((carre1.textContent == "X" && carre2.textContent == "X" && carre3.textContent == "X") || (carre1.textContent == "O" && carre2.textContent == "O" && carre3.textContent == "O")) {
        carre1.style.backgroundColor = "white";
        carre2.style.backgroundColor = "white";
        carre3.style.backgroundColor = "white";
        winner.innerHTML = "The Winner is <span style='color:white'>" + carre1.textContent + "</span>";
    }
    else if ((carre4.textContent == "X" && carre5.textContent == "X" && carre6.textContent == "X") || (carre4.textContent == "O" && carre5.textContent == "O" && carre6.textContent == "O")) {
        carre4.style.backgroundColor = "white";
        carre5.style.backgroundColor = "white";
        carre6.style.backgroundColor = "white";
        winner.innerHTML = "The Winner is <span style='color:white'>" + carre4.textContent + "</span>";
    }
    else if ((carre7.textContent == "X" && carre8.textContent == "X" && carre9.textContent == "X") || (carre7.textContent == "O" && carre8.textContent == "O" && carre9.textContent == "O")) {
        carre7.style.backgroundColor = "white";
        carre8.style.backgroundColor = "white";
        carre9.style.backgroundColor = "white";
        winner.innerHTML = "The Winner is <span style='color:white'>" + carre7.textContent + "</span>";
    }
    else if ((carre1.textContent == "X" && carre4.textContent == "X" && carre7.textContent == "X") || (carre1.textContent == "O" && carre4.textContent == "O" && carre7.textContent == "O")) {
        carre1.style.backgroundColor = "white";
        carre4.style.backgroundColor = "white";
        carre7.style.backgroundColor = "white";
        winner.innerHTML = "The Winner is <span style='color:white'>" + carre1.textContent + "</span>";
    }
    else if ((carre2.textContent == "X" && carre5.textContent == "X" && carre8.textContent == "X") || (carre2.textContent == "O" && carre5.textContent == "O" && carre8.textContent == "O")) {
        carre2.style.backgroundColor = "white";
        carre5.style.backgroundColor = "white";
        carre8.style.backgroundColor = "white";
        winner.innerHTML = "The Winner is <span style='color:white'>" + carre1.textContent + "</span>";
    }
    else if ((carre3.textContent == "X" && carre6.textContent == "X" && carre9.textContent == "X") || (carre3.textContent == "O" && carre6.textContent == "O" && carre9.textContent == "O")) {
        carre3.style.backgroundColor = "white";
        carre6.style.backgroundColor = "white";
        carre9.style.backgroundColor = "white";
        winner.innerHTML = "The Winner is <span style='color:white'>" + carre3.textContent + "</span>";
    }
    else if ((carre1.textContent == "X" && carre5.textContent == "X" && carre9.textContent == "X") || (carre1.textContent == "O" && carre5.textContent == "O" && carre9.textContent == "O")) {
        carre1.style.backgroundColor = "white";
        carre5.style.backgroundColor = "white";
        carre9.style.backgroundColor = "white";
        winner.innerHTML = "The Winner is <span style='color:white'>" + carre1.textContent + "</span>";
    }
    else if ((carre3.textContent == "X" && carre5.textContent == "X" && carre7.textContent == "X") || (carre3.textContent == "O" && carre5.textContent == "O" && carre7.textContent == "O")) {
        carre3.style.backgroundColor = "white";
        carre5.style.backgroundColor = "white";
        carre7.style.backgroundColor = "white";
        winner.innerHTML = "The Winner is <span style='color:white'>" + carre3.textContent + "</span>";
    }
}
