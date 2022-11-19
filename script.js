const btnDecrease = document.getElementById('btnDecrease');
const btnReset = document.getElementById('btnReset');
const btnIncrease = document.getElementById('btnIncrease');
const colores = ['darkred', 'green','white'];

var counter = 0;

btnDecrease.addEventListener('click',function(){
    decrease();
});

btnReset.addEventListener('click',function(){
    reset();
});

btnIncrease.addEventListener('click',function(){
    increase();
});

function decrease(){
    refresh(--counter);
    if(counter>0){
        document.getElementById('counterTxt').style.color='green';
        body.style.backgroundColor = colores[1];
    }else if(counter<0){
        document.getElementById('counterTxt').style.color='red';
        body.style.backgroundColor = colores[0];
    }
}

function reset(){
    counter = 0;
    refresh(counter);
    document.getElementById('counterTxt').style.color='black';
    body.style.backgroundColor = colores[2];
}

function increase(){
    refresh(++counter);
    if(counter>0){
        document.getElementById('counterTxt').style.color='green';
        body.style.backgroundColor = colores[1];
    }else if(counter<0){
        document.getElementById('counterTxt').style.color='red';
        body.style.backgroundColor = colores[0];
    }
}

function refresh(dato){
    document.getElementById('counterTxt').innerHTML = dato;
}
