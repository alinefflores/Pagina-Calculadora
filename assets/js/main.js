function criaCalculadora() {
    return{
        display: document.querySelector('.display'),
        botaoClear: document.querySelector ('.botao-clear'),

        inicia(){
            this.cliqueBotoes();
        },            
     
        cliqueBotoes(){
            document.addEventListener('click' , e => {
                const el = e.target;

                if (el.classList.contains ('botao-num')){
                    this.botaoDisplay(el.innerText);
                }

                if (el.classList.contains('botao-clear')){
                    this.clearDisplay();
                }

                if (el.classList.contains('botao-apagar')){
                    this.deleteUm();
                }

                if (el.classList.contains('botao-igual')){
                    this.realizaConta();
                }

            });
        },

        botaoDisplay(valor){
            this.display.value += valor;
        },

        clearDisplay() {
            this.display.value = '';
        },
           
        deleteUm(){
            this.display.value = this.display.value.slice(0, -1);
        },

        realizaConta(){
            let conta = this.display.value;

            try{
                conta = eval (conta);

                if (!conta){
                    alert ('conta inválida');
                }

                this.display.value = String (conta);
                
            } catch(e){
                alert ('conta inválida');
                return;
            }
        },     


    };
}

const calculdora = criaCalculadora();
calculdora.inicia();
