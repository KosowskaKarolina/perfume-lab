
let tab = document.getElementsByClassName("quiz");
let nextBtn = document.getElementsByClassName("next");
for(let i = 1 ; i<tab.length;i++){
    tab[i].style.display = "none";
}

let sumA = 0;
let sumB = 0;
let sumC = 0;
let tablicaInputow1 = document.getElementsByName("radio1");
let tablicaInputow2 = document.getElementsByName("radio2");
let tablicaInputow3 = document.getElementsByName("radio3");

nextBtn[0].addEventListener("click", ()=>{
    check(tablicaInputow1,tab);
   tab[0].style.display = "none";
   tab[1].style.display ="inherit";
});
nextBtn[1].addEventListener("click", ()=>{
    check(tablicaInputow2,tab);
   tab[2].style.display ="inherit";
});
nextBtn[2].addEventListener("click", ()=>{
    check(tablicaInputow3,tab);
    for(let i = 1 ; i<tab.length;i++){
        tab[i].style.display = "none";
    }
    findResponse();
});
function check(tablicaInputow, tab){
    for(let i = 0; i < 2 ; i++){
        if(tablicaInputow[0].checked){
            sumA++;
            break;
        }else if(tablicaInputow[1].checked){
            sumB++;
            break;
        }else if(tablicaInputow[2].checked){
            sumC++;
            break;
        }
    }
    console.log("suma A: " + sumA + " suma B: " + sumB + " suma C: " + sumC);
}
function findResponse(){
    if(sumA>sumB && sumA > sumC){
        tab[3].style.display = "inherit";
       }
       if(sumB>sumA && sumB > sumC){
        tab[4].style.display = "inherit";
       }
       if(sumC>sumB && sumC > sumA){
        tab[5].style.display = "inherit";
       }
       if(sumA == sumB && sumB == sumC){
        tab[5].style.display = "inherit";
       }
}
