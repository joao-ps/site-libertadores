import { Header } from "../componentes/Header"

export function Semifinal(){
    return(
        <>
            <Header fases='semifinal' previousLink='/quartas-de-final' nextLink='/final'></Header>

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
                </div>
            </div>
        </>
    )
}