let button = document.querySelector('#button-container');
let priceButton1 = document.querySelector('.price-button1');
let priceButton2 = document.querySelector('.price-button2');
let priceButton3 = document.querySelector('.price-button3');

let epBt = document.querySelector('.ep-bt');
console.log(epBt)

button.addEventListener('mouseover', ()=>{
    button.style.border = '2px solid rgb(181, 53, 246)';
    button.style.backgroundColor = 'transparent';
});

button.addEventListener('mouseout', ()=>{
    button.style.border = '';
    button.style.backgroundColor = '';
});

priceButton1.addEventListener('mouseover', ()=>{
    priceButton1.style.border = '2px solid rgb(181, 53, 246)';
    priceButton1.style.backgroundColor = 'transparent';
});

priceButton1.addEventListener('mouseout', ()=>{
    priceButton1.style.border = '';
    priceButton1.style.backgroundColor = '';
});

priceButton2.addEventListener('mouseover', ()=>{
    priceButton2.style.border = '2px solid rgb(181, 53, 246)';
    priceButton2.style.backgroundColor = 'transparent';
});

priceButton2.addEventListener('mouseout', ()=>{
    priceButton2.style.border = '';
    priceButton2.style.backgroundColor = '';
});

priceButton3.addEventListener('mouseover', ()=>{
    priceButton3.style.border = '2px solid rgb(181, 53, 246)';
    priceButton3.style.backgroundColor = 'transparent';
});

priceButton3.addEventListener('mouseout', ()=>{
    priceButton3.style.border = '';
    priceButton3.style.backgroundColor = '';
});

epBt.addEventListener('mouseover', ()=>{
    epBt.style.border = '2px solid white';
    epBt.style.color = 'white';
    epBt.style.backgroundColor = 'transparent';
});

epBt.addEventListener('mouseout', ()=>{
    epBt.style.border = '';
    epBt.style.color = '';
    epBt.style.backgroundColor = '';
});

let sr1 = document.querySelector('.sr1');
let sr2 = document.querySelector('.sr2');
let sr3 = document.querySelector('.sr3');
let sr4 = document.querySelector('.sr4');

sr1.addEventListener('mouseover', ()=>{
    sr1.style.transform = 'scale(1.1)';
});

sr1.addEventListener('mouseout', ()=>{
    sr1.style.transform = 'scale(1)';
});
sr2.addEventListener('mouseover', ()=>{
    sr2.style.transform = 'scale(1.1)';
});

sr2.addEventListener('mouseout', ()=>{
    sr2.style.transform = 'scale(1)';
});
sr3.addEventListener('mouseover', ()=>{
    sr3.style.transform = 'scale(1.1)';
});

sr3.addEventListener('mouseout', ()=>{
    sr3.style.transform = 'scale(1)';
});
sr4.addEventListener('mouseover', ()=>{
    sr4.style.transform = 'scale(1.1)';
});

sr4.addEventListener('mouseout', ()=>{
    sr4.style.transform = 'scale(1)';
});

let title1 = document.querySelector('.title1');
let paragrafo1 = document.querySelector('.paragrafo1');
let mais1 = document.querySelector('.mais1');
let x1 = document.querySelector('.x1');

title1.addEventListener('click', ()=>{
    paragrafo1.classList.toggle('mostrar');

    if(x1.style.display === 'none'){
        mais1.style.display = 'none'
        x1.style.display = 'block';
    } else{
        mais1.style.display = 'block'
        x1.style.display = 'none';
    }
});



let title2 = document.querySelector('.title2');
let paragrafo2 = document.querySelector('.paragrafo2');
let mais2 = document.querySelector('.mais2');
let x2 = document.querySelector('.x2');

title2.addEventListener('click', ()=>{
    paragrafo2.classList.toggle('mostrar');

    if(x2.style.display === 'none'){
        mais2.style.display = 'none'
        x2.style.display = 'block';
    } else{
        mais2.style.display = 'block'
        x2.style.display = 'none';
    }
});

let title3 = document.querySelector('.title3');
let paragrafo3 = document.querySelector('.paragrafo3');
let mais3 = document.querySelector('.mais3');
let x3 = document.querySelector('.x3');

title3.addEventListener('click', ()=>{
    paragrafo3.classList.toggle('mostrar');

    if(x3.style.display === 'none'){
        mais3.style.display = 'none'
        x3.style.display = 'block';
    } else{
        mais3.style.display = 'block'
        x3.style.display = 'none';
    }
});

let title4 = document.querySelector('.title4');
let paragrafo4 = document.querySelector('.paragrafo4');
let mais4 = document.querySelector('.mais4');
let x4 = document.querySelector('.x4');

title4.addEventListener('click', ()=>{
    paragrafo4.classList.toggle('mostrar');

    if(x4.style.display === 'none'){
        mais4.style.display = 'none'
        x4.style.display = 'block';
    } else{
        mais4.style.display = 'block'
        x4.style.display = 'none';
    }
});

let title5 = document.querySelector('.title5');
let paragrafo5 = document.querySelector('.paragrafo5');
let mais5 = document.querySelector('.mais5');
let x5 = document.querySelector('.x5');

title5.addEventListener('click', ()=>{
    paragrafo5.classList.toggle('mostrar');

    if(x5.style.display === 'none'){
        mais5.style.display = 'none'
        x5.style.display = 'block';
    } else{
        mais5.style.display = 'block'
        x5.style.display = 'none';
    }
});