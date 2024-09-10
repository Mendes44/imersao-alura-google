//tecnologias
let tecnologias = [
    {
        nome: "JavaScript",
        descricao: "Linguagem de programação interpretada, cliente-side, mais utilizada para criar interatividade em páginas web. É a base para frameworks como React, Angular e Vue.",
        link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
        ano_criacao: 1995,
        paradigmas: ["Multiparadigma"],
        uso: ["Desenvolvimento web frontend", "Desenvolvimento de jogos", "Aplicações móveis (React Native)"]
    },
    {
        nome: "C#",
        descricao: "Linguagem de programação orientada a objetos desenvolvida pela Microsoft para a plataforma .NET. É amplamente utilizada em desenvolvimento web, desktop e jogos.",
        link: "https://docs.microsoft.com/pt-br/dotnet/csharp/",
        ano_criacao: 2000,
        paradigmas: ["Orientada a objetos"],
        uso: ["Desenvolvimento web", "Desenvolvimento desktop", "Desenvolvimento de jogos (Unity)"]
    },
    {
        nome: "PHP",
        descricao: "Linguagem de script de propósito geral, especialmente adequada para desenvolvimento web e e-commerce. É utilizada por sistemas de gestão de conteúdo como WordPress e Drupal.",
        link: "https://www.php.net/",
        ano_criacao: 1994,
        paradigmas: ["Multiparadigma"],
        uso: ["Desenvolvimento web backend"]
    },
    {
        nome: "Go",
        descricao: "Linguagem de programação compilada, de código aberto, desenvolvida pelo Google. É conhecida por sua performance, concorrência e simplicidade.",
        link: "https://go.dev/",
        ano_criacao: 2009,
        paradigmas: ["Imperativa", "Concorrente"],
        uso: ["Desenvolvimento de sistemas distribuídos", "Desenvolvimento de APIs", "Cloud computing"]
    },
    {
        nome: "Ruby",
        descricao: "Linguagem de programação interpretada, de alto nível, conhecida por sua elegância e produtividade. É amplamente utilizada em desenvolvimento web com o framework Ruby on Rails.",
        link: "https://www.ruby-lang.org/en/",
        ano_criacao: 1995,
        paradigmas: ["Orientada a objetos"],
        uso: ["Desenvolvimento web", "DevOps"]
    },
    {
        nome: "SQL",
        descricao: "Linguagem de consulta estruturada, utilizada para gerenciar e manipular dados em bancos de dados relacionais. É a linguagem padrão para interagir com bancos de dados como MySQL, PostgreSQL e SQL Server.",
        link: "https://pt.wikipedia.org/wiki/SQL",
        ano_criacao: 1974,
        paradigmas: ["Declarativa"],
        uso: ["Gerenciamento de bancos de dados", "Análise de dados"]
    },
    {
        nome: "TypeScript",
        descricao: "Superconjunto tipado do JavaScript que adiciona tipagem estática opcional. Ajuda a prevenir erros comuns em JavaScript e facilita a criação de grandes aplicações.",
        link: "https://www.typescriptlang.org/",
        ano_criacao: 2012,
        paradigmas: ["Orientada a objetos"],
        uso: ["Desenvolvimento web frontend e backend"]
    },
    {
        nome: "Swift",
        descricao: "Linguagem de programação desenvolvida pela Apple para criar aplicativos nativos para iOS, macOS, watchOS e tvOS. É conhecida por sua segurança e facilidade de uso.",
        link: "https://developer.apple.com/swift/",
        ano_criacao: 2014,
        paradigmas: ["Orientada a objetos"],
        uso: ["Desenvolvimento de aplicativos iOS, macOS, watchOS e tvOS"]
    },
    {
        nome: "Kotlin",
        descricao: "Linguagem de programação moderna, concisa e segura, que roda na JVM e pode ser interoperável com Java. É a linguagem oficial para o desenvolvimento Android.",
        link: "https://kotlinlang.org/",
        ano_criacao: 2011,
        paradigmas: ["Orientada a objetos", "Funcional"],
        uso: ["Desenvolvimento Android, Desenvolvimento backend"]
    },
    {
        nome: "Rust",
        descricao: "Linguagem de programação de sistemas de alto desempenho e segura, focada em prevenção de erros de memória. É utilizada em diversas áreas, como desenvolvimento de sistemas operacionais, jogos e ferramentas de sistema.",
        link: "https://www.rust-lang.org/",
        ano_criacao: 2010,
        paradigmas: ["Multiparadigma"],
        uso: ["Desenvolvimento de sistemas, jogos, ferramentas de sistema"]
    },
    {
        nome: "Inteligência Artificial (IA)",
        descricao: "Simulação de processos de inteligência humana por máquinas, especialmente sistemas de computadores. Inclui aprendizado de máquina, deep learning, processamento de linguagem natural e visão computacional.",
        link: "https://pt.wikipedia.org/wiki/Inteligência_artificial",
        ano_criacao: "1950s", // A IA tem raízes nos anos 50, mas evoluiu significativamente desde então
        paradigmas: ["Aprendizado de máquina", "Deep learning"],
        uso: ["Assistentes virtuais", "Veículos autônomos", "Diagnóstico médico", "Recomendação de produtos"]
    },
    {
        nome: "Aprendizado de Máquina (Machine Learning)",
        descricao: "Subcampo da IA que permite que sistemas aprendam com dados, identificando padrões e fazendo previsões sem serem explicitamente programados.",
        link: "https://pt.wikipedia.org/wiki/Aprendizado_de_máquina",
        ano_criacao: "1950s",
        paradigmas: ["Aprendizado supervisionado", "Aprendizado não supervisionado", "Aprendizado por reforço"],
        uso: ["Reconhecimento de padrões, classificação, previsão"]
    },
    {
        nome: "Deep Learning",
        descricao: "Subcampo do aprendizado de máquina que utiliza redes neurais artificiais com múltiplas camadas para aprender representações complexas de dados.",   

        link: "https://pt.wikipedia.org/wiki/Aprendizagem_profunda",
        ano_criacao: "1980s",
        paradigmas: "Redes neurais artificiais",
        uso: "Visão computacional, processamento de linguagem natural, reconhecimento de fala"
    },
    {
        nome: "Cloud Computing",
        descricao: "Modelo de computação que permite o acesso a recursos computacionais, como servidores, armazenamento e bancos de dados, sob demanda através da internet.",
        link: "https://pt.wikipedia.org/wiki/Computação_em_nuvem",
        ano_criacao: "1960s (conceito), popularização nos anos 2000",
        paradigmas: "IaaS, PaaS, SaaS",
        uso: "Armazenamento de dados, desenvolvimento de software, hospedagem de sites"
    }, 
    {
        nome: "Docker",
        descricao: "Plataforma de containerização que permite empacotar aplicativos e suas dependências em contêineres isolados.",
        tipo: "Infraestrutura",
        uso: ["Desenvolvimento", "Deploy"],
        link: "https://www.docker.com/"
    },
    {
        nome: "Kubernetes",
        descricao: "Sistema de orquestração de contêineres para automatizar o deployment, scaling e gerenciamento de aplicações containerizadas.",
        tipo: "Infraestrutura",
        uso: ["Gerenciamento de contêineres"],
        link: "https://kubernetes.io/"
    },
    {
        nome: "Node.js",
        descricao: "Ambiente de execução JavaScript para construir aplicações de servidor.",
        tipo: "Framework",
        uso: ["Desenvolvimento backend", "Aplicações de tempo real"],
        link: "https://nodejs.org/"
    },
    {
        nome: "Angular",
        descricao: "Framework TypeScript para desenvolvimento de aplicações web single-page.",
        tipo: "Framework",
        uso: ["Desenvolvimento frontend"],
        link: "https://angular.io/"
    },
    {
        nome: "AWS (Amazon Web Services)",
        descricao: "A maior plataforma de nuvem do mundo, oferecendo uma ampla gama de serviços de computação, armazenamento, banco de dados, redes e muito mais.",
        tipo: "Plataforma de Cloud",
        uso: ["Desenvolvimento de aplicações web e mobile", "Análise de dados", "Inteligência artificial", "Internet das Coisas"],
        link: "https://aws.amazon.com/",
        servicos_destaque: ["EC2", "S3", "RDS", "Lambda"]
    },
    {
        nome: "Azure (Microsoft Azure)",
        descricao: "Plataforma de nuvem da Microsoft, com integração profunda com produtos Microsoft e uma ampla gama de serviços de computação, armazenamento e banco de dados.",
        tipo: "Plataforma de Cloud",
        uso: ["Desenvolvimento de aplicações .NET e híbridas", "Análise de dados", "Inteligência artificial"],
        link: "https://azure.microsoft.com/",
        servicos_destaque: ["Azure Functions, Azure SQL Database, Azure Kubernetes Service"]
    },
    {
        nome: "GCP (Google Cloud Platform)",
        descricao: "Plataforma de nuvem do Google, com foco em escalabilidade, desempenho e inteligência artificial.",
        tipo: "Plataforma de Cloud",
        uso: ["Análise de dados em grande escala, Machine learning, Desenvolvimento de aplicações containerizadas"],
        link: "https://cloud.google.com/",
        servicos_destaque: "Compute Engine, Cloud Storage, BigQuery, TensorFlow"
    },
    {
        nome: "Oracle Cloud Infrastructure (OCI)",
        descricao: "Plataforma de nuvem da Oracle, com foco em desempenho e integração com banco de dados Oracle.",
        tipo: "Plataforma de Cloud",
        uso: ["Desenvolvimento de aplicações corporativas, Banco de dados, Integração com sistemas legados"],
        link: "https://www.oracle.com/cloud/",
        servicos_destaque: "Oracle Autonomous Database, Compute Instances, Object Storage"
    }
];