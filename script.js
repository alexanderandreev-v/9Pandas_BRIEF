const iconSend = document.querySelector('.ic-arrow'),
btnSend = document.querySelector('.btn-primary'),
successtext = document.querySelector('.success-text');

btnSend.addEventListener('mouseover', ()=> {
    iconSend.classList.toggle('ic-active');
});

btnSend.addEventListener('mouseout', ()=> {
    iconSend.classList.toggle('ic-active');
});

btnSend.addEventListener('click', ()=> {
    successtext.classList.toggle('hide');
});