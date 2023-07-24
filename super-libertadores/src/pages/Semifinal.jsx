import { useContext } from "react"

import { Header } from "../componentes/Header"
import { FaseFinal } from "../componentes/api/getTeams"

export function Semifinal(){
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
    let poteSemi = previaSemi

    let confronto1 = []
    let confronto2 = []

    let saveResults1
    let saveResults2
    let saveResults3
    let saveResults4
    let infoPenalti1
    let infoPenalti2

    saveResults1 = JSON.parse(sessionStorage.getItem('JgSemi-1'))
    saveResults2 = JSON.parse(sessionStorage.getItem('JgSemi-2'))
    saveResults3 = JSON.parse(sessionStorage.getItem('JgSemi-3'))
    saveResults4 = JSON.parse(sessionStorage.getItem('JgSemi-4'))
    infoPenalti1 = JSON.parse(sessionStorage.getItem('PenSemi-1'))
    infoPenalti2 = JSON.parse(sessionStorage.getItem('PenSemi-2'))

    function resultsUpdate(team, proIda, proVolta, contraIda, contraVolta){
        let Team = team
        let resultProIda = proIda
        let resultContraIda = contraIda
        let resultProVolta = proVolta
        let resultContraVolta = contraVolta

        for (let index = 1; index <= 2; index++) {
            if(index == 1){
                Team.j += 1   

                if(resultProIda > resultContraIda){
                    Team.p += 3
                    Team.v += 1
                }else if(resultProIda == resultContraIda){
                    Team.p += 1
                    Team.e += 1
                }else{
                    Team.d += 1
                }

                Team.gp += resultProIda
                Team.gc += resultContraIda
                Team.sg = Team.gp - Team.gc
            }else{
                Team.j += 1   

                if(resultProVolta > resultContraVolta){
                    Team.p += 3
                    Team.v += 1
                }else if(resultProVolta == resultContraVolta){
                    Team.p += 1
                    Team.e += 1
                }else{
                    Team.d += 1
                }

                Team.gp += resultProVolta
                Team.gc += resultContraVolta
                Team.sg = Team.gp - Team.gc
            }
        }
    }

    function addFunctionButton(){
        let spanTeam = document.querySelectorAll('span.team')
        let resultsGames = document.querySelectorAll('.input-time-resultado')
        let containerPenaltis = document.querySelectorAll('.penaltis')
        let resultPenaltis = document.querySelectorAll('.input-resultado-penaltis')
        let ButtonSave = document.querySelectorAll('.btnSalvarResultado')

        ButtonSave[0].addEventListener("click", function setResult(){
            let result1 = resultsGames[0].value
            let result2 = resultsGames[1].value
            let jogo1 = []
        
            if(saveResults1 != null){
                console.log('Resultadores já registrados')
                return
            }
        
            if(!result1 || ! result2)return

            jogo1[0] = Number(result1)
            jogo1[1] = Number(result2)

            sessionStorage.setItem('JgSemi-1', JSON.stringify(jogo1))
            saveResults1 = JSON.parse(sessionStorage.getItem('JgSemi-1'))

            resultsGames[0].setAttribute('readonly', 'readonly')
            resultsGames[1].setAttribute('readonly', 'readonly')

            this.classList.add('btn-disabled')
            this.removeEventListener('click', setResult)
        })
        ButtonSave[1].addEventListener("click", function setResult(){
            let result1 = resultsGames[2].value
            let result2 = resultsGames[3].value
            let golFora = false
            let jogo2 = []
            
            if(saveResults1 == undefined){
                console.log('Resultado do primeiro jogo não registrado')
                return
            }
            let acumuladoGols1 = Number(saveResults1[0]) + Number(result2)
            let acumuladoGols2 = Number(saveResults1[1]) + Number(result1)

            if(saveResults2 != null){
                console.log('Resultadores já registrados')
                return
            }
            
            if(!result1 || ! result2)return

            jogo2[0] = Number(result1)
            jogo2[1] = Number(result2)

            sessionStorage.setItem('JgSemi-2', JSON.stringify(jogo2))
            //saveResults2 = JSON.parse(sessionStorage.getItem('JgSemi-2'))

            resultsGames[2].setAttribute('readonly', 'readonly')
            resultsGames[3].setAttribute('readonly', 'readonly')

            if(acumuladoGols1 == acumuladoGols2){
                if(resultsGames[0].value == resultsGames[2].value && resultsGames[1].value == resultsGames[3].value){
                    containerPenaltis[0].classList.add('on') 
                }else(
                    golFora = true
                )
            }

            if(containerPenaltis[0].classList.contains('on') == true){
                let penalt1 = resultPenaltis[0].value
                let penalt2 = resultPenaltis[1].value
                let Penaltis1 = []

                if(!penalt1 || !penalt2)return

                resultPenaltis[0].setAttribute('readonly', 'readonly')
                resultPenaltis[1].setAttribute('readonly', 'readonly')

                Penaltis1[0] = Number(penalt1)
                Penaltis1[1] = Number(penalt2)
                sessionStorage.setItem('PenSemi-1', JSON.stringify(Penaltis1))

                if(penalt1 > penalt2 ){
                    spanTeam[0].classList.add('eliminado') 
                    spanTeam[3].classList.add('eliminado')

                    newFinal(confronto1[1], 0)
                }else{
                    spanTeam[1].classList.add('eliminado')
                    spanTeam[2].classList.add('eliminado')

                    newFinal(confronto1[0], 0)
                }                
            }else if(golFora){
                if(resultsGames[1].value > resultsGames[3].value){
                    spanTeam[0].classList.add('eliminado') 
                    spanTeam[3].classList.add('eliminado')

                    newFinal(confronto1[1], 0)
                }else{
                    spanTeam[1].classList.add('eliminado')
                    spanTeam[2].classList.add('eliminado')

                    newFinal(confronto1[0], 0)
                }
            }else{
                if(acumuladoGols1 > acumuladoGols2){
                    spanTeam[1].classList.add('eliminado')
                    spanTeam[2].classList.add('eliminado')

                    newFinal(confronto1[0], 0)
                }else{
                    spanTeam[0].classList.add('eliminado') 
                    spanTeam[3].classList.add('eliminado')

                    newFinal(confronto1[1], 0)
                }
            }

            if(previaFinal.length == 1){
                resultsUpdate(confronto1[1], saveResults1[1], jogo2[0], saveResults1[0], jogo2[1])
                resultsUpdate(confronto1[0], saveResults1[0], jogo2[1], saveResults1[1], jogo2[0])
            }

            this.classList.add('btn-disabled')
            this.removeEventListener('click', setResult)
        })
        ButtonSave[2].addEventListener("click", function setResult(){
            let result1 = resultsGames[4].value
            let result2 = resultsGames[5].value
            let jogo1 = []
        
            if(saveResults3 != null){
                console.log('Resultadores já registrados')
                return
            }
        
            if(!result1 || ! result2)return

            jogo1[0] = Number(result1)
            jogo1[1] = Number(result2)

            sessionStorage.setItem('JgSemi-3', JSON.stringify(jogo1))
            saveResults3 = JSON.parse(sessionStorage.getItem('JgSemi-3'))

            resultsGames[4].setAttribute('readonly', 'readonly')
            resultsGames[5].setAttribute('readonly', 'readonly')

            this.classList.add('btn-disabled')
            this.removeEventListener('click', setResult)
        })
        ButtonSave[3].addEventListener("click", function setResult(){
            let result1 = resultsGames[6].value
            let result2 = resultsGames[7].value
            let golFora = false
            let jogo2 = []
            
            if(saveResults3 == undefined){
                console.log('Resultado do primeiro jogo não registrado')
                return
            }
            let acumuladoGols1 = Number(saveResults3[0]) + Number(result2)
            let acumuladoGols2 = Number(saveResults3[1]) + Number(result1)

            if(saveResults4 != null){
                console.log('Resultadores já registrados')
                return
            }
            
            if(!result1 || ! result2)return

            jogo2[0] = Number(result1)
            jogo2[1] = Number(result2)

            sessionStorage.setItem('JgSemi-4', JSON.stringify(jogo2))
            //saveResults4 = JSON.parse(sessionStorage.getItem('JgSemi-4'))

            resultsGames[6].setAttribute('readonly', 'readonly')
            resultsGames[7].setAttribute('readonly', 'readonly')

            if(acumuladoGols1 == acumuladoGols2){
                if(resultsGames[4].value == resultsGames[6].value && resultsGames[5].value == resultsGames[7].value){
                    containerPenaltis[1].classList.add('on')
                }else(
                    golFora = true
                )
            }

            if(containerPenaltis[1].classList.contains('on') == true){
                let penalt1 = resultPenaltis[2].value
                let penalt2 = resultPenaltis[3].value
                let Penaltis1 = []

                if(!penalt1 || !penalt2)return

                resultPenaltis[2].setAttribute('readonly', 'readonly')
                resultPenaltis[3].setAttribute('readonly', 'readonly')

                Penaltis1[0] = Number(penalt1)
                Penaltis1[1] = Number(penalt2)
                sessionStorage.setItem('PenSemi-2', JSON.stringify(Penaltis1))

                if(penalt1 > penalt2 ){
                    spanTeam[4].classList.add('eliminado') 
                    spanTeam[7].classList.add('eliminado')

                    newFinal(confronto2[1], 1)
                }else{
                    spanTeam[5].classList.add('eliminado')
                    spanTeam[6].classList.add('eliminado')

                    newFinal(confronto2[0], 1)
                }                
            }else if(golFora){
                if(resultsGames[5].value > resultsGames[7].value){
                    spanTeam[4].classList.add('eliminado') 
                    spanTeam[7].classList.add('eliminado')

                    newFinal(confronto2[1], 1)
                }else{
                    spanTeam[5].classList.add('eliminado')
                    spanTeam[6].classList.add('eliminado')

                    newFinal(confronto2[0], 1)
                }
            }else{
                if(acumuladoGols1 > acumuladoGols2){
                    spanTeam[5].classList.add('eliminado')
                    spanTeam[6].classList.add('eliminado')

                    newFinal(confronto2[0], 1)
                }else{
                    spanTeam[4].classList.add('eliminado') 
                    spanTeam[7].classList.add('eliminado')

                    newFinal(confronto2[1], 1)
                }
            }

            if(previaFinal.length == 2){
                resultsUpdate(confronto2[1], saveResults3[1], jogo2[0], saveResults3[0], jogo2[1])
                resultsUpdate(confronto2[0], saveResults3[0], jogo2[1], saveResults3[1], jogo2[0])
            }

            this.classList.add('btn-disabled')
            this.removeEventListener('click', setResult)
        })
    }

    function updateMandoDeCampo(embate){
        let confronto = embate

        confronto.sort((a,b) => {
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
                        }else if(a.gp == b.gp){
                            if(a.d < b.d){
                                return 1
                            }else if(a.d == b.d){
                                if(a.gc < b.gc){
                                    return 1
                                }
                            }
                        }
                    }
                }
            }else{
                return -1
            }
        })

    }

    if(previaSemi.length == 4){
        for(let i = 0; i < 4; i++) {
            let numAleatorio = Math.floor(Math.random()*poteSemi.length)

            switch (i) {
                case 0:
                    confronto1[0] = poteSemi[0]
                    break;

                case 1:
                    confronto1[1] = poteSemi[1]
                    updateMandoDeCampo(confronto1)
                    break;

                case 2:
                    confronto2[0] = poteSemi[2]
                    break;

                case 3:
                    confronto2[1] = poteSemi[3]
                    updateMandoDeCampo(confronto2)
                    newSemi('encerrado')
                    break;
            }
        }
        sessionStorage.setItem('Semi1', JSON.stringify(confronto1))
        sessionStorage.setItem('Semi2', JSON.stringify(confronto2))
    }

    confronto1 = JSON.parse(sessionStorage.getItem('Semi1'))
    confronto2 = JSON.parse(sessionStorage.getItem('Semi2'))

    setTimeout(addFunctionButton, 200)

    return(
        <>
            <Header fases='semifinal' previousLink='/quartas-de-final' nextLink='/final'></Header>

            <div className="fasesEliminatorias">
                <h2>jogos</h2>

                <div className="confrontos">
                    <div className="confrontoUm">
                        <div className="ida">
                            <p className="information-jogo">terça <span className="stadium">
                                {confronto1 && confronto1[0].estadio}                        
                            </span> 19:30</p>
                            <p className='gameInformation'>
                                <span className='team'>
                                    {confronto1 && confronto1[0].time}                        
                                    {confronto1 && <img src={confronto1[0].url} alt="" />}                                           
                                </span>
                                <span className="containerInput">
                                    {
                                        saveResults1 != null
                                            ?
                                                <input 
                                                    type="text" 
                                                    className='input-time-resultado'
                                                    value={saveResults1[0]}
                                                    readOnly
                                                />
                                            :
                                                <input type="text" className='input-time-resultado'/>
                                    }
                                </span>
                                <span>x</span>
                                <span className="containerInput">
                                    {
                                        saveResults1 != null 
                                            ?
                                                <input 
                                                    type="text" 
                                                    className='input-time-resultado'
                                                    value={saveResults1[1]}
                                                    readOnly
                                                />
                                            :
                                                <input type="text" className='input-time-resultado'/>
                                    }
                                </span>
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
                            <p className="information-jogo">terça <span className="stadium">
                                {confronto1 && confronto1[1].estadio}
                            </span> 19:30</p>
                            <p className='gameInformation'>
                                <span className='team'>
                                    {confronto1 && confronto1[1].time}                                                               
                                    {confronto1 && <img src={confronto1[1].url} alt="" />}    
                                </span>
                                <span className="containerInput">
                                    {
                                        saveResults2 != null 
                                            ?
                                                <input 
                                                    type="text" 
                                                    className='input-time-resultado'
                                                    value={saveResults2[0]}
                                                    readOnly
                                                />
                                            :
                                                <input type="text" className='input-time-resultado'/>
                                    }
                                </span>
                                <span>x</span>
                                <span className="containerInput">
                                    {
                                        saveResults2 != null 
                                            ?
                                                <input 
                                                    type="text" 
                                                    className='input-time-resultado'
                                                    value={saveResults2[1]}
                                                    readOnly
                                                />
                                            :
                                                <input type="text" className='input-time-resultado'/>
                                    }
                                </span>
                                <span className='team'>
                                    {confronto1 && <img src={confronto1[0].url} alt="" />}    
                                    {confronto1 && confronto1[0].time}                                                               
                                </span>
                            </p>

                            {
                                infoPenalti1 != null
                                    ?
                                        <p className="penaltis on">
                                            <span className="containerInput">
                                                <input 
                                                    type="text" 
                                                    className='input-resultado-penaltis'
                                                    value={infoPenalti1[0]}
                                                    readOnly
                                                />
                                            </span>
                                            <span className="containerInput">
                                                <input 
                                                    type="text" 
                                                    className='input-resultado-penaltis'
                                                    value={infoPenalti1[1]}
                                                    readOnly
                                                />
                                            </span>
                                        </p>
                                    :
                                        <p className="penaltis">
                                            <span className="containerInput"><input type="text" className='input-resultado-penaltis'/></span>
                                            <span className="containerInput"><input type="text" className='input-resultado-penaltis'/></span>
                                        </p>
                            }

                            <div className="containerBtnSalvar">
                                <button className='button btnSalvarResultado'>salvar</button>
                            </div>
                        </div>
                    </div>

                    <div className="confrontoDois">
                        <div className="ida">
                            <p className="information-jogo">terça <span className="stadium">
                                {confronto2 && confronto2[0].estadio}    
                            </span> 19:30</p>
                            <p className='gameInformation'>
                                <span className='team'>
                                    {confronto2 && confronto2[0].time}                    
                                    {confronto2 && <img src={confronto2[0].url} alt="" />}    
                                </span>
                                <span className="containerInput">
                                    {
                                        saveResults3 != null 
                                            ?
                                                <input 
                                                    type="text" 
                                                    className='input-time-resultado'
                                                    value={saveResults3[0]}
                                                    readOnly
                                                />
                                            :
                                                <input type="text" className='input-time-resultado'/>
                                    }
                                </span>
                                <span>x</span>
                                <span className="containerInput">
                                    {
                                        saveResults3 != null 
                                            ?
                                                <input 
                                                    type="text" 
                                                    className='input-time-resultado'
                                                    value={saveResults3[1]}
                                                    readOnly
                                                />
                                            :
                                                <input type="text" className='input-time-resultado'/>
                                    }
                                </span>
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
                            <p className="information-jogo">terça <span className="stadium">
                                {confronto2 && confronto2[1].estadio}
                            </span> 19:30</p>
                            <p className='gameInformation'>
                                <span className='team'>
                                    {confronto2 && confronto2[1].time}                    
                                    {confronto2 && <img src={confronto2[1].url} alt="" />}    
                                </span>
                                <span className="containerInput">
                                    {
                                        saveResults4 != null 
                                            ?
                                                <input 
                                                    type="text" 
                                                    className='input-time-resultado'
                                                    value={saveResults4[0]}
                                                    readOnly
                                                />
                                            :
                                                <input type="text" className='input-time-resultado'/>
                                    }
                                </span>
                                <span>x</span>
                                <span className="containerInput">
                                    {
                                        saveResults4 != null 
                                            ?
                                                <input 
                                                    type="text" 
                                                    className='input-time-resultado'
                                                    value={saveResults4[1]}
                                                    readOnly
                                                />
                                            :
                                                <input type="text" className='input-time-resultado'/>
                                    }
                                </span>
                                <span className='team'>
                                    {confronto2 && <img src={confronto2[0].url} alt="" />}    
                                    {confronto2 && confronto2[0].time}                    
                                </span>
                            </p>

                            {
                                infoPenalti2 != null
                                    ?
                                        <p className="penaltis on">
                                            <span className="containerInput">
                                                <input 
                                                    type="text" 
                                                    className='input-resultado-penaltis'
                                                    value={infoPenalti2[0]}
                                                    readOnly
                                                />
                                            </span>
                                            <span className="containerInput">
                                                <input 
                                                    type="text" 
                                                    className='input-resultado-penaltis'
                                                    value={infoPenalti2[1]}
                                                    readOnly
                                                />
                                            </span>
                                        </p>
                                    :
                                        <p className="penaltis">
                                            <span className="containerInput"><input type="text" className='input-resultado-penaltis'/></span>
                                            <span className="containerInput"><input type="text" className='input-resultado-penaltis'/></span>
                                        </p>
                            }

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