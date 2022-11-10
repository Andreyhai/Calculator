

class Button {
    constructor(value) {
        this.value = value;
    }
    isClicked(){

    }
}

const getValue = (selector) => {
    const mySelector = document.querySelector('#' + String(selector));
    mySelector.addEventListener('click',
        event => {
            event.preventDefault();
            // f(mySelector.value);
        });

}

let button,button1,button2,button3,button4,button5,button6,button7,button8,button9;

button = new Button(getValue('br'));
button1 =new Button(getValue('b1'));
button2 =new Button(getValue('b2'));
button3 =new Button(getValue('b3'));
button4 =new Button(getValue('b4'));
button5 =new Button(getValue('b5'));
button6 =new Button(getValue('b6'));
button7 =new Button(getValue('b7'));
button8 =new Button(getValue('b8'));
button9 =new Button(getValue('b9'));

export {Button}

