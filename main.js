const form = document.querySelector('.e__form'),
      btn = document.querySelector('.e__form_btn button'),
      login = document.querySelector('#login'),
      password = document.querySelector('#pass'),
      checkbox = document.querySelector('.checkbox_body'),
      validationText = document.querySelector('.validation__block_text');

// -----------функция для чекбокса, т.к при использовании 'preventDefault' стандартное поведение чекбокса не работает----------
checkbox.addEventListener('click',()=>{
    checkbox.classList.toggle('active')
})

// ------функция валидации------
function validation (i) {
    let parent = i.parentElement;
    parent.classList.toggle('active')
    setTimeout(()=> this, 1000)
    if(parent.classList.contains('active'))
    setTimeout(() => validation(i), 1000)
}

// ---------функция для проверки всех условий и входа в аккаунт----------
function logIn(){
    if(login.value == 0) {
        validation(login)
    } else if(password.value == 0) {
        validation(password)
    } else if(login.value !== 'steve.jobs@example.com') {
        validationText.innerHTML = `Пользователя ${login.value} не существует`
        validation(validationText)
    } else if (password.value !== 'password') {
        validationText.innerHTML = `Неверный пароль`
        validation(validationText)
    } else {
        btn.classList.add('active')
        setTimeout(`window.location.href = 'profile.html';`, 1000);
    }
}

// -------------вешаем на кнопку функцию 'logIn'------------------------
form.addEventListener('click', function(e){
    e.preventDefault();
    const target = e.target;
    if(target == btn) {
        logIn()
    }
})