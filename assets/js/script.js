const currentValue = document.querySelector('#currentValue');
const answerScreen = document.querySelector('#answerScreen');
const buttons = document.querySelectorAll('button');
const eraseBtn = document.querySelector('#eraseBtn');
const clearBtn = document.querySelector('#clearBtn');
const evaluate = document.querySelector('#evaluate');
let realTimeScreenValue = [];

clearBtn.addEventListener('click', function() {
    realTimeScreenValue = [];
    answerScreen.innerHTML = 0;
    currentValue.innerHTML = 0;
});

buttons.forEach(function(btn, idx){
    btn.addEventListener('click', function(){
        if(btn.id !== 'eraseBtn' && btn.id !== 'evaluate' && btn.id !== 'clearBtn'){
            realTimeScreenValue.push(btn.value);
            currentValue.innerHTML = realTimeScreenValue.join('');
           if(btn.classList.contains('num_btn')){
            answerScreen.innerHTML = eval(realTimeScreenValue.join(''))
           }
        }
        
        if(btn.id === 'eraseBtn'){
            realTimeScreenValue.pop();
            currentValue.innerHTML = realTimeScreenValue.join('');
            answerScreen.innerHTML = eval(realTimeScreenValue.join(''));
        }
        if(btn.id === 'evaluate'){
            currentValue.innerHTML = eval(realTimeScreenValue.join(''));
            answerScreen.innerHTML = 0;
        }
    });
});