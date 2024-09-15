
var buttons = document.querySelectorAll(".buttons button");
var input1 = document.forms[0].input1;
var input2 = document.forms[0].input2;
var input3 = document.forms[0].input3;
var input4 = document.forms[0].input4;
var input5 = document.forms[0].input5;
var input6 = document.forms[0].input6;
var input7 = document.forms[0].input7;
var input8 = document.forms[0].input8;
var spanInc = document.querySelector(".incorrect span");
var count = 0;


function butt(event){
    if(event.target.value == 'M' && input1.value == ''){
        input1.value = 'M';
        count++;
    }
    
    else if(event.target.value == 'O'){
        input2.value = 'O';
        event.target.style.cssText = "background-color:green; cursor:alias;";
        event.target.disabled = true;
        count++;
    }

   else  if(event.target.value == 'U'){
        input3.value = 'U';
        event.target.style.cssText = "background-color:green; cursor:alias;";
        event.target.disabled = true;
        count++;
    }
    
    else if(event.target.value == 'H'){
        input4.value = 'H';
        event.target.style.cssText = "background-color:green; cursor:alias;";
        event.target.disabled = true;
        count++;
    }

    else if(event.target.value == 'A' && input5.value == ''){
        input5.value = 'A';
        count++;
    }
    
    else if(event.target.value == 'M' ){
        input6.value = 'M';
        event.target.style.cssText = "background-color:green; cursor:alias;";
        event.target.disabled = true;
        count++;
    }

    else if(event.target.value == 'A' ){
        input7.value = 'A';
        count++;
        event.target.style.cssText = "background-color:green; cursor:alias;";
        event.target.disabled = true;
    }

    else if(event.target.value == 'D'){
        input8.value = 'D';
        event.target.style.cssText = "background-color:green; cursor:alias;";
        event.target.disabled = true;
        count++;
    }

    else{
        spanInc.innerHTML = parseInt(spanInc.innerHTML) + 1;
        event.target.style.cssText = "background-color:red; cursor:alias;";
        event.target.disabled = true;

        if(spanInc.innerHTML == 1){
            let one = document.querySelector(".page .container .left .content .one");
            one.style.cssText = "background-color: black; "; 
        }

        else if(spanInc.innerHTML == 2) {
            let two = document.querySelector(".page .container .left .content");
            two.style.cssText = "border-left-color: black;"; 
        }

        else if(spanInc.innerHTML == 3) {
            let three = document.querySelector(".page .container .left .content");
            three.style.cssText = "border-left-color: black; border-top-color: black;"; 
        }

        else  if(spanInc.innerHTML == 4){
            let four = document.querySelector(".page .container .left .content .four");
            four.style.cssText = "background-color: black; "; 
        }



        else{
            let five = document.querySelector(".page .container .left .content .five");
            five.style.cssText = "display:inline "; 
            
            setTimeout(end, 1000);
            buttons.forEach((e) => {
                e.disabled = true;
            });
        }
    }

        if(count == 8){
            setTimeout(correct, 1000);
            buttons.forEach((e) => {
                e.disabled = true;
            });
        }
}

function end(){
    let myElement = document.createElement("div");
    myElement.append("Failed");
    myElement.style.cssText = "padding: 70px; position: absolute; width: 400px; top: 100px; left: 50%; background-color:red; text-align:center; transform:translate(-50%,-50%); color:white; font-size:30px";


    document.body.appendChild(myElement);
}

function correct(){
    let myElement = document.createElement("div");
    myElement.append("Good");
    myElement.style.cssText = "padding: 70px; position: absolute; width: 400px; top: 100px; left: 50%; background-color:green; text-align:center; transform:translate(-50%,-50%); color:white; font-size:30px";


    document.body.appendChild(myElement);
}

buttons.forEach(e => {
    e.addEventListener('click', butt);
});