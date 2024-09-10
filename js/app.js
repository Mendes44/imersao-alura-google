// Função que e acionado pelo botão pesquisar
function pesquisar() {
  
    // Buscar o elemento pelo ID e armazenar em uma variável
    let dados = document.getElementById("mostrar-resultado");
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    
    // se campoPesquisa for uma string vazia
    if ( !campoPesquisa) {
        dados.innerHTML = "<p>Campo Está Vazio!</p>"
        return;
    }

    // Padronizando nomes para minusculos
    campoPesquisa = campoPesquisa.toLowerCase();



    // Criar uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let nome = "";
    let descricao = "";
   

    
    // Iterar sobre cada tecnologia na lista de tecnologias
    for (let dado of tecnologias) {

        nome = dado.nome.toLocaleLowerCase();
        descricao = dado.descricao.toLocaleLowerCase();

        // Se nome ou descrição sobre inclui campoPesquisa
        if ( nome.includes(campoPesquisa) || descricao.
        includes(campoPesquisa) ){
        // Criar um novo elemento div para cada tecnologia e adicionar informações
        resultados += `
            <div class="intem-resultado">
            <h2>
                ${dado.nome}
            </h2>
            <p class="descricao-meta"><strong>Descrição:</strong> ${dado.descricao}</p>
            <p><strong>Ano de Criação:</strong> ${dado.ano_criacao}</p>
            <p><strong>Paradigmas:</strong> ${dado.paradigmas}</p>
            <p><strong>Mais usado em:</strong> ${dado.uso}</p>
            <a class="info" href="${dado.link}" target="_blank">Mais Informações</a>
            </div>
        `
        } 
      
    };

    if ( !resultados ) {
        dados.innerHTML = "<p>Nada foi encontrado!</p>"
        return
    }
    
    // Atribuir os resultados gerados ao elemento com o ID "mostrar-resultado"
    dados.innerHTML = resultados;
  };


  const texto = "Aqui você aprende um pouco de cada tecnologia do mundo DEV </>"; // Texto que será "digitado"
  let index = 0;
  
  function digitar() {
    const elemento = document.getElementById("titulo-guru");
    if (index < texto.length) {
      elemento.innerHTML += texto.charAt(index); // Adiciona cada caractere ao H1
      index++;
      setTimeout(digitar, 50); // Velocidade da digitação (150ms entre cada letra)
    }
  }
  
  window.onload = function() {
    digitar(); // Iniciar a digitação ao carregar a página
  };
  