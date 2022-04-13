function meuEscopo(){
    const form =  document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];


    function recebeEvento(evento){

        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobreNome= form.querySelector('.sobreNome');
        const idade = form.querySelector('.idade');

        pessoas.push({
            nome: nome.value,
            sobreNome: sobreNome.value,
            idade: idade.value
        });
        
        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} ${sobreNome.value} ${idade.value} </p>`;

    }
    form.addEventListener('submit',recebeEvento);
}
meuEscopo();