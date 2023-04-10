import { useEffect } from 'react'
import axios from 'axios'

import { Header } from '../componentes/Header'

import '../styles/faseUm.sass'

export function PrimeiraFase(){
    let campeao
    let sulCampeao
    let brasil = []
    let argentina = []
    let colombia  = []
    let chile  = []
    let uruguai  = []
    let paraguai  = []
    let peru  = []
    let bolivia = []
    let equador  = []
    let venezuela  = []

    let primeiraFase = []
    let segundaFase = []
    let faseGrupos = []

    let confronto1 = []
    let confronto2 = []
    let confronto3 = []

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

    function addTeams(liga, vagasT, vagasD, vagasS, faseUm){
        let campeonato = liga
        let totalVagas = vagasT
        let vagasDiretas = vagasD
        let vagasSegundaFase = vagasS
        let FaseUm = faseUm
        let algumCampeao = false

        if(sulCampeao.pais == campeonato[0].pais || campeao.pais == campeonato[0].pais){
            algumCampeao = true
        }

        if(FaseUm){
            if(algumCampeao){
                campeonato.forEach(element => {
                    if(element.pos <= totalVagas){
                        if(element.time == campeao.time
                             && element.pais == campeao.pais
                                || element.time == sulCampeao.time
                                    && element.pais == sulCampeao.pais){
                                        totalVagas += 1                                                        
                                        if(element.pos <= vagasDiretas){
                                            vagasDiretas += 1
                                        }
                        }else if(element.pos <= vagasDiretas){
                            faseGrupos.push(element)
                        }else if(element.pos <= vagasDiretas + vagasSegundaFase){
                            segundaFase.push(element)
                        }else{
                            primeiraFase.push(element)
                        }
                    }
                });
            }else{
                campeonato.forEach(element => {
                    if(element.pos <= totalVagas){
                        if(element.pos <= vagasDiretas){
                            faseGrupos.push(element)
                        }else if(element.pos <= totalVagas - 1){
                            segundaFase.push(element)
                        }else{
                            primeiraFase.push(element)
                        }
                    }
                })
            }
        }else{
            if(algumCampeao){
                campeonato.forEach(element => {
                    if(element.pos <= totalVagas){
                        if(element.time == campeao.time
                             && element.pais == campeao.pais
                                || element.time == sulCampeao.time
                                    && element.pais == sulCampeao.pais){
                                        totalVagas += 1                                                        
                                        if(element.pos <= vagasDiretas){
                                            vagasDiretas += 1
                                        }
                        }else if(element.pos <= vagasDiretas){
                            faseGrupos.push(element)
                        }else if(element.pos <= vagasDiretas + vagasSegundaFase){
                            segundaFase.push(element)
                        }
                    }
                });
            }else{
                campeonato.forEach(element => {
                    if(element.pos <= totalVagas){
                        if(element.pos <= vagasDiretas){
                            faseGrupos.push(element)
                        }else{
                            segundaFase.push(element)
                        }
                    }
                })
            }
        }
    }

    let ligado = 0
    function defineFirstPhase(){
        let spanTeam = document.querySelectorAll('span.team')
        let stadium = document.querySelectorAll('span.stadium')
        let buttonSaveResult = document.querySelectorAll('.btnSalvarResultado')
        let resultsGames = document.querySelectorAll('.input-time-resultado')
        let containerPenaltis = document.querySelectorAll('.penaltis')
        let resultPenaltis = document.querySelectorAll('.input-resultado-penaltis')
        ligado++

        if(ligado >= 2){
            alert('SORTEIO JÁ CONCLUIDO')
            return
        }

        addTeams(paraguai, 4, 2, 1, true) //2 DIRETAS 1 SEGUNDA 1 PRIMEIRA
        addTeams(peru, 4, 2, 1, true) //2 DIRETAS 1 SEGUNDA 1 PRIMEIRA
        addTeams(uruguai, 4, 2, 1, true) //2 DIRETAS 1 SEGUNDA 1 PRIMEIRA
        addTeams(venezuela, 4, 2, 1, true) //2 DIRETAS 1 SEGUNDA 1 PRIMEIRA
        addTeams(bolivia, 4, 2, 1, true) //2 DIRETAS 1 SEGUNDA 1 PRIMEIRA
        addTeams(equador, 4, 2, 1, true) //2 DIRETAS 1 SEGUNDA 1 PRIMEIRA
        addTeams(brasil, 7, 5, 2, false)  //5 DIRETAS 2 SEGUNDA
        addTeams(argentina, 6, 5, 1, false) //5 DIRETAS 1 SEGUNDA
        addTeams(colombia, 4, 2, 2, false) //2 DIRETAS 2 SEGUNDA
        addTeams(chile, 4, 2, 2, false) //2 DIRETAS 2 SEGUNDA 

        for(let v = 0; v < 6; v++){
            let numAleatorio = Math.floor(Math.random() * primeiraFase.length)

            switch (v) {
                case 0:
                    spanTeam[0].innerHTML += primeiraFase[numAleatorio].time
                    spanTeam[0].innerHTML += `<img src=${primeiraFase[numAleatorio].url} alt="bandeira do pais" />`

                    spanTeam[3].innerHTML += `<img src=${primeiraFase[numAleatorio].url} alt="bandeira do pais" />`
                    spanTeam[3].innerHTML += primeiraFase[numAleatorio].time

                    stadium[0].innerText += primeiraFase[numAleatorio].estadio

                    confronto1.push(primeiraFase[numAleatorio])
                    primeiraFase.splice(numAleatorio, 1)   
                    break;
            
                case 1:
                    spanTeam[1].innerHTML += `<img src=${primeiraFase[numAleatorio].url} alt="bandeira do pais" />`
                    spanTeam[1].innerHTML += primeiraFase[numAleatorio].time

                    spanTeam[2].innerHTML += primeiraFase[numAleatorio].time
                    spanTeam[2].innerHTML += `<img src=${primeiraFase[numAleatorio].url} alt="bandeira do pais" />`

                    stadium[1].innerText += primeiraFase[numAleatorio].estadio

                    confronto1.push(primeiraFase[numAleatorio])
                    primeiraFase.splice(numAleatorio, 1)        
                    break;

                case 2:
                    spanTeam[4].innerHTML += primeiraFase[numAleatorio].time
                    spanTeam[4].innerHTML += `<img src=${primeiraFase[numAleatorio].url} alt="bandeira do pais" />`

                    spanTeam[7].innerHTML += `<img src=${primeiraFase[numAleatorio].url} alt="bandeira do pais" />`
                    spanTeam[7].innerHTML += primeiraFase[numAleatorio].time

                    stadium[2].innerText += primeiraFase[numAleatorio].estadio

                    confronto2.push(primeiraFase[numAleatorio])
                    primeiraFase.splice(numAleatorio, 1)        
                    break;

                case 3:
                    spanTeam[5].innerHTML += `<img src=${primeiraFase[numAleatorio].url} alt="bandeira do pais" />`
                    spanTeam[5].innerHTML += primeiraFase[numAleatorio].time

                    spanTeam[6].innerHTML += primeiraFase[numAleatorio].time
                    spanTeam[6].innerHTML += `<img src=${primeiraFase[numAleatorio].url} alt="bandeira do pais" />`

                    stadium[3].innerText += primeiraFase[numAleatorio].estadio

                    confronto2.push(primeiraFase[numAleatorio])
                    primeiraFase.splice(numAleatorio, 1)        
                    break;

                case 4:
                    spanTeam[8].innerHTML += primeiraFase[numAleatorio].time
                    spanTeam[8].innerHTML += `<img src=${primeiraFase[numAleatorio].url} alt="bandeira do pais" />`

                    spanTeam[11].innerHTML += `<img src=${primeiraFase[numAleatorio].url} alt="bandeira do pais" />`
                    spanTeam[11].innerHTML += primeiraFase[numAleatorio].time

                    stadium[4].innerText += primeiraFase[numAleatorio].estadio

                    confronto3.push(primeiraFase[numAleatorio])
                    primeiraFase.splice(numAleatorio, 1)        
                    break;

                case 5:
                    spanTeam[9].innerHTML += `<img src=${primeiraFase[numAleatorio].url} alt="bandeira do pais" />`
                    spanTeam[9].innerHTML += primeiraFase[numAleatorio].time

                    spanTeam[10].innerHTML += primeiraFase[numAleatorio].time
                    spanTeam[10].innerHTML += `<img src=${primeiraFase[numAleatorio].url} alt="bandeira do pais" />`

                    stadium[5].innerText += primeiraFase[numAleatorio].estadio

                    confronto3.push(primeiraFase[numAleatorio])
                    primeiraFase.splice(numAleatorio, 1)        
                    break;
            }
        }
        
        buttonSaveResult[0].addEventListener('click', function setResult(){
            let result1 = resultsGames[0].value
            let result2 = resultsGames[1].value
            
            if(!result1 || ! result2)return

            resultsGames[0].setAttribute('readonly', 'readonly')
            resultsGames[1].setAttribute('readonly', 'readonly')

            this.classList.add('btn-disabled')
            this.removeEventListener('click', setResult)
        })
        buttonSaveResult[1].addEventListener('click', function setResult(){
            let result1 = resultsGames[2].value
            let result2 = resultsGames[3].value
            let acumuladoGols1 = Number(resultsGames[0].value) + Number(resultsGames[3].value)
            let acumuladoGols2 = Number(resultsGames[1].value) + Number(resultsGames[2].value)
            let golFora = false
            
            if(!result1 || ! result2)return

            if(buttonSaveResult[0].classList.contains('btn-disabled') != true)return

            resultsGames[2].setAttribute('readonly', 'readonly')
            resultsGames[3].setAttribute('readonly', 'readonly')

            if(acumuladoGols1 == acumuladoGols2){
                if(resultsGames[0].value == resultsGames[2].value && resultsGames[1].value == resultsGames[3].value){
                    containerPenaltis[0].classList.add('on')    //('visibility', 'visible')
                }else(
                    golFora = true
                )
            }

            if(containerPenaltis[0].classList.contains('on') == true){
                let penalt1 = resultPenaltis[0].value
                let penalt2 = resultPenaltis[1].value

                if(!penalt1 || !penalt2)return

                resultPenaltis[0].setAttribute('readonly', 'readonly')
                resultPenaltis[1].setAttribute('readonly', 'readonly')

                if(penalt1 > penalt2 ){
                    spanTeam[0].classList.add('eliminado') 
                    spanTeam[3].classList.add('eliminado')

                    segundaFase.push(confronto1[1])
                }else{
                    spanTeam[1].classList.add('eliminado')
                    spanTeam[2].classList.add('eliminado')

                    segundaFase.push(confronto1[0])
                }                
            }else if(golFora){
                if(resultsGames[1].value > resultsGames[3].value){
                    spanTeam[0].classList.add('eliminado') 
                    spanTeam[3].classList.add('eliminado')

                    segundaFase.push(confronto1[1])
                }else{
                    spanTeam[1].classList.add('eliminado')
                    spanTeam[2].classList.add('eliminado')

                    segundaFase.push(confronto1[0])
                }
            }else{
                if(acumuladoGols1 > acumuladoGols2){
                    spanTeam[1].classList.add('eliminado')
                    spanTeam[2].classList.add('eliminado')

                    segundaFase.push(confronto1[0])
                }else{
                    spanTeam[0].classList.add('eliminado') 
                    spanTeam[3].classList.add('eliminado')

                    segundaFase.push(confronto1[1])
                }
            }

            this.classList.add('btn-disabled')
            this.removeEventListener('click', setResult)
        })

        buttonSaveResult[2].addEventListener('click', function setResult(){
            let result1 = resultsGames[4].value
            let result2 = resultsGames[5].value
            
            if(!result1 || ! result2)return

            resultsGames[4].setAttribute('readonly', 'readonly')
            resultsGames[5].setAttribute('readonly', 'readonly')

            this.classList.add('btn-disabled')
            this.removeEventListener('click', setResult)
        })
        buttonSaveResult[3].addEventListener('click', function setResult(){
            let result1 = resultsGames[6].value
            let result2 = resultsGames[7].value
            let acumuladoGols1 = Number(resultsGames[4].value) + Number(resultsGames[7].value)
            let acumuladoGols2 = Number(resultsGames[5].value) + Number(resultsGames[6].value)
            let golFora = false
            
            if(!result1 || ! result2)return

            if(buttonSaveResult[2].classList.contains('btn-disabled') != true)return

            resultsGames[6].setAttribute('readonly', 'readonly')
            resultsGames[7].setAttribute('readonly', 'readonly')

            if(acumuladoGols1 == acumuladoGols2){
                if(resultsGames[4].value == resultsGames[6].value && resultsGames[5].value == resultsGames[7].value){
                    containerPenaltis[1].classList.add('on')    //('visibility', 'visible')
                }else(
                    golFora = true
                )
            }

            if(containerPenaltis[1].classList.contains('on') == true){
                let penalt1 = resultPenaltis[2].value
                let penalt2 = resultPenaltis[3].value

                if(!penalt1 || !penalt2)return

                resultPenaltis[2].setAttribute('readonly', 'readonly')
                resultPenaltis[3].setAttribute('readonly', 'readonly')

                if(penalt1 > penalt2 ){
                    spanTeam[4].classList.add('eliminado') 
                    spanTeam[7].classList.add('eliminado')

                    segundaFase.push(confronto2[1])
                }else{
                    spanTeam[5].classList.add('eliminado')
                    spanTeam[6].classList.add('eliminado')

                    segundaFase.push(confronto2[0])
                }                
            }else if(golFora){
                if(resultsGames[5].value > resultsGames[7].value){
                    spanTeam[4].classList.add('eliminado') 
                    spanTeam[7].classList.add('eliminado')

                    segundaFase.push(confronto2[1])
                }else{
                    spanTeam[5].classList.add('eliminado')
                    spanTeam[6].classList.add('eliminado')

                    segundaFase.push(confronto2[0])
                }
            }else{
                if(acumuladoGols1 > acumuladoGols2){
                    spanTeam[5].classList.add('eliminado')
                    spanTeam[6].classList.add('eliminado')

                    segundaFase.push(confronto2[0])
                }else{
                    spanTeam[4].classList.add('eliminado') 
                    spanTeam[7].classList.add('eliminado')

                    segundaFase.push(confronto2[1])
                }
            }

            this.classList.add('btn-disabled')
            this.removeEventListener('click', setResult)
        })
        buttonSaveResult[4].addEventListener('click', function setResult(){
            let result1 = resultsGames[8].value
            let result2 = resultsGames[9].value
            
            if(!result1 || ! result2)return

            resultsGames[8].setAttribute('readonly', 'readonly')
            resultsGames[9].setAttribute('readonly', 'readonly')

            this.classList.add('btn-disabled')
            this.removeEventListener('click', setResult)
        })
        buttonSaveResult[5].addEventListener('click', function setResult(){
            let result1 = resultsGames[10].value
            let result2 = resultsGames[11].value
            let acumuladoGols1 = Number(resultsGames[8].value) + Number(resultsGames[11].value)
            let acumuladoGols2 = Number(resultsGames[9].value) + Number(resultsGames[10].value)
            let golFora = false
            
            if(!result1 || ! result2)return

            if(buttonSaveResult[4].classList.contains('btn-disabled') != true)return

            resultsGames[10].setAttribute('readonly', 'readonly')
            resultsGames[11].setAttribute('readonly', 'readonly')

            if(acumuladoGols1 == acumuladoGols2){
                if(resultsGames[8].value == resultsGames[10].value && resultsGames[9].value == resultsGames[11].value){
                    containerPenaltis[2].classList.add('on')    //('visibility', 'visible')
                }else(
                    golFora = true
                )
            }

            if(containerPenaltis[2].classList.contains('on') == true){
                let penalt1 = resultPenaltis[4].value
                let penalt2 = resultPenaltis[5].value

                if(!penalt1 || !penalt2)return

                resultPenaltis[4].setAttribute('readonly', 'readonly')
                resultPenaltis[5].setAttribute('readonly', 'readonly')

                if(penalt1 > penalt2 ){
                    spanTeam[8].classList.add('eliminado') 
                    spanTeam[11].classList.add('eliminado')

                    segundaFase.push(confronto3[1])
                }else{
                    spanTeam[9].classList.add('eliminado')
                    spanTeam[10].classList.add('eliminado')

                    segundaFase.push(confronto3[0])
                }                
            }else if(golFora){
                if(resultsGames[9].value > resultsGames[11].value){
                    spanTeam[8].classList.add('eliminado') 
                    spanTeam[11].classList.add('eliminado')

                    segundaFase.push(confronto3[1])
                }else{
                    spanTeam[9].classList.add('eliminado')
                    spanTeam[10].classList.add('eliminado')

                    segundaFase.push(confronto3[0])
                }
            }else{
                if(acumuladoGols1 > acumuladoGols2){
                    spanTeam[9].classList.add('eliminado')
                    spanTeam[10].classList.add('eliminado')

                    segundaFase.push(confronto3[0])
                }else{
                    spanTeam[8].classList.add('eliminado') 
                    spanTeam[11].classList.add('eliminado')

                    segundaFase.push(confronto3[1])
                }
            }

            this.classList.add('btn-disabled')
            this.removeEventListener('click', setResult)
        })
    }

    return(
        <>
            <Header fases='primeira fase'/>

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
                            
                            <div className="containerBtnSalvar">
                                <button className='button btnSalvarResultado'>salvar</button>
                            </div>
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

                            <p className="penaltis">
                                <span className="containerInput"><input type="text" className='input-resultado-penaltis'/></span>
                                <span className="containerInput"><input type="text" className='input-resultado-penaltis'/></span>
                            </p>

                            <div className="containerBtnSalvar">
                                <button className='button btnSalvarResultado'>salvar</button>
                            </div>
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

                            <div className="containerBtnSalvar">
                                <button className='button btnSalvarResultado'>salvar</button>
                            </div>
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

                            <p className="penaltis">
                                <span className="containerInput"><input type="text" className='input-resultado-penaltis'/></span>
                                <span className="containerInput"><input type="text" className='input-resultado-penaltis'/></span>
                            </p>

                            <div className="containerBtnSalvar">
                                <button className='button btnSalvarResultado'>salvar</button>
                            </div>   
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

                            <div className="containerBtnSalvar">
                                <button className='button btnSalvarResultado'>salvar</button>
                            </div>     
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

                            <p className="penaltis">
                                <span className="containerInput"><input type="text" className='input-resultado-penaltis'/></span>
                                <span className="containerInput"><input type="text" className='input-resultado-penaltis'/></span>
                            </p>

                            <div className="containerBtnSalvar">
                                <button className='button btnSalvarResultado'>salvar</button>
                            </div>     
                        </div>
                    </div>
                </div>
            </div>

            <div className='containerButton'>
                <button className='button' onClick={defineFirstPhase}>
                    sortear
                </button>
            </div>
        </>
    )
}