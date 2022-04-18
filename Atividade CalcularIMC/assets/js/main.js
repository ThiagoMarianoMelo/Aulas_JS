function escopo(){

    const form = document.querySelector('.formulario');
    const result = document.querySelector('.resultado');

    function reageEvento(evento){

        evento.preventDefault();

        const peso = form.querySelector('.pesoInput');
        const altura = form.querySelector('.alturaInput');
        
        let IMC = calculaIMC(peso.value,altura.value);
        
        let descricao = descobreResultado(IMC);

        if(isNaN(peso.value) || peso.value === ""){

            result.style.backgroundColor = 'rgb(226, 155, 155)';
            result.innerHTML = `<p>Peso Inválido.`;

        }else if(isNaN(altura.value)|| altura.value === ""){
            result.style.backgroundColor = 'rgb(226, 155, 155)';
            result.innerHTML = `<p>Altura Inválida.`;

        }else{
            result.style.backgroundColor = 'rgb(154, 204, 154)';
            result.innerHTML = `<p>Seu IMC é de ${IMC} (${descricao}).`;
        }

    }

    document.addEventListener('submit',reageEvento);
}

function calculaIMC(peso,altura){
    const IMC =  peso/Math.pow(altura,2)
    return IMC.toFixed(2);
}

function descobreResultado(IMC){
    if(IMC<18.5){

        return "Abaixo do peso";

    }else if(IMC>=18.5 && IMC<25){

        return "Peso Normal";

    }else if(IMC>=25 && IMC<30){

        return "SobrePeso"

    }else if(IMC>=30 && IMC<34.9){

        return "Obesidade Grau 1";

    }else if(IMC>=35 && IMC<39.9){

        return "Obesidade Grau 2";

    }else if(IMC>40){

        return "Obesidade Grau 3";
    }

}

escopo();