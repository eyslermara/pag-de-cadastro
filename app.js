const sign_in_password = document.getElementById('password');
const submitButton = document.getElementById('criar-conta');

// lista de elementos para validação

const li_letras = document.querySelector('#letras');
const li_numero = document.querySelector('#numero');
const li_caractere_especial = document.querySelector('#caractere-especial');
const li_digitos = document.querySelector('#digitos');

sign_in_password.addEventListener('keyup', (event) => {
    const { value } = sign_in_password;

    // regex
    var regexNumbers = /\d/g;
    const maiusculoRegex = RegExp("[A-Z]");
    const minusculoRegex = RegExp("[a-z]");
    var regexCaractereEspecial = /['!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    //variavel de validação
    const isNumeroValidated = value.match(regexNumbers);
    const isPasswordLength = value.length >= 8
    const isCaractereEspecialValidated = value.match(value.match(regexCaractereEspecial));
    const isLetrasValidated = value.match(maiusculoRegex) && value.match(minusculoRegex);

    // validação de números de caracteres
    if (isPasswordLength) {
        li_digitos.classList.add('active');
        const icon = li_digitos.getElementsByTagName('i')[0];
        icon.classList.remove('fa-circle');
        icon.classList.add('fa-check');
    } else {
        li_digitos.classList.remove('active');
        const icon = li_digitos.getElementsByTagName('i')[0];
        icon.classList.remove('fa-check');
        icon.classList.add('fa-circle');
    }

    // Validação de números na senha
    if (isNumeroValidated) {
        li_numero.classList.add('active');
        const icon = li_numero.getElementsByTagName('i')[0];
        icon.classList.remove('fa-circle');
        icon.classList.add('fa-check');
    } else {
        li_numero.classList.remove('active');
        const icon = li_numero.getElementsByTagName('i')[0];
        icon.classList.remove('fa-check');
        icon.classList.add('fa-circle');
    }

    // Caracteres especiais
    if (isCaractereEspecialValidated) {
        li_caractere_especial.classList.add('active');
        const icon = li_caractere_especial.getElementsByTagName('i')[0];
        icon.classList.remove('fa-circle');
        icon.classList.add('fa-check');
    } else {
        li_caractere_especial.classList.remove('active');
        const icon = li_caractere_especial.getElementsByTagName('i')[0];
        icon.classList.remove('fa-check');
        icon.classList.add('fa-circle');
    }
    
    // minúsculo e maiúsculo
    if (isLetrasValidated) {
        li_letras.classList.add('active');
        const icon = li_letras.getElementsByTagName('i')[0];
        icon.classList.remove('fa-circle');
        icon.classList.add('fa-check');
    } else {
        li_letras.classList.remove('active');
        const icon = li_letras.getElementsByTagName('i')[0];
        icon.classList.remove('fa-check');
        icon.classList.add('fa-circle');
    }

    if(
        isNumeroValidated &&
        isPasswordLength &&
        isCaractereEspecialValidated &&
        isLetrasValidated) {
            submitButton.removeAttribute('disabled')
        } else {
            submitButton.setAttribute('disabled');
        }

});