<!--have it switch between new page and game iwth display transfer javascript-->

<!--131 line-->

<!DOCTYPE html>

<html>

    <head>

    <title>Family Ledger</title>

    <style>

        .popup-wrapper {
            
            position: fixed; 
            
            background-color: rgba(0, 0, 0, .5); 
            
            top: 0; 
            
            left: 0; 
            
            width: 100%; 
            
            height: 100%

        }

        .o {

            background-color: white;

            color: rgb(121, 255, 237);

            text-align: center;

            font-size: 2em;

        }

        .x {

            background-color: white;

            color: pink;

            text-align: center;

            font-size: 2em;

        }

        .pass {

            border: limegreen;

        }

        .error {

            border: crimson;

        }

    </style>

    <script>
    
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

    </script>
    
    </head>

    <div id = "main" style = "margin-bottom: 100px; margin-top: 60px">
        
        <body style = "background-color: black; color: white">
        
            <div style = "display: grid; place-items: center;">

                <h1 style = "text-align: center; font-family: monospace; font-size: 58px; color: rgb(121, 255, 237); border: 1px solid rgb(254, 231, 247); border-radius: 25px; padding: 20px 37px; margin-left: 16px">Tic Tac Toe</h1></a>

            </div>

            <div style = "display: grid; place-items: center;">

                <h1 style = "text-align: center; font-family: monospace; font-size: 58px; color: rgb(121, 255, 237); border: 1px solid rgb(254, 231, 247); border-radius: 25px 25px 100px 100px; padding: 20px 37px; margin-left: 17px; max-width: 384px; margin-top: 0px">(Player #1 &#8594 Turn)</h1>

            </div>

            <div style = "display: grid; place-items: center;">

                <div style = "max-width: 456px; min-width: 450px; margin-left: 20px;">

                    <div>
                    
                        <div class = "boardPiece" id = "squareOne" style = "border-top-left-radius: 40px; border: 1px solid white; width: 150px; height: 150px; float: left"></div>

                        <div class = "boardPiece" id = "squareTwo" style = "border: 1px solid white; width: 150px; height: 150px; float: left"></div>

                        <div class = "boardPiece" id = "squareThree" style = "border-top-right-radius: 40px; border: 1px solid white; width: 150px; height: 150px; float: left"></div>

                    </div>

                    <div>

                        <div class = "boardPiece" id = "squareFour" style = "border: 1px solid white; width: 150px; height: 150px; float: left"></div>

                        <div class = "boardPiece" id = "squareFive" style = "border: 1px solid white; width: 150px; height: 150px; float: left"></div>

                        <div class = "boardPiece" id = "squareSix" style = "border: 1px solid white; width: 150px; height: 150px; float: left"></div>

                    </div>

                    <div>

                        <div class = "boardPiece" id = "squareSeven" style = "border-bottom-left-radius: 40px; border: 1px solid white; width: 150px; height: 150px; float: left"></div>

                        <div class = "boardPiece" id = "squareEight" style = "border: 1px solid white; width: 150px; height: 150px; float: left"></div>

                        <div class = "boardPiece" id = "squareNine" style = "border-bottom-right-radius: 40px; border: 1px solid white; width: 150px; height: 150px; float: left"></div>

                    </div>

                </div>

            </div>

            <!--Make this way seperated from the main div so that it doesn't align weirdly or whatever is making it align with the form fix it please because it's oddly going with board left-->

            <!--Or the board left is screwed up-->

            <div id = "popup-wrapper1" class = "popup-wrapper">
            
                <div class = "popup" style = "overflow-y: auto; position: absolute; background-color: white; margin-left: 20%; margin-right: 20%; margin-top: 250px; max-height: 400px; color: black; border-radius: 25px;">

                    <a id = "topRules"></a>

                    <div class = "popup-content" style = "font-size: 40px; padding-left: 80px; padding-right: 30px">

                        <ol style = "padding-right: 20px; line-height: 40px; font-family: monospace">

                            <li><span style = "font-size: 30px;">Goal: Get Three X's Or O's In A Row</span></li>

                            <li style = "margin-top: 15px"><span style = "font-size: 30px;">Player's Alternate Turns Placing X's And O's On The 3 x 3 Grid</span></li>

                            <li style = "margin-top: 15px"><span style = "font-size: 30px;">You Have The Option To Perfect Your Play Against An Artifical Intelligence</span></li>

                        </ol>

                    </div>

                </div>     

            </div>

        </div>
        
        <div id = "popup-wrapper2" class = "popup-wrapper" style = "background-color: rgb(0, 0, 0); font-size: 40px; font-family: monospace; text-align: center; position: relative; display: none; margin-bottom: 100px">

            <form> 
    
                <h2 style = "font-size: 2.34em; text-align: center; padding-left: 50px; padding-right: 50px;">Player Names:</h2>

                <input class = "input" style = "height: 60px; width: 330px; text-align: center; font-family: 'Times New Roman'; border-radius: 25px; outline: none; border: none" type = "text" placeholder = "Player #1: " target = "name">
                
                <br><br>

                <input class = "input" style = "height: 60px; width: 330px; text-align: center; font-family: 'Times New Roman'; border-radius: 25px; outline: none; border: none" type = "text" placeholder = "Player #2: " target = "name">
                
                <h2 style = "font-size: 2.34em; padding-left: 30p;">AI or Human Opponent:</h2>

                <div style = "display: grid; place-items: center;">

                    <div style = "max-width: 500px">

                        <select id = "cars" name="cars" style = "height: 60px; width: 330px; text-align: center; font-family: 'Times New Roman'; border-radius: 25px; outline: none; border: none">

                            <option value="volvo">Artificial Intelligence (Computer)</option>

                            <option value="saab">Human Opponent</option>

                        </select>

                        <input id = "submit" style = "width: 70%; height: 60px; width: 330px; text-align: center; font-family: 'Times New Roman'; border-radius: 25px; outline: none; margin-top: 40px; border: none;" type="submit" value = "Start Game!" target="send">

                    </div>

                </div>

            </form>

        </div>
        
        <a href = "#topRules"><button id = "button1" style = "position: fixed; bottom: 7.5px; left: 10px; border: 1px solid black; border-radius: 40px; padding: 10px; border: none">Rules!</button></a>

        <button id = "button2" style = "position: fixed; bottom: 7.5px; left: 80px; border: 1px solid black; border-radius: 40px; padding: 10px; border: none">New Game!</button>

        <script src = "popup.js"></script>
        
    </body>

</html>
