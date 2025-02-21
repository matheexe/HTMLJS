const campoA = document.getElementById('areaA');
const campoB = document.getElementById('areaB');
const form = document.querySelector('.formArea');
const rsltIgual = document.getElementById('msgIgual');
const rsltMaior = document.getElementById('msgAcerto')
const rsltMenor = document.getElementById('msgErro')

formValido = false;



form.addEventListener('submit', function(e){
    e.preventDefault();

    let valorA = document.getElementById('areaA').value
    let valorB = document.getElementById('areaB').value
    const msgIguais = `O campo A e B tem o mesmo valor: ${valorB} e ${valorA}.`
    const msgMaior = `Correto! O campo A (${valorA}) tem o valor menor do que o campo B (${valorB}).`
    const msgMenor =`Incorreto! O campo A (${valorA}) tem um valor maior do que o campo B (${valorB}).`

    rsltIgual.style.display = 'none';
    rsltMaior.style.display = 'none';
    rsltMenor.style.display = 'none';


    if(valorB == valorA ){
        rsltIgual.style.display = 'block';
        rsltIgual.style.animationDelay = 'ease 0.4s';
        rsltIgual.innerHTML = msgIguais;

        formValido = false;
            
    }else if( valorB > valorA ){
        rsltMaior.style.display = 'block';
        rsltMaior.style.animationDelay = 'ease 0.4s';
        rsltMaior.innerHTML = msgMaior;

        formValido = true;
        
    }else{
            rsltMenor.style.display = 'block';
            rsltMaior.style.animation = 'ease 0.4s';
            rsltMenor.innerHTML = msgMenor;

            formValido = false;
        }
})