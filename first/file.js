const form = document.querySelector('form');
form.addEventListener('submit', onSubmitForm);
const w = document.querySelector('.input-weight');
const h = document.querySelector('.input-height');
const result = document.querySelector('.title-result');


function onSubmitForm(e) {
    e.preventDefault();
    const IMT = getImt(w.value, h.value);
    if (!IMT) {
        return false;
    }
    const activeColorInput = [w, h];
    activeColorInput.map(input => input.value === ''? input.style.borderColor = "red" : input.style.borderColor = "grey")
    if (w.value === '' || h.value === '') {
        return false;
    } 
    result.textContent = `Result: ${IMT}`;

    console.log("Form valid")

    form.reset()
}


function getImt(m, h) {
    let numberW = Number(m);
    let numberH = Number(h);
    if (isNaN(numberH) || isNaN(numberW)) {
        return alert("Enter a valid values")
    };
    return (numberW / numberH ** 2).toFixed(2);
}

// const PetroImt = getImt(72, 1.88);
// const DenImt = getImt(82, 1.73);

// console.log(PetroImt > DenImt ? "Petro most" : "Den most");
