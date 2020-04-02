
window.onload = ()=> {
  // враппер
  let divWrapper = document.createElement('div');
  divWrapper.classList.add('wrapper');
  document.querySelector('body').append(divWrapper);
  // текстареа
  let textarea = document.createElement('textarea');
  textarea.classList.add('textarea');
  textarea.setAttribute('tabindex', '0');
  document.querySelector('.wrapper').append(textarea);

  // клава
  let keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');
  document.querySelector('.wrapper').append(keyboard);

  let buttons = [
      [
        ['Backquote', 'ё', 'Ё', '`', '~'], ['Digit1', '1', '!', '1', '!'], ['Digit2', '2', '"', '2', '@'], ['Digit3', '3', '№', '3', '#'], ['Digit4', '4', ';', '4', '$'],
        ['Digit5', '5', '%', '5', '%'], ['Digit6', '6', ':', '6', '^'], ['Digit7', '7', '?', '7', '&'], ['Digit8', '8', '*', '8', '*'], ['Digit9', '9', '(', '9', '('],
        ['Digit0', '0', ')', '0', ')'], ['Minus', '-', '_', '-', '_'], ['Equal', '=', '+', '=', '+'], ['Backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace']
      ],
      [
        ['Tab', 'Tab', 'Tab', 'Tab', 'Tab'], ['KeyQ', 'й', 'Й', 'q', 'Q'], ['KeyW', 'ц', 'Ц', 'w', 'W'], ['KeyE', 'у', 'У', 'e', 'E'], ['KeyR', 'к', 'К', 'r', 'R'], 
        ['KeyT', 'е', 'Е', 't', 'T'],['KeyY', 'н', 'Н', 'y', 'Y'], ['KeyU', 'г', 'Г', 'u', 'U'], ['KeyI', 'ш', 'Ш', 'i', 'I'], ['KeyO', 'щ', 'Щ', 'o', 'O'], ['KeyP', 'з', 'З', 'p', 'P'],
        ['BracketLeft', 'х', 'Х', '[', '{'], ['BracketRight', 'ъ', 'Ъ', ']', '}'],['Backslash', '\\', '/', '\\', '|'], ['Delete', 'Del', 'Del', 'Del', 'Del']
      ],
      [
        ['CapsLock', 'Caps Lock', 'Caps Lock', 'Caps Lock', 'Caps Lock'], ['KeyA', 'ф', 'Ф', 'a', 'A'], ['KeyS', 'ы', 'Ы', 's', 'S'], ['KeyD', 'в', 'В', 'd', 'D'], 
        ['KeyF', 'а', 'А', 'f', 'F'],['KeyG', 'п', 'П', 'g', 'G'], ['KeyH', 'р', 'Р', 'h', 'H'], ['KeyJ', 'о', 'О', 'j', 'J'], ['KeyK' ,'л', 'Л', 'k', 'K'], ['KeyL', 'д', 'Д', 'l', 'L'], 
        ['Semicolon', 'ж', 'Ж', ';', ':'],['Quote', 'э', 'Э', '\'', '\"'], ['Enter', 'Enter', 'Enter', 'Enter', 'Enter']
      ],
      [
        ['ShiftLeft', 'Shift', 'Shift', 'Shift', 'Shift'], ['KeyZ', 'я', 'Я', 'z', 'Z'], ['KeyX', 'ч', 'Ч', 'x', 'X'], ['KeyC', 'с', 'С', 'c', 'C'], ['KeyV', 'м', 'М', 'v', 'V'], ['KeyB', 'и', 'И', 'b', 'B'],
        ['KeyN', 'т', 'Т', 'n', 'N'], ['KeyM', 'ь', 'Ь', 'm', 'M'], ['Comma', 'б', 'Б', ',', '<'], ['Period', 'ю', 'Ю', '.', '>'], ['Slash', '.', ',', '/', '?'],
        ['ArrowUp','↑','↑','↑','↑'],['ShiftRight', 'Shift', 'Shift', 'Shift', 'Shift']
      ],
      [
        ['ControlLeft', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'], ['MetaLeft', 'Win', 'Win', 'Win', 'Win'], ['AltLeft', 'Alt', 'Alt', 'Alt', 'Alt'], ['Space', 'Space', 'Space', 'Space', 'Space'],
        ['AltRight', 'Alt', 'Alt', 'Alt', 'Alt'],
        ['ArrowLeft','←','←','←','←'],['ArrowDown','↓','↓','↓','↓'],['ArrowRight','→','→','→','→'], ['ControlRight', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl']
      ]
  ];


  let ruSmall = 1;
  let engSmall = 3;


  let ctrlAlt = false; //рус
  let capslockButton = false;


  let shiftButton = false;

  let generateKeyboard = (elem,shift) => {
    keyboard.innerHTML = '';
    for (let i = 1; i <= 5; i++) {
        let keyboardRow = document.createElement('div');
        keyboardRow.classList.add('keyboard-row',`keyboard__row-${i}`,);
        document.querySelector('.keyboard').append(keyboardRow);

        buttons[i-1].forEach((button) => {  

            let buttonKey = document.createElement('div');
            buttonKey.classList.add('key');
            document.querySelector(`.keyboard__row-${i}`).append(buttonKey);

            if (button[0] === 'Backspace' || button[0] === 'CapsLock' || button[0] === 'ShiftLeft' || button[0] === 'ShiftRight' || button[0] === 'Enter') {
                buttonKey.classList.add('key_medium', 'system');
            }
            if (button[0] === 'ControlLeft' || button[0] === 'ControlRight') {
                buttonKey.classList.add('key_small', 'system');
            }
            if (button[0] === 'Space') {
                buttonKey.classList.add('key_big', 'system');
            }
            if (button[0] === 'MetaLeft' || button[0] === 'AltLeft' || button[0] === 'AltRight' || button[0] === 'Delete' || button[0] === 'Tab') {
                buttonKey.classList.add('system');
            }

            if (!shift){
                buttonKey.textContent = button[elem];
                if (!buttonKey.classList.contains('system')) {
                    buttonKey.setAttribute('value', button[elem]);
                    buttonKey.setAttribute('system-value', button[0]);
                } else {
                    buttonKey.setAttribute('value', '');
                    buttonKey.setAttribute('system-value', button[0]);
                }
            }
            else {
                buttonKey.textContent = button[elem+1];
                if (!buttonKey.classList.contains('system')) {
                    buttonKey.setAttribute('value', button[elem+1]);
                    buttonKey.setAttribute('system-value', button[0]);
                } else {
                    buttonKey.setAttribute('value', '');
                    buttonKey.setAttribute('system-value', button[0]);
                }
            }

        });
    }
  }
  generateKeyboard(ruSmall,shiftButton);

  let backspaceFunc = () =>{
    document.querySelector('.textarea').value = document.querySelector('.textarea').value.slice(0, -1);
  };
  let tabFunc = () => {
    document.querySelector('.textarea').value += '    ';
  }
  let spaceFunc = () => {
    document.querySelector('.textarea').value += ' ';
  } 
  let enterFunc = () => {
    document.querySelector('.textarea').value += '\n';
  }
  let deleteFunc = () => {
      let startText = document.querySelector('.textarea').selectionStart;
      let endText = document.querySelector('.textarea').selectionEnd;
      let longText = endText - startText;
      if (startText === endText) {
          longText = 1;
      }
      document.querySelector('.textarea').value = document.querySelector('.textarea').value.slice(0, startText)+ document.querySelector('.textarea').value.slice(startText+longText);
      document.querySelector('.textarea').selectionStart = startText;
      document.querySelector('.textarea').selectionEnd = startText;
  };

  // клик мышь

  document.querySelector('.keyboard').addEventListener('click', (event) => {
    if (event.target.classList.contains('key')){
        document.querySelector('.textarea').focus();

        event.target.classList.add('active');
        setTimeout(()=> { event.target.classList.remove('active');}, 300);

        if (!capslockButton){
            document.querySelector('.textarea').value += event.target.getAttribute('value');
        }
        else {
            document.querySelector('.textarea').value += event.target.getAttribute('value').toUpperCase();
        }

        let systemValue = event.target.getAttribute('system-value');

        if (systemValue === 'Backspace') {
            backspaceFunc();
        }
        if (systemValue === 'Tab') {
            tabFunc();
        }
        if (systemValue === 'Space') {
            spaceFunc();
        }
        if (systemValue === 'Enter') {
            enterFunc();
        }
        if (systemValue === 'Delete') {
            deleteFunc();
        }
        if (systemValue === 'CapsLock') {
            if (!capslockButton) {
                capslockButton = true;
            }
            else {
                capslockButton = false;
            }
        }
    }
  });

  // клавиша клавиутры нажатие



  /*document.querySelector('.keyboard').addEventListener('keydown', (event) => {
    console.log(event.code)
    event.preventDefault();
    if (event.target.classList.contains('key')){
        document.querySelector('.textarea').focus();
        let systemValue = event.target.getAttribute('system-value');
        let pressedButton = event.code;

        if (pressedButton === systemValue) {
            buttonKey.classList.add('active');
            if (!capslockButton){
                document.querySelector('.textarea').value += event.target.getAttribute('value');
            }
            else {
                document.querySelector('.textarea').value += event.target.getAttribute('value').toUpperCase();
            }
        }
        if (pressedButton === systemValue && systemValue === 'Backspace') {
            backspaceFunc();
        }
        if (pressedButton === systemValue && systemValue === 'Tab') {
            tabFunc();
        }
        if (pressedButton === systemValue && systemValue === 'Space') {
            spaceFunc();
        }
        if (pressedButton === systemValue && systemValue === 'Enter') {
            enterFunc();
        }
        if (pressedButton === systemValue && systemValue === 'Delete') {
            deleteFunc();
        }
        if (pressedButton === systemValue && systemValue === 'ShiftLeft') {
            shiftButton =true;
            generateKeyboard(ruSmall,shiftButton);
            
        }
        if (pressedButton === systemValue && systemValue === 'CapsLock') {
            if (!capslockButton) {
                capslockButton = true;
            }
            else {
                capslockButton = false;
            }
        }
        if (pressedButton === systemValue && systemValue === 'AltLeft') {
            if (!ctrlAlt){
                ctrlAlt = true;
                generateKeyboard(engSmall,shiftButton);
            }
            else {
                ctrlAlt = false;
                generateKeyboard(ruSmall,shiftButton);
            }
        }

    }
  });


  document.querySelector('.keyboard').addEventListener('keyup', (event) => {
    if (event.target.classList.contains('key')){
        let pressedButton = event.code;
        let systemValue = event.target.getAttribute('system-value');
        if (pressedButton === systemValue && systemValue === 'ShiftLeft') {
            shiftButton = false;
            generateKeyboard(ruSmall,shiftButton);
        }
        if (pressedButton === systemValue) {
            event.target.classList.remove('active');
        }
    }
  });
   */

  let ctrl;
  let alt;

  document.addEventListener('keydown', (event) => {
    event.preventDefault();
    document.querySelector('.textarea').focus();
    
    document.querySelectorAll('.key').forEach((buttonKey) => {
        let systemValue = buttonKey.getAttribute('system-value');
        let pressedButton = event.code;

        if (pressedButton === systemValue) {
            buttonKey.classList.add('active');
            if (!capslockButton){
                document.querySelector('.textarea').value += buttonKey.getAttribute('value');
            }
            else {
                document.querySelector('.textarea').value += buttonKey.getAttribute('value').toUpperCase();
            }
        }
        if (pressedButton === systemValue && systemValue === 'Backspace') {
            backspaceFunc();
        }
        if (pressedButton === systemValue && systemValue === 'Tab') {
            tabFunc();
        }
        if (pressedButton === systemValue && systemValue === 'Space') {
            spaceFunc();
        }
        if (pressedButton === systemValue && systemValue === 'Enter') {
            enterFunc();
        }
        if (pressedButton === systemValue && systemValue === 'Delete') {
            deleteFunc();
        }
        if (pressedButton === systemValue && systemValue === 'ShiftLeft') {
            shiftButton =true;
            generateKeyboard(ruSmall,shiftButton);
            
        }
        if (pressedButton === systemValue && systemValue === 'CapsLock') {
            if (!capslockButton) {
                capslockButton = true;
            }
            else {
                capslockButton = false;
            }
        }
       /* if (pressedButton === systemValue && systemValue === 'AltLeft' ) {
            if (!ctrlAlt){
                ctrlAlt = true;
                generateKeyboard(engSmall,shiftButton);
            }
            else {
                ctrlAlt = false;
                generateKeyboard(ruSmall,shiftButton);
            }
        }*/
        if (buttonKey.getAttribute('system-value')==='ControlLeft'){
            ctrl = buttonKey;
        } 
        if (buttonKey.getAttribute('system-value')==='AltLeft') {
            alt = buttonKey;
        }

    });
  });
    // клавиша клавиутры отжатие
    document.addEventListener('keyup', (event) => {
        let pressedButton = event.code;
        document.querySelectorAll('.key').forEach((buttonKey) => {
            let systemValue = buttonKey.getAttribute('system-value');
            if (pressedButton === systemValue && systemValue === 'ShiftLeft') {
                shiftButton = false;
                generateKeyboard(ruSmall,shiftButton);
            }
            if (pressedButton === systemValue) {
                buttonKey.classList.remove('active');
            }
        });
    });

    if (ctrl.classList.contains('active') && alt.classList.contains('active')) {
        if (!ctrlAlt){
            ctrlAlt = true;
            generateKeyboard(engSmall,shiftButton);
        }
        else {
            ctrlAlt = false;
            generateKeyboard(ruSmall,shiftButton);
        }
    }


};