/*---- capturar dinamicamente o valor do input e mostrar no span ---- */
let inputRange = document.querySelector('.qtd-numeros');
let exibeRange = document.querySelector('.exibe-valor');
exibeRange.textContent = inputRange.value;


inputRange.addEventListener('change', function (){
    exibeRange.textContent = inputRange.value;
})

/*---------criação da tabela de acordo com o tamanho selecionado no input range------------*/

const btnGerar = document.querySelector('.botao-gerar');
let tabelaCriada = false;
btnGerar.onclick = montaTabela;
const tabela = document.querySelector('.cartela_tabela');


function montaTabela(){

    if(tabelaCriada == false){
                
                const qtdNum = document.querySelector('.qtd-numeros').value;
                let qtdLinha = qtdNum / 5;
            
                for (var i = 1; i <= qtdLinha; i++) {
                    var valorAtual = i;
                    let linha = document.createElement('tr');

                    for (var j = 1; j<=5;j++) {
                        const coluna = document.createElement('td');
                        coluna.textContent = valorAtual;
                        linha.appendChild(coluna);
                        valorAtual = valorAtual + qtdLinha ;
                    }
                    tabela.appendChild(linha);
                
                }

            tabela.classList.remove('display-none');
           
            tabelaCriada = true;

    } else {
        alert("Tabela já criada, reinicar para gerar uma nova!")
    }    
    
}

console.log(tabela)
/*------RECARREGAR A PÁGINA AO CLICAR EM REINICIAR */
let botaoReiniciar = document.querySelector('.botao-reiniciar');
botaoReiniciar.onclick = function () {
    alert("Ao reiniciar todas as informações serão perdidas!")
    window.location.reload();
};


/*----Marcando uma célua ao ser clicada e adicionando o valor na lista dos chamados */
let ultChamados = document.querySelector('.ult-chamados');
let acumulaString = []; // array que vai guardar o utlimos chamados

tabela.addEventListener('click', function (e) {
    
        // testa se o elemento clicado foi um célula da tabela
    if(e.target.tagName == 'TD'){

        // aplica a classe ativo    
        console.log(e.target.tagName)
        e.target.classList.add('ativa');

        // testa se o array de ultimo chamados possui o número que foi clicado, caso não
        if(acumulaString.includes(e.target.textContent) == false) {
            acumulaString.push(e.target.textContent); // adiciona o valor no array
            ultChamados.value = acumulaString.reverse(); // atribui no valor do campo o inverso do array
        }

    }

});




       





