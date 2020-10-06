const iconSend = document.querySelector('.ic-arrow'),
btnSend = document.querySelector('.btn-send');

const forms = document.querySelectorAll('.form-control'),
inputs = document.querySelectorAll('.form-check-input'),
labels = document.querySelectorAll('.form-check-label');

btnSend.addEventListener('mouseover', ()=> {
    iconSend.classList.toggle('ic-active');
});

btnSend.addEventListener('mouseout', ()=> {
    iconSend.classList.toggle('ic-active');
});

btnSend.addEventListener('click', ()=> {
    btnSend.classList.add('disabled');
    for(let i = 0; i < forms.length; i++ ){
        forms[i].classList.add('disabled');
    }
    for(let i = 0; i < inputs.length; i++ ){
        inputs[i].classList.add('disabled');
    }
    for(let i = 0; i < labels.length; i++ ){
        labels[i].classList.add('disabled');
    }
});