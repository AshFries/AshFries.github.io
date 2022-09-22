const button1 = document.querySelector('#button1');

const main = document.querySelector('#main');

const popupWrapper1 = document.getElementById('popup-wrapper1');

const button2 = document.querySelector('#button2');

const popupWrapper2 = document.getElementById('popup-wrapper2');

const placeHolders = document.querySelectorAll('.input');

const submitButton = document.querySelector('#submit');

const inputs = document.querySelectorAll('input');

const select = document.querySelector('select');

popupWrapper1.style.display = 'none';

popupWrapper2.style.display = 'none';

button1.addEventListener('click', _ => {

    if (main.style.display === 'none') {
        
        window.scrollTo(0, 0);
        
        popupWrapper1.style.display = 'none';

        popupWrapper2.style.display = 'none';

        main.style.display = 'block';

        button2.style.display = 'block';

        popupWrapper1.style.display = 'none';

        button1.style.backgroundColor = 'white';

        button1.style.color = 'black';
        
        button1.textContent = "Rules!";

        button2.style.left = '80px';
    
    } else if (popupWrapper1.style.display === 'none' && popupWrapper2.style.display === 'none') {
        
        popupWrapper1.style.display = 'block';

        button1.style.backgroundColor = 'pink';

        button1.style.color = 'white';

        button1.textContent = "X";

        button2.style.left = '50px';

    } else if (popupWrapper2.style.display === 'none'){

        popupWrapper1.style.display = 'none';

        button1.style.backgroundColor = 'white';

        button1.style.color = 'black';
        
        button1.textContent = "Rules!";

        button2.style.left = '80px';
    
    }

});

button2.addEventListener('click', _ => {

    window.scrollTo(0, 0);

    popupWrapper1.style.display = 'none';

    main.style.display = 'none';

    //Have all variables restart here

    button1.style.backgroundColor = 'pink';

    button1.style.color = 'white';

    button1.textContent = "X";

    button2.style.display = 'none';

    popupWrapper2.style.display = 'block';

});

placeHolders.forEach((placeHolder, n) => {

    placeHolder.addEventListener('mouseover', _ => {

        if (n === 0) {

            placeHolders[1].placeholder = "Player #2:";

        } else {

            placeHolders[0].placeholder = "Player #1:"
        }

        placeHolder.placeholder = "";

        placeHolder.setSelectionRange(0, 0);

        placeHolder.focus();

    });

    placeHolder.addEventListener('mouseout', _ => {

        let flag = true;

        placeHolder.addEventListener('click', _ => {

            flag = false;

        });

        //now we just have to make it so that if we run over both of them it automatically changes one

        document.body.addEventListener('click', _ => {

            if (n === 0 && flag) {

                placeHolder.placeholder = "Player #1:";

            } else if (flag) {

                placeHolder.placeholder = "Player #2:";

            }

        });

    });

});

enterList = [false, false, false, false]

inputs.forEach((input, index) => {

    input.addEventListener('mouseover', _ => {

        input.style.backgroundColor = 'grey';
    
    });
    
    input.addEventListener('mouseout', _ => {
    
        //Have it lock onto grey once submitted

        //Next step is forEach with boxes in grid for clicking on functions what we can and cannot do
        
        //Then gitHub stuff
        
        if (!enterList[index]) {

            input.style.backgroundColor = 'white';
    
        }

    });

});

select.addEventListener('mouseover', _ => {

    select.style.backgroundColor = 'grey';

});

select.addEventListener('mouseout', _ => {

    if (!enterList[2]) {

        select.style.backgroundColor = 'white';
    
    }

});














