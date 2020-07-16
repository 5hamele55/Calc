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
let r2c1 = document.getElementById('r2c1');
let r2c2 = document.getElementById('r2c2');
let r2c3 = document.getElementById('r2c3');
let sum2 = document.getElementById('sum2');
let r3c1 = document.getElementById('r3c1');
let r3c2 = document.getElementById('r3c2');
let r3c3 = document.getElementById('r3c3');
let sum3 = document.getElementById('sum3');
let radioSum = document.getElementById('radioSum');

radioSum.addEventListener('click', (event)=> {
    if (event.target.checked) updateValue1(),
    updateValue2(),
    updateValue3()
});

let radioMultiply = document.getElementById('radioMultiply');

radioMultiply.addEventListener('click', (event)=> {
    if (event.target.checked) updateValue1(),
    updateValue2(),
    updateValue3()
});

r1c1.addEventListener('change', updateValue1);
r1c2.addEventListener('change', updateValue1);
r1c3.addEventListener('change', updateValue1);
function updateValue1() {
    this.value = event.target.value;
    let action = 'add';
    if (radioMultiply.checked) {
        action = 'multiply';
    }
    sum1.innerHTML = calc(action, r1c1, r1c2, r1c3);
    }
r2c1.addEventListener('change', updateValue2);
r2c2.addEventListener('change', updateValue2);
r2c3.addEventListener('change', updateValue2);
function updateValue2() {
    this.value = event.target.value;
    let action = 'add';
    if (radioMultiply.checked) {
        action = 'multiply';
    }
    sum2.innerHTML = calc(action, r2c1, r2c2, r2c3);
  }
r3c1.addEventListener('change', updateValue3);
r3c2.addEventListener('change', updateValue3);
r3c3.addEventListener('change', updateValue3);
function updateValue3() {
    this.value = event.target.value;
    let action = 'add';
    if (radioMultiply.checked) {
        action = 'multiply';
    }
    sum3.innerHTML = calc(action, r3c1, r3c2, r3c3);
  }
function changeColor (id) {
    let container = document.getElementById(id);
    let boxButton = event.target;
    if (boxButton.checked) {
        container.style.backgroundColor = "rgb(0, 205, 70)";
    }
    else {
        container.style.backgroundColor = "white";
    }
}
function calc(action, n1, n2, n3) {
    if (action === 'add') {
            return +n1.value + +n2.value + +n3.value;
        }
    if (action === 'multiply') {
            return +n1.value * +n2.value * +n3.value;
    }
 }
