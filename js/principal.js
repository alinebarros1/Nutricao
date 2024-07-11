// console.log(document.querySelector("h1"));
//busca por classe, ou tag, ou id, mesmo jeito do css
	var titulo = document.querySelector(".titulo");
//vai aparecer <h1>texto aqui</h1>
	// console.log(titulo);
// vai aparecer somente oque tem dentro do H1
	// console.log(titulo.textContent);
//alterando o conteudo do H1
	titulo.textContent = "Aparecida nutricionista";

    var paciente = document.querySelector("#primeiro-paciente");
    console.log(paciente);

    //----- peso
    var tdpeso = paciente.querySelector(".info-peso");
    console.log(tdpeso);
    var peso = tdpeso.textContent;
    console.log(peso);

    //----- altura 
    var tdAltura = paciente.querySelector(".info-altura");
    console.log(tdAltura);
    var altura = tdAltura.textContent;
    console.log(altura);

    var tdImc = paciente.querySelector(".info-imc");
    //----- calculo do imc
    //coloco () no calculo que eu quero que faça primeiro
    var imc = peso / (altura * altura);
    console.log(imc);


    tdImc.textContent = imc;
    



    


