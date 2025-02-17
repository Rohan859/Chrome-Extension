let inputEl = document.getElementById('input-el');
let buttonEl = document.getElementById('input-btn');
let displayEl = document.getElementById('display-el')
let deleteBtn = document.getElementById('delete-btn');
let saveTabBtn = document.getElementById('save-tab-btn');
let inputArr = [];

let localStorageArr = JSON.parse(localStorage.getItem('input-ele'));


if(localStorageArr) 
{
    inputArr = localStorageArr;
    render();
}

buttonEl.addEventListener('click', () => {
    inputArr.push(inputEl.value);
    localStorage.setItem('input-ele', JSON.stringify(inputArr));
    inputEl.value = '';
    render();
});


buttonEl.removeEventListener('click', () => {}
);


function render() {

    displayEl.innerHTML = ''; // Clear previous list items

    for (let key in inputArr) {
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.href = inputArr[key].startsWith('https') ? inputArr[key] : `https://${inputArr[key]}`;
        a.textContent = inputArr[key];
        a.target = '_blank';
        li.appendChild(a);
        displayEl.appendChild(li);
    }
}


deleteBtn.addEventListener('click', () => {
    localStorage.clear();
    inputArr = [];
    render();
});


saveTabBtn.addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        let activeTab = tabs[0];
        inputArr.push(activeTab.url);
        localStorage.setItem('input-ele', JSON.stringify(inputArr));
        render();
    });
});

