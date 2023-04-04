import { useEffect } from 'react'
import axios from 'axios'

import '../styles/faseUm.sass'

export function PrimeiraFase(){
    let campeao
    let sulCampeao
    let brasil
    let argentina
    let colombia 
    let chile 
    let uruguai 
    let paraguai 
    let peru 
    let bolivia = []
    let equador 
    let venezuela 
    let primeiraFase = []

    function teamsFirstPhase(liga, vagas){
        let campeonato = liga
        let numVagas = vagas
        let algumCampeao = false

        if(sulCampeao.pais == campeonato[0].pais || campeao.pais == campeonato[0].pais){
            algumCampeao = true
        }

        if(algumCampeao){
            campeonato.forEach(element => {
                if(element.pos <= numVagas){
                    if(element.time == campeao.time
                         && element.pais == campeao.pais
                            || element.time == sulCampeao.time
                                && element.pais == sulCampeao.pais){
                                    numVagas += 1                
                    }else if(element.pos == numVagas){
                        primeiraFase.push(element)
                    }
                }
            });
        }else{
            campeonato.forEach(element => {
                if(element.pos == numVagas){
                    primeiraFase.push(element)
                }
            })
        }
    }

    function defineFirstPhase(){
        let spanTeam = document.querySelectorAll('span.team')
        let stadium = document.querySelectorAll('span.stadium')

        teamsFirstPhase(bolivia, 4)
        teamsFirstPhase(equador, 4)
        teamsFirstPhase(paraguai, 4)
        teamsFirstPhase(peru, 4)
        teamsFirstPhase(uruguai, 4)
        teamsFirstPhase(venezuela, 4)

        for(let v = 0; v < 6; v++){
            let numAleatorio = Math.floor(Math.random() * primeiraFase.length)

            switch (v) {
                case 0:
                    spanTeam[0].innerHTML += primeiraFase[numAleatorio].time
                    spanTeam[0].innerHTML += `<img src=${primeiraFase[numAleatorio].url} alt="bandeira do pais" />`

                    spanTeam[3].innerHTML += `<img src=${primeiraFase[numAleatorio].url} alt="bandeira do pais" />`
                    spanTeam[3].innerHTML += primeiraFase[numAleatorio].time

                    stadium[0].innerText += primeiraFase[numAleatorio].estadio

                    primeiraFase.splice(numAleatorio, 1)   
                    break;
            
                case 1:
                    spanTeam[1].innerHTML += `<img src=${primeiraFase[numAleatorio].url} alt="bandeira do pais" />`
                    spanTeam[1].innerHTML += primeiraFase[numAleatorio].time

                    spanTeam[2].innerHTML += primeiraFase[numAleatorio].time
                    spanTeam[2].innerHTML += `<img src=${primeiraFase[numAleatorio].url} alt="bandeira do pais" />`

                    stadium[1].innerText += primeiraFase[numAleatorio].estadio

                    primeiraFase.splice(numAleatorio, 1)        
                    break;

                case 2:
                    spanTeam[4].innerHTML += primeiraFase[numAleatorio].time
                    spanTeam[4].innerHTML += `<img src=${primeiraFase[numAleatorio].url} alt="bandeira do pais" />`

                    spanTeam[7].innerHTML += `<img src=${primeiraFase[numAleatorio].url} alt="bandeira do pais" />`
                    spanTeam[7].innerHTML += primeiraFase[numAleatorio].time

                    stadium[2].innerText += primeiraFase[numAleatorio].estadio

                    primeiraFase.splice(numAleatorio, 1)        
                    break;

                case 3:
                    spanTeam[5].innerHTML += `<img src=${primeiraFase[numAleatorio].url} alt="bandeira do pais" />`
                    spanTeam[5].innerHTML += primeiraFase[numAleatorio].time

                    spanTeam[6].innerHTML += primeiraFase[numAleatorio].time
                    spanTeam[6].innerHTML += `<img src=${primeiraFase[numAleatorio].url} alt="bandeira do pais" />`

                    stadium[3].innerText += primeiraFase[numAleatorio].estadio

                    primeiraFase.splice(numAleatorio, 1)        
                    break;

                case 4:
                    spanTeam[8].innerHTML += primeiraFase[numAleatorio].time
                    spanTeam[8].innerHTML += `<img src=${primeiraFase[numAleatorio].url} alt="bandeira do pais" />`

                    spanTeam[11].innerHTML += `<img src=${primeiraFase[numAleatorio].url} alt="bandeira do pais" />`
                    spanTeam[11].innerHTML += primeiraFase[numAleatorio].time

                    stadium[4].innerText += primeiraFase[numAleatorio].estadio

                    primeiraFase.splice(numAleatorio, 1)        
                    break;

                case 5:
                    spanTeam[9].innerHTML += `<img src=${primeiraFase[numAleatorio].url} alt="bandeira do pais" />`
                    spanTeam[9].innerHTML += primeiraFase[numAleatorio].time

                    spanTeam[10].innerHTML += primeiraFase[numAleatorio].time
                    spanTeam[10].innerHTML += `<img src=${primeiraFase[numAleatorio].url} alt="bandeira do pais" />`

                    stadium[5].innerText += primeiraFase[numAleatorio].estadio

                    primeiraFase.splice(numAleatorio, 1)        
                    break;
            }
        }
    }

    useEffect(() => {
        async function getTeamCampeao(){
            await axios.get('http://localhost:2020/campeao-libertadores')
            .then((response) => {
                campeao = response.data
            })
            .catch((error) => {
                console.log(error)
            })
        }

        async function getTeamSul(){
            await axios.get('http://localhost:2020/campeao-sul')
                .then((response) => {
                    sulCampeao = response.data
                })
                .catch((error) => {
                    console.log(error)
                })
        }

        async function getTeamsLigas(){
            let resBrasil = await axios.get('http://localhost:2020/brasil')
            let resArgentina = await axios.get('http://localhost:2020/argentina')
            let resColombia = await axios.get('http://localhost:2020/colombia')
            let resChile = await axios.get('http://localhost:2020/chile')
            let resUruguai = await axios.get('http://localhost:2020/uruguai')
            let resParaguai = await axios.get('http://localhost:2020/paraguai')
            let resPeru = await axios.get('http://localhost:2020/peru')
            let resBolivia = await axios.get('http://localhost:2020/bolivia')
            let resEquador = await axios.get('http://localhost:2020/equador')
            let resVenezuela = await axios.get('http://localhost:2020/venezuela')

            brasil = resBrasil.data
            argentina = resArgentina.data
            colombia = resColombia.data
            chile = resChile.data
            uruguai = resUruguai.data
            paraguai = resParaguai.data
            peru = resPeru.data
            bolivia = resBolivia.data
            equador = resEquador.data
            venezuela = resVenezuela.data
        }

        getTeamCampeao()
        getTeamSul()
        getTeamsLigas()

    }, [])

    return(
        <>
            <div className="faseUm">
                <h2>jogos</h2>

                <div className="confrontos">
                    <div className="confrontoUm">
                        <div className="ida">
                            <p className="information-jogo">terça <span className="stadium"></span> 19:30</p>
                            <p className='gameInformation'>
                                <span className='team'>
                                    
                                </span>
                                <span className="containerInput"><input type="text" className='input-time-resultado'/></span>
                                <span>x</span>
                                <span className="containerInput"><input type="text" className='input-time-resultado'/></span>
                                <span className='team'>
                                    
                                </span> 
                            </p>     
                        </div>

                        <div className="volta">
                            <p className="information-jogo">quarta <span className="stadium"></span> 21:00</p>
                            <p className='gameInformation'>
                                <span className='team'>
                                
                                </span>
                                <span className="containerInput"><input type="text" className='input-time-resultado'/></span>
                                <span>x</span>
                                <span className="containerInput"><input type="text" className='input-time-resultado'/></span>
                                <span className='team'>
                                    
                                </span> 
                            </p> 
                        </div>
                    </div>

                    <div className="confrontoDois">
                        <div className="ida">
                            <p className="information-jogo">quarta <span className="stadium"></span> 21:30</p>
                            <p className='gameInformation'>
                                <span className='team'>
                                    
                                </span>
                                <span className="containerInput"><input type="text" className='input-time-resultado'/></span>
                                <span>x</span>
                                <span className="containerInput"><input type="text" className='input-time-resultado'/></span>
                                <span className='team'>
                                    
                                </span> 
                            </p>     
                        </div>

                        <div className="volta">
                            <p className="information-jogo">quinta <span className="stadium"></span> 20:00</p>
                            <p className='gameInformation'>
                                <span className='team'>
                                    
                                </span>
                                <span className="containerInput"><input type="text" className='input-time-resultado'/></span>
                                <span>x</span>
                                <span className="containerInput"><input type="text" className='input-time-resultado'/></span>
                                <span className='team'>
                                    
                                </span> 
                            </p>     
                        </div>
                    </div>

                    <div className="confrontoTres">
                        <div className="ida">
                            <p className="information-jogo">quarta <span className="stadium"></span> 21:30</p>
                            <p className='gameInformation'>
                                <span className='team'>
                                    
                                </span>
                                <span className="containerInput"><input type="text" className='input-time-resultado'/></span>
                                <span>x</span>
                                <span className="containerInput"><input type="text" className='input-time-resultado'/></span>
                                <span className='team'>
                                    
                                </span> 
                            </p>     
                        </div>
                        <div className="volta">
                            <p className="information-jogo">quinta <span className="stadium"></span> 20:30</p>
                            <p className='gameInformation'>
                                <span className='team'>
                                    
                                </span>
                                <span className="containerInput"><input type="text" className='input-time-resultado'/></span>
                                <span>x</span>
                                <span className="containerInput"><input type="text" className='input-time-resultado'/></span>
                                <span className='team'>
                                    
                                </span> 
                            </p>     
                        </div>
                    </div>
                </div>
            </div>

            <div className='containerButton'>
                <button className='button' onClick={defineFirstPhase}>
                    Definir
                </button>
            </div>
        </>
    )
}