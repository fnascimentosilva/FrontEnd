async function consultarCep(cep){
    const url = `https://viacep.com.br/ws/${cep}/json/`
    const response = await fetch(url)
    const json = await response.json()

    console.log(json)
}
document.getElementById('consultar').addEventListener('click', (e)=> {
    e.preventDefault()
    consultarCep(69088591)
})
