const criaCalculadora = () =>{
    return {

        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),

        inicia(){
            this.clickButtons();
        },

        clearDisplay(){
            this.display.value = '';
        },

        deletLastDisplay(){
            this.display.value = this.display.value.slice(0, -1);
        },

        realizaConta(){
            let conta = this.display.value

            try{
                conta = eval(conta); 

                this.display.value = conta;
            
            }catch(e){
                alert('conta invalida');
                this.clearDisplay();            
            }
        },

        clickButtons(){
            document.addEventListener('click', (e) =>{

                const el = e.target;

                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')){
                    this.deletLastDisplay()
                }

                if(el.classList.contains('btn-eq')){
                    this.realizaConta();
                }
            });

            document.addEventListener('keypress', (e) => {

                if(e.key === 'Enter'){
                    this.realizaConta();
                }
            })
        },

        btnParaDisplay(valor){
            this.display.value += valor
        },

    };
};

window.addEventListener("load", (e) => {
    const calculadora = criaCalculadora();
    calculadora.display.focus();
    calculadora.inicia();
  });

