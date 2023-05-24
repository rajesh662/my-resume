
function toggle(){
    let togg = document.querySelector(".menu-bar");
    togg.classList.toggle("d-none");
}


let process = document.querySelector(".procees");
let proValue = document.querySelector(".pro-value");


let startValue = 0;
let endValue = 95;

let range = setInterval(function(){
    startValue++;

    proValue.textContent=`${startValue}%`
 

    process.style.background=`conic-gradient(aqua ${startValue*3.6}deg, #ff006e 0deg)`

    if( startValue == endValue){
        clearInterval(range)
    }
    
},100)

let process1 = document.querySelector(".procees1");
let proValue1 = document.querySelector(".pro-value1");


let startValue1 = 0;
let endValue1 = 95;

let range1 = setInterval(function(){
    startValue1++;

    proValue1.textContent=`${startValue1}%`
 

    process1.style.background=`conic-gradient(aqua ${startValue1*3.6}deg, #ff006e 0deg)`

    if( startValue1 == endValue1){
        clearInterval(range1)
    }
    
},100)

let process2 = document.querySelector(".procees2");
let proValue2 = document.querySelector(".pro-value2");


let startValue2 = 0;
let endValue2 = 97;

let range2 = setInterval(function(){
    startValue2++;

    proValue2.textContent=`${startValue2}%`
 

    process2.style.background=`conic-gradient(aqua ${startValue2*3.6}deg, #ff006e 0deg)`

    if( startValue2 == endValue2){
        clearInterval(range2)
    }
    
},100)

let process3 = document.querySelector(".procees3");
let proValue3 = document.querySelector(".pro-value3");


let startValue3 = 0;
let endValue3 = 80;

let range3 = setInterval(function(){
    startValue3++;

    proValue3.textContent=`${startValue3}%`
 

    process3.style.background=`conic-gradient(aqua ${startValue3*3.6}deg, #ff006e 0deg)`

    if( startValue3 == endValue3){
        clearInterval(range3)
    }
    
},100)

let process4 = document.querySelector(".procees4");
let proValue4 = document.querySelector(".pro-value4");


let startValue4 = 0;
let endValue4 = 75;

let range4 = setInterval(function(){
    startValue4++;

    proValue4.textContent=`${startValue4}%`
 

    process4.style.background=`conic-gradient(aqua ${startValue4*3.6}deg, #ff006e 0deg)`

    if( startValue4 == endValue4){
        clearInterval(range4)
    }
    
},100)

AOS.init({
    once:true,
});

function on1(){
    let details = document.querySelector(".skill-details1");
    details.style.display="block";
    

}
function off1(){
    let details = document.querySelector(".skill-details1");
    details.style.display="none";
}



function on2(){
    let details = document.querySelector(".skill-details2");
    details.style.display="block";
   

}
function off2(){
    let details = document.querySelector(".skill-details2");
    details.style.display="none";
}

function on3(){
    let details = document.querySelector(".skill-details3");
    details.style.display="block";
 

}
function off3(){
    let details = document.querySelector(".skill-details3");
    details.style.display="none";
}
function on4(){
    let details = document.querySelector(".skill-details4");
    details.style.display="block";
 

}
function off4(){
    let details = document.querySelector(".skill-details4");
    details.style.display="none";
}

function on5(){
    let details = document.querySelector(".skill-details5");
    details.style.display="block";
    

}
function off5(){
    let details = document.querySelector(".skill-details5");
    details.style.display="none";
}
