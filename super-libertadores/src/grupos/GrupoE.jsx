import React, { useRef, useState, useContext } from "react";
 // Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

 // Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import '../styles/grupos.sass'

import { Navigation } from "swiper";

import { FaseFinal } from "../componentes/api/getTeams";

export function GrupoE({group}){
    let [
        newOitavas,
        previaOitavas,
        newQuartas,
        previaQuartas
    ] = useContext(FaseFinal)
    
    let Grupo = group
    const TimeE1 =
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
        const TimeE2 =
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
        const TimeE3 =
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
        const TimeE4 =
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
        let tableE

        let saveResultsE1
        let saveResultsE2
        let saveResultsE3
        let saveResultsE4
        let saveResultsE5
        let saveResultsE6

        saveResultsE1 = JSON.parse(sessionStorage.getItem('JgFSE-1'))
        saveResultsE2 = JSON.parse(sessionStorage.getItem('JgFSE-2'))
        saveResultsE3 = JSON.parse(sessionStorage.getItem('JgFSE-3'))
        saveResultsE4 = JSON.parse(sessionStorage.getItem('JgFSE-4'))
        saveResultsE5 = JSON.parse(sessionStorage.getItem('JgFSE-5'))
        saveResultsE6 = JSON.parse(sessionStorage.getItem('JgFSE-6'))

        let rodadasJogadasGE = 1

        let rodada1Time1 = JSON.parse(sessionStorage.getItem('TIME1-RODE1'))
        let rodada2Time1 = JSON.parse(sessionStorage.getItem('TIME1-RODE2'))
        let rodada3Time1 = JSON.parse(sessionStorage.getItem('TIME1-RODE3'))
        let rodada4Time1 = JSON.parse(sessionStorage.getItem('TIME1-RODE4'))
        let rodada5Time1 = JSON.parse(sessionStorage.getItem('TIME1-RODE5'))
        let rodada6Time1 = JSON.parse(sessionStorage.getItem('TIME1-RODE6'))

        let rodada1Time2 = JSON.parse(sessionStorage.getItem('TIME2-RODE1'))
        let rodada2Time2 = JSON.parse(sessionStorage.getItem('TIME2-RODE2'))
        let rodada3Time2 = JSON.parse(sessionStorage.getItem('TIME2-RODE3'))
        let rodada4Time2 = JSON.parse(sessionStorage.getItem('TIME2-RODE4'))
        let rodada5Time2 = JSON.parse(sessionStorage.getItem('TIME2-RODE5'))
        let rodada6Time2 = JSON.parse(sessionStorage.getItem('TIME2-RODE6'))

        let rodada1Time3 = JSON.parse(sessionStorage.getItem('TIME3-RODE1'))
        let rodada2Time3 = JSON.parse(sessionStorage.getItem('TIME3-RODE2'))
        let rodada3Time3 = JSON.parse(sessionStorage.getItem('TIME3-RODE3'))
        let rodada4Time3 = JSON.parse(sessionStorage.getItem('TIME3-RODE4'))
        let rodada5Time3 = JSON.parse(sessionStorage.getItem('TIME3-RODE5'))
        let rodada6Time3 = JSON.parse(sessionStorage.getItem('TIME3-RODE6'))

        let rodada1Time4 = JSON.parse(sessionStorage.getItem('TIME4-RODE1'))
        let rodada2Time4 = JSON.parse(sessionStorage.getItem('TIME4-RODE2'))
        let rodada3Time4 = JSON.parse(sessionStorage.getItem('TIME4-RODE3'))
        let rodada4Time4 = JSON.parse(sessionStorage.getItem('TIME4-RODE4'))
        let rodada5Time4 = JSON.parse(sessionStorage.getItem('TIME4-RODE5'))
        let rodada6Time4 = JSON.parse(sessionStorage.getItem('TIME4-RODE6'))

        if(Grupo != null){
            TimeE1.time = Grupo[0].time
            TimeE2.time = Grupo[1].time
            TimeE3.time = Grupo[2].time
            TimeE4.time = Grupo[3].time
            TimeE1.placar = Grupo[0].namePlacar
            TimeE2.placar = Grupo[1].namePlacar
            TimeE3.placar = Grupo[2].namePlacar
            TimeE4.placar = Grupo[3].namePlacar
            TimeE1.pais = Grupo[0].pais
            TimeE2.pais = Grupo[1].pais
            TimeE3.pais = Grupo[2].pais
            TimeE4.pais = Grupo[3].pais
            TimeE1.estadio = Grupo[0].estadio
            TimeE2.estadio = Grupo[1].estadio
            TimeE3.estadio = Grupo[2].estadio
            TimeE4.estadio = Grupo[3].estadio
            TimeE1.url = Grupo[0].url
            TimeE2.url = Grupo[1].url
            TimeE3.url = Grupo[2].url
            TimeE4.url = Grupo[3].url
            tableE = []
            tableE[0] = TimeE4
            tableE[1] = TimeE3
            tableE[2] = TimeE2
            tableE[3] = TimeE1
    
            //ROUND 1
            jogo1.push(Grupo[2])
            jogo1.push(Grupo[0])
            jogo1.push(Grupo[3])
            jogo1.push(Grupo[1])
            //ROUND 2
            jogo2.push(Grupo[0])
            jogo2.push(Grupo[3])
            jogo2.push(Grupo[1])
            jogo2.push(Grupo[2])
            //ROUND 3
            jogo3.push(Grupo[1])
            jogo3.push(Grupo[0])
            jogo3.push(Grupo[2])
            jogo3.push(Grupo[3])
            //ROUND 4
            jogo4.push(Grupo[3])
            jogo4.push(Grupo[2])
            jogo4.push(Grupo[0])
            jogo4.push(Grupo[1])
            //ROUND 5
            jogo5.push(Grupo[2])
            jogo5.push(Grupo[1])
            jogo5.push(Grupo[3])
            jogo5.push(Grupo[0])
            //ROUND 6
            jogo6.push(Grupo[0])
            jogo6.push(Grupo[2])
            jogo6.push(Grupo[1])
            jogo6.push(Grupo[3])
    
            sessionStorage.setItem('RoundE1', JSON.stringify(jogo1))
            sessionStorage.setItem('RoundE2', JSON.stringify(jogo2))
            sessionStorage.setItem('RoundE3', JSON.stringify(jogo3))
            sessionStorage.setItem('RoundE4', JSON.stringify(jogo4))
            sessionStorage.setItem('RoundE5', JSON.stringify(jogo5))
            sessionStorage.setItem('RoundE6', JSON.stringify(jogo6))
        }

        limparAtr(TimeE1)
        limparAtr(TimeE2)
        limparAtr(TimeE3)
        limparAtr(TimeE4)

        if(rodada1Time1 != null){
      
            for (let index = 2; index < 7; index++) {
                switch (index) {
                    case 2:
                        if(rodada2Time1 != null){
                            rodadasJogadasGE = 2
                        }
                        break;
    
                    case 3:
                        if(rodada3Time1 != null){
                            rodadasJogadasGE = 3
                        }
                        break;
    
                    case 4:
                        if(rodada4Time1 != null){
                            rodadasJogadasGE = 4
                        }
                        break;
    
                    case 5:
                        if(rodada5Time1 != null){
                            rodadasJogadasGE = 5
                        }
                        break;
    
                    case 6:
                        if(rodada6Time1 != null){
                            rodadasJogadasGE = 6
                        }
                        break;
                }
            }
    
            setTimeout(() => {
                insertPontos(rodada1Time1,rodada2Time1,rodada3Time1,rodada4Time1,rodada5Time1,rodada6Time1,TimeE1, false)
                insertPontos(rodada1Time2,rodada2Time2,rodada3Time2,rodada4Time2,rodada5Time2,rodada6Time2,TimeE2, false)
                insertPontos(rodada1Time3,rodada2Time3,rodada3Time3,rodada4Time3,rodada5Time3,rodada6Time3,TimeE3, false)
                insertPontos(rodada1Time4,rodada2Time4,rodada3Time4,rodada4Time4,rodada5Time4,rodada6Time4,TimeE4, true)
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
    
            switch (rodadasJogadasGE) {
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
                let tableE = []
                tableE[0] = TimeE1
                tableE[1] = TimeE2
                tableE[2] = TimeE3
                tableE[3] = TimeE4
    
                tableE.sort((a,b) => {
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
        
                let e = 3
                for(let i = 16;i<20;i++){
                    tdTime[i].innerText = tableE[e].time
                    tdPontos[i].innerText = tableE[e].p
                    tdJogos[i].innerText = tableE[e].j
                    tdVitorias[i].innerText = tableE[e].v
                    tdEmpates[i].innerText = tableE[e].e
                    tdDerrotas[i].innerText = tableE[e].d
                    tdGolsPro[i].innerText = tableE[e].gp
                    tdGolsContra[i].innerText = tableE[e].gc
                    tdSaldoGols[i].innerText = tableE[e].sg
                    e--
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
            rodadasJogadasGE = rodada
            //tableE = []
            //tableE[0] = TimeE1
            //tableE[1] = TimeE2
            //tableE[2] = TimeE3
            //tableE[3] = TimeE4

            insertPontos(rodada1Time1,rodada2Time1,rodada3Time1,rodada4Time1,rodada5Time1,rodada6Time1,TimeE1, false)
            insertPontos(rodada1Time2,rodada2Time2,rodada3Time2,rodada4Time2,rodada5Time2,rodada6Time2,TimeE2, false)
            insertPontos(rodada1Time3,rodada2Time3,rodada3Time3,rodada4Time3,rodada5Time3,rodada6Time3,TimeE3, false)
            insertPontos(rodada1Time4,rodada2Time4,rodada3Time4,rodada4Time4,rodada5Time4,rodada6Time4,TimeE4, false)

            tableE.sort((a,b) => {
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

            let e = 3
            for(let i = 16;i<20;i++){
                tdTime[i].innerText = tableE[e].time
                tdPontos[i].innerText = tableE[e].p
                tdJogos[i].innerText = tableE[e].j
                tdVitorias[i].innerText = tableE[e].v
                tdEmpates[i].innerText = tableE[e].e
                tdDerrotas[i].innerText = tableE[e].d
                tdGolsPro[i].innerText = tableE[e].gp
                tdGolsContra[i].innerText = tableE[e].gc
                tdSaldoGols[i].innerText = tableE[e].sg
                e--
            }

            if(rodadasJogadasGE == 6){
                tableE[3].group = 'E'
                tableE[3].position = 1
                tableE[2].group = 'E'
                tableE[2].position = 2
    
                newOitavas(tableE[3], 8)
                newOitavas(tableE[2], 9)
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

            buttonSaveResult[24].addEventListener('click', function setResult(){
                let jogo = []
                let listResults = []
                listResults.push(resultsGames[96].value)
                listResults.push(resultsGames[97].value)
                listResults.push(resultsGames[98].value)
                listResults.push(resultsGames[99].value)
    
                if(saveResultsE1 != null){
                    console.log('Resultadores já registrados')
                    return
                }
                for(let i = 0; i<listResults.length; i++){
                    if(!listResults[i])return
                }
                for(let i = 96; i<100; i++){
                    resultsGames[i].setAttribute('readonly', 'readonly');
                }
                
                jogo[0] = listResults[0]
                jogo[1] = listResults[1]
                jogo[2] = listResults[2]
                jogo[3] = listResults[3]

                sessionStorage.setItem('JgFSE-1', JSON.stringify(jogo))
                saveResultsE1 = JSON.parse(sessionStorage.getItem('JgFSE-1'))
                
                limparAtr(TimeE1)
                limparAtr(TimeE2)
                limparAtr(TimeE3)
                limparAtr(TimeE4)
                insertResultsGame(listResults[0], listResults[1], TimeE3)
                insertResultsGame(listResults[1], listResults[0], TimeE1)
                insertResultsGame(listResults[2], listResults[3], TimeE4)
                insertResultsGame(listResults[3], listResults[2], TimeE2)
                sessionStorage.setItem('TIME1-RODE1', JSON.stringify(TimeE1))
                rodada1Time1 = JSON.parse(sessionStorage.getItem('TIME1-RODE1'))
                sessionStorage.setItem('TIME2-RODE1', JSON.stringify(TimeE2))
                rodada1Time2 = JSON.parse(sessionStorage.getItem('TIME2-RODE1'))
                sessionStorage.setItem('TIME3-RODE1', JSON.stringify(TimeE3))
                rodada1Time3 = JSON.parse(sessionStorage.getItem('TIME3-RODE1'))
                sessionStorage.setItem('TIME4-RODE1', JSON.stringify(TimeE4))
                rodada1Time4 = JSON.parse(sessionStorage.getItem('TIME4-RODE1'))
                classificacao(1)
                this.removeEventListener('click', setResult)
                this.classList.add('btn-disabled')
            })
            buttonSaveResult[25].addEventListener('click', function setResult(){
                let jogo = []
                let listResults = []
                listResults.push(resultsGames[100].value)
                listResults.push(resultsGames[101].value)
                listResults.push(resultsGames[102].value)
                listResults.push(resultsGames[103].value)

                if(saveResultsE1 == undefined){
                    console.log('Resultado do primeiro jogo não registrado')
                    return
                }
                if(saveResultsE2 != null){
                    console.log('Resultadores já registrados')
                    return
                }
    
                for(let i = 0; i<listResults.length; i++){
                    if(!listResults[i])return
                }
                for(let i = 100; i<104; i++){
                    resultsGames[i].setAttribute('readonly', 'readonly');
                }
    
                jogo[0] = Number(listResults[0])
                jogo[1] = Number(listResults[1])
                jogo[2] = Number(listResults[2])
                jogo[3] = Number(listResults[3])

                sessionStorage.setItem('JgFSE-2', JSON.stringify(jogo))
                saveResultsE2 = JSON.parse(sessionStorage.getItem('JgFSE-2'))

                limparAtr(TimeE1)
                limparAtr(TimeE2)
                limparAtr(TimeE3)
                limparAtr(TimeE4)
                insertResultsGame(listResults[0], listResults[1], TimeE1)
                insertResultsGame(listResults[1], listResults[0], TimeE4)
                insertResultsGame(listResults[2], listResults[3], TimeE2)
                insertResultsGame(listResults[3], listResults[2], TimeE3)
                sessionStorage.setItem('TIME1-RODE2', JSON.stringify(TimeE1))
                rodada2Time1 = JSON.parse(sessionStorage.getItem('TIME1-RODE2'))
                sessionStorage.setItem('TIME2-RODE2', JSON.stringify(TimeE2))
                rodada2Time2 = JSON.parse(sessionStorage.getItem('TIME2-RODE2'))
                sessionStorage.setItem('TIME3-RODE2', JSON.stringify(TimeE3))
                rodada2Time3 = JSON.parse(sessionStorage.getItem('TIME3-RODE2'))
                sessionStorage.setItem('TIME4-RODE2', JSON.stringify(TimeE4))
                rodada2Time4 = JSON.parse(sessionStorage.getItem('TIME4-RODE2'))
                classificacao(2)
                this.removeEventListener('click', setResult)
                this.classList.add('btn-disabled')
            })
            buttonSaveResult[26].addEventListener('click', function setResult(){
                let jogo = []
                let listResults = []
                listResults.push(resultsGames[104].value)
                listResults.push(resultsGames[105].value)
                listResults.push(resultsGames[106].value)
                listResults.push(resultsGames[107].value)

                if(saveResultsE2 == undefined){
                    console.log('Resultado do primeiro jogo não registrado')
                    return
                }
                if(saveResultsE3 != null){
                    console.log('Resultadores já registrados')
                    return
                }
    
                for(let i = 0; i<listResults.length; i++){
                    if(!listResults[i])return
                }
                for(let i = 104; i<108; i++){
                    resultsGames[i].setAttribute('readonly', 'readonly');
                }
    
                jogo[0] = Number(listResults[0])
                jogo[1] = Number(listResults[1])
                jogo[2] = Number(listResults[2])
                jogo[3] = Number(listResults[3])

                sessionStorage.setItem('JgFSE-3', JSON.stringify(jogo))
                saveResultsE3 = JSON.parse(sessionStorage.getItem('JgFSE-3'))

                limparAtr(TimeE1)
                limparAtr(TimeE2)
                limparAtr(TimeE3)
                limparAtr(TimeE4)
                insertResultsGame(listResults[0], listResults[1], TimeE2)
                insertResultsGame(listResults[1], listResults[0], TimeE1)
                insertResultsGame(listResults[2], listResults[3], TimeE3)
                insertResultsGame(listResults[3], listResults[2], TimeE4)
                sessionStorage.setItem('TIME1-RODE3', JSON.stringify(TimeE1))
                rodada3Time1 = JSON.parse(sessionStorage.getItem('TIME1-RODE3'))
                sessionStorage.setItem('TIME2-RODE3', JSON.stringify(TimeE2))
                rodada3Time2 = JSON.parse(sessionStorage.getItem('TIME2-RODE3'))
                sessionStorage.setItem('TIME3-RODE3', JSON.stringify(TimeE3))
                rodada3Time3 = JSON.parse(sessionStorage.getItem('TIME3-RODE3'))
                sessionStorage.setItem('TIME4-RODE3', JSON.stringify(TimeE4))
                rodada3Time4 = JSON.parse(sessionStorage.getItem('TIME4-RODE3'))
                classificacao(3)
                this.removeEventListener('click', setResult)
                this.classList.add('btn-disabled')
            })
            buttonSaveResult[27].addEventListener('click', function setResult(){
                let jogo = []
                let listResults = []
                listResults.push(resultsGames[108].value)
                listResults.push(resultsGames[109].value)
                listResults.push(resultsGames[110].value)
                listResults.push(resultsGames[111].value)

                if(saveResultsE3 == undefined){
                    console.log('Resultado do primeiro jogo não registrado')
                    return
                }
                if(saveResultsE4 != null){
                    console.log('Resultadores já registrados')
                    return
                }
    
                for(let i = 0; i<listResults.length; i++){
                    if(!listResults[i])return
                }
                for(let i = 108; i<112; i++){
                    resultsGames[i].setAttribute('readonly', 'readonly');
                }
    
                jogo[0] = Number(listResults[0])
                jogo[1] = Number(listResults[1])
                jogo[2] = Number(listResults[2])
                jogo[3] = Number(listResults[3])

                sessionStorage.setItem('JgFSE-4', JSON.stringify(jogo))
                saveResultsE4 = JSON.parse(sessionStorage.getItem('JgFSE-4'))

                limparAtr(TimeE1)
                limparAtr(TimeE2)
                limparAtr(TimeE3)
                limparAtr(TimeE4)
                insertResultsGame(listResults[0], listResults[1], TimeE4)
                insertResultsGame(listResults[1], listResults[0], TimeE3)
                insertResultsGame(listResults[2], listResults[3], TimeE1)
                insertResultsGame(listResults[3], listResults[2], TimeE2)
                sessionStorage.setItem('TIME1-RODE4', JSON.stringify(TimeE1))
                rodada4Time1 = JSON.parse(sessionStorage.getItem('TIME1-RODE4'))
                sessionStorage.setItem('TIME2-RODE4', JSON.stringify(TimeE2))
                rodada4Time2 = JSON.parse(sessionStorage.getItem('TIME2-RODE4'))
                sessionStorage.setItem('TIME3-RODE4', JSON.stringify(TimeE3))
                rodada4Time3 = JSON.parse(sessionStorage.getItem('TIME3-RODE4'))
                sessionStorage.setItem('TIME4-RODE4', JSON.stringify(TimeE4))
                rodada4Time4 = JSON.parse(sessionStorage.getItem('TIME4-RODE4'))
                classificacao(4)
                this.removeEventListener('click', setResult)
                this.classList.add('btn-disabled')
            })
            buttonSaveResult[28].addEventListener('click', function setResult(){
                let jogo = []
                let listResults = []
                listResults.push(resultsGames[112].value)
                listResults.push(resultsGames[113].value)
                listResults.push(resultsGames[114].value)
                listResults.push(resultsGames[115].value)

                if(saveResultsE4 == undefined){
                    console.log('Resultado do primeiro jogo não registrado')
                    return
                }
                if(saveResultsE5 != null){
                    console.log('Resultadores já registrados')
                    return
                }
    
                for(let i = 0; i<listResults.length; i++){
                    if(!listResults[i])return
                }
                for(let i = 112; i<116; i++){
                    resultsGames[i].setAttribute('readonly', 'readonly');
                }
    
                jogo[0] = Number(listResults[0])
                jogo[1] = Number(listResults[1])
                jogo[2] = Number(listResults[2])
                jogo[3] = Number(listResults[3])

                sessionStorage.setItem('JgFSE-5', JSON.stringify(jogo))
                saveResultsE5 = JSON.parse(sessionStorage.getItem('JgFSE-5'))
                
                limparAtr(TimeE1)
                limparAtr(TimeE2)
                limparAtr(TimeE3)
                limparAtr(TimeE4)
                insertResultsGame(listResults[0], listResults[1], TimeE3)
                insertResultsGame(listResults[1], listResults[0], TimeE2)
                insertResultsGame(listResults[2], listResults[3], TimeE4)
                insertResultsGame(listResults[3], listResults[2], TimeE1)
                sessionStorage.setItem('TIME1-RODE5', JSON.stringify(TimeE1))
                rodada5Time1 = JSON.parse(sessionStorage.getItem('TIME1-RODE5'))
                sessionStorage.setItem('TIME2-RODE5', JSON.stringify(TimeE2))
                rodada5Time2 = JSON.parse(sessionStorage.getItem('TIME2-RODE5'))
                sessionStorage.setItem('TIME3-RODE5', JSON.stringify(TimeE3))
                rodada5Time3 = JSON.parse(sessionStorage.getItem('TIME3-RODE5'))
                sessionStorage.setItem('TIME4-RODE5', JSON.stringify(TimeE4))
                rodada5Time4 = JSON.parse(sessionStorage.getItem('TIME4-RODE5'))
                classificacao(5)
                this.removeEventListener('click', setResult)
                this.classList.add('btn-disabled')
            })
            buttonSaveResult[29].addEventListener('click', function setResult(){
                let jogo = []
                let listResults = []
                listResults.push(resultsGames[116].value)
                listResults.push(resultsGames[117].value)
                listResults.push(resultsGames[118].value)
                listResults.push(resultsGames[119].value)

                if(saveResultsE5 == undefined){
                    console.log('Resultado do primeiro jogo não registrado')
                    return
                }
                if(saveResultsE6 != null){
                    console.log('Resultadores já registrados')
                    return
                }
    
                for(let i = 0; i<listResults.length; i++){
                    if(!listResults[i])return
                }
                for(let i = 116; i<120; i++){
                    resultsGames[i].setAttribute('readonly', 'readonly');
                }
    
                jogo[0] = Number(listResults[0])
                jogo[1] = Number(listResults[1])
                jogo[2] = Number(listResults[2])
                jogo[3] = Number(listResults[3])

                sessionStorage.setItem('JgFSE-6', JSON.stringify(jogo))
                saveResultsE6 = JSON.parse(sessionStorage.getItem('JgFSE-6'))

                limparAtr(TimeE1)
                limparAtr(TimeE2)
                limparAtr(TimeE3)
                limparAtr(TimeE4)
                insertResultsGame(listResults[0], listResults[1], TimeE1)
                insertResultsGame(listResults[1], listResults[0], TimeE3)
                insertResultsGame(listResults[2], listResults[3], TimeE2)
                insertResultsGame(listResults[3], listResults[2], TimeE4)
                sessionStorage.setItem('TIME1-RODE6', JSON.stringify(TimeE1))
                rodada6Time1 = JSON.parse(sessionStorage.getItem('TIME1-RODE6'))
                sessionStorage.setItem('TIME2-RODE6', JSON.stringify(TimeE2))
                rodada6Time2 = JSON.parse(sessionStorage.getItem('TIME2-RODE6'))
                sessionStorage.setItem('TIME3-RODE6', JSON.stringify(TimeE3))
                rodada6Time3 = JSON.parse(sessionStorage.getItem('TIME3-RODE6'))
                sessionStorage.setItem('TIME4-RODE6', JSON.stringify(TimeE4))
                rodada6Time4 = JSON.parse(sessionStorage.getItem('TIME4-RODE6'))
                classificacao(6)
                this.removeEventListener('click', setResult)
                this.classList.add('btn-disabled')
            })
        }

        jogo1 = JSON.parse(sessionStorage.getItem('RoundE1'))
        jogo2 = JSON.parse(sessionStorage.getItem('RoundE2'))
        jogo3 = JSON.parse(sessionStorage.getItem('RoundE3'))
        jogo4 = JSON.parse(sessionStorage.getItem('RoundE4'))
        jogo5 = JSON.parse(sessionStorage.getItem('RoundE5'))
        jogo6 = JSON.parse(sessionStorage.getItem('RoundE6'))

        setTimeout(addFunctionButton, 200)

    return(
        <div className="container-fases">
            <h2>grupo e</h2>
            <div className="container-table-jogos">
                <table id="grupoE" className="libertadores">
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
                                    {tableE != null
                                        ?
                                            tableE[3].time
                                        :
                                            ''
                                    }
                                </abbr>
                            </td>
                            <td className="cedula-pontos">
                                <b>
                                    {tableE != null
                                        ?
                                            tableE[3].p
                                        :
                                            0
                                    }       
                                </b>
                            </td>
                            <td className="cedula-jogos">
                                {tableE != null
                                    ?
                                        tableE[3].j
                                    :
                                        0
                                }       
                            </td>
                            <td className="cedula-vitorias">
                                {tableE != null
                                    ?
                                        tableE[3].v
                                    :
                                        0
                                }       
                            </td>
                            <td className="cedula-empates">
                                {tableE != null
                                    ?
                                        tableE[3].e
                                    :
                                        0
                                }       
                            </td>
                            <td className="cedula-derrotas">
                                {tableE != null
                                    ?
                                        tableE[3].d
                                    :
                                        0
                                }       
                            </td>
                            <td className="cedula-gols-pro">
                                {tableE != null
                                    ?
                                        tableE[3].gp
                                    :
                                        0
                                }        
                            </td>
                            <td className="cedula-gols-contra">
                                {tableE != null
                                    ?
                                        tableE[3].gc
                                    :
                                        0
                                }        
                            </td>
                            <td className="cedula-saldo-gols">
                                {tableE != null
                                    ?
                                        tableE[3].sg
                                    :
                                        0
                                }        
                            </td>
                        </tr>
                        <tr>
                            <td rowSpan={1} className="classificado">2</td>
                            <td className="cedula-time2">
                                <abbr className="cedula-time">
                                    {tableE != null
                                        ?
                                            tableE[2].time
                                        :
                                            ''
                                    }                       
                                </abbr>
                            </td>
                            <td className="cedula-pontos">
                                <b>
                                    {tableE != null
                                        ?
                                            tableE[2].p
                                        :
                                            0
                                    }       
                                </b>
                            </td>
                            <td className="cedula-jogos">
                                {tableE != null
                                    ?
                                        tableE[2].j
                                    :
                                        0
                                }        
                            </td>
                            <td className="cedula-vitorias">
                                {tableE != null
                                    ?
                                        tableE[2].v
                                    :
                                        0
                                }        
                            </td>
                            <td className="cedula-empates">
                                {tableE != null
                                    ?
                                        tableE[2].e
                                    :
                                        0
                                }        
                            </td>
                            <td className="cedula-derrotas">
                                {tableE != null
                                    ?
                                        tableE[2].d
                                    :
                                        0
                                }        
                            </td>
                            <td className="cedula-gols-pro">
                                {tableE != null
                                    ?
                                        tableE[2].gp
                                    :
                                        0
                                }        
                            </td>
                            <td className="cedula-gols-contra">
                                {tableE != null
                                    ?
                                        tableE[2].gc
                                    :
                                        0
                                }        
                            </td>
                            <td className="cedula-saldo-gols">
                                {tableE != null
                                    ?
                                        tableE[2].sg
                                    :
                                        0
                                }        
                            </td>
                        </tr>
                        <tr>
                            <td rowSpan={1} className="sul-americana">3</td>
                            <td className="cedula-time3">
                                <abbr className="cedula-time">
                                    {tableE != null
                                        ?
                                            tableE[1].time
                                        :
                                            ''
                                    }                       
                                </abbr>
                            </td>
                            <td className="cedula-pontos">
                                <b>
                                    {tableE != null
                                        ?
                                            tableE[1].p
                                        :
                                            0
                                    }       
                                </b>
                            </td>
                            <td className="cedula-jogos">
                                {tableE != null
                                    ?
                                        tableE[1].j
                                    :
                                        0
                                }        
                            </td>
                            <td className="cedula-vitorias">
                                {tableE != null
                                    ?
                                        tableE[1].v
                                    :
                                        0
                                }        
                            </td>
                            <td className="cedula-empates">
                                {tableE != null
                                    ?
                                        tableE[1].e
                                    :
                                        0
                                }        
                            </td>
                            <td className="cedula-derrotas">
                                {tableE != null
                                    ?
                                        tableE[1].d
                                    :
                                        0
                                }        
                            </td>
                            <td className="cedula-gols-pro">
                                {tableE != null
                                    ?
                                        tableE[1].gp
                                    :
                                        0
                                }        
                            </td>
                            <td className="cedula-gols-contra">
                                {tableE != null
                                    ?
                                        tableE[1].gc
                                    :
                                        0
                                }        
                            </td>
                            <td className="cedula-saldo-gols">
                                {tableE != null
                                    ?
                                        tableE[1].sg
                                    :
                                        0
                                }        
                            </td>
                        </tr>
                        <tr>
                            <td rowSpan={1} className="eliminado">4</td>
                            <td className="cedula-time4">
                                <abbr className="cedula-time">
                                    {tableE != null
                                        ?
                                            tableE[0].time
                                        :
                                            ''
                                    }                       
                                </abbr>
                            </td>
                            <td className="cedula-pontos">
                                <b>
                                    {tableE != null
                                        ?
                                            tableE[0].p
                                        :
                                            0
                                    }               
                                </b>
                            </td>
                            <td className="cedula-jogos">
                                {tableE != null
                                    ?
                                        tableE[0].j
                                    :
                                        0
                                }        
                            </td>
                            <td className="cedula-vitorias">
                                {tableE != null
                                    ?
                                        tableE[0].v
                                    :
                                        0
                                }        
                            </td>
                            <td className="cedula-empates">
                                {tableE != null
                                    ?
                                        tableE[0].e
                                    :
                                        0
                                }        
                            </td>
                            <td className="cedula-derrotas">
                                {tableE != null
                                    ?
                                        tableE[0].d
                                    :
                                        0
                                }        
                            </td>
                            <td className="cedula-gols-pro">
                                {tableE != null
                                    ?
                                        tableE[0].gp
                                    :
                                        0
                                }        
                            </td>
                            <td className="cedula-gols-contra">
                                {tableE != null
                                    ?
                                        tableE[0].gc
                                    :
                                        0
                                }        
                            </td>
                            <td className="cedula-saldo-gols">
                                {tableE != null
                                    ?
                                        tableE[0].sg
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
                                                        saveResultsE1 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsE1[0]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResultsE1 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsE1[1]}
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
                                                        saveResultsE1 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsE1[2]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResultsE1 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsE1[3]}
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
                                                        saveResultsE2 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsE2[0]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResultsE2 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsE2[1]}
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
                                                        saveResultsE2 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsE2[2]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResultsE2 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsE2[3]}
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
                                                        saveResultsE3 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsE3[0]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResultsE3 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsE3[1]}
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
                                                        saveResultsE3 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsE3[2]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResultsE3 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsE3[3]}
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
                                                        saveResultsE4 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsE4[0]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResultsE4 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsE4[1]}
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
                                                        saveResultsE4 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsE4[2]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResultsE4 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsE4[3]}
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
                                                        saveResultsE5 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsE5[0]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResultsE5 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsE5[1]}
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
                                                        saveResultsE5 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsE5[2]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResultsE5 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsE5[3]}
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
                                                        saveResultsE6 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsE6[0]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResultsE6 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsE6[1]}
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
                                                        saveResultsE6 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsE6[2]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResultsE6 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsE6[3]}
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