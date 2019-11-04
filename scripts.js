let keyboard_ru = [
    "ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=","Backspace",
    "Tab","й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "\\","Del",
    "CapsLock","ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", 'э',"Enter",
    "ShiftL","я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".","↑",'ShiftR',
    "CtrlL", "Win", "Alt", "Space","Alt","←","↓", "→", "CtrlR"
];

let keyboard_en = [
    "~", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace",
    "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\","Del",
    "CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ":", '"', "Enter",
    "ShiftL", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/","↑", "ShiftR",
    "CtrlL", "Win", "Alt", "Space", "Alt","←","↓", "→","CtrlR"
    ];

let keyboard_code = [
    "Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace",
    "Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash","Delete",
    "CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Enter",
    "ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash","ArrowUp", "ShiftRight",
    "ControlLeft", "MetaLeft", "AltLeft","Space", "AltRight","ArrowLeft","ArrowDown","ArrowRight", "ControlRight"
    ];
let out = '';
function init_en(){
        loop:
        for (let i = 0; i < keyboard_en.length; i++){
            if(keyboard_en[i] === "Backspace"){
                out += '<div class="word_bcs" data="'+keyboard_code[i]+'"><p>Backspace</p></div>';
                continue loop;
            }
            if(keyboard_en[i] === "Tab"){
                out += '<div class="word_tab" data="'+keyboard_code[i]+'"><p>Tab</p></div>';
                continue loop;
            }
            if(keyboard_en[i] === "CapsLock"){
                out += '<div class="word_bcs" data="'+keyboard_code[i]+'"><p>CapsLock</p></div>';
                continue loop;
            }
            if(keyboard_en[i] === "Enter"){
                out += '<div class="word_es" data="'+keyboard_code[i]+'"><p>Enter</p></div>';
                continue loop;
            }
            if(keyboard_en[i] === "ShiftL"){
                out += '<div class="word_bcs" data="'+keyboard_code[i]+'"><p>ShiftL</p></div>';
                continue loop;
            }
            if(keyboard_en[i] === 'ShiftR'){
                out += '<div class="word_es" data="'+keyboard_code[i]+'"><p>ShiftR</p></div>';
                continue loop;
            }
            if(keyboard_en[i] === "Space"){
                out += '<div class="word_space" data="'+keyboard_code[i]+'"><p></p></div>';
                continue loop;
            }
            else {
                out +='<div class="word" data="'+keyboard_code[i]+'"><p>'+(keyboard_en[i])+'</p></div>';
            }
    }
    document.querySelector('#keyboard').innerHTML = out;
}

init_en();

document.onkeypress = function(e){

    document.querySelectorAll('#keyboard .word').forEach(function(elem){
        elem.classList.remove('active');
    });
    document.querySelector('#keyboard .word[data="'+e.code+'"]').classList.add('active');


    document.querySelector('#keyboard .word_tab[data="'+e.code+'"]').classList.add('active');
    document.querySelector('#keyboard .word_bcs[data="'+e.code+'"]').classList.add('active');
    document.querySelector('#keyboard .word_es[data="'+e.code+'"]').classList.add('active');
    document.querySelector('#keyboard .word_space[data="'+e.code+'"]').classList.add('active');
}




document.querySelectorAll('#keyboard .word').forEach(function(elem){
    elem.onclick = function(e){
        document.querySelectorAll('#keyboard .word').forEach(function(elem){
            elem.classList.remove('active');
        });
        this.classList.add('active');
    }
});