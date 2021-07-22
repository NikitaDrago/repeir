var button = document.querySelector('#button');
var modal = document.querySelector('#modal');
var closeModal = document.querySelector('#closeModal');

button.addEventListener('click',function() {
    modal.classList.add('modal_active');
});

closeModal.addEventListener('click', function(){
    modal.classList.remove('modal_active');
});