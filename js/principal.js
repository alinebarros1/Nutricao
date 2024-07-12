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
    for (var i =0; i<pacientes.length; i++){
        
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
    if(peso <= 0  || peso >= 1000) {
        
        //inserindo falso se obedecer a condição do if
        pesoEhValido = false;
        tdImc.textContent = "Peso invalido!";
    }

    if(altura <= 0  || altura >= 3.00) {
        alturaEhValida = false
        tdImc.textContent = "Altura invalida!";
    }


    if (alturaEhValida && pesoEhValido) {

    //----- calculo do imc
    //coloco () no calculo que eu quero que faça primeiro
    var imc = peso / (altura * altura);
    //tofixed coloca pra mostra somente duas casa decimais
    tdImc.textContent = imc.toFixed(2);
    }
    

    }

    


