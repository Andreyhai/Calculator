const f = (text) => {
  console.log(text);
}

// объявление-----------------------------------------------------------------------------------------------------------

let pole, del, ravenous, str, plus, x1, flag, flag2, x2;

pole = document.querySelector('.input-text');
del = document.querySelector('.delete');
ravenous = document.querySelector('#br');
plus = document.querySelector('#plus');
str = '';
x1 = x2 = 0;
flag = flag2 = false;
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

        if (w) {
            x2 = parseInt(str);
            f(`x2 = ${x2}`);
            x1 += x2;
            f(`x1 + x2 = ${x1}`)
            pole.innerText = x1;
        }

    }
);

// равно----------------------------------------------------------------------------------------------------------------



// плюс-----------------------------------------------------------------------------------------------------------------

plus.addEventListener('click',
    event => {
        event.preventDefault();
        if (w) {
            pole.innerText = x1;
        } else {
            x1 = parseInt(str);
            flag = true;
            f(`x1 = ${x1}`);
            pole.innerText = str = '';
        }
    }
);

// плюс-----------------------------------------------------------------------------------------------------------------

let w = false;
const getValue = (selector) => {
    const mySelector = document.querySelector('#' + String(selector));

    mySelector.addEventListener('click',
        event => {
            event.preventDefault();
            if (flag) {
                str += mySelector.value;
                pole.innerText = str;
                w = true;
            } else {
                str += mySelector.value;
                pole.innerText = str;
            }
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