let modal = document.getElementById('myModal');
let btn = document.getElementById('myBtn');
let closeCalc = document.getElementById("closeCalc");
btn.onclick = function () { 
    modal.style.display = "block";
    btn.style.display = "none";
}
closeCalc.onclick = function () { 
modal.style.display = "none";
btn.style.display = "block";
}
let r1c1 = document.getElementById('r1c1');
let r1c2 = document.getElementById('r1c2');
let r1c3 = document.getElementById('r1c3');
let sum1 = document.getElementById('sum1');
let upR1c1 = 0;
let upR1c2 = 0;
let upR1c3 = 0;
r1c1.addEventListener('input', updateValue1);
function updateValue1(e) {
    if (e){
    upR1c1 = e.target.value;
}
    sum1.innerHTML = calc(upR1c1, upR1c2, upR1c3);
  }
r1c2.addEventListener('input', updateValue2);
function updateValue2(e) {
    upR1c2 = e.target.value;
    sum1.innerHTML = calc(upR1c1, upR1c2, upR1c3);
  }
r1c3.addEventListener('input', updateValue3);
function updateValue3(e) {
    upR1c3 = e.target.value;
    sum1.innerHTML = calc(upR1c1, upR1c2, upR1c3);
  }
// checkbox chagne colors of rows
let box1 = document.getElementById('box1');
let box2 = document.getElementById('box2');
let box3 = document.getElementById('box3');
let container1 = document.getElementById('r1');
let container2 = document.getElementById('r2');
let container3 = document.getElementById('r3');
function changeColor1 () {
    if (box1.checked) {
        container1.style.backgroundColor = "rgb(0, 205, 70)";
    }
    else {
        container1.style.backgroundColor = "white";
    }
}
function changeColor2 () {
    if (box2.checked) {
        container2.style.backgroundColor = "rgb(0, 205, 70)";
    }
    else {
        container2.style.backgroundColor = "white";
    }
}
function changeColor3 () {
    if (box3.checked) {
        container3.style.backgroundColor = "rgb(0, 205, 70)";
    }
    else {
        container3.style.backgroundColor = "white";
    }
}
//radio buttons changes calculations
let radioSum = document.getElementById('radioSum');
radioSum.addEventListener('click', (a)=> {
    console.log(radioSum.value.target.checked, a);
    if (radioSum.checked) updateValue1()
});
let radioMultiply = document.getElementById('radioMultiply');
radioMultiply.addEventListener('click', calc);
function calc(n1, n2, n3) {
    if (radioSum.checked) {
            return +n1 + +n2 + +n3;
        }
    else {
            return +n1 * +n2 * +n3;
    }
 }