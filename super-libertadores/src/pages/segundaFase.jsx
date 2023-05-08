import { useContext } from "react"
import { GetTimes } from "../componentes/api/getTeams"

import { Header } from "../componentes/Header"

import '../styles/eliminatoria.sass'
import { json } from "react-router-dom"

export function SegundaFase(){
    let [
        newPrevSegundaFase,
        previaSegundaFase
    ] = useContext(GetTimes)
    let segundaFase = previaSegundaFase.length == 16 ? previaSegundaFase : null

    let confronto1 = []
    let confronto2 = []
    let confronto3 = []
    let confronto4 = []
    let confronto5 = []
    let confronto6 = []
    let confronto7 = []
    let confronto8 = []

    if(segundaFase != null){
        for(let i = 0; i < 16; i++){
            let numAleatorio = Math.floor(Math.random()*segundaFase.length)
            
            switch (i) {
                case 0:
                    confronto1.push(segundaFase[numAleatorio])
                    segundaFase.splice(numAleatorio, 1)   
                    break;
            
                case 1:
                    confronto1.push(segundaFase[numAleatorio])
                    segundaFase.splice(numAleatorio, 1)   

                    sessionStorage.setItem('chave1', JSON.stringify(confronto1))
                    break;

                case 2:
                    confronto2.push(segundaFase[numAleatorio])
                    segundaFase.splice(numAleatorio, 1)   
                    break;
                
                case 3:
                    confronto2.push(segundaFase[numAleatorio])
                    segundaFase.splice(numAleatorio, 1)   

                    sessionStorage.setItem('chave2', JSON.stringify(confronto2))
                    break;
                
                case 4:
                    confronto3.push(segundaFase[numAleatorio])
                    segundaFase.splice(numAleatorio, 1)   
                    break;

                case 5:
                    confronto3.push(segundaFase[numAleatorio])
                    segundaFase.splice(numAleatorio, 1)   

                    sessionStorage.setItem('chave3', JSON.stringify(confronto3))
                    break;
                
                case 6:
                    confronto4.push(segundaFase[numAleatorio])
                    segundaFase.splice(numAleatorio, 1)   
                    break;

                case 7:
                    confronto4.push(segundaFase[numAleatorio])
                    segundaFase.splice(numAleatorio, 1)   

                    sessionStorage.setItem('chave4', JSON.stringify(confronto4))
                    break;

                case 8:
                    confronto5.push(segundaFase[numAleatorio])
                    segundaFase.splice(numAleatorio, 1)   
                    break;

                case 9:
                    confronto5.push(segundaFase[numAleatorio])
                    segundaFase.splice(numAleatorio, 1)   

                    sessionStorage.setItem('chave5', JSON.stringify(confronto5))
                    break;

                case 10:
                    confronto6.push(segundaFase[numAleatorio])
                    segundaFase.splice(numAleatorio, 1)   
                    break;

                case 11:
                    confronto6.push(segundaFase[numAleatorio])
                    segundaFase.splice(numAleatorio, 1)   

                    sessionStorage.setItem('chave6', JSON.stringify(confronto6))
                    break;

                case 12:
                    confronto7.push(segundaFase[numAleatorio])
                    segundaFase.splice(numAleatorio, 1)   
                    break;

                case 13:
                    confronto7.push(segundaFase[numAleatorio])
                    segundaFase.splice(numAleatorio, 1)   

                    sessionStorage.setItem('chave7', JSON.stringify(confronto7))
                    break;

                case 14:
                    confronto8.push(segundaFase[numAleatorio])
                    segundaFase.splice(numAleatorio, 1)   
                    break;

                case 15:
                    confronto8.push(segundaFase[numAleatorio])
                    segundaFase.splice(numAleatorio, 1)   

                    sessionStorage.setItem('chave8', JSON.stringify(confronto8))
                    break;
            }
        }
    }

    confronto1 = JSON.parse(sessionStorage.getItem('chave1'))
    confronto2 = JSON.parse(sessionStorage.getItem('chave2'))
    confronto3 = JSON.parse(sessionStorage.getItem('chave3'))
    confronto4 = JSON.parse(sessionStorage.getItem('chave4'))
    confronto5 = JSON.parse(sessionStorage.getItem('chave5'))
    confronto6 = JSON.parse(sessionStorage.getItem('chave6'))
    confronto7 = JSON.parse(sessionStorage.getItem('chave7'))
    confronto8 = JSON.parse(sessionStorage.getItem('chave8'))
    
    return(
        <>
            <Header fases='segunda fase' previousLink='/' nextLink=''/>

            <div className="fasesEliminatorias">
                <h2>jogos</h2>

                <div className="confrontos">
                    <div className="confrontoUm">
                        <div className="ida">
                            <p className="information-jogo">terça <span className="stadium">{confronto1 && confronto1[0].estadio}</span> 19:30</p>
                            <p className='gameInformation'>
                                <span className='team'>
                                    {confronto1 && confronto1[0].time}                                                                   
                                    {confronto1 && <img src={confronto1[0].url} alt="" />}
                                </span>
                                <span className="containerInput"><input type="text" className='input-time-resultado'/></span>
                                <span>x</span>     
                                <span className="containerInput"><input type="text" className='input-time-resultado'/></span>
                                <span className='team'>
                                    {confronto1 && <img src={confronto1[1].url} alt="" />}
                                    {confronto1 && confronto1[1].time}                                                                   
                                </span> 
                            </p>                                
                        
                            <div className="containerBtnSalvar">
                                <button className='button btnSalvarResultado'>salvar</button>
                            </div>
                        </div>

                        <div className="volta">
                            <p className="information-jogo">quarta <span className="stadium">{confronto1 && confronto1[1].estadio}</span> 21:00</p>
                            <p className='gameInformation'>
                                <span className='team'>
                                    {confronto1 && confronto1[1].time}                                                                                                                  
                                    {confronto1 && <img src={confronto1[1].url} alt="" />}
                                </span>
                                <span className="containerInput"><input type="text" className='input-time-resultado'/></span>
                                <span>x</span>
                                <span className="containerInput"><input type="text" className='input-time-resultado'/></span>
                                <span className='team'>
                                    {confronto1 && <img src={confronto1[0].url} alt="" />}
                                    {confronto1 && confronto1[0].time}                                                                    
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
                            <p className="information-jogo">quarta <span className="stadium">{confronto2 && confronto2[0].estadio}</span> 21:30</p>
                            <p className='gameInformation'>
                                <span className='team'>
                                    {confronto2 && confronto2[0].time}
                                    {confronto2 && <img src={confronto2[0].url} alt="" />}
                                </span>
                                <span className="containerInput"><input type="text" className='input-time-resultado'/></span>
                                <span>x</span>
                                <span className="containerInput"><input type="text" className='input-time-resultado'/></span>
                                <span className='team'>
                                    {confronto2 && <img src={confronto2[1].url} alt="" />}
                                    {confronto2 && confronto2[1].time}
                                </span> 
                            </p>     

                            <div className="containerBtnSalvar">
                                <button className='button btnSalvarResultado'>salvar</button>
                            </div>
                        </div>

                        <div className="volta">
                            <p className="information-jogo">quinta <span className="stadium">{confronto2 && confronto2[1].estadio}</span> 20:00</p>
                            <p className='gameInformation'>
                                <span className='team'>
                                    {confronto2 && confronto2[1].time}
                                    {confronto2 && <img src={confronto2[1].url} alt="" />}
                                </span>
                                <span className="containerInput"><input type="text" className='input-time-resultado'/></span>
                                <span>x</span>
                                <span className="containerInput"><input type="text" className='input-time-resultado'/></span>
                                <span className='team'>
                                    {confronto2 && <img src={confronto2[0].url} alt="" />}
                                    {confronto2 && confronto2[0].time}
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
                            <p className="information-jogo">quarta <span className="stadium">{confronto3 && confronto3[0].estadio}</span> 21:30</p>
                            <p className='gameInformation'>
                                <span className='team'>
                                    {confronto3 && confronto3[0].time}
                                    {confronto3 && <img src={confronto3[0].url} alt="" />}
                                </span>
                                <span className="containerInput"><input type="text" className='input-time-resultado'/></span>
                                <span>x</span>
                                <span className="containerInput"><input type="text" className='input-time-resultado'/></span>
                                <span className='team'>
                                    {confronto3 && <img src={confronto3[1].url} alt="" />}
                                    {confronto3 && confronto3[1].time}
                                </span> 
                            </p>

                            <div className="containerBtnSalvar">
                                <button className='button btnSalvarResultado'>salvar</button>
                            </div>     
                        </div>

                        <div className="volta">
                            <p className="information-jogo">quinta <span className="stadium">{confronto3 && confronto3[1].estadio}</span> 20:00</p>
                            <p className='gameInformation'>
                                <span className='team'>
                                    {confronto3 && confronto3[1].time}
                                    {confronto3 && <img src={confronto3[1].url} alt="" />}
                                </span>
                                <span className="containerInput"><input type="text" className='input-time-resultado'/></span>
                                <span>x</span>
                                <span className="containerInput"><input type="text" className='input-time-resultado'/></span>
                                <span className='team'>
                                    {confronto3 && <img src={confronto3[0].url} alt="" />}
                                    {confronto3 && confronto3[0].time}
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
                            <p className="information-jogo">quarta <span className="stadium">{confronto4 && confronto4[0].estadio}</span> 21:30</p>
                            <p className='gameInformation'>
                                <span className='team'>
                                    {confronto4 && confronto4[0].time}
                                    {confronto4 && <img src={confronto4[0].url} alt="" />}
                                </span>
                                <span className="containerInput"><input type="text" className='input-time-resultado'/></span>
                                <span>x</span>
                                <span className="containerInput"><input type="text" className='input-time-resultado'/></span>
                                <span className='team'>
                                    {confronto4 && <img src={confronto4[1].url} alt="" />}
                                    {confronto4 && confronto4[1].time}
                                </span> 
                            </p>

                            <div className="containerBtnSalvar">
                                <button className='button btnSalvarResultado'>salvar</button>
                            </div>     
                        </div>

                        <div className="volta">
                            <p className="information-jogo">quinta <span className="stadium">{confronto4 && confronto4[1].estadio}</span> 20:00</p>
                            <p className='gameInformation'>
                                <span className='team'>
                                    {confronto4 && confronto4[1].time}
                                    {confronto4 && <img src={confronto4[1].url} alt="" />}
                                </span>
                                <span className="containerInput"><input type="text" className='input-time-resultado'/></span>
                                <span>x</span>
                                <span className="containerInput"><input type="text" className='input-time-resultado'/></span>
                                <span className='team'>
                                    {confronto4 && <img src={confronto4[0].url} alt="" />}
                                    {confronto4 && confronto4[0].time}
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

                    <div className="confrontoCinco">
                        <div className="ida">
                            <p className="information-jogo">quarta <span className="stadium">{confronto5 && confronto5[0].estadio}</span> 21:30</p>
                            <p className='gameInformation'>
                                <span className='team'>
                                    {confronto5 && confronto5[0].time}
                                    {confronto5 && <img src={confronto5[0].url} alt="" />}
                                </span>
                                <span className="containerInput"><input type="text" className='input-time-resultado'/></span>
                                <span>x</span>
                                <span className="containerInput"><input type="text" className='input-time-resultado'/></span>
                                <span className='team'>
                                    {confronto5 && <img src={confronto5[1].url} alt="" />}
                                    {confronto5 && confronto5[1].time}
                                </span> 
                            </p>

                            <div className="containerBtnSalvar">
                                <button className='button btnSalvarResultado'>salvar</button>
                            </div>     
                        </div>

                        <div className="volta">
                            <p className="information-jogo">quinta <span className="stadium">{confronto5 && confronto5[1].estadio}</span> 20:00</p>
                            <p className='gameInformation'>
                                <span className='team'>
                                    {confronto5 && confronto5[1].time}
                                    {confronto5 && <img src={confronto5[1].url} alt="" />}
                                </span>
                                <span className="containerInput"><input type="text" className='input-time-resultado'/></span>
                                <span>x</span>
                                <span className="containerInput"><input type="text" className='input-time-resultado'/></span>
                                <span className='team'>
                                    {confronto5 && <img src={confronto5[0].url} alt="" />}
                                    {confronto5 && confronto5[0].time}
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

                    <div className="confrontoSeis">
                        <div className="ida">
                            <p className="information-jogo">quarta <span className="stadium">{confronto6 && confronto6[0].estadio}</span> 21:30</p>
                            <p className='gameInformation'>
                                <span className='team'>
                                    {confronto6 && confronto6[0].time}
                                    {confronto6 && <img src={confronto6[0].url} alt="" />}
                                </span>
                                <span className="containerInput"><input type="text" className='input-time-resultado'/></span>
                                <span>x</span>
                                <span className="containerInput"><input type="text" className='input-time-resultado'/></span>
                                <span className='team'>
                                    {confronto6 && <img src={confronto6[1].url} alt="" />}
                                    {confronto6 && confronto6[1].time}
                                </span> 
                            </p>

                            <div className="containerBtnSalvar">
                                <button className='button btnSalvarResultado'>salvar</button>
                            </div>     
                        </div>

                        <div className="volta">
                            <p className="information-jogo">quinta <span className="stadium">{confronto6 && confronto6[1].estadio}</span> 20:00</p>
                            <p className='gameInformation'>
                                <span className='team'>
                                    {confronto6 && confronto6[1].time}
                                    {confronto6 && <img src={confronto6[1].url} alt="" />}
                                </span>
                                <span className="containerInput"><input type="text" className='input-time-resultado'/></span>
                                <span>x</span>
                                <span className="containerInput"><input type="text" className='input-time-resultado'/></span>
                                <span className='team'>
                                    {confronto6 && <img src={confronto6[0].url} alt="" />}
                                    {confronto6 && confronto6[0].time}
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

                    <div className="confrontoSete">
                        <div className="ida">
                            <p className="information-jogo">quarta <span className="stadium">{confronto7 && confronto7[0].estadio}</span> 21:30</p>
                            <p className='gameInformation'>
                                <span className='team'>
                                    {confronto7 && confronto7[0].time}
                                    {confronto7 && <img src={confronto7[0].url} alt="" />}
                                </span>
                                <span className="containerInput"><input type="text" className='input-time-resultado'/></span>
                                <span>x</span>
                                <span className="containerInput"><input type="text" className='input-time-resultado'/></span>
                                <span className='team'>
                                    {confronto7 && <img src={confronto7[1].url} alt="" />}
                                    {confronto7 && confronto7[1].time}
                                </span> 
                            </p>

                            <div className="containerBtnSalvar">
                                <button className='button btnSalvarResultado'>salvar</button>
                            </div>     
                        </div>

                        <div className="volta">
                            <p className="information-jogo">quinta <span className="stadium">{confronto7 && confronto7[1].estadio}</span> 20:00</p>
                            <p className='gameInformation'>
                                <span className='team'>
                                    {confronto7 && confronto7[1].time}
                                    {confronto7 && <img src={confronto7[1].url} alt="" />}
                                </span>
                                <span className="containerInput"><input type="text" className='input-time-resultado'/></span>
                                <span>x</span>
                                <span className="containerInput"><input type="text" className='input-time-resultado'/></span>
                                <span className='team'>
                                    {confronto7 && <img src={confronto7[0].url} alt="" />}
                                    {confronto7 && confronto7[0].time}
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

                    <div className="confrontoOito">
                        <div className="ida">
                            <p className="information-jogo">quarta <span className="stadium">{confronto8 && confronto8[0].estadio}</span> 21:30</p>
                            <p className='gameInformation'>
                                <span className='team'>
                                    {confronto8 && confronto8[0].time}
                                    {confronto8 && <img src={confronto8[0].url} alt="" />}
                                </span>
                                <span className="containerInput"><input type="text" className='input-time-resultado'/></span>
                                <span>x</span>
                                <span className="containerInput"><input type="text" className='input-time-resultado'/></span>
                                <span className='team'>
                                    {confronto8 && <img src={confronto8[1].url} alt="" />}
                                    {confronto8 && confronto8[1].time}
                                </span> 
                            </p>

                            <div className="containerBtnSalvar">
                                <button className='button btnSalvarResultado'>salvar</button>
                            </div>     
                        </div>

                        <div className="volta">
                            <p className="information-jogo">quinta <span className="stadium">{confronto8 && confronto8[1].estadio}</span> 20:00</p>
                            <p className='gameInformation'>
                                <span className='team'>
                                    {confronto8 && confronto8[1].time}
                                    {confronto8 && <img src={confronto8[1].url} alt="" />}
                                </span>
                                <span className="containerInput"><input type="text" className='input-time-resultado'/></span>
                                <span>x</span>
                                <span className="containerInput"><input type="text" className='input-time-resultado'/></span>
                                <span className='team'>
                                    {confronto8 && <img src={confronto8[0].url} alt="" />}
                                    {confronto8 && confronto8[0].time}
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