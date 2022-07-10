function modoEscuro(){
    changeClasses();
    changeText()
}

function changeClasses(){
    buttom.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
}

function changeText(){
    const lightMode = 'Light Mode';
    const darkMode = 'Dark Mode'
    if(buttom.classList.contains(darkModeClass)){
        buttom.innerHTML = lightMode;
        h1.innerHTML = darkMode + " ON";
        return;
    }

        buttom.innerHTML = darkMode;
        h1.innerHTML = lightMode + " ON";
}

const darkModeClass ='dark-mode'; // string m uma constante para não ficar repetindo
const buttom = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const footer = document.getElementsByTagName('footer')[0];
const body = document.getElementsByTagName('body')[0];


buttom.addEventListener('click', modoEscuro)