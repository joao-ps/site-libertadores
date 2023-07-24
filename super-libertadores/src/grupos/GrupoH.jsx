import React, { useRef, useState, useContext } from "react";
 // Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

 // Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import '../styles/grupos.sass'

import { Navigation } from "swiper";

import { FaseFinal } from "../componentes/api/getTeams";

export function GrupoH({group}){
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
    const TimeH1 =
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
        const TimeH2 =
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
        const TimeH3 =
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
        const TimeH4 =
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
        let tableH

        let saveResultsH1
        let saveResultsH2
        let saveResultsH3
        let saveResultsH4
        let saveResultsH5
        let saveResultsH6

        saveResultsH1 = JSON.parse(sessionStorage.getItem('JgFSH-1'))
        saveResultsH2 = JSON.parse(sessionStorage.getItem('JgFSH-2'))
        saveResultsH3 = JSON.parse(sessionStorage.getItem('JgFSH-3'))
        saveResultsH4 = JSON.parse(sessionStorage.getItem('JgFSH-4'))
        saveResultsH5 = JSON.parse(sessionStorage.getItem('JgFSH-5'))
        saveResultsH6 = JSON.parse(sessionStorage.getItem('JgFSH-6'))

        let rodadasJogadasGH = 1

        let rodada1Time1 = JSON.parse(sessionStorage.getItem('TIME1-RODH1'))
        let rodada2Time1 = JSON.parse(sessionStorage.getItem('TIME1-RODH2'))
        let rodada3Time1 = JSON.parse(sessionStorage.getItem('TIME1-RODH3'))
        let rodada4Time1 = JSON.parse(sessionStorage.getItem('TIME1-RODH4'))
        let rodada5Time1 = JSON.parse(sessionStorage.getItem('TIME1-RODH5'))
        let rodada6Time1 = JSON.parse(sessionStorage.getItem('TIME1-RODH6'))

        let rodada1Time2 = JSON.parse(sessionStorage.getItem('TIME2-RODH1'))
        let rodada2Time2 = JSON.parse(sessionStorage.getItem('TIME2-RODH2'))
        let rodada3Time2 = JSON.parse(sessionStorage.getItem('TIME2-RODH3'))
        let rodada4Time2 = JSON.parse(sessionStorage.getItem('TIME2-RODH4'))
        let rodada5Time2 = JSON.parse(sessionStorage.getItem('TIME2-RODH5'))
        let rodada6Time2 = JSON.parse(sessionStorage.getItem('TIME2-RODH6'))

        let rodada1Time3 = JSON.parse(sessionStorage.getItem('TIME3-RODH1'))
        let rodada2Time3 = JSON.parse(sessionStorage.getItem('TIME3-RODH2'))
        let rodada3Time3 = JSON.parse(sessionStorage.getItem('TIME3-RODH3'))
        let rodada4Time3 = JSON.parse(sessionStorage.getItem('TIME3-RODH4'))
        let rodada5Time3 = JSON.parse(sessionStorage.getItem('TIME3-RODH5'))
        let rodada6Time3 = JSON.parse(sessionStorage.getItem('TIME3-RODH6'))

        let rodada1Time4 = JSON.parse(sessionStorage.getItem('TIME4-RODH1'))
        let rodada2Time4 = JSON.parse(sessionStorage.getItem('TIME4-RODH2'))
        let rodada3Time4 = JSON.parse(sessionStorage.getItem('TIME4-RODH3'))
        let rodada4Time4 = JSON.parse(sessionStorage.getItem('TIME4-RODH4'))
        let rodada5Time4 = JSON.parse(sessionStorage.getItem('TIME4-RODH5'))
        let rodada6Time4 = JSON.parse(sessionStorage.getItem('TIME4-RODH6'))

        if(Grupo != null){
            TimeH1.time = Grupo[0].time
            TimeH2.time = Grupo[1].time
            TimeH3.time = Grupo[2].time
            TimeH4.time = Grupo[3].time
            TimeH1.placar = Grupo[0].namePlacar
            TimeH2.placar = Grupo[1].namePlacar
            TimeH3.placar = Grupo[2].namePlacar
            TimeH4.placar = Grupo[3].namePlacar
            TimeH1.pais = Grupo[0].pais
            TimeH2.pais = Grupo[1].pais
            TimeH3.pais = Grupo[2].pais
            TimeH4.pais = Grupo[3].pais
            TimeH1.estadio = Grupo[0].estadio
            TimeH2.estadio = Grupo[1].estadio
            TimeH3.estadio = Grupo[2].estadio
            TimeH4.estadio = Grupo[3].estadio
            TimeH1.url = Grupo[0].url
            TimeH2.url = Grupo[1].url
            TimeH3.url = Grupo[2].url
            TimeH4.url = Grupo[3].url
            tableH = []
            tableH[0] = TimeH4
            tableH[1] = TimeH3
            tableH[2] = TimeH2
            tableH[3] = TimeH1
    
            //ROUND 1
            jogo1.push(Grupo[0])
            jogo1.push(Grupo[1])
            jogo1.push(Grupo[2])
            jogo1.push(Grupo[3])
            //ROUND 2
            jogo2.push(Grupo[1])
            jogo2.push(Grupo[2])
            jogo2.push(Grupo[3])
            jogo2.push(Grupo[0])
            //ROUND 3
            jogo3.push(Grupo[2])
            jogo3.push(Grupo[0])
            jogo3.push(Grupo[3])
            jogo3.push(Grupo[1])
            //ROUND 4
            jogo4.push(Grupo[1])
            jogo4.push(Grupo[3])
            jogo4.push(Grupo[0])
            jogo4.push(Grupo[2])
            //ROUND 5
            jogo5.push(Grupo[2])
            jogo5.push(Grupo[1])
            jogo5.push(Grupo[0])
            jogo5.push(Grupo[3])
            //ROUND 6
            jogo6.push(Grupo[1])
            jogo6.push(Grupo[0])
            jogo6.push(Grupo[3])
            jogo6.push(Grupo[2])
    
            sessionStorage.setItem('RoundH1', JSON.stringify(jogo1))
            sessionStorage.setItem('RoundH2', JSON.stringify(jogo2))
            sessionStorage.setItem('RoundH3', JSON.stringify(jogo3))
            sessionStorage.setItem('RoundH4', JSON.stringify(jogo4))
            sessionStorage.setItem('RoundH5', JSON.stringify(jogo5))
            sessionStorage.setItem('RoundH6', JSON.stringify(jogo6))
        }

        limparAtr(TimeH1)
        limparAtr(TimeH2)
        limparAtr(TimeH3)
        limparAtr(TimeH4)

        if(rodada1Time1 != null){
      
            for (let index = 2; index < 7; index++) {
                switch (index) {
                    case 2:
                        if(rodada2Time1 != null){
                            rodadasJogadasGH = 2
                        }
                        break;
    
                    case 3:
                        if(rodada3Time1 != null){
                            rodadasJogadasGH = 3
                        }
                        break;
    
                    case 4:
                        if(rodada4Time1 != null){
                            rodadasJogadasGH = 4
                        }
                        break;
    
                    case 5:
                        if(rodada5Time1 != null){
                            rodadasJogadasGH = 5
                        }
                        break;
    
                    case 6:
                        if(rodada6Time1 != null){
                            rodadasJogadasGH = 6
                        }
                        break;
                }
            }
    
            setTimeout(() => {
                insertPontos(rodada1Time1,rodada2Time1,rodada3Time1,rodada4Time1,rodada5Time1,rodada6Time1,TimeH1, false)
                insertPontos(rodada1Time2,rodada2Time2,rodada3Time2,rodada4Time2,rodada5Time2,rodada6Time2,TimeH2, false)
                insertPontos(rodada1Time3,rodada2Time3,rodada3Time3,rodada4Time3,rodada5Time3,rodada6Time3,TimeH3, false)
                insertPontos(rodada1Time4,rodada2Time4,rodada3Time4,rodada4Time4,rodada5Time4,rodada6Time4,TimeH4, true)
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
    
            switch (rodadasJogadasGH) {
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
                let tableH = []
                tableH[0] = TimeH1
                tableH[1] = TimeH2
                tableH[2] = TimeH3
                tableH[3] = TimeH4
    
                tableH.sort((a,b) => {
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
        
                let h = 3
                for(let i = 28;i<32;i++){
                    tdTime[i].innerText = tableH[h].time
                    tdPontos[i].innerText = tableH[h].p
                    tdJogos[i].innerText = tableH[h].j
                    tdVitorias[i].innerText = tableH[h].v
                    tdEmpates[i].innerText = tableH[h].e
                    tdDerrotas[i].innerText = tableH[h].d
                    tdGolsPro[i].innerText = tableH[h].gp
                    tdGolsContra[i].innerText = tableH[h].gc
                    tdSaldoGols[i].innerText = tableH[h].sg
                    h--
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
            rodadasJogadasGH = rodada

            insertPontos(rodada1Time1,rodada2Time1,rodada3Time1,rodada4Time1,rodada5Time1,rodada6Time1,TimeH1, false)
            insertPontos(rodada1Time2,rodada2Time2,rodada3Time2,rodada4Time2,rodada5Time2,rodada6Time2,TimeH2, false)
            insertPontos(rodada1Time3,rodada2Time3,rodada3Time3,rodada4Time3,rodada5Time3,rodada6Time3,TimeH3, false)
            insertPontos(rodada1Time4,rodada2Time4,rodada3Time4,rodada4Time4,rodada5Time4,rodada6Time4,TimeH4, false)

            tableH.sort((a,b) => {
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

            let h = 3
            for(let i = 28;i<32;i++){
                tdTime[i].innerText = tableH[h].time
                tdPontos[i].innerText = tableH[h].p
                tdJogos[i].innerText = tableH[h].j
                tdVitorias[i].innerText = tableH[h].v
                tdEmpates[i].innerText = tableH[h].e
                tdDerrotas[i].innerText = tableH[h].d
                tdGolsPro[i].innerText = tableH[h].gp
                tdGolsContra[i].innerText = tableH[h].gc
                tdSaldoGols[i].innerText = tableH[h].sg
                h--
            }
            if(rodadasJogadasGH == 6){
                tableH[3].group = 'H'
                tableH[3].position = 1
                tableH[2].group = 'H'
                tableH[2].position = 2
    
                newOitavas(tableH[3], 14)
                newOitavas(tableH[2], 15)
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

            buttonSaveResult[42].addEventListener('click', function setResult(){
                let jogo = []
                let listResults = []
                listResults.push(resultsGames[168].value)
                listResults.push(resultsGames[169].value)
                listResults.push(resultsGames[170].value)
                listResults.push(resultsGames[171].value)

                if(saveResultsH1 != null){
                    console.log('Resultadores já registrados')
                    return
                }
                for(let i = 0; i<listResults.length; i++){
                    if(!listResults[i])return
                }
                for(let i = 168; i<172; i++){
                    resultsGames[i].setAttribute('readonly', 'readonly');
                }
                
                jogo[0] = listResults[0]
                jogo[1] = listResults[1]
                jogo[2] = listResults[2]
                jogo[3] = listResults[3]

                sessionStorage.setItem('JgFSH-1', JSON.stringify(jogo))
                saveResultsH1 = JSON.parse(sessionStorage.getItem('JgFSH-1'))
                
                limparAtr(TimeH1)
                limparAtr(TimeH2)
                limparAtr(TimeH3)
                limparAtr(TimeH4)
                insertResultsGame(listResults[0], listResults[1], TimeH1)
                insertResultsGame(listResults[1], listResults[0], TimeH2)
                insertResultsGame(listResults[2], listResults[3], TimeH3)
                insertResultsGame(listResults[3], listResults[2], TimeH4)
                sessionStorage.setItem('TIME1-RODH1', JSON.stringify(TimeH1))
                rodada1Time1 = JSON.parse(sessionStorage.getItem('TIME1-RODH1'))
                sessionStorage.setItem('TIME2-RODH1', JSON.stringify(TimeH2))
                rodada1Time2 = JSON.parse(sessionStorage.getItem('TIME2-RODH1'))
                sessionStorage.setItem('TIME3-RODH1', JSON.stringify(TimeH3))
                rodada1Time3 = JSON.parse(sessionStorage.getItem('TIME3-RODH1'))
                sessionStorage.setItem('TIME4-RODH1', JSON.stringify(TimeH4))
                rodada1Time4 = JSON.parse(sessionStorage.getItem('TIME4-RODH1'))
                classificacao(1)
                this.removeEventListener('click', setResult)
                this.classList.add('btn-disabled')
            })
            buttonSaveResult[43].addEventListener('click', function setResult(){
                let jogo = []
                let listResults = []
                listResults.push(resultsGames[172].value)
                listResults.push(resultsGames[173].value)
                listResults.push(resultsGames[174].value)
                listResults.push(resultsGames[175].value)

                if(saveResultsH1 == undefined){
                    console.log('Resultado do primeiro jogo não registrado')
                    return
                }
                if(saveResultsH2 != null){
                    console.log('Resultadores já registrados')
                    return
                }
    
                for(let i = 0; i<listResults.length; i++){
                    if(!listResults[i])return
                }
                for(let i = 172; i<176; i++){
                    resultsGames[i].setAttribute('readonly', 'readonly');
                }
    
                jogo[0] = Number(listResults[0])
                jogo[1] = Number(listResults[1])
                jogo[2] = Number(listResults[2])
                jogo[3] = Number(listResults[3])

                sessionStorage.setItem('JgFSH-2', JSON.stringify(jogo))
                saveResultsH2 = JSON.parse(sessionStorage.getItem('JgFSH-2'))

                limparAtr(TimeH1)
                limparAtr(TimeH2)
                limparAtr(TimeH3)
                limparAtr(TimeH4)
                insertResultsGame(listResults[0], listResults[1], TimeH2)
                insertResultsGame(listResults[1], listResults[0], TimeH3)
                insertResultsGame(listResults[2], listResults[3], TimeH4)
                insertResultsGame(listResults[3], listResults[2], TimeH1)
                sessionStorage.setItem('TIME1-RODH2', JSON.stringify(TimeH1))
                rodada2Time1 = JSON.parse(sessionStorage.getItem('TIME1-RODH2'))
                sessionStorage.setItem('TIME2-RODH2', JSON.stringify(TimeH2))
                rodada2Time2 = JSON.parse(sessionStorage.getItem('TIME2-RODH2'))
                sessionStorage.setItem('TIME3-RODH2', JSON.stringify(TimeH3))
                rodada2Time3 = JSON.parse(sessionStorage.getItem('TIME3-RODH2'))
                sessionStorage.setItem('TIME4-RODH2', JSON.stringify(TimeH4))
                rodada2Time4 = JSON.parse(sessionStorage.getItem('TIME4-RODH2'))
                classificacao(2)
                this.removeEventListener('click', setResult)
                this.classList.add('btn-disabled')
            })
            buttonSaveResult[44].addEventListener('click', function setResult(){
                let jogo = []
                let listResults = []
                listResults.push(resultsGames[176].value)
                listResults.push(resultsGames[177].value)
                listResults.push(resultsGames[178].value)
                listResults.push(resultsGames[179].value)

                if(saveResultsH2 == undefined){
                    console.log('Resultado do primeiro jogo não registrado')
                    return
                }
                if(saveResultsH3 != null){
                    console.log('Resultadores já registrados')
                    return
                }
    
                for(let i = 0; i<listResults.length; i++){
                    if(!listResults[i])return
                }
                for(let i = 176; i<180; i++){
                    resultsGames[i].setAttribute('readonly', 'readonly');
                }
    
                jogo[0] = Number(listResults[0])
                jogo[1] = Number(listResults[1])
                jogo[2] = Number(listResults[2])
                jogo[3] = Number(listResults[3])

                sessionStorage.setItem('JgFSH-3', JSON.stringify(jogo))
                saveResultsH3 = JSON.parse(sessionStorage.getItem('JgFSH-3'))

                limparAtr(TimeH1)
                limparAtr(TimeH2)
                limparAtr(TimeH3)
                limparAtr(TimeH4)
                insertResultsGame(listResults[0], listResults[1], TimeH3)
                insertResultsGame(listResults[1], listResults[0], TimeH1)
                insertResultsGame(listResults[2], listResults[3], TimeH4)
                insertResultsGame(listResults[3], listResults[2], TimeH2)
                sessionStorage.setItem('TIME1-RODH3', JSON.stringify(TimeH1))
                rodada3Time1 = JSON.parse(sessionStorage.getItem('TIME1-RODH3'))
                sessionStorage.setItem('TIME2-RODH3', JSON.stringify(TimeH2))
                rodada3Time2 = JSON.parse(sessionStorage.getItem('TIME2-RODH3'))
                sessionStorage.setItem('TIME3-RODH3', JSON.stringify(TimeH3))
                rodada3Time3 = JSON.parse(sessionStorage.getItem('TIME3-RODH3'))
                sessionStorage.setItem('TIME4-RODH3', JSON.stringify(TimeH4))
                rodada3Time4 = JSON.parse(sessionStorage.getItem('TIME4-RODH3'))
                classificacao(3)
                this.removeEventListener('click', setResult)
                this.classList.add('btn-disabled')
            })
            buttonSaveResult[45].addEventListener('click', function setResult(){
                let jogo = []
                let listResults = []
                listResults.push(resultsGames[180].value)
                listResults.push(resultsGames[181].value)
                listResults.push(resultsGames[182].value)
                listResults.push(resultsGames[183].value)

                if(saveResultsH3 == undefined){
                    console.log('Resultado do primeiro jogo não registrado')
                    return
                }
                if(saveResultsH4 != null){
                    console.log('Resultadores já registrados')
                    return
                }
    
                for(let i = 0; i<listResults.length; i++){
                    if(!listResults[i])return
                }
                for(let i = 180; i<184; i++){
                    resultsGames[i].setAttribute('readonly', 'readonly');
                }
    
                jogo[0] = Number(listResults[0])
                jogo[1] = Number(listResults[1])
                jogo[2] = Number(listResults[2])
                jogo[3] = Number(listResults[3])

                sessionStorage.setItem('JgFSH-4', JSON.stringify(jogo))
                saveResultsH4 = JSON.parse(sessionStorage.getItem('JgFSH-4'))

                limparAtr(TimeH1)
                limparAtr(TimeH2)
                limparAtr(TimeH3)
                limparAtr(TimeH4)
                insertResultsGame(listResults[0], listResults[1], TimeH2)
                insertResultsGame(listResults[1], listResults[0], TimeH4)
                insertResultsGame(listResults[2], listResults[3], TimeH1)
                insertResultsGame(listResults[3], listResults[2], TimeH3)
                sessionStorage.setItem('TIME1-RODH4', JSON.stringify(TimeH1))
                rodada4Time1 = JSON.parse(sessionStorage.getItem('TIME1-RODH4'))
                sessionStorage.setItem('TIME2-RODH4', JSON.stringify(TimeH2))
                rodada4Time2 = JSON.parse(sessionStorage.getItem('TIME2-RODH4'))
                sessionStorage.setItem('TIME3-RODH4', JSON.stringify(TimeH3))
                rodada4Time3 = JSON.parse(sessionStorage.getItem('TIME3-RODH4'))
                sessionStorage.setItem('TIME4-RODH4', JSON.stringify(TimeH4))
                rodada4Time4 = JSON.parse(sessionStorage.getItem('TIME4-RODH4'))
                classificacao(4)
                this.removeEventListener('click', setResult)
                this.classList.add('btn-disabled')
            })
            buttonSaveResult[46].addEventListener('click', function setResult(){
                let jogo = []
                let listResults = []
                listResults.push(resultsGames[184].value)
                listResults.push(resultsGames[185].value)
                listResults.push(resultsGames[186].value)
                listResults.push(resultsGames[187].value)

                if(saveResultsH4 == undefined){
                    console.log('Resultado do primeiro jogo não registrado')
                    return
                }
                if(saveResultsH5 != null){
                    console.log('Resultadores já registrados')
                    return
                }
    
                for(let i = 0; i<listResults.length; i++){
                    if(!listResults[i])return
                }
                for(let i = 184; i<188; i++){
                    resultsGames[i].setAttribute('readonly', 'readonly');
                }
    
                jogo[0] = Number(listResults[0])
                jogo[1] = Number(listResults[1])
                jogo[2] = Number(listResults[2])
                jogo[3] = Number(listResults[3])

                sessionStorage.setItem('JgFSH-5', JSON.stringify(jogo))
                saveResultsH5 = JSON.parse(sessionStorage.getItem('JgFSH-5'))
                
                limparAtr(TimeH1)
                limparAtr(TimeH2)
                limparAtr(TimeH3)
                limparAtr(TimeH4)
                insertResultsGame(listResults[0], listResults[1], TimeH3)
                insertResultsGame(listResults[1], listResults[0], TimeH2)
                insertResultsGame(listResults[2], listResults[3], TimeH1)
                insertResultsGame(listResults[3], listResults[2], TimeH4)
                sessionStorage.setItem('TIME1-RODH5', JSON.stringify(TimeH1))
                rodada5Time1 = JSON.parse(sessionStorage.getItem('TIME1-RODH5'))
                sessionStorage.setItem('TIME2-RODH5', JSON.stringify(TimeH2))
                rodada5Time2 = JSON.parse(sessionStorage.getItem('TIME2-RODH5'))
                sessionStorage.setItem('TIME3-RODH5', JSON.stringify(TimeH3))
                rodada5Time3 = JSON.parse(sessionStorage.getItem('TIME3-RODH5'))
                sessionStorage.setItem('TIME4-RODH5', JSON.stringify(TimeH4))
                rodada5Time4 = JSON.parse(sessionStorage.getItem('TIME4-RODH5'))
                classificacao(5)
                this.removeEventListener('click', setResult)
                this.classList.add('btn-disabled')
            })
            buttonSaveResult[47].addEventListener('click', function setResult(){
                let jogo = []
                let listResults = []
                listResults.push(resultsGames[188].value)
                listResults.push(resultsGames[189].value)
                listResults.push(resultsGames[190].value)
                listResults.push(resultsGames[191].value)

                if(saveResultsH5 == undefined){
                    console.log('Resultado do primeiro jogo não registrado')
                    return
                }
                if(saveResultsH6 != null){
                    console.log('Resultadores já registrados')
                    return
                }
    
                for(let i = 0; i<listResults.length; i++){
                    if(!listResults[i])return
                }
                for(let i = 188; i<192; i++){
                    resultsGames[i].setAttribute('readonly', 'readonly');
                }
    
                jogo[0] = Number(listResults[0])
                jogo[1] = Number(listResults[1])
                jogo[2] = Number(listResults[2])
                jogo[3] = Number(listResults[3])

                sessionStorage.setItem('JgFSH-6', JSON.stringify(jogo))
                saveResultsH6 = JSON.parse(sessionStorage.getItem('JgFSH-6'))

                limparAtr(TimeH1)
                limparAtr(TimeH2)
                limparAtr(TimeH3)
                limparAtr(TimeH4)
                insertResultsGame(listResults[0], listResults[1], TimeH2)
                insertResultsGame(listResults[1], listResults[0], TimeH1)
                insertResultsGame(listResults[2], listResults[3], TimeH4)
                insertResultsGame(listResults[3], listResults[2], TimeH3)
                sessionStorage.setItem('TIME1-RODH6', JSON.stringify(TimeH1))
                rodada6Time1 = JSON.parse(sessionStorage.getItem('TIME1-RODH6'))
                sessionStorage.setItem('TIME2-RODH6', JSON.stringify(TimeH2))
                rodada6Time2 = JSON.parse(sessionStorage.getItem('TIME2-RODH6'))
                sessionStorage.setItem('TIME3-RODH6', JSON.stringify(TimeH3))
                rodada6Time3 = JSON.parse(sessionStorage.getItem('TIME3-RODH6'))
                sessionStorage.setItem('TIME4-RODH6', JSON.stringify(TimeH4))
                rodada6Time4 = JSON.parse(sessionStorage.getItem('TIME4-RODH6'))
                classificacao(6)
                this.removeEventListener('click', setResult)
                this.classList.add('btn-disabled')
            })
        }

        jogo1 = JSON.parse(sessionStorage.getItem('RoundH1'))
        jogo2 = JSON.parse(sessionStorage.getItem('RoundH2'))
        jogo3 = JSON.parse(sessionStorage.getItem('RoundH3'))
        jogo4 = JSON.parse(sessionStorage.getItem('RoundH4'))
        jogo5 = JSON.parse(sessionStorage.getItem('RoundH5'))
        jogo6 = JSON.parse(sessionStorage.getItem('RoundH6'))

        setTimeout(addFunctionButton, 200)

    return(
        <div className="container-fases">
            <h2>grupo h</h2>
            <div className="container-table-jogos">
                <table id="grupoH" className="libertadores">
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
                                    {tableH != null
                                        ?
                                            tableH[3].time
                                        :
                                            ''
                                    }
                                </abbr>
                            </td>
                            <td className="cedula-pontos">
                                <b>
                                    {tableH != null
                                        ?
                                            tableH[3].p
                                        :
                                            0
                                    }       
                                </b>
                            </td>
                            <td className="cedula-jogos">
                                {tableH != null
                                    ?
                                        tableH[3].j
                                    :
                                        0
                                }       
                            </td>
                            <td className="cedula-vitorias">
                                {tableH != null
                                    ?
                                        tableH[3].v
                                    :
                                        0
                                }       
                            </td>
                            <td className="cedula-empates">
                                {tableH != null
                                    ?
                                        tableH[3].e
                                    :
                                        0
                                }       
                            </td>
                            <td className="cedula-derrotas">
                                {tableH != null
                                    ?
                                        tableH[3].d
                                    :
                                        0
                                }       
                            </td>
                            <td className="cedula-gols-pro">
                                {tableH != null
                                    ?
                                        tableH[3].gp
                                    :
                                        0
                                }       
                            </td>
                            <td className="cedula-gols-contra">
                                {tableH != null
                                    ?
                                        tableH[3].gc
                                    :
                                        0
                                }       
                            </td>
                            <td className="cedula-saldo-gols">
                                {tableH != null
                                    ?
                                        tableH[3].sg
                                    :
                                        0
                                }       
                            </td>
                        </tr>
                        <tr>
                            <td rowSpan={1} className="classificado">2</td>
                            <td className="cedula-time2">
                                <abbr className="cedula-time">
                                    {tableH != null
                                        ?
                                            tableH[2].time
                                        :
                                            ''
                                    }                                    
                                </abbr>
                            </td>
                            <td className="cedula-pontos">
                                <b>
                                    {tableH != null
                                        ?
                                            tableH[2].p
                                        :
                                            0
                                    }       
                                </b>
                            </td>
                            <td className="cedula-jogos">
                                {tableH != null
                                    ?
                                        tableH[2].j
                                    :
                                        0
                                }       
                            </td>
                            <td className="cedula-vitorias">
                                {tableH != null
                                    ?
                                        tableH[2].v
                                    :
                                        0
                                }       
                            </td>
                            <td className="cedula-empates">
                                {tableH != null
                                    ?
                                        tableH[2].e
                                    :
                                        0
                                }       
                            </td>
                            <td className="cedula-derrotas">
                                {tableH != null
                                    ?
                                        tableH[2].d
                                    :
                                        0
                                }       
                            </td>
                            <td className="cedula-gols-pro">
                                {tableH != null
                                    ?
                                        tableH[2].gp
                                    :
                                        0
                                }       
                            </td>
                            <td className="cedula-gols-contra">
                                {tableH != null
                                    ?
                                        tableH[2].gc
                                    :
                                        0
                                }       
                            </td>
                            <td className="cedula-saldo-gols">
                                {tableH != null
                                    ?
                                        tableH[2].sg
                                    :
                                        0
                                }       
                            </td>
                        </tr>
                        <tr>
                            <td rowSpan={1} className="sul-americana">3</td>
                            <td className="cedula-time3">
                                <abbr className="cedula-time">
                                    {tableH != null
                                        ?
                                            tableH[1].time
                                        :
                                            ''
                                    }                     
                                </abbr>
                            </td>
                            <td className="cedula-pontos">
                                <b>
                                    {tableH != null
                                        ?
                                            tableH[1].p
                                        :
                                            0
                                    }       
                                </b>
                            </td>
                            <td className="cedula-jogos">
                                {tableH != null
                                    ?
                                        tableH[1].j
                                    :
                                        0
                                }       
                            </td>
                            <td className="cedula-vitorias">
                                {tableH != null
                                    ?
                                        tableH[1].v
                                    :
                                        0
                                }       
                            </td>
                            <td className="cedula-empates">
                                {tableH != null
                                    ?
                                        tableH[1].e
                                    :
                                        0
                                }       
                            </td>
                            <td className="cedula-derrotas">
                                {tableH != null
                                    ?
                                        tableH[1].d
                                    :
                                        0
                                }       
                            </td>
                            <td className="cedula-gols-pro">
                                {tableH != null
                                    ?
                                        tableH[1].gp
                                    :
                                        0
                                }       
                            </td>
                            <td className="cedula-gols-contra">
                                {tableH != null
                                    ?
                                        tableH[1].gc
                                    :
                                        0
                                }       
                            </td>
                            <td className="cedula-saldo-gols">
                                {tableH != null
                                    ?
                                        tableH[1].sg
                                    :
                                        0
                                }       
                            </td>
                        </tr>
                        <tr>
                            <td rowSpan={1} className="eliminado">4</td>
                            <td className="cedula-time4">
                                <abbr className="cedula-time">
                                    {tableH != null
                                        ?
                                            tableH[0].time
                                        :
                                            ''
                                    }                      
                                </abbr>
                            </td>
                            <td className="cedula-pontos">
                                <b>
                                    {tableH != null
                                        ?
                                            tableH[0].p
                                        :
                                            0
                                    }                      
                                </b>
                            </td>
                            <td className="cedula-jogos">
                                {tableH != null
                                    ?
                                        tableH[0].j
                                    :
                                        0
                                }       
                            </td>
                            <td className="cedula-vitorias">
                                {tableH != null
                                    ?
                                        tableH[0].v
                                    :
                                        0
                                }       
                            </td>
                            <td className="cedula-empates">
                                {tableH != null
                                    ?
                                        tableH[0].e
                                    :
                                        0
                                }       
                            </td>
                            <td className="cedula-derrotas">
                                {tableH != null
                                    ?
                                        tableH[0].d
                                    :
                                        0
                                }       
                            </td>
                            <td className="cedula-gols-pro">
                                {tableH != null
                                    ?
                                        tableH[0].gp
                                    :
                                        0
                                }       
                            </td>
                            <td className="cedula-gols-contra">
                                {tableH != null
                                    ?
                                        tableH[0].gc
                                    :
                                        0
                                }       
                            </td>
                            <td className="cedula-saldo-gols">
                                {tableH != null
                                    ?
                                        tableH[0].sg
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
                                                        saveResultsH1 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsH1[0]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResultsH1 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsH1[1]}
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
                                                        saveResultsH1 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsH1[2]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResultsH1 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsH1[3]}
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
                                                        saveResultsH2 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsH2[0]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResultsH2 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsH2[1]}
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
                                                        saveResultsH2 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsH2[2]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResultsH2 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsH2[3]}
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
                                                        saveResultsH3 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsH3[0]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResultsH3 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsH3[1]}
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
                                                        saveResultsH3 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsH3[2]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResultsH3 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsH3[3]}
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
                                                        saveResultsH4 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsH4[0]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResultsH4 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsH4[1]}
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
                                                        saveResultsH4 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsH4[2]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResultsH4 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsH4[3]}
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
                                                        saveResultsH5 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsH5[0]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResultsH5 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsH5[1]}
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
                                                        saveResultsH5 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsH5[2]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResultsH5 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsH5[3]}
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
                                                        saveResultsH6 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsH6[0]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResultsH6 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsH6[1]}
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
                                                        saveResultsH6 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsH6[2]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResultsH6 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsH6[3]}
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