import React, { useRef, useState, useContext } from "react";
 // Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

 // Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import '../styles/grupos.sass'

import { Navigation } from "swiper";

import { FaseFinal } from "../componentes/api/getTeams";

export function GrupoB({group}){
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
    const TimeB1 =
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
        const TimeB2 =
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
        const TimeB3 =
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
        const TimeB4 =
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
        let tableB

        let saveResultsB1
        let saveResultsB2
        let saveResultsB3
        let saveResultsB4
        let saveResultsB5
        let saveResultsB6

        saveResultsB1 = JSON.parse(sessionStorage.getItem('JgFSB-1'))
        saveResultsB2 = JSON.parse(sessionStorage.getItem('JgFSB-2'))
        saveResultsB3 = JSON.parse(sessionStorage.getItem('JgFSB-3'))
        saveResultsB4 = JSON.parse(sessionStorage.getItem('JgFSB-4'))
        saveResultsB5 = JSON.parse(sessionStorage.getItem('JgFSB-5'))
        saveResultsB6 = JSON.parse(sessionStorage.getItem('JgFSB-6'))

        let rodadasJogadasGB = 1

        let rodada1Time1 = JSON.parse(sessionStorage.getItem('TIME1-RODB1'))
        let rodada2Time1 = JSON.parse(sessionStorage.getItem('TIME1-RODB2'))
        let rodada3Time1 = JSON.parse(sessionStorage.getItem('TIME1-RODB3'))
        let rodada4Time1 = JSON.parse(sessionStorage.getItem('TIME1-RODB4'))
        let rodada5Time1 = JSON.parse(sessionStorage.getItem('TIME1-RODB5'))
        let rodada6Time1 = JSON.parse(sessionStorage.getItem('TIME1-RODB6'))

        let rodada1Time2 = JSON.parse(sessionStorage.getItem('TIME2-RODB1'))
        let rodada2Time2 = JSON.parse(sessionStorage.getItem('TIME2-RODB2'))
        let rodada3Time2 = JSON.parse(sessionStorage.getItem('TIME2-RODB3'))
        let rodada4Time2 = JSON.parse(sessionStorage.getItem('TIME2-RODB4'))
        let rodada5Time2 = JSON.parse(sessionStorage.getItem('TIME2-RODB5'))
        let rodada6Time2 = JSON.parse(sessionStorage.getItem('TIME2-RODB6'))

        let rodada1Time3 = JSON.parse(sessionStorage.getItem('TIME3-RODB1'))
        let rodada2Time3 = JSON.parse(sessionStorage.getItem('TIME3-RODB2'))
        let rodada3Time3 = JSON.parse(sessionStorage.getItem('TIME3-RODB3'))
        let rodada4Time3 = JSON.parse(sessionStorage.getItem('TIME3-RODB4'))
        let rodada5Time3 = JSON.parse(sessionStorage.getItem('TIME3-RODB5'))
        let rodada6Time3 = JSON.parse(sessionStorage.getItem('TIME3-RODB6'))

        let rodada1Time4 = JSON.parse(sessionStorage.getItem('TIME4-RODB1'))
        let rodada2Time4 = JSON.parse(sessionStorage.getItem('TIME4-RODB2'))
        let rodada3Time4 = JSON.parse(sessionStorage.getItem('TIME4-RODB3'))
        let rodada4Time4 = JSON.parse(sessionStorage.getItem('TIME4-RODB4'))
        let rodada5Time4 = JSON.parse(sessionStorage.getItem('TIME4-RODB5'))
        let rodada6Time4 = JSON.parse(sessionStorage.getItem('TIME4-RODB6'))

        if(Grupo != null){
            TimeB1.time = Grupo[0].time
            TimeB2.time = Grupo[1].time
            TimeB3.time = Grupo[2].time
            TimeB4.time = Grupo[3].time
            TimeB1.placar = Grupo[0].namePlacar
            TimeB2.placar = Grupo[1].namePlacar
            TimeB3.placar = Grupo[2].namePlacar
            TimeB4.placar = Grupo[3].namePlacar
            TimeB1.pais = Grupo[0].pais
            TimeB2.pais = Grupo[1].pais
            TimeB3.pais = Grupo[2].pais
            TimeB4.pais = Grupo[3].pais
            TimeB1.estadio = Grupo[0].estadio
            TimeB2.estadio = Grupo[1].estadio
            TimeB3.estadio = Grupo[2].estadio
            TimeB4.estadio = Grupo[3].estadio
            TimeB1.url = Grupo[0].url
            TimeB2.url = Grupo[1].url
            TimeB3.url = Grupo[2].url
            TimeB4.url = Grupo[3].url
            tableB = []
            tableB[0] = TimeB4
            tableB[1] = TimeB3
            tableB[2] = TimeB2
            tableB[3] = TimeB1
    
            //ROUND 1
            jogo1.push(Grupo[3])
            jogo1.push(Grupo[1])
            jogo1.push(Grupo[2])
            jogo1.push(Grupo[0])
            //ROUND 2
            jogo2.push(Grupo[0])
            jogo2.push(Grupo[3])
            jogo2.push(Grupo[1])
            jogo2.push(Grupo[2])
            //ROUND 3
            jogo3.push(Grupo[2])
            jogo3.push(Grupo[3])
            jogo3.push(Grupo[1])
            jogo3.push(Grupo[0])
            //ROUND 4
            jogo4.push(Grupo[0])
            jogo4.push(Grupo[1])
            jogo4.push(Grupo[3])
            jogo4.push(Grupo[2])
            //ROUND 5
            jogo5.push(Grupo[3])
            jogo5.push(Grupo[0])
            jogo5.push(Grupo[2])
            jogo5.push(Grupo[1])
            //ROUND 6
            jogo6.push(Grupo[1])
            jogo6.push(Grupo[3])
            jogo6.push(Grupo[0])
            jogo6.push(Grupo[2])
    
            sessionStorage.setItem('RoundB1', JSON.stringify(jogo1))
            sessionStorage.setItem('RoundB2', JSON.stringify(jogo2))
            sessionStorage.setItem('RoundB3', JSON.stringify(jogo3))
            sessionStorage.setItem('RoundB4', JSON.stringify(jogo4))
            sessionStorage.setItem('RoundB5', JSON.stringify(jogo5))
            sessionStorage.setItem('RoundB6', JSON.stringify(jogo6))
        }

        limparAtr(TimeB1)
        limparAtr(TimeB2)
        limparAtr(TimeB3)
        limparAtr(TimeB4)

        if(rodada1Time1 != null){
      
            for (let index = 2; index < 7; index++) {
                switch (index) {
                    case 2:
                        if(rodada2Time1 != null){
                            rodadasJogadasGB = 2
                        }
                        break;
    
                    case 3:
                        if(rodada3Time1 != null){
                            rodadasJogadasGB = 3
                        }
                        break;
    
                    case 4:
                        if(rodada4Time1 != null){
                            rodadasJogadasGB = 4
                        }
                        break;
    
                    case 5:
                        if(rodada5Time1 != null){
                            rodadasJogadasGB = 5
                        }
                        break;
    
                    case 6:
                        if(rodada6Time1 != null){
                            rodadasJogadasGB = 6
                        }
                        break;
                }
            }
    
            setTimeout(() => {
                insertPontos(rodada1Time1,rodada2Time1,rodada3Time1,rodada4Time1,rodada5Time1,rodada6Time1,TimeB1, false)
                insertPontos(rodada1Time2,rodada2Time2,rodada3Time2,rodada4Time2,rodada5Time2,rodada6Time2,TimeB2, false)
                insertPontos(rodada1Time3,rodada2Time3,rodada3Time3,rodada4Time3,rodada5Time3,rodada6Time3,TimeB3, false)
                insertPontos(rodada1Time4,rodada2Time4,rodada3Time4,rodada4Time4,rodada5Time4,rodada6Time4,TimeB4, true)
            }, 100)
        }

        function setTeamPage(newTeam, num, localizacao){
            let confronto = document.querySelectorAll('.confronto')
            let team = newTeam
            let numero = num
            let local = localizacao
    
            //if(sessionStorage.getItem('RoundA1') != null){
                if(local == 'ida'){
                    confronto[numero].innerHTML = `
                        ${team.time}
                        <img src=${team.url} alt="" />
                    `
                }else{
                    confronto[numero].innerHTML = `
                        <img src=${team.url} alt="" />
                        ${team.time}
                    `
                }
            //}
        }

        function pageAlternatives(newTeam, num, localizacao){
            let confronto = document.querySelectorAll('.confronto')
            let team = newTeam
            let numero = num
            let local = localizacao
    
          //  if(sessionStorage.getItem('RoundA1') != null){
                if(local == 'ida'){
                    confronto[numero].innerHTML = `
                        ${team.namePlacar}
                        <img src=${team.url} alt="" />
                    `
                }else{
                    confronto[numero].innerHTML = `
                        <img src=${team.url} alt="" />
                        ${team.namePlacar}
                    `
                }
            }
        //}

        function rezise(){
                            
            if(window.innerWidth < 1000){
                setTeamPage(jogo1[0], 24, 'ida')
                setTeamPage(jogo1[1], 25, 'volta')
                setTeamPage(jogo1[2], 26, 'ida')
                setTeamPage(jogo1[3], 27, 'volta')
                setTeamPage(jogo2[0], 28, 'ida')
                setTeamPage(jogo2[1], 29, 'volta')
                setTeamPage(jogo2[2], 30, 'ida')
                setTeamPage(jogo2[3], 31, 'volta')
                setTeamPage(jogo3[0], 32, 'ida')
                setTeamPage(jogo3[1], 33, 'volta')
                setTeamPage(jogo3[2], 34, 'ida')
                setTeamPage(jogo3[3], 35, 'volta')
                setTeamPage(jogo4[0], 36, 'ida')
                setTeamPage(jogo4[1], 37, 'volta')
                setTeamPage(jogo4[2], 38, 'ida')
                setTeamPage(jogo4[3], 39, 'volta')
                setTeamPage(jogo5[0], 40, 'ida')
                setTeamPage(jogo5[1], 41, 'volta')
                setTeamPage(jogo5[2], 42, 'ida')
                setTeamPage(jogo5[3], 43, 'volta')
                setTeamPage(jogo6[0], 44, 'ida')
                setTeamPage(jogo6[1], 45, 'volta')
                setTeamPage(jogo6[2], 46, 'ida')
                setTeamPage(jogo6[3], 47, 'volta')
            }else{
                pageAlternatives(jogo1[0], 24, 'ida')
                pageAlternatives(jogo1[1], 25, 'volta')
                pageAlternatives(jogo1[2], 26, 'ida')
                pageAlternatives(jogo1[3], 27, 'volta')
                pageAlternatives(jogo2[0], 28, 'ida')
                pageAlternatives(jogo2[1], 29, 'volta')
                pageAlternatives(jogo2[2], 30, 'ida')
                pageAlternatives(jogo2[3], 31, 'volta')
                pageAlternatives(jogo3[0], 32, 'ida')
                pageAlternatives(jogo3[1], 33, 'volta')
                pageAlternatives(jogo3[2], 34, 'ida')
                pageAlternatives(jogo3[3], 35, 'volta')
                pageAlternatives(jogo4[0], 36, 'ida')
                pageAlternatives(jogo4[1], 37, 'volta')
                pageAlternatives(jogo4[2], 38, 'ida')
                pageAlternatives(jogo4[3], 39, 'volta')
                pageAlternatives(jogo5[0], 40, 'ida')
                pageAlternatives(jogo5[1], 41, 'volta')
                pageAlternatives(jogo5[2], 42, 'ida')
                pageAlternatives(jogo5[3], 43, 'volta')
                pageAlternatives(jogo6[0], 44, 'ida')
                pageAlternatives(jogo6[1], 45, 'volta')
                pageAlternatives(jogo6[2], 46, 'ida')
                pageAlternatives(jogo6[3], 47, 'volta')
            }
        }
    
    
        function updateRezise(){
            
            if(jogo1 != null){
                rezise()
            }
            
        }
    
        //window.onresize = updateRezise
    
        //setTimeout(() => {
        //    if(jogo1 != null){
        //        rezise()
        //    }
        //}, 100);

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
    
            switch (rodadasJogadasGB) {
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
                let tableB = []
                tableB[0] = TimeB1
                tableB[1] = TimeB2
                tableB[2] = TimeB3
                tableB[3] = TimeB4
    
                tableB.sort((a,b) => {
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
        
                let b = 3
                for(let i = 4;i<8;i++){
                    tdTime[i].innerText = tableB[b].time
                    tdPontos[i].innerText = tableB[b].p
                    tdJogos[i].innerText = tableB[b].j
                    tdVitorias[i].innerText = tableB[b].v
                    tdEmpates[i].innerText = tableB[b].e
                    tdDerrotas[i].innerText = tableB[b].d
                    tdGolsPro[i].innerText = tableB[b].gp
                    tdGolsContra[i].innerText = tableB[b].gc
                    tdSaldoGols[i].innerText = tableB[b].sg
                    b--
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
            const tdSaldoGols = document.querySelectorAll('.cedula-saldo-gols')
            rodadasJogadasGB = rodada
            //tableB = []
            //tableB[0] = TimeB1
            //tableB[1] = TimeB2
            //tableB[2] = TimeB3
            //tableB[3] = TimeB4

            insertPontos(rodada1Time1,rodada2Time1,rodada3Time1,rodada4Time1,rodada5Time1,rodada6Time1,TimeB1, false)
            insertPontos(rodada1Time2,rodada2Time2,rodada3Time2,rodada4Time2,rodada5Time2,rodada6Time2,TimeB2, false)
            insertPontos(rodada1Time3,rodada2Time3,rodada3Time3,rodada4Time3,rodada5Time3,rodada6Time3,TimeB3, false)
            insertPontos(rodada1Time4,rodada2Time4,rodada3Time4,rodada4Time4,rodada5Time4,rodada6Time4,TimeB4, false)
            
            tableB.sort((a,b) => {
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

            let b = 3
            for(let i = 4;i<8;i++){
                tdTime[i].innerText = tableB[b].time
                tdPontos[i].innerText = tableB[b].p
                tdJogos[i].innerText = tableB[b].j
                tdVitorias[i].innerText = tableB[b].v
                tdEmpates[i].innerText = tableB[b].e
                tdDerrotas[i].innerText = tableB[b].d
                tdGolsPro[i].innerText = tableB[b].gp
                tdGolsContra[i].innerText = tableB[b].gc
                tdSaldoGols[i].innerText = tableB[b].sg
                b--
            }
            if(rodadasJogadasGB == 6){
                tableB[3].group = 'B'
                tableB[3].position = 1
                tableB[2].group = 'B'
                tableB[2].position = 2
    
                newOitavas(tableB[3], 2)
                newOitavas(tableB[2], 3)
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

            buttonSaveResult[6].addEventListener('click', function setResult(){
                let jogo = []
                let listResults = []
                listResults.push(resultsGames[24].value)
                listResults.push(resultsGames[25].value)
                listResults.push(resultsGames[26].value)
                listResults.push(resultsGames[27].value)

                if(saveResultsB1 != null){
                    console.log('Resultadores já registrados')
                    return
                }
                for(let i = 0; i<listResults.length; i++){
                    if(!listResults[i])return
                }
                for(let i = 24; i<28; i++){
                    resultsGames[i].setAttribute('readonly', 'readonly');
                }

                jogo[0] = listResults[0]
                jogo[1] = listResults[1]
                jogo[2] = listResults[2]
                jogo[3] = listResults[3]

                sessionStorage.setItem('JgFSB-1', JSON.stringify(jogo))
                saveResultsB1 = JSON.parse(sessionStorage.getItem('JgFSB-1'))

                limparAtr(TimeB1)
                limparAtr(TimeB2)
                limparAtr(TimeB3)
                limparAtr(TimeB4)
                insertResultsGame(listResults[0], listResults[1], TimeB4)
                insertResultsGame(listResults[1], listResults[0], TimeB2)
                insertResultsGame(listResults[2], listResults[3], TimeB3)
                insertResultsGame(listResults[3], listResults[2], TimeB1)
                sessionStorage.setItem('TIME1-RODB1', JSON.stringify(TimeB1))
                rodada1Time1 = JSON.parse(sessionStorage.getItem('TIME1-RODB1'))
                sessionStorage.setItem('TIME2-RODB1', JSON.stringify(TimeB2))
                rodada1Time2 = JSON.parse(sessionStorage.getItem('TIME2-RODB1'))
                sessionStorage.setItem('TIME3-RODB1', JSON.stringify(TimeB3))
                rodada1Time3 = JSON.parse(sessionStorage.getItem('TIME3-RODB1'))
                sessionStorage.setItem('TIME4-RODB1', JSON.stringify(TimeB4))
                rodada1Time4 = JSON.parse(sessionStorage.getItem('TIME4-RODB1'))
                classificacao(1)
                this.removeEventListener('click', setResult)
                this.classList.add('btn-disabled')
            })
            buttonSaveResult[7].addEventListener('click', function setResult(){
                let jogo = []
                let listResults = []
                listResults.push(resultsGames[28].value)
                listResults.push(resultsGames[29].value)
                listResults.push(resultsGames[30].value)
                listResults.push(resultsGames[31].value)

                if(saveResultsB1 == undefined){
                    console.log('Resultado do primeiro jogo não registrado')
                    return
                }
                if(saveResultsB2 != null){
                    console.log('Resultadores já registrados')
                    return
                }

                for(let i = 0; i<listResults.length; i++){
                    if(!listResults[i])return
                }
                for(let i = 28; i<32; i++){
                    resultsGames[i].setAttribute('readonly', 'readonly');
                }

                jogo[0] = Number(listResults[0])
                jogo[1] = Number(listResults[1])
                jogo[2] = Number(listResults[2])
                jogo[3] = Number(listResults[3])

                sessionStorage.setItem('JgFSB-2', JSON.stringify(jogo))
                saveResultsB2 = JSON.parse(sessionStorage.getItem('JgFSB-2'))

                limparAtr(TimeB1)
                limparAtr(TimeB2)
                limparAtr(TimeB3)
                limparAtr(TimeB4)
                insertResultsGame(listResults[0], listResults[1], TimeB1)
                insertResultsGame(listResults[1], listResults[0], TimeB4)
                insertResultsGame(listResults[2], listResults[3], TimeB2)
                insertResultsGame(listResults[3], listResults[2], TimeB3)
                sessionStorage.setItem('TIME1-RODB2', JSON.stringify(TimeB1))
                rodada2Time1 = JSON.parse(sessionStorage.getItem('TIME1-RODB2'))
                sessionStorage.setItem('TIME2-RODB2', JSON.stringify(TimeB2))
                rodada2Time2 = JSON.parse(sessionStorage.getItem('TIME2-RODB2'))
                sessionStorage.setItem('TIME3-RODB2', JSON.stringify(TimeB3))
                rodada2Time3 = JSON.parse(sessionStorage.getItem('TIME3-RODB2'))
                sessionStorage.setItem('TIME4-RODB2', JSON.stringify(TimeB4))
                rodada2Time4 = JSON.parse(sessionStorage.getItem('TIME4-RODB2'))
                classificacao(2)
                this.removeEventListener('click', setResult)
                this.classList.add('btn-disabled')
            })
            buttonSaveResult[8].addEventListener('click', function setResult(){
                let jogo = []
                let listResults = []
                listResults.push(resultsGames[32].value)
                listResults.push(resultsGames[33].value)
                listResults.push(resultsGames[34].value)
                listResults.push(resultsGames[35].value)

                if(saveResultsB2 == undefined){
                    console.log('Resultado do primeiro jogo não registrado')
                    return
                }
                if(saveResultsB3 != null){
                    console.log('Resultadores já registrados')
                    return
                }
    
                for(let i = 0; i<listResults.length; i++){
                    if(!listResults[i])return
                }
                for(let i = 32; i<36; i++){
                    resultsGames[i].setAttribute('readonly', 'readonly');
                }

                jogo[0] = Number(listResults[0])
                jogo[1] = Number(listResults[1])
                jogo[2] = Number(listResults[2])
                jogo[3] = Number(listResults[3])

                sessionStorage.setItem('JgFSB-3', JSON.stringify(jogo))
                saveResultsB3 = JSON.parse(sessionStorage.getItem('JgFSB-3'))
                
                limparAtr(TimeB1)
                limparAtr(TimeB2)
                limparAtr(TimeB3)
                limparAtr(TimeB4)
                insertResultsGame(listResults[0], listResults[1], TimeB3)
                insertResultsGame(listResults[1], listResults[0], TimeB4)
                insertResultsGame(listResults[2], listResults[3], TimeB2)
                insertResultsGame(listResults[3], listResults[2], TimeB1)
                sessionStorage.setItem('TIME1-RODB3', JSON.stringify(TimeB1))
                rodada3Time1 = JSON.parse(sessionStorage.getItem('TIME1-RODB3'))
                sessionStorage.setItem('TIME2-RODB3', JSON.stringify(TimeB2))
                rodada3Time2 = JSON.parse(sessionStorage.getItem('TIME2-RODB3'))
                sessionStorage.setItem('TIME3-RODB3', JSON.stringify(TimeB3))
                rodada3Time3 = JSON.parse(sessionStorage.getItem('TIME3-RODB3'))
                sessionStorage.setItem('TIME4-RODB3', JSON.stringify(TimeB4))
                rodada3Time4 = JSON.parse(sessionStorage.getItem('TIME4-RODB3'))
                classificacao(3)
                this.removeEventListener('click', setResult)
                this.classList.add('btn-disabled')
            })
            buttonSaveResult[9].addEventListener('click', function setResult(){
                let jogo = []
                let listResults = []
                listResults.push(resultsGames[36].value)
                listResults.push(resultsGames[37].value)
                listResults.push(resultsGames[38].value)
                listResults.push(resultsGames[39].value)

                if(saveResultsB3 == undefined){
                    console.log('Resultado do primeiro jogo não registrado')
                    return
                }
                if(saveResultsB4 != null){
                    console.log('Resultadores já registrados')
                    return
                }
    
                for(let i = 0; i<listResults.length; i++){
                    if(!listResults[i])return
                }
                for(let i = 36; i<40; i++){
                    resultsGames[i].setAttribute('readonly', 'readonly');
                }

                jogo[0] = Number(listResults[0])
                jogo[1] = Number(listResults[1])
                jogo[2] = Number(listResults[2])
                jogo[3] = Number(listResults[3])

                sessionStorage.setItem('JgFSB-4', JSON.stringify(jogo))
                saveResultsB4 = JSON.parse(sessionStorage.getItem('JgFSB-4'))
                
                limparAtr(TimeB1)
                limparAtr(TimeB2)
                limparAtr(TimeB3)
                limparAtr(TimeB4)
                insertResultsGame(listResults[0], listResults[1], TimeB1)
                insertResultsGame(listResults[1], listResults[0], TimeB2)
                insertResultsGame(listResults[2], listResults[3], TimeB4)
                insertResultsGame(listResults[3], listResults[2], TimeB3)
                sessionStorage.setItem('TIME1-RODB4', JSON.stringify(TimeB1))
                rodada4Time1 = JSON.parse(sessionStorage.getItem('TIME1-RODB4'))
                sessionStorage.setItem('TIME2-RODB4', JSON.stringify(TimeB2))
                rodada4Time2 = JSON.parse(sessionStorage.getItem('TIME2-RODB4'))
                sessionStorage.setItem('TIME3-RODB4', JSON.stringify(TimeB3))
                rodada4Time3 = JSON.parse(sessionStorage.getItem('TIME3-RODB4'))
                sessionStorage.setItem('TIME4-RODB4', JSON.stringify(TimeB4))
                rodada4Time4 = JSON.parse(sessionStorage.getItem('TIME4-RODB4'))
                classificacao(4)
                this.removeEventListener('click', setResult)
                this.classList.add('btn-disabled')
            })
            buttonSaveResult[10].addEventListener('click', function setResult(){
                let jogo = []
                let listResults = []
                listResults.push(resultsGames[40].value)
                listResults.push(resultsGames[41].value)
                listResults.push(resultsGames[42].value)
                listResults.push(resultsGames[43].value)

                if(saveResultsB4 == undefined){
                    console.log('Resultado do primeiro jogo não registrado')
                    return
                }
                if(saveResultsB5 != null){
                    console.log('Resultadores já registrados')
                    return
                }
    
                for(let i = 0; i<listResults.length; i++){
                    if(!listResults[i])return
                }
                for(let i = 40; i<44; i++){
                    resultsGames[i].setAttribute('readonly', 'readonly');
                }

                jogo[0] = Number(listResults[0])
                jogo[1] = Number(listResults[1])
                jogo[2] = Number(listResults[2])
                jogo[3] = Number(listResults[3])

                sessionStorage.setItem('JgFSB-5', JSON.stringify(jogo))
                saveResultsB5 = JSON.parse(sessionStorage.getItem('JgFSB-5'))
            
                limparAtr(TimeB1)
                limparAtr(TimeB2)
                limparAtr(TimeB3)
                limparAtr(TimeB4)
                insertResultsGame(listResults[0], listResults[1], TimeB4)
                insertResultsGame(listResults[1], listResults[0], TimeB1)
                insertResultsGame(listResults[2], listResults[3], TimeB3)
                insertResultsGame(listResults[3], listResults[2], TimeB2)
                sessionStorage.setItem('TIME1-RODB5', JSON.stringify(TimeB1))
                rodada5Time1 = JSON.parse(sessionStorage.getItem('TIME1-RODB5'))
                sessionStorage.setItem('TIME2-RODB5', JSON.stringify(TimeB2))
                rodada5Time2 = JSON.parse(sessionStorage.getItem('TIME2-RODB5'))
                sessionStorage.setItem('TIME3-RODB5', JSON.stringify(TimeB3))
                rodada5Time3 = JSON.parse(sessionStorage.getItem('TIME3-RODB5'))
                sessionStorage.setItem('TIME4-RODB5', JSON.stringify(TimeB4))
                rodada5Time4 = JSON.parse(sessionStorage.getItem('TIME4-RODB5'))
                classificacao(5)
                this.removeEventListener('click', setResult)
                this.classList.add('btn-disabled')
            })
            buttonSaveResult[11].addEventListener('click', function setResult(){
                let jogo = []
                let listResults = []
                listResults.push(resultsGames[44].value)
                listResults.push(resultsGames[45].value)
                listResults.push(resultsGames[46].value)
                listResults.push(resultsGames[47].value)

                if(saveResultsB5 == undefined){
                    console.log('Resultado do primeiro jogo não registrado')
                    return
                }
                if(saveResultsB6 != null){
                    console.log('Resultadores já registrados')
                    return
                }
    
                for(let i = 0; i<listResults.length; i++){
                    if(!listResults[i])return
                }
                for(let i = 44; i<48; i++){
                    resultsGames[i].setAttribute('readonly', 'readonly');
                }

                jogo[0] = Number(listResults[0])
                jogo[1] = Number(listResults[1])
                jogo[2] = Number(listResults[2])
                jogo[3] = Number(listResults[3])

                sessionStorage.setItem('JgFSB-6', JSON.stringify(jogo))
                saveResultsB6 = JSON.parse(sessionStorage.getItem('JgFSB-6'))

                limparAtr(TimeB1)
                limparAtr(TimeB2)
                limparAtr(TimeB3)
                limparAtr(TimeB4)
                insertResultsGame(listResults[0], listResults[1], TimeB2)
                insertResultsGame(listResults[1], listResults[0], TimeB4)
                insertResultsGame(listResults[2], listResults[3], TimeB1)
                insertResultsGame(listResults[3], listResults[2], TimeB3)
                sessionStorage.setItem('TIME1-RODB6', JSON.stringify(TimeB1))
                rodada6Time1 = JSON.parse(sessionStorage.getItem('TIME1-RODB6'))
                sessionStorage.setItem('TIME2-RODB6', JSON.stringify(TimeB2))
                rodada6Time2 = JSON.parse(sessionStorage.getItem('TIME2-RODB6'))
                sessionStorage.setItem('TIME3-RODB6', JSON.stringify(TimeB3))
                rodada6Time3 = JSON.parse(sessionStorage.getItem('TIME3-RODB6'))
                sessionStorage.setItem('TIME4-RODB6', JSON.stringify(TimeB4))
                rodada6Time4 = JSON.parse(sessionStorage.getItem('TIME4-RODB6'))
                classificacao(6)
                this.removeEventListener('click', setResult)
                this.classList.add('btn-disabled')
            })
        }

        jogo1 = JSON.parse(sessionStorage.getItem('RoundB1'))
        jogo2 = JSON.parse(sessionStorage.getItem('RoundB2'))
        jogo3 = JSON.parse(sessionStorage.getItem('RoundB3'))
        jogo4 = JSON.parse(sessionStorage.getItem('RoundB4'))
        jogo5 = JSON.parse(sessionStorage.getItem('RoundB5'))
        jogo6 = JSON.parse(sessionStorage.getItem('RoundB6'))

        setTimeout(addFunctionButton, 200)

    return(
        <div className="container-fases">
            <h2>grupo b</h2>
            <div className="container-table-jogos">
                <table id="grupoB" className="libertadores">
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
                                    {tableB != null
                                        ?
                                            tableB[3].time
                                        :
                                            ''
                                    }
                                </abbr>
                            </td>
                            <td className="cedula-pontos">
                                <b>
                                    {tableB != null
                                        ?
                                            tableB[3].p
                                        :
                                            0
                                    }
                                </b>
                            </td>
                            <td className="cedula-jogos">
                                {tableB != null
                                    ?
                                        tableB[3].j
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-vitorias">
                                {tableB != null
                                    ?
                                        tableB[3].v
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-empates">
                                {tableB != null
                                    ?
                                        tableB[3].e
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-derrotas">
                                {tableB != null
                                    ?
                                        tableB[3].d
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-gols-pro">
                                {tableB != null
                                    ?
                                        tableB[3].gp
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-gols-contra">
                                {tableB != null
                                    ?
                                        tableB[3].gc
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-saldo-gols">
                                {tableB != null
                                    ?
                                        tableB[3].sg
                                    :
                                        0
                                }
                            </td>
                        </tr>
                        <tr>
                            <td rowSpan={1} className="classificado">2</td>
                            <td className="cedula-time2">
                                <abbr className="cedula-time">
                                    {tableB != null
                                        ?
                                            tableB[2].time
                                        :
                                            ''
                                    }                                    
                                </abbr>
                            </td>
                            <td className="cedula-pontos">
                                <b>
                                    {tableB != null
                                        ?
                                            tableB[2].p
                                        :
                                            0
                                    }   
                                </b>
                            </td>
                            <td className="cedula-jogos">
                                {tableB != null
                                    ?
                                        tableB[2].j
                                    :
                                        0
                                }   
                            </td>
                            <td className="cedula-vitorias">
                                {tableB != null
                                    ?
                                        tableB[2].v
                                    :
                                        0
                                }   
                            </td>
                            <td className="cedula-empates">
                                {tableB != null
                                    ?
                                        tableB[2].e
                                    :
                                        0
                                }   
                            </td>
                            <td className="cedula-derrotas">
                                {tableB != null
                                    ?
                                        tableB[2].d
                                    :
                                        0
                                }   
                            </td>
                            <td className="cedula-gols-pro">
                                {tableB != null
                                    ?
                                        tableB[2].gp
                                    :
                                        0
                                }   
                            </td>
                            <td className="cedula-gols-contra">
                                {tableB != null
                                    ?
                                        tableB[2].gc
                                    :
                                        0
                                }   
                            </td>
                            <td className="cedula-saldo-gols">
                                {tableB != null
                                    ?
                                        tableB[2].sg
                                    :
                                        0
                                }   
                            </td>
                        </tr>
                        <tr>
                            <td rowSpan={1} className="sul-americana">3</td>
                            <td className="cedula-time3">
                                <abbr className="cedula-time">
                                    {tableB != null
                                        ?
                                            tableB[1].time
                                        :
                                            ''
                                    }               
                                </abbr>
                            </td>
                            <td className="cedula-pontos">
                                <b>
                                    {tableB != null
                                        ?
                                            tableB[1].p
                                        :
                                            0
                                    }
                                </b>
                            </td>
                            <td className="cedula-jogos">
                                {tableB != null
                                    ?
                                        tableB[1].j
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-vitorias">
                                {tableB != null
                                    ?
                                        tableB[1].v
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-empates">
                                {tableB != null
                                    ?
                                        tableB[1].e
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-derrotas">
                                {tableB != null
                                    ?
                                        tableB[1].d
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-gols-pro">
                                {tableB != null
                                    ?
                                        tableB[1].gp
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-gols-contra">
                                {tableB != null
                                    ?
                                        tableB[1].gc
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-saldo-gols">
                                {tableB != null
                                    ?
                                        tableB[1].sg
                                    :
                                        0
                                }
                            </td>
                        </tr>
                        <tr>
                            <td rowSpan={1} className="eliminado">4</td>
                            <td className="cedula-time4">
                                <abbr className="cedula-time">
                                    {tableB != null
                                        ?
                                            tableB[0].time
                                        :
                                            ''
                                    }                     
                                </abbr>
                            </td>
                            <td className="cedula-pontos">
                                <b>
                                    {tableB != null
                                        ?
                                            tableB[0].p
                                        :
                                            0
                                    }
                                </b>
                            </td>
                            <td className="cedula-jogos">
                                {tableB != null
                                    ?
                                        tableB[0].j
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-vitorias">
                                {tableB != null
                                    ?
                                        tableB[0].v
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-empates">
                                {tableB != null
                                    ?
                                        tableB[0].e
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-derrotas">
                                {tableB != null
                                    ?
                                        tableB[0].d
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-gols-pro">
                                {tableB != null
                                    ?
                                        tableB[0].gp
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-gols-contra">
                                {tableB != null
                                    ?
                                        tableB[0].gc
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-saldo-gols">
                                {tableB != null
                                    ?
                                        tableB[0].sg
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
                                                        saveResultsB1 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsB1[0]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResultsB1 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsB1[1]}
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
                                                        saveResultsB1 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsB1[2]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResultsB1 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsB1[3]}
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
                                                        saveResultsB2 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsB2[0]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResultsB2 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsB2[1]}
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
                                                        saveResultsB2 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsB2[2]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResultsB2 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsB2[3]}
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
                                                        saveResultsB3 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsB3[0]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResultsB3 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsB3[1]}
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
                                                        saveResultsB3 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsB3[2]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResultsB3 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsB3[3]}
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
                                                        saveResultsB4 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsB4[0]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResultsB4 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsB4[1]}
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
                                                        saveResultsB4 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsB4[2]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResultsB4 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsB4[3]}
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
                                                        saveResultsB5 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsB5[0]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResultsB5 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsB5[1]}
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
                                                        saveResultsB5 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsB5[2]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResultsB5 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsB5[3]}
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
                                                        saveResultsB6 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsB6[0]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResultsB6 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsB6[1]}
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
                                                        saveResultsB6 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsB6[2]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResultsB6 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResultsB6[3]}
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