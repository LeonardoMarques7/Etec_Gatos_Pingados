const popup = document.getElementById('popup');

const alunos = [
  { rm: '121212', senha: '131313', etec: '016', nome: 'Leonardo Marques' },
  { rm: '131313', senha: '141414', etec: '016', nome: 'Natalia Hidemi' },
  { rm: '141414', senha: '151515', etec: '016', nome: 'Geovanna Terra' },
  { rm: '151515', senha: '161616', etec: '016', nome: 'Isbella dos Anjos' },
  { rm: '161616', senha: '171717', etec: '016', nome: 'Gabriel Annunciato' },
  { rm: '171717', senha: '181818', etec: '016', nome: 'Lucas Tiago' },
  { rm: '181818', senha: '191919', etec: '016', nome: 'Matteus Guilherme' },
  { rm: '171717', senha: '181818', etec: '016', nome: 'Kamilly Barbosa' },
  { rm: '171717', senha: '181818', etec: '016', nome: 'Manoela Xisto' }
];

const etecs = [
  { login: 'EtecFernandoPrestes@cps', senha: 'ete016', etec: '016', nome: 'Etec Fernando Prestes' },
  { login: 'EtecMachadoAssis@cps', senha: 'ete045', etec: '045', nome: 'Etec Machado de Assis' },
  { login: 'EtecCarlosAbreu@cps', senha: 'ete131', etec: '131', nome: 'Etec Carlos Abreu' },
  { login: 'EtecMartinsSilva@cps', senha: 'ete126', etec: '126', nome: 'Etec Martins Silva' },
];

const professores = [
  { login: 'AndersonRoque@etec016', senha: '5421', etec: '016', nome: 'Anderson Roque' },
  { login: 'CarlosEduardo@etec016', senha: '3214', etec: '016', nome: 'Carlos Eduardo' },
  { login: 'DiegoFrancisco@etec016', senha: '9467', etec: '016', nome: 'Diego Francisco' },
  { login: 'HeitorMoniva@etec016', senha: '1639', etec: '016', nome: 'Heitor Moniva' },
  { login: 'JoaoBatista@etec016', senha: '2052', etec: '016', nome: 'Joao Batista' },
  { login: 'JoiraConceicao@etec016', senha: '2012', etec: '016', nome: 'Joira Conceicao' },
  { login: 'JoseFrancisco@etec016', senha: '5873', etec: '016', nome: 'Jose Francisco' },
  { login: 'LeilaCanaveze@etec016', senha: '1125', etec: '016', nome: 'Leila Canaveze' },
  { login: 'LuizFlavio@etec016', senha: '5542', etec: '016', nome: 'Luiz Flavio' }
];

const responsaveis = [
  { login: '121212', senha: '11082006', etec: '016', nome: 'Reposável de Leonardo Marques' },
  { login: '131313', senha: '24022006', etec: '016', nome: 'Reposável de Natalia Hidemi' },
  { login: '141414', senha: '29012006', etec: '016', nome: 'Reposável de Geovanna Terra' },
  { login: '151515', senha: '16032006', etec: '016', nome: 'Reposável de Isbella dos Anjos' },
  { login: '161616', senha: '30112006', etec: '016', nome: 'Reposável de Gabriel Annunciato' },
  { login: '171717', senha: '21092006', etec: '016', nome: 'Reposável de Lucas Tiago' },
  { login: '181818', senha: '07052006', etec: '016', nome: 'Reposável de Matteus Guilherme' },
  { login: '171717', senha: '13042006', etec: '016', nome: 'Reposável de Kamilly Barbosa' },
  { login: '171717', senha: '22122006', etec: '016', nome: 'Reposável de Manoela Xisto' }
];

const supervisores = [
  { login: 'ClarriseFonseca@cps', senha: 'cps54', etec: '001', nome: 'Clarrise Fonseca' },
  { login: 'MarcosBrito@cps', senha: 'cps12', etec: '002', nome: 'Marcos Brito' },
  { login: 'LeonardoMarques@cps', senha: 'cps16', etec: '003', nome: 'Leonardo Marques' },
  { login: 'BellaMarques@cps', senha: 'cps32', etec: '004', nome: 'Bella Marques' },
];


// Criando as Funções
function SiteAluno() { 
  window.location.href = 'aluno.html'; 
}

function SiteEtec() {
  window.location.href = 'etec.html'; 
}

function SiteProfessor() {
  window.location.href = 'professor.html'; 
}

function SiteResponsavel() {
  window.location.href = 'responsavel.html'; 
}

function SiteSupervisor() {
  window.location.href = 'supervisao.html'; 
}


// Validando Alunos
function validarAluno() { 
  const rm = document.getElementById('rm').value; // Recebendo os valores dos inputs e salvando eles em constantes
  const senha = document.getElementById('senha').value;
  const etec = document.getElementById('etec').value;

  // Cirando a variável usuarioEncontrado e vendo se a um usuario com o mesmo rm e senha dentro do Array!
  const alunoEncontrado = alunos.find(aluno => aluno.rm === rm && aluno.senha === senha && aluno.etec === etec); 

  if (alunoEncontrado) { // Usuário encontrado
    alert(`Bem-vindo(a) Fafa, ${alunoEncontrado.nome}!`); // Encontrando nome do usuarioEncontrado
    SiteAluno();
  } else { // Usuário não encontrado
    popup.style.display = 'block';
    setTimeout(() => {
      popup.style.display = 'none';
    }, 5000);
    
  }
}

// Validando Etecs
function validarEtec() {
  const login = document.getElementById('rm').value;
  const senha = document.getElementById('senha').value;
  const etec = document.getElementById('etec').value;

  const eteEncontrado = etecs.find(ete => ete.login === login && ete.senha === senha && ete.etec === etec); 
  if (eteEncontrado) {
    alert(`Bem-vindo(a) etec(a), ${eteEncontrado.nome}!`); 
    SiteEtec();
  } else {
    popup.style.display = 'block';
    setTimeout(() => {
      popup.style.display = 'none';
    }, 5000);
  }
}

// Validando Professores
function validarProfessor() {
  const login = document.getElementById('rm').value;
  const senha = document.getElementById('senha').value;
  const etec = document.getElementById('etec').value;

  const professorEncontrado = professores.find(professor => professor.login === login && professor.senha === senha && professor.etec === etec); 
  if (professorEncontrado) {
    alert(`Bem-vindo(a) Professor(a), ${professorEncontrado.nome}!`); 
    SiteProfessor();
  } else {
    popup.style.display = 'block';
    setTimeout(() => {
      popup.style.display = 'none';
    }, 5000);
  }
}

// Validando Responsáveis
function validarResponsavel() {
  const login = document.getElementById('rm').value;
  const senha = document.getElementById('senha').value;
  const etec = document.getElementById('etec').value;

  const responsavelEncontrado = responsaveis.find(responsavel => responsavel.login === login && responsavel.senha === senha && responsavel.etec === etec); 
  if (responsavelEncontrado) {
    alert(`Bem-vindo(a) Responsavel(a), ${responsavelEncontrado.nome}!`); 
    SiteResponsavel();
  } else {
    popup.style.display = 'block';
    setTimeout(() => {
      popup.style.display = 'none';
    }, 5000);
  }
}

// Validando Surpevisores
function validarSupervisor() { 
  const login = document.getElementById('rm').value;
  const senha = document.getElementById('senha').value;
  const etec = document.getElementById('etec').value;

  const supervisorEncontrado = supervisores.find(supervisor => supervisor.login === login && supervisor.senha === senha && supervisor.etec === etec); 

  if (supervisorEncontrado) { 
    alert(`Bem-vindo(a) Supervisor(a), ${supervisorEncontrado.nome}!`); 
    SiteSupervisor();
  } else {
    popup.style.display = 'block';
    setTimeout(() => {
      popup.style.display = 'none';
    }, 5000);
  }
}


document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  const tipoUsuario = document.getElementById('tipo-usuario').value; // Recebendo o valor do input 
  
  // Validando Alunos, Etecs, Professores, Responsáveis, Supervisores e Monitores.
  if (tipoUsuario === 'aluno') { 
    validarAluno();
  } else if (tipoUsuario === 'etec') {
    validarEtec();
  } else if (tipoUsuario === 'professor') {
    validarProfessor();
  } else if (tipoUsuario === 'responsavel') {
    validarResponsavel();
  } else if (tipoUsuario === 'supervisor') {
    validarSupervisor();
  }
});
