import React, { useRef, useState } from "react";
 // Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

 // Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import '../styles/grupos.sass'

import { Navigation } from "swiper";

export function GrupoC({group}){
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
            placar: ''
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
            placar: ''
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
            placar: ''
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
            placar: ''
        }
        let jogo1 = []
        let jogo2 = []
        let jogo3 = []
        let jogo4 = []
        let jogo5 = []
        let jogo6 = []
        let tableC = []

        if(Grupo != null){
            TimeC1.time = Grupo[0].time
            TimeC2.time = Grupo[1].time
            TimeC3.time = Grupo[2].time
            TimeC4.time = Grupo[3].time
            TimeC1.placar = Grupo[0].namePlacar
            TimeC2.placar = Grupo[1].namePlacar
            TimeC3.placar = Grupo[2].namePlacar
            TimeC4.placar = Grupo[3].namePlacar
    
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
            tableC = []
            tableC[0] = TimeC1
            tableC[1] = TimeC2
            tableC[2] = TimeC3
            tableC[3] = TimeC4

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
                let listResults = []
                listResults.push(resultsGames[48].value)
                listResults.push(resultsGames[49].value)
                listResults.push(resultsGames[50].value)
                listResults.push(resultsGames[51].value)
    
                for(let i = 0; i<listResults.length; i++){
                    if(!listResults[i])return
                }
                for(let i = 48; i<52; i++){
                    resultsGames[i].setAttribute('readonly', 'readonly');
                }
                
                insertResultsGame(listResults[0], listResults[1], TimeC1)
                insertResultsGame(listResults[1], listResults[0], TimeC3)
                insertResultsGame(listResults[2], listResults[3], TimeC2)
                insertResultsGame(listResults[3], listResults[2], TimeC4)
                classificacao()
                this.removeEventListener('click', setResult)
                this.classList.add('btn-disabled')
            })
            buttonSaveResult[13].addEventListener('click', function setResult(){
                let listResults = []
                listResults.push(resultsGames[52].value)
                listResults.push(resultsGames[53].value)
                listResults.push(resultsGames[54].value)
                listResults.push(resultsGames[55].value)
    
                for(let i = 0; i<listResults.length; i++){
                    if(!listResults[i])return
                }
                if(buttonSaveResult[12].classList.contains('btn-disabled') == false){
                    return
                }
                for(let i = 52; i<56; i++){
                    resultsGames[i].setAttribute('readonly', 'readonly');
                }
    
                insertResultsGame(listResults[0], listResults[1], TimeC3)
                insertResultsGame(listResults[1], listResults[0], TimeC4)
                insertResultsGame(listResults[2], listResults[3], TimeC2)
                insertResultsGame(listResults[3], listResults[2], TimeC1)
                classificacao()
                this.removeEventListener('click', setResult)
                this.classList.add('btn-disabled')
            })
            buttonSaveResult[14].addEventListener('click', function setResult(){
                let listResults = []
                listResults.push(resultsGames[56].value)
                listResults.push(resultsGames[57].value)
                listResults.push(resultsGames[58].value)
                listResults.push(resultsGames[59].value)
    
                for(let i = 0; i<listResults.length; i++){
                    if(!listResults[i])return
                }
                if(buttonSaveResult[13].classList.contains('btn-disabled') == false){
                    return
                }
                for(let i = 56; i<60; i++){
                    resultsGames[i].setAttribute('readonly', 'readonly');
                }
                
                insertResultsGame(listResults[0], listResults[1], TimeC4)
                insertResultsGame(listResults[1], listResults[0], TimeC1)
                insertResultsGame(listResults[2], listResults[3], TimeC3)
                insertResultsGame(listResults[3], listResults[2], TimeC2)
                classificacao()
                this.removeEventListener('click', setResult)
                this.classList.add('btn-disabled')
            })
            buttonSaveResult[15].addEventListener('click', function setResult(){
                let listResults = []
                listResults.push(resultsGames[60].value)
                listResults.push(resultsGames[61].value)
                listResults.push(resultsGames[62].value)
                listResults.push(resultsGames[63].value)
    
                for(let i = 0; i<listResults.length; i++){
                    if(!listResults[i])return
                }
                if(buttonSaveResult[14].classList.contains('btn-disabled') == false){
                    return
                }
                for(let i = 60; i<64; i++){
                    resultsGames[i].setAttribute('readonly', 'readonly');
                }
                
                insertResultsGame(listResults[0], listResults[1], TimeC1)
                insertResultsGame(listResults[1], listResults[0], TimeC4)
                insertResultsGame(listResults[2], listResults[3], TimeC2)
                insertResultsGame(listResults[3], listResults[2], TimeC3)
                classificacao()
                this.removeEventListener('click', setResult)
                this.classList.add('btn-disabled')
            })
            buttonSaveResult[16].addEventListener('click', function setResult(){
                let listResults = []
                listResults.push(resultsGames[64].value)
                listResults.push(resultsGames[65].value)
                listResults.push(resultsGames[66].value)
                listResults.push(resultsGames[67].value)
    
                for(let i = 0; i<listResults.length; i++){
                    if(!listResults[i])return
                }
                if(buttonSaveResult[15].classList.contains('btn-disabled') == false){
                    return
                }
                for(let i = 64; i<68; i++){
                    resultsGames[i].setAttribute('readonly', 'readonly');
                }
                
                insertResultsGame(listResults[0], listResults[1], TimeC1)
                insertResultsGame(listResults[1], listResults[0], TimeC2)
                insertResultsGame(listResults[2], listResults[3], TimeC4)
                insertResultsGame(listResults[3], listResults[2], TimeC3)
                classificacao()
                this.removeEventListener('click', setResult)
                this.classList.add('btn-disabled')
            })
            buttonSaveResult[17].addEventListener('click', function setResult(){
                let listResults = []
                listResults.push(resultsGames[68].value)
                listResults.push(resultsGames[69].value)
                listResults.push(resultsGames[70].value)
                listResults.push(resultsGames[71].value)
    
                for(let i = 0; i<listResults.length; i++){
                    if(!listResults[i])return
                }
                if(buttonSaveResult[16].classList.contains('btn-disabled') == false){
                    return
                }
                for(let i = 68; i<72; i++){
                    resultsGames[i].setAttribute('readonly', 'readonly');
                }
                
                insertResultsGame(listResults[0], listResults[1], TimeC4)
                insertResultsGame(listResults[1], listResults[0], TimeC2)
                insertResultsGame(listResults[2], listResults[3], TimeC3)
                insertResultsGame(listResults[3], listResults[2], TimeC1)
                classificacao()
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
                                    {Grupo != null
                                        ?
                                            Grupo[0].time
                                        :
                                            ''
                                    }
                                </abbr>
                            </td>
                            <td className="cedula-pontos"><b>0</b></td>
                            <td className="cedula-jogos">0</td>
                            <td className="cedula-vitorias">0</td>
                            <td className="cedula-empates">0</td>
                            <td className="cedula-derrotas">0</td>
                            <td className="cedula-gols-pro">0</td>
                            <td className="cedula-gols-contra">0</td>
                            <td className="cedula-saldo-gols">0</td>
                        </tr>
                        <tr>
                            <td rowSpan={1} className="classificado">2</td>
                            <td className="cedula-time2">
                                <abbr className="cedula-time">
                                    {Grupo != null
                                        ?
                                            Grupo[1].time
                                        :
                                            ''
                                    }                                    
                                </abbr>
                            </td>
                            <td className="cedula-pontos"><b>0</b></td>
                            <td className="cedula-jogos">0</td>
                            <td className="cedula-vitorias">0</td>
                            <td className="cedula-empates">0</td>
                            <td className="cedula-derrotas">0</td>
                            <td className="cedula-gols-pro">0</td>
                            <td className="cedula-gols-contra">0</td>
                            <td className="cedula-saldo-gols">0</td>
                        </tr>
                        <tr>
                            <td rowSpan={1} className="sul-americana">3</td>
                            <td className="cedula-time3">
                                <abbr className="cedula-time">
                                    {Grupo != null
                                        ?
                                            Grupo[2].time
                                        :
                                            ''
                                    }                                    
                                </abbr>
                            </td>
                            <td className="cedula-pontos"><b>0</b></td>
                            <td className="cedula-jogos">0</td>
                            <td className="cedula-vitorias">0</td>
                            <td className="cedula-empates">0</td>
                            <td className="cedula-derrotas">0</td>
                            <td className="cedula-gols-pro">0</td>
                            <td className="cedula-gols-contra">0</td>
                            <td className="cedula-saldo-gols">0</td>
                        </tr>
                        <tr>
                            <td rowSpan={1} className="eliminado">4</td>
                            <td className="cedula-time4">
                                <abbr className="cedula-time">
                                    {Grupo != null
                                        ?
                                            Grupo[3].time
                                        :
                                            ''
                                    }                                    
                                </abbr>
                            </td>
                            <td className="cedula-pontos"><b>0</b></td>
                            <td className="cedula-jogos">0</td>
                            <td className="cedula-vitorias">0</td>
                            <td className="cedula-empates">0</td>
                            <td className="cedula-derrotas">0</td>
                            <td className="cedula-gols-pro">0</td>
                            <td className="cedula-gols-contra">0</td>
                            <td className="cedula-saldo-gols">0</td>
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