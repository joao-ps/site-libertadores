import { useContext } from "react"

import { Header } from "../componentes/Header"
import { FaseFinal } from "../componentes/api/getTeams"

export function Quartas(){
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
    let poteQuartas = previaQuartas

    let confronto1 = []
    let confronto2 = []
    let confronto3 = []
    let confronto4 = []

    let saveResults1
    let saveResults2
    let saveResults3
    let saveResults4
    let saveResults5
    let saveResults6
    let saveResults7
    let saveResults8

    let infoPenalti1
    let infoPenalti2
    let infoPenalti3
    let infoPenalti4

    saveResults1 = JSON.parse(sessionStorage.getItem('Jg4-1'))
    saveResults2 = JSON.parse(sessionStorage.getItem('Jg4-2'))
    saveResults3 = JSON.parse(sessionStorage.getItem('Jg4-3'))
    saveResults4 = JSON.parse(sessionStorage.getItem('Jg4-4'))
    saveResults5 = JSON.parse(sessionStorage.getItem('Jg4-5'))
    saveResults6 = JSON.parse(sessionStorage.getItem('Jg4-6'))
    saveResults7 = JSON.parse(sessionStorage.getItem('Jg4-7'))
    saveResults8 = JSON.parse(sessionStorage.getItem('Jg4-8'))

    infoPenalti1 = JSON.parse(sessionStorage.getItem('Pen4-1'))
    infoPenalti2 = JSON.parse(sessionStorage.getItem('Pen4-2'))
    infoPenalti3 = JSON.parse(sessionStorage.getItem('Pen4-3'))
    infoPenalti4 = JSON.parse(sessionStorage.getItem('Pen4-4'))

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

            sessionStorage.setItem('Jg4-1', JSON.stringify(jogo1))
            saveResults1 = JSON.parse(sessionStorage.getItem('Jg4-1'))

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

            sessionStorage.setItem('Jg4-2', JSON.stringify(jogo2))
            //saveResults2 = JSON.parse(sessionStorage.getItem('Jg4-2'))

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
                sessionStorage.setItem('Pen4-1', JSON.stringify(Penaltis1))

                if(penalt1 > penalt2 ){
                    spanTeam[0].classList.add('eliminado') 
                    spanTeam[3].classList.add('eliminado')

                    newSemi(confronto1[1], 0)
                }else{
                    spanTeam[1].classList.add('eliminado')
                    spanTeam[2].classList.add('eliminado')

                    newSemi(confronto1[0], 0)
                }                
            }else if(golFora){
                if(resultsGames[1].value > resultsGames[3].value){
                    spanTeam[0].classList.add('eliminado') 
                    spanTeam[3].classList.add('eliminado')

                    newSemi(confronto1[1], 0)
                }else{
                    spanTeam[1].classList.add('eliminado')
                    spanTeam[2].classList.add('eliminado')

                    newSemi(confronto1[0], 0)
                }
            }else{
                if(acumuladoGols1 > acumuladoGols2){
                    spanTeam[1].classList.add('eliminado')
                    spanTeam[2].classList.add('eliminado')

                    newSemi(confronto1[0], 0)
                }else{
                    spanTeam[0].classList.add('eliminado') 
                    spanTeam[3].classList.add('eliminado')

                    newSemi(confronto1[1], 0)
                }
            }

            if(previaSemi.length == 1){
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

            sessionStorage.setItem('Jg4-3', JSON.stringify(jogo1))
            saveResults3 = JSON.parse(sessionStorage.getItem('Jg4-3'))

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

            sessionStorage.setItem('Jg4-4', JSON.stringify(jogo2))
            //saveResults4 = JSON.parse(sessionStorage.getItem('Jg4-4'))

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
                sessionStorage.setItem('Pen4-2', JSON.stringify(Penaltis1))

                if(penalt1 > penalt2 ){
                    spanTeam[4].classList.add('eliminado') 
                    spanTeam[7].classList.add('eliminado')

                    newSemi(confronto2[1], 1)
                }else{
                    spanTeam[5].classList.add('eliminado')
                    spanTeam[6].classList.add('eliminado')

                    newSemi(confronto2[0], 1)
                }                
            }else if(golFora){
                if(resultsGames[5].value > resultsGames[7].value){
                    spanTeam[4].classList.add('eliminado') 
                    spanTeam[7].classList.add('eliminado')

                    newSemi(confronto2[1], 1)
                }else{
                    spanTeam[5].classList.add('eliminado')
                    spanTeam[6].classList.add('eliminado')

                    newSemi(confronto2[0], 1)
                }
            }else{
                if(acumuladoGols1 > acumuladoGols2){
                    spanTeam[5].classList.add('eliminado')
                    spanTeam[6].classList.add('eliminado')

                    newSemi(confronto2[0], 1)
                }else{
                    spanTeam[4].classList.add('eliminado') 
                    spanTeam[7].classList.add('eliminado')

                    newSemi(confronto2[1], 1)
                }
            }

            if(previaSemi.length == 2){
                resultsUpdate(confronto2[1], saveResults3[1], jogo2[0], saveResults3[0], jogo2[1])
                resultsUpdate(confronto2[0], saveResults3[0], jogo2[1], saveResults3[1], jogo2[0])
            }

            this.classList.add('btn-disabled')
            this.removeEventListener('click', setResult)
        })
        ButtonSave[4].addEventListener("click", function setResult(){
            let result1 = resultsGames[8].value
            let result2 = resultsGames[9].value
            let jogo1 = []
        
            if(saveResults5 != null){
                console.log('Resultadores já registrados')
                return
            }
        
            if(!result1 || ! result2)return

            jogo1[0] = Number(result1)
            jogo1[1] = Number(result2)

            sessionStorage.setItem('Jg4-5', JSON.stringify(jogo1))
            saveResults5 = JSON.parse(sessionStorage.getItem('Jg4-5'))

            resultsGames[8].setAttribute('readonly', 'readonly')
            resultsGames[9].setAttribute('readonly', 'readonly')

            this.classList.add('btn-disabled')
            this.removeEventListener('click', setResult)
        })
        ButtonSave[5].addEventListener("click", function setResult(){
            let result1 = resultsGames[10].value
            let result2 = resultsGames[11].value
            let golFora = false
            let jogo2 = []
            
            if(saveResults5 == undefined){
                console.log('Resultado do primeiro jogo não registrado')
                return
            }
            let acumuladoGols1 = Number(saveResults5[0]) + Number(result2)
            let acumuladoGols2 = Number(saveResults5[1]) + Number(result1)

            if(saveResults6 != null){
                console.log('Resultadores já registrados')
                return
            }
            
            if(!result1 || ! result2)return

            jogo2[0] = Number(result1)
            jogo2[1] = Number(result2)

            sessionStorage.setItem('Jg4-6', JSON.stringify(jogo2))
            //saveResults6 = JSON.parse(sessionStorage.getItem('Jg4-6'))

            resultsGames[10].setAttribute('readonly', 'readonly')
            resultsGames[11].setAttribute('readonly', 'readonly')

            if(acumuladoGols1 == acumuladoGols2){
                if(resultsGames[8].value == resultsGames[10].value && resultsGames[9].value == resultsGames[11].value){
                    containerPenaltis[2].classList.add('on') 
                }else(
                    golFora = true
                )
            }

            if(containerPenaltis[2].classList.contains('on') == true){
                let penalt1 = resultPenaltis[4].value
                let penalt2 = resultPenaltis[5].value
                let Penaltis1 = []

                if(!penalt1 || !penalt2)return

                resultPenaltis[4].setAttribute('readonly', 'readonly')
                resultPenaltis[5].setAttribute('readonly', 'readonly')

                Penaltis1[0] = Number(penalt1)
                Penaltis1[1] = Number(penalt2)
                sessionStorage.setItem('Pen4-3', JSON.stringify(Penaltis1))

                if(penalt1 > penalt2 ){
                    spanTeam[8].classList.add('eliminado') 
                    spanTeam[11].classList.add('eliminado')

                    newSemi(confronto3[1], 2)
                }else{
                    spanTeam[9].classList.add('eliminado')
                    spanTeam[10].classList.add('eliminado')

                    newSemi(confronto3[0], 2)
                }                
            }else if(golFora){
                if(resultsGames[9].value > resultsGames[11].value){
                    spanTeam[8].classList.add('eliminado') 
                    spanTeam[11].classList.add('eliminado')

                    newSemi(confronto3[1], 2)
                }else{
                    spanTeam[9].classList.add('eliminado')
                    spanTeam[10].classList.add('eliminado')

                    newSemi(confronto3[0], 2)
                }
            }else{
                if(acumuladoGols1 > acumuladoGols2){
                    spanTeam[9].classList.add('eliminado')
                    spanTeam[10].classList.add('eliminado')

                    newSemi(confronto3[0], 2)
                }else{
                    spanTeam[8].classList.add('eliminado') 
                    spanTeam[11].classList.add('eliminado')

                    newSemi(confronto3[1], 2)
                }
            }

            if(previaSemi.length == 3){
                resultsUpdate(confronto3[1], saveResults5[1], jogo2[0], saveResults5[0], jogo2[1])
                resultsUpdate(confronto3[0], saveResults5[0], jogo2[1], saveResults5[1], jogo2[0])
            }

            this.classList.add('btn-disabled')
            this.removeEventListener('click', setResult)
        })
        ButtonSave[6].addEventListener("click", function setResult(){
            let result1 = resultsGames[12].value
            let result2 = resultsGames[13].value
            let jogo1 = []
        
            if(saveResults7 != null){
                console.log('Resultadores já registrados')
                return
            }
        
            if(!result1 || ! result2)return

            jogo1[0] = Number(result1)
            jogo1[1] = Number(result2)

            sessionStorage.setItem('Jg4-7', JSON.stringify(jogo1))
            saveResults7 = JSON.parse(sessionStorage.getItem('Jg4-7'))

            resultsGames[12].setAttribute('readonly', 'readonly')
            resultsGames[13].setAttribute('readonly', 'readonly')

            this.classList.add('btn-disabled')
            this.removeEventListener('click', setResult)
        })
        ButtonSave[7].addEventListener("click", function setResult(){
            let result1 = resultsGames[14].value
            let result2 = resultsGames[15].value
            let golFora = false
            let jogo2 = []
            
            if(saveResults7 == undefined){
                console.log('Resultado do primeiro jogo não registrado')
                return
            }
            let acumuladoGols1 = Number(saveResults7[0]) + Number(result2)
            let acumuladoGols2 = Number(saveResults7[1]) + Number(result1)

            if(saveResults8 != null){
                console.log('Resultadores já registrados')
                return
            }
            
            if(!result1 || ! result2)return

            jogo2[0] = Number(result1)
            jogo2[1] = Number(result2)

            sessionStorage.setItem('Jg4-8', JSON.stringify(jogo2))
            //saveResults8 = JSON.parse(sessionStorage.getItem('Jg4-8'))

            resultsGames[14].setAttribute('readonly', 'readonly')
            resultsGames[15].setAttribute('readonly', 'readonly')

            if(acumuladoGols1 == acumuladoGols2){
                if(resultsGames[12].value == resultsGames[14].value && resultsGames[13].value == resultsGames[15].value){
                    containerPenaltis[3].classList.add('on')   
                }else(
                    golFora = true
                )
            }

            if(containerPenaltis[3].classList.contains('on') == true){
                let penalt1 = resultPenaltis[6].value
                let penalt2 = resultPenaltis[7].value
                let Penaltis1 = []

                if(!penalt1 || !penalt2)return

                resultPenaltis[6].setAttribute('readonly', 'readonly')
                resultPenaltis[7].setAttribute('readonly', 'readonly')

                Penaltis1[0] = Number(penalt1)
                Penaltis1[1] = Number(penalt2)
                sessionStorage.setItem('Pen4-4', JSON.stringify(Penaltis1))

                if(penalt1 > penalt2 ){
                    spanTeam[12].classList.add('eliminado') 
                    spanTeam[15].classList.add('eliminado')

                    newSemi(confronto4[1], 3)
                }else{
                    spanTeam[13].classList.add('eliminado')
                    spanTeam[14].classList.add('eliminado')

                    newSemi(confronto4[0], 3)
                }                
            }else if(golFora){
                if(resultsGames[13].value > resultsGames[15].value){
                    spanTeam[12].classList.add('eliminado') 
                    spanTeam[15].classList.add('eliminado')

                    newSemi(confronto4[1], 3)
                }else{
                    spanTeam[13].classList.add('eliminado')
                    spanTeam[14].classList.add('eliminado')

                    newSemi(confronto4[0], 3)
                }
            }else{
                if(acumuladoGols1 > acumuladoGols2){
                    spanTeam[13].classList.add('eliminado')
                    spanTeam[14].classList.add('eliminado')

                    newSemi(confronto4[0], 3)
                }else{
                    spanTeam[12].classList.add('eliminado') 
                    spanTeam[15].classList.add('eliminado')

                    newSemi(confronto4[1], 3)
                }
            }

            if(previaSemi.length == 4){
                resultsUpdate(confronto4[1], saveResults7[1], jogo2[0], saveResults7[0], jogo2[1])
                resultsUpdate(confronto4[0], saveResults7[0], jogo2[1], saveResults7[1], jogo2[0])
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

    if(previaQuartas.length == 8){
        for(let i = 0; i < 8; i++) {
            let numAleatorio = Math.floor(Math.random()*poteQuartas.length)

            switch (i) {
                case 0:
                    confronto1.push(poteQuartas[numAleatorio])
                    poteQuartas.splice(numAleatorio, 1)   
                    break;
            
                case 1:
                    confronto1.push(poteQuartas[numAleatorio])
                    poteQuartas.splice(numAleatorio, 1)   

                    console.log(confronto1[0].time)
                    console.log(confronto1[1].time)
                    console.log('CHAVE A ^^^^')

                    updateMandoDeCampo(confronto1)
                    break;

                case 2:
                    confronto2.push(poteQuartas[numAleatorio])
                    poteQuartas.splice(numAleatorio, 1)   
                    break;

                case 3:
                    confronto2.push(poteQuartas[numAleatorio])
                    poteQuartas.splice(numAleatorio, 1)   

                    console.log(confronto2[0].time)
                    console.log(confronto2[1].time)
                    console.log('CHAVE B ^^^^')

                    updateMandoDeCampo(confronto2)
                    break;

                case 4:
                    confronto3.push(poteQuartas[numAleatorio])
                    poteQuartas.splice(numAleatorio, 1)   
                    break;

                case 5:
                    confronto3.push(poteQuartas[numAleatorio])
                    poteQuartas.splice(numAleatorio, 1)   

                    console.log(confronto3[0].time)
                    console.log(confronto3[1].time)
                    console.log('CHAVE C ^^^^')

                    updateMandoDeCampo(confronto3)
                    break;

                case 6:
                    confronto4.push(poteQuartas[numAleatorio])
                    poteQuartas.splice(numAleatorio, 1)   
                    break;

                case 7:
                    confronto4.push(poteQuartas[numAleatorio])
                    poteQuartas.splice(numAleatorio, 1)   

                    console.log(confronto4[0].time)
                    console.log(confronto4[1].time)
                    console.log('CHAVE D ^^^^')

                    updateMandoDeCampo(confronto4)

                    newQuartas('encerrado')
                    break;
            }
        }
        sessionStorage.setItem('quartas1', JSON.stringify(confronto1))
        sessionStorage.setItem('quartas2', JSON.stringify(confronto2))
        sessionStorage.setItem('quartas3', JSON.stringify(confronto3))
        sessionStorage.setItem('quartas4', JSON.stringify(confronto4))
    }

    confronto1 = JSON.parse(sessionStorage.getItem('quartas1'))
    confronto2 = JSON.parse(sessionStorage.getItem('quartas2'))
    confronto3 = JSON.parse(sessionStorage.getItem('quartas3'))
    confronto4 = JSON.parse(sessionStorage.getItem('quartas4'))

    console.log(confronto1)
    console.log(confronto2)
    console.log(confronto3)
    console.log(confronto4)

    setTimeout(addFunctionButton, 200)

    return(
        <>
            <Header fases='quartas de final' previousLink='/oitavas-de-final' nextLink='/semifinal'></Header>

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

                    <div className="confrontoTres">
                        <div className="ida">
                            <p className="information-jogo">terça <span className="stadium">
                                {confronto3 && confronto3[0].estadio}    
                            </span> 19:30</p>
                            <p className='gameInformation'>
                                <span className='team'>
                                    {confronto3 && confronto3[0].time}                 
                                    {confronto3 && <img src={confronto3[0].url} alt="" />}    
                                </span>
                                <span className="containerInput">
                                    {
                                        saveResults5 != null
                                            ?
                                                <input 
                                                    type="text" 
                                                    className='input-time-resultado'
                                                    value={saveResults5[0]}
                                                    readOnly
                                                />
                                            :
                                                <input type="text" className='input-time-resultado'/>
                                    }
                                </span>
                                <span>x</span>
                                <span className="containerInput">
                                    {
                                        saveResults5 != null
                                            ?
                                                <input 
                                                    type="text" 
                                                    className='input-time-resultado'
                                                    value={saveResults5[1]}
                                                    readOnly
                                                />
                                            :
                                                <input type="text" className='input-time-resultado'/>
                                    }
                                </span>
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
                            <p className="information-jogo">terça <span className="stadium">
                                {confronto3 && confronto3[1].estadio}        
                            </span> 19:30</p>
                            <p className='gameInformation'>
                                <span className='team'>
                                    {confronto3 && confronto3[1].time}                 
                                    {confronto3 && <img src={confronto3[1].url} alt="" />}    
                                </span>
                                <span className="containerInput">
                                    {
                                        saveResults6 != null
                                            ?
                                                <input 
                                                    type="text" 
                                                    className='input-time-resultado'
                                                    value={saveResults6[0]}
                                                    readOnly
                                                />
                                            :
                                                <input type="text" className='input-time-resultado'/>
                                    }
                                </span>
                                <span>x</span>
                                <span className="containerInput">
                                    {
                                        saveResults6 != null
                                            ?
                                                <input 
                                                    type="text" 
                                                    className='input-time-resultado'
                                                    value={saveResults6[1]}
                                                    readOnly
                                                />
                                            :
                                                <input type="text" className='input-time-resultado'/>
                                    }
                                </span>
                                <span className='team'>
                                    {confronto3 && <img src={confronto3[0].url} alt="" />}    
                                    {confronto3 && confronto3[0].time}                 
                                </span>
                            </p>

                            {
                                infoPenalti3 != null
                                    ?
                                        <p className="penaltis on">
                                            <span className="containerInput">
                                                <input 
                                                    type="text" 
                                                    className='input-resultado-penaltis'
                                                    value={infoPenalti3[0]}
                                                    readOnly
                                                />
                                            </span>
                                            <span className="containerInput">
                                                <input 
                                                    type="text" 
                                                    className='input-resultado-penaltis'
                                                    value={infoPenalti3[1]}
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

                    <div className="confrontoQuatro">
                        <div className="ida">
                            <p className="information-jogo">terça <span className="stadium">
                                {confronto4 && confronto4[0].estadio}        
                            </span> 19:30</p>
                            <p className='gameInformation'>
                                <span className='team'>
                                    {confronto4 && confronto4[0].time}                 
                                    {confronto4 && <img src={confronto4[0].url} alt="" />}    
                                </span>
                                <span className="containerInput">
                                    {
                                        saveResults7 != null
                                            ?
                                                <input 
                                                    type="text" 
                                                    className='input-time-resultado'
                                                    value={saveResults7[0]}
                                                    readOnly
                                                />
                                            :
                                                <input type="text" className='input-time-resultado'/>
                                    }
                                </span>
                                <span>x</span>
                                <span className="containerInput">
                                    {
                                        saveResults7 != null
                                            ?
                                                <input 
                                                    type="text" 
                                                    className='input-time-resultado'
                                                    value={saveResults7[1]}
                                                    readOnly
                                                />
                                            :
                                                <input type="text" className='input-time-resultado'/>
                                    }
                                </span>
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
                            <p className="information-jogo">terça <span className="stadium">
                                {confronto4 && confronto4[1].estadio}            
                            </span> 19:30</p>
                            <p className='gameInformation'>
                                <span className='team'>
                                    {confronto4 && confronto4[1].time}                 
                                    {confronto4 && <img src={confronto4[1].url} alt="" />}    
                                </span>
                                <span className="containerInput">
                                    {
                                        saveResults8 != null
                                            ?
                                                <input 
                                                    type="text" 
                                                    className='input-time-resultado'
                                                    value={saveResults8[0]}
                                                    readOnly
                                                />
                                            :
                                                <input type="text" className='input-time-resultado'/>
                                    }
                                </span>
                                <span>x</span>
                                <span className="containerInput">
                                    {
                                        saveResults8 != null
                                            ?
                                                <input 
                                                    type="text" 
                                                    className='input-time-resultado'
                                                    value={saveResults8[1]}
                                                    readOnly
                                                />
                                            :
                                                <input type="text" className='input-time-resultado'/>
                                    }
                                </span>
                                <span className='team'>
                                    {confronto4 && <img src={confronto4[0].url} alt="" />}    
                                    {confronto4 && confronto4[0].time}                 
                                </span>
                            </p>

                            {
                                infoPenalti4 != null
                                    ?
                                        <p className="penaltis on">
                                            <span className="containerInput">
                                                <input 
                                                    type="text" 
                                                    className='input-resultado-penaltis'
                                                    value={infoPenalti4[0]}
                                                    readOnly
                                                />
                                            </span>
                                            <span className="containerInput">
                                                <input 
                                                    type="text" 
                                                    className='input-resultado-penaltis'
                                                    value={infoPenalti4[1]}
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