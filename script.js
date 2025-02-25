console.log("show the text on browser!");
let ptag = document.getElementById('paragraph').innerHTML="show the text on browser!"; //<p></p>

let number1= 34;
let number2=40;

let result=number1+number2;

document.getElementById('result').innerHTML=result;

//calculation
function sum() {

    let digit1 = document.getElementById('number1').value; //
    let digit2 = document.getElementById('number2').value; //


    let converted1 = parseFloat(digit1);
    let coverted2 = parseFloat(digit2);

    let sum= converted1+coverted2;

    

    document.getElementById('sum').innerHTML= 'the result is=' +sum;
}

