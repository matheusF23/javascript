function Calculadora() {
  this.display = document.querySelector('.display');

  this.inicia = () => {
    this.cliqueBotoes();
    this.pressionaEnter();
  };

  this.cliqueBotoes = () => {
    document.addEventListener('click', e => {
      const el = e.target;
      if (el.classList.contains('btn-num')) this.btnParaDisplay(el.innerText);
      if (el.classList.contains('btn-clear')) this.clear();
      if (el.classList.contains('btn-del')) this.del();
      if (el.classList.contains('btn-eq')) this.realizaConta();
    });
  };

  this.btnParaDisplay = valor => {
    this.display.value += valor;
    this.display.focus();
  }
  this.clear = () => this.display.value = '';
  this.del = () => this.display.value = this.display.value.slice(0, -1);

  this.pressionaEnter = () => {
    document.addEventListener('keyup', e => {
      if (e.keyCode === 13) {
        this.realizaConta();
      }
    });
  };

  this.realizaConta = () => {
    let conta = this.display.value;

    try {
      conta = eval(conta);

      if (!conta) {
        alert('Conta Inválida');
        return;
      }

      this.display.value = String(conta);
    } catch (e) {
      alert('Conta Inválida');
      return;
    }
  };
}

const calculadora = new Calculadora();
calculadora.inicia();
