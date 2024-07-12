// console.log(document.querySelector("h1"));
//busca por classe, ou tag, ou id, mesmo jeito do css
var titulo = document.querySelector(".titulo");
//vai aparecer <h1>texto aqui</h1>
// console.log(titulo);
// vai aparecer somente oque tem dentro do H1
// console.log(titulo.textContent);
//alterando o conteudo do H1
titulo.textContent = "Aparecida nutricionista";

//paciente individualmente --> var paciente = document.querySelector("#primeiro-paciente");
//pegar todos os pacientes de uma vez
var pacientes = document.querySelectorAll(".paciente");


//length percorre todo o arrei e le ate o ultimo paciente da lista
for (var i = 0; i < pacientes.length; i++) {

    // todo paciente vai ser paciente[i]
    var paciente = pacientes[i];

    //----- peso
    var tdpeso = paciente.querySelector(".info-peso");
    var peso = tdpeso.textContent;

    //----- altura 
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    // iniciando variaveis como verdadeiras
    var pesoEhValido = true;
    var alturaEhValida = true;

    //validação 
    if (peso <= 0 || peso >= 1000) {

        //inserindo falso se obedecer a condição do if
        pesoEhValido = false;
        tdImc.textContent = "Peso invalido!";
        //coloca a cor da linha para vermelho
        // paciente.style.color = "red"; ou da forma abaixo pegando direto do css
        paciente.classList.add("paciente-invalido");
    }

    if (altura <= 0 || altura >= 3.00) {
        alturaEhValida = false;
        tdImc.textContent = "Altura invalida!";
        paciente.classList.add("paciente-invalido");
    }


    if (alturaEhValida && pesoEhValido) {

        //----- calculo do imc
        //coloco () no calculo que eu quero que faça primeiro
        var imc = peso / (altura * altura);
        //tofixed coloca pra mostra somente duas casa decimais
        tdImc.textContent = imc.toFixed(2);
    }

}

//escutador de evento para ler o click addEventListener
//chamando a função de fora --> titulo.addEventListener("click", mostraMensagem){}
//colocando a função dentro --> titulo.addEventListener("click", function() {
//    console.log("da tambem pra colocar a função dentro do addEventListener");
//});

//cada vez que clica aparece a mensagem abaixo no console 
//function mostraMensagem () {
//     console.log("Olá eu fui clicado!!");
// }

var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function (event) {
    //esse cod previne o comportamento padrao do botao que é quano clica limpar a pagina
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    //aqui com o 'form' ele acessa o formulario pega a propriedade 'name' e 'value' o valor
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    //cria o elemento paciente
    var pacienteTr = document.createElement("tr");
    //cria o campo que vai ser carregado as infos
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    //adiciona como se as td fossem filhos da tr paciente
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
});



