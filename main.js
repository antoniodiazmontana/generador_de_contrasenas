// Obtener elementos del DOM
const passwordDisplay = document.getElementById('password');
const generateButton = document.getElementById('generateButton');
const copyButton = document.getElementById('copyButton');
const lengthInput = document.getElementById('length');
const uppercaseCheckbox = document.getElementById('includeUppercase');
const lowercaseCheckbox = document.getElementById('includeLowercase');
const numbersCheckbox = document.getElementById('includeNumbers');
const specialCheckbox = document.getElementById('includeSpecial');
const darkModeToggle = document.getElementById('darkModeToggle');  // Interrupor de modo oscuro

// Función para activar el modo oscuro
function toggleDarkMode() {
    // Alternamos la clase 'dark-mode' en el body
    document.body.classList.toggle('dark-mode');
    // También cambiamos las clases de los elementos clave (opcional, para una mejor visibilidad)
    document.querySelector('.container').classList.toggle('dark-mode');
    generateButton.classList.toggle('dark-mode');
    copyButton.classList.toggle('dark-mode');
    lengthInput.classList.toggle('dark-mode');
    uppercaseCheckbox.classList.toggle('dark-mode');
    lowercaseCheckbox.classList.toggle('dark-mode');
    numbersCheckbox.classList.toggle('dark-mode');
    specialCheckbox.classList.toggle('dark-mode');
}

// Función para generar una contraseña segura (igual que antes)
function generatePassword() {
    const length = parseInt(lengthInput.value);
    if (length < 6) {
        alert('La longitud mínima es 6 caracteres.');
        return;
    }
    
    const includeUppercase = uppercaseCheckbox.checked;
    const includeLowercase = lowercaseCheckbox.checked;
    const includeNumbers = numbersCheckbox.checked;
    const includeSpecial = specialCheckbox.checked;

    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';
    
    let characterSet = '';
    if (includeUppercase) characterSet += uppercaseChars;
    if (includeLowercase) characterSet += lowercaseChars;
    if (includeNumbers) characterSet += numberChars;
    if (includeSpecial) characterSet += specialChars;

    if (characterSet === '') {
        alert('Por favor, seleccione al menos un tipo de carácter.');
        return;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        password += characterSet.charAt(Math.floor(Math.random() * characterSet.length));
    }

    passwordDisplay.value = password;
}

// Función para copiar la contraseña al portapapeles
function copyToClipboard() {
    const password = passwordDisplay.value;
    if (!password) {
        alert('No se ha generado una contraseña aún.');
        return;
    }

    navigator.clipboard.writeText(password).then(() => {
        alert('Contraseña copiada al portapapeles!');
    }).catch((err) => {
        alert('Error al copiar la contraseña: ' + err);
    });
}

// Event listeners
generateButton.addEventListener('click', generatePassword);
copyButton.addEventListener('click', copyToClipboard);
darkModeToggle.addEventListener('change', toggleDarkMode);  // Escuchamos el cambio en el checkbox
