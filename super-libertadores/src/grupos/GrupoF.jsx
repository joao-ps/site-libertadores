import React, { useRef, useState, useContext } from "react";
 // Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

 // Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import '../styles/grupos.sass'

import { Navigation } from "swiper";

import { FaseFinal } from "../componentes/api/getTeams";

export function GrupoF({group}){
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
    const TimeF1 =
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
        const TimeF2 =
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
        const TimeF3 =
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
        const TimeF4 =
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
        let tableF

        let saveResultsF1
        let saveResultsF2
        let saveResultsF3
        let saveResultsF4
        let saveResultsF5
        let saveResultsF6

        saveResultsF1 = JSON.parse(sessionStorage.getItem('JgFSF-1'))
        saveResultsF2 = JSON.parse(sessionStorage.getItem('JgFSF-2'))
        saveResultsF3 = JSON.parse(sessionStorage.getItem('JgFSF-3'))
        saveResultsF4 = JSON.parse(sessionStorage.getItem('JgFSF-4'))
        saveResultsF5 = JSON.parse(sessionStorage.getItem('JgFSF-5'))
        saveResultsF6 = JSON.parse(sessionStorage.getItem('JgFSF-6'))

        let rodadasJogadasGF = 1

        let rodada1Time1 = JSON.parse(sessionStorage.getItem('TIME1-RODF1'))
        let rodada2Time1 = JSON.parse(sessionStorage.getItem('TIME1-RODF2'))
        let rodada3Time1 = JSON.parse(sessionStorage.getItem('TIME1-RODF3'))
        let rodada4Time1 = JSON.parse(sessionStorage.getItem('TIME1-RODF4'))
        let rodada5Time1 = JSON.parse(sessionStorage.getItem('TIME1-RODF5'))
        let rodada6Time1 = JSON.parse(sessionStorage.getItem('TIME1-RODF6'))

        let rodada1Time2 = JSON.parse(sessionStorage.getItem('TIME2-RODF1'))
        let rodada2Time2 = JSON.parse(sessionStorage.getItem('TIME2-RODF2'))
        let rodada3Time2 = JSON.parse(sessionStorage.getItem('TIME2-RODF3'))
        let rodada4Time2 = JSON.parse(sessionStorage.getItem('TIME2-RODF4'))
        let rodada5Time2 = JSON.parse(sessionStorage.getItem('TIME2-RODF5'))
        let rodada6Time2 = JSON.parse(sessionStorage.getItem('TIME2-RODF6'))

        let rodada1Time3 = JSON.parse(sessionStorage.getItem('TIME3-RODF1'))
        let rodada2Time3 = JSON.parse(sessionStorage.getItem('TIME3-RODF2'))
        let rodada3Time3 = JSON.parse(sessionStorage.getItem('TIME3-RODF3'))
        let rodada4Time3 = JSON.parse(sessionStorage.getItem('TIME3-RODF4'))
        let rodada5Time3 = JSON.parse(sessionStorage.getItem('TIME3-RODF5'))
        let rodada6Time3 = JSON.parse(sessionStorage.getItem('TIME3-RODF6'))

        let rodada1Time4 = JSON.parse(sessionStorage.getItem('TIME4-RODF1'))
        let rodada2Time4 = JSON.parse(sessionStorage.getItem('TIME4-RODF2'))
        let rodada3Time4 = JSON.parse(sessionStorage.getItem('TIME4-RODF3'))
        let rodada4Time4 = JSON.parse(sessionStorage.getItem('TIME4-RODF4'))
        let rodada5Time4 = JSON.parse(sessionStorage.getItem('TIME4-RODF5'))
        let rodada6Time4 = JSON.parse(sessionStorage.getItem('TIME4-RODF6'))

        if(Grupo != null){
            TimeF1.time = Grupo[0].time
            TimeF2.time = Grupo[1].time
            TimeF3.time = Grupo[2].time
            TimeF4.time = Grupo[3].time
            TimeF1.placar = Grupo[0].namePlacar
            TimeF2.placar = Grupo[1].namePlacar
            TimeF3.placar = Grupo[2].namePlacar
            TimeF4.placar = Grupo[3].namePlacar
            TimeF1.estadio = Grupo[0].estadio
            TimeF2.estadio = Grupo[1].estadio
            TimeF3.estadio = Grupo[2].estadio
            TimeF4.estadio = Grupo[3].estadio
            TimeF1.url = Grupo[0].url
            TimeF2.url = Grupo[1].url
            TimeF3.url = Grupo[2].url
            TimeF4.url = Grupo[3].url
            tableF = []
            tableF[0] = TimeF4
            tableF[1] = TimeF3
            tableF[2] = TimeF2
            tableF[3] = TimeF1
    
            //ROUND 1
            jogo1.push(Grupo[1])
            jogo1.push(Grupo[2])
            jogo1.push(Grupo[0])
            jogo1.push(Grupo[3])
            //ROUND 2
            jogo2.push(Grupo[3])
            jogo2.push(Grupo[1])
            jogo2.push(Grupo[2])
            jogo2.push(Grupo[0])
            //ROUND 3
            jogo3.push(Grupo[1])
            jogo3.push(Grupo[0])
            jogo3.push(Grupo[3])
            jogo3.push(Grupo[2])
            //ROUND 4
            jogo4.push(Grupo[2])
            jogo4.push(Grupo[3])
            jogo4.push(Grupo[0])
            jogo4.push(Grupo[1])
            //ROUND 5
            jogo5.push(Grupo[0])
            jogo5.push(Grupo[2])
            jogo5.push(Grupo[1])
            jogo5.push(Grupo[3])
            //ROUND 6
            jogo6.push(Grupo[3])
            jogo6.push(Grupo[0])
            jogo6.push(Grupo[2])
            jogo6.push(Grupo[1])
    
            sessionStorage.setItem('RoundF1', JSON.stringify(jogo1))
            sessionStorage.setItem('RoundF2', JSON.stringify(jogo2))
            sessionStorage.setItem('RoundF3', JSON.stringify(jogo3))
            sessionStorage.setItem('RoundF4', JSON.stringify(jogo4))
            sessionStorage.setItem('RoundF5', JSON.stringify(jogo5))
            sessionStorage.setItem('RoundF6', JSON.stringify(jogo6))
        }

        limparAtr(TimeF1)
        limparAtr(TimeF2)
        limparAtr(TimeF3)
        limparAtr(TimeF4)

        if(rodada1Time1 != null){
      
            for (let index = 2; index < 7; index++) {
                switch (index) {
                    case 2:
                        if(rodada2Time1 != null){
                            rodadasJogadasGF = 2
                        }
                        break;
    
                    case 3:
                        if(rodada3Time1 != null){
                            rodadasJogadasGF = 3
                        }
                        break;
    
                    case 4:
                        if(rodada4Time1 != null){
                            rodadasJogadasGF = 4
                        }
                        break;
    
                    case 5:
                        if(rodada5Time1 != null){
                            rodadasJogadasGF = 5
                        }
                        break;
    
                    case 6:
                        if(rodada6Time1 != null){
                            rodadasJogadasGF = 6
                        }
                        break;
                }
            }
    
            setTimeout(() => {
                insertPontos(rodada1Time1,rodada2Time1,rodada3Time1,rodada4Time1,rodada5Time1,rodada6Time1,TimeF1, false)
                insertPontos(rodada1Time2,rodada2Time2,rodada3Time2,rodada4Time2,rodada5Time2,rodada6Time2,TimeF2, false)
                insertPontos(rodada1Time3,rodada2Time3,rodada3Time3,rodada4Time3,rodada5Time3,rodada6Time3,TimeF3, false)
                insertPontos(rodada1Time4,rodada2Time4,rodada3Time4,rodada4Time4,rodada5Time4,rodada6Time4,TimeF4, true)
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
    
            switch (rodadasJogadasGF) {
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
                let tableF = []
                tableF[0] = TimeF1
                tableF[1] = TimeF2
                tableF[2] = TimeF3
                tableF[3] = TimeF4
    
                tableF.sort((a,b) => {
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
        
                let f = 3
                for(let i = 20;i<24;i++){
                    tdTime[i].innerText = tableF[f].time
                    tdPontos[i].innerText = tableF[f].p
                    tdJogos[i].innerText = tableF[f].j
                    tdVitorias[i].innerText = tableF[f].v
                    tdEmpates[i].innerText = tableF[f].e
                    tdDerrotas[i].innerText = tableF[f].d
                    tdGolsPro[i].innerText = tableF[f].gp
                    tdGolsContra[i].innerText = tableF[f].gc
                    tdSaldoGols[i].innerText = tableF[f].sg
                    f--
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
            rodadasJogadasGF = rodada
            //tableF = []
            //tableF[0] = TimeF1
            //tableF[1] = TimeF2
            //tableF[2] = TimeF3
            //tableF[3] = TimeF4

            insertPontos(rodada1Time1,rodada2Time1,rodada3Time1,rodada4Time1,rodada5Time1,rodada6Time1,TimeF1, false)
            insertPontos(rodada1Time2,rodada2Time2,rodada3Time2,rodada4Time2,rodada5Time2,rodada6Time2,TimeF2, false)
            insertPontos(rodada1Time3,rodada2Time3,rodada3Time3,rodada4Time3,rodada5Time3,rodada6Time3,TimeF3, false)
            insertPontos(rodada1Time4,rodada2Time4,rodada3Time4,rodada4Time4,rodada5Time4,rodada6Time4,TimeF4, false)

            tableF.sort((a,b) => {
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

            let f = 3
            for(let i = 20;i<24;i++){
                tdTime[i].innerText = tableF[f].time
                tdPontos[i].innerText = tableF[f].p
                tdJogos[i].innerText = tableF[f].j
                tdVitorias[i].innerText = tableF[f].v
                tdEmpates[i].innerText = tableF[f].e
                tdDerrotas[i].innerText = tableF[f].d
                tdGolsPro[i].innerText = tableF[f].gp
                tdGolsContra[i].innerText = tableF[f].gc
                tdSaldoGols[i].innerText = tableF[f].sg
                f--
            }

            if(rodadasJogadasGF == 6){
                tableF[3].group = 'F'
                tableF[3].position = 1
                tableF[2].group = 'F'
                tableF[2].position = 2
                
                newOitavas(tableF[3], 10)
                newOitavas(tableF[2], 11)
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

            buttonSaveResult[30].addEventListener('click', function setResult(){
                let jogo = []
                let listResults = []
                listResults.push(resultsGames[120].value)
                listResults.push(resultsGames[121].value)
                listResults.push(resultsGames[122].value)
                listResults.push(resultsGames[123].value)
    
                if(saveResultsF1 != null){
                    console.log('Resultadores já registrados')
                    return
                }
                for(let i = 0; i<listResults.length; i++){
                    if(!listResults[i])return
                }
                for(let i = 120; i<124; i++){
                    resultsGames[i].setAttribute('readonly', 'readonly');
                }
                
                jogo[0] = listResults[0]
                jogo[1] = listResults[1]
                jogo[2] = listResults[2]
                jogo[3] = listResults[3]

                sessionStorage.setItem('JgFSF-1', JSON.stringify(jogo))
                saveResultsF1 = JSON.parse(sessionStorage.getItem('JgFSF-1'))
                
                limparAtr(TimeF1)
                limparAtr(TimeF2)
                limparAtr(TimeF3)
                limparAtr(TimeF4)
                insertResultsGame(listResults[0], listResults[1], TimeF2)
                insertResultsGame(listResults[1], listResults[0], TimeF3)
                insertResultsGame(listResults[2], listResults[3], TimeF1)
                insertResultsGame(listResults[3], listResults[2], TimeF4)
                sessionStorage.setItem('TIME1-RODF1', JSON.stringify(TimeF1))
                rodada1Time1 = JSON.parse(sessionStorage.getItem('TIME1-RODF1'))
                sessionStorage.setItem('TIME2-RODF1', JSON.stringify(TimeF2))
                rodada1Time2 = JSON.parse(sessionStorage.getItem('TIME2-RODF1'))
                sessionStorage.setItem('TIME3-RODF1', JSON.stringify(TimeF3))
                rodada1Time3 = JSON.parse(sessionStorage.getItem('TIME3-RODF1'))
                sessionStorage.setItem('TIME4-RODF1', JSON.stringify(TimeF4))
                rodada1Time4 = JSON.parse(sessionStorage.getItem('TIME4-RODF1'))
                classificacao(1)
                this.removeEventListener('click', setResult)
                this.classList.add('btn-disabled')
            })
            buttonSaveResult[31].addEventListener('click', function setResult(){
                let jogo = []
                let listResults = []
                listResults.push(resultsGames[124].value)
                listResults.push(resultsGames[125].value)
                listResults.push(resultsGames[126].value)
                listResults.push(resultsGames[127].value)

                if(saveResultsF1 == undefined){
                    console.log('Resultado do primeiro jogo não registrado')
                    return
                }
                if(saveResultsF2 != null){
                    console.log('Resultadores já registrados')
                    return
                }
    
                for(let i = 0; i<listResults.length; i++){
                    if(!listResults[i])return
                }
                for(let i = 124; i<128; i++){
                    resultsGames[i].setAttribute('readonly', 'readonly');
                }
    
                jogo[0] = Number(listResults[0])
                jogo[1] = Number(listResults[1])
                jogo[2] = Number(listResults[2])
                jogo[3] = Number(listResults[3])

                sessionStorage.setItem('JgFSF-2', JSON.stringify(jogo))
                saveResultsF2 = JSON.parse(sessionStorage.getItem('JgFSF-2'))

                limparAtr(TimeF1)
                limparAtr(TimeF2)
                limparAtr(TimeF3)
                limparAtr(TimeF4)
                insertResultsGame(listResults[0], listResults[1], TimeF4)
                insertResultsGame(listResults[1], listResults[0], TimeF2)
                insertResultsGame(listResults[2], listResults[3], TimeF3)
                insertResultsGame(listResults[3], listResults[2], TimeF1)
                sessionStorage.setItem('TIME1-RODF2', JSON.stringify(TimeF1))
                rodada2Time1 = JSON.parse(sessionStorage.getItem('TIME1-RODF2'))
                sessionStorage.setItem('TIME2-RODF2', JSON.stringify(TimeF2))
                rodada2Time2 = JSON.parse(sessionStorage.getItem('TIME2-RODF2'))
                sessionStorage.setItem('TIME3-RODF2', JSON.stringify(TimeF3))
                rodada2Time3 = JSON.parse(sessionStorage.getItem('TIME3-RODF2'))
                sessionStorage.setItem('TIME4-RODF2', JSON.stringify(TimeF4))
                rodada2Time4 = JSON.parse(sessionStorage.getItem('TIME4-RODF2'))
                classificacao(2)
                this.removeEventListener('click', setResult)
                this.classList.add('btn-disabled')
            })
            buttonSaveResult[32].addEventListener('click', function setResult(){
                let jogo = []
                let listResults = []
                listResults.push(resultsGames[128].value)
                listResults.push(resultsGames[129].value)
                listResults.push(resultsGames[130].value)
                listResults.push(resultsGames[131].value)

                if(saveResultsF2 == undefined){
                    console.log('Resultado do primeiro jogo não registrado')
                    return
                }
                if(saveResultsF3 != null){
                    console.log('Resultadores já registrados')
                    return
                }
    
                for(let i = 0; i<listResults.length; i++){
                    if(!listResults[i])return
                }
                for(let i = 128; i<132; i++){
                    resultsGames[i].setAttribute('readonly', 'readonly');
                }
    
                jogo[0] = Number(listResults[0])
                jogo[1] = Number(listResults[1])
                jogo[2] = Number(listResults[2])
                jogo[3] = Number(listResults[3])

                sessionStorage.setItem('JgFSF-3', JSON.stringify(jogo))
                saveResultsF3 = JSON.parse(sessionStorage.getItem('JgFSF-3'))

                limparAtr(TimeF1)
                limparAtr(TimeF2)
                limparAtr(TimeF3)
                limparAtr(TimeF4)
                insertResultsGame(listResults[0], listResults[1], TimeF2)
                insertResultsGame(listResults[1], listResults[0], TimeF1)
                insertResultsGame(listResults[2], listResults[3], TimeF4)
                insertResultsGame(listResults[3], listResults[2], TimeF3)
                sessionStorage.setItem('TIME1-RODF3', JSON.stringify(TimeF1))
                rodada3Time1 = JSON.parse(sessionStorage.getItem('TIME1-RODF3'))
                sessionStorage.setItem('TIME2-RODF3', JSON.stringify(TimeF2))
                rodada3Time2 = JSON.parse(sessionStorage.getItem('TIME2-RODF3'))
                sessionStorage.setItem('TIME3-RODF3', JSON.stringify(TimeF3))
                rodada3Time3 = JSON.parse(sessionStorage.getItem('TIME3-RODF3'))
                sessionStorage.setItem('TIME4-RODF3', JSON.stringify(TimeF4))
                rodada3Time4 = JSON.parse(sessionStorage.getItem('TIME4-RODF3'))
                classificacao(3)
                this.removeEventListener('click', setResult)
                this.classList.add('btn-disabled')
            })
            buttonSaveResult[33].addEventListener('click', function setResult(){
                let jogo = []
                let listResults = []
                listResults.push(resultsGames[132].value)
                listResults.push(resultsGames[133].value)
                listResults.push(resultsGames[134].value)
                listResults.push(resultsGames[135].value)

                if(saveResultsF3 == undefined){
                    console.log('Resultado do primeiro jogo não registrado')
                    return
                }
                if(saveResultsF4 != null){
                    console.log('Resultadores já registrados')
                    return
                }
    
                for(let i = 0; i<listResults.length; i++){
                    if(!listResults[i])return
                }
                for(let i = 132; i<136; i++){
                    resultsGames[i].setAttribute('readonly', 'readonly');
                }
    
                jogo[0] = Number(listResults[0])
                jogo[1] = Number(listResults[1])
                jogo[2] = Number(listResults[2])
                jogo[3] = Number(listResults[3])

                sessionStorage.setItem('JgFSF-4', JSON.stringify(jogo))
                saveResultsF4 = JSON.parse(sessionStorage.getItem('JgFSF-4'))

                limparAtr(TimeF1)
                limparAtr(TimeF2)
                limparAtr(TimeF3)
                limparAtr(TimeF4)
                insertResultsGame(listResults[0], listResults[1], TimeF3)
                insertResultsGame(listResults[1], listResults[0], TimeF4)
                insertResultsGame(listResults[2], listResults[3], TimeF1)
                insertResultsGame(listResults[3], listResults[2], TimeF2)
                sessionStorage.setItem('TIME1-RODF4', JSON.stringify(TimeF1))
                rodada4Time1 = JSON.parse(sessionStorage.getItem('TIME1-RODF4'))
                sessionStorage.setItem('TIME2-RODF4', JSON.stringify(TimeF2))
                rodada4Time2 = JSON.parse(sessionStorage.getItem('TIME2-RODF4'))
                sessionStorage.setItem('TIME3-RODF4', JSON.stringify(TimeF3))
                rodada4Time3 = JSON.parse(sessionStorage.getItem('TIME3-RODF4'))
                sessionStorage.setItem('TIME4-RODF4', JSON.stringify(TimeF4))
                rodada4Time4 = JSON.parse(sessionStorage.getItem('TIME4-RODF4'))
                classificacao(4)
                this.removeEventListener('click', setResult)
                this.classList.add('btn-disabled')
            })
            buttonSaveResult[34].addEventListener('click', function setResult(){
                let jogo = []
                let listResults = []
                listResults.push(resultsGames[136].value)
                listResults.push(resultsGames[137].value)
                listResults.push(resultsGames[138].value)
                listResults.push(resultsGames[139].value)
    
                if(saveResultsF4 == undefined){
                    console.log('Resultado do primeiro jogo não registrado')
                    return
                }
                if(saveResultsF5 != null){
                    console.log('Resultadores já registrados')
                    return
                }

                for(let i = 0; i<listResults.length; i++){
                    if(!listResults[i])return
                }
                for(let i = 136; i<140; i++){
                    resultsGames[i].setAttribute('readonly', 'readonly');
                }
    
                jogo[0] = Number(listResults[0])
                jogo[1] = Number(listResults[1])
                jogo[2] = Number(listResults[2])
                jogo[3] = Number(listResults[3])

                sessionStorage.setItem('JgFSF-5', JSON.stringify(jogo))
                saveResultsF5 = JSON.parse(sessionStorage.getItem('JgFSF-5'))
                
                limparAtr(TimeF1)
                limparAtr(TimeF2)
                limparAtr(TimeF3)
                limparAtr(TimeF4)
                insertResultsGame(listResults[0], listResults[1], TimeF1)
                insertResultsGame(listResults[1], listResults[0], TimeF3)
                insertResultsGame(listResults[2], listResults[3], TimeF2)
                insertResultsGame(listResults[3], listResults[2], TimeF4)
                sessionStorage.setItem('TIME1-RODF5', JSON.stringify(TimeF1))
                rodada5Time1 = JSON.parse(sessionStorage.getItem('TIME1-RODF5'))
                sessionStorage.setItem('TIME2-RODF5', JSON.stringify(TimeF2))
                rodada5Time2 = JSON.parse(sessionStorage.getItem('TIME2-RODF5'))
                sessionStorage.setItem('TIME3-RODF5', JSON.stringify(TimeF3))
                rodada5Time3 = JSON.parse(sessionStorage.getItem('TIME3-RODF5'))
                sessionStorage.setItem('TIME4-RODF5', JSON.stringify(TimeF4))
                rodada5Time4 = JSON.parse(sessionStorage.getItem('TIME4-RODF5'))
                classificacao(5)
                this.removeEventListener('click', setResult)
                this.classList.add('btn-disabled')
            })
            buttonSaveResult[35].addEventListener('click', function setResult(){
                let jogo = []
                let listResults = []
                listResults.push(resultsGames[140].value)
                listResults.push(resultsGames[141].value)
                listResults.push(resultsGames[142].value)
                listResults.push(resultsGames[143].value)

                if(saveResultsF5 == undefined){
                    console.log('Resultado do primeiro jogo não registrado')
                    return
                }
                if(saveResultsF6 != null){
                    console.log('Resultadores já registrados')
                    return
                }
    
                for(let i = 0; i<listResults.length; i++){
                    if(!listResults[i])return
                }
                for(let i = 140; i<144; i++){
                    resultsGames[i].setAttribute('readonly', 'readonly');
                }
    
                jogo[0] = Number(listResults[0])
                jogo[1] = Number(listResults[1])
                jogo[2] = Number(listResults[2])
                jogo[3] = Number(listResults[3])

                sessionStorage.setItem('JgFSF-6', JSON.stringify(jogo))
                saveResultsF6 = JSON.parse(sessionStorage.getItem('JgFSF-6'))

                limparAtr(TimeF1)
                limparAtr(TimeF2)
                limparAtr(TimeF3)
                limparAtr(TimeF4)
                insertResultsGame(listResults[0], listResults[1], TimeF4)
                insertResultsGame(listResults[1], listResults[0], TimeF1)
                insertResultsGame(listResults[2], listResults[3], TimeF3)
                insertResultsGame(listResults[3], listResults[2], TimeF2)
                sessionStorage.setItem('TIME1-RODF6', JSON.stringify(TimeF1))
                rodada6Time1 = JSON.parse(sessionStorage.getItem('TIME1-RODF6'))
                sessionStorage.setItem('TIME2-RODF6', JSON.stringify(TimeF2))
                rodada6Time2 = JSON.parse(sessionStorage.getItem('TIME2-RODF6'))
                sessionStorage.setItem('TIME3-RODF6', JSON.stringify(TimeF3))
                rodada6Time3 = JSON.parse(sessionStorage.getItem('TIME3-RODF6'))
                sessionStorage.setItem('TIME4-RODF6', JSON.stringify(TimeF4))
                rodada6Time4 = JSON.parse(sessionStorage.getItem('TIME4-RODF6'))
                classificacao(6)
                this.removeEventListener('click', setResult)
                this.classList.add('btn-disabled')
            })
        }

        jogo1 = JSON.parse(sessionStorage.getItem('RoundF1'))
        jogo2 = JSON.parse(sessionStorage.getItem('RoundF2'))
        jogo3 = JSON.parse(sessionStorage.getItem('RoundF3'))
        jogo4 = JSON.parse(sessionStorage.getItem('RoundF4'))
        jogo5 = JSON.parse(sessionStorage.getItem('RoundF5'))
        jogo6 = JSON.parse(sessionStorage.getItem('RoundF6'))

        setTimeout(addFunctionButton, 200)

    return(
        <div className="container-fases">
            <h2>grupo f</h2>
            <div className="container-table-jogos">
                <table id="grupoF" className="libertadores">
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
                                    {tableF != null
                                        ?
                                            tableF[3].time
                                        :
                                            ''
                                    }
                                </abbr>
                            </td>
                            <td className="cedula-pontos">
                                <b>
                                    {tableF != null
                                        ?
                                            tableF[3].p
                                        :
                                            0
                                    }       
                                </b>
                            </td>
                            <td className="cedula-jogos">
                                {tableF != null
                                    ?
                                        tableF[3].j
                                    :
                                        0
                                }       
                            </td>
                            <td className="cedula-vitorias">
                                {tableF != null
                                    ?
                                        tableF[3].v
                                    :
                                        0
                                }       
                            </td>
                            <td className="cedula-empates">
                                {tableF != null
                                    ?
                                        tableF[3].e
                                    :
                                        0
                                }       
                            </td>
                            <td className="cedula-derrotas">
                                {tableF != null
                                    ?
                                        tableF[3].d
                                    :
                                        0
                                }       
                            </td>
                            <td className="cedula-gols-pro">
                                {tableF != null
                                    ?
                                        tableF[3].gp
                                    :
                                        0
                                }       
                            </td>
                            <td className="cedula-gols-contra">
                                {tableF != null
                                    ?
                                        tableF[3].gc
                                    :
                                        0
                                }       
                            </td>
                            <td className="cedula-saldo-gols">
                                {tableF != null
                                    ?
                                        tableF[3].sg
                                    :
                                        0
                                }       
                            </td>
                        </tr>
                        <tr>
                            <td rowSpan={1} className="classificado">2</td>
                            <td className="cedula-time2">
                                <abbr className="cedula-time">
                                    {tableF != null
                                        ?
                                            tableF[2].time
                                        :
                                            ''
                                    }                                    
                                </abbr>
                            </td>
                            <td className="cedula-pontos">
                                <b>
                                    {tableF != null
                                        ?
                                            tableF[2].p
                                        :
                                            0
                                    }       
                                </b>
                            </td>
                            <td className="cedula-jogos">
                                {tableF != null
                                    ?
                                        tableF[2].j
                                    :
                                        0
                                }       
                            </td>
                            <td className="cedula-vitorias">
                                {tableF != null
                                    ?
                                        tableF[2].v
                                    :
                                        0
                                }       
                            </td>
                            <td className="cedula-empates">
                                {tableF != null
                                    ?
                                        tableF[2].e
                                    :
                                        0
                                }       
                            </td>
                            <td className="cedula-derrotas">
                                {tableF != null
                                    ?
                                        tableF[2].d
                                    :
                                        0
                                }       
                            </td>
                            <td className="cedula-gols-pro">
                                {tableF != null
                                    ?
                                        tableF[2].gp
                                    :
                                        0
                                }       
                            </td>
                            <td className="cedula-gols-contra">
                                {tableF != null
                                    ?
                                        tableF[2].gc
                                    :
                                        0
                                }       
                            </td>
                            <td className="cedula-saldo-gols">
                                {tableF != null
                                    ?
                                        tableF[2].sg
                                    :
                                        0
                                }       
                            </td>
                        </tr>
                        <tr>
                            <td rowSpan={1} className="sul-americana">3</td>
                            <td className="cedula-time3">
                                <abbr className="cedula-time">
                                    {tableF != null
                                        ?
                                            tableF[1].time
                                        :
                                            ''
                                    }                     
                                </abbr>
                            </td>
                            <td className="cedula-pontos">
                                <b>
                                    {tableF != null
                                        ?
                                            tableF[1].p
                                        :
                                            0
                                    }       
                                </b>
                            </td>
                            <td className="cedula-jogos">
                                {tableF != null
                                    ?
                                        tableF[1].j
                                    :
                                        0
                                }       
                            </td>
                            <td className="cedula-vitorias">
                                {tableF != null
                                    ?
                                        tableF[1].v
                                    :
                                        0
                                }       
                            </td>
                            <td className="cedula-empates">
                                {tableF != null
                                    ?
                                        tableF[1].e
                                    :
                                        0
                                }       
                            </td>
                            <td className="cedula-derrotas">
                                {tableF != null
                                    ?
                                        tableF[1].d
                                    :
                                        0
                                }       
                            </td>
                            <td className="cedula-gols-pro">
                                {tableF != null
                                    ?
                                        tableF[1].gp
                                    :
                                        0
                                }       
                            </td>
                            <td className="cedula-gols-contra">
                                {tableF != null
                                    ?
                                        tableF[1].gc
                                    :
                                        0
                                }       
                            </td>
                            <td className="cedula-saldo-gols">
                                {tableF != null
                                    ?
                                        tableF[1].sg
                                    :
                                        0
                                }       
                            </td>
                        </tr>
                        <tr>
                            <td rowSpan={1} className="eliminado">4</td>
                            <td className="cedula-time4">
                                <abbr className="cedula-time">
                                    {tableF != null
                                        ?
                                            tableF[0].time
                                        :
                                            ''
                                    }                     
                                </abbr>
                            </td>
                            <td className="cedula-pontos">
                                <b>
                                    {tableF != null
                                        ?
                                            tableF[0].p
                                        :
                                            0
                                    }               
                                </b>
                            </td>
                            <td className="cedula-jogos">
                                {tableF != null
                                    ?
                                        tableF[0].j
                                    :
                                        0
                                }       
                            </td>
                            <td className="cedula-vitorias">
                                {tableF != null
                                    ?
                                        tableF[0].v
                                    :
                                        0
                                }       
                            </td>
                            <td className="cedula-empates">
                                {tableF != null
                                    ?
                                        tableF[0].e
                                    :
                                        0
                                }       
                            </td>
                            <td className="cedula-derrotas">
                                {tableF != null
                                    ?
                                        tableF[0].d
                                    :
                                        0
                                }       
                            </td>
                            <td className="cedula-gols-pro">
                                {tableF != null
                                    ?
                                        tableF[0].gp
                                    :
                                        0
                                }       
                            </td>
                            <td className="cedula-gols-contra">
                                {tableF != null
                                    ?
                                        tableF[0].gc
                                    :
                                        0
                                }       
                            </td>
                            <td className="cedula-saldo-gols">
                                {tableF != null
                                    ?
                                        tableF[0].sg
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
                                                        saveResultsF1 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsF1[0]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResultsF1 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsF1[1]}
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
                                                        saveResultsF1 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsF1[2]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResultsF1 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsF1[3]}
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
                                                        saveResultsF2 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsF2[0]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResultsF2 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsF2[1]}
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
                                                        saveResultsF2 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsF2[2]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResultsF2 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsF2[3]}
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
                                                        saveResultsF3 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsF3[0]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResultsF3 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsF3[1]}
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
                                                        saveResultsF3 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsF3[2]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResultsF3 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsF3[3]}
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
                                                        saveResultsF4 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsF4[0]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResultsF4 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsF4[1]}
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
                                                        saveResultsF4 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsF4[2]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResultsF4 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsF4[3]}
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
                                                        saveResultsF5 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsF5[0]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResultsF5 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsF5[1]}
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
                                                        saveResultsF5 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsF5[2]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResultsF5 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsF5[3]}
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
                                                        saveResultsF6 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsF6[0]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResultsF6 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsF6[1]}
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
                                                        saveResultsF6 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsF6[2]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResultsF6 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsF6[3]}
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