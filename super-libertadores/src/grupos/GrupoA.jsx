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
        previaQuartas
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
    let rodada = 1
    
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

    function classificacao(){
        const tdTime = document.querySelectorAll('.cedula-time')
        const tdPontos = document.querySelectorAll('.cedula-pontos')
        const tdJogos = document.querySelectorAll('.cedula-jogos')
        const tdVitorias = document.querySelectorAll('.cedula-vitorias')
        const tdEmpates = document.querySelectorAll('.cedula-empates')
        const tdDerrotas = document.querySelectorAll('.cedula-derrotas')
        const tdGolsPro = document.querySelectorAll('.cedula-gols-pro')
        const tdGolsContra = document.querySelectorAll('.cedula-gols-contra')
        const tdSaldoGols  = document.querySelectorAll('.cedula-saldo-gols')
        //tableA[0] = Time1
        //tableA[1] = Time2
        //tableA[2] = Time3
        //tableA[3] = Time4
        
        tableA.sort((a,b) => {
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

        if(rodada == 6){
            tableA[3].group = 'A'
            tableA[3].position = 1
            tableA[2].group = 'A'
            tableA[2].position = 2

            newOitavas(tableA[3], 0)
            newOitavas(tableA[2], 1)
        }
        rodada++

        sessionStorage.setItem('tabelaA', JSON.stringify(tableA))
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
            let listResults = []
            listResults.push(resultsGames[0].value)
            listResults.push(resultsGames[1].value)
            listResults.push(resultsGames[2].value)
            listResults.push(resultsGames[3].value)

            for(let i = 0; i<listResults.length; i++){
                if(!listResults[i])return
            }
            for(let i = 0; i<4; i++){
                resultsGames[i].setAttribute('readonly', 'readonly');
            }
            
            insertResultsGame(listResults[0], listResults[1], Time1)
            insertResultsGame(listResults[1], listResults[0], Time2)
            insertResultsGame(listResults[2], listResults[3], Time3)
            insertResultsGame(listResults[3], listResults[2], Time4)
            classificacao()
            console.log(tableA)
            this.removeEventListener('click', setResult)
            this.classList.add('btn-disabled')
        })
        buttonSaveResult[1].addEventListener('click', function setResult(){
            let listResults = []
            listResults.push(resultsGames[4].value)
            listResults.push(resultsGames[5].value)
            listResults.push(resultsGames[6].value)
            listResults.push(resultsGames[7].value)

            for(let i = 0; i<listResults.length; i++){
                if(!listResults[i])return
            }
            if(buttonSaveResult[0].classList.contains('btn-disabled') == false){
                return
            }
            for(let i = 4; i<8; i++){
                resultsGames[i].setAttribute('readonly', 'readonly');
            }

            insertResultsGame(listResults[0], listResults[1], Time4)
            insertResultsGame(listResults[1], listResults[0], Time1)
            insertResultsGame(listResults[2], listResults[3], Time2)
            insertResultsGame(listResults[3], listResults[2], Time3)
            classificacao()
            this.removeEventListener('click', setResult)
            this.classList.add('btn-disabled')
        })
        buttonSaveResult[2].addEventListener('click', function setResult(){
            let listResults = []
            listResults.push(resultsGames[8].value)
            listResults.push(resultsGames[9].value)
            listResults.push(resultsGames[10].value)
            listResults.push(resultsGames[11].value)

            for(let i = 0; i<listResults.length; i++){
                if(!listResults[i])return
            }
            if(buttonSaveResult[1].classList.contains('btn-disabled') == false){
                return
            }
            for(let i = 8; i<12; i++){
                resultsGames[i].setAttribute('readonly', 'readonly');
            }
            
            insertResultsGame(listResults[0], listResults[1], Time4)
            insertResultsGame(listResults[1], listResults[0], Time2)
            insertResultsGame(listResults[2], listResults[3], Time3)
            insertResultsGame(listResults[3], listResults[2], Time1)
            classificacao()
            this.removeEventListener('click', setResult)
            this.classList.add('btn-disabled')
        })
        buttonSaveResult[3].addEventListener('click', function setResult(){
            let listResults = []
            listResults.push(resultsGames[12].value)
            listResults.push(resultsGames[13].value)
            listResults.push(resultsGames[14].value)
            listResults.push(resultsGames[15].value)

            for(let i = 0; i<listResults.length; i++){
                if(!listResults[i])return
            }
            if(buttonSaveResult[2].classList.contains('btn-disabled') == false){
                return
            }
            for(let i = 12; i<16; i++){
                resultsGames[i].setAttribute('readonly', 'readonly');
            }
            
            insertResultsGame(listResults[0], listResults[1], Time1)
            insertResultsGame(listResults[1], listResults[0], Time3)
            insertResultsGame(listResults[2], listResults[3], Time2)
            insertResultsGame(listResults[3], listResults[2], Time4)
            classificacao()
            this.removeEventListener('click', setResult)
            this.classList.add('btn-disabled')
        })
        buttonSaveResult[4].addEventListener('click', function setResult(){
            let listResults = []
            listResults.push(resultsGames[16].value)
            listResults.push(resultsGames[17].value)
            listResults.push(resultsGames[18].value)
            listResults.push(resultsGames[19].value)

            for(let i = 0; i<listResults.length; i++){
                if(!listResults[i])return
            }
            if(buttonSaveResult[3].classList.contains('btn-disabled') == false){
                return
            }
            for(let i = 16; i<20; i++){
                resultsGames[i].setAttribute('readonly', 'readonly');
            }
            
            insertResultsGame(listResults[0], listResults[1], Time3)
            insertResultsGame(listResults[1], listResults[0], Time2)
            insertResultsGame(listResults[2], listResults[3], Time1)
            insertResultsGame(listResults[3], listResults[2], Time4)
            classificacao()
            this.removeEventListener('click', setResult)
            this.classList.add('btn-disabled')
        })
        buttonSaveResult[5].addEventListener('click', function setResult(){
            let listResults = []
            listResults.push(resultsGames[20].value)
            listResults.push(resultsGames[21].value)
            listResults.push(resultsGames[22].value)
            listResults.push(resultsGames[23].value)

            for(let i = 0; i<listResults.length; i++){
                if(!listResults[i])return
            }
            if(buttonSaveResult[4].classList.contains('btn-disabled') == false){
                return
            }
            for(let i = 20; i<24; i++){
                resultsGames[i].setAttribute('readonly', 'readonly');
            }
            
            insertResultsGame(listResults[0], listResults[1], Time4)
            insertResultsGame(listResults[1], listResults[0], Time3)
            insertResultsGame(listResults[2], listResults[3], Time2)
            insertResultsGame(listResults[3], listResults[2], Time1)
            classificacao()
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
    tableA = JSON.parse(sessionStorage.getItem('tabelaA')) 
            != null ?
                JSON.parse(sessionStorage.getItem('tabelaA')) 
                    :
                    tableA

    setTimeout(addFunctionButton, 200)

    console.log('////////// TABELA A /////////////')
    console.log(tableA)
    console.log('////////// SEÇÃO /////////////')
    console.log(JSON.parse(sessionStorage.getItem('tabelaA')))

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
                                                    <input type="text" className="input-time-resultado" />
                                                    <span>X</span>
                                                    <input type="text" className="input-time-resultado" />
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
                                                    <input type="text" className="input-time-resultado" />
                                                    <span>X</span>
                                                    <input type="text" className="input-time-resultado" />
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
                                                    <input type="text" className="input-time-resultado" />
                                                    <span>X</span>
                                                    <input type="text" className="input-time-resultado" />
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
                                                    <input type="text" className="input-time-resultado" />
                                                    <span>X</span>
                                                    <input type="text" className="input-time-resultado" />
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
                                                    <input type="text" className="input-time-resultado" />
                                                    <span>X</span>
                                                    <input type="text" className="input-time-resultado" />
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
                                                    <input type="text" className="input-time-resultado" />
                                                    <span>X</span>
                                                    <input type="text" className="input-time-resultado" />
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
                                                    <input type="text" className="input-time-resultado" />
                                                    <span>X</span>
                                                    <input type="text" className="input-time-resultado" />
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
                                                    <input type="text" className="input-time-resultado" />
                                                    <span>X</span>
                                                    <input type="text" className="input-time-resultado" />
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
                                                    <input type="text" className="input-time-resultado" />
                                                    <span>X</span>
                                                    <input type="text" className="input-time-resultado" />
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
                                                    <input type="text" className="input-time-resultado" />
                                                    <span>X</span>
                                                    <input type="text" className="input-time-resultado" />
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
                                                    <input type="text" className="input-time-resultado" />
                                                    <span>X</span>
                                                    <input type="text" className="input-time-resultado" />
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
                                                    <input type="text" className="input-time-resultado" />
                                                    <span>X</span>
                                                    <input type="text" className="input-time-resultado" />
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