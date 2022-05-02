const divP = document.querySelector('.paragrafos')
const paragrafos = divP.querySelectorAll('p');

const bodyStyle = getComputedStyle(document.body);
const bodyBG = bodyStyle.backgroundColor;

gerenciaParagrafos = () =>{
    
    for(let i of paragrafos){
        i.style.backgroundColor = bodyBG;
        i.style.color = 'white';
    }
};

/* gerenciaParagrafos = () =>{
    
    for(let i in paragrafos){
        paragrafos[i].style.backgroundColor = bodyBG;
        paragrafos[í].style.color = 'white';
    }
}; */

