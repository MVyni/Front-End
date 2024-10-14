const btnName = document.getElementById('name');
btnName.addEventListener('focus', (event) => {
    event.target.style.border = '2px solid purple';
}); // trocando a borda para roxo quando recebe o foco (focus)

btnName.addEventListener('blur', (event) => {
    event.target.style.border = '';
}); // tirando a borda quando o foco sair

const btnAdress = document.getElementById('adress');
btnAdress.addEventListener('focus', (event) => {
    event.target.style.border = '2px solid purple';
}); // colocando a borda no adress com (focus)

btnAdress.addEventListener('blur', (event) => {
    event.target.style.border = '';
}); // tirando a borda com (blur)

const btnTimeOpen = document.getElementById('open');
btnTimeOpen.addEventListener('focus', (event) => {
    event.target.style.border = '2px solid purple';
}); //focus

btnTimeOpen.addEventListener('blur', (event) => {
    event.target.style.border = '';
}); //blur

const btnTimeClosed = document.getElementById('closed');
btnTimeClosed.addEventListener('focus', (event) => {
    event.target.style.border = '2px solid purple';
}); //focus

btnTimeClosed.addEventListener('blur', (event) => {
    event.target.style.border = '';
}); //blur
