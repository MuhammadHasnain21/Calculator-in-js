let inputValue = document.querySelector("#inpCalcu");
let btns = document.querySelectorAll(".btns");
let clearBtn = document.getElementById('btn-Clear');
let equalBtn = document.getElementById('btn-equal');
let XBtn = document.querySelector("#btn-X")
let button = ``;
// on keyboard keys



document.addEventListener('keydown', (e) => {
    console.log(e.key);
    
    if (e.key !== 'Enter') {
        if (e.key === '=') {
            alert("You can calculate by pressing the 'enter' button instead of '=' sign");
        } else if (e.key === 'Backspace' || e.keyCode === 8) {
            e.preventDefault();
            inputValue.value = inputValue.value.slice(0, -1); 
        } else if (e.key.length === 1) {
            inputValue.value += e.key;
        }
    } else {
        try {
            inputValue.value = eval(inputValue.value);
        } catch (error) {
            console.log(error);
            inputValue.value = 'Error';
        }
    }
});




// on buttons
btns.forEach(button => {
    button.addEventListener("click", () => {
        inputValue.value += button.value;
    });
});

clearBtn.addEventListener('click', () => {
    inputValue.value = inputValue.value.slice(0, -1); 
});


equalBtn.addEventListener('click', () => {
    try {
        inputValue.value = eval(inputValue.value);
    } catch (error) {
        console.log(error)
        inputValue.value = 'Error'
    }
});
