const exitBtn = document.querySelector('.e__exit_btn button')

// ---------функция возвращающая на страницу 'login' при клике на кнопку "выйти"-------------
    exitBtn.addEventListener('click', ()=>{
        window.location.href = 'login.html';
    })