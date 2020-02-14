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
let r2c1 = document.getElementById('r2c1');
let r2c2 = document.getElementById('r2c2');
let r2c3 = document.getElementById('r2c3');
let sum2 = document.getElementById('sum2');
let upR2c1 = 0;
let upR2c2 = 0;
let upR2c3 = 0;
let r3c1 = document.getElementById('r3c1');
let r3c2 = document.getElementById('r3c2');
let r3c3 = document.getElementById('r3c3');
let sum3 = document.getElementById('sum3');
let upR3c1 = 0;
let upR3c2 = 0;
let upR3c3 = 0;

//radio buttons changes calculations
let radioSum = document.getElementById('radioSum');

radioSum.addEventListener('input', (event)=> {
    if (event.target.checked) updateValue1(null, 'add'),
    updateValue4(null, 'add'),
    updateValue7(null, 'add')
});

let radioMultiply = document.getElementById('radioMultiply');

radioMultiply.addEventListener('input', (event)=> {
    if (event.target.checked) updateValue1(null, 'multiply'),
    updateValue4(null, 'multiply'),
    updateValue7(null, 'multiply')
});

r1c1.addEventListener('input', updateValue1);
function updateValue1(e) {
    let action = 'add';
    if (radioMultiply.checked) {
        action = 'multiply';
    }

    if (e){
        upR1c1 = e.target.value;
    }

    sum1.innerHTML = calc(action, upR1c1, upR1c2, upR1c3);
  }
r1c2.addEventListener('input', updateValue2);
function updateValue2(e) {
    let action = 'add';
    if (radioMultiply.checked) {
        action = 'multiply';
    }

    if (e){
        upR1c2 = e.target.value;
    }

    sum1.innerHTML = calc(action, upR1c1, upR1c2, upR1c3);
  }

r1c3.addEventListener('input', updateValue3);
function updateValue3(e) {
    let action = 'add';
    if (radioMultiply.checked) {
        action = 'multiply';
    }

    if (e){
        upR1c3 = e.target.value;
    }

    sum1.innerHTML = calc(action, upR1c1, upR1c2, upR1c3);
}
r2c1.addEventListener('input', updateValue4);
function updateValue4(e) {
    let action = 'add';
    if (radioMultiply.checked) {
        action = 'multiply';
    }

    if (e){
        upR2c1 = e.target.value;
    }

    sum2.innerHTML = calc(action, upR2c1, upR2c2, upR2c3);
  }
  r2c2.addEventListener('input', updateValue5);
function updateValue5(e) {
    let action = 'add';
    if (radioMultiply.checked) {
        action = 'multiply';
    }

    if (e){
        upR2c2 = e.target.value;
    }

    sum2.innerHTML = calc(action, upR2c1, upR2c2, upR2c3);
  }
  r2c3.addEventListener('input', updateValue6);
function updateValue6(e) {
    let action = 'add';
    if (radioMultiply.checked) {
        action = 'multiply';
    }

    if (e){
        upR2c3 = e.target.value;
    }

    sum2.innerHTML = calc(action, upR2c1, upR2c2, upR2c3);
  }
  r3c1.addEventListener('input', updateValue7);
function updateValue7(e) {
    let action = 'add';
    if (radioMultiply.checked) {
        action = 'multiply';
    }

    if (e){
        upR3c1 = e.target.value;
    }

    sum3.innerHTML = calc(action, upR3c1, upR3c2, upR3c3);
  }
  r3c2.addEventListener('input', updateValue8);
function updateValue8(e) {
    let action = 'add';
    if (radioMultiply.checked) {
        action = 'multiply';
    }

    if (e){
        upR3c2 = e.target.value;
    }

    sum3.innerHTML = calc(action, upR3c1, upR3c2, upR3c3);
  }
  r3c3.addEventListener('input', updateValue9);
function updateValue9(e) {
    let action = 'add';
    if (radioMultiply.checked) {
        action = 'multiply';
    }

    if (e){
        upR3c3 = e.target.value;
    }

    sum3.innerHTML = calc(action, upR3c1, upR3c2, upR3c3);
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


function calc(action = 'add', n1, n2, n3) {
    console.error(action, action === 'multiply', n1, n2, n3)
    if (action === 'add') {
            return +n1 + +n2 + +n3;
        }
    if (action === 'multiply') {
            return +n1 * +n2 * +n3;
    }
 }
