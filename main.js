const f = (text) => {
  console.log(text);
}

// объявление-----------------------------------------------------------------------------------------------------------

let pole, del, ravenous, str, plus, x1;

pole = document.querySelector('.input');
del = document.querySelector('.delete');
ravenous = document.querySelector('#br');
plus = document.querySelector('#plus');
str = '';
x1 = 0;

// объявление-----------------------------------------------------------------------------------------------------------







// очистка--------------------------------------------------------------------------------------------------------------

del.addEventListener('click',
    event => {
        event.preventDefault();
        str = '';
        pole.innerText = str;
    }
);

// очистка--------------------------------------------------------------------------------------------------------------




// равно----------------------------------------------------------------------------------------------------------------

ravenous.addEventListener('click',
    event => {
        event.preventDefault();
        pole.innerText = '';

    }
);

// равно----------------------------------------------------------------------------------------------------------------



// плюс-----------------------------------------------------------------------------------------------------------------

plus.addEventListener('click',
    event => {
        event.preventDefault();
        f(str);
        x1 = parseInt(str);
        f(`x1 = ${x1}`);
        pole.innerText = str = '';
    }
);

// плюс-----------------------------------------------------------------------------------------------------------------


const getValue = (selector) => {
    const mySelector = document.querySelector('#' + String(selector));

    mySelector.addEventListener('click',
        event => {
            event.preventDefault();
            str += mySelector.value;
            pole.innerText = str;
        }
    );
    return 0;
}

let button1,button2,button3,button4,button5,button6,button7,button8,button9;

button1 = getValue('b1');
button2 = getValue('b2');
button3 = getValue('b3');
button4 = getValue('b4');
button5 = getValue('b5');
button6 = getValue('b6');
button7 = getValue('b7');
button8 = getValue('b8');
button9 = getValue('b9');

let theme = document.querySelector('.theme');
let count = 0;

theme.addEventListener('click',
    event => {
        event.preventDefault();
        if (count = 0) {
            document.querySelector("body").style.background = '#000000';
            theme.src = 'icons/icons8-символ-луны-30.png'
            count++;
        } else {
            theme.style.background = 'white';
            count = 0;
        }
    }
)