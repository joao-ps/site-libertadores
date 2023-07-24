import React, { useRef, useState, useContext } from "react";
 // Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

 // Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import '../styles/grupos.sass'

import { Navigation } from "swiper";

import { FaseFinal } from "../componentes/api/getTeams";

export function GrupoG({group}){
    let [
        newOitavas,
        previaOitavas,
        newQuartas,
        previaQuartas,
        newSemi,
        previaSemi,
        newFinal,
        previaFinal
    ] = useContext(FaseFinal)
    
    let Grupo = group
    const TimeG1 =
        {
            time: '',
            p: 0,
            j: 0,
            v: 0,
            e: 0,
            d: 0,
            gp: 0,
            gc: 0,
            sg: 0,
            placar: '',
            pais: '',
            estadio: '',
            url: ''
        }
        const TimeG2 =
        {
            time: '',
            p: 0,
            j: 0,
            v: 0,
            e: 0,
            d: 0,
            gp: 0,
            gc: 0,
            sg: 0,
            placar: '',
            pais: '',
            estadio: '',
            url: ''
        }
        const TimeG3 =
        {
            time: '',
            p: 0,
            j: 0,
            v: 0,
            e: 0,
            d: 0,
            gp: 0,
            gc: 0,
            sg: 0,
            placar: '',
            pais: '',
            estadio: '',
            url: ''
        }
        const TimeG4 =
        {
            time: '',
            p: 0,
            j: 0,
            v: 0,
            e: 0,
            d: 0,
            gp: 0,
            gc: 0,
            sg: 0,
            placar: '',
            pais: '',
            estadio: '',
            url: ''
        }
        let jogo1 = []
        let jogo2 = []
        let jogo3 = []
        let jogo4 = []
        let jogo5 = []
        let jogo6 = []
        let tableG

        let saveResultsG1
        let saveResultsG2
        let saveResultsG3
        let saveResultsG4
        let saveResultsG5
        let saveResultsG6

        saveResultsG1 = JSON.parse(sessionStorage.getItem('JgFSG-1'))
        saveResultsG2 = JSON.parse(sessionStorage.getItem('JgFSG-2'))
        saveResultsG3 = JSON.parse(sessionStorage.getItem('JgFSG-3'))
        saveResultsG4 = JSON.parse(sessionStorage.getItem('JgFSG-4'))
        saveResultsG5 = JSON.parse(sessionStorage.getItem('JgFSG-5'))
        saveResultsG6 = JSON.parse(sessionStorage.getItem('JgFSG-6'))

        let rodadasJogadasGG = 1

        let rodada1Time1 = JSON.parse(sessionStorage.getItem('TIME1-RODG1'))
        let rodada2Time1 = JSON.parse(sessionStorage.getItem('TIME1-RODG2'))
        let rodada3Time1 = JSON.parse(sessionStorage.getItem('TIME1-RODG3'))
        let rodada4Time1 = JSON.parse(sessionStorage.getItem('TIME1-RODG4'))
        let rodada5Time1 = JSON.parse(sessionStorage.getItem('TIME1-RODG5'))
        let rodada6Time1 = JSON.parse(sessionStorage.getItem('TIME1-RODG6'))

        let rodada1Time2 = JSON.parse(sessionStorage.getItem('TIME2-RODG1'))
        let rodada2Time2 = JSON.parse(sessionStorage.getItem('TIME2-RODG2'))
        let rodada3Time2 = JSON.parse(sessionStorage.getItem('TIME2-RODG3'))
        let rodada4Time2 = JSON.parse(sessionStorage.getItem('TIME2-RODG4'))
        let rodada5Time2 = JSON.parse(sessionStorage.getItem('TIME2-RODG5'))
        let rodada6Time2 = JSON.parse(sessionStorage.getItem('TIME2-RODG6'))

        let rodada1Time3 = JSON.parse(sessionStorage.getItem('TIME3-RODG1'))
        let rodada2Time3 = JSON.parse(sessionStorage.getItem('TIME3-RODG2'))
        let rodada3Time3 = JSON.parse(sessionStorage.getItem('TIME3-RODG3'))
        let rodada4Time3 = JSON.parse(sessionStorage.getItem('TIME3-RODG4'))
        let rodada5Time3 = JSON.parse(sessionStorage.getItem('TIME3-RODG5'))
        let rodada6Time3 = JSON.parse(sessionStorage.getItem('TIME3-RODG6'))

        let rodada1Time4 = JSON.parse(sessionStorage.getItem('TIME4-RODG1'))
        let rodada2Time4 = JSON.parse(sessionStorage.getItem('TIME4-RODG2'))
        let rodada3Time4 = JSON.parse(sessionStorage.getItem('TIME4-RODG3'))
        let rodada4Time4 = JSON.parse(sessionStorage.getItem('TIME4-RODG4'))
        let rodada5Time4 = JSON.parse(sessionStorage.getItem('TIME4-RODG5'))
        let rodada6Time4 = JSON.parse(sessionStorage.getItem('TIME4-RODG6'))

        if(Grupo != null){
            TimeG1.time = Grupo[0].time
            TimeG2.time = Grupo[1].time
            TimeG3.time = Grupo[2].time
            TimeG4.time = Grupo[3].time
            TimeG1.placar = Grupo[0].namePlacar
            TimeG2.placar = Grupo[1].namePlacar
            TimeG3.placar = Grupo[2].namePlacar
            TimeG4.placar = Grupo[3].namePlacar
            TimeG1.pais = Grupo[0].pais
            TimeG2.pais = Grupo[1].pais
            TimeG3.pais = Grupo[2].pais
            TimeG4.pais = Grupo[3].pais
            TimeG1.estadio = Grupo[0].estadio
            TimeG2.estadio = Grupo[1].estadio
            TimeG3.estadio = Grupo[2].estadio
            TimeG4.estadio = Grupo[3].estadio
            TimeG1.url = Grupo[0].url
            TimeG2.url = Grupo[1].url
            TimeG3.url = Grupo[2].url
            TimeG4.url = Grupo[3].url
            tableG = []
            tableG[0] = TimeG4
            tableG[1] = TimeG3
            tableG[2] = TimeG2
            tableG[3] = TimeG1
    
            //ROUND 1
            jogo1.push(Grupo[0])
            jogo1.push(Grupo[2])
            jogo1.push(Grupo[1])
            jogo1.push(Grupo[3])
            //ROUND 2
            jogo2.push(Grupo[1])
            jogo2.push(Grupo[0])
            jogo2.push(Grupo[2])
            jogo2.push(Grupo[3])
            //ROUND 3
            jogo3.push(Grupo[2])
            jogo3.push(Grupo[1])
            jogo3.push(Grupo[3])
            jogo3.push(Grupo[0])
            //ROUND 4
            jogo4.push(Grupo[0])
            jogo4.push(Grupo[3])
            jogo4.push(Grupo[1])
            jogo4.push(Grupo[2])
            //ROUND 5
            jogo5.push(Grupo[0])
            jogo5.push(Grupo[1])
            jogo5.push(Grupo[3])
            jogo5.push(Grupo[2])
            //ROUND 6
            jogo6.push(Grupo[2])
            jogo6.push(Grupo[0])
            jogo6.push(Grupo[3])
            jogo6.push(Grupo[1])
    
            sessionStorage.setItem('RoundG1', JSON.stringify(jogo1))
            sessionStorage.setItem('RoundG2', JSON.stringify(jogo2))
            sessionStorage.setItem('RoundG3', JSON.stringify(jogo3))
            sessionStorage.setItem('RoundG4', JSON.stringify(jogo4))
            sessionStorage.setItem('RoundG5', JSON.stringify(jogo5))
            sessionStorage.setItem('RoundG6', JSON.stringify(jogo6))
        }

        limparAtr(TimeG1)
        limparAtr(TimeG2)
        limparAtr(TimeG3)
        limparAtr(TimeG4)

        if(rodada1Time1 != null){
      
            for (let index = 2; index < 7; index++) {
                switch (index) {
                    case 2:
                        if(rodada2Time1 != null){
                            rodadasJogadasGG = 2
                        }
                        break;
    
                    case 3:
                        if(rodada3Time1 != null){
                            rodadasJogadasGG = 3
                        }
                        break;
    
                    case 4:
                        if(rodada4Time1 != null){
                            rodadasJogadasGG = 4
                        }
                        break;
    
                    case 5:
                        if(rodada5Time1 != null){
                            rodadasJogadasGG = 5
                        }
                        break;
    
                    case 6:
                        if(rodada6Time1 != null){
                            rodadasJogadasGG = 6
                        }
                        break;
                }
            }
    
            setTimeout(() => {
                insertPontos(rodada1Time1,rodada2Time1,rodada3Time1,rodada4Time1,rodada5Time1,rodada6Time1,TimeG1, false)
                insertPontos(rodada1Time2,rodada2Time2,rodada3Time2,rodada4Time2,rodada5Time2,rodada6Time2,TimeG2, false)
                insertPontos(rodada1Time3,rodada2Time3,rodada3Time3,rodada4Time3,rodada5Time3,rodada6Time3,TimeG3, false)
                insertPontos(rodada1Time4,rodada2Time4,rodada3Time4,rodada4Time4,rodada5Time4,rodada6Time4,TimeG4, true)
            }, 100)
        }

        function limparAtr(Team){
            let informacoesTime = Team
    
            informacoesTime.j = 0
            informacoesTime.p = 0
            informacoesTime.v = 0
            informacoesTime.e = 0
            informacoesTime.d = 0
            informacoesTime.gp = 0
            informacoesTime.gc = 0
            informacoesTime.sg = 0 
        }

        function insertPontos(rod1,rod2,rod3,rod4,rod5,rod6, timeOficial, condicao){
            let rodada1 = rod1
            let rodada2 = rod2
            let rodada3 = rod3
            let rodada4 = rod4
            let rodada5 = rod5
            let rodada6 = rod6
            let TeamSave = timeOficial
            let jogos = 0
            let pontos = 0
            let vitorias = 0
            let empates = 0
            let derrotas = 0
            let GP = 0
            let GC = 0
            let SG = 0
    
            switch (rodadasJogadasGG) {
                case 1:
                    jogos = 1
                    vitorias = rodada1.v
                    empates = rodada1.e
                    derrotas = rodada1.d
                    GP = rodada1.gp 
                    GC = rodada1.gc 
                    SG = GP - GC
                    break;
    
                case 2:
                    jogos = 2
                    vitorias = rodada1.v + rodada2.v
                    empates = rodada1.e + rodada2.e
                    derrotas = rodada1.d + rodada2.d
                    GP = rodada1.gp + rodada2.gp
                    GC = rodada1.gc + rodada2.gc
                    SG = GP - GC
                    break;
    
                case 3:
                    jogos = 3
                    vitorias = rodada1.v + rodada2.v + rodada3.v
                    empates = rodada1.e + rodada2.e + rodada3.e
                    derrotas = rodada1.d + rodada2.d + rodada3.d
                    GP = rodada1.gp + rodada2.gp + rodada3.gp
                    GC = rodada1.gc + rodada2.gc + rodada3.gc
                    SG = GP - GC
                    break;
    
                case 4:
                    jogos = 4
                    vitorias = rodada1.v + rodada2.v + rodada3.v + rodada4.v
                    empates = rodada1.e + rodada2.e + rodada3.e + rodada4.e
                    derrotas = rodada1.d + rodada2.d + rodada3.d + rodada4.d
                    GP = rodada1.gp + rodada2.gp + rodada3.gp + rodada4.gp
                    GC = rodada1.gc + rodada2.gc + rodada3.gc + rodada4.gc
                    SG = GP - GC
                    break;
    
                case 5:
                    jogos = 5
                    vitorias = rodada1.v + rodada2.v + rodada3.v + rodada4.v + rodada5.v
                    empates = rodada1.e + rodada2.e + rodada3.e + rodada4.e + rodada5.e
                    derrotas = rodada1.d + rodada2.d + rodada3.d + rodada4.d + rodada5.d
                    GP = rodada1.gp + rodada2.gp + rodada3.gp + rodada4.gp + rodada5.gp
                    GC = rodada1.gc + rodada2.gc + rodada3.gc + rodada4.gc + rodada5.gc
                    SG = GP - GC
                    break;
    
                case 6:
                    jogos = 6
                    vitorias = rodada1.v + rodada2.v + rodada3.v + rodada4.v + rodada5.v + rodada6.v
                    empates = rodada1.e + rodada2.e + rodada3.e + rodada4.e + rodada5.e + rodada6.e
                    derrotas = rodada1.d + rodada2.d + rodada3.d + rodada4.d + rodada5.d + rodada6.d
                    GP = rodada1.gp + rodada2.gp + rodada3.gp + rodada4.gp + rodada5.gp + rodada6.gp
                    GC = rodada1.gc + rodada2.gc + rodada3.gc + rodada4.gc + rodada5.gc + rodada6.gc
                    SG = GP - GC
                    break;
            }
    
            pontos = vitorias * 3 + empates
            TeamSave.j = jogos
            TeamSave.p = pontos
            TeamSave.v = vitorias
            TeamSave.e = empates
            TeamSave.d = derrotas
            TeamSave.gp = GP
            TeamSave.gc = GC
            TeamSave.sg = SG
    
            if(condicao != false){
                let tdTime = document.querySelectorAll('.cedula-time')
                let tdPontos = document.querySelectorAll('.cedula-pontos')
                let tdJogos = document.querySelectorAll('.cedula-jogos')
                let tdVitorias = document.querySelectorAll('.cedula-vitorias')
                let tdEmpates = document.querySelectorAll('.cedula-empates')
                let tdDerrotas = document.querySelectorAll('.cedula-derrotas')
                let tdGolsPro = document.querySelectorAll('.cedula-gols-pro')
                let tdGolsContra = document.querySelectorAll('.cedula-gols-contra')
                let tdSaldoGols  = document.querySelectorAll('.cedula-saldo-gols')   
                let tableG = []
                tableG[0] = TimeG1
                tableG[1] = TimeG2
                tableG[2] = TimeG3
                tableG[3] = TimeG4
    
                tableG.sort((a,b) => {
                    if(a.p > b.p){
                        return 1
                    }else if(a.p == b.p){
                        if(a.v > b.v){
                            return 1
                        }
                        else if(a.v == b.v){
                            if(a.sg > b.sg){
                                return 1
                            }
                            else if(a.sg == b.sg){
                                if(a.gp > b.gp){
                                    return 1
                                }else if(a.gp == b.gp){
                                    if(a.d < b.d){
                                        return 1
                                    }else if(a.d == b.d){
                                        if(a.gc < b.gc){
                                            return 1
                                        }
                                    }
                                }
                            }
                        }
                    }else{
                        return -1
                    }
                })
        
                let g = 3
                for(let i = 24;i<28;i++){
                    tdTime[i].innerText = tableG[g].time
                    tdPontos[i].innerText = tableG[g].p
                    tdJogos[i].innerText = tableG[g].j
                    tdVitorias[i].innerText = tableG[g].v
                    tdEmpates[i].innerText = tableG[g].e
                    tdDerrotas[i].innerText = tableG[g].d
                    tdGolsPro[i].innerText = tableG[g].gp
                    tdGolsContra[i].innerText = tableG[g].gc
                    tdSaldoGols[i].innerText = tableG[g].sg
                    g--
                }
            }
        }

        function classificacao(rodada){
            const tdTime = document.querySelectorAll('.cedula-time')
            const tdPontos = document.querySelectorAll('.cedula-pontos')
            const tdJogos = document.querySelectorAll('.cedula-jogos')
            const tdVitorias = document.querySelectorAll('.cedula-vitorias')
            const tdEmpates = document.querySelectorAll('.cedula-empates')
            const tdDerrotas = document.querySelectorAll('.cedula-derrotas')
            const tdGolsPro = document.querySelectorAll('.cedula-gols-pro')
            const tdGolsContra = document.querySelectorAll('.cedula-gols-contra')
            const tdSaldoGols  = document.querySelectorAll('.cedula-saldo-gols')
            rodadasJogadasGG = rodada
            //tableG = []
            //tableG[0] = TimeG1
            //tableG[1] = TimeG2
            //tableG[2] = TimeG3
            //tableG[3] = TimeG4

            insertPontos(rodada1Time1,rodada2Time1,rodada3Time1,rodada4Time1,rodada5Time1,rodada6Time1,TimeG1, false)
            insertPontos(rodada1Time2,rodada2Time2,rodada3Time2,rodada4Time2,rodada5Time2,rodada6Time2,TimeG2, false)
            insertPontos(rodada1Time3,rodada2Time3,rodada3Time3,rodada4Time3,rodada5Time3,rodada6Time3,TimeG3, false)
            insertPontos(rodada1Time4,rodada2Time4,rodada3Time4,rodada4Time4,rodada5Time4,rodada6Time4,TimeG4, false)

            tableG.sort((a,b) => {
                if(a.p > b.p){
                    return 1
                }else if(a.p == b.p){
                    if(a.v > b.v){
                        return 1
                    }
                    else if(a.v == b.v){
                        if(a.sg > b.sg){
                            return 1
                        }
                        else if(a.sg == b.sg){
                            if(a.gp > b.gp){
                                return 1
                            }else if(a.gp == b.gp){
                                if(a.d < b.d){
                                    return 1
                                }else if(a.d == b.d){
                                    if(a.gc < b.gc){
                                        return 1
                                    }
                                }
                            }
                        }
                    }
                }else{
                    return -1
                }
            })

            let g = 3
            for(let i = 24;i<28;i++){
                tdTime[i].innerText = tableG[g].time
                tdPontos[i].innerText = tableG[g].p
                tdJogos[i].innerText = tableG[g].j
                tdVitorias[i].innerText = tableG[g].v
                tdEmpates[i].innerText = tableG[g].e
                tdDerrotas[i].innerText = tableG[g].d
                tdGolsPro[i].innerText = tableG[g].gp
                tdGolsContra[i].innerText = tableG[g].gc
                tdSaldoGols[i].innerText = tableG[g].sg
                g--
            }
            if(rodadasJogadasGG == 6){
                tableG[3].group = 'G'
                tableG[3].position = 1
                tableG[2].group = 'G'
                tableG[2].position = 2
    
                newOitavas(tableG[3], 12)
                newOitavas(tableG[2], 13)
            }
        }

        function insertResultsGame(resultadoPro, resultadoContra, Team){
            let resultPro = resultadoPro
            let resultContra = resultadoContra
            let resultGolProContra
            let informacoesTime = Team

            informacoesTime.j += 1

            if(resultPro > resultContra){
                informacoesTime.p += 3
                informacoesTime.v += 1
            }else if(resultPro == resultContra){
                informacoesTime.p += 1
                informacoesTime.e += 1
            }else{
                informacoesTime.p += 0
                informacoesTime.d += 1
            }

            informacoesTime.gp += Number(resultPro)
            informacoesTime.gc += Number(resultContra)
            resultGolProContra = Number(resultPro) - Number(resultContra)
            informacoesTime.sg += resultGolProContra
        }

        function addFunctionButton(){
            let buttonSaveResult = document.querySelectorAll('.btn-result-jogos')
            let resultsGames = document.querySelectorAll('.input-time-resultado')

            buttonSaveResult[36].addEventListener('click', function setResult(){
                let jogo = []
                let listResults = []
                listResults.push(resultsGames[144].value)
                listResults.push(resultsGames[145].value)
                listResults.push(resultsGames[146].value)
                listResults.push(resultsGames[147].value)
    
                if(saveResultsG1 != null){
                    console.log('Resultadores já registrados')
                    return
                }
                for(let i = 0; i<listResults.length; i++){
                    if(!listResults[i])return
                }
                for(let i = 144; i<148; i++){
                    resultsGames[i].setAttribute('readonly', 'readonly');
                }
                
                jogo[0] = listResults[0]
                jogo[1] = listResults[1]
                jogo[2] = listResults[2]
                jogo[3] = listResults[3]

                sessionStorage.setItem('JgFSG-1', JSON.stringify(jogo))
                saveResultsG1 = JSON.parse(sessionStorage.getItem('JgFSG-1'))
                
                limparAtr(TimeG1)
                limparAtr(TimeG2)
                limparAtr(TimeG3)
                limparAtr(TimeG4)
                insertResultsGame(listResults[0], listResults[1], TimeG1)
                insertResultsGame(listResults[1], listResults[0], TimeG3)
                insertResultsGame(listResults[2], listResults[3], TimeG2)
                insertResultsGame(listResults[3], listResults[2], TimeG4)
                sessionStorage.setItem('TIME1-RODG1', JSON.stringify(TimeG1))
                rodada1Time1 = JSON.parse(sessionStorage.getItem('TIME1-RODG1'))
                sessionStorage.setItem('TIME2-RODG1', JSON.stringify(TimeG2))
                rodada1Time2 = JSON.parse(sessionStorage.getItem('TIME2-RODG1'))
                sessionStorage.setItem('TIME3-RODG1', JSON.stringify(TimeG3))
                rodada1Time3 = JSON.parse(sessionStorage.getItem('TIME3-RODG1'))
                sessionStorage.setItem('TIME4-RODG1', JSON.stringify(TimeG4))
                rodada1Time4 = JSON.parse(sessionStorage.getItem('TIME4-RODG1'))
                classificacao(1)
                this.removeEventListener('click', setResult)
                this.classList.add('btn-disabled')
            })
            buttonSaveResult[37].addEventListener('click', function setResult(){
                let jogo = []
                let listResults = []
                listResults.push(resultsGames[148].value)
                listResults.push(resultsGames[149].value)
                listResults.push(resultsGames[150].value)
                listResults.push(resultsGames[151].value)
    
                if(saveResultsG1 == undefined){
                    console.log('Resultado do primeiro jogo não registrado')
                    return
                }
                if(saveResultsG2 != null){
                    console.log('Resultadores já registrados')
                    return
                }

                for(let i = 0; i<listResults.length; i++){
                    if(!listResults[i])return
                }
                for(let i = 148; i<152; i++){
                    resultsGames[i].setAttribute('readonly', 'readonly');
                }
    
                jogo[0] = Number(listResults[0])
                jogo[1] = Number(listResults[1])
                jogo[2] = Number(listResults[2])
                jogo[3] = Number(listResults[3])

                sessionStorage.setItem('JgFSG-2', JSON.stringify(jogo))
                saveResultsG2 = JSON.parse(sessionStorage.getItem('JgFSG-2'))

                limparAtr(TimeG1)
                limparAtr(TimeG2)
                limparAtr(TimeG3)
                limparAtr(TimeG4)
                insertResultsGame(listResults[0], listResults[1], TimeG2)
                insertResultsGame(listResults[1], listResults[0], TimeG1)
                insertResultsGame(listResults[2], listResults[3], TimeG3)
                insertResultsGame(listResults[3], listResults[2], TimeG4)
                sessionStorage.setItem('TIME1-RODG2', JSON.stringify(TimeG1))
                rodada2Time1 = JSON.parse(sessionStorage.getItem('TIME1-RODG2'))
                sessionStorage.setItem('TIME2-RODG2', JSON.stringify(TimeG2))
                rodada2Time2 = JSON.parse(sessionStorage.getItem('TIME2-RODG2'))
                sessionStorage.setItem('TIME3-RODG2', JSON.stringify(TimeG3))
                rodada2Time3 = JSON.parse(sessionStorage.getItem('TIME3-RODG2'))
                sessionStorage.setItem('TIME4-RODG2', JSON.stringify(TimeG4))
                rodada2Time4 = JSON.parse(sessionStorage.getItem('TIME4-RODG2'))
                classificacao(2)
                this.removeEventListener('click', setResult)
                this.classList.add('btn-disabled')
            })
            buttonSaveResult[38].addEventListener('click', function setResult(){
                let jogo = []
                let listResults = []
                listResults.push(resultsGames[152].value)
                listResults.push(resultsGames[153].value)
                listResults.push(resultsGames[154].value)
                listResults.push(resultsGames[155].value)
    
                if(saveResultsG2 == undefined){
                    console.log('Resultado do primeiro jogo não registrado')
                    return
                }
                if(saveResultsG3 != null){
                    console.log('Resultadores já registrados')
                    return
                }

                for(let i = 0; i<listResults.length; i++){
                    if(!listResults[i])return
                }
                for(let i = 152; i<156; i++){
                    resultsGames[i].setAttribute('readonly', 'readonly');
                }
    
                jogo[0] = Number(listResults[0])
                jogo[1] = Number(listResults[1])
                jogo[2] = Number(listResults[2])
                jogo[3] = Number(listResults[3])

                sessionStorage.setItem('JgFSG-3', JSON.stringify(jogo))
                saveResultsG3 = JSON.parse(sessionStorage.getItem('JgFSG-3'))

                limparAtr(TimeG1)
                limparAtr(TimeG2)
                limparAtr(TimeG3)
                limparAtr(TimeG4)
                insertResultsGame(listResults[0], listResults[1], TimeG3)
                insertResultsGame(listResults[1], listResults[0], TimeG2)
                insertResultsGame(listResults[2], listResults[3], TimeG4)
                insertResultsGame(listResults[3], listResults[2], TimeG1)
                sessionStorage.setItem('TIME1-RODG3', JSON.stringify(TimeG1))
                rodada3Time1 = JSON.parse(sessionStorage.getItem('TIME1-RODG3'))
                sessionStorage.setItem('TIME2-RODG3', JSON.stringify(TimeG2))
                rodada3Time2 = JSON.parse(sessionStorage.getItem('TIME2-RODG3'))
                sessionStorage.setItem('TIME3-RODG3', JSON.stringify(TimeG3))
                rodada3Time3 = JSON.parse(sessionStorage.getItem('TIME3-RODG3'))
                sessionStorage.setItem('TIME4-RODG3', JSON.stringify(TimeG4))
                rodada3Time4 = JSON.parse(sessionStorage.getItem('TIME4-RODG3'))
                classificacao(3)
                this.removeEventListener('click', setResult)
                this.classList.add('btn-disabled')
            })
            buttonSaveResult[39].addEventListener('click', function setResult(){
                let jogo = []
                let listResults = []
                listResults.push(resultsGames[156].value)
                listResults.push(resultsGames[157].value)
                listResults.push(resultsGames[158].value)
                listResults.push(resultsGames[159].value)

                if(saveResultsG3 == undefined){
                    console.log('Resultado do primeiro jogo não registrado')
                    return
                }
                if(saveResultsG4 != null){
                    console.log('Resultadores já registrados')
                    return
                }
    
                for(let i = 0; i<listResults.length; i++){
                    if(!listResults[i])return
                }
                for(let i = 156; i<160; i++){
                    resultsGames[i].setAttribute('readonly', 'readonly');
                }
    
                jogo[0] = Number(listResults[0])
                jogo[1] = Number(listResults[1])
                jogo[2] = Number(listResults[2])
                jogo[3] = Number(listResults[3])

                sessionStorage.setItem('JgFSG-4', JSON.stringify(jogo))
                saveResultsG4 = JSON.parse(sessionStorage.getItem('JgFSG-4'))

                limparAtr(TimeG1)
                limparAtr(TimeG2)
                limparAtr(TimeG3)
                limparAtr(TimeG4)
                insertResultsGame(listResults[0], listResults[1], TimeG1)
                insertResultsGame(listResults[1], listResults[0], TimeG4)
                insertResultsGame(listResults[2], listResults[3], TimeG2)
                insertResultsGame(listResults[3], listResults[2], TimeG3)
                sessionStorage.setItem('TIME1-RODG4', JSON.stringify(TimeG1))
                rodada4Time1 = JSON.parse(sessionStorage.getItem('TIME1-RODG4'))
                sessionStorage.setItem('TIME2-RODG4', JSON.stringify(TimeG2))
                rodada4Time2 = JSON.parse(sessionStorage.getItem('TIME2-RODG4'))
                sessionStorage.setItem('TIME3-RODG4', JSON.stringify(TimeG3))
                rodada4Time3 = JSON.parse(sessionStorage.getItem('TIME3-RODG4'))
                sessionStorage.setItem('TIME4-RODG4', JSON.stringify(TimeG4))
                rodada4Time4 = JSON.parse(sessionStorage.getItem('TIME4-RODG4'))
                classificacao(4)
                this.removeEventListener('click', setResult)
                this.classList.add('btn-disabled')
            })
            buttonSaveResult[40].addEventListener('click', function setResult(){
                let jogo = []
                let listResults = []
                listResults.push(resultsGames[160].value)
                listResults.push(resultsGames[161].value)
                listResults.push(resultsGames[162].value)
                listResults.push(resultsGames[163].value)
    
                if(saveResultsG4 == undefined){
                    console.log('Resultado do primeiro jogo não registrado')
                    return
                }
                if(saveResultsG5 != null){
                    console.log('Resultadores já registrados')
                    return
                }

                for(let i = 0; i<listResults.length; i++){
                    if(!listResults[i])return
                }
                for(let i = 160; i<164; i++){
                    resultsGames[i].setAttribute('readonly', 'readonly');
                }
    
                jogo[0] = Number(listResults[0])
                jogo[1] = Number(listResults[1])
                jogo[2] = Number(listResults[2])
                jogo[3] = Number(listResults[3])

                sessionStorage.setItem('JgFSG-5', JSON.stringify(jogo))
                saveResultsG5 = JSON.parse(sessionStorage.getItem('JgFSG-5'))
                
                limparAtr(TimeG1)
                limparAtr(TimeG2)
                limparAtr(TimeG3)
                limparAtr(TimeG4)
                insertResultsGame(listResults[0], listResults[1], TimeG1)
                insertResultsGame(listResults[1], listResults[0], TimeG2)
                insertResultsGame(listResults[2], listResults[3], TimeG4)
                insertResultsGame(listResults[3], listResults[2], TimeG3)
                sessionStorage.setItem('TIME1-RODG5', JSON.stringify(TimeG1))
                rodada5Time1 = JSON.parse(sessionStorage.getItem('TIME1-RODG5'))
                sessionStorage.setItem('TIME2-RODG5', JSON.stringify(TimeG2))
                rodada5Time2 = JSON.parse(sessionStorage.getItem('TIME2-RODG5'))
                sessionStorage.setItem('TIME3-RODG5', JSON.stringify(TimeG3))
                rodada5Time3 = JSON.parse(sessionStorage.getItem('TIME3-RODG5'))
                sessionStorage.setItem('TIME4-RODG5', JSON.stringify(TimeG4))
                rodada5Time4 = JSON.parse(sessionStorage.getItem('TIME4-RODG5'))
                classificacao(5)
                this.removeEventListener('click', setResult)
                this.classList.add('btn-disabled')
            })
            buttonSaveResult[41].addEventListener('click', function setResult(){
                let jogo = []
                let listResults = []
                listResults.push(resultsGames[164].value)
                listResults.push(resultsGames[165].value)
                listResults.push(resultsGames[166].value)
                listResults.push(resultsGames[167].value)

                if(saveResultsG5 == undefined){
                    console.log('Resultado do primeiro jogo não registrado')
                    return
                }
                if(saveResultsG6 != null){
                    console.log('Resultadores já registrados')
                    return
                }
    
                for(let i = 0; i<listResults.length; i++){
                    if(!listResults[i])return
                }
                for(let i = 164; i<168; i++){
                    resultsGames[i].setAttribute('readonly', 'readonly');
                }
    
                jogo[0] = Number(listResults[0])
                jogo[1] = Number(listResults[1])
                jogo[2] = Number(listResults[2])
                jogo[3] = Number(listResults[3])

                sessionStorage.setItem('JgFSG-6', JSON.stringify(jogo))
                saveResultsG6 = JSON.parse(sessionStorage.getItem('JgFSG-6'))

                limparAtr(TimeG1)
                limparAtr(TimeG2)
                limparAtr(TimeG3)
                limparAtr(TimeG4)
                insertResultsGame(listResults[0], listResults[1], TimeG3)
                insertResultsGame(listResults[1], listResults[0], TimeG1)
                insertResultsGame(listResults[2], listResults[3], TimeG4)
                insertResultsGame(listResults[3], listResults[2], TimeG2)
                sessionStorage.setItem('TIME1-RODG6', JSON.stringify(TimeG1))
                rodada6Time1 = JSON.parse(sessionStorage.getItem('TIME1-RODG6'))
                sessionStorage.setItem('TIME2-RODG6', JSON.stringify(TimeG2))
                rodada6Time2 = JSON.parse(sessionStorage.getItem('TIME2-RODG6'))
                sessionStorage.setItem('TIME3-RODG6', JSON.stringify(TimeG3))
                rodada6Time3 = JSON.parse(sessionStorage.getItem('TIME3-RODG6'))
                sessionStorage.setItem('TIME4-RODG6', JSON.stringify(TimeG4))
                rodada6Time4 = JSON.parse(sessionStorage.getItem('TIME4-RODG6'))
                classificacao(6)
                this.removeEventListener('click', setResult)
                this.classList.add('btn-disabled')
            })
        }

        jogo1 = JSON.parse(sessionStorage.getItem('RoundG1'))
        jogo2 = JSON.parse(sessionStorage.getItem('RoundG2'))
        jogo3 = JSON.parse(sessionStorage.getItem('RoundG3'))
        jogo4 = JSON.parse(sessionStorage.getItem('RoundG4'))
        jogo5 = JSON.parse(sessionStorage.getItem('RoundG5'))
        jogo6 = JSON.parse(sessionStorage.getItem('RoundG6'))

        setTimeout(addFunctionButton, 200)
        
    return(
        <div className="container-fases">
            <h2>grupo g</h2>
            <div className="container-table-jogos">
                <table id="grupoG" className="libertadores">
                    <thead>
                        <tr>
                            <th rowSpan={1}></th>
                            <th>classificação</th>
                            <th>p</th>
                            <th>j</th>
                            <th>v</th>
                            <th>e</th>
                            <th>d</th>
                            <th>gp</th>
                            <th>gc</th>
                            <th>sg</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan={1} className="classificado">1</td>
                            <td className="cedula-time1">
                                <abbr className="cedula-time">
                                    {tableG != null
                                        ?
                                            tableG[3].time
                                        :
                                            ''
                                    }
                                </abbr>
                            </td>
                            <td className="cedula-pontos">
                                <b>
                                    {tableG != null
                                        ?
                                            tableG[3].p
                                        :
                                            0
                                    }
                                </b>
                            </td>
                            <td className="cedula-jogos">
                                {tableG != null
                                    ?
                                        tableG[3].j
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-vitorias">
                                {tableG != null
                                    ?
                                        tableG[3].v
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-empates">
                                {tableG != null
                                    ?
                                        tableG[3].e
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-derrotas">
                                {tableG != null
                                    ?
                                        tableG[3].d
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-gols-pro">
                                {tableG != null
                                    ?
                                        tableG[3].gp
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-gols-contra">
                                {tableG != null
                                    ?
                                        tableG[3].gc
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-saldo-gols">
                                {tableG != null
                                    ?
                                        tableG[3].sg
                                    :
                                        0
                                }
                            </td>
                        </tr>
                        <tr>
                            <td rowSpan={1} className="classificado">2</td>
                            <td className="cedula-time2">
                                <abbr className="cedula-time">
                                    {tableG != null
                                        ?
                                            tableG[2].time
                                        :
                                            ''
                                    }                       
                                </abbr>
                            </td>
                            <td className="cedula-pontos">
                                <b>
                                    {tableG != null
                                        ?
                                            tableG[2].p
                                        :
                                            0
                                    }
                                </b>
                            </td>
                            <td className="cedula-jogos">
                                {tableG != null
                                    ?
                                        tableG[2].j
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-vitorias">
                                {tableG != null
                                    ?
                                        tableG[2].v
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-empates">
                                {tableG != null
                                    ?
                                        tableG[2].e
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-derrotas">
                                {tableG != null
                                    ?
                                        tableG[2].d
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-gols-pro">
                                {tableG != null
                                    ?
                                        tableG[2].gp
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-gols-contra">
                                {tableG != null
                                    ?
                                        tableG[2].gc
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-saldo-gols">
                                {tableG != null
                                    ?
                                        tableG[2].sg
                                    :
                                        0
                                }
                            </td>
                        </tr>
                        <tr>
                            <td rowSpan={1} className="sul-americana">3</td>
                            <td className="cedula-time3">
                                <abbr className="cedula-time">
                                    {tableG != null
                                        ?
                                            tableG[1].time
                                        :
                                            ''
                                    }                     
                                </abbr>
                            </td>
                            <td className="cedula-pontos">
                                <b>
                                    {tableG != null
                                        ?
                                            tableG[1].p
                                        :
                                            0
                                    }
                                </b>
                            </td>
                            <td className="cedula-jogos">
                                {tableG != null
                                    ?
                                        tableG[1].j
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-vitorias">
                                {tableG != null
                                    ?
                                        tableG[1].v
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-empates">
                                {tableG != null
                                    ?
                                        tableG[1].e
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-derrotas">
                                {tableG != null
                                    ?
                                        tableG[1].d
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-gols-pro">
                                {tableG != null
                                    ?
                                        tableG[1].gp
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-gols-contra">
                                {tableG != null
                                    ?
                                        tableG[1].gc
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-saldo-gols">
                                {tableG != null
                                    ?
                                        tableG[1].sg
                                    :
                                        0
                                }
                            </td>
                        </tr>
                        <tr>
                            <td rowSpan={1} className="eliminado">4</td>
                            <td className="cedula-time4">
                                <abbr className="cedula-time">
                                    {tableG != null
                                        ?
                                            tableG[0].time
                                        :
                                            ''
                                    }                      
                                </abbr>
                            </td>
                            <td className="cedula-pontos">
                                <b>
                                    {tableG != null
                                        ?
                                            tableG[0].p
                                        :
                                            0
                                    }
                                </b>
                            </td>
                            <td className="cedula-jogos">
                                {tableG != null
                                    ?
                                        tableG[0].j
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-vitorias">
                                {tableG != null
                                    ?
                                        tableG[0].v
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-empates">
                                {tableG != null
                                    ?
                                        tableG[0].e
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-derrotas">
                                {tableG != null
                                    ?
                                        tableG[0].d
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-gols-pro">
                                {tableG != null
                                    ?
                                        tableG[0].gp
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-gols-contra">
                                {tableG != null
                                    ?
                                        tableG[0].gc
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-saldo-gols">
                                {tableG != null
                                    ?
                                        tableG[0].sg
                                    :
                                        0
                                }
                            </td>
                        </tr>
                    </tbody>    
                </table>

                <div className="container-jogos-fase-grupo">
                    <div className="jogos-fase-grupo">
                        <div className="jogos">
                            <div className="container-rodadas">
                                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                                    <SwiperSlide>
                                        <div className="rodada-1">
                                            <div className="rodadas">
                                                <div className="container-translate-rodada">
                                                    <div className="rodada-1"><h3>1ªrodada</h3></div>
                                                </div>
                                            </div>

                                            <div className="container-jogo-1">
                                                <p className="information-jogo">quarta <span className="stadium">
                                                    {jogo1 && jogo1[0].estadio}
                                                </span> 21:30</p>
                                                <p className="jogo-1">
                                                    <span className="jogo">
                                                        <span className="confronto">
                                                            {jogo1 && jogo1[0].namePlacar}
                                                            {jogo1 && <img src={jogo1[0].url} alt="" />}                    
                                                        </span>
                                                    </span>
                                                    {
                                                        saveResultsG1 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsG1[0]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResultsG1 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsG1[1]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span className="jogo">
                                                        <span className="confronto">
                                                            {jogo1 && <img src={jogo1[1].url} alt="" />}    
                                                            {jogo1 && jogo1[1].namePlacar}                
                                                        </span>
                                                    </span>
                                                </p>
                                            </div>

                                            <div className="container-jogo-2">
                                                <p className="information-jogo">quinta <span className="stadium">
                                                    {jogo1 && jogo1[2].estadio}
                                                </span> 18:00</p>
                                                <p className="jogo-2">
                                                    <span className="jogo">
                                                        <span className="confronto">
                                                            {jogo1 && jogo1[2].namePlacar}
                                                            {jogo1 && <img src={jogo1[2].url} alt="" />}                    
                                                        </span>
                                                    </span>
                                                    {
                                                        saveResultsG1 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsG1[2]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResultsG1 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsG1[3]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span className="jogo">
                                                        <span className="confronto">
                                                            {jogo1 && <img src={jogo1[3].url} alt="" />}    
                                                            {jogo1 && jogo1[3].namePlacar}                
                                                        </span>
                                                    </span>
                                                </p>
                                            </div>
                                            <button className="btn-result-jogos">salvar</button>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="rodada-2">
                                            <div className="rodadas">
                                                <div className="container-translate-rodada">
                                                    <div className="rodada-1"><h3>2ªrodada</h3></div>
                                                </div>
                                            </div>

                                            <div className="container-jogo-1">
                                                <p className="information-jogo">quarta <span className="stadium">
                                                    {jogo2 && jogo2[0].estadio}
                                                </span> 21:30</p>
                                                <p className="jogo-1">
                                                    <span className="jogo">
                                                        <span className="confronto">
                                                            {jogo2 && jogo2[0].namePlacar}
                                                            {jogo2 && <img src={jogo2[0].url} alt="" />}                    
                                                        </span>
                                                    </span>
                                                    {
                                                        saveResultsG2 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsG2[0]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResultsG2 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsG2[1]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span className="jogo">
                                                        <span className="confronto">
                                                            {jogo2 && <img src={jogo2[1].url} alt="" />}                    
                                                            {jogo2 && jogo2[1].namePlacar}
                                                        </span>
                                                    </span>
                                                </p>
                                            </div>

                                            <div className="container-jogo-2">
                                                <p className="information-jogo">quinta <span className="stadium">
                                                    {jogo2 && jogo2[2].estadio}
                                                </span> 18:00</p>
                                                <p className="jogo-2">
                                                    <span className="jogo">
                                                        <span className="confronto">
                                                            {jogo2 && jogo2[2].namePlacar}
                                                            {jogo2 && <img src={jogo2[2].url} alt="" />}                    
                                                        </span>
                                                    </span>
                                                    {
                                                        saveResultsG2 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsG2[2]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResultsG2 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsG2[3]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span className="jogo">
                                                        <span className="confronto">
                                                            {jogo2 && <img src={jogo2[3].url} alt="" />}                    
                                                            {jogo2 && jogo2[3].namePlacar}
                                                        </span>
                                                    </span>
                                                </p>
                                            </div>
                                            <button className="btn-result-jogos">salvar</button>                                                
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="rodada-3">
                                            <div className="rodadas">
                                                <div className="container-translate-rodada">
                                                    <div className="rodada-1"><h3>3ªrodada</h3></div>
                                                </div>
                                            </div>

                                            <div className="container-jogo-1">
                                                <p className="information-jogo">quarta <span className="stadium">
                                                    {jogo3 && jogo3[0].estadio}
                                                </span> 21:30</p>
                                                <p className="jogo-1">
                                                    <span className="jogo">
                                                        <span className="confronto">
                                                            {jogo3 && jogo3[0].namePlacar}
                                                            {jogo3 && <img src={jogo3[0].url} alt="" />}                    
                                                        </span>
                                                    </span>
                                                    {
                                                        saveResultsG3 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsG3[0]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResultsG3 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsG3[1]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span className="jogo">
                                                        <span className="confronto">
                                                            {jogo3 && <img src={jogo3[1].url} alt="" />}                    
                                                            {jogo3 && jogo3[1].namePlacar}
                                                        </span>
                                                    </span>
                                                </p>
                                            </div>

                                            <div className="container-jogo-2">
                                                <p className="information-jogo">quinta <span className="stadium">
                                                    {jogo3 && jogo3[2].estadio}
                                                </span> 18:00</p>
                                                <p className="jogo-2">
                                                    <span className="jogo">
                                                        <span className="confronto">
                                                            {jogo3 && jogo3[2].namePlacar}
                                                            {jogo3 && <img src={jogo3[2].url} alt="" />}                    
                                                        </span>
                                                    </span>
                                                    {
                                                        saveResultsG3 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsG3[2]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResultsG3 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsG3[3]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span className="jogo">
                                                        <span className="confronto">
                                                            {jogo3 && <img src={jogo3[3].url} alt="" />}                    
                                                            {jogo3 && jogo3[3].namePlacar}
                                                        </span>
                                                    </span>
                                                </p>
                                            </div>
                                            <button className="btn-result-jogos">salvar</button>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="rodada-4">
                                            <div className="rodadas">
                                                <div className="container-translate-rodada">
                                                    <div className="rodada-1"><h3>4ªrodada</h3></div>
                                                </div>
                                            </div>
                                                
                                            <div className="container-jogo-1">
                                                <p className="information-jogo">quarta <span className="stadium">
                                                    {jogo4 && jogo4[0].estadio}
                                                </span> 21:30</p>
                                                <p className="jogo-1">
                                                    <span className="jogo">
                                                        <span className="confronto">
                                                            {jogo4 && jogo4[0].namePlacar}
                                                            {jogo4 && <img src={jogo4[0].url} alt="" />}                    
                                                        </span>
                                                    </span>
                                                    {
                                                        saveResultsG4 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsG4[0]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResultsG4 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsG4[1]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span className="jogo">
                                                        <span className="confronto">
                                                            {jogo4 && <img src={jogo4[1].url} alt="" />}                    
                                                            {jogo4 && jogo4[1].namePlacar}
                                                        </span>
                                                    </span>
                                                </p>
                                            </div>

                                            <div className="container-jogo-2">
                                                <p className="information-jogo">quinta <span className="stadium">
                                                    {jogo4 && jogo4[2].estadio}
                                                </span> 18:00</p>
                                                <p className="jogo-2">
                                                    <span className="jogo">
                                                        <span className="confronto">
                                                            {jogo4 && jogo4[2].namePlacar}
                                                            {jogo4 && <img src={jogo4[2].url} alt="" />}                    
                                                        </span>
                                                    </span>
                                                    {
                                                        saveResultsG4 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsG4[2]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResultsG4 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsG4[3]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span className="jogo">
                                                        <span className="confronto">
                                                            {jogo4 && <img src={jogo4[3].url} alt="" />}                    
                                                            {jogo4 && jogo4[3].namePlacar}
                                                        </span>
                                                    </span>
                                                </p>
                                            </div>
                                            <button className="btn-result-jogos">salvar</button>                                                
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="rodada-5">
                                            <div className="rodadas">
                                                <div className="container-translate-rodada">
                                                    <div className="rodada-1"><h3>5ªrodada</h3></div>
                                                </div>
                                            </div>
                                                
                                            <div className="container-jogo-1">
                                                <p className="information-jogo">quarta <span className="stadium">
                                                    {jogo5 && jogo5[0].estadio}
                                                </span> 21:30</p>
                                                <p className="jogo-1">
                                                    <span className="jogo">
                                                        <span className="confronto">
                                                            {jogo5 && jogo5[0].namePlacar}
                                                            {jogo5 && <img src={jogo5[0].url} alt="" />}                    
                                                        </span>
                                                    </span>
                                                    {
                                                        saveResultsG5 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsG5[0]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResultsG5 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsG5[1]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span className="jogo">
                                                        <span className="confronto">
                                                            {jogo5 && <img src={jogo5[1].url} alt="" />}                    
                                                            {jogo5 && jogo5[1].namePlacar}
                                                        </span>
                                                    </span>
                                                </p>
                                            </div>

                                            <div className="container-jogo-2">
                                                <p className="information-jogo">quinta <span className="stadium">
                                                    {jogo5 && jogo5[2].estadio}
                                                </span> 18:00</p>
                                                <p className="jogo-2">
                                                    <span className="jogo">
                                                        <span className="confronto">
                                                            {jogo5 && jogo5[2].namePlacar}
                                                            {jogo5 && <img src={jogo5[2].url} alt="" />}                    
                                                        </span>
                                                    </span>
                                                    {
                                                        saveResultsG5 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsG5[2]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResultsG5 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsG5[3]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span className="jogo">
                                                        <span className="confronto">
                                                            {jogo5 && <img src={jogo5[3].url} alt="" />}                    
                                                            {jogo5 && jogo5[3].namePlacar}
                                                        </span>
                                                    </span>
                                                </p>
                                            </div>
                                            <button className="btn-result-jogos">salvar</button>                                                
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="rodada-6">
                                            <div className="rodadas">
                                                <div className="container-translate-rodada">
                                                    <div className="rodada-1"><h3>6ªrodada</h3></div>
                                                </div>
                                            </div>
                                                
                                            <div className="container-jogo-1">
                                                <p className="information-jogo">quarta <span className="stadium">
                                                    {jogo6 && jogo6[0].estadio}
                                                </span> 21:30</p>
                                                <p className="jogo-1">
                                                    <span className="jogo">
                                                        <span className="confronto">
                                                            {jogo6 && jogo6[0].namePlacar}
                                                            {jogo6 && <img src={jogo6[0].url} alt="" />}                    
                                                        </span>
                                                    </span>
                                                    {
                                                        saveResultsG6 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsG6[0]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResultsG6 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsG6[1]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span className="jogo">
                                                        <span className="confronto">
                                                            {jogo6 && <img src={jogo6[1].url} alt="" />}                    
                                                            {jogo6 && jogo6[1].namePlacar}
                                                        </span>
                                                    </span>
                                                </p>
                                            </div>

                                            <div className="container-jogo-2">
                                                <p className="information-jogo">quinta <span className="stadium">
                                                    {jogo6 && jogo6[2].estadio}
                                                </span> 18:00</p>
                                                <p className="jogo-2">
                                                    <span className="jogo">
                                                        <span className="confronto">
                                                            {jogo6 && jogo6[2].namePlacar}
                                                            {jogo6 && <img src={jogo6[2].url} alt="" />}                    
                                                        </span>
                                                    </span>
                                                    {
                                                        saveResultsG6 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsG6[2]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResultsG6 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsG6[3]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span className="jogo">
                                                        <span className="confronto">
                                                            {jogo6 && <img src={jogo6[3].url} alt="" />}                    
                                                            {jogo6 && jogo6[3].namePlacar}
                                                        </span>
                                                    </span>
                                                </p>
                                            </div>
                                            <button className="btn-result-jogos">salvar</button>        
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}