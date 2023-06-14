const form = document.querySelector('.js-form-love');
form.addEventListener('submit', onSubmitForm);

const result = document.querySelector('.js-result-love');
const he = document.querySelector('.js-input-he');
const she = document.querySelector('.js-input-she');
const containerTryAgain = document.querySelector('.js-container-again')

const tryAgainBtn = document.createElement('button');
tryAgainBtn.textContent = 'Check your love again';
tryAgainBtn.classList.add('btn-love', 'btn-love-again');
tryAgainBtn.addEventListener('click', resetAndCheckAgain)

function onSubmitForm(e) {
    e.preventDefault();
   
    const activeColorInput = [he, she];
    activeColorInput.map(input => input.value === ''? input.style.borderColor = "red" : input.style.borderColor = "grey")

    if (he.value === '' || she.value === '') {
        return false;
    }
    
    result.textContent = `${he.value} and ${she.value} = ${randomResult()} %`;

    containerTryAgain.append(tryAgainBtn);
   
}

function randomResult() {
    return (Math.floor(Math.random() * 100));
}

function resetAndCheckAgain() {
    form.reset();
    tryAgainBtn.remove();
    result.textContent = 'Result:'
}
