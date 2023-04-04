import React, { useRef, useState } from "react";
 // Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

 // Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import '../styles/grupos.sass'

import { Navigation } from "swiper";

export function GrupoF(){

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
                            <td className="cedula-time1"><abbr className="cedula-time"></abbr></td>
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
                            <td className="cedula-time2"><abbr className="cedula-time"></abbr></td>
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
                            <td className="cedula-time3"><abbr className="cedula-time"></abbr></td>
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
                            <td className="cedula-time4"><abbr className="cedula-time"></abbr></td>
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
                                                <p className="information-jogo">quarta <span className="stadium">akron</span> 21:30</p>
                                                <p className="jogo-1">
                                                    <span className="jogo"></span>
                                                    <input type="text" className="input-time-resultado" />
                                                    <span>X</span>
                                                    <input type="text" className="input-time-resultado" />
                                                    <span className="jogo"></span>
                                                </p>
                                            </div>

                                            <div className="container-jogo-2">
                                                <p className="information-jogo">quinta <span className="stadium">Nacional do Peru</span> 18:00</p>
                                                <p className="jogo-2">
                                                    <span className="jogo"></span>
                                                    <input type="text" className="input-time-resultado" />
                                                    <span>X</span>
                                                    <input type="text" className="input-time-resultado" />
                                                    <span className="jogo"></span>
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
                                                <p className="information-jogo">quarta <span className="stadium">akron</span> 21:30</p>
                                                <p className="jogo-1">
                                                    <span className="jogo"></span>
                                                    <input type="text" className="input-time-resultado" />
                                                    <span>X</span>
                                                    <input type="text" className="input-time-resultado" />
                                                    <span className="jogo"></span>
                                                </p>
                                            </div>

                                            <div className="container-jogo-2">
                                                <p className="information-jogo">quinta <span className="stadium">Nacional do Peru</span> 18:00</p>
                                                <p className="jogo-2">
                                                    <span className="jogo"></span>
                                                    <input type="text" className="input-time-resultado" />
                                                    <span>X</span>
                                                    <input type="text" className="input-time-resultado" />
                                                    <span className="jogo"></span>
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
                                                <p className="information-jogo">quarta <span className="stadium">akron</span> 21:30</p>
                                                <p className="jogo-1">
                                                    <span className="jogo"></span>
                                                    <input type="text" className="input-time-resultado" />
                                                    <span>X</span>
                                                    <input type="text" className="input-time-resultado" />
                                                    <span className="jogo"></span>
                                                </p>
                                            </div>

                                            <div className="container-jogo-2">
                                                <p className="information-jogo">quinta <span className="stadium">Nacional do Peru</span> 18:00</p>
                                                <p className="jogo-2">
                                                    <span className="jogo"></span>
                                                    <input type="text" className="input-time-resultado" />
                                                    <span>X</span>
                                                    <input type="text" className="input-time-resultado" />
                                                    <span className="jogo"></span>
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
                                                <p className="information-jogo">quarta <span className="stadium">akron</span> 21:30</p>
                                                <p className="jogo-1">
                                                    <span className="jogo"></span>
                                                    <input type="text" className="input-time-resultado" />
                                                    <span>X</span>
                                                    <input type="text" className="input-time-resultado" />
                                                    <span className="jogo"></span>
                                                </p>
                                            </div>

                                            <div className="container-jogo-2">
                                                <p className="information-jogo">quinta <span className="stadium">Nacional do Peru</span> 18:00</p>
                                                <p className="jogo-2">
                                                    <span className="jogo"></span>
                                                    <input type="text" className="input-time-resultado" />
                                                    <span>X</span>
                                                    <input type="text" className="input-time-resultado" />
                                                    <span className="jogo"></span>
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
                                                <p className="information-jogo">quarta <span className="stadium">akron</span> 21:30</p>
                                                <p className="jogo-1">
                                                    <span className="jogo"></span>
                                                    <input type="text" className="input-time-resultado" />
                                                    <span>X</span>
                                                    <input type="text" className="input-time-resultado" />
                                                    <span className="jogo"></span>
                                                </p>
                                            </div>

                                            <div className="container-jogo-2">
                                                <p className="information-jogo">quinta <span className="stadium">Nacional do Peru</span> 18:00</p>
                                                <p className="jogo-2">
                                                    <span className="jogo"></span>
                                                    <input type="text" className="input-time-resultado" />
                                                    <span>X</span>
                                                    <input type="text" className="input-time-resultado" />
                                                    <span className="jogo"></span>
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
                                                <p className="information-jogo">quarta <span className="stadium">akron</span> 21:30</p>
                                                <p className="jogo-1">
                                                    <span className="jogo"></span>
                                                    <input type="text" className="input-time-resultado" />
                                                    <span>X</span>
                                                    <input type="text" className="input-time-resultado" />
                                                    <span className="jogo"></span>
                                                </p>
                                            </div>

                                            <div className="container-jogo-2">
                                                <p className="information-jogo">quinta <span className="stadium">Nacional do Peru</span> 18:00</p>
                                                <p className="jogo-2">
                                                    <span className="jogo"></span>
                                                    <input type="text" className="input-time-resultado" />
                                                    <span>X</span>
                                                    <input type="text" className="input-time-resultado" />
                                                    <span className="jogo"></span>
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