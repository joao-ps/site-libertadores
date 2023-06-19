import React, { useRef, useState, useContext } from "react";
 // Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

 // Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import '../styles/grupos.sass'

import { Navigation } from "swiper";

import { FaseFinal } from "../componentes/api/getTeams";

export function GrupoD({group}){
    let [
        newOitavas,
        previaOitavas,
        newQuartas,
        previaQuartas
    ] = useContext(FaseFinal)
    
    let Grupo = group
    const TimeD1 =
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
        const TimeD2 =
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
        const TimeD3 =
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
        const TimeD4 =
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
        let tableD
        let rodada = 1

        if(Grupo != null){
            TimeD1.time = Grupo[0].time
            TimeD2.time = Grupo[1].time
            TimeD3.time = Grupo[2].time
            TimeD4.time = Grupo[3].time
            TimeD1.placar = Grupo[0].namePlacar
            TimeD2.placar = Grupo[1].namePlacar
            TimeD3.placar = Grupo[2].namePlacar
            TimeD4.placar = Grupo[3].namePlacar
            TimeD1.pais = Grupo[0].pais
            TimeD2.pais = Grupo[1].pais
            TimeD3.pais = Grupo[2].pais
            TimeD4.pais = Grupo[3].pais
            TimeD1.estadio = Grupo[0].estadio
            TimeD2.estadio = Grupo[1].estadio
            TimeD3.estadio = Grupo[2].estadio
            TimeD4.estadio = Grupo[3].estadio
            TimeD1.url = Grupo[0].url
            TimeD2.url = Grupo[1].url
            TimeD3.url = Grupo[2].url
            TimeD4.url = Grupo[3].url
            tableD = []
            tableD[0] = TimeD4
            tableD[1] = TimeD3
            tableD[2] = TimeD2
            tableD[3] = TimeD1
    
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
    
            sessionStorage.setItem('RoundD1', JSON.stringify(jogo1))
            sessionStorage.setItem('RoundD2', JSON.stringify(jogo2))
            sessionStorage.setItem('RoundD3', JSON.stringify(jogo3))
            sessionStorage.setItem('RoundD4', JSON.stringify(jogo4))
            sessionStorage.setItem('RoundD5', JSON.stringify(jogo5))
            sessionStorage.setItem('RoundD6', JSON.stringify(jogo6))
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
            //tableD = []
            //tableD[0] = TimeD1
            //tableD[1] = TimeD2
            //tableD[2] = TimeD3
            //tableD[3] = TimeD4

            tableD.sort((a,b) => {
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

            let d = 3
            for(let i = 12;i<16;i++){
                tdTime[i].innerText = tableD[d].time
                tdPontos[i].innerText = tableD[d].p
                tdJogos[i].innerText = tableD[d].j
                tdVitorias[i].innerText = tableD[d].v
                tdEmpates[i].innerText = tableD[d].e
                tdDerrotas[i].innerText = tableD[d].d
                tdGolsPro[i].innerText = tableD[d].gp
                tdGolsContra[i].innerText = tableD[d].gc
                tdSaldoGols[i].innerText = tableD[d].sg
                d--
            }

            if(rodada == 6){
                tableD[3].group = 'D'
                tableD[3].position = 1
                tableD[2].group = 'D'
                tableD[2].position = 2
    
                newOitavas(tableD[3], 6)
                newOitavas(tableD[2], 7)
            }
            rodada++

            sessionStorage.setItem('tabelaD', JSON.stringify(tableD))
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

            buttonSaveResult[18].addEventListener('click', function setResult(){
                let listResults = []
                listResults.push(resultsGames[72].value)
                listResults.push(resultsGames[73].value)
                listResults.push(resultsGames[74].value)
                listResults.push(resultsGames[75].value)
    
                for(let i = 0; i<listResults.length; i++){
                    if(!listResults[i])return
                }
                for(let i = 72; i<76; i++){
                    resultsGames[i].setAttribute('readonly', 'readonly');
                }
                
                insertResultsGame(listResults[0], listResults[1], TimeD2)
                insertResultsGame(listResults[1], listResults[0], TimeD3)
                insertResultsGame(listResults[2], listResults[3], TimeD1)
                insertResultsGame(listResults[3], listResults[2], TimeD4)
                classificacao()
                this.removeEventListener('click', setResult)
                this.classList.add('btn-disabled')
            })
            buttonSaveResult[19].addEventListener('click', function setResult(){
                let listResults = []
                listResults.push(resultsGames[76].value)
                listResults.push(resultsGames[77].value)
                listResults.push(resultsGames[78].value)
                listResults.push(resultsGames[79].value)
    
                for(let i = 0; i<listResults.length; i++){
                    if(!listResults[i])return
                }
                if(buttonSaveResult[18].classList.contains('btn-disabled') == false){
                    return
                }
                for(let i = 76; i<80; i++){
                    resultsGames[i].setAttribute('readonly', 'readonly');
                }
    
                insertResultsGame(listResults[0], listResults[1], TimeD4)
                insertResultsGame(listResults[1], listResults[0], TimeD2)
                insertResultsGame(listResults[2], listResults[3], TimeD3)
                insertResultsGame(listResults[3], listResults[2], TimeD1)
                classificacao()
                this.removeEventListener('click', setResult)
                this.classList.add('btn-disabled')
            })
            buttonSaveResult[20].addEventListener('click', function setResult(){
                let listResults = []
                listResults.push(resultsGames[80].value)
                listResults.push(resultsGames[81].value)
                listResults.push(resultsGames[82].value)
                listResults.push(resultsGames[83].value)
    
                for(let i = 0; i<listResults.length; i++){
                    if(!listResults[i])return
                }
                if(buttonSaveResult[19].classList.contains('btn-disabled') == false){
                    return
                }
                for(let i = 80; i<84; i++){
                    resultsGames[i].setAttribute('readonly', 'readonly');
                }
    
                insertResultsGame(listResults[0], listResults[1], TimeD2)
                insertResultsGame(listResults[1], listResults[0], TimeD1)
                insertResultsGame(listResults[2], listResults[3], TimeD4)
                insertResultsGame(listResults[3], listResults[2], TimeD3)
                classificacao()
                this.removeEventListener('click', setResult)
                this.classList.add('btn-disabled')
            })
            buttonSaveResult[21].addEventListener('click', function setResult(){
                let listResults = []
                listResults.push(resultsGames[84].value)
                listResults.push(resultsGames[85].value)
                listResults.push(resultsGames[86].value)
                listResults.push(resultsGames[87].value)
    
                for(let i = 0; i<listResults.length; i++){
                    if(!listResults[i])return
                }
                if(buttonSaveResult[20].classList.contains('btn-disabled') == false){
                    return
                }
                for(let i = 84; i<88; i++){
                    resultsGames[i].setAttribute('readonly', 'readonly');
                }
    
                insertResultsGame(listResults[0], listResults[1], TimeD3)
                insertResultsGame(listResults[1], listResults[0], TimeD4)
                insertResultsGame(listResults[2], listResults[3], TimeD1)
                insertResultsGame(listResults[3], listResults[2], TimeD2)
                classificacao()
                this.removeEventListener('click', setResult)
                this.classList.add('btn-disabled')
            })
            buttonSaveResult[22].addEventListener('click', function setResult(){
                let listResults = []
                listResults.push(resultsGames[88].value)
                listResults.push(resultsGames[89].value)
                listResults.push(resultsGames[90].value)
                listResults.push(resultsGames[91].value)
    
                for(let i = 0; i<listResults.length; i++){
                    if(!listResults[i])return
                }
                if(buttonSaveResult[21].classList.contains('btn-disabled') == false){
                    return
                }
                for(let i = 88; i<92; i++){
                    resultsGames[i].setAttribute('readonly', 'readonly');
                }
    
                insertResultsGame(listResults[0], listResults[1], TimeD1)
                insertResultsGame(listResults[1], listResults[0], TimeD3)
                insertResultsGame(listResults[2], listResults[3], TimeD2)
                insertResultsGame(listResults[3], listResults[2], TimeD4)
                classificacao()
                this.removeEventListener('click', setResult)
                this.classList.add('btn-disabled')
            })
            buttonSaveResult[23].addEventListener('click', function setResult(){
                let listResults = []
                listResults.push(resultsGames[92].value)
                listResults.push(resultsGames[93].value)
                listResults.push(resultsGames[94].value)
                listResults.push(resultsGames[95].value)
    
                for(let i = 0; i<listResults.length; i++){
                    if(!listResults[i])return
                }
                if(buttonSaveResult[22].classList.contains('btn-disabled') == false){
                    return
                }
                for(let i = 92; i<96; i++){
                    resultsGames[i].setAttribute('readonly', 'readonly');
                }
    
                insertResultsGame(listResults[0], listResults[1], TimeD4)
                insertResultsGame(listResults[1], listResults[0], TimeD1)
                insertResultsGame(listResults[2], listResults[3], TimeD3)
                insertResultsGame(listResults[3], listResults[2], TimeD2)
                classificacao()
                this.removeEventListener('click', setResult)
                this.classList.add('btn-disabled')
            })
        }

        jogo1 = JSON.parse(sessionStorage.getItem('RoundD1'))
        jogo2 = JSON.parse(sessionStorage.getItem('RoundD2'))
        jogo3 = JSON.parse(sessionStorage.getItem('RoundD3'))
        jogo4 = JSON.parse(sessionStorage.getItem('RoundD4'))
        jogo5 = JSON.parse(sessionStorage.getItem('RoundD5'))
        jogo6 = JSON.parse(sessionStorage.getItem('RoundD6'))
        tableD = JSON.parse(sessionStorage.getItem('tabelaD')) 
            != null ?
                JSON.parse(sessionStorage.getItem('tabelaD')) 
                    :
                    tableD

        setTimeout(addFunctionButton, 200)
        
    return(
        <div className="container-fases">
            <h2>grupo d</h2>
            <div className="container-table-jogos">
                <table id="grupoD" className="libertadores">
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
                                    {tableD != null
                                        ?
                                            tableD[3].time
                                        :
                                            ''
                                    }
                                </abbr>
                            </td>
                            <td className="cedula-pontos">
                                <b>
                                    {tableD != null
                                        ?
                                            tableD[3].p
                                        :
                                            0
                                    }    
                                </b>
                            </td>
                            <td className="cedula-jogos">
                                {tableD != null
                                    ?
                                        tableD[3].j
                                    :
                                        0
                                }    
                            </td>
                            <td className="cedula-vitorias">
                                {tableD != null
                                    ?
                                        tableD[3].v
                                    :
                                        0
                                }    
                            </td>
                            <td className="cedula-empates">
                                {tableD != null
                                    ?
                                        tableD[3].e
                                    :
                                        0
                                }    
                            </td>
                            <td className="cedula-derrotas">
                                {tableD != null
                                    ?
                                        tableD[3].d
                                    :
                                        0
                                }    
                            </td>
                            <td className="cedula-gols-pro">
                                {tableD != null
                                    ?
                                        tableD[3].gp
                                    :
                                        0
                                }    
                            </td>
                            <td className="cedula-gols-contra">
                                {tableD != null
                                    ?
                                        tableD[3].gc
                                    :
                                        0
                                }    
                            </td>
                            <td className="cedula-saldo-gols">
                                {tableD != null
                                    ?
                                        tableD[3].sg
                                    :
                                        0
                                }    
                            </td>
                        </tr>
                        <tr>
                            <td rowSpan={1} className="classificado">2</td>
                            <td className="cedula-time2">
                                <abbr className="cedula-time">
                                    {tableD != null
                                        ?
                                            tableD[2].time
                                        :
                                            ''
                                    }                                    
                                </abbr>
                            </td>
                            <td className="cedula-pontos">
                                <b>
                                    {tableD != null
                                        ?
                                            tableD[2].p
                                        :
                                            0
                                    }    
                                </b>
                            </td>
                            <td className="cedula-jogos">
                                {tableD != null
                                    ?
                                        tableD[2].j
                                    :
                                        0
                                }    
                            </td>
                            <td className="cedula-vitorias">
                                {tableD != null
                                    ?
                                        tableD[2].v
                                    :
                                        0
                                }    
                            </td>
                            <td className="cedula-empates">
                                {tableD != null
                                    ?
                                        tableD[2].e
                                    :
                                        0
                                }    
                            </td>
                            <td className="cedula-derrotas">
                                {tableD != null
                                    ?
                                        tableD[2].d
                                    :
                                        0
                                }    
                            </td>
                            <td className="cedula-gols-pro">
                                {tableD != null
                                    ?
                                        tableD[2].gp
                                    :
                                        0
                                }    
                            </td>
                            <td className="cedula-gols-contra">
                                {tableD != null
                                    ?
                                        tableD[2].gc
                                    :
                                        0
                                }    
                            </td>
                            <td className="cedula-saldo-gols">
                                {tableD != null
                                    ?
                                        tableD[2].sg
                                    :
                                        0
                                }    
                            </td>
                        </tr>
                        <tr>
                            <td rowSpan={1} className="sul-americana">3</td>
                            <td className="cedula-time3">
                                <abbr className="cedula-time">
                                    {tableD != null
                                        ?
                                            tableD[1].time
                                        :
                                            ''
                                    }                    
                                </abbr>
                            </td>
                            <td className="cedula-pontos">
                                <b>
                                    {tableD != null
                                        ?
                                            tableD[1].p
                                        :
                                            0
                                    }    
                                </b>
                            </td>
                            <td className="cedula-jogos">
                                {tableD != null
                                    ?
                                        tableD[1].j
                                    :
                                        0
                                }    
                            </td>
                            <td className="cedula-vitorias">
                                {tableD != null
                                    ?
                                        tableD[1].v
                                    :
                                        0
                                }    
                            </td>
                            <td className="cedula-empates">
                                {tableD != null
                                    ?
                                        tableD[1].e
                                    :
                                        0
                                }    
                            </td>
                            <td className="cedula-derrotas">
                                {tableD != null
                                    ?
                                        tableD[1].d
                                    :
                                        0
                                }    
                            </td>
                            <td className="cedula-gols-pro">
                                {tableD != null
                                    ?
                                        tableD[1].gp
                                    :
                                        0
                                }    
                            </td>
                            <td className="cedula-gols-contra">
                                {tableD != null
                                    ?
                                        tableD[1].gc
                                    :
                                        0
                                }    
                            </td>
                            <td className="cedula-saldo-gols">
                                {tableD != null
                                    ?
                                        tableD[1].sg
                                    :
                                        0
                                }    
                            </td>
                        </tr>
                        <tr>
                            <td rowSpan={1} className="eliminado">4</td>
                            <td className="cedula-time4">
                                <abbr className="cedula-time">
                                    {tableD != null
                                        ?
                                            tableD[0].time
                                        :
                                            ''
                                    }                     
                                </abbr>
                            </td>
                            <td className="cedula-pontos">
                                <b>
                                    {tableD != null
                                        ?
                                            tableD[0].p
                                        :
                                            0
                                    }    
                                </b>
                            </td>
                            <td className="cedula-jogos">
                                {tableD != null
                                    ?
                                        tableD[0].j
                                    :
                                        0
                                }    
                            </td>
                            <td className="cedula-vitorias">
                                {tableD != null
                                    ?
                                        tableD[0].v
                                    :
                                        0
                                }    
                            </td>
                            <td className="cedula-empates">
                                {tableD != null
                                    ?
                                        tableD[0].e
                                    :
                                        0
                                }    
                            </td>
                            <td className="cedula-derrotas">
                                {tableD != null
                                    ?
                                        tableD[0].d
                                    :
                                        0
                                }    
                            </td>
                            <td className="cedula-gols-pro">
                                {tableD != null
                                    ?
                                        tableD[0].gp
                                    :
                                        0
                                }    
                            </td>
                            <td className="cedula-gols-contra">
                                {tableD != null
                                    ?
                                        tableD[0].gc
                                    :
                                        0
                                }    
                            </td>
                            <td className="cedula-saldo-gols">
                                {tableD != null
                                    ?
                                        tableD[0].sg
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