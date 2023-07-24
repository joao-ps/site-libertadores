import React, { useRef, useState, useContext } from "react";
 // Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

 // Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import '../styles/grupos.sass'

import { Navigation } from "swiper";

import { FaseFinal } from "../componentes/api/getTeams";

export function GrupoA({group}){
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
    const Time1 =
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
        const Time2 =
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
        const Time3 =
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
        const Time4 =
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
    let tableA

    let saveResults1
    let saveResults2
    let saveResults3
    let saveResults4
    let saveResults5
    let saveResults6

    saveResults1 = JSON.parse(sessionStorage.getItem('JgFS-1'))
    saveResults2 = JSON.parse(sessionStorage.getItem('JgFS-2'))
    saveResults3 = JSON.parse(sessionStorage.getItem('JgFS-3'))
    saveResults4 = JSON.parse(sessionStorage.getItem('JgFS-4'))
    saveResults5 = JSON.parse(sessionStorage.getItem('JgFS-5'))
    saveResults6 = JSON.parse(sessionStorage.getItem('JgFS-6'))
    
    let rodadasJogadas = 1

    let rodada1Time1 = JSON.parse(sessionStorage.getItem('TIME1-ROD1'))
    let rodada2Time1 = JSON.parse(sessionStorage.getItem('TIME1-ROD2'))
    let rodada3Time1 = JSON.parse(sessionStorage.getItem('TIME1-ROD3'))
    let rodada4Time1 = JSON.parse(sessionStorage.getItem('TIME1-ROD4'))
    let rodada5Time1 = JSON.parse(sessionStorage.getItem('TIME1-ROD5'))
    let rodada6Time1 = JSON.parse(sessionStorage.getItem('TIME1-ROD6'))

    let rodada1Time2 = JSON.parse(sessionStorage.getItem('TIME2-ROD1'))
    let rodada2Time2 = JSON.parse(sessionStorage.getItem('TIME2-ROD2'))
    let rodada3Time2 = JSON.parse(sessionStorage.getItem('TIME2-ROD3'))
    let rodada4Time2 = JSON.parse(sessionStorage.getItem('TIME2-ROD4'))
    let rodada5Time2 = JSON.parse(sessionStorage.getItem('TIME2-ROD5'))
    let rodada6Time2 = JSON.parse(sessionStorage.getItem('TIME2-ROD6'))

    let rodada1Time3 = JSON.parse(sessionStorage.getItem('TIME3-ROD1'))
    let rodada2Time3 = JSON.parse(sessionStorage.getItem('TIME3-ROD2'))
    let rodada3Time3 = JSON.parse(sessionStorage.getItem('TIME3-ROD3'))
    let rodada4Time3 = JSON.parse(sessionStorage.getItem('TIME3-ROD4'))
    let rodada5Time3 = JSON.parse(sessionStorage.getItem('TIME3-ROD5'))
    let rodada6Time3 = JSON.parse(sessionStorage.getItem('TIME3-ROD6'))

    let rodada1Time4 = JSON.parse(sessionStorage.getItem('TIME4-ROD1'))
    let rodada2Time4 = JSON.parse(sessionStorage.getItem('TIME4-ROD2'))
    let rodada3Time4 = JSON.parse(sessionStorage.getItem('TIME4-ROD3'))
    let rodada4Time4 = JSON.parse(sessionStorage.getItem('TIME4-ROD4'))
    let rodada5Time4 = JSON.parse(sessionStorage.getItem('TIME4-ROD5'))
    let rodada6Time4 = JSON.parse(sessionStorage.getItem('TIME4-ROD6'))
    
    if(Grupo != null){
        Time1.time = Grupo[0].time
        Time2.time = Grupo[1].time
        Time3.time = Grupo[2].time
        Time4.time = Grupo[3].time
        Time1.placar = Grupo[0].namePlacar
        Time2.placar = Grupo[1].namePlacar
        Time3.placar = Grupo[2].namePlacar
        Time4.placar = Grupo[3].namePlacar
        Time1.pais = Grupo[0].pais
        Time2.pais = Grupo[1].pais
        Time3.pais = Grupo[2].pais
        Time4.pais = Grupo[3].pais
        Time1.estadio = Grupo[0].estadio
        Time2.estadio = Grupo[1].estadio
        Time3.estadio = Grupo[2].estadio
        Time4.estadio = Grupo[3].estadio
        Time1.url = Grupo[0].url
        Time2.url = Grupo[1].url
        Time3.url = Grupo[2].url
        Time4.url = Grupo[3].url
        tableA = []
        tableA[0] = Time4
        tableA[1] = Time3
        tableA[2] = Time2
        tableA[3] = Time1

        //ROUND 1
        jogo1.push(Grupo[0])
        jogo1.push(Grupo[1])
        jogo1.push(Grupo[2])
        jogo1.push(Grupo[3])
        //ROUND 2
        jogo2.push(Grupo[3])
        jogo2.push(Grupo[0])
        jogo2.push(Grupo[1])
        jogo2.push(Grupo[2])
        //ROUND 3
        jogo3.push(Grupo[3])
        jogo3.push(Grupo[1])
        jogo3.push(Grupo[2])
        jogo3.push(Grupo[0])
        //ROUND 4
        jogo4.push(Grupo[0])
        jogo4.push(Grupo[2])
        jogo4.push(Grupo[1])
        jogo4.push(Grupo[3])
        //ROUND 5
        jogo5.push(Grupo[2])
        jogo5.push(Grupo[1])
        jogo5.push(Grupo[0])
        jogo5.push(Grupo[3])
        //ROUND 6
        jogo6.push(Grupo[3])
        jogo6.push(Grupo[2])
        jogo6.push(Grupo[1])
        jogo6.push(Grupo[0])

        sessionStorage.setItem('RoundA1', JSON.stringify(jogo1))
        sessionStorage.setItem('RoundA2', JSON.stringify(jogo2))
        sessionStorage.setItem('RoundA3', JSON.stringify(jogo3))
        sessionStorage.setItem('RoundA4', JSON.stringify(jogo4))
        sessionStorage.setItem('RoundA5', JSON.stringify(jogo5))
        sessionStorage.setItem('RoundA6', JSON.stringify(jogo6))
    }

    limparAtr(Time1)
    limparAtr(Time2)
    limparAtr(Time3)
    limparAtr(Time4)

    if(rodada1Time1 != null){
      
        for (let index = 2; index < 7; index++) {
            switch (index) {
                case 2:
                    if(rodada2Time1 != null){
                        rodadasJogadas = 2
                    }
                    break;

                case 3:
                    if(rodada3Time1 != null){
                        rodadasJogadas = 3
                    }
                    break;

                case 4:
                    if(rodada4Time1 != null){
                        rodadasJogadas = 4
                    }
                    break;

                case 5:
                    if(rodada5Time1 != null){
                        rodadasJogadas = 5
                    }
                    break;

                case 6:
                    if(rodada6Time1 != null){
                        rodadasJogadas = 6
                    }
                    break;
            }
        }

        setTimeout(() => {
            insertPontos(rodada1Time1,rodada2Time1,rodada3Time1,rodada4Time1,rodada5Time1,rodada6Time1,Time1, false)
            insertPontos(rodada1Time2,rodada2Time2,rodada3Time2,rodada4Time2,rodada5Time2,rodada6Time2,Time2, false)
            insertPontos(rodada1Time3,rodada2Time3,rodada3Time3,rodada4Time3,rodada5Time3,rodada6Time3,Time3, false)
            insertPontos(rodada1Time4,rodada2Time4,rodada3Time4,rodada4Time4,rodada5Time4,rodada6Time4,Time4, true)
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

        console.log('setTeamPage2')

        //if(sessionStorage.getItem('RoundA1') != null){
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
        //}
    }

    function rezise(){
                            
        if(window.innerWidth < 1000){
            setTeamPage(jogo1[0], 0, 'ida')
            setTeamPage(jogo1[1], 1, 'volta')
            setTeamPage(jogo1[2], 2, 'ida')
            setTeamPage(jogo1[3], 3, 'volta')
            setTeamPage(jogo2[0], 4, 'ida')
            setTeamPage(jogo2[1], 5, 'volta')
            setTeamPage(jogo2[2], 6, 'ida')
            setTeamPage(jogo2[3], 7, 'volta')
            setTeamPage(jogo3[0], 8, 'ida')
            setTeamPage(jogo3[1], 9, 'volta')
            setTeamPage(jogo3[2], 10, 'ida')
            setTeamPage(jogo3[3], 11, 'volta')
            setTeamPage(jogo4[0], 12, 'ida')
            setTeamPage(jogo4[1], 13, 'volta')
            setTeamPage(jogo4[2], 14, 'ida')
            setTeamPage(jogo4[3], 15, 'volta')
            setTeamPage(jogo5[0], 16, 'ida')
            setTeamPage(jogo5[1], 17, 'volta')
            setTeamPage(jogo5[2], 18, 'ida')
            setTeamPage(jogo5[3], 19, 'volta')
            setTeamPage(jogo6[0], 20, 'ida')
            setTeamPage(jogo6[1], 21, 'volta')
            setTeamPage(jogo6[2], 22, 'ida')
            setTeamPage(jogo6[3], 23, 'volta')
        }else{
            pageAlternatives(jogo1[0], 0, 'ida')
            pageAlternatives(jogo1[1], 1, 'volta')
            pageAlternatives(jogo1[2], 2, 'ida')
            pageAlternatives(jogo1[3], 3, 'volta')
            pageAlternatives(jogo2[0], 4, 'ida')
            pageAlternatives(jogo2[1], 5, 'volta')
            pageAlternatives(jogo2[2], 6, 'ida')
            pageAlternatives(jogo2[3], 7, 'volta')
            pageAlternatives(jogo3[0], 8, 'ida')
            pageAlternatives(jogo3[1], 9, 'volta')
            pageAlternatives(jogo3[2], 10, 'ida')
            pageAlternatives(jogo3[3], 11, 'volta')
            pageAlternatives(jogo4[0], 12, 'ida')
            pageAlternatives(jogo4[1], 13, 'volta')
            pageAlternatives(jogo4[2], 14, 'ida')
            pageAlternatives(jogo4[3], 15, 'volta')
            pageAlternatives(jogo5[0], 16, 'ida')
            pageAlternatives(jogo5[1], 17, 'volta')
            pageAlternatives(jogo5[2], 18, 'ida')
            pageAlternatives(jogo5[3], 19, 'volta')
            pageAlternatives(jogo6[0], 20, 'ida')
            pageAlternatives(jogo6[1], 21, 'volta')
            pageAlternatives(jogo6[2], 22, 'ida')
            pageAlternatives(jogo6[3], 23, 'volta')
        }
    }


    function updateRezise(){
        if(jogo1 != null){
            rezise()
        }
    }

    //window.onresize = updateReziseGA

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

        switch (rodadasJogadas) {
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
            let tableA = []
            tableA[0] = Time1
            tableA[1] = Time2
            tableA[2] = Time3
            tableA[3] = Time4

            tableA.sort((a,b) => {
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
                            }
                        }
                    }
                }else{
                    return -1
                }
            })
    
            let v = 3
            tableA.forEach((element,index,array) => {
                tdTime[index].innerText = tableA[v].time
                tdPontos[index].innerText = tableA[v].p
                tdJogos[index].innerText = tableA[v].j
                tdVitorias[index].innerText = tableA[v].v
                tdEmpates[index].innerText = tableA[v].e
                tdDerrotas[index].innerText = tableA[v].d
                tdGolsPro[index].innerText = tableA[v].gp
                tdGolsContra[index].innerText = tableA[v].gc
                tdSaldoGols[index].innerText = tableA[v].sg
                v--
            })
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
        rodadasJogadas = rodada
        //tableA[0] = Time1
        //tableA[1] = Time2
        //tableA[2] = Time3
        //tableA[3] = Time4

        insertPontos(rodada1Time1,rodada2Time1,rodada3Time1,rodada4Time1,rodada5Time1,rodada6Time1,Time1, false)
        insertPontos(rodada1Time2,rodada2Time2,rodada3Time2,rodada4Time2,rodada5Time2,rodada6Time2,Time2, false)
        insertPontos(rodada1Time3,rodada2Time3,rodada3Time3,rodada4Time3,rodada5Time3,rodada6Time3,Time3, false)
        insertPontos(rodada1Time4,rodada2Time4,rodada3Time4,rodada4Time4,rodada5Time4,rodada6Time4,Time4, false)
        //loadingTeam()
        
        tableA.sort((a,b) => {
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
                        }
                    }
                }
            }else{
                return -1
            }
        })

        let v = 3
        tableA.forEach((element,index,array) => {
            tdTime[index].innerText = tableA[v].time
            tdPontos[index].innerText = tableA[v].p
            tdJogos[index].innerText = tableA[v].j
            tdVitorias[index].innerText = tableA[v].v
            tdEmpates[index].innerText = tableA[v].e
            tdDerrotas[index].innerText = tableA[v].d
            tdGolsPro[index].innerText = tableA[v].gp
            tdGolsContra[index].innerText = tableA[v].gc
            tdSaldoGols[index].innerText = tableA[v].sg
            v--
        })
        
        if(rodadasJogadas == 6){
            tableA[3].group = 'A'
            tableA[3].position = 1
            tableA[2].group = 'A'
            tableA[2].position = 2

            newOitavas(tableA[3], 0)
            newOitavas(tableA[2], 1)
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

        buttonSaveResult[0].addEventListener('click', function setResult(){
            let jogo = []
            let listResults = []
            listResults.push(resultsGames[0].value)
            listResults.push(resultsGames[1].value)
            listResults.push(resultsGames[2].value)
            listResults.push(resultsGames[3].value)

            if(saveResults1 != null){
                console.log('Resultadores já registrados')
                return
            }
            for(let i = 0; i<listResults.length; i++){
                if(!listResults[i])return
            }
            for(let i = 0; i<4; i++){
                resultsGames[i].setAttribute('readonly', 'readonly');
            }

            jogo[0] = listResults[0]
            jogo[1] = listResults[1]
            jogo[2] = listResults[2]
            jogo[3] = listResults[3]

            sessionStorage.setItem('JgFS-1', JSON.stringify(jogo))
            saveResults1 = JSON.parse(sessionStorage.getItem('JgFS-1'))

            limparAtr(Time1)
            limparAtr(Time2)
            limparAtr(Time3)
            limparAtr(Time4)
            insertResultsGame(listResults[0], listResults[1], Time1)
            insertResultsGame(listResults[1], listResults[0], Time2)
            insertResultsGame(listResults[2], listResults[3], Time3)
            insertResultsGame(listResults[3], listResults[2], Time4)
            sessionStorage.setItem('TIME1-ROD1', JSON.stringify(Time1))
            rodada1Time1 = JSON.parse(sessionStorage.getItem('TIME1-ROD1'))
            sessionStorage.setItem('TIME2-ROD1', JSON.stringify(Time2))
            rodada1Time2 = JSON.parse(sessionStorage.getItem('TIME2-ROD1'))
            sessionStorage.setItem('TIME3-ROD1', JSON.stringify(Time3))
            rodada1Time3 = JSON.parse(sessionStorage.getItem('TIME3-ROD1'))
            sessionStorage.setItem('TIME4-ROD1', JSON.stringify(Time4))
            rodada1Time4 = JSON.parse(sessionStorage.getItem('TIME4-ROD1'))
            classificacao(1)
            this.removeEventListener('click', setResult)
            this.classList.add('btn-disabled')
        })
        buttonSaveResult[1].addEventListener('click', function setResult(){
            let jogo = []
            let listResults = []
            listResults.push(resultsGames[4].value)
            listResults.push(resultsGames[5].value)
            listResults.push(resultsGames[6].value)
            listResults.push(resultsGames[7].value)

            if(saveResults1 == undefined){
                console.log('Resultado do primeiro jogo não registrado')
                return
            }
            if(saveResults2 != null){
                console.log('Resultadores já registrados')
                return
            }

            for(let i = 0; i<listResults.length; i++){
                if(!listResults[i])return
            }
            //if(buttonSaveResult[0].classList.contains('btn-disabled') == false){
            //    return
            //}
            for(let i = 4; i<8; i++){
                resultsGames[i].setAttribute('readonly', 'readonly');
            }

            jogo[0] = Number(listResults[0])
            jogo[1] = Number(listResults[1])
            jogo[2] = Number(listResults[2])
            jogo[3] = Number(listResults[3])

            sessionStorage.setItem('JgFS-2', JSON.stringify(jogo))
            saveResults2 = JSON.parse(sessionStorage.getItem('JgFS-2'))

            limparAtr(Time1)
            limparAtr(Time2)
            limparAtr(Time3)
            limparAtr(Time4)
            insertResultsGame(listResults[0], listResults[1], Time4)
            insertResultsGame(listResults[1], listResults[0], Time1)
            insertResultsGame(listResults[2], listResults[3], Time2)
            insertResultsGame(listResults[3], listResults[2], Time3)
            sessionStorage.setItem('TIME1-ROD2', JSON.stringify(Time1))
            rodada2Time1 = JSON.parse(sessionStorage.getItem('TIME1-ROD2'))
            sessionStorage.setItem('TIME2-ROD2', JSON.stringify(Time2))
            rodada2Time2 = JSON.parse(sessionStorage.getItem('TIME2-ROD2'))
            sessionStorage.setItem('TIME3-ROD2', JSON.stringify(Time3))
            rodada2Time3 = JSON.parse(sessionStorage.getItem('TIME3-ROD2'))
            sessionStorage.setItem('TIME4-ROD2', JSON.stringify(Time4))
            rodada2Time4 = JSON.parse(sessionStorage.getItem('TIME4-ROD2'))
            classificacao(2)
            this.removeEventListener('click', setResult)
            this.classList.add('btn-disabled')
        })
        buttonSaveResult[2].addEventListener('click', function setResult(){
            let jogo = []
            let listResults = []
            listResults.push(resultsGames[8].value)
            listResults.push(resultsGames[9].value)
            listResults.push(resultsGames[10].value)
            listResults.push(resultsGames[11].value)

            if(saveResults2 == undefined){
                console.log('Resultado do primeiro jogo não registrado')
                return
            }
            if(saveResults3 != null){
                console.log('Resultadores já registrados')
                return
            }

            for(let i = 0; i<listResults.length; i++){
                if(!listResults[i])return
            }
            for(let i = 8; i<12; i++){
                resultsGames[i].setAttribute('readonly', 'readonly');
            }

            jogo[0] = Number(listResults[0])
            jogo[1] = Number(listResults[1])
            jogo[2] = Number(listResults[2])
            jogo[3] = Number(listResults[3])

            sessionStorage.setItem('JgFS-3', JSON.stringify(jogo))
            saveResults3 = JSON.parse(sessionStorage.getItem('JgFS-3'))

            limparAtr(Time1)
            limparAtr(Time2)
            limparAtr(Time3)
            limparAtr(Time4)
            insertResultsGame(listResults[0], listResults[1], Time4)
            insertResultsGame(listResults[1], listResults[0], Time2)
            insertResultsGame(listResults[2], listResults[3], Time3)
            insertResultsGame(listResults[3], listResults[2], Time1)
            sessionStorage.setItem('TIME1-ROD3', JSON.stringify(Time1))
            rodada3Time1 = JSON.parse(sessionStorage.getItem('TIME1-ROD3'))
            sessionStorage.setItem('TIME2-ROD3', JSON.stringify(Time2))
            rodada3Time2 = JSON.parse(sessionStorage.getItem('TIME2-ROD3'))
            sessionStorage.setItem('TIME3-ROD3', JSON.stringify(Time3))
            rodada3Time3 = JSON.parse(sessionStorage.getItem('TIME3-ROD3'))
            sessionStorage.setItem('TIME4-ROD3', JSON.stringify(Time4))
            rodada3Time4 = JSON.parse(sessionStorage.getItem('TIME4-ROD3'))
            classificacao(3)
            this.removeEventListener('click', setResult)
            this.classList.add('btn-disabled')
        })
        buttonSaveResult[3].addEventListener('click', function setResult(){
            let jogo = []
            let listResults = []
            listResults.push(resultsGames[12].value)
            listResults.push(resultsGames[13].value)
            listResults.push(resultsGames[14].value)
            listResults.push(resultsGames[15].value)

            if(saveResults3 == undefined){
                console.log('Resultado do primeiro jogo não registrado')
                return
            }
            if(saveResults4 != null){
                console.log('Resultadores já registrados')
                return
            }

            for(let i = 0; i<listResults.length; i++){
                if(!listResults[i])return
            }
            for(let i = 12; i<16; i++){
                resultsGames[i].setAttribute('readonly', 'readonly');
            }

            jogo[0] = Number(listResults[0])
            jogo[1] = Number(listResults[1])
            jogo[2] = Number(listResults[2])
            jogo[3] = Number(listResults[3])

            sessionStorage.setItem('JgFS-4', JSON.stringify(jogo))
            saveResults4 = JSON.parse(sessionStorage.getItem('JgFS-4'))

            limparAtr(Time1)
            limparAtr(Time2)
            limparAtr(Time3)
            limparAtr(Time4)
            insertResultsGame(listResults[0], listResults[1], Time1)
            insertResultsGame(listResults[1], listResults[0], Time3)
            insertResultsGame(listResults[2], listResults[3], Time2)
            insertResultsGame(listResults[3], listResults[2], Time4)
            sessionStorage.setItem('TIME1-ROD4', JSON.stringify(Time1))
            rodada4Time1 = JSON.parse(sessionStorage.getItem('TIME1-ROD4'))
            sessionStorage.setItem('TIME2-ROD4', JSON.stringify(Time2))
            rodada4Time2 = JSON.parse(sessionStorage.getItem('TIME2-ROD4'))
            sessionStorage.setItem('TIME3-ROD4', JSON.stringify(Time3))
            rodada4Time3 = JSON.parse(sessionStorage.getItem('TIME3-ROD4'))
            sessionStorage.setItem('TIME4-ROD4', JSON.stringify(Time4))
            rodada4Time4 = JSON.parse(sessionStorage.getItem('TIME4-ROD4'))
            classificacao(4)
            this.removeEventListener('click', setResult)
            this.classList.add('btn-disabled')
        })
        buttonSaveResult[4].addEventListener('click', function setResult(){
            let jogo = []
            let listResults = []
            listResults.push(resultsGames[16].value)
            listResults.push(resultsGames[17].value)
            listResults.push(resultsGames[18].value)
            listResults.push(resultsGames[19].value)

            if(saveResults4 == undefined){
                console.log('Resultado do primeiro jogo não registrado')
                return
            }
            if(saveResults5 != null){
                console.log('Resultadores já registrados')
                return
            }

            for(let i = 0; i<listResults.length; i++){
                if(!listResults[i])return
            }
            for(let i = 16; i<20; i++){
                resultsGames[i].setAttribute('readonly', 'readonly');
            }
            
            jogo[0] = Number(listResults[0])
            jogo[1] = Number(listResults[1])
            jogo[2] = Number(listResults[2])
            jogo[3] = Number(listResults[3])

            sessionStorage.setItem('JgFS-5', JSON.stringify(jogo))
            saveResults5 = JSON.parse(sessionStorage.getItem('JgFS-5'))
            
            limparAtr(Time1)
            limparAtr(Time2)
            limparAtr(Time3)
            limparAtr(Time4)
            insertResultsGame(listResults[0], listResults[1], Time3)
            insertResultsGame(listResults[1], listResults[0], Time2)
            insertResultsGame(listResults[2], listResults[3], Time1)
            insertResultsGame(listResults[3], listResults[2], Time4)
            sessionStorage.setItem('TIME1-ROD5', JSON.stringify(Time1))
            rodada5Time1 = JSON.parse(sessionStorage.getItem('TIME1-ROD5'))
            sessionStorage.setItem('TIME2-ROD5', JSON.stringify(Time2))
            rodada5Time2 = JSON.parse(sessionStorage.getItem('TIME2-ROD5'))
            sessionStorage.setItem('TIME3-ROD5', JSON.stringify(Time3))
            rodada5Time3 = JSON.parse(sessionStorage.getItem('TIME3-ROD5'))
            sessionStorage.setItem('TIME4-ROD5', JSON.stringify(Time4))
            rodada5Time4 = JSON.parse(sessionStorage.getItem('TIME4-ROD5'))
            classificacao(5)
            this.removeEventListener('click', setResult)
            this.classList.add('btn-disabled')
        })
        buttonSaveResult[5].addEventListener('click', function setResult(){
            let jogo = []
            let listResults = []
            listResults.push(resultsGames[20].value)
            listResults.push(resultsGames[21].value)
            listResults.push(resultsGames[22].value)
            listResults.push(resultsGames[23].value)

            if(saveResults5 == undefined){
                console.log('Resultado do primeiro jogo não registrado')
                return
            }
            if(saveResults6 != null){
                console.log('Resultadores já registrados')
                return
            }

            for(let i = 0; i<listResults.length; i++){
                if(!listResults[i])return
            }
            for(let i = 20; i<24; i++){
                resultsGames[i].setAttribute('readonly', 'readonly');
            }

            jogo[0] = Number(listResults[0])
            jogo[1] = Number(listResults[1])
            jogo[2] = Number(listResults[2])
            jogo[3] = Number(listResults[3])

            sessionStorage.setItem('JgFS-6', JSON.stringify(jogo))
            saveResults6 = JSON.parse(sessionStorage.getItem('JgFS-6'))

            limparAtr(Time1)
            limparAtr(Time2)
            limparAtr(Time3)
            limparAtr(Time4)
            insertResultsGame(listResults[0], listResults[1], Time4)
            insertResultsGame(listResults[1], listResults[0], Time3)
            insertResultsGame(listResults[2], listResults[3], Time2)
            insertResultsGame(listResults[3], listResults[2], Time1)
            sessionStorage.setItem('TIME1-ROD6', JSON.stringify(Time1))
            rodada6Time1 = JSON.parse(sessionStorage.getItem('TIME1-ROD6'))
            sessionStorage.setItem('TIME2-ROD6', JSON.stringify(Time2))
            rodada6Time2 = JSON.parse(sessionStorage.getItem('TIME2-ROD6'))
            sessionStorage.setItem('TIME3-ROD6', JSON.stringify(Time3))
            rodada6Time3 = JSON.parse(sessionStorage.getItem('TIME3-ROD6'))
            sessionStorage.setItem('TIME4-ROD6', JSON.stringify(Time4))
            rodada6Time4 = JSON.parse(sessionStorage.getItem('TIME4-ROD6'))
            classificacao(6)
            this.removeEventListener('click', setResult)
            this.classList.add('btn-disabled')
        })
    }

    jogo1 = JSON.parse(sessionStorage.getItem('RoundA1'))
    jogo2 = JSON.parse(sessionStorage.getItem('RoundA2'))
    jogo3 = JSON.parse(sessionStorage.getItem('RoundA3'))
    jogo4 = JSON.parse(sessionStorage.getItem('RoundA4'))
    jogo5 = JSON.parse(sessionStorage.getItem('RoundA5'))
    jogo6 = JSON.parse(sessionStorage.getItem('RoundA6'))

    setTimeout(addFunctionButton, 200)

    return(
        <div className="container-fases">
            <h2>grupo a</h2>
            <div className="container-table-jogos">
                <table id="grupoA" className="libertadores">
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
                                    {tableA != null
                                        ?
                                            tableA[3].time
                                        :
                                            ''
                                    }                                    
                                </abbr>
                            </td>
                            <td className="cedula-pontos">
                                <b>
                                    {tableA != null
                                        ?
                                            tableA[3].p
                                        :
                                            0
                                    }
                                </b>
                            </td>
                            <td className="cedula-jogos">
                                {tableA != null
                                    ?
                                        tableA[3].j
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-vitorias">
                                {tableA != null
                                    ?
                                        tableA[3].v
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-empates">
                                {tableA != null
                                    ?
                                        tableA[3].e
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-derrotas">
                                {tableA != null
                                    ?
                                        tableA[3].d
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-gols-pro">
                                {tableA != null
                                    ?
                                        tableA[3].gp
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-gols-contra">
                                {tableA != null
                                    ?
                                        tableA[3].gc
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-saldo-gols">
                                {tableA != null
                                    ?
                                        tableA[3].sg
                                    :
                                        0
                                }
                            </td>
                        </tr>
                        <tr>
                            <td rowSpan={1} className="classificado">2</td>
                            <td className="cedula-time2">
                                <abbr className="cedula-time">
                                    {tableA != null
                                        ?
                                            tableA[2].time
                                        :
                                            ''
                                    }                                    
                                </abbr>
                            </td>
                            <td className="cedula-pontos">
                                <b>
                                    {tableA != null
                                        ?
                                            tableA[2].p
                                        :
                                            0
                                    }
                                </b>
                            </td>
                            <td className="cedula-jogos">
                                {tableA != null
                                    ?
                                        tableA[2].j
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-vitorias">
                                {tableA != null
                                    ?
                                        tableA[2].v
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-empates">
                                {tableA != null
                                    ?
                                        tableA[2].e
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-derrotas">
                                {tableA != null
                                    ?
                                        tableA[2].d
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-gols-pro">
                                {tableA != null
                                    ?
                                        tableA[2].gp
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-gols-contra">
                                {tableA != null
                                    ?
                                        tableA[2].gc
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-saldo-gols">
                                {tableA != null
                                    ?
                                        tableA[2].sg
                                    :
                                        0
                                }
                            </td>
                        </tr>
                        <tr>
                            <td rowSpan={1} className="sul-americana">3</td>
                            <td className="cedula-time3">
                                <abbr className="cedula-time">
                                    {tableA != null
                                        ?
                                            tableA[1].time
                                        :
                                            ''
                                    }                                    
                                </abbr>
                            </td>
                            <td className="cedula-pontos">
                                <b>
                                    {tableA != null
                                        ?
                                            tableA[1].p
                                        :
                                            0
                                    }
                                </b>
                            </td>
                            <td className="cedula-jogos">
                                {tableA != null
                                    ?
                                        tableA[1].j
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-vitorias">
                                {tableA != null
                                    ?
                                        tableA[1].v
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-empates">
                                {tableA != null
                                    ?
                                        tableA[1].e
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-derrotas">
                                {tableA != null
                                    ?
                                        tableA[1].d
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-gols-pro">
                                {tableA != null
                                    ?
                                        tableA[1].gp
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-gols-contra">
                                {tableA != null
                                    ?
                                        tableA[1].gc
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-saldo-gols">
                                {tableA != null
                                    ?
                                        tableA[1].sg
                                    :
                                        0
                                }
                            </td>
                        </tr>
                        <tr>
                            <td rowSpan={1} className="eliminado">4</td>
                            <td className="cedula-time4">
                            <abbr className="cedula-time">
                                    {tableA != null
                                        ?
                                            tableA[0].time
                                        :
                                            ''
                                    }                                    
                                </abbr>
                            </td>
                            <td className="cedula-pontos">
                                <b>
                                    {tableA != null
                                        ?
                                            tableA[0].p
                                        :
                                            0
                                    }
                                </b>
                            </td>
                            <td className="cedula-jogos">
                                {tableA != null
                                    ?
                                        tableA[0].j
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-vitorias">
                                {tableA != null
                                    ?
                                        tableA[0].v
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-empates">
                                {tableA != null
                                    ?
                                        tableA[0].e
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-derrotas">
                                {tableA != null
                                    ?
                                        tableA[0].d
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-gols-pro">
                                {tableA != null
                                    ?
                                        tableA[0].gp
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-gols-contra">
                                {tableA != null
                                    ?
                                        tableA[0].gc
                                    :
                                        0
                                }
                            </td>
                            <td className="cedula-saldo-gols">
                                {tableA != null
                                    ?
                                        tableA[0].sg
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
                                                        saveResults1 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResults1[0]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResults1 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResults1[1]}
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
                                                        saveResults1 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResults1[2]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResults1 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResults1[3]}
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
                                                        saveResults2 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResults2[0]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResults2 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResults2[1]}
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
                                                        saveResults2 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResults2[2]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResults2 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResults2[3]}
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
                                                        saveResults3 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResults3[0]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResults3 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResults3[1]}
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
                                                        saveResults3 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResults3[2]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResults3 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResults3[3]}
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
                                                        saveResults4 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResults4[0]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResults4 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResults4[1]}
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
                                                        saveResults4 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResults4[2]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResults4 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResults4[3]}
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
                                                        saveResults5 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResults5[0]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResults5 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResults5[1]}
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
                                                        saveResults5 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResults5[2]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResults5 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResults5[3]}
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
                                                        saveResults6 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResults6[0]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResults6 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResults6[1]}
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
                                                        saveResults6 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResults6[2]}
                                                                    readOnly
                                                                />
                                                            :
                                                                <input type="text" className="input-time-resultado" />
                                                    }
                                                    <span>X</span>
                                                    {
                                                        saveResults6 != null
                                                            ?
                                                                <input 
                                                                    type="text" 
                                                                    className="input-time-resultado" 
                                                                    value={saveResults6[3]}
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