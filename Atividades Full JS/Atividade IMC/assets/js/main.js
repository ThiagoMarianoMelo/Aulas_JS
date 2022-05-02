addEventListener('submit',((e) => {
    e.preventDefault();

    const form  = document.querySelector('.formulario');

    const inputPeso = form.querySelector('.pesoInput');
    const inputAltura = form.querySelector('.alturaInput');
 

    let peso = inputPeso.value;
    let altura = inputAltura.value;

    let IMC = calculaIMC(peso,altura);

    let descricao = "";

    if(isNaN(peso) || peso ===""){

        descricao = "Peso Inválido."
        insereResultadoErro(descricao);

    }else if(isNaN(altura) || altura === ""){

        descricao = "Altura Inválida."
        insereResultadoErro(descricao);

    }else{

        descricao = getDescricao(IMC);
        insereResultado(IMC,descricao)
    }

}));

const calculaIMC = ((peso,altura) => {
    
    const IMC =  peso/Math.pow(altura,2)

    return IMC.toFixed(2);
});

const getDescricao = ((IMC) => {

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

});

const geraParagrafo = (() => {
    return document.createElement('p');
});

const insereResultadoErro = ((DescricaoErro) => {

    const p = geraParagrafo();
    
    let result  = getDivResultado();

    result.innerHTML = "";

    p.innerHTML = `${DescricaoErro}`;

    p.style.backgroundColor = 'rgb(226, 155, 155)';

    result.appendChild(p); 

});

const insereResultado = ((IMC,descricao) => {

    const p = geraParagrafo();
    
    let result  = getDivResultado();

    result.innerHTML = "";

    p.innerHTML = gerarMensagem(IMC,descricao);

    p.style.backgroundColor = 'rgb(154, 204, 154)';

    result.appendChild(p); 
});

const getDivResultado = (() => {
    return document.querySelector('.resultado');
});

const gerarMensagem = ((IMC,descricao) => {
    return `Seu IMC é de ${IMC} (${descricao})`;
});