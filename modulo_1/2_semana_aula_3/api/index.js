async function consultarCep(){
    const url = "https://viacep.com.br/ws/69088591/json/"
    const response = await fetch(url)
    const json = await response.json()

    console.log(json.logradouro)
}

consultarCep()