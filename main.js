const f = (text) => {
  console.log(text);
}

// объявление-----------------------------------------------------------------------------------------------------------

let pole, ravenous, str, plus, myStr, minus, pro, sqrt, flag, del, theme;

pole = document.querySelector('.input-text');
ravenous = document.querySelector('#br');
plus = document.querySelector('#plus');
sqrt = document.querySelector('#sqrt');
pro = document.querySelector('#pro');
minus = document.querySelector('#minus');
del = document.querySelector('.delete');
theme = document.querySelectorAll('.theme');
flag = false;
str = myStr = '';

// объявление-----------------------------------------------------------------------------------------------------------







// очистка--------------------------------------------------------------------------------------------------------------

del.addEventListener('click',
    () => {
    pole.innerText = str = myStr = '';
    }
)

// очистка--------------------------------------------------------------------------------------------------------------




// равно----------------------------------------------------------------------------------------------------------------

ravenous.addEventListener('click',
    event => {
        event.preventDefault();
        if (flag) {
            myStr += `${str})`;
            f(myStr);
            f(eval(myStr));
            pole.innerText = eval(myStr);
            str = myStr = '';
        } else {
            f(`str = ${str}`);
            myStr += str;
            f(`myStr = ${myStr}`)
            pole.innerText = eval(myStr);
            str = myStr = '';
        }
    }
);

// равно----------------------------------------------------------------------------------------------------------------



// плюс-----------------------------------------------------------------------------------------------------------------

plus.addEventListener('click',
    event => {
        event.preventDefault();
        f(`str = ${str}`);

        myStr += `${str}+`;
        f(`myStr = ${myStr}`);
        pole.innerText = str = '';
    }
);

// плюс-----------------------------------------------------------------------------------------------------------------

// минус----------------------------------------------------------------------------------------------------------------

minus.addEventListener('click',
    event => {
        event.preventDefault();
        f(`str = ${str}`);

        myStr += `${str}-`;
        f(`myStr = ${myStr}`);
        pole.innerText = str = '';
    }
);

// минус----------------------------------------------------------------------------------------------------------------

// корень---------------------------------------------------------------------------------------------------------------

sqrt.addEventListener('click',
    event => {
        event.preventDefault();
        f(`str = ${str}`);
        pole.innerText = sqrt.value;
        myStr += `Math.sqrt(`;
        flag = true;
        f(flag);
        f(`myStr = ${myStr}`);
        pole.innerText = str = '';
    }
);

// корень---------------------------------------------------------------------------------------------------------------

// произведение---------------------------------------------------------------------------------------------------------

pro.addEventListener('click',
    event => {
        event.preventDefault();
        f(`str = ${str}`);

        myStr += `${str}*`;
        f(`myStr = ${myStr}`);
        pole.innerText = str = '';
    }
);

// произведение---------------------------------------------------------------------------------------------------------

// тема-----------------------------------------------------------------------------------------------------------------


const body = document.querySelector('body');
document.querySelector('.theme1').addEventListener('click',
    event => {
        event.preventDefault();
        body.cssText = 'background: aqua';
        alert(0)
    }
)
document.querySelector('.theme2').addEventListener('click',
    event => {
        event.preventDefault();
        body.cssText = 'background: white';
        alert(1)
    }
)
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

f('done');