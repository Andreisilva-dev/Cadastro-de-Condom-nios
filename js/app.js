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
})

btnConsulta.addEventListener('click', () => {
    let consultando = CxConsulta.value.toLowerCase()

    let baseSalva = JSON.parse(localStorage.getItem('bd'))

    let buscando = baseSalva.find(condominio => condominio.nome === consultando) //retunr ou um true ou false

    if(buscando){
        obsConsulta.textContent = `Endereço: ${buscando.endereco}, Observação: ${buscando.observacao}`
    }else {
        obsConsulta.textContent = 'Condomínio não encontrado.';
    }

    // console.log(buscando)
    // console.log(baseSalva)
    // console.log('funcionando')
    
    
})



