const con  = document.querySelector('.container');

const elementos = [
    {tag:'p', texto:'Frase 1', tipo:'= paragrafo'},
    {tag:'div', texto:'Frase 2', tipo:'= div'},
    {tag:'footer', texto:'Frase 3', tipo:'= footer'},
    {tag:'section', texto:'Frase 4', tipo:'= section'},
]

gerenciaObjeto = () => {

    for(let i = 0; i < elementos.length; i++){
        insereObjeto(elementos[i].tag, elementos[i].texto, elementos[i].tipo);
    }

};

insereObjeto = (tag, texto, tipo) => {

    con.innerHTML += `<${tag}>${texto} ${tipo}</${tag}>`;
    
};

