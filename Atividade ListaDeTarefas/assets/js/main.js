const iniciaFuncao = () =>{

    const list = document.querySelector('.listaDeTarefas');
    const input = document.querySelector('.inputTarefa')


    const criaLi = () =>{
        const li = document.createElement('li');
        return li;
    };

    const criaButton = () =>{
        const botao = document.createElement('button');
        return botao;
    };

    const criaButtonTarefa = (li) =>{

        li.innerHTML += " ";
        
        const bt = criaButton();

        bt.innerHTML = 'Apagar';

        bt.setAttribute('class', 'apagar');

        li.appendChild(bt);
    };

    const insereNaPagina = (tarefa) => {
    
        const li = criaLi();
    
        li.innerHTML = tarefa
    
        list.appendChild(li);

        criaButtonTarefa(li);

        salvarTarefas();
    }

    document.addEventListener('click', (e) =>{
        el = e.target;

        if(el.classList.contains('add')){
            if(input.value !== ""){
                insereNaPagina(input.value);
                limparInput();
            }
        }

        if(el.classList.contains('apagar')){
            el.parentElement.remove();
            salvarTarefas();
        }
        
    });

    input.addEventListener('keypress', (e) =>{
        if(e.key === 'Enter'){
            insereNaPagina(input.value);
            limparInput();
        }
    });
    

    const limparInput = () =>{
        input.value = "";
        input.focus();
    };


    const salvarTarefas = () => {
        const liTarefas =  list.querySelectorAll('li');
        const arrayTarefas = [];

        
        for(let tarefa of liTarefas){
            let tarefaTexto = tarefa.innerText;
            tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
            arrayTarefas.push(tarefaTexto);
        }
        
        const tarefaJSON = JSON.stringify(arrayTarefas);
        localStorage.setItem('tarefas',tarefaJSON);

    };

    const adcionaTarefasSalvas = () =>{
        const tarefas = localStorage.getItem('tarefas');
        const listaDeTarefas = JSON.parse(tarefas);

        for(tarefa of listaDeTarefas){
            insereNaPagina(tarefa);
        }
    };

    adcionaTarefasSalvas();

};