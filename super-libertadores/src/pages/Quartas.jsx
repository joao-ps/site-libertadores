import { useContext } from "react"

import { Header } from "../componentes/Header"
import { FaseFinal } from "../componentes/api/getTeams"

export function Quartas(){
    let [
        newOitavas,
        previaOitavas,
        newQuartas,
        previaQuartas
    ] = useContext(FaseFinal)
    let poteQuartas = previaQuartas

    let confronto1 = []
    let confronto2 = []
    let confronto3 = []
    let confronto4 = []

    if(previaQuartas.length == 8){
        for(let i = 0; index < 8; index++) {
            let numAleatorio = Math.floor(Math.random()*poteQuartas.length)

            switch (i) {
                case 0:
                    confronto1.push(poteQuartas[numAleatorio])
                    poteQuartas.splice(numAleatorio, 1)   
                    break;
            
                case 1:
                    confronto1.push(poteQuartas[numAleatorio])
                    poteQuartas.splice(numAleatorio, 1)   
                    break;

                case 2:
                    confronto2.push(poteQuartas[numAleatorio])
                    poteQuartas.splice(numAleatorio, 1)   
                    break;

                case 3:
                    confronto2.push(poteQuartas[numAleatorio])
                    poteQuartas.splice(numAleatorio, 1)   
                    break;

                case 4:
                    confronto3.push(poteQuartas[numAleatorio])
                    poteQuartas.splice(numAleatorio, 1)   
                    break;

                case 5:
                    confronto3.push(poteQuartas[numAleatorio])
                    poteQuartas.splice(numAleatorio, 1)   
                    break;

                case 6:
                    confronto4.push(poteQuartas[numAleatorio])
                    poteQuartas.splice(numAleatorio, 1)   
                    break;

                case 7:
                    confronto4.push(poteQuartas[numAleatorio])
                    poteQuartas.splice(numAleatorio, 1)   

                    newQuartas('encerrado')
                    break;
            }
        }
        sessionStorage.setItem('', JSON.stringify(confronto1))
        sessionStorage.setItem('', JSON.stringify(confronto2))
        sessionStorage.setItem('', JSON.stringify(confronto3))
        sessionStorage.setItem('', JSON.stringify(confronto4))
    }

    return(
        <>
            <Header fases='quartas de final' previousLink='/oitavas-de-final' nextLink='/semifinal'></Header>

            <div className="fasesEliminatorias">
                <h2>jogos</h2>

                <div className="confrontos">
                    <div className="confrontoUm">
                        <div className="ida">
                            <p className="information-jogo">terça <span className="stadium"></span> 19:30</p>
                            <p className='gameInformation'>
                                <span className='team'>
                                    
                                </span>
                                <span className="containerInput"><input type="text" className='input-time-resultado'/></span>
                                <span>x</span>
                                <span className="containerInput"><input type="text" className='input-time-resultado'/></span>
                                <span className='team'>
                                    
                                </span>
                            </p>

                            <div className="containerBtnSalvar">
                                <button className='button btnSalvarResultado'>salvar</button>
                            </div>
                        </div>

                        <div className="volta">
                            <p className="information-jogo">terça <span className="stadium"></span> 19:30</p>
                            <p className='gameInformation'>
                                <span className='team'>
                                    
                                </span>
                                <span className="containerInput"><input type="text" className='input-time-resultado'/></span>
                                <span>x</span>
                                <span className="containerInput"><input type="text" className='input-time-resultado'/></span>
                                <span className='team'>
                                    
                                </span>
                            </p>

                            <p className="penaltis">
                                <span className="containerInput"><input type="text" className='input-resultado-penaltis'/></span>
                                <span className="containerInput"><input type="text" className='input-resultado-penaltis'/></span>
                            </p>

                            <div className="containerBtnSalvar">
                                <button className='button btnSalvarResultado'>salvar</button>
                            </div>
                        </div>
                    </div>

                    <div className="confrontoDois">
                        <div className="ida">
                            <p className="information-jogo">terça <span className="stadium"></span> 19:30</p>
                            <p className='gameInformation'>
                                <span className='team'>
                                    
                                </span>
                                <span className="containerInput"><input type="text" className='input-time-resultado'/></span>
                                <span>x</span>
                                <span className="containerInput"><input type="text" className='input-time-resultado'/></span>
                                <span className='team'>
                                    
                                </span>
                            </p>

                            <div className="containerBtnSalvar">
                                <button className='button btnSalvarResultado'>salvar</button>
                            </div>
                        </div>

                        <div className="volta">
                            <p className="information-jogo">terça <span className="stadium"></span> 19:30</p>
                            <p className='gameInformation'>
                                <span className='team'>
                                    
                                </span>
                                <span className="containerInput"><input type="text" className='input-time-resultado'/></span>
                                <span>x</span>
                                <span className="containerInput"><input type="text" className='input-time-resultado'/></span>
                                <span className='team'>
                                    
                                </span>
                            </p>

                            <p className="penaltis">
                                <span className="containerInput"><input type="text" className='input-resultado-penaltis'/></span>
                                <span className="containerInput"><input type="text" className='input-resultado-penaltis'/></span>
                            </p>

                            <div className="containerBtnSalvar">
                                <button className='button btnSalvarResultado'>salvar</button>
                            </div>
                        </div>
                    </div>

                    <div className="confrontoTres">
                        <div className="ida">
                            <p className="information-jogo">terça <span className="stadium"></span> 19:30</p>
                            <p className='gameInformation'>
                                <span className='team'>
                                    
                                </span>
                                <span className="containerInput"><input type="text" className='input-time-resultado'/></span>
                                <span>x</span>
                                <span className="containerInput"><input type="text" className='input-time-resultado'/></span>
                                <span className='team'>
                                    
                                </span>
                            </p>

                            <div className="containerBtnSalvar">
                                <button className='button btnSalvarResultado'>salvar</button>
                            </div>
                        </div>

                        <div className="volta">
                            <p className="information-jogo">terça <span className="stadium"></span> 19:30</p>
                            <p className='gameInformation'>
                                <span className='team'>
                                    
                                </span>
                                <span className="containerInput"><input type="text" className='input-time-resultado'/></span>
                                <span>x</span>
                                <span className="containerInput"><input type="text" className='input-time-resultado'/></span>
                                <span className='team'>
                                    
                                </span>
                            </p>

                            <p className="penaltis">
                                <span className="containerInput"><input type="text" className='input-resultado-penaltis'/></span>
                                <span className="containerInput"><input type="text" className='input-resultado-penaltis'/></span>
                            </p>

                            <div className="containerBtnSalvar">
                                <button className='button btnSalvarResultado'>salvar</button>
                            </div>
                        </div>
                    </div>

                    <div className="confrontoQuatro">
                        <div className="ida">
                            <p className="information-jogo">terça <span className="stadium"></span> 19:30</p>
                            <p className='gameInformation'>
                                <span className='team'>
                                    
                                </span>
                                <span className="containerInput"><input type="text" className='input-time-resultado'/></span>
                                <span>x</span>
                                <span className="containerInput"><input type="text" className='input-time-resultado'/></span>
                                <span className='team'>
                                    
                                </span>
                            </p>

                            <div className="containerBtnSalvar">
                                <button className='button btnSalvarResultado'>salvar</button>
                            </div>
                        </div>

                        <div className="volta">
                            <p className="information-jogo">terça <span className="stadium"></span> 19:30</p>
                            <p className='gameInformation'>
                                <span className='team'>
                                    
                                </span>
                                <span className="containerInput"><input type="text" className='input-time-resultado'/></span>
                                <span>x</span>
                                <span className="containerInput"><input type="text" className='input-time-resultado'/></span>
                                <span className='team'>
                                    
                                </span>
                            </p>

                            <p className="penaltis">
                                <span className="containerInput"><input type="text" className='input-resultado-penaltis'/></span>
                                <span className="containerInput"><input type="text" className='input-resultado-penaltis'/></span>
                            </p>

                            <div className="containerBtnSalvar">
                                <button className='button btnSalvarResultado'>salvar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}