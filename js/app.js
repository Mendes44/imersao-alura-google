console.log(tecnologias);

// Buscar o elemento pelo ID
let resultado = document.getElementById ( "mostrar-resultado" );

resultado.innerHTML = `
 <div class="intem-resultado">
    <h2>
        <a href="#" target="_blank">Teste JavaScript</a>
    </h2>
    <p class="descricao-meta">teste de injeção de html através do javaScript</p>
    <a href="">Mais Informações</a>
</div>
`