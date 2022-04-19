const geraData = ( () =>{

    const date = new Date();

    const diaDaSemana = getDiaDaSemana(date);

    const diaDoMes = getDiaDoMes(date);

    const mes = getMes(date);

    const ano = getAno(date);

    const horas = getHoras(date);

    const minutos = getMinutos(date);

    montaMensagem(diaDaSemana, diaDoMes, mes, ano, horas, minutos);
})

const getDiaDaSemana = ( (date) => {
    let diaDaSemana;

    switch(date.getDay()){
        case 0:
            diaDaSemana = 'Domingo';
            break;
        case 1:
            diaDaSemana = 'Segunda-Feira';
            break;
        case 2:
            diaDaSemana = 'Terça-Feira';
            break;
        case 3:
            diaDaSemana = 'Quarta-Feira';
            break;
        case 4:
            diaDaSemana = 'Quinta-Feira';
            break;
        case 5:
            diaDaSemana = 'Sexta-Feira';
            break;
        case 6:
            diaDaSemana = 'Sabado';
            break;
        default:
            diaDaSemana ='';
            break;
    }

    return diaDaSemana;
    
});

const getDiaDoMes = ( (date) => {
    return date.getDate();
});

const getMes = ( (date) => {
    let mes;

    switch(date.getMonth()){
        case 0:
            diaDaSemana = 'janeiro';
            break;
        case 1:
            diaDaSemana = 'fevereiro';
            break;
        case 2:
            diaDaSemana = 'março';
            break;
        case 3:
            diaDaSemana = 'abril';
            break;
        case 4:
            diaDaSemana = 'maio';
            break;
        case 5:
            diaDaSemana = 'junho';
            break;
        case 6:
            diaDaSemana = 'julho';
            break;
        case 7:
            diaDaSemana = 'agosto';
            break;
        case 8:
            diaDaSemana = 'setembro';
            break;
        case 9:
            diaDaSemana = 'outubro';
            break;
        case 10:
            diaDaSemana = 'novembro';
            break;
        case 11:
            diaDaSemana = 'dezembro';
            break;
        default:
            diaDaSemana = '';
            break;    
    }

    return diaDaSemana;
    
});

const getAno = ( (date) => {
    return date.getFullYear();
});

const getHoras = ( (date) =>{
    return date.getHours();
});

const getMinutos = ( (date) => {
    return date.getMinutes();
});

const montaMensagem = ( (diaDaSemana, diaDoMes, mes, ano, horas, minutos) =>{

    const result = document.querySelector('.container');

    const H1 = document.createElement('H1');

    H1.innerHTML = `${diaDaSemana}, ${diaDoMes} de ${mes} de ${ano} ${horas}:${minutos}`;


    result.appendChild(H1);
});