


function comeca() {
    return {
        select: document.querySelector('.select'),
        index: document.querySelector('.txt'),


        inicia_app() {
            this.add_Clique();
        },

        add_Clique() {
            document.addEventListener('click', e => {
                const xt = e.target;

                if (xt.classList.contains('c')) {
                    this.addText(criaBaseCalc());
                    const inicia_calc = criaCalculadora();
                    inicia_calc.inicia();


                }

                if (xt.classList.contains('i')) {

                    this.addText(criaBaseImc());
                    criaIMC();
                }

            });

        },

        addText(valor) {
            this.index.innerHTML = valor;
        }
    }

};


const x = comeca();

x.inicia_app();

const y = criaIMC();

y.começa_imc();
function criaCalculadora() {

    return {
        display: document.querySelector('.display'),

        inicia() {
            this.cliqueBotoes();
            this.pressioneEnter();
        },

        pressioneEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },

        clearDisplay() {
            this.display.value = '';
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },

        realizaConta() {
            let conta = this.display.value;
            try {
                conta = eval(conta);

                if (!conta) {
                    alert('Conta inválida');
                    return;
                }

                this.display.value = String(conta);
            } catch (e) {
                alert("Conta inválida !");

            }
        },

        cliqueBotoes() {
            document.addEventListener('click', e => {
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                if (el.classList.contains("btn-result")) {
                    this.realizaConta();
                }
            });
        },

        btnParaDisplay(valor) {
            this.display.value += valor;

        }
    };

}

function criaBaseCalc() {
    const x = document.querySelector('.txt');

    const base = ` <Table class='calc'>
    <tr>
      <td colspan="4"><input type='text' class='display'></td>
    </tr>
    <tr>
      <td><button class='btn btn-clear'>C</button></td>
      <td><button class='btn btn-num'>(</button></td>
      <td><button class='btn btn-num'>)</button></td>
      <td><button class='btn btn-num'>/</button></td>
    </tr>
    <tr>
      <td><button class='btn btn-num'>7</button></td>
      <td><button class='btn btn-num'>8</button></td>
      <td><button class='btn btn-num'>9</button></td>
      <td><button class='btn btn-num'>*</button></td>
    </tr>
    <tr>
      <td><button class='btn btn-num'>4</button></td>
      <td><button class='btn btn-num'>5</button></td>
      <td><button class='btn btn-num'>6</button></td>
      <td><button class='btn btn-num'>+</button></td>
    </tr>
    <tr>
      <td><button class='btn btn-num'>1</button></td>
      <td><button class='btn btn-num'>2</button></td>
      <td><button class='btn btn-num'>3</button></td>
      <td><button class='btn btn-num'>-</button></td>
    </tr>
    <tr>
      <td><button class='btn btn-num'>.</button></td>
      <td><button class='btn btn-num'>0</button></td>
      <td><button class='btn btn-del'>&laquo;</button></td>
      <td><button class='btn btn-result'>=</button></td>
    </tr>
  </Table >
          `

    return x.value = base;

}

function criaIMC() {





    return {
        começa_imc() {
            this.inicia_imc();
        },

        inicia_imc() {
            document.addEventListener('click', chama => {
                const er = chama.target;
                if (er.classList.contains('btn_imc')) {
                    this.chama_media();

                }

            });
        },

        chama_media() {
            const peso = document.querySelector('.peso');
            const altura = document.querySelector('.altura');
            const media = peso.value / (altura.value * altura.value);


            if (media < 18.5 && media > 0) return this.result_imc(`<p class='green'>| Seu IMC é de ${media.toFixed(2)} (Abaixo do peso)|</p>`);
            if (media >= 18.5 && media <= 24.9) return this.result_imc(`<p class='green'>| Seu IMC é de ${media.toFixed(2)} (Peso normal)|</p>`);
            if (media >= 25 && media <= 29.9) return this.result_imc(`<p class='green'>| Seu IMC é de ${media.toFixed(2)} (Sobrepeso)|</p>`);
            if (media >= 30 && media <= 34.9) return this.result_imc(`<p class='green'>| Seu IMC é de ${media.toFixed(2)} (Obesidade grau 1)|</p>`);
            if (media >= 35 && media <= 39.9) return this.result_imc(`<p class='green'>| Seu IMC é de ${media.toFixed(2)} (Obesidade grau 2)|</p>`);
            if (media >= 40 && media < media * media) return this.result_imc(`<p class='green'>| Seu IMC é de ${media.toFixed(2)} (Obesidade grau 3)|</p>`);
            if (typeof(peso.value || altura.value !== 'number') ) return this.result_imc(`<p class='red'>| Número inválido |</p>`);
        },
        result_imc(valor) {
            let teste = document.querySelector('.add').innerHTML = valor;
        }


    }
};



function criaBaseImc() {
    const y = document.querySelector('.txt');

    const base_imc = `<section class='form'>
    <strong>Calcule seu IMC</strong>
    <label>Peso: <input type='text' class='peso' placeholder="Digite seu peso" id='peso'></label>
    <label>Altura: <input type='text' class='altura' placeholder="Digite sua altura" id='altura'></label>
    <button id='btn' class='btn_imc'>Gravar</button>
    </section>
    <section class='add' id='add'>

    </section>
`

    return y.value = base_imc;

}
