var x = 5;
var y = 2;
var z = x + y;
document.getElementById("demo").innerHTML = z;
function sum() {
    document.getElementById("demo").innerHTML = "7";
  }
var x = 7;
var y = 2;
var z = x * y;
document.getElementById("demo").innerHTML = z;
function multiplication() {
    document.getElementById("demo").innerHTML = "14";
  }

var x = 9;
var y = 9;
var z = x / y;
document.getElementById("demo").innerHTML = z;
function division() {
    document.getElementById("demo").innerHTML = "1";
  }
var x = 9;
var y = 4;
var z = x - y;
document.getElementById("demo").innerHTML = z;

function reduction() {
    document.getElementById("demo").innerHTML = "5";
  }

tion obtener(x){
    let valorinput = document.getElementById("input").value;
    if (valorinput == x){
        alert ("congratulations you have guessed the number")
    }
    else {
        alert ("bad luck keep trying")
        if (valorinput > x){
            alert ("the number entered is greater than the number")
        }
        else {
            alert("the number entered is greater than the number")
        }
    }
}
var x =Math.floor(Math.random()*100)