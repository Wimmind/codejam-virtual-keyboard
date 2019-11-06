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

let firstlineS = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '|'];

let out = '';
function init_en(){
        loop:
        for (let i = 0; i < keyboard_en.length; i++){
            if(keyboard_en[i] === "Backspace"){
                out += '<div class="word_bcs click" data="'+keyboard_code[i]+'"><p>Backspace</p></div>';
                continue loop;
            }
            if(keyboard_en[i] === "Tab"){
                out += '<div class="word_tab click" data="'+keyboard_code[i]+'"><p>Tab</p></div>';
                continue loop;
            }
            if(keyboard_en[i] === "CapsLock"){
                out += '<div class="word_bcs click" data="'+keyboard_code[i]+'"><p>CapsLock</p></div>';
                continue loop;
            }
            if(keyboard_en[i] === "Enter"){
                out += '<div class="word_es click" data="'+keyboard_code[i]+'"><p>Enter</p></div>';
                continue loop;
            }
            if(keyboard_en[i] === "ShiftL"){
                out += '<div class="word_bcs click" data="'+keyboard_code[i]+'"><p>ShiftL</p></div>';
                continue loop;
            }
            if(keyboard_en[i] === 'ShiftR'){
                out += '<div class="word_es click" data="'+keyboard_code[i]+'"><p>ShiftR</p></div>';
                continue loop;
            }
            if(keyboard_en[i] === "Space"){
                out += '<div class="word_space click" data="'+keyboard_code[i]+'"><p> </p></div>';
                continue loop;
            }
            else {
                out +='<div class="word click" data="'+keyboard_code[i]+'"><p>'+(keyboard_en[i])+'</p></div>';
            }
    }
    document.querySelector('#keyboard').innerHTML = out;
}

function init_ru(){
    loop:
    for (let i = 0; i < keyboard_ru.length; i++){
        if(keyboard_en[i] === "Backspace"){
            out += '<div class="word_bcs click" data="'+keyboard_code[i]+'"><p>Backspace</p></div>';
            continue loop;
        }
        if(keyboard_ru[i] === "Tab"){
            out += '<div class="word_tab click" data="'+keyboard_code[i]+'"><p>Tab</p></div>';
            continue loop;
        }
        if(keyboard_ru[i] === "CapsLock"){
            out += '<div class="word_bcs click" data="'+keyboard_code[i]+'"><p>CapsLock</p></div>';
            continue loop;
        }
        if(keyboard_ru[i] === "Enter"){
            out += '<div class="word_es click" data="'+keyboard_code[i]+'"><p>Enter</p></div>';
            continue loop;
        }
        if(keyboard_ru[i] === "ShiftL"){
            out += '<div class="word_bcs click" data="'+keyboard_code[i]+'"><p>ShiftL</p></div>';
            continue loop;
        }
        if(keyboard_ru[i] === 'ShiftR'){
            out += '<div class="word_es click" data="'+keyboard_code[i]+'"><p>ShiftR</p></div>';
            continue loop;
        }
        if(keyboard_ru[i] === "Space"){
            out += '<div class="word_space click" data="'+keyboard_code[i]+'"><p> </p></div>';
            continue loop;
        }
        else {
            out +='<div class="word click" data="'+keyboard_code[i]+'"><p>'+(keyboard_ru[i])+'</p></div>';
        }
}
document.querySelector('#keyboard').innerHTML = out;
}

init_en();
let flag = false;
document.onkeydown = function (e){
    if (e.code==="ControlLeft") flag = true;
    if (e.code == "AltLeft" && flag) {
        flag = false; 
        init_ru()
    }
}


document.onkeypress = function(e){// клава
    document.querySelectorAll('.click').forEach(function(elem){
        elem.classList.remove('active');
    });
    document.querySelector('.click[data="'+e.code+'"]').classList.add('active');
    if (document.querySelector('.active p').textContent==="Backspace"){
        document.querySelector('#area').textContent=document.querySelector('#area').textContent.replace(/.$/, "");
    }
    else if (document.querySelector('.active p').textContent==="Tab"){
        document.querySelector('#area').textContent+="     ";

    }
    else if (document.querySelector('.active p').textContent==="Del" ||
             document.querySelector('.active p').textContent==="CtrlL" ||
             document.querySelector('.active p').textContent==="Win" ||
             document.querySelector('.active p').textContent==="Alt" ||
             document.querySelector('.active p').textContent==="CtrlR"
            ){
        document.querySelector('#area').textContent+="";

    }
    else if (document.querySelector('.active p').textContent==="Enter"){
        document.querySelector('#area').textContent+="\n";
    }
    else {
        document.querySelector('#area').textContent+=document.querySelector('.active p').textContent;
    }
}


document.querySelectorAll('.click').forEach(function(elem){ //мышь
    elem.onclick = function(e){
        document.querySelectorAll('.click').forEach(function(elem){
            elem.classList.remove('active');
        });
        this.classList.add('active');
        if (document.querySelector('.active p').textContent==="Backspace"){
            document.querySelector('#area').textContent=document.querySelector('#area').textContent.replace(/.$/, "");
        }
        else if (document.querySelector('.active p').textContent==="Tab"){
            document.querySelector('#area').textContent+="     ";

        }
        else if (document.querySelector('.active p').textContent==="Del" ||
                 document.querySelector('.active p').textContent==="CtrlL" ||
                 document.querySelector('.active p').textContent==="Win" ||
                 document.querySelector('.active p').textContent==="Alt" ||
                 document.querySelector('.active p').textContent==="CtrlR"
                ){
            document.querySelector('#area').textContent+="";

        }
        else if (document.querySelector('.active p').textContent==="Enter"){
            document.querySelector('#area').textContent+="\n";
        }
        else if (document.querySelector('.active p').textContent==="CapsLock"){
            document.querySelector('#area').textContent+=document.querySelector('.active p').textContent.toUpperCase();
        }
        else {
            document.querySelector('#area').textContent+=document.querySelector('.active p').textContent;
        }
    }
});



