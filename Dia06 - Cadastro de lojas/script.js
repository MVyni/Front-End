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


// LANÇANDO O NOME NO LOG DO CONSOLE COM O VALOR ATUALIZADO
function salveName(texto){
    window.sessionStorage.setItem('name', texto)
}

const nameStore = document.getElementById('name');

nameStore.addEventListener('blur', (event) => {
    console.log(event.target.value)
})

//LOG NO CONSOLE PARA O ADRESS
const adressStore = document.getElementById('adress');

adressStore.addEventListener('blur', (event) => {
    console.log(event.target.value)
})

//LOG NO CONSOLE PARA AS CHECKBOX   
const dayStore = document.querySelectorAll('input[type="checkbox"]');

dayStore.forEach((checkbox) => {
    checkbox.addEventListener('focus', (event) => {
    console.log(event.target.value)
// NECESSÁRIO CRIAR UM FOREACH PARA PASSAR POR TODAS AS CHECKBOXS QUE RECEBEREM O 'CLICK'
    })
})