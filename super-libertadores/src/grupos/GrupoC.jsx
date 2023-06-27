import React, { useRef, useState, useContext } from "react";
 // Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

 // Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import '../styles/grupos.sass'

import { Navigation } from "swiper";

import { FaseFinal } from "../componentes/api/getTeams";

export function GrupoC({group}){
    let [
        newOitavas,
        previaOitavas,
        newQuartas,
        previaQuartas
    ] = useContext(FaseFinal)

    let Grupo = group
    const TimeC1 =
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
        const TimeC2 =
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
        const TimeC3 =
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
        const TimeC4 =
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
        let tableC

        let saveResultsC1
        let saveResultsC2
        let saveResultsC3
        let saveResultsC4
        let saveResultsC5
        let saveResultsC6

        saveResultsC1 = JSON.parse(sessionStorage.getItem('JgFSC-1'))
        saveResultsC2 = JSON.parse(sessionStorage.getItem('JgFSC-2'))
        saveResultsC3 = JSON.parse(sessionStorage.getItem('JgFSC-3'))
        saveResultsC4 = JSON.parse(sessionStorage.getItem('JgFSC-4'))
        saveResultsC5 = JSON.parse(sessionStorage.getItem('JgFSC-5'))
        saveResultsC6 = JSON.parse(sessionStorage.getItem('JgFSC-6'))

        let rodadasJogadasGC = 1

        let rodada1Time1 = JSON.parse(sessionStorage.getItem('TIME1-RODC1'))
        let rodada2Time1 = JSON.parse(sessionStorage.getItem('TIME1-RODC2'))
        let rodada3Time1 = JSON.parse(sessionStorage.getItem('TIME1-RODC3'))
        let rodada4Time1 = JSON.parse(sessionStorage.getItem('TIME1-RODC4'))
        let rodada5Time1 = JSON.parse(sessionStorage.getItem('TIME1-RODC5'))
        let rodada6Time1 = JSON.parse(sessionStorage.getItem('TIME1-RODC6'))

        let rodada1Time2 = JSON.parse(sessionStorage.getItem('TIME2-RODC1'))
        let rodada2Time2 = JSON.parse(sessionStorage.getItem('TIME2-RODC2'))
        let rodada3Time2 = JSON.parse(sessionStorage.getItem('TIME2-RODC3'))
        let rodada4Time2 = JSON.parse(sessionStorage.getItem('TIME2-RODC4'))
        let rodada5Time2 = JSON.parse(sessionStorage.getItem('TIME2-RODC5'))
        let rodada6Time2 = JSON.parse(sessionStorage.getItem('TIME2-RODC6'))

        let rodada1Time3 = JSON.parse(sessionStorage.getItem('TIME3-RODC1'))
        let rodada2Time3 = JSON.parse(sessionStorage.getItem('TIME3-RODC2'))
        let rodada3Time3 = JSON.parse(sessionStorage.getItem('TIME3-RODC3'))
        let rodada4Time3 = JSON.parse(sessionStorage.getItem('TIME3-RODC4'))
        let rodada5Time3 = JSON.parse(sessionStorage.getItem('TIME3-RODC5'))
        let rodada6Time3 = JSON.parse(sessionStorage.getItem('TIME3-RODC6'))

        let rodada1Time4 = JSON.parse(sessionStorage.getItem('TIME4-RODC1'))
        let rodada2Time4 = JSON.parse(sessionStorage.getItem('TIME4-RODC2'))
        let rodada3Time4 = JSON.parse(sessionStorage.getItem('TIME4-RODC3'))
        let rodada4Time4 = JSON.parse(sessionStorage.getItem('TIME4-RODC4'))
        let rodada5Time4 = JSON.parse(sessionStorage.getItem('TIME4-RODC5'))
        let rodada6Time4 = JSON.parse(sessionStorage.getItem('TIME4-RODC6'))

        if(Grupo != null){
            TimeC1.time = Grupo[0].time
            TimeC2.time = Grupo[1].time
            TimeC3.time = Grupo[2].time
            TimeC4.time = Grupo[3].time
            TimeC1.placar = Grupo[0].namePlacar
            TimeC2.placar = Grupo[1].namePlacar
            TimeC3.placar = Grupo[2].namePlacar
            TimeC4.placar = Grupo[3].namePlacar
            TimeC1.pais = Grupo[0].pais
            TimeC2.pais = Grupo[1].pais
            TimeC3.pais = Grupo[2].pais
            TimeC4.pais = Grupo[3].pais
            TimeC1.estadio = Grupo[0].estadio
            TimeC2.estadio = Grupo[1].estadio
            TimeC3.estadio = Grupo[2].estadio
            TimeC4.estadio = Grupo[3].estadio
            TimeC1.url = Grupo[0].url
            TimeC2.url = Grupo[1].url
            TimeC3.url = Grupo[2].url
            TimeC4.url = Grupo[3].url
            tableC = []
            tableC[0] = TimeC4
            tableC[1] = TimeC3
            tableC[2] = TimeC2
            tableC[3] = TimeC1
    
            //ROUND 1
            jogo1.push(Grupo[0])
            jogo1.push(Grupo[2])
            jogo1.push(Grupo[1])
            jogo1.push(Grupo[3])
            //ROUND 2
            jogo2.push(Grupo[2])
            jogo2.push(Grupo[3])
            jogo2.push(Grupo[1])
            jogo2.push(Grupo[0])
            //ROUND 3
            jogo3.push(Grupo[3])
            jogo3.push(Grupo[0])
            jogo3.push(Grupo[2])
            jogo3.push(Grupo[1])
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
            jogo6.push(Grupo[3])
            jogo6.push(Grupo[1])
            jogo6.push(Grupo[2])
            jogo6.push(Grupo[0])
    
            sessionStorage.setItem('RoundC1', JSON.stringify(jogo1))
            sessionStorage.setItem('RoundC2', JSON.stringify(jogo2))
            sessionStorage.setItem('RoundC3', JSON.stringify(jogo3))
            sessionStorage.setItem('RoundC4', JSON.stringify(jogo4))
            sessionStorage.setItem('RoundC5', JSON.stringify(jogo5))
            sessionStorage.setItem('RoundC6', JSON.stringify(jogo6))
        }
        
        limparAtr(TimeC1)
        limparAtr(TimeC2)
        limparAtr(TimeC3)
        limparAtr(TimeC4)

        if(rodada1Time1 != null){
      
            for (let index = 2; index < 7; index++) {
                switch (index) {
                    case 2:
                        if(rodada2Time1 != null){
                            rodadasJogadasGC = 2
                        }
                        break;
    
                    case 3:
                        if(rodada3Time1 != null){
                            rodadasJogadasGC = 3
                        }
                        break;
    
                    case 4:
                        if(rodada4Time1 != null){
                            rodadasJogadasGC = 4
                        }
                        break;
    
                    case 5:
                        if(rodada5Time1 != null){
                            rodadasJogadasGC = 5
                        }
                        break;
    
                    case 6:
                        if(rodada6Time1 != null){
                            rodadasJogadasGC = 6
                        }
                        break;
                }
            }
    
            setTimeout(() => {
                insertPontos(rodada1Time1,rodada2Time1,rodada3Time1,rodada4Time1,rodada5Time1,rodada6Time1,TimeC1, false)
                insertPontos(rodada1Time2,rodada2Time2,rodada3Time2,rodada4Time2,rodada5Time2,rodada6Time2,TimeC2, false)
                insertPontos(rodada1Time3,rodada2Time3,rodada3Time3,rodada4Time3,rodada5Time3,rodada6Time3,TimeC3, false)
                insertPontos(rodada1Time4,rodada2Time4,rodada3Time4,rodada4Time4,rodada5Time4,rodada6Time4,TimeC4, true)
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
    
            switch (rodadasJogadasGC) {
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
                let tableC = []
                tableC[0] = TimeC1
                tableC[1] = TimeC2
                tableC[2] = TimeC3
                tableC[3] = TimeC4
    
                tableC.sort((a,b) => {
                    if(a.p > b.p ){
                        return 1
                    }
                    if(a.p == b.p ){
                        if(a.sg > 0){
                            if(a.sg > b.sg){
                                return 1
                            }
                        }
                        if(a.sg < 0){
                            if(a.sg > b.sg){
                                return 1
                            }
                        }
                    }else{
                        return -1
                    }
                })
        
                let c = 3
                for(let i = 8;i<12;i++){
                    tdTime[i].innerText = tableC[c].time
                    tdPontos[i].innerText = tableC[c].p
                    tdJogos[i].innerText = tableC[c].j
                    tdVitorias[i].innerText = tableC[c].v
                    tdEmpates[i].innerText = tableC[c].e
                    tdDerrotas[i].innerText = tableC[c].d
                    tdGolsPro[i].innerText = tableC[c].gp
                    tdGolsContra[i].innerText = tableC[c].gc
                    tdSaldoGols[i].innerText = tableC[c].sg
                    c--
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
            rodadasJogadasGC = rodada
            //tableC = []
            //tableC[0] = TimeC1
            //tableC[1] = TimeC2
            //tableC[2] = TimeC3
            //tableC[3] = TimeC4

            insertPontos(rodada1Time1,rodada2Time1,rodada3Time1,rodada4Time1,rodada5Time1,rodada6Time1,TimeC1, false)
            insertPontos(rodada1Time2,rodada2Time2,rodada3Time2,rodada4Time2,rodada5Time2,rodada6Time2,TimeC2, false)
            insertPontos(rodada1Time3,rodada2Time3,rodada3Time3,rodada4Time3,rodada5Time3,rodada6Time3,TimeC3, false)
            insertPontos(rodada1Time4,rodada2Time4,rodada3Time4,rodada4Time4,rodada5Time4,rodada6Time4,TimeC4, false)

            tableC.sort((a,b) => {
                if(a.p > b.p ){
                    return 1
                }
                if(a.p == b.p ){
                    if(a.sg == b.sg){
                        if(a.gp > b.gp){
                            return 1
                        }
                    }
                    if(a.sg > 0){
                        if(a.sg > b.sg){
                            return 1
                        }
                    }
                    if(a.sg < 0){
                        if(a.sg > b.sg){
                            return 1
                        }
                    }
                }else{
                    return -1
                }
            })

            let c = 3
            for(let i = 8;i<12;i++){
                tdTime[i].innerText = tableC[c].time
                tdPontos[i].innerText = tableC[c].p
                tdJogos[i].innerText = tableC[c].j
                tdVitorias[i].innerText = tableC[c].v
                tdEmpates[i].innerText = tableC[c].e
                tdDerrotas[i].innerText = tableC[c].d
                tdGolsPro[i].innerText = tableC[c].gp
                tdGolsContra[i].innerText = tableC[c].gc
                tdSaldoGols[i].innerText = tableC[c].sg
                c--
            }

            if(rodadasJogadasGC == 6){
                tableC[3].group = 'C'
                tableC[3].position = 1
                tableC[2].group = 'C'
                tableC[2].position = 2
    
                newOitavas(tableC[3], 4)
                newOitavas(tableC[2], 5)
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

            buttonSaveResult[12].addEventListener('click', function setResult(){
                let jogo = []
                let listResults = []
                listResults.push(resultsGames[48].value)
                listResults.push(resultsGames[49].value)
                listResults.push(resultsGames[50].value)
                listResults.push(resultsGames[51].value)

                if(saveResultsC1 != null){
                    console.log('Resultadores já registrados')
                    return
                }
                for(let i = 0; i<listResults.length; i++){
                    if(!listResults[i])return
                }
                for(let i = 48; i<52; i++){
                    resultsGames[i].setAttribute('readonly', 'readonly');
                }

                jogo[0] = listResults[0]
                jogo[1] = listResults[1]
                jogo[2] = listResults[2]
                jogo[3] = listResults[3]

                sessionStorage.setItem('JgFSC-1', JSON.stringify(jogo))
                saveResultsC1 = JSON.parse(sessionStorage.getItem('JgFSC-1'))
                
                limparAtr(TimeC1)
                limparAtr(TimeC2)
                limparAtr(TimeC3)
                limparAtr(TimeC4)
                insertResultsGame(listResults[0], listResults[1], TimeC1)
                insertResultsGame(listResults[1], listResults[0], TimeC3)
                insertResultsGame(listResults[2], listResults[3], TimeC2)
                insertResultsGame(listResults[3], listResults[2], TimeC4)
                sessionStorage.setItem('TIME1-RODC1', JSON.stringify(TimeC1))
                rodada1Time1 = JSON.parse(sessionStorage.getItem('TIME1-RODC1'))
                sessionStorage.setItem('TIME2-RODC1', JSON.stringify(TimeC2))
                rodada1Time2 = JSON.parse(sessionStorage.getItem('TIME2-RODC1'))
                sessionStorage.setItem('TIME3-RODC1', JSON.stringify(TimeC3))
                rodada1Time3 = JSON.parse(sessionStorage.getItem('TIME3-RODC1'))
                sessionStorage.setItem('TIME4-RODC1', JSON.stringify(TimeC4))
                rodada1Time4 = JSON.parse(sessionStorage.getItem('TIME4-RODC1'))
                classificacao(1)
                this.removeEventListener('click', setResult)
                this.classList.add('btn-disabled')
            })
            buttonSaveResult[13].addEventListener('click', function setResult(){
                let jogo = []
                let listResults = []
                listResults.push(resultsGames[52].value)
                listResults.push(resultsGames[53].value)
                listResults.push(resultsGames[54].value)
                listResults.push(resultsGames[55].value)

                if(saveResultsC1 == undefined){
                    console.log('Resultado do primeiro jogo não registrado')
                    return
                }
                if(saveResultsC2 != null){
                    console.log('Resultadores já registrados')
                    return
                }
    
                for(let i = 0; i<listResults.length; i++){
                    if(!listResults[i])return
                }
                for(let i = 52; i<56; i++){
                    resultsGames[i].setAttribute('readonly', 'readonly');
                }
    
                jogo[0] = Number(listResults[0])
                jogo[1] = Number(listResults[1])
                jogo[2] = Number(listResults[2])
                jogo[3] = Number(listResults[3])

                sessionStorage.setItem('JgFSC-2', JSON.stringify(jogo))
                saveResultsC2 = JSON.parse(sessionStorage.getItem('JgFSC-2'))

                limparAtr(TimeC1)
                limparAtr(TimeC2)
                limparAtr(TimeC3)
                limparAtr(TimeC4)
                insertResultsGame(listResults[0], listResults[1], TimeC3)
                insertResultsGame(listResults[1], listResults[0], TimeC4)
                insertResultsGame(listResults[2], listResults[3], TimeC2)
                insertResultsGame(listResults[3], listResults[2], TimeC1)
                sessionStorage.setItem('TIME1-RODC2', JSON.stringify(TimeC1))
                rodada2Time1 = JSON.parse(sessionStorage.getItem('TIME1-RODC2'))
                sessionStorage.setItem('TIME2-RODC2', JSON.stringify(TimeC2))
                rodada2Time2 = JSON.parse(sessionStorage.getItem('TIME2-RODC2'))
                sessionStorage.setItem('TIME3-RODC2', JSON.stringify(TimeC3))
                rodada2Time3 = JSON.parse(sessionStorage.getItem('TIME3-RODC2'))
                sessionStorage.setItem('TIME4-RODC2', JSON.stringify(TimeC4))
                rodada2Time4 = JSON.parse(sessionStorage.getItem('TIME4-RODC2'))
                classificacao(2)
                this.removeEventListener('click', setResult)
                this.classList.add('btn-disabled')
            })
            buttonSaveResult[14].addEventListener('click', function setResult(){
                let jogo = []
                let listResults = []
                listResults.push(resultsGames[56].value)
                listResults.push(resultsGames[57].value)
                listResults.push(resultsGames[58].value)
                listResults.push(resultsGames[59].value)

                if(saveResultsC2 == undefined){
                    console.log('Resultado do primeiro jogo não registrado')
                    return
                }
                if(saveResultsC3 != null){
                    console.log('Resultadores já registrados')
                    return
                }
    
                for(let i = 0; i<listResults.length; i++){
                    if(!listResults[i])return
                }
                for(let i = 56; i<60; i++){
                    resultsGames[i].setAttribute('readonly', 'readonly');
                }
                
                jogo[0] = Number(listResults[0])
                jogo[1] = Number(listResults[1])
                jogo[2] = Number(listResults[2])
                jogo[3] = Number(listResults[3])

                sessionStorage.setItem('JgFSC-3', JSON.stringify(jogo))
                saveResultsC3 = JSON.parse(sessionStorage.getItem('JgFSC-3'))

                limparAtr(TimeC1)
                limparAtr(TimeC2)
                limparAtr(TimeC3)
                limparAtr(TimeC4)
                insertResultsGame(listResults[0], listResults[1], TimeC4)
                insertResultsGame(listResults[1], listResults[0], TimeC1)
                insertResultsGame(listResults[2], listResults[3], TimeC3)
                insertResultsGame(listResults[3], listResults[2], TimeC2)
                sessionStorage.setItem('TIME1-RODC3', JSON.stringify(TimeC1))
                rodada3Time1 = JSON.parse(sessionStorage.getItem('TIME1-RODC3'))
                sessionStorage.setItem('TIME2-RODC3', JSON.stringify(TimeC2))
                rodada3Time2 = JSON.parse(sessionStorage.getItem('TIME2-RODC3'))
                sessionStorage.setItem('TIME3-RODC3', JSON.stringify(TimeC3))
                rodada3Time3 = JSON.parse(sessionStorage.getItem('TIME3-RODC3'))
                sessionStorage.setItem('TIME4-RODC3', JSON.stringify(TimeC4))
                rodada3Time4 = JSON.parse(sessionStorage.getItem('TIME4-RODC3'))
                classificacao(3)
                this.removeEventListener('click', setResult)
                this.classList.add('btn-disabled')
            })
            buttonSaveResult[15].addEventListener('click', function setResult(){
                let jogo = []
                let listResults = []
                listResults.push(resultsGames[60].value)
                listResults.push(resultsGames[61].value)
                listResults.push(resultsGames[62].value)
                listResults.push(resultsGames[63].value)

                if(saveResultsC3 == undefined){
                    console.log('Resultado do primeiro jogo não registrado')
                    return
                }
                if(saveResultsC4 != null){
                    console.log('Resultadores já registrados')
                    return
                }
    
                for(let i = 0; i<listResults.length; i++){
                    if(!listResults[i])return
                }
                for(let i = 60; i<64; i++){
                    resultsGames[i].setAttribute('readonly', 'readonly');
                }
                
                jogo[0] = Number(listResults[0])
                jogo[1] = Number(listResults[1])
                jogo[2] = Number(listResults[2])
                jogo[3] = Number(listResults[3])

                sessionStorage.setItem('JgFSC-4', JSON.stringify(jogo))
                saveResultsC4 = JSON.parse(sessionStorage.getItem('JgFSC-4'))

                limparAtr(TimeC1)
                limparAtr(TimeC2)
                limparAtr(TimeC3)
                limparAtr(TimeC4)
                insertResultsGame(listResults[0], listResults[1], TimeC1)
                insertResultsGame(listResults[1], listResults[0], TimeC4)
                insertResultsGame(listResults[2], listResults[3], TimeC2)
                insertResultsGame(listResults[3], listResults[2], TimeC3)
                sessionStorage.setItem('TIME1-RODC4', JSON.stringify(TimeC1))
                rodada4Time1 = JSON.parse(sessionStorage.getItem('TIME1-RODC4'))
                sessionStorage.setItem('TIME2-RODC4', JSON.stringify(TimeC2))
                rodada4Time2 = JSON.parse(sessionStorage.getItem('TIME2-RODC4'))
                sessionStorage.setItem('TIME3-RODC4', JSON.stringify(TimeC3))
                rodada4Time3 = JSON.parse(sessionStorage.getItem('TIME3-RODC4'))
                sessionStorage.setItem('TIME4-RODC4', JSON.stringify(TimeC4))
                rodada4Time4 = JSON.parse(sessionStorage.getItem('TIME4-RODC4'))
                classificacao(4)
                this.removeEventListener('click', setResult)
                this.classList.add('btn-disabled')
            })
            buttonSaveResult[16].addEventListener('click', function setResult(){
                let jogo = []
                let listResults = []
                listResults.push(resultsGames[64].value)
                listResults.push(resultsGames[65].value)
                listResults.push(resultsGames[66].value)
                listResults.push(resultsGames[67].value)

                if(saveResultsC4 == undefined){
                    console.log('Resultado do primeiro jogo não registrado')
                    return
                }
                if(saveResultsC5 != null){
                    console.log('Resultadores já registrados')
                    return
                }
    
                for(let i = 0; i<listResults.length; i++){
                    if(!listResults[i])return
                }
                for(let i = 64; i<68; i++){
                    resultsGames[i].setAttribute('readonly', 'readonly');
                }
                
                jogo[0] = Number(listResults[0])
                jogo[1] = Number(listResults[1])
                jogo[2] = Number(listResults[2])
                jogo[3] = Number(listResults[3])

                sessionStorage.setItem('JgFSC-5', JSON.stringify(jogo))
                saveResultsC5 = JSON.parse(sessionStorage.getItem('JgFSC-5'))
                
                limparAtr(TimeC1)
                limparAtr(TimeC2)
                limparAtr(TimeC3)
                limparAtr(TimeC4)
                insertResultsGame(listResults[0], listResults[1], TimeC1)
                insertResultsGame(listResults[1], listResults[0], TimeC2)
                insertResultsGame(listResults[2], listResults[3], TimeC4)
                insertResultsGame(listResults[3], listResults[2], TimeC3)
                sessionStorage.setItem('TIME1-RODC5', JSON.stringify(TimeC1))
                rodada5Time1 = JSON.parse(sessionStorage.getItem('TIME1-RODC5'))
                sessionStorage.setItem('TIME2-RODC5', JSON.stringify(TimeC2))
                rodada5Time2 = JSON.parse(sessionStorage.getItem('TIME2-RODC5'))
                sessionStorage.setItem('TIME3-RODC5', JSON.stringify(TimeC3))
                rodada5Time3 = JSON.parse(sessionStorage.getItem('TIME3-RODC5'))
                sessionStorage.setItem('TIME4-RODC5', JSON.stringify(TimeC4))
                rodada5Time4 = JSON.parse(sessionStorage.getItem('TIME4-RODC5'))
                classificacao(5)
                this.removeEventListener('click', setResult)
                this.classList.add('btn-disabled')
            })
            buttonSaveResult[17].addEventListener('click', function setResult(){
                let jogo = []
                let listResults = []
                listResults.push(resultsGames[68].value)
                listResults.push(resultsGames[69].value)
                listResults.push(resultsGames[70].value)
                listResults.push(resultsGames[71].value)

                if(saveResultsC5 == undefined){
                    console.log('Resultado do primeiro jogo não registrado')
                    return
                }
                if(saveResultsC6 != null){
                    console.log('Resultadores já registrados')
                    return
                }
    
                for(let i = 0; i<listResults.length; i++){
                    if(!listResults[i])return
                }
                for(let i = 68; i<72; i++){
                    resultsGames[i].setAttribute('readonly', 'readonly');
                }
                
                jogo[0] = Number(listResults[0])
                jogo[1] = Number(listResults[1])
                jogo[2] = Number(listResults[2])
                jogo[3] = Number(listResults[3])

                sessionStorage.setItem('JgFSC-6', JSON.stringify(jogo))
                saveResultsC6 = JSON.parse(sessionStorage.getItem('JgFSC-6'))

                limparAtr(TimeC1)
                limparAtr(TimeC2)
                limparAtr(TimeC3)
                limparAtr(TimeC4)
                insertResultsGame(listResults[0], listResults[1], TimeC4)
                insertResultsGame(listResults[1], listResults[0], TimeC2)
                insertResultsGame(listResults[2], listResults[3], TimeC3)
                insertResultsGame(listResults[3], listResults[2], TimeC1)
                sessionStorage.setItem('TIME1-RODC6', JSON.stringify(TimeC1))
                rodada6Time1 = JSON.parse(sessionStorage.getItem('TIME1-RODC6'))
                sessionStorage.setItem('TIME2-RODC6', JSON.stringify(TimeC2))
                rodada6Time2 = JSON.parse(sessionStorage.getItem('TIME2-RODC6'))
                sessionStorage.setItem('TIME3-RODC6', JSON.stringify(TimeC3))
                rodada6Time3 = JSON.parse(sessionStorage.getItem('TIME3-RODC6'))
                sessionStorage.setItem('TIME4-RODC6', JSON.stringify(TimeC4))
                rodada6Time4 = JSON.parse(sessionStorage.getItem('TIME4-RODC6'))
                classificacao(6)
                this.removeEventListener('click', setResult)
                this.classList.add('btn-disabled')
            })
        }

        jogo1 = JSON.parse(sessionStorage.getItem('RoundC1'))
        jogo2 = JSON.parse(sessionStorage.getItem('RoundC2'))
        jogo3 = JSON.parse(sessionStorage.getItem('RoundC3'))
        jogo4 = JSON.parse(sessionStorage.getItem('RoundC4'))
        jogo5 = JSON.parse(sessionStorage.getItem('RoundC5'))
        jogo6 = JSON.parse(sessionStorage.getItem('RoundC6'))

        setTimeout(addFunctionButton, 200)

    return(
        <div className="container-fases">
            <h2>grupo c</h2>
            <div className="container-table-jogos">
                <table id="grupoC" className="libertadores">
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
                                    {tableC != null
                                        ?
                                            tableC[3].time
                                        :
                                            ''
                                    }
                                </abbr>
                            </td>
                            <td className="cedula-pontos">
                                <b>
                                    {tableC != null
                                        ?
                                            tableC[3].p
                                        :
                                            0
                                    }
                                </b>
                            </td>
                            <td className="cedula-jogos">
                                {tableC != null
                                    ?
                                        tableC[3].j
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-vitorias">
                                {tableC != null
                                    ?
                                        tableC[3].v
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-empates">
                                {tableC != null
                                    ?
                                        tableC[3].e
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-derrotas">
                                {tableC != null
                                    ?
                                        tableC[3].d
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-gols-pro">
                                {tableC != null
                                    ?
                                        tableC[3].gp
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-gols-contra">
                                {tableC != null
                                    ?
                                        tableC[3].gc
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-saldo-gols">
                                {tableC != null
                                    ?
                                        tableC[3].sg
                                    :
                                        0
                                }
                            </td>
                        </tr>
                        <tr>
                            <td rowSpan={1} className="classificado">2</td>
                            <td className="cedula-time2">
                                <abbr className="cedula-time">
                                    {tableC != null
                                        ?
                                            tableC[2].time
                                        :
                                            ''
                                    }                          
                                </abbr>
                            </td>
                            <td className="cedula-pontos">
                                <b>
                                    {tableC != null
                                        ?
                                            tableC[2].p
                                        :
                                            0
                                    }
                                </b>
                            </td>
                            <td className="cedula-jogos">
                                {tableC != null
                                    ?
                                        tableC[2].j
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-vitorias">
                                {tableC != null
                                    ?
                                        tableC[2].v
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-empates">
                                {tableC != null
                                    ?
                                        tableC[2].e
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-derrotas">
                                {tableC != null
                                    ?
                                        tableC[2].d
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-gols-pro">
                                {tableC != null
                                    ?
                                        tableC[2].gp
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-gols-contra">
                                {tableC != null
                                    ?
                                        tableC[2].gc
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-saldo-gols">
                                {tableC != null
                                    ?
                                        tableC[2].sg
                                    :
                                        0
                                }
                            </td>
                        </tr>
                        <tr>
                            <td rowSpan={1} className="sul-americana">3</td>
                            <td className="cedula-time3">
                                <abbr className="cedula-time">
                                    {tableC != null
                                        ?
                                            tableC[1].time
                                        :
                                            ''
                                    }                                    
                                </abbr>
                            </td>
                            <td className="cedula-pontos">
                                <b>
                                    {tableC != null
                                        ?
                                            tableC[1].p
                                        :
                                            0
                                    }               
                                </b>
                            </td>
                            <td className="cedula-jogos">
                                {tableC != null
                                    ?
                                        tableC[1].p
                                    :
                                        0
                                }        
                            </td>
                            <td className="cedula-vitorias">
                                {tableC != null
                                    ?
                                        tableC[1].v
                                    :
                                        0
                                }        
                            </td>
                            <td className="cedula-empates">
                                {tableC != null
                                    ?
                                        tableC[1].e
                                    :
                                        0
                                }        
                            </td>
                            <td className="cedula-derrotas">
                                {tableC != null
                                    ?
                                        tableC[1].d
                                    :
                                        0
                                }        
                            </td>
                            <td className="cedula-gols-pro">
                                {tableC != null
                                    ?
                                        tableC[1].gp
                                    :
                                        0
                                }        
                            </td>
                            <td className="cedula-gols-contra">
                                {tableC != null
                                    ?
                                        tableC[1].gc
                                    :
                                        0
                                }        
                            </td>
                            <td className="cedula-saldo-gols">
                                {tableC != null
                                    ?
                                        tableC[1].sg
                                    :
                                        0
                                }        
                            </td>
                        </tr>
                        <tr>
                            <td rowSpan={1} className="eliminado">4</td>
                            <td className="cedula-time4">
                                <abbr className="cedula-time">
                                    {tableC != null
                                        ?
                                            tableC[0].time
                                        :
                                            ''
                                    }                                        
                                </abbr>
                            </td>
                            <td className="cedula-pontos">
                                <b>
                                    {tableC != null
                                        ?
                                            tableC[0].p
                                        :
                                            0
                                    }                                        
                                </b>
                            </td>
                            <td className="cedula-jogos">
                                {tableC != null
                                    ?
                                        tableC[0].j
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-vitorias">
                                {tableC != null
                                    ?
                                        tableC[0].v
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-empates">
                                {tableC != null
                                    ?
                                        tableC[0].e
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-derrotas">
                                {tableC != null
                                    ?
                                        tableC[0].d
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-gols-pro">
                                {tableC != null
                                    ?
                                        tableC[0].gp
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-gols-contra">
                                {tableC != null
                                    ?
                                        tableC[0].gc
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-saldo-gols">
                                {tableC != null
                                    ?
                                        tableC[0].sg
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
                                                        saveResultsC1 != null 
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsC1[0]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }                                                    
                                                    <span>X</span>
                                                    {
                                                        saveResultsC1 != null 
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsC1[1]}
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
                                                        saveResultsC1 != null 
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsC1[2]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResultsC1 != null 
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsC1[3]}
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
                                                        saveResultsC2 != null
                                                        ?
                                                            <input 
                                                                type="text" 
                                                                className="input-time-resultado" 
                                                                value={saveResultsC2[0]}
                                                                readOnly
                                                            />
                                                        :
                                                            <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResultsC2 != null
                                                        ?
                                                            <input 
                                                                type="text" 
                                                                className="input-time-resultado" 
                                                                value={saveResultsC2[1]}
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
                                                        saveResultsC2 != null
                                                        ?
                                                            <input 
                                                                type="text" 
                                                                className="input-time-resultado" 
                                                                value={saveResultsC2[2]}
                                                                readOnly
                                                            />
                                                        :
                                                            <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResultsC2 != null
                                                        ?
                                                            <input 
                                                                type="text" 
                                                                className="input-time-resultado" 
                                                                value={saveResultsC2[3]}
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
                                                        saveResultsC3 != null
                                                        ?
                                                            <input 
                                                                type="text" 
                                                                className="input-time-resultado" 
                                                                value={saveResultsC3[0]}
                                                                readOnly
                                                            />
                                                        :
                                                            <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResultsC3 != null
                                                        ?
                                                            <input 
                                                                type="text" 
                                                                className="input-time-resultado" 
                                                                value={saveResultsC3[1]}
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
                                                        saveResultsC3 != null
                                                        ?
                                                            <input 
                                                                type="text" 
                                                                className="input-time-resultado" 
                                                                value={saveResultsC3[2]}
                                                                readOnly
                                                            />
                                                        :
                                                            <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResultsC3 != null
                                                        ?
                                                            <input 
                                                                type="text" 
                                                                className="input-time-resultado" 
                                                                value={saveResultsC3[3]}
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
                                                        saveResultsC4 != null
                                                        ?
                                                            <input 
                                                                type="text" 
                                                                className="input-time-resultado" 
                                                                value={saveResultsC4[0]}
                                                                readOnly
                                                            />
                                                        :
                                                            <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResultsC4 != null
                                                        ?
                                                            <input 
                                                                type="text" 
                                                                className="input-time-resultado" 
                                                                value={saveResultsC4[1]}
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
                                                        saveResultsC4 != null
                                                        ?
                                                            <input 
                                                                type="text" 
                                                                className="input-time-resultado" 
                                                                value={saveResultsC4[2]}
                                                                readOnly
                                                            />
                                                        :
                                                            <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResultsC4 != null
                                                        ?
                                                            <input 
                                                                type="text" 
                                                                className="input-time-resultado" 
                                                                value={saveResultsC4[3]}
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
                                                        saveResultsC5 != null
                                                        ?
                                                            <input 
                                                                type="text" 
                                                                className="input-time-resultado" 
                                                                value={saveResultsC5[0]}
                                                                readOnly
                                                            />
                                                        :
                                                            <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResultsC5 != null
                                                        ?
                                                            <input 
                                                                type="text" 
                                                                className="input-time-resultado" 
                                                                value={saveResultsC5[1]}
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
                                                        saveResultsC5 != null
                                                        ?
                                                            <input 
                                                                type="text" 
                                                                className="input-time-resultado" 
                                                                value={saveResultsC5[2]}
                                                                readOnly
                                                            />
                                                        :
                                                            <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResultsC5 != null
                                                        ?
                                                            <input 
                                                                type="text" 
                                                                className="input-time-resultado" 
                                                                value={saveResultsC5[3]}
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
                                                        saveResultsC6 != null
                                                        ?
                                                            <input 
                                                                type="text" 
                                                                className="input-time-resultado" 
                                                                value={saveResultsC6[0]}
                                                                readOnly
                                                            />
                                                        :
                                                            <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResultsC6 != null
                                                        ?
                                                            <input 
                                                                type="text" 
                                                                className="input-time-resultado" 
                                                                value={saveResultsC6[1]}
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
                                                        saveResultsC6 != null
                                                        ?
                                                            <input 
                                                                type="text" 
                                                                className="input-time-resultado" 
                                                                value={saveResultsC6[2]}
                                                                readOnly
                                                            />
                                                        :
                                                            <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResultsC6 != null
                                                        ?
                                                            <input 
                                                                type="text" 
                                                                className="input-time-resultado" 
                                                                value={saveResultsC6[3]}
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