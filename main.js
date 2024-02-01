function criarCalculadora(){
  return{
    display: document.querySelector('.display'),
    btnClear: document.querySelector('.btn-clear'),

    iniciar(){
      this.click();
    },

    cal(){
      let calculo = this.display.value;

      try {
        calculo = eval(calculo);

        if(!calculo){
          alert('Error')
          return;
        }

        this.display.value = String(calculo);
      } catch(e) {
        alert('Error');
        return
      }
    },

    click(){
      document.addEventListener('click', (e) => {
        const el = e.target;

        if(el.classList.contains('btn-num')){
          this.btnParaDisplay(el.innerText);
        }

        if(el.classList.contains('btn-clear')){
          this.display.value = ''
        }

        if(el.classList.contains('btn-del')){
          this.display.value = this.display.value.slice(0, -1)
        }

        if(el.classList.contains('btn-eq')){
          this.cal();
        }

      })
    },

    btnParaDisplay(valor){
      this.display.value += valor
    }

  }
}

const calculadora = criarCalculadora();
calculadora.iniciar();