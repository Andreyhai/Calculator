// const answer = confirm('Продолжить?');
const f = (text) => {
  console.log(text);
}

const getValue = (selector) => {
    const mySelector = document.querySelector('.' + String(selector));
    mySelector.addEventListener('click',
        event => {
            event.preventDefault();
            f(mySelector.value);
        });
}

if (1) { // answer
    getValue('C');
    // getValue('button1');
} else {
    alert('please reload!');
}