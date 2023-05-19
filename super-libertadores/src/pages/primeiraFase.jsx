import { useEffect, useContext } from 'react'
import axios from 'axios'

import { Header } from '../componentes/Header'

import '../styles/eliminatoria.sass'
import { GetTimes } from '../componentes/api/getTeams'
import { json } from 'react-router-dom'

export function PrimeiraFase(){
    let [
        newPrevSegundaFase,
        previaSegundaFase,
        newPrevTerceiraFaseFase,
        previaTerceiraFase
    ] = useContext(GetTimes)

    let campeao = []
    let sulCampeao = []
    let brasil = []
    let argentina = []
    let colombia = []
    let uruguai = []
    let chile = []
    let paraguai = []
    let equador = []
    let venezuela = []
    let bolivia = []
    let peru = []

    let primeiraFase = []
    let segundaFase = []
    let faseGrupos = []

    let confronto1 = []
    let confronto2 = []
    let confronto3 = []

    let ligado = 0
    let infoTeam1
    let infoTeam2
    let infoTeam3
    let infoTeam4
    let infoTeam5
    let infoTeam6
    let infoPenalti1
    let infoPenalti2
    let infoPenalti3

    let saveResults1
    let saveResults2
    let saveResults3
    let saveResults4
    let saveResults5
    let saveResults6

    async function carregarTimes(){
        await axios.get('http://localhost:2020/campeao-libertadores')
            .then((response) => {
                campeao = response.data
            })
            .catch((error) => {
                console.log(error)
        })
        await axios.get('http://localhost:2020/campeao-sul')
            .then((response) => {
                sulCampeao = response.data
            })
            .catch((error) => {
                console.log(error)
            })

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
                            newPrevSegundaFase(element)
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
                            newPrevSegundaFase(element)
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
                            newPrevSegundaFase(element)
                        }
                    }
                });
            }else{
                campeonato.forEach(element => {
                    if(element.pos <= totalVagas){
                        if(element.pos <= vagasDiretas){
                            faseGrupos.push(element)
                        }else{
                            newPrevSegundaFase(element)
                        }
                    }
                })
            }
        }
    }

    if(sessionStorage.getItem('valueBtn') == 1){
        infoTeam1 = JSON.parse(sessionStorage.getItem('Time1'))
        infoTeam2 = JSON.parse(sessionStorage.getItem('Time2'))
        infoTeam3 = JSON.parse(sessionStorage.getItem('Time3'))
        infoTeam4 = JSON.parse(sessionStorage.getItem('Time4'))
        infoTeam5 = JSON.parse(sessionStorage.getItem('Time5'))
        infoTeam6 = JSON.parse(sessionStorage.getItem('Time6'))

        saveResults1 = JSON.parse(sessionStorage.getItem('Jg1'))
        saveResults2 = JSON.parse(sessionStorage.getItem('Jg2'))
        saveResults3 = JSON.parse(sessionStorage.getItem('Jg3'))
        saveResults4 = JSON.parse(sessionStorage.getItem('Jg4'))
        saveResults5 = JSON.parse(sessionStorage.getItem('Jg5'))
        saveResults6 = JSON.parse(sessionStorage.getItem('Jg6'))
        saveResults6 = JSON.parse(sessionStorage.getItem('Jg6'))

        infoPenalti1 = JSON.parse(sessionStorage.getItem('Pen1')) != undefined 
            ? JSON.parse(sessionStorage.getItem('Pen1')) 
                : null

        infoPenalti2 = JSON.parse(sessionStorage.getItem('Pen2')) != undefined
            ? JSON.parse(sessionStorage.getItem('Pen2'))
                : null

        infoPenalti3 = JSON.parse(sessionStorage.getItem('Pen3')) != undefined
            ? JSON.parse(sessionStorage.getItem('Pen3'))
                : null
        
        setTimeout(() => {addEventButton()}, 100)
    }

    function sortClashes(){
        let spanTeam = document.querySelectorAll('span.team')
        let stadium = document.querySelectorAll('span.stadium')
        let buttonSaveResult = document.querySelectorAll('.btnSalvarResultado')
        let resultsGames = document.querySelectorAll('.input-time-resultado')
        let containerPenaltis = document.querySelectorAll('.penaltis')
        let resultPenaltis = document.querySelectorAll('.input-resultado-penaltis')

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
                    sessionStorage.setItem('Time1', JSON.stringify(confronto1[0]))
                    primeiraFase.splice(numAleatorio, 1)   
                    break;

                case 1:
                    spanTeam[1].innerHTML += `<img src=${primeiraFase[numAleatorio].url} alt="bandeira do pais" />`
                    spanTeam[1].innerHTML += primeiraFase[numAleatorio].time
                    spanTeam[2].innerHTML += primeiraFase[numAleatorio].time
                    spanTeam[2].innerHTML += `<img src=${primeiraFase[numAleatorio].url} alt="bandeira do pais" />`
                    stadium[1].innerText += primeiraFase[numAleatorio].estadio

                    confronto1.push(primeiraFase[numAleatorio])
                    sessionStorage.setItem('Time2', JSON.stringify(confronto1[1]))
                    primeiraFase.splice(numAleatorio, 1)        
                    break;

                case 2:
                    spanTeam[4].innerHTML += primeiraFase[numAleatorio].time
                    spanTeam[4].innerHTML += `<img src=${primeiraFase[numAleatorio].url} alt="bandeira do pais" />`
                    spanTeam[7].innerHTML += `<img src=${primeiraFase[numAleatorio].url} alt="bandeira do pais" />`
                    spanTeam[7].innerHTML += primeiraFase[numAleatorio].time
                    stadium[2].innerText += primeiraFase[numAleatorio].estadio

                    confronto2.push(primeiraFase[numAleatorio])
                    sessionStorage.setItem('Time3', JSON.stringify(confronto2[0]))
                    primeiraFase.splice(numAleatorio, 1)        
                    break;

                case 3:
                    spanTeam[5].innerHTML += `<img src=${primeiraFase[numAleatorio].url} alt="bandeira do pais" />`
                    spanTeam[5].innerHTML += primeiraFase[numAleatorio].time
                    spanTeam[6].innerHTML += primeiraFase[numAleatorio].time
                    spanTeam[6].innerHTML += `<img src=${primeiraFase[numAleatorio].url} alt="bandeira do pais" />`
                    stadium[3].innerText += primeiraFase[numAleatorio].estadio

                    confronto2.push(primeiraFase[numAleatorio])
                    sessionStorage.setItem('Time4', JSON.stringify(confronto2[1]))
                    primeiraFase.splice(numAleatorio, 1)        
                    break;

                case 4:
                    spanTeam[8].innerHTML += primeiraFase[numAleatorio].time
                    spanTeam[8].innerHTML += `<img src=${primeiraFase[numAleatorio].url} alt="bandeira do pais" />`
                    spanTeam[11].innerHTML += `<img src=${primeiraFase[numAleatorio].url} alt="bandeira do pais" />`
                    spanTeam[11].innerHTML += primeiraFase[numAleatorio].time
                    stadium[4].innerText += primeiraFase[numAleatorio].estadio

                    confronto3.push(primeiraFase[numAleatorio])
                    sessionStorage.setItem('Time5', JSON.stringify(confronto3[0]))
                    primeiraFase.splice(numAleatorio, 1)        
                    break;

                case 5:
                    spanTeam[9].innerHTML += `<img src=${primeiraFase[numAleatorio].url} alt="bandeira do pais" />`
                    spanTeam[9].innerHTML += primeiraFase[numAleatorio].time
                    spanTeam[10].innerHTML += primeiraFase[numAleatorio].time
                    spanTeam[10].innerHTML += `<img src=${primeiraFase[numAleatorio].url} alt="bandeira do pais" />`
                    stadium[5].innerText += primeiraFase[numAleatorio].estadio

                    confronto3.push(primeiraFase[numAleatorio])
                    sessionStorage.setItem('Time6', JSON.stringify(confronto3[1]))
                    primeiraFase.splice(numAleatorio, 1)        
                    break;
            }
        }
    }

    function addEventButton(){
        let spanTeam = document.querySelectorAll('span.team')
        let resultsGames = document.querySelectorAll('.input-time-resultado')
        let containerPenaltis = document.querySelectorAll('.penaltis')
        let resultPenaltis = document.querySelectorAll('.input-resultado-penaltis')
        let buttonSaveResult = document.querySelectorAll('.btnSalvarResultado')

        buttonSaveResult[0].addEventListener('click', function setResult(){
            let result1 = resultsGames[0].value
            let result2 = resultsGames[1].value
            let jogo1 = []
            
            if(saveResults1 != null){
                console.log('Resultadores já registrados')
                return
            }

            if(!result1 || ! result2)return

            jogo1[0] = Number(result1)
            jogo1[1] = Number(result2)

            sessionStorage.setItem('Jg1', JSON.stringify(jogo1))
            saveResults1 = JSON.parse(sessionStorage.getItem('Jg1'))

            resultsGames[0].setAttribute('readonly', 'readonly')
            resultsGames[1].setAttribute('readonly', 'readonly')

            this.classList.add('btn-disabled')
            this.removeEventListener('click', setResult)
        })
        buttonSaveResult[1].addEventListener('click', function setResult(){
            let result1 = resultsGames[2].value
            let result2 = resultsGames[3].value
            let golFora = false
            let jogo2 = []
            
            if(saveResults1 == undefined){
                console.log('Resultado do primeiro jogo não registrado')
                return
            }
            let acumuladoGols1 = Number(saveResults1[0]) + Number(result2)
            let acumuladoGols2 = Number(saveResults1[1]) + Number(result1)

            if(saveResults2 != null){
                console.log('Resultadores já registrados')
                return
            }
            
            if(!result1 || ! result2)return

            jogo2[0] = Number(result1)
            jogo2[1] = Number(result2)

            sessionStorage.setItem('Jg2', JSON.stringify(jogo2))

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
                let Penaltis1 = []

                if(!penalt1 || !penalt2)return

                resultPenaltis[0].setAttribute('readonly', 'readonly')
                resultPenaltis[1].setAttribute('readonly', 'readonly')

                Penaltis1[0] = Number(penalt1)
                Penaltis1[1] = Number(penalt2)
                sessionStorage.setItem('Pen1', JSON.stringify(Penaltis1))

                if(penalt1 > penalt2 ){
                    spanTeam[0].classList.add('eliminado') 
                    spanTeam[3].classList.add('eliminado')

                    if(confronto1[1] != undefined){
                        newPrevSegundaFase(confronto1[1], 13)
                    }else{
                        newPrevSegundaFase(infoTeam2, 13)
                    }
                }else{
                    spanTeam[1].classList.add('eliminado')
                    spanTeam[2].classList.add('eliminado')

                    if(confronto1[0] != undefined){
                        newPrevSegundaFase(confronto1[0], 13)
                    }else{
                        newPrevSegundaFase(infoTeam1, 13)
                    }
                }                
            }else if(golFora){
                if(resultsGames[1].value > resultsGames[3].value){
                    spanTeam[0].classList.add('eliminado') 
                    spanTeam[3].classList.add('eliminado')

                    if(confronto1[1] != undefined){
                        newPrevSegundaFase(confronto1[1], 13)
                    }else{
                        newPrevSegundaFase(infoTeam2, 13)
                    }
                }else{
                    spanTeam[1].classList.add('eliminado')
                    spanTeam[2].classList.add('eliminado')

                    if(confronto1[0] != undefined){
                        newPrevSegundaFase(confronto1[0], 13)
                    }else{
                        newPrevSegundaFase(infoTeam1, 13)
                    }
                }
            }else{
                if(acumuladoGols1 > acumuladoGols2){
                    spanTeam[1].classList.add('eliminado')
                    spanTeam[2].classList.add('eliminado')

                    if(confronto1[0] != undefined){
                        newPrevSegundaFase(confronto1[0], 13)
                    }else{
                        newPrevSegundaFase(infoTeam1, 13)
                    }
                }else{
                    spanTeam[0].classList.add('eliminado') 
                    spanTeam[3].classList.add('eliminado')

                    if(confronto1[1] != undefined){
                        newPrevSegundaFase(confronto1[1], 13)
                    }else{
                        newPrevSegundaFase(infoTeam2, 13)
                    }
                }
            }

            this.classList.add('btn-disabled')
            this.removeEventListener('click', setResult)
        })
        buttonSaveResult[2].addEventListener('click', function setResult(){
            let result1 = resultsGames[4].value
            let result2 = resultsGames[5].value
            let jogo1 = []
            
            if(saveResults3 != null){
                console.log('Resultadores já registrados')
                return
            }

            if(!result1 || ! result2)return

            jogo1[0] = Number(result1)
            jogo1[1] = Number(result2)

            sessionStorage.setItem('Jg3', JSON.stringify(jogo1))
            saveResults3 = JSON.parse(sessionStorage.getItem('Jg3'))

            resultsGames[4].setAttribute('readonly', 'readonly')
            resultsGames[5].setAttribute('readonly', 'readonly')

            this.classList.add('btn-disabled')
            this.removeEventListener('click', setResult)
        })
        buttonSaveResult[3].addEventListener('click', function setResult(){
            let result1 = resultsGames[6].value
            let result2 = resultsGames[7].value
            let golFora = false
            let jogo2 = []
            
            if(saveResults3 == undefined){
                console.log('Resultado do primeiro jogo não registrado')
                return
            }

            let acumuladoGols1 = Number(saveResults3[0]) + Number(result2)
            let acumuladoGols2 = Number(saveResults3[1]) + Number(result1)

            if(saveResults4 != null){
                console.log('Resultadores já registrados')
                return
            }
            
            if(!result1 || ! result2)return

            jogo2[0] = Number(result1)
            jogo2[1] = Number(result2)

            sessionStorage.setItem('Jg4', JSON.stringify(jogo2))

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
                let Penaltis2 = []

                if(!penalt1 || !penalt2)return

                resultPenaltis[2].setAttribute('readonly', 'readonly')
                resultPenaltis[3].setAttribute('readonly', 'readonly')

                Penaltis2[0] = Number(penalt1)
                Penaltis2[1] = Number(penalt2)
                sessionStorage.setItem('Pen2', JSON.stringify(Penaltis2))

                if(penalt1 > penalt2 ){
                    spanTeam[4].classList.add('eliminado') 
                    spanTeam[7].classList.add('eliminado')

                    if(confronto2[1] != undefined){
                        newPrevSegundaFase(confronto2[1], 14)
                    }else{
                        newPrevSegundaFase(infoTeam4, 14)
                    }
                }else{
                    spanTeam[5].classList.add('eliminado')
                    spanTeam[6].classList.add('eliminado')

                    if(confronto2[0] != undefined){
                        newPrevSegundaFase(confronto2[0], 14)
                    }else{
                        newPrevSegundaFase(infoTeam4, 14)
                    }
                }                
            }else if(golFora){
                if(resultsGames[5].value > resultsGames[7].value){
                    spanTeam[4].classList.add('eliminado') 
                    spanTeam[7].classList.add('eliminado')

                    if(confronto2[1] != undefined){
                        newPrevSegundaFase(confronto2[1], 14)
                    }else{
                        newPrevSegundaFase(infoTeam4, 14)
                    }
                }else{
                    spanTeam[5].classList.add('eliminado')
                    spanTeam[6].classList.add('eliminado')

                    if(confronto2[0] != undefined){
                        newPrevSegundaFase(confronto2[0], 14)
                    }else{
                        newPrevSegundaFase(infoTeam3, 14)
                    }
                }
            }else{
                if(acumuladoGols1 > acumuladoGols2){
                    spanTeam[5].classList.add('eliminado')
                    spanTeam[6].classList.add('eliminado')

                    //AQUI
                    if(confronto2[0] != undefined){
                        newPrevSegundaFase(confronto2[0], 14)
                    }else{
                        newPrevSegundaFase(infoTeam3, 14)
                    }
                }else{
                    spanTeam[4].classList.add('eliminado') 
                    spanTeam[7].classList.add('eliminado')

                    if(confronto2[1] != undefined){
                        newPrevSegundaFase(confronto2[1], 14)
                    }else{
                        newPrevSegundaFase(infoTeam4, 14)
                    }
                }
            }

            this.classList.add('btn-disabled')
            this.removeEventListener('click', setResult)
        })
        buttonSaveResult[4].addEventListener('click', function setResult(){
            let result1 = resultsGames[8].value
            let result2 = resultsGames[9].value
            let jogo1 = []
            
            if(saveResults5 != null){
                console.log('Resultadores já registrados')
                return
            }

            if(!result1 || ! result2)return

            jogo1[0] = Number(result1)
            jogo1[1] = Number(result2)

            sessionStorage.setItem('Jg5', JSON.stringify(jogo1))
            saveResults5 = JSON.parse(sessionStorage.getItem('Jg5'))

            resultsGames[8].setAttribute('readonly', 'readonly')
            resultsGames[9].setAttribute('readonly', 'readonly')

            this.classList.add('btn-disabled')
            this.removeEventListener('click', setResult)
        })
        buttonSaveResult[5].addEventListener('click', function setResult(){
            let result1 = resultsGames[10].value
            let result2 = resultsGames[11].value
            let golFora = false
            let jogo2 = []
            
            if(saveResults5 == undefined){
                console.log('Resultado do primeiro jogo não registrado')
                return
            }
            let acumuladoGols1 = Number(saveResults5[0]) + Number(result2)
            let acumuladoGols2 = Number(saveResults5[1]) + Number(result1)

            if(saveResults6 != null){
                console.log('Resultadores já registrados')
                return
            }
            
            if(!result1 || ! result2)return

            jogo2[0] = Number(result1)
            jogo2[1] = Number(result2)

            sessionStorage.setItem('Jg6', JSON.stringify(jogo2))

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
                let Penaltis3 = []

                if(!penalt1 || !penalt2)return

                resultPenaltis[4].setAttribute('readonly', 'readonly')
                resultPenaltis[5].setAttribute('readonly', 'readonly')

                Penaltis3[0] = Number(penalt1)
                Penaltis3[1] = Number(penalt2)
                sessionStorage.setItem('Pen3', JSON.stringify(Penaltis3))

                if(penalt1 > penalt2 ){
                    spanTeam[8].classList.add('eliminado') 
                    spanTeam[11].classList.add('eliminado')

                    if(confronto3[1] != undefined){
                        newPrevSegundaFase(confronto3[1], 15)
                    }else{
                        newPrevSegundaFase(infoTeam6, 15)
                    }
                }else{
                    spanTeam[9].classList.add('eliminado')
                    spanTeam[10].classList.add('eliminado')

                    if(confronto3[0] != undefined){
                        newPrevSegundaFase(confronto3[0], 15)
                    }else{
                        newPrevSegundaFase(infoTeam5, 15)
                    }
                }                
            }else if(golFora){
                if(resultsGames[9].value > resultsGames[11].value){
                    spanTeam[8].classList.add('eliminado') 
                    spanTeam[11].classList.add('eliminado')

                    if(confronto3[1] != undefined){
                        newPrevSegundaFase(confronto3[1], 15)
                    }else{
                        newPrevSegundaFase(infoTeam6, 15)
                    }
                }else{
                    spanTeam[9].classList.add('eliminado')
                    spanTeam[10].classList.add('eliminado')

                    if(confronto3[0] != undefined){
                        newPrevSegundaFase(confronto3[0], 15)
                    }else{
                        newPrevSegundaFase(infoTeam5, 15)
                    }
                }
            }else{
                if(acumuladoGols1 > acumuladoGols2){
                    spanTeam[9].classList.add('eliminado')
                    spanTeam[10].classList.add('eliminado')

                    if(confronto3[0] != undefined){
                        newPrevSegundaFase(confronto3[0], 15)
                    }else{
                        newPrevSegundaFase(infoTeam5, 15)
                    }
                }else{
                    spanTeam[8].classList.add('eliminado') 
                    spanTeam[11].classList.add('eliminado')

                    if(confronto3[1] != undefined){
                        newPrevSegundaFase(confronto3[1], 15)
                    }else{
                        newPrevSegundaFase(infoTeam6, 15)
                    }
                }
            }

            this.classList.add('btn-disabled')
            this.removeEventListener('click', setResult)
        })
    }
    
    async function defineFirstPhase(){
        if(sessionStorage.getItem('valueBtn') == null){
            await carregarTimes()

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

            sortClashes()

            addEventButton()
        }        

        if(sessionStorage.getItem('valueBtn') == 1){
            alert('Sorteio já concluido')
            return
        }

        if(ligado == 0){
            ligado++
            sessionStorage.setItem('valueBtn', ligado)
        }
    }

    return(
        <>
            <Header fases='primeira fase' previousLink='' nextLink='/segunda-fase'/>

            <div className="fasesEliminatorias">
                <h2>jogos</h2>

                <div className="confrontos">
                    <div className="confrontoUm">
                        <div className="ida">
                            <p className="information-jogo">terça <span className="stadium">{infoTeam1 && infoTeam1.estadio}</span> 19:30</p>
                            <p className='gameInformation'>
                                <span className='team'>
                                    {infoTeam1 && infoTeam1.time}                    
                                    {infoTeam1 && <img src={infoTeam1.url} alt="" />}
                                </span>
                                <span className="containerInput">
                                    {saveResults1 ? 
                                        <input 
                                            type="text" 
                                            className='input-time-resultado' 
                                            value={saveResults1[0]} 
                                            readOnly 
                                        />
                                        :
                                        <input type="text" className='input-time-resultado'/>
                                    }
                                </span>
                                <span>x</span>     
                                <span className="containerInput">
                                    {saveResults1 ? 
                                        <input 
                                            type="text" 
                                            className='input-time-resultado' 
                                            value={saveResults1[1]} 
                                            readOnly 
                                        />
                                        :
                                        <input type="text" className='input-time-resultado'/>
                                    }
                                </span>
                                <span className='team'>
                                    {infoTeam2 && <img src={infoTeam2.url} alt="" />}
                                    {infoTeam2 && infoTeam2.time}                    
                                </span> 
                            </p>                                
                            
                            <div className="containerBtnSalvar">
                                <button className='button btnSalvarResultado'>salvar</button>
                            </div>
                        </div>

                        <div className="volta">
                            <p className="information-jogo">quarta <span className="stadium">{infoTeam2 && infoTeam2.estadio}</span> 21:00</p>
                            <p className='gameInformation'>
                                <span className='team'>
                                    {infoTeam2 && infoTeam2.time}                    
                                    {infoTeam2 && <img src={infoTeam2.url} alt="" />}
                                </span>
                                <span className="containerInput">
                                    {saveResults2 ? 
                                        <input 
                                            type="text" 
                                            className='input-time-resultado' 
                                            value={saveResults2[0]} 
                                            readOnly 
                                        />
                                        :
                                        <input type="text" className='input-time-resultado'/>
                                    }
                                </span>
                                <span>x</span>
                                <span className="containerInput">
                                    {saveResults2 ? 
                                        <input 
                                            type="text" 
                                            className='input-time-resultado' 
                                            value={saveResults2[1]} 
                                            readOnly 
                                        />
                                        :
                                        <input type="text" className='input-time-resultado'/>
                                    }
                                </span>
                                <span className='team'>
                                    {infoTeam1 && <img src={infoTeam1.url} alt="" />}
                                    {infoTeam1 && infoTeam1.time}                    
                                </span>
                            </p> 

                            {infoPenalti1 != null ? 
                                <p className='penaltis on'>
                                    <span className="containerInput">
                                        <input type="text" className='input-resultado-penaltis' value={infoPenalti1[0]} readOnly/>
                                    </span>
                                    <span className="containerInput">
                                        <input type="text" className='input-resultado-penaltis' value={infoPenalti1[1]} readOnly/>
                                    </span>
                                </p>
                                :
                                <p className='penaltis'>
                                    <span className="containerInput"><input type="text" className='input-resultado-penaltis'/></span>
                                    <span className="containerInput"><input type="text" className='input-resultado-penaltis'/></span>
                                </p>
                            }

                            <div className="containerBtnSalvar">
                                <button className='button btnSalvarResultado'>salvar</button>
                            </div>
                        </div>
                    </div>

                    <div className="confrontoDois">
                        <div className="ida">
                            <p className="information-jogo">quarta <span className="stadium">{infoTeam3 && infoTeam3.estadio}</span> 21:30</p>
                            <p className='gameInformation'>
                                <span className='team'>
                                    {infoTeam3 && infoTeam3.time}                    
                                    {infoTeam3 && <img src={infoTeam3.url} alt="" />}
                                </span>
                                <span className="containerInput">
                                    {saveResults3 ? 
                                        <input 
                                            type="text" 
                                            className='input-time-resultado' 
                                            value={saveResults3[0]} 
                                            readOnly 
                                        />
                                        :
                                        <input type="text" className='input-time-resultado'/>
                                    }
                                </span>
                                <span>x</span>
                                <span className="containerInput">
                                    {saveResults3 ? 
                                        <input 
                                            type="text" 
                                            className='input-time-resultado' 
                                            value={saveResults3[1]} 
                                            readOnly 
                                        />
                                        :
                                        <input type="text" className='input-time-resultado'/>
                                    }
                                </span>
                                <span className='team'>
                                    {infoTeam4 && <img src={infoTeam4.url} alt="" />}
                                    {infoTeam4 && infoTeam4.time}                    
                                </span> 
                            </p>     

                            <div className="containerBtnSalvar">
                                <button className='button btnSalvarResultado'>salvar</button>
                            </div>
                        </div>

                        <div className="volta">
                            <p className="information-jogo">quinta <span className="stadium">{infoTeam4 && infoTeam4.estadio}</span> 20:00</p>
                            <p className='gameInformation'>
                                <span className='team'>
                                    {infoTeam4 && infoTeam4.time}                    
                                    {infoTeam4 && <img src={infoTeam4.url} alt="" />}
                                </span>
                                <span className="containerInput">
                                    {saveResults4 ? 
                                        <input 
                                            type="text" 
                                            className='input-time-resultado' 
                                            value={saveResults4[0]} 
                                            readOnly 
                                        />
                                        :
                                        <input type="text" className='input-time-resultado'/>
                                    }
                                </span>
                                <span>x</span>
                                <span className="containerInput">
                                    {saveResults4 ? 
                                        <input 
                                            type="text" 
                                            className='input-time-resultado' 
                                            value={saveResults4[1]} 
                                            readOnly 
                                        />
                                        :
                                        <input type="text" className='input-time-resultado'/>
                                    }
                                </span>
                                <span className='team'>
                                    {infoTeam3 && <img src={infoTeam3.url} alt="" />}
                                    {infoTeam3 && infoTeam3.time}                    
                                </span> 
                            </p>  

                            {infoPenalti2 != null ?
                                <p className="penaltis on">
                                    <span className="containerInput">
                                        <input type="text" className='input-resultado-penaltis' value={infoPenalti2[0]} readOnly/>
                                    </span>
                                    <span className="containerInput">
                                        <input type="text" className='input-resultado-penaltis' value={infoPenalti2[1]} readOnly/>
                                    </span>
                                </p>
                                :
                                <p className="penaltis">
                                    <span className="containerInput"><input type="text" className='input-resultado-penaltis'/></span>
                                    <span className="containerInput"><input type="text" className='input-resultado-penaltis'/></span>
                                </p>
                            }

                            <div className="containerBtnSalvar">
                                <button className='button btnSalvarResultado'>salvar</button>
                            </div>   
                        </div>
                    </div>

                    <div className="confrontoTres">
                        <div className="ida">
                            <p className="information-jogo">quarta <span className="stadium">{infoTeam5 && infoTeam5.estadio}</span> 21:30</p>
                            <p className='gameInformation'>
                                <span className='team'>
                                    {infoTeam5 && infoTeam5.time}                    
                                    {infoTeam5 && <img src={infoTeam5.url} alt="" />}
                                </span>
                                <span className="containerInput">
                                    {saveResults5 ? 
                                        <input 
                                            type="text" 
                                            className='input-time-resultado' 
                                            value={saveResults5[0]} 
                                            readOnly 
                                        />
                                        :
                                        <input type="text" className='input-time-resultado'/>
                                    }
                                </span>
                                <span>x</span>
                                <span className="containerInput">
                                    {saveResults5 ? 
                                        <input 
                                            type="text" 
                                            className='input-time-resultado' 
                                            value={saveResults5[1]} 
                                            readOnly 
                                        />
                                        :
                                        <input type="text" className='input-time-resultado'/>
                                    }
                                </span>
                                <span className='team'>
                                    {infoTeam6 && <img src={infoTeam6.url} alt="" />}
                                    {infoTeam6 && infoTeam6.time}                    
                                </span> 
                            </p>

                            <div className="containerBtnSalvar">
                                <button className='button btnSalvarResultado'>salvar</button>
                            </div>     
                        </div>

                        <div className="volta">
                            <p className="information-jogo">quinta <span className="stadium">{infoTeam6 && infoTeam6.estadio}</span> 20:30</p>
                            <p className='gameInformation'>
                                <span className='team'>
                                    {infoTeam6 && infoTeam6.time}                    
                                    {infoTeam6 && <img src={infoTeam6.url} alt="" />}
                                </span>
                                <span className="containerInput">
                                    {saveResults6 ? 
                                        <input 
                                            type="text" 
                                            className='input-time-resultado' 
                                            value={saveResults6[0]} 
                                            readOnly 
                                        />
                                        :
                                        <input type="text" className='input-time-resultado'/>
                                    }
                                </span>
                                <span>x</span>
                                <span className="containerInput">
                                    {saveResults6 ? 
                                        <input 
                                            type="text" 
                                            className='input-time-resultado' 
                                            value={saveResults6[1]} 
                                            readOnly 
                                        />
                                        :
                                        <input type="text" className='input-time-resultado'/>
                                    }
                                </span>
                                <span className='team'>
                                    {infoTeam5 && <img src={infoTeam5.url} alt="" />}
                                    {infoTeam5 && infoTeam5.time}                    
                                </span> 
                            </p>

                            {infoPenalti3 != null ?
                                <p className="penaltis on">
                                    <span className="containerInput">
                                        <input type="text" className='input-resultado-penaltis' value={infoPenalti3[0]} readOnly/>
                                    </span>
                                    <span className="containerInput">
                                        <input type="text" className='input-resultado-penaltis' value={infoPenalti3[1]} readOnly/>
                                    </span>
                                </p>
                                :
                                <p className="penaltis">
                                    <span className="containerInput"><input type="text" className='input-resultado-penaltis'/></span>
                                    <span className="containerInput"><input type="text" className='input-resultado-penaltis'/></span>
                                </p>
                            }

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