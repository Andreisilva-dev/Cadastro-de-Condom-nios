// selecionando elementos
// cadastro condominio
let CxNomeCondominio = document.querySelector('.nomeDoCondomio')
let CxEndereco = document.querySelector('.endereco')
let CxObs = document.querySelector('.obs')
let btnCadastrar = document.querySelector('.btnCadastrar')



// elementos de consulta
let CxConsulta = document.querySelector('.inputconsulta')
let obsConsulta = document.querySelector(".resuldadoConsulta")
let btnConsulta = document.querySelector('.btnConsultar')

// base de dados
let base = []

// FUNCAO DE CADASTRAR CONDOMINIO
btnCadastrar.addEventListener('click', () => {
    let nomeComdominio = CxNomeCondominio.value
    let endereco = CxEndereco.value
    let obs = CxObs.value

    let condominio = {
        "nome" : nomeComdominio,
        "endereco": endereco,
        "observacao" : obs
    }

    base.push(condominio)
    // console.log(base)

    localStorage.setItem('bd',JSON.stringify(base))
    // console.log(`${nomeComdominio} / ${endereco} / ${obs}`)

    setTimeout(()=>{
        limpar()
    },100)
})

btnConsulta.addEventListener('click', () => {
    // caixa de saida de dados
    let consulta = CxConsulta.value
   
    let baseDeDados = JSON.parse(localStorage.getItem('bd'))
    
    let condominioBuscado = baseDeDados.find(condominio => {
        return condominio.nome == consulta
    })

    console.log(condominioBuscado)
    if(condominioBuscado){
        obsConsulta.textContent = `Condominio ${condominioBuscado.nome}  encontrado Endereço: ${condominioBuscado.endereco} Observações: ${condominioBuscado.observacao}`
        obsConsulta.classList.add("consultadaCor")
    }else {
        obsConsulta.textContent = `Busca não encontrada`
        obsConsulta.classList.remove('consultadaCor')
    }
})





// btn limpar cadastro e consulta
let btnLimparCadastra = document.querySelector(".btnLimparCadastra")
let btnLimparConsulta = document.querySelector('.btnLimparConsulta')
function limpar(){
    CxNomeCondominio.value = ''
    CxEndereco.value = ''
    CxObs.value = ''
    
}

function limparConsulta(){
    CxConsulta.value = ''
    obsConsulta.classList.remove('consultadaCor')
    obsConsulta.textContent = ''
}

btnLimparCadastra.addEventListener('click', limpar)
btnLimparConsulta.addEventListener('click',limparConsulta)
