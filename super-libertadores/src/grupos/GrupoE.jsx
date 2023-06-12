import React, { useRef, useState } from "react";
 // Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

 // Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import '../styles/grupos.sass'

import { Navigation } from "swiper";

export function GrupoE({group}){
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
            placar: ''
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
            placar: ''
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
            placar: ''
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
            placar: ''
        }
        let jogo1 = []
        let jogo2 = []
        let jogo3 = []
        let jogo4 = []
        let jogo5 = []
        let jogo6 = []
        let tableE = []

        if(Grupo != null){
            TimeE1.time = Grupo[0].time
            TimeE2.time = Grupo[1].time
            TimeE3.time = Grupo[2].time
            TimeE4.time = Grupo[3].time
            TimeE1.placar = Grupo[0].namePlacar
            TimeE2.placar = Grupo[1].namePlacar
            TimeE3.placar = Grupo[2].namePlacar
            TimeE4.placar = Grupo[3].namePlacar
    
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
            tableE = []
            tableE[0] = TimeE1
            tableE[1] = TimeE2
            tableE[2] = TimeE3
            tableE[3] = TimeE4

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
                let listResults = []
                listResults.push(resultsGames[96].value)
                listResults.push(resultsGames[97].value)
                listResults.push(resultsGames[98].value)
                listResults.push(resultsGames[99].value)
    
                for(let i = 0; i<listResults.length; i++){
                    if(!listResults[i])return
                }
                for(let i = 96; i<100; i++){
                    resultsGames[i].setAttribute('readonly', 'readonly');
                }
                
                insertResultsGame(listResults[0], listResults[1], TimeE3)
                insertResultsGame(listResults[1], listResults[0], TimeE1)
                insertResultsGame(listResults[2], listResults[3], TimeE4)
                insertResultsGame(listResults[3], listResults[2], TimeE2)
                classificacao()
                this.removeEventListener('click', setResult)
                this.classList.add('btn-disabled')
            })
            buttonSaveResult[25].addEventListener('click', function setResult(){
                let listResults = []
                listResults.push(resultsGames[100].value)
                listResults.push(resultsGames[101].value)
                listResults.push(resultsGames[102].value)
                listResults.push(resultsGames[103].value)
    
                for(let i = 0; i<listResults.length; i++){
                    if(!listResults[i])return
                }
                if(buttonSaveResult[24].classList.contains('btn-disabled') == false){
                    return
                }
                for(let i = 100; i<104; i++){
                    resultsGames[i].setAttribute('readonly', 'readonly');
                }
    
                insertResultsGame(listResults[0], listResults[1], TimeE1)
                insertResultsGame(listResults[1], listResults[0], TimeE4)
                insertResultsGame(listResults[2], listResults[3], TimeE2)
                insertResultsGame(listResults[3], listResults[2], TimeE3)
                classificacao()
                this.removeEventListener('click', setResult)
                this.classList.add('btn-disabled')
            })
            buttonSaveResult[26].addEventListener('click', function setResult(){
                let listResults = []
                listResults.push(resultsGames[104].value)
                listResults.push(resultsGames[105].value)
                listResults.push(resultsGames[106].value)
                listResults.push(resultsGames[107].value)
    
                for(let i = 0; i<listResults.length; i++){
                    if(!listResults[i])return
                }
                if(buttonSaveResult[25].classList.contains('btn-disabled') == false){
                    return
                }
                for(let i = 104; i<108; i++){
                    resultsGames[i].setAttribute('readonly', 'readonly');
                }
    
                insertResultsGame(listResults[0], listResults[1], TimeE2)
                insertResultsGame(listResults[1], listResults[0], TimeE1)
                insertResultsGame(listResults[2], listResults[3], TimeE3)
                insertResultsGame(listResults[3], listResults[2], TimeE4)
                classificacao()
                this.removeEventListener('click', setResult)
                this.classList.add('btn-disabled')
            })
            buttonSaveResult[27].addEventListener('click', function setResult(){
                let listResults = []
                listResults.push(resultsGames[108].value)
                listResults.push(resultsGames[109].value)
                listResults.push(resultsGames[110].value)
                listResults.push(resultsGames[111].value)
    
                for(let i = 0; i<listResults.length; i++){
                    if(!listResults[i])return
                }
                if(buttonSaveResult[26].classList.contains('btn-disabled') == false){
                    return
                }
                for(let i = 108; i<112; i++){
                    resultsGames[i].setAttribute('readonly', 'readonly');
                }
    
                insertResultsGame(listResults[0], listResults[1], TimeE4)
                insertResultsGame(listResults[1], listResults[0], TimeE3)
                insertResultsGame(listResults[2], listResults[3], TimeE1)
                insertResultsGame(listResults[3], listResults[2], TimeE2)
                classificacao()
                this.removeEventListener('click', setResult)
                this.classList.add('btn-disabled')
            })
            buttonSaveResult[28].addEventListener('click', function setResult(){
                let listResults = []
                listResults.push(resultsGames[112].value)
                listResults.push(resultsGames[113].value)
                listResults.push(resultsGames[114].value)
                listResults.push(resultsGames[115].value)
    
                for(let i = 0; i<listResults.length; i++){
                    if(!listResults[i])return
                }
                if(buttonSaveResult[27].classList.contains('btn-disabled') == false){
                    return
                }
                for(let i = 112; i<116; i++){
                    resultsGames[i].setAttribute('readonly', 'readonly');
                }
    
                insertResultsGame(listResults[0], listResults[1], TimeE3)
                insertResultsGame(listResults[1], listResults[0], TimeE2)
                insertResultsGame(listResults[2], listResults[3], TimeE4)
                insertResultsGame(listResults[3], listResults[2], TimeE1)
                classificacao()
                this.removeEventListener('click', setResult)
                this.classList.add('btn-disabled')
            })
            buttonSaveResult[29].addEventListener('click', function setResult(){
                let listResults = []
                listResults.push(resultsGames[116].value)
                listResults.push(resultsGames[117].value)
                listResults.push(resultsGames[118].value)
                listResults.push(resultsGames[119].value)
    
                for(let i = 0; i<listResults.length; i++){
                    if(!listResults[i])return
                }
                if(buttonSaveResult[28].classList.contains('btn-disabled') == false){
                    return
                }
                for(let i = 116; i<120; i++){
                    resultsGames[i].setAttribute('readonly', 'readonly');
                }
    
                insertResultsGame(listResults[0], listResults[1], TimeE1)
                insertResultsGame(listResults[1], listResults[0], TimeE3)
                insertResultsGame(listResults[2], listResults[3], TimeE2)
                insertResultsGame(listResults[3], listResults[2], TimeE4)
                classificacao()
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