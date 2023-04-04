let Pote1 = []

const getDadosCampeaoSul = async() => {
    let response = await axios.get('http://localhost:2020/campeao-sul')
    let dados = response.data

    Pote1.push(dados)
}