document.addEventListener("DOMContentLoaded", function() {
    const buttonSet = document.querySelector('.set');
    const buttonClear = document.querySelector('.clear');
    let input = document.querySelector('.text');
    const form = document.querySelector('form');
    const body = document.body;

    buttonSet.addEventListener('click', submitForm);
    buttonClear.addEventListener('click', clearForm);
    window.addEventListener('load', renderInputValue);
    input.addEventListener('input', validateForm);

    function submitForm() {
        if (!isNaN(input.value) && input.value !== '') {
            let textFieldData = input.value;
            localStorage.setItem('num23', JSON.stringify(textFieldData));
            location.reload();
        }
    }

    function clearForm() {
        if (localStorage.getItem('num23') !== null) {
            localStorage.removeItem('num23');
        }
        location.reload();
    }

    function renderInputValue() {
        if (localStorage.getItem('num23') !== null) {
            const num23 = JSON.parse(localStorage.getItem('num23'));
            const paragraph = document.createElement('p');
            paragraph.innerText = num23;
            body.insertBefore(paragraph, form);
            if (Number(num23) % 2 === 0) {
                paragraph.style.color = 'green';
            } else {
                paragraph.style.color = 'red';
            }
        }
    }

    function validateForm() {
        buttonSet.removeAttribute('disabled');
    }
});