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

const actionsMap = {
    'sum': (items = []) => items.reduce((acc, next) => acc + +next.value, 0),
    'multiply': (items = []) => items.reduce((acc, next) => acc * +next.value, 1)
    // що означають номера в кінці функції 0 і 1 ?
}

const items = document.querySelectorAll("input[id*=r][id*=c]");
items.forEach((item) => {
    item.addEventListener('input', updateVal)
});

const actionElems = document.querySelectorAll(".calc_action");
actionElems.forEach((item) => {
    item.addEventListener('click', updateVal)
});

function updateVal({target} = {}) {
    if (target.type === 'number') {
        const [id_prefix] = target.id.split('_');
        // чому id_prefix записаний в []?
        const rowItemsElems = Array.from(items).filter(({id}) => id.includes(id_prefix));
        const actionElem = document.querySelector(".calc_action:checked");
        const result = actionsMap[actionElem.value](rowItemsElems);
        document.getElementById(`${id_prefix}_sum`).innerHTML = result;
        
        console.log(target);
        return;
    }

    if (target.type === 'radio') {
        const mapper = new Map();
        const arrElems = Array.from(items);

        arrElems.forEach((item) => {
            const [id_prefix] = item.id.split('_');
            if (!mapper.has(id_prefix)) {
                mapper.set(id_prefix)  
            }
        })

        mapper.forEach((_, key) => {
            const columnElems = arrElems.filter(({id}) => id.includes(key));
            const result = actionsMap[target.value](columnElems);
            document.getElementById(`${key}_sum`).innerHTML = result;
        });
        return;
    }
} 