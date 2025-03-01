let number1 = 0;
let number2 = 0;
let summa = 0;
function show_on_the_screen(){
number1 = Number(document.getElementById('number1').value);
number2 = Number(document.getElementById('number2').value);
summa = number1 + number2
document.getElementById('result').innerHTML =  "the result is = " + summa; 
}