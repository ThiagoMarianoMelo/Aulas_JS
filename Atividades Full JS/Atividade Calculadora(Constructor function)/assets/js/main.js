function Calculate(){

    this.display = document.querySelector('.display');

    this.init = () =>{

        this.activateButtons();

    };

    this.activateButtons = () =>{

        document.addEventListener('click', (e) =>{
            el = e.target;

            if(el.classList.contains('btn-num')){
                this.addDisplay(el.innerText);
            }

            if(el.classList.contains('btn-clear')){
                this.clearDisplay();

            } 

            if(el.classList.contains('btn-del')){
                this.deletLasOne();

            }

            if(el.classList.contains('btn-eq')){
               this.doMath();

            }

        });
    };

    this.addDisplay = (valor) =>{

        this.display.value += valor
    };

    this.clearDisplay = () =>{

        this.display.value = '';
    };

    this.deletLasOne = () =>{
        this.display.value = this.display.value.slice(0, -1);
    };

    this.doMath = () =>{
        let conta = this.display.value

        try{

            conta = eval(conta); 
            this.display.value = conta;
            
        }catch(e){

            alert('conta invalida');
            this.clearDisplay();

        }
    };
};

window.addEventListener('load', (e) =>{

    const calc = new Calculate();
    
    calc.init();

}); 