const f = (text) => {
  console.log(text);
}

let pole, myStr, result, myrtle;

myStr = result ='';
pole = document.querySelector('.input-text');

const numbers = document.querySelectorAll(".button");

for (let i = 0; i < numbers.length; i++) {
    let button = numbers[i];
    button.addEventListener('click', event => {
        event.preventDefault();
        result += button.value;
        pole.innerText = result;
    });
}

const actions = document.querySelectorAll('.any-button')
for (let i = 0; i < actions.length; i++) {
    if (myrtle[myrtle.length - 1] !== actions[i].value)
        actions[i].addEventListener('click',
            event => {
                event.preventDefault();
                myrtle = eval(result);
                result = '';
                pole.innerText = myrtle;
            }
        );
}
const ravenous = document.querySelector('#br');
ravenous.addEventListener('click',
    event => {
        event.preventDefault();
        myrtle = eval(result);
        result = '';
        pole.innerText = myrtle;
    }
);

changeTheme();
function changeTheme () {
    let myLine, theme;
    myLine = true;
    theme = document.querySelectorAll('.theme');
    theme.forEach((item) => {
            item.addEventListener('click',
                event => {
                    event.preventDefault();
                    if (myLine && item.innerText === 'тёмная') {
                        document.querySelector('body').classList.add('dark');
                        myLine = false;
                    } else if (myLine === false && item.innerText === 'светлая') {
                        document.querySelector('body').classList.remove('dark');
                        myLine = true;
                    }
                }
            );
        }
    );
    return 0;
}

f('done');