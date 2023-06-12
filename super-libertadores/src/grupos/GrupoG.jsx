import React, { useRef, useState } from "react";
 // Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

 // Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import '../styles/grupos.sass'

import { Navigation } from "swiper";

export function GrupoG({group}){
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
            placar: ''
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
            placar: ''
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
            placar: ''
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
            placar: ''
        }
        let jogo1 = []
        let jogo2 = []
        let jogo3 = []
        let jogo4 = []
        let jogo5 = []
        let jogo6 = []
        let tableG = []

        if(Grupo != null){
            TimeG1.time = Grupo[0].time
            TimeG2.time = Grupo[1].time
            TimeG3.time = Grupo[2].time
            TimeG4.time = Grupo[3].time
            TimeG1.placar = Grupo[0].namePlacar
            TimeG2.placar = Grupo[1].namePlacar
            TimeG3.placar = Grupo[2].namePlacar
            TimeG4.placar = Grupo[3].namePlacar
    
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
            tableG = []
            tableG[0] = TimeG1
            tableG[1] = TimeG2
            tableG[2] = TimeG3
            tableG[3] = TimeG4

            tableG.sort((a,b) => {
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
                let listResults = []
                listResults.push(resultsGames[144].value)
                listResults.push(resultsGames[145].value)
                listResults.push(resultsGames[146].value)
                listResults.push(resultsGames[147].value)
    
                for(let i = 0; i<listResults.length; i++){
                    if(!listResults[i])return
                }
                for(let i = 144; i<148; i++){
                    resultsGames[i].setAttribute('readonly', 'readonly');
                }
                
                insertResultsGame(listResults[0], listResults[1], TimeG1)
                insertResultsGame(listResults[1], listResults[0], TimeG3)
                insertResultsGame(listResults[2], listResults[3], TimeG2)
                insertResultsGame(listResults[3], listResults[2], TimeG4)
                classificacao()
                this.removeEventListener('click', setResult)
                this.classList.add('btn-disabled')
            })
            buttonSaveResult[37].addEventListener('click', function setResult(){
                let listResults = []
                listResults.push(resultsGames[148].value)
                listResults.push(resultsGames[149].value)
                listResults.push(resultsGames[150].value)
                listResults.push(resultsGames[151].value)
    
                for(let i = 0; i<listResults.length; i++){
                    if(!listResults[i])return
                }
                if(buttonSaveResult[36].classList.contains('btn-disabled') == false){
                    return
                }
                for(let i = 148; i<152; i++){
                    resultsGames[i].setAttribute('readonly', 'readonly');
                }
    
                insertResultsGame(listResults[0], listResults[1], TimeG2)
                insertResultsGame(listResults[1], listResults[0], TimeG1)
                insertResultsGame(listResults[2], listResults[3], TimeG3)
                insertResultsGame(listResults[3], listResults[2], TimeG4)
                classificacao()
                this.removeEventListener('click', setResult)
                this.classList.add('btn-disabled')
            })
            buttonSaveResult[38].addEventListener('click', function setResult(){
                let listResults = []
                listResults.push(resultsGames[152].value)
                listResults.push(resultsGames[153].value)
                listResults.push(resultsGames[154].value)
                listResults.push(resultsGames[155].value)
    
                for(let i = 0; i<listResults.length; i++){
                    if(!listResults[i])return
                }
                if(buttonSaveResult[37].classList.contains('btn-disabled') == false){
                    return
                }
                for(let i = 152; i<156; i++){
                    resultsGames[i].setAttribute('readonly', 'readonly');
                }
    
                insertResultsGame(listResults[0], listResults[1], TimeG3)
                insertResultsGame(listResults[1], listResults[0], TimeG2)
                insertResultsGame(listResults[2], listResults[3], TimeG4)
                insertResultsGame(listResults[3], listResults[2], TimeG1)
                classificacao()
                this.removeEventListener('click', setResult)
                this.classList.add('btn-disabled')
            })
            buttonSaveResult[39].addEventListener('click', function setResult(){
                let listResults = []
                listResults.push(resultsGames[156].value)
                listResults.push(resultsGames[157].value)
                listResults.push(resultsGames[158].value)
                listResults.push(resultsGames[159].value)
    
                for(let i = 0; i<listResults.length; i++){
                    if(!listResults[i])return
                }
                if(buttonSaveResult[38].classList.contains('btn-disabled') == false){
                    return
                }
                for(let i = 156; i<160; i++){
                    resultsGames[i].setAttribute('readonly', 'readonly');
                }
    
                insertResultsGame(listResults[0], listResults[1], TimeG1)
                insertResultsGame(listResults[1], listResults[0], TimeG4)
                insertResultsGame(listResults[2], listResults[3], TimeG2)
                insertResultsGame(listResults[3], listResults[2], TimeG3)
                classificacao()
                this.removeEventListener('click', setResult)
                this.classList.add('btn-disabled')
            })
            buttonSaveResult[40].addEventListener('click', function setResult(){
                let listResults = []
                listResults.push(resultsGames[160].value)
                listResults.push(resultsGames[161].value)
                listResults.push(resultsGames[162].value)
                listResults.push(resultsGames[163].value)
    
                for(let i = 0; i<listResults.length; i++){
                    if(!listResults[i])return
                }
                if(buttonSaveResult[39].classList.contains('btn-disabled') == false){
                    return
                }
                for(let i = 160; i<164; i++){
                    resultsGames[i].setAttribute('readonly', 'readonly');
                }
    
                insertResultsGame(listResults[0], listResults[1], TimeG1)
                insertResultsGame(listResults[1], listResults[0], TimeG2)
                insertResultsGame(listResults[2], listResults[3], TimeG4)
                insertResultsGame(listResults[3], listResults[2], TimeG3)
                classificacao()
                this.removeEventListener('click', setResult)
                this.classList.add('btn-disabled')
            })
            buttonSaveResult[41].addEventListener('click', function setResult(){
                let listResults = []
                listResults.push(resultsGames[164].value)
                listResults.push(resultsGames[165].value)
                listResults.push(resultsGames[166].value)
                listResults.push(resultsGames[167].value)
    
                for(let i = 0; i<listResults.length; i++){
                    if(!listResults[i])return
                }
                if(buttonSaveResult[40].classList.contains('btn-disabled') == false){
                    return
                }
                for(let i = 164; i<168; i++){
                    resultsGames[i].setAttribute('readonly', 'readonly');
                }
    
                insertResultsGame(listResults[0], listResults[1], TimeG3)
                insertResultsGame(listResults[1], listResults[0], TimeG1)
                insertResultsGame(listResults[2], listResults[3], TimeG4)
                insertResultsGame(listResults[3], listResults[2], TimeG2)
                classificacao()
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