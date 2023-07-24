import { useContext } from "react"
import { GetTimes } from "../componentes/api/getTeams"

import { Header } from "../componentes/Header"

import '../styles/eliminatoria.sass'
import { json } from "react-router-dom"

export function TerceiraFase(){
    function bigScreen(newTeam, num, localizacao){
        let confronto = document.querySelectorAll('.FaseTres')
        let team = newTeam
        let numero = num
        let local = localizacao

        if(local == 'ida'){
            confronto[numero].innerHTML = `
                ${team.time}
                <img src=${team.url} alt="" />
            `
        }else{
            confronto[numero].innerHTML = `
                <img src=${team.url} alt="" />
                ${team.time}
            `
        }
    }
    function smallScreen(newTeam, num, localizacao){
        let confronto = document.querySelectorAll('.FaseTres')
        let team = newTeam
        let numero = num
        let local = localizacao
        
        if(local == 'ida'){
            confronto[numero].innerHTML = `
                ${team.namePlacar}
                <img src=${team.url} alt="" />
            `
        }else{
            confronto[numero].innerHTML = `
                <img src=${team.url} alt="" />
                ${team.namePlacar}
            `
        }
    }

    function responsivePage(){
        let chave1 = JSON.parse(sessionStorage.getItem('chave1-3'))
        let chave2 = JSON.parse(sessionStorage.getItem('chave2-3'))
        let chave3 = JSON.parse(sessionStorage.getItem('chave3-3'))
        let chave4 = JSON.parse(sessionStorage.getItem('chave4-3'))

        if(JSON.parse(sessionStorage.getItem('chave1-3')) != null){
            if(window.innerWidth < 801){
                smallScreen(chave1[0], 0, 'ida')
                smallScreen(chave1[1], 1, 'volta')
                smallScreen(chave1[1], 2, 'ida')
                smallScreen(chave1[0], 3, 'volta')
                smallScreen(chave2[0], 4, 'ida')
                smallScreen(chave2[1], 5, 'volta')
                smallScreen(chave2[1], 6, 'ida')
                smallScreen(chave2[0], 7, 'volta')
                smallScreen(chave3[0], 8, 'ida')
                smallScreen(chave3[1], 9, 'volta')
                smallScreen(chave3[1], 10, 'ida')
                smallScreen(chave3[0], 11, 'volta')
                smallScreen(chave4[0], 12, 'ida')
                smallScreen(chave4[1], 13, 'volta')
                smallScreen(chave4[1], 14, 'ida')
                smallScreen(chave4[0], 15, 'volta')
            }else{
                bigScreen(chave1[0], 0, 'ida')
                bigScreen(chave1[1], 1, 'volta')
                bigScreen(chave1[1], 2, 'ida')
                bigScreen(chave1[0], 3, 'volta')
                bigScreen(chave2[0], 4, 'ida')
                bigScreen(chave2[1], 5, 'volta')
                bigScreen(chave2[1], 6, 'ida')
                bigScreen(chave2[0], 7, 'volta')
                bigScreen(chave3[0], 8, 'ida')
                bigScreen(chave3[1], 9, 'volta')
                bigScreen(chave3[1], 10, 'ida')
                bigScreen(chave3[0], 11, 'volta')
                bigScreen(chave4[0], 12, 'ida')
                bigScreen(chave4[1], 13, 'volta')
                bigScreen(chave4[1], 14, 'ida')
                bigScreen(chave4[0], 15, 'volta')
            }
        }
    }

    window.onresize = updateResponsiveF3

    function updateResponsiveF3(){
        let confronto = document.querySelectorAll('.FaseTres')
        
        if(confronto.length > 1){
            responsivePage()    
        }
    }

    setTimeout(() => {
        updateResponsiveF3()    
    }, 100)

    let [
        newPrevSegundaFase,
        previaSegundaFase,
        newPrevTerceiraFaseFase,
        previaTerceiraFase,
        newPrevFaseDeGrupos,
        previaFaseDeGrupos
    ] = useContext(GetTimes)
    let terceiraFase = previaTerceiraFase.length == 8 ? previaTerceiraFase : null

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

    saveResults1 = JSON.parse(sessionStorage.getItem('Jg3-1'))
    saveResults2 = JSON.parse(sessionStorage.getItem('Jg3-2'))
    saveResults3 = JSON.parse(sessionStorage.getItem('Jg3-3'))
    saveResults4 = JSON.parse(sessionStorage.getItem('Jg3-4'))
    saveResults5 = JSON.parse(sessionStorage.getItem('Jg3-5'))
    saveResults6 = JSON.parse(sessionStorage.getItem('Jg3-6'))
    saveResults7 = JSON.parse(sessionStorage.getItem('Jg3-7'))
    saveResults8 = JSON.parse(sessionStorage.getItem('Jg3-8'))

    infoPenalti1 = JSON.parse(sessionStorage.getItem('Pen3-1'))
    infoPenalti2 = JSON.parse(sessionStorage.getItem('Pen3-2'))
    infoPenalti3 = JSON.parse(sessionStorage.getItem('Pen3-3'))
    infoPenalti4 = JSON.parse(sessionStorage.getItem('Pen3-4'))

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

            sessionStorage.setItem('Jg3-1', JSON.stringify(jogo1))
            saveResults1 = JSON.parse(sessionStorage.getItem('Jg3-1'))

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

            sessionStorage.setItem('Jg3-2', JSON.stringify(jogo2))

            resultsGames[2].setAttribute('readonly', 'readonly')
            resultsGames[3].setAttribute('readonly', 'readonly')

            if(acumuladoGols1 == acumuladoGols2){
                if(resultsGames[0].value == resultsGames[2].value && resultsGames[1].value == resultsGames[3].value){
                    containerPenaltis[0].classList.add('on')    //('visibility', 'visible')
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
                sessionStorage.setItem('Pen3-1', JSON.stringify(Penaltis1))

                if(penalt1 > penalt2 ){
                    spanTeam[0].classList.add('eliminado') 
                    spanTeam[3].classList.add('eliminado')

                    newPrevFaseDeGrupos(confronto1[1], 28)
                }else{
                    spanTeam[1].classList.add('eliminado')
                    spanTeam[2].classList.add('eliminado')

                    newPrevFaseDeGrupos(confronto1[0], 28)
                }                
            }else if(golFora){
                if(resultsGames[1].value > resultsGames[3].value){
                    spanTeam[0].classList.add('eliminado') 
                    spanTeam[3].classList.add('eliminado')

                    newPrevFaseDeGrupos(confronto1[1], 28)
                }else{
                    spanTeam[1].classList.add('eliminado')
                    spanTeam[2].classList.add('eliminado')

                    newPrevFaseDeGrupos(confronto1[0], 28)
                }
            }else{
                if(acumuladoGols1 > acumuladoGols2){
                    spanTeam[1].classList.add('eliminado')
                    spanTeam[2].classList.add('eliminado')

                    newPrevFaseDeGrupos(confronto1[0], 28)
                }else{
                    spanTeam[0].classList.add('eliminado') 
                    spanTeam[3].classList.add('eliminado')

                    newPrevFaseDeGrupos(confronto1[1], 28)
                }
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

            sessionStorage.setItem('Jg3-3', JSON.stringify(jogo1))
            saveResults3 = JSON.parse(sessionStorage.getItem('Jg3-3'))

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

            sessionStorage.setItem('Jg3-4', JSON.stringify(jogo2))

            resultsGames[6].setAttribute('readonly', 'readonly')
            resultsGames[7].setAttribute('readonly', 'readonly')

            if(acumuladoGols1 == acumuladoGols2){
                if(resultsGames[4].value == resultsGames[6].value && resultsGames[5].value == resultsGames[7].value){
                    containerPenaltis[1].classList.add('on')    //('visibility', 'visible')
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
                sessionStorage.setItem('Pen3-2', JSON.stringify(Penaltis1))

                if(penalt1 > penalt2 ){
                    spanTeam[4].classList.add('eliminado') 
                    spanTeam[7].classList.add('eliminado')

                    newPrevFaseDeGrupos(confronto2[1], 29)
                }else{
                    spanTeam[5].classList.add('eliminado')
                    spanTeam[6].classList.add('eliminado')

                    newPrevFaseDeGrupos(confronto2[0], 29)
                }                
            }else if(golFora){
                if(resultsGames[5].value > resultsGames[7].value){
                    spanTeam[4].classList.add('eliminado') 
                    spanTeam[7].classList.add('eliminado')

                    newPrevFaseDeGrupos(confronto2[1], 29)
                }else{
                    spanTeam[5].classList.add('eliminado')
                    spanTeam[6].classList.add('eliminado')

                    newPrevFaseDeGrupos(confronto2[0], 29)
                }
            }else{
                if(acumuladoGols1 > acumuladoGols2){
                    spanTeam[5].classList.add('eliminado')
                    spanTeam[6].classList.add('eliminado')

                    newPrevFaseDeGrupos(confronto2[0], 29)
                }else{
                    spanTeam[4].classList.add('eliminado') 
                    spanTeam[7].classList.add('eliminado')

                    newPrevFaseDeGrupos(confronto2[1], 29)
                }
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

            sessionStorage.setItem('Jg3-5', JSON.stringify(jogo1))
            saveResults5 = JSON.parse(sessionStorage.getItem('Jg3-5'))

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

            sessionStorage.setItem('Jg3-6', JSON.stringify(jogo2))

            resultsGames[10].setAttribute('readonly', 'readonly')
            resultsGames[11].setAttribute('readonly', 'readonly')

            if(acumuladoGols1 == acumuladoGols2){
                if(resultsGames[8].value == resultsGames[10].value && resultsGames[9].value == resultsGames[11].value){
                    containerPenaltis[2].classList.add('on')    //('visibility', 'visible')
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
                sessionStorage.setItem('Pen3-3', JSON.stringify(Penaltis1))

                if(penalt1 > penalt2 ){
                    spanTeam[8].classList.add('eliminado') 
                    spanTeam[11].classList.add('eliminado')

                    newPrevFaseDeGrupos(confronto3[1], 30)
                }else{
                    spanTeam[9].classList.add('eliminado')
                    spanTeam[10].classList.add('eliminado')

                    newPrevFaseDeGrupos(confronto3[0], 30)
                }                
            }else if(golFora){
                if(resultsGames[9].value > resultsGames[11].value){
                    spanTeam[8].classList.add('eliminado') 
                    spanTeam[11].classList.add('eliminado')

                    newPrevFaseDeGrupos(confronto3[1], 30)
                }else{
                    spanTeam[9].classList.add('eliminado')
                    spanTeam[10].classList.add('eliminado')

                    newPrevFaseDeGrupos(confronto3[0], 30)
                }
            }else{
                if(acumuladoGols1 > acumuladoGols2){
                    spanTeam[9].classList.add('eliminado')
                    spanTeam[10].classList.add('eliminado')

                    newPrevFaseDeGrupos(confronto3[0], 30)
                }else{
                    spanTeam[8].classList.add('eliminado') 
                    spanTeam[11].classList.add('eliminado')

                    newPrevFaseDeGrupos(confronto3[1], 30)
                }
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

            sessionStorage.setItem('Jg3-7', JSON.stringify(jogo1))
            saveResults7 = JSON.parse(sessionStorage.getItem('Jg3-7'))

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

            sessionStorage.setItem('Jg3-8', JSON.stringify(jogo2))

            resultsGames[14].setAttribute('readonly', 'readonly')
            resultsGames[15].setAttribute('readonly', 'readonly')

            if(acumuladoGols1 == acumuladoGols2){
                if(resultsGames[12].value == resultsGames[14].value && resultsGames[13].value == resultsGames[15].value){
                    containerPenaltis[3].classList.add('on')    //('visibility', 'visible')
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
                sessionStorage.setItem('Pen3-4', JSON.stringify(Penaltis1))

                if(penalt1 > penalt2 ){
                    spanTeam[12].classList.add('eliminado') 
                    spanTeam[15].classList.add('eliminado')

                    newPrevFaseDeGrupos(confronto4[1], 31)
                }else{
                    spanTeam[13].classList.add('eliminado')
                    spanTeam[14].classList.add('eliminado')

                    newPrevFaseDeGrupos(confronto4[0], 31)
                }                
            }else if(golFora){
                if(resultsGames[13].value > resultsGames[15].value){
                    spanTeam[12].classList.add('eliminado') 
                    spanTeam[15].classList.add('eliminado')

                    newPrevFaseDeGrupos(confronto4[1], 31)
                }else{
                    spanTeam[13].classList.add('eliminado')
                    spanTeam[14].classList.add('eliminado')

                    newPrevFaseDeGrupos(confronto4[0], 31)
                }
            }else{
                if(acumuladoGols1 > acumuladoGols2){
                    spanTeam[13].classList.add('eliminado')
                    spanTeam[14].classList.add('eliminado')

                    newPrevFaseDeGrupos(confronto4[0], 31)
                }else{
                    spanTeam[12].classList.add('eliminado') 
                    spanTeam[15].classList.add('eliminado')

                    newPrevFaseDeGrupos(confronto4[1], 31)
                }
            }

            this.classList.add('btn-disabled')
            this.removeEventListener('click', setResult)
        })
    }

    setTimeout(addFunctionButton, 200)

    if(terceiraFase != null){
        for(let i = 0;i<4;i++){
            switch (i) {
                case 0:
                    let mandoDeCampo1 = Math.floor(Math.random()*2)

                    if(mandoDeCampo1 == 0){
                        confronto1[0] = terceiraFase[0]
                        confronto1[1] = terceiraFase[1]
                    }else{
                        confronto1[0] = terceiraFase[1]
                        confronto1[1] = terceiraFase[0]
                    }
                    break;
            
                case 1:
                    let mandoDeCampo2 = Math.floor(Math.random()*2)

                    if(mandoDeCampo2 == 0){
                        confronto2[0] = terceiraFase[2]
                        confronto2[1] = terceiraFase[3]
                    }else{
                        confronto2[0] = terceiraFase[3]
                        confronto2[1] = terceiraFase[2]
                    }
                    break;

                case 2:
                    let mandoDeCampo3 = Math.floor(Math.random()*2)

                    if(mandoDeCampo3 == 0){
                        confronto3[0] = terceiraFase[4]
                        confronto3[1] = terceiraFase[5]
                    }else{
                        confronto3[0] = terceiraFase[5]
                        confronto3[1] = terceiraFase[4]
                    }
                    break;
                
                case 3:
                    let mandoDeCampo4 = Math.floor(Math.random()*2) 
                    newPrevTerceiraFaseFase('Concluido')

                    if(mandoDeCampo4 == 0){
                        confronto4[0] = terceiraFase[6]
                        confronto4[1] = terceiraFase[7]
                    }else{
                        confronto4[0] = terceiraFase[7]
                        confronto4[1] = terceiraFase[6]
                    }
                    break;
            }
        }
        sessionStorage.setItem('chave1-3', JSON.stringify(confronto1))
        sessionStorage.setItem('chave2-3', JSON.stringify(confronto2))
        sessionStorage.setItem('chave3-3', JSON.stringify(confronto3))
        sessionStorage.setItem('chave4-3', JSON.stringify(confronto4))
    }
    confronto1 = JSON.parse(sessionStorage.getItem('chave1-3'))
    confronto2 = JSON.parse(sessionStorage.getItem('chave2-3'))
    confronto3 = JSON.parse(sessionStorage.getItem('chave3-3'))
    confronto4 = JSON.parse(sessionStorage.getItem('chave4-3'))

    return(
        <>
            <Header fases='Terceira fase' previousLink='/segunda-fase' nextLink='/fase-de-grupos'/>

            <div className="fasesEliminatorias">
                <h2>jogos</h2>

                <div className="confrontos">
                    <div className="confrontoUm">
                        <div className="ida">
                            <p className="information-jogo">terça <span className="stadium">{confronto1 && confronto1[0].estadio}</span> 19:30</p>
                            <p className='gameInformation'>
                                <span className='team FaseTres'>
                                    {/* {confronto1 && confronto1[0].time}                                                                   
                                    {confronto1 && <img src={confronto1[0].url} alt="" />} */}
                                </span>
                                {saveResults1 != null 
                                    ? 
                                        <span className="containerInput">
                                            <input 
                                                type="text" 
                                                className='input-time-resultado' 
                                                value={saveResults1[0]} 
                                                readOnly
                                            />
                                        </span>
                                    :
                                        <span className="containerInput"><input type="text" className='input-time-resultado'/></span>
                                }
                                <span>x</span>
                                {saveResults1 != null 
                                    ?
                                        <span className="containerInput">
                                            <input 
                                                type="text" 
                                                className='input-time-resultado' 
                                                value={saveResults1[1]} 
                                                readOnly
                                            />
                                        </span>
                                    :
                                        <span className="containerInput"><input type="text" className='input-time-resultado'/></span>
                                }
                                <span className='team FaseTres'>
                                    {/* {confronto1 && <img src={confronto1[1].url} alt="" />}
                                    {confronto1 && confronto1[1].time}                                                                    */}
                                </span> 
                            </p>     

                            <div className="containerBtnSalvar">
                                <button className='button btnSalvarResultado'>salvar</button>
                            </div>                                                  
                        </div>

                        <div className="volta">
                            <p className="information-jogo">quarta <span className="stadium">{confronto1 && confronto1[1].estadio}</span> 21:00</p>
                            <p className='gameInformation'>
                                <span className='team FaseTres'>
                                    {/* {confronto1 && confronto1[1].time}                                                                                                                  
                                    {confronto1 && <img src={confronto1[1].url} alt="" />} */}
                                </span>
                                {saveResults2 != null
                                    ?
                                        <span className="containerInput">
                                            <input 
                                                type="text" 
                                                className='input-time-resultado'
                                                value={saveResults2[0]}
                                                readOnly
                                            />
                                        </span>
                                    :
                                        <span className="containerInput"><input type="text" className='input-time-resultado'/></span>
                                }
                                <span>x</span>
                                {saveResults2 != null
                                    ?
                                        <span className="containerInput">
                                            <input 
                                                type="text" 
                                                className='input-time-resultado'
                                                value={saveResults2[1]}
                                                readOnly
                                            />
                                        </span>
                                    :
                                        <span className="containerInput"><input type="text" className='input-time-resultado'/></span>
                                }
                                <span className='team FaseTres'>
                                    {/* {confronto1 && <img src={confronto1[0].url} alt="" />}
                                    {confronto1 && confronto1[0].time}                                                                     */}
                                </span>
                            </p> 

                            {infoPenalti1 != null
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
                            <p className="information-jogo">quarta <span className="stadium">{confronto2 && confronto2[0].estadio}</span> 21:30</p>
                            <p className='gameInformation'>
                                <span className='team FaseTres'>
                                    {/* {confronto2 && confronto2[0].time}
                                    {confronto2 && <img src={confronto2[0].url} alt="" />} */}
                                </span>
                                {saveResults3 != null 
                                    ? 
                                        <span className="containerInput">
                                            <input 
                                                type="text" 
                                                className='input-time-resultado' 
                                                value={saveResults3[0]} 
                                                readOnly
                                            />
                                        </span>
                                    :
                                        <span className="containerInput"><input type="text" className='input-time-resultado'/></span>
                                }
                                <span>x</span>
                                {saveResults3 != null 
                                    ? 
                                        <span className="containerInput">
                                            <input 
                                                type="text" 
                                                className='input-time-resultado' 
                                                value={saveResults3[1]} 
                                                readOnly
                                            />
                                        </span>
                                    :
                                        <span className="containerInput"><input type="text" className='input-time-resultado'/></span>
                                }
                                <span className='team FaseTres'>
                                    {/* {confronto2 && <img src={confronto2[1].url} alt="" />}
                                    {confronto2 && confronto2[1].time} */}
                                </span> 
                            </p>     

                            <div className="containerBtnSalvar">
                                <button className='button btnSalvarResultado'>salvar</button>
                            </div>
                        </div>

                        <div className="volta">
                            <p className="information-jogo">quinta <span className="stadium">{confronto2 && confronto2[1].estadio}</span> 20:00</p>
                            <p className='gameInformation'>
                                <span className='team FaseTres'>
                                    {/* {confronto2 && confronto2[1].time}
                                    {confronto2 && <img src={confronto2[1].url} alt="" />} */}
                                </span>
                                {saveResults4 != null 
                                    ? 
                                        <span className="containerInput">
                                            <input 
                                                type="text" 
                                                className='input-time-resultado' 
                                                value={saveResults4[0]} 
                                                readOnly
                                            />
                                        </span>
                                    :
                                        <span className="containerInput"><input type="text" className='input-time-resultado'/></span>
                                }
                                <span>x</span>
                                {saveResults4 != null 
                                    ? 
                                        <span className="containerInput">
                                            <input 
                                                type="text" 
                                                className='input-time-resultado' 
                                                value={saveResults4[1]} 
                                                readOnly
                                            />
                                        </span>
                                    :
                                        <span className="containerInput"><input type="text" className='input-time-resultado'/></span>
                                }
                                <span className='team FaseTres'>
                                    {/* {confronto2 && <img src={confronto2[0].url} alt="" />}
                                    {confronto2 && confronto2[0].time} */}
                                </span> 
                            </p>  

                            {infoPenalti2 != null
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
                            <p className="information-jogo">quarta <span className="stadium">{confronto3 && confronto3[0].estadio}</span> 21:30</p>
                            <p className='gameInformation'>
                                <span className='team FaseTres'>
                                    {/* {confronto3 && confronto3[0].time}
                                    {confronto3 && <img src={confronto3[0].url} alt="" />} */}
                                </span>
                                {saveResults5 != null 
                                    ? 
                                        <span className="containerInput">
                                            <input 
                                                type="text" 
                                                className='input-time-resultado' 
                                                value={saveResults5[0]} 
                                                readOnly
                                            />
                                        </span>
                                    :
                                        <span className="containerInput"><input type="text" className='input-time-resultado'/></span>
                                }
                                <span>x</span>
                                {saveResults5 != null 
                                    ? 
                                        <span className="containerInput">
                                            <input 
                                                type="text" 
                                                className='input-time-resultado' 
                                                value={saveResults5[1]} 
                                                readOnly
                                            />
                                        </span>
                                    :
                                        <span className="containerInput"><input type="text" className='input-time-resultado'/></span>
                                }
                                <span className='team FaseTres'>
                                    {/* {confronto3 && <img src={confronto3[1].url} alt="" />}
                                    {confronto3 && confronto3[1].time} */}
                                </span> 
                            </p>

                            <div className="containerBtnSalvar">
                                <button className='button btnSalvarResultado'>salvar</button>
                            </div>     
                        </div>

                        <div className="volta">
                            <p className="information-jogo">quinta <span className="stadium">{confronto3 && confronto3[1].estadio}</span> 20:00</p>
                            <p className='gameInformation'>
                                <span className='team FaseTres'>
                                    {/* {confronto3 && confronto3[1].time}
                                    {confronto3 && <img src={confronto3[1].url} alt="" />} */}
                                </span>
                                {saveResults6 != null 
                                    ? 
                                        <span className="containerInput">
                                            <input 
                                                type="text" 
                                                className='input-time-resultado' 
                                                value={saveResults6[0]} 
                                                readOnly
                                            />
                                        </span>
                                    :
                                        <span className="containerInput"><input type="text" className='input-time-resultado'/></span>
                                }
                                <span>x</span>
                                {saveResults6 != null 
                                    ? 
                                        <span className="containerInput">
                                            <input 
                                                type="text" 
                                                className='input-time-resultado' 
                                                value={saveResults6[1]} 
                                                readOnly
                                            />
                                        </span>
                                    :
                                        <span className="containerInput"><input type="text" className='input-time-resultado'/></span>
                                }
                                <span className='team FaseTres'>
                                    {/* {confronto3 && <img src={confronto3[0].url} alt="" />}
                                    {confronto3 && confronto3[0].time} */}
                                </span> 
                            </p>  

                            {infoPenalti3 != null
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
                            <p className="information-jogo">quarta <span className="stadium">{confronto4 && confronto4[0].estadio}</span> 21:30</p>
                            <p className='gameInformation'>
                                <span className='team FaseTres'>
                                    {/* {confronto4 && confronto4[0].time}
                                    {confronto4 && <img src={confronto4[0].url} alt="" />} */}
                                </span>
                                {saveResults7 != null 
                                    ? 
                                        <span className="containerInput">
                                            <input 
                                                type="text" 
                                                className='input-time-resultado' 
                                                value={saveResults7[0]} 
                                                readOnly
                                            />
                                        </span>
                                    :
                                        <span className="containerInput"><input type="text" className='input-time-resultado'/></span>
                                }
                                <span>x</span>
                                {saveResults7 != null 
                                    ? 
                                        <span className="containerInput">
                                            <input 
                                                type="text" 
                                                className='input-time-resultado' 
                                                value={saveResults7[1]} 
                                                readOnly
                                            />
                                        </span>
                                    :
                                        <span className="containerInput"><input type="text" className='input-time-resultado'/></span>
                                }
                                <span className='team FaseTres'>
                                    {/* {confronto4 && <img src={confronto4[1].url} alt="" />}
                                    {confronto4 && confronto4[1].time} */}
                                </span> 
                            </p>

                            <div className="containerBtnSalvar">
                                <button className='button btnSalvarResultado'>salvar</button>
                            </div>     
                        </div>

                        <div className="volta">
                            <p className="information-jogo">quinta <span className="stadium">{confronto4 && confronto4[1].estadio}</span> 20:00</p>
                            <p className='gameInformation'>
                                <span className='team FaseTres'>
                                    {/* {confronto4 && confronto4[1].time}
                                    {confronto4 && <img src={confronto4[1].url} alt="" />} */}
                                </span>
                                {saveResults8 != null 
                                    ? 
                                        <span className="containerInput">
                                            <input 
                                                type="text" 
                                                className='input-time-resultado' 
                                                value={saveResults8[0]} 
                                                readOnly
                                            />
                                        </span>
                                    :
                                        <span className="containerInput"><input type="text" className='input-time-resultado'/></span>
                                }
                                <span>x</span>
                                {saveResults8 != null 
                                    ? 
                                        <span className="containerInput">
                                            <input 
                                                type="text" 
                                                className='input-time-resultado' 
                                                value={saveResults8[1]} 
                                                readOnly
                                            />
                                        </span>
                                    :
                                        <span className="containerInput"><input type="text" className='input-time-resultado'/></span>
                                }
                                <span className='team FaseTres'>
                                    {/* {confronto4 && <img src={confronto4[0].url} alt="" />}
                                    {confronto4 && confronto4[0].time} */}
                                </span> 
                            </p>  

                            {infoPenalti4 != null
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