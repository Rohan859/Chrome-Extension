let inputEl = document.getElementById('input-el');
let buttonEl = document.getElementById('input-btn');


// function onButtonClicked() {
//     console.log("button is clicked!");
// }

buttonEl.addEventListener('click', () => {
    let inputObj = JSON.parse(localStorage.getItem('input-ele')) || {};
    inputObj = {
        ...inputObj,
        [inputEl.value]: inputEl.value
    };
    localStorage.setItem('input-ele', JSON.stringify(inputObj));
});


buttonEl.removeEventListener('click', () => {}
);



function render() {
    let inputObj = JSON.parse(localStorage.getItem('input-ele')) 
    let display = document.getElementById('display-el');

    for (let key in inputObj) {
        let li = document.createElement('li');
        li.textContent = inputObj[key];
        display.appendChild(li);
    }
}


render();