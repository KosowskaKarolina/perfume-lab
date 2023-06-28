
let tab = document.getElementsByClassName("quiz");
let nextBtn = document.getElementsByClassName("next");
for(let i = 1 ; i<tab.length;i++){
    tab[i].style.display = "none";
}

let sumA = 0;
let sumB = 0;
let sumC = 0;
let inputsArrFirst = document.getElementsByName("radio1");
let inputsArrSecond = document.getElementsByName("radio2");
let inputsArrThird = document.getElementsByName("radio3");

nextBtn[0].addEventListener("click", ()=>{
    check(inputsArrFirst,tab);
   tab[0].style.display = "none";
   tab[1].style.display ="inherit";
});
nextBtn[1].addEventListener("click", ()=>{
    check(inputsArrSecond,tab);
   tab[2].style.display ="inherit";
});
nextBtn[2].addEventListener("click", ()=>{
    check(inputsArrThird,tab);
    for(let i = 1 ; i<tab.length;i++){
        tab[i].style.display = "none";
    }
    findResponse();
});
function check(inputsArr, tab){
    for(let i = 0; i < 2 ; i++){
        if(inputsArr[0].checked){
            sumA++;
            break;
        }else if(inputsArr[1].checked){
            sumB++;
            break;
        }else if(inputsArr[2].checked){
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
