
const relogio = () =>{
    const geraTimer = (segundos) =>{
        const data = new Date(segundos * 1000)
        return data.toLocaleTimeString('pt-br', {
            hour12: false,
            timeZone: 'UTC'
        })
    };

    const relogio = document.querySelector('.relogio');
    let segundos = 0;
    let timer;
    
    const passarTempo = () =>{
        timer = setInterval(() => {
            segundos++;
            relogio.innerHTML = geraTimer(segundos);
        }, 1000); 
    };

    document.addEventListener('click', (e) =>{

        const el = e.target;

        if(el.classList.contains('iniciar')){

            relogio.style.color = 'black'
            clearInterval(timer);
            passarTempo();

        }else if(el.classList.contains('pausar')){  

            relogio.style.color = 'red'
            clearInterval(timer);

        }else if(el.classList.contains('zerar')){ 

            relogio.style.color = 'red'
            clearInterval(timer);
            relogio.innerHTML = `00:00:00`
            segundos = 0;

        }
    });

};

