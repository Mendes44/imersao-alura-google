// Função que e acionado pelo botão pesquisar
function pesquisar() {
  
    // Buscar o elemento pelo ID e armazenar em uma variável
    let dados = document.getElementById("mostrar-resultado");
    
    // Criar uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    
    // Iterar sobre cada tecnologia na lista de tecnologias
    for (let dado of tecnologias) {
      // Criar um novo elemento div para cada tecnologia e adicionar informações
      resultados += `
        <div class="intem-resultado">
          <h2>
            <a href="#" target="_blank">${dado.nome}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href="${dado.link}">Mais Informações</a>
        </div>
      `
    };
    
    // Atribuir os resultados gerados ao elemento com o ID "mostrar-resultado"
    dados.innerHTML = resultados;
  };