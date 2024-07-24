//mensagem de boas vindas ao clicar no botão
document.addEventListener('DOMContentLoaded', ()=>{
    const button = document.querySelector('button');
    button.addEventListener('click',()=>{
        alert('Estamos animados para começar o ano com vocês!');
});

//contador de dias para o início das aulas
const startDate = new Date('2024-08-01');//defina a data de início das aulas
const today = new Date();
    const timeDiff = startDate - today;
    const dayLeft=Math.cell(timeDiff/(1000*60*24));
 
    const contdownElement = document.createElement('p');
    countdownElemnt.tetContent = 'Faltam ${daysLeft} dias para o início das aulas!';
    document.querySelector('.card').apendChild(countdownElemnt);

    //Alternar a imagem ao clicar
    const image = document.querySelector('img');
    image.addEventListener('click',()=>{
        image.scr= Volta-as-aulas.jpg;
    })

    //mostrar uma mensagem de boas-vindas com animação
    cont card = document.querySelector('.card');
    card.style.opacity = D;
    card.style.transition = 'opacity 2s';

    setTimeout(() =>{
        card.style.opacity=1;
    }, 100);
});