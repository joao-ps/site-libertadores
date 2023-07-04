import { useContext } from "react"

import { Header } from "../componentes/Header"
import { FaseFinal } from "../componentes/api/getTeams"

export function Final(){
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
    let Final = previaFinal
    let Estadio = 'Maracanã'

    let confronto1 = []

    let saveResults1
    let infoPenalti1

    saveResults1 = JSON.parse(sessionStorage.getItem('Final'))
    infoPenalti1 = JSON.parse(sessionStorage.getItem('PenFinal'))

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
        
            if(!result1 || ! result2)return

            jogo1[0] = Number(result1)
            jogo1[1] = Number(result2)

            sessionStorage.setItem('Final', JSON.stringify(jogo1))
            saveResults1 = JSON.parse(sessionStorage.getItem('Final'))

            resultsGames[0].setAttribute('readonly', 'readonly')
            resultsGames[1].setAttribute('readonly', 'readonly')

            if(saveResults1[0] == saveResults1[1]){
                containerPenaltis[0].classList.add('on') 
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
                sessionStorage.setItem('PenFinal', JSON.stringify(Penaltis1))

                if(penalt1 > penalt2 ){
                    spanTeam[1].classList.add('eliminado') 
                }else{
                    spanTeam[0].classList.add('eliminado')
                }
            }else{
                if(saveResults1[0] > saveResults1[1]){
                    spanTeam[1].classList.add('eliminado')
                }else{
                    spanTeam[0].classList.add('eliminado') 
                }
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
            }
        })

    }

    if(Final.length == 2){
        confronto1[0] = Final[0]
        confronto1[1] = Final[1]
        updateMandoDeCampo(confronto1)
        sessionStorage.setItem('JgFinal', JSON.stringify(confronto1))
    }

    confronto1 = JSON.parse(sessionStorage.getItem('JgFinal'))

    setTimeout(addFunctionButton, 200)

    return(
        <>
            <Header fases='final' previousLink='/semifinal' nextLink=''></Header>

            <div className="fasesEliminatorias">
                <h2>jogos</h2>

                <div className="confrontos">
                    <div className="confrontoUm">
                        <div className="ida">
                        <p className="information-jogo">sábado <span className="stadium">
                                {Estadio}
                            </span> 17:00</p>
                            <p className='gameInformation'>
                                <span className='team'>
                                    {confronto1 && confronto1[1].time}                        
                                    {confronto1 && <img src={confronto1[1].url} alt="" />}                                           
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
                                    {confronto1 && <img src={confronto1[0].url} alt="" />}    
                                    {confronto1 && confronto1[0].time}                                                               
                                </span>
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