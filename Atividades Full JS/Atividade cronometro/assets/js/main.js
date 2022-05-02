const iniciaFuncao = () =>{
    const gerarTimer = (segundos) =>{
        const timer = new Date(segundos * 1000);
        return timer.toLocaleTimeString('pt-br', {
            hour12: false,
            timeZone: 'UTC'
        })
    };

    let crn = document.querySelector('.cronometro');
    let tempoEscolhido = document.querySelector('.escolheTempo');

    let tempo = 0;
    let contador;

    const passarTempo = () =>{
        contador = setInterval( () =>{
            if(tempo < 0){
                crn.style.color = 'red';
                clearInterval(contador);
            }else{
                crn.style.color = 'black';
                crn.innerHTML = gerarTimer(tempo);
                tempo--;
            }
            
            
        }, 1000)
    }

    document.addEventListener('click', (e) =>{
        const evento = e.target;

        if(evento.classList.contains('iniciar')){
            tempo = tempoEscolhido.value;
            passarTempo();
        }
        
        if(evento.classList.contains('pausar')){
            clearInterval(contador) 
        }

        if(evento.classList.contains('zerar')){
            clearInterval(contador);
            tempo = 0;
            crn.innerHTML = gerarTimer(tempo);
        }

        if(evento.classList.contains('despausar')){
            passarTempo();
        }
    });
}; 