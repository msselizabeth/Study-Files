const form = document.querySelector('.js-form');
form.addEventListener('submit', onSubmitForm);
const weightHuman = document.querySelector('.js-input-weight');
const heightHuman = document.querySelector('.js-input-height');
const resultBMI = document.querySelector('.result-BMI');
const containerTryAgain = document.querySelector('.js-container-try-again')

const newButton = document.createElement('button');
newButton.textContent = 'Check Again';
newButton.classList.add('btn-BMI');
    
function onSubmitForm(e) {
    e.preventDefault();
    const BMI = getBMI(weightHuman.value, heightHuman.value);
    if (!BMI) {
        return false;
    }
    const activeColorInput = [weightHuman, heightHuman];
    activeColorInput.map(input => input.value === ''? input.style.borderColor = "red" : input.style.borderColor = "grey")
    if (weightHuman.value === '' || heightHuman.value === '') {
        return false;
    } 
    resultBMI.textContent = `Result: ${BMI}`;

    
    containerTryAgain.append(newButton);

}

newButton.addEventListener('click', tryAgainCheckBMI)

// function getBMI считает и возвращает коэфициент массы тела человека, 
function getBMI(m, h) {
    let numberWeight = Number(m);
    let numberHeight = Number(h);
   
    if (isNaN(numberHeight) || isNaN(numberWeight)) {
        return alert("Enter a valid values")
    };
    const validHeight = checkValueOfHeight(numberHeight);
   
    return (numberWeight / validHeight ** 2).toFixed(2);
}

// function checkValueOfHeight проверяет и возвращает значение роста человека, в зависимости от того, в каком виде введут значение(в м или см).
function checkValueOfHeight(height) {
    if (height > 100) {
        return height / 100;
    }
    return height;
}

// function tryAgainCheckBMI очищает форму и результат при желании повторно воспользовать калькулятором
function tryAgainCheckBMI() {
    form.reset();
    newButton.remove();
    resultBMI.textContent = 'Result:'
}

