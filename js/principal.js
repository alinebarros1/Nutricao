// console.log(document.querySelector("h1"));
//busca por classe, ou tag, ou id, mesmo jeito do css
	var titulo = document.querySelector(".titulo");
//vai aparecer <h1>texto aqui</h1>
	console.log(titulo);
// vai aparecer somente oque tem dentro do H1
	console.log(titulo.textContent);
//alterando o conteudo do H1
	titulo.textContent = "Aparecida nutricionista";