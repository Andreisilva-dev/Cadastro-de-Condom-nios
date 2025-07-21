// selecionando elementos
// cadastro condominio
let CxNomeCondominio = document.querySelector(".nomeDoCondomio");
let CxEndereco = document.querySelector(".endereco");
let CxObs = document.querySelector(".obs");
let btnCadastrar = document.querySelector(".btnCadastrar");

// elementos de consulta
let CxConsulta = document.querySelector(".inputconsulta");
let obsConsulta = document.querySelector(".resuldadoConsulta");
let btnConsulta = document.querySelector(".btnConsultar");

// base de dados
let base = [];

// FUNCAO DE CADASTRAR CONDOMINIO
btnCadastrar.addEventListener("click", () => {
  let nomeComdominio = CxNomeCondominio.value;
  let endereco = CxEndereco.value;
  let obs = CxObs.value;

  let condominio = {
    nome: nomeComdominio,
    endereco: endereco,
    observacao: obs,
  };

  base.push(condominio);
  // console.log(base)

  localStorage.setItem("bd", JSON.stringify(base));
  // console.log(`${nomeComdominio} / ${endereco} / ${obs}`)

  setTimeout(() => {
    limpar();
  }, 100);
});

btnConsulta.addEventListener("click", () => {
  // caixa de saida de dados
  let consulta = CxConsulta.value;

  let baseDeDados = JSON.parse(localStorage.getItem("bd"));

  let condominioBuscado = baseDeDados.find((condominio) => {
    return condominio.nome == consulta;
  });

  console.log(condominioBuscado);
  if (condominioBuscado) {
    obsConsulta.textContent = `Condominio ${condominioBuscado.nome}  encontrado Endereço: ${condominioBuscado.endereco} Observações: ${condominioBuscado.observacao}`;
    obsConsulta.classList.add("consultadaCor");
  } else {
    obsConsulta.textContent = `Busca não encontrada`;
    obsConsulta.classList.remove("consultadaCor");
  }
});

// btn limpar cadastro e consulta
let btnLimparCadastra = document.querySelector(".btnLimparCadastra");
let btnLimparConsulta = document.querySelector(".btnLimparConsulta");
function limpar() {
  CxNomeCondominio.value = "";
  CxEndereco.value = "";
  CxObs.value = "";
}

function limparConsulta() {
  CxConsulta.value = "";
  obsConsulta.classList.remove("consultadaCor");
  obsConsulta.textContent = "";
}

btnLimparCadastra.addEventListener("click", limpar);
btnLimparConsulta.addEventListener("click", limparConsulta);

// SESSAO MODAL ATUALIZAÇÃO
let atulizaNome = document.querySelector(".atulizaNome");
let atulizaEndereco = document.querySelector(".atulizaEndereco");
let atulizaoObs = document.querySelector(".atulizaoObs");

let btnAtulizar = document.querySelector(".btnAtulizar");
let btnFechar = document.querySelector(".btnFechar");

// SESSAO ATUALIZAÇÃO

let btnBucarAtualizar = document.querySelector(".btnBucarAtualizar");
let modal_atualizar = document.querySelector(".modal_atualizar")

btnBucarAtualizar.addEventListener("click", () => {

  modal_atualizar.style.display = 'flex';
  let fecharatualizar = document.querySelector('.btnFechar')
  btnFechar.addEventListener('click',()=>{
    modal_atualizar.style.display = 'none';
  })
  
  let inputCondominioAtualizar = document.querySelector(
    ".inputCondominioAtualizar"
  ).value;

  let baseDeDados = JSON.parse(localStorage.getItem("bd"));

  let busca = baseDeDados.find((condominio) => {
    return condominio.nome == inputCondominioAtualizar;
  });

  atulizaNome.value = busca.nome;
  atulizaEndereco.value = busca.endereco;
  atulizaoObs.value = busca.observacao;

  btnAtulizar.addEventListener("click", () => {
    busca.nome = atulizaNome.value;
    busca.endereco = atulizaEndereco.value;
    busca.observacao = atulizaoObs.value;

    localStorage.setItem("bd", JSON.stringify(baseDeDados));
  });
});

// MODAL DE DELETAR DADOS
let modal_deletar_dados = document.querySelector(".modal_deletar_dados");
let deleta_condominio = document.querySelector(".deleta_condominio");
let btnDeletar = document.querySelector(".btnDeletar");

modal_deletar_dados.style.display = 'none'

let btnCadDeletar = document.querySelector('.btnCadDeletar')
btnCadDeletar.addEventListener('click',()=>{
  modal_deletar_dados.style.display = 'flex'
})
btnDeletar.addEventListener("click", () => {
  let inputdeletar = deleta_condominio.value;
  let btnFecharDelete = document.querySelector('.btnFecharDelete')

  btnFecharDelete.addEventListener('click',()=> {
    modal_deletar_dados.style.display = 'none'
  })

  let baseDeDados = JSON.parse(localStorage.getItem("bd"));

  baseDeDados = baseDeDados.filter((condominio) => {
    return condominio.nome != inputdeletar;
  });

  localStorage.setItem("bd", JSON.stringify(baseDeDados));
});

let cad_consultar = document.querySelector(".cad_consultar");
let caixaConsultado = document.querySelector('.caixaConsultado')
cad_consultar.addEventListener('click',()=>{
  caixaConsultado.classList.add('mostrar')
  let fecharaba = document.querySelector('.fecha')
  fecharaba.addEventListener('click',()=>{
    caixaConsultado.classList.remove('mostrar')
  })
})


let buscaAtualizar = document.querySelector('.buscaAtualizar')
let btnCadatualizar = document.querySelector('.btnCadatualizar')
btnCadatualizar.addEventListener('click',()=>{
  buscaAtualizar.style.display = 'block'
  let fechaatualiza = document.querySelector('.fechaatualiza')
  fechaatualiza.addEventListener('click',()=>{
    buscaAtualizar.style.display = 'none'
  })
})



