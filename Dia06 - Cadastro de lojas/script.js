const btnName = document.getElementById('name');
btnName.addEventListener('focus', (event) => {
    event.target.style.border = '2px solid purple'; // trocando a borda para roxo quando recebe o foco (focus)
    event.target.style.outline = 'none'; //tirando a 'borda destacada' (outline) que fica no input
}); 

btnName.addEventListener('blur', (event) => {
    event.target.style.border = ''; // tirando a borda quando o foco sair
}); 

const btnAdress = document.getElementById('adress');
btnAdress.addEventListener('focus', (event) => {
    event.target.style.border = '2px solid purple'; // colocando a borda no adress com (focus)

    event.target.style.outline = 'none';
}); 

btnAdress.addEventListener('blur', (event) => {
    event.target.style.border = '';
}); // tirando a borda com (blur)

const btnTimeOpen = document.getElementById('open');
btnTimeOpen.addEventListener('focus', (event) => {
    event.target.style.border = '2px solid purple'; //focus

    event.target.style.outline = 'none';
}); 

btnTimeOpen.addEventListener('blur', (event) => {
    event.target.style.border = '';
}); //blur

const btnTimeClosed = document.getElementById('closed');
btnTimeClosed.addEventListener('focus', (event) => {
    event.target.style.border = '2px solid purple'; //focus

    event.target.style.outline = 'none';
}); 

btnTimeClosed.addEventListener('blur', (event) => {
    event.target.style.border = '';
}); //blur


// SALVANDO O NOME ATUALIZADO NO LOCAL STORAGE
function saveName(texto){
    window.localStorage.setItem('name', texto)
}

const nameStore = document.getElementById('name');

nameStore.addEventListener('blur', (event) => {
    saveName(event.target.value)
})

//SALVANDO O ADRESS ATUALIZADO NO LOCAL STORAGE
function saveAdress(text){
    window.localStorage.setItem('adress', text)
}
const adressStore = document.getElementById('adress');

adressStore.addEventListener('blur', (event) => {
    saveAdress(event.target.value)
})

//SALVANDO O VALOR ATUALIZADO NO LOCAL STORAGE
function saveCheck(select) {
    window.localStorage.setItem('check-day', select)
} 
const dayStore = document.querySelectorAll('input[type="checkbox"]');

//FOREACH PARA PASSAR POR TODAS AS CHECKBOXS QUE RECEBEREM O 'CLICK'
dayStore.forEach((checkbox) => {
    checkbox.addEventListener('focus', (event) => {
    saveCheck(event.target.value)
    })

//CRIANDO REMOVE QUANDO O CHECK FOR DESMARCADO
    function removeCheck(){
        window.localStorage.removeItem('check-day')
    }

    //CRIANDO UM CHECK PARA VER QUAIS AS CHECKBOXS ESTÃO MARCADAS
    checkbox.addEventListener('change', (event) => {
        if(!event.target.checked){
            removeCheck(event.target.change);
        } 
    })
})


//SALVANDO O VALOR ATUALIZADO DO OPEN STORE NO LOCAL STORAGE
function saveTimeOpen(select){
    window.localStorage.setItem('open-time', select)
}
const timeStoreOpen = document.getElementById('open');

    timeStoreOpen.addEventListener('blur', (event) => { saveTimeOpen(event.target.value) });


//SALVANDO O VALOR ATUALIZADO DO CLOSE STORE NO LOCAL STORAGE
function saveTimeClosed(select){
    window.localStorage.setItem('closed-time', select)
}
const timeStoreClosed = document.getElementById('closed');

    timeStoreClosed.addEventListener('blur', (event) => { saveTimeClosed(event.target.value) });
