const btnAdd = document.querySelector('button');
const table = document.querySelector('table');
const nameInput = document.querySelector('#name');

// Algorithm
const algo_1 = document.querySelector('#algo_1');
const algo_2 = document.querySelector('#algo_2');
const algo_3 = document.querySelector('#algo_3');
const algo_4 = document.querySelector('#algo_4');
const algo_5 = document.querySelector('#algo_5');
const algo_6 = document.querySelector('#algo_5');
const algo_7 = document.querySelector('#algo_5');
const algo_8 = document.querySelector('#algo_5');
const algo_9 = document.querySelector('#algo_5');

// Tasklar
const task_1 = document.querySelector('#task_1');
const task_2 = document.querySelector('#task_2');
const task_3 = document.querySelector('#task_3');
const task_4 = document.querySelector('#task_4');


btnAdd.addEventListener('click', () => {
    const name = nameInput.value;
    if (name === null || name === "") {
        alert("Zehmet olmasa ad daxil edin")
    }
    const point = algo_1.value
    const point2 = algo_2.value
    const point3 = algo_3.value
    const point4 = algo_4.value
    const point5 = algo_5.value
    const point6 = algo_6.value
    const point7 = algo_7.value
    const point8 = algo_8.value
    const point9 = algo_9.value
    const plus = Number(point) + Number(point2) + Number(point3) + Number(point4) + Number(point5) + Number(point6) + Number(point7) + Number(point8) + Number(point9);
    const point10 = task_1.value
    const point11 = task_2.value
    const point12 = task_3.value
    const point13 = task_4.value
    const plus2 = Number(point10) + Number(point11) + Number(point12) + Number(point13);
    const totoal = Number(plus) + Number(plus2);
    const template = `
        <tr>
            <td>${name}</td>
            <td>${plus}</td>
            <td>${plus2}</td>
            <td>${totoal}</td>
        </tr>
    `;
    table.innerHTML += template;
});