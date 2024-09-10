console.log(tecnologias);

// Buscar o elemento pelo ID
let resultado = document.getElementById ( "mostrar-resultado" );

// Para cada dado dentro da lista de Tecnologias
for ( let dado of tecnologias ) {
    resultado.innerHTML = `
     <div class="intem-resultado">
        <h2>
            <a href="#" target="_blank">${dado.nome}</a>
        </h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href="${dado.link}">Mais Informações</a>
    </div>
    `
}
