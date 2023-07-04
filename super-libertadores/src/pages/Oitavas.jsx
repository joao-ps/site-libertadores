import { Header } from "../componentes/Header"

import { FaseFinal } from "../componentes/api/getTeams"
import { useContext } from "react"

export function Oitavas(){
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
    let poteGeral = previaOitavas
    let pote1 = []
    let pote2 = []
    let confronto1 = []
    let confronto2 = []
    let confronto3 = []
    let confronto4 = []
    let confronto5 = []
    let confronto6 = []
    let confronto7 = []
    let confronto8 = []

    let saveResults1
    let saveResults2
    let saveResults3
    let saveResults4
    let saveResults5
    let saveResults6
    let saveResults7
    let saveResults8
    let saveResults9
    let saveResults10
    let saveResults11
    let saveResults12
    let saveResults13
    let saveResults14
    let saveResults15
    let saveResults16

    let infoPenalti1
    let infoPenalti2
    let infoPenalti3
    let infoPenalti4
    let infoPenalti5
    let infoPenalti6
    let infoPenalti7
    let infoPenalti8

    saveResults1 = JSON.parse(sessionStorage.getItem('Jg8-1'))
    saveResults2 = JSON.parse(sessionStorage.getItem('Jg8-2'))
    saveResults3 = JSON.parse(sessionStorage.getItem('Jg8-3'))
    saveResults4 = JSON.parse(sessionStorage.getItem('Jg8-4'))
    saveResults5 = JSON.parse(sessionStorage.getItem('Jg8-5'))
    saveResults6 = JSON.parse(sessionStorage.getItem('Jg8-6'))
    saveResults7 = JSON.parse(sessionStorage.getItem('Jg8-7'))
    saveResults8 = JSON.parse(sessionStorage.getItem('Jg8-8'))
    saveResults9 = JSON.parse(sessionStorage.getItem('Jg8-9'))
    saveResults10 = JSON.parse(sessionStorage.getItem('Jg8-10'))
    saveResults11 = JSON.parse(sessionStorage.getItem('Jg8-11'))
    saveResults12 = JSON.parse(sessionStorage.getItem('Jg8-12'))
    saveResults13 = JSON.parse(sessionStorage.getItem('Jg8-13'))
    saveResults14 = JSON.parse(sessionStorage.getItem('Jg8-14'))
    saveResults15 = JSON.parse(sessionStorage.getItem('Jg8-15'))
    saveResults16 = JSON.parse(sessionStorage.getItem('Jg8-16'))

    infoPenalti1 = JSON.parse(sessionStorage.getItem('Pen8-1'))
    infoPenalti2 = JSON.parse(sessionStorage.getItem('Pen8-2'))
    infoPenalti3 = JSON.parse(sessionStorage.getItem('Pen8-3'))
    infoPenalti4 = JSON.parse(sessionStorage.getItem('Pen8-4'))
    infoPenalti5 = JSON.parse(sessionStorage.getItem('Pen8-5'))
    infoPenalti6 = JSON.parse(sessionStorage.getItem('Pen8-6'))
    infoPenalti7 = JSON.parse(sessionStorage.getItem('Pen8-7'))
    infoPenalti8 = JSON.parse(sessionStorage.getItem('Pen8-8'))

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

            sessionStorage.setItem('Jg8-1', JSON.stringify(jogo1))
            saveResults1 = JSON.parse(sessionStorage.getItem('Jg8-1'))

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

            sessionStorage.setItem('Jg8-2', JSON.stringify(jogo2))
            saveResults2 = JSON.parse(sessionStorage.getItem('Jg8-2'))

            resultsGames[2].setAttribute('readonly', 'readonly')
            resultsGames[3].setAttribute('readonly', 'readonly')

            resultsUpdate(confronto1[0], saveResults1[1], saveResults2[0], saveResults1[0], saveResults2[1])
            resultsUpdate(confronto1[1], saveResults1[0], saveResults2[1], saveResults1[1], saveResults2[0])
            console.log(confronto1[0])
            console.log(confronto1[1])

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
                sessionStorage.setItem('Pen8-1', JSON.stringify(Penaltis1))

                if(penalt1 > penalt2 ){
                    spanTeam[0].classList.add('eliminado') 
                    spanTeam[3].classList.add('eliminado')

                    newQuartas(confronto1[0], 0)
                }else{
                    spanTeam[1].classList.add('eliminado')
                    spanTeam[2].classList.add('eliminado')

                    newQuartas(confronto1[1], 0)
                }                
            }else if(golFora){
                if(resultsGames[1].value > resultsGames[3].value){
                    spanTeam[0].classList.add('eliminado') 
                    spanTeam[3].classList.add('eliminado')

                    newQuartas(confronto1[0], 0)
                }else{
                    spanTeam[1].classList.add('eliminado')
                    spanTeam[2].classList.add('eliminado')

                    newQuartas(confronto1[1], 0)
                }
            }else{
                if(acumuladoGols1 > acumuladoGols2){
                    spanTeam[1].classList.add('eliminado')
                    spanTeam[2].classList.add('eliminado')

                    newQuartas(confronto1[1], 0)
                }else{
                    spanTeam[0].classList.add('eliminado') 
                    spanTeam[3].classList.add('eliminado')

                    newQuartas(confronto1[0], 0)
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

            sessionStorage.setItem('Jg8-3', JSON.stringify(jogo1))
            saveResults3 = JSON.parse(sessionStorage.getItem('Jg8-3'))

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

            sessionStorage.setItem('Jg8-4', JSON.stringify(jogo2))
            saveResults4 = JSON.parse(sessionStorage.getItem('Jg8-4'))

            resultsGames[6].setAttribute('readonly', 'readonly')
            resultsGames[7].setAttribute('readonly', 'readonly')

            resultsUpdate(confronto2[0], saveResults3[1], saveResults4[0], saveResults3[0], saveResults4[1])
            resultsUpdate(confronto2[1], saveResults3[0], saveResults4[1], saveResults3[1], saveResults4[0])

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
                sessionStorage.setItem('Pen8-2', JSON.stringify(Penaltis1))

                if(penalt1 > penalt2 ){
                    spanTeam[4].classList.add('eliminado') 
                    spanTeam[7].classList.add('eliminado')

                    newQuartas(confronto2[0], 1)
                }else{
                    spanTeam[5].classList.add('eliminado')
                    spanTeam[6].classList.add('eliminado')

                    newQuartas(confronto2[1], 1)
                }                
            }else if(golFora){
                if(resultsGames[5].value > resultsGames[7].value){
                    spanTeam[4].classList.add('eliminado') 
                    spanTeam[7].classList.add('eliminado')

                    newQuartas(confronto2[0], 1)
                }else{
                    spanTeam[5].classList.add('eliminado')
                    spanTeam[6].classList.add('eliminado')

                    newQuartas(confronto2[1], 1)
                }
            }else{
                if(acumuladoGols1 > acumuladoGols2){
                    spanTeam[5].classList.add('eliminado')
                    spanTeam[6].classList.add('eliminado')

                    newQuartas(confronto2[1], 1)
                }else{
                    spanTeam[4].classList.add('eliminado') 
                    spanTeam[7].classList.add('eliminado')

                    newQuartas(confronto2[0], 1)
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

            sessionStorage.setItem('Jg8-5', JSON.stringify(jogo1))
            saveResults5 = JSON.parse(sessionStorage.getItem('Jg8-5'))

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

            sessionStorage.setItem('Jg8-6', JSON.stringify(jogo2))
            saveResults6 = JSON.parse(sessionStorage.getItem('Jg8-6'))

            resultsGames[10].setAttribute('readonly', 'readonly')
            resultsGames[11].setAttribute('readonly', 'readonly')

            resultsUpdate(confronto3[0], saveResults5[1], saveResults6[0], saveResults5[0], saveResults6[1])
            resultsUpdate(confronto3[1], saveResults5[0], saveResults6[1], saveResults5[1], saveResults6[0])

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
                sessionStorage.setItem('Pen8-3', JSON.stringify(Penaltis1))

                if(penalt1 > penalt2 ){
                    spanTeam[8].classList.add('eliminado') 
                    spanTeam[11].classList.add('eliminado')

                    newQuartas(confronto3[0], 2)
                }else{
                    spanTeam[9].classList.add('eliminado')
                    spanTeam[10].classList.add('eliminado')

                    newQuartas(confronto3[1], 2)
                }                
            }else if(golFora){
                if(resultsGames[9].value > resultsGames[11].value){
                    spanTeam[8].classList.add('eliminado') 
                    spanTeam[11].classList.add('eliminado')

                    newQuartas(confronto3[0], 2)
                }else{
                    spanTeam[9].classList.add('eliminado')
                    spanTeam[10].classList.add('eliminado')

                    newQuartas(confronto3[1], 2)
                }
            }else{
                if(acumuladoGols1 > acumuladoGols2){
                    spanTeam[9].classList.add('eliminado')
                    spanTeam[10].classList.add('eliminado')

                    newQuartas(confronto3[1], 2)
                }else{
                    spanTeam[8].classList.add('eliminado') 
                    spanTeam[11].classList.add('eliminado')

                    newQuartas(confronto3[0], 2)
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

            sessionStorage.setItem('Jg8-7', JSON.stringify(jogo1))
            saveResults7 = JSON.parse(sessionStorage.getItem('Jg8-7'))

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

            sessionStorage.setItem('Jg8-8', JSON.stringify(jogo2))
            saveResults8 = JSON.parse(sessionStorage.getItem('Jg8-8'))

            resultsGames[14].setAttribute('readonly', 'readonly')
            resultsGames[15].setAttribute('readonly', 'readonly')

            resultsUpdate(confronto4[0], saveResults7[1], saveResults8[0], saveResults7[0], saveResults8[1])
            resultsUpdate(confronto4[1], saveResults7[0], saveResults8[1], saveResults7[1], saveResults8[0])

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
                sessionStorage.setItem('Pen8-4', JSON.stringify(Penaltis1))

                if(penalt1 > penalt2 ){
                    spanTeam[12].classList.add('eliminado') 
                    spanTeam[15].classList.add('eliminado')

                    newQuartas(confronto4[0], 3)
                }else{
                    spanTeam[13].classList.add('eliminado')
                    spanTeam[14].classList.add('eliminado')

                    newQuartas(confronto4[1], 3)
                }                
            }else if(golFora){
                if(resultsGames[13].value > resultsGames[15].value){
                    spanTeam[12].classList.add('eliminado') 
                    spanTeam[15].classList.add('eliminado')

                    newQuartas(confronto4[0], 3)
                }else{
                    spanTeam[13].classList.add('eliminado')
                    spanTeam[14].classList.add('eliminado')

                    newQuartas(confronto4[1], 3)
                }
            }else{
                if(acumuladoGols1 > acumuladoGols2){
                    spanTeam[13].classList.add('eliminado')
                    spanTeam[14].classList.add('eliminado')

                    newQuartas(confronto4[1], 3)
                }else{
                    spanTeam[12].classList.add('eliminado') 
                    spanTeam[15].classList.add('eliminado')

                    newQuartas(confronto4[0], 3)
                }
            }

            this.classList.add('btn-disabled')
            this.removeEventListener('click', setResult)
        })
        ButtonSave[8].addEventListener("click", function setResult(){
            let result1 = resultsGames[16].value
            let result2 = resultsGames[17].value
            let jogo1 = []
        
            if(saveResults9 != null){
                console.log('Resultadores já registrados')
                return
            }
        
            if(!result1 || ! result2)return

            jogo1[0] = Number(result1)
            jogo1[1] = Number(result2)

            sessionStorage.setItem('Jg8-9', JSON.stringify(jogo1))
            saveResults9 = JSON.parse(sessionStorage.getItem('Jg8-9'))

            resultsGames[16].setAttribute('readonly', 'readonly')
            resultsGames[17].setAttribute('readonly', 'readonly')

            this.classList.add('btn-disabled')
            this.removeEventListener('click', setResult)
        })
        ButtonSave[9].addEventListener("click", function setResult(){
            let result1 = resultsGames[18].value
            let result2 = resultsGames[19].value
            let golFora = false
            let jogo2 = []
            
            if(saveResults9 == undefined){
                console.log('Resultado do primeiro jogo não registrado')
                return
            }
            let acumuladoGols1 = Number(saveResults9[0]) + Number(result2)
            let acumuladoGols2 = Number(saveResults9[1]) + Number(result1)

            if(saveResults10 != null){
                console.log('Resultadores já registrados')
                return
            }
            
            if(!result1 || ! result2)return

            jogo2[0] = Number(result1)
            jogo2[1] = Number(result2)

            sessionStorage.setItem('Jg8-10', JSON.stringify(jogo2))
            saveResults10 = JSON.parse(sessionStorage.getItem('Jg8-10'))

            resultsGames[18].setAttribute('readonly', 'readonly')
            resultsGames[19].setAttribute('readonly', 'readonly')

            resultsUpdate(confronto5[0], saveResults9[1], saveResults10[0], saveResults9[0], saveResults10[1])
            resultsUpdate(confronto5[1], saveResults9[0], saveResults10[1], saveResults9[1], saveResults10[0])

            if(acumuladoGols1 == acumuladoGols2){
                if(resultsGames[16].value == resultsGames[18].value && resultsGames[17].value == resultsGames[19].value){
                    containerPenaltis[4].classList.add('on')    
                }else(
                    golFora = true
                )
            }

            if(containerPenaltis[4].classList.contains('on') == true){
                let penalt1 = resultPenaltis[8].value
                let penalt2 = resultPenaltis[9].value
                let Penaltis1 = []

                if(!penalt1 || !penalt2)return

                resultPenaltis[8].setAttribute('readonly', 'readonly')
                resultPenaltis[9].setAttribute('readonly', 'readonly')

                Penaltis1[0] = Number(penalt1)
                Penaltis1[1] = Number(penalt2)
                sessionStorage.setItem('Pen8-5', JSON.stringify(Penaltis1))

                if(penalt1 > penalt2 ){
                    spanTeam[16].classList.add('eliminado') 
                    spanTeam[19].classList.add('eliminado')

                    newQuartas(confronto5[0], 4)
                }else{
                    spanTeam[17].classList.add('eliminado')
                    spanTeam[18].classList.add('eliminado')

                    newQuartas(confronto5[1], 4)
                }                
            }else if(golFora){
                if(resultsGames[17].value > resultsGames[19].value){
                    spanTeam[16].classList.add('eliminado') 
                    spanTeam[19].classList.add('eliminado')

                    newQuartas(confronto5[0], 4)
                }else{
                    spanTeam[17].classList.add('eliminado')
                    spanTeam[18].classList.add('eliminado')

                    newQuartas(confronto5[1], 4)
                }
            }else{
                if(acumuladoGols1 > acumuladoGols2){
                    spanTeam[17].classList.add('eliminado')
                    spanTeam[18].classList.add('eliminado')

                    newQuartas(confronto5[1], 4)
                }else{
                    spanTeam[16].classList.add('eliminado') 
                    spanTeam[19].classList.add('eliminado')

                    newQuartas(confronto5[0], 4)
                }
            }

            this.classList.add('btn-disabled')
            this.removeEventListener('click', setResult)
        })
        ButtonSave[10].addEventListener("click", function setResult(){
            let result1 = resultsGames[20].value
            let result2 = resultsGames[21].value
            let jogo1 = []
        
            if(saveResults11 != null){
                console.log('Resultadores já registrados')
                return
            }
        
            if(!result1 || ! result2)return

            jogo1[0] = Number(result1)
            jogo1[1] = Number(result2)

            sessionStorage.setItem('Jg8-11', JSON.stringify(jogo1))
            saveResults11 = JSON.parse(sessionStorage.getItem('Jg8-11'))

            resultsGames[20].setAttribute('readonly', 'readonly')
            resultsGames[21].setAttribute('readonly', 'readonly')

            this.classList.add('btn-disabled')
            this.removeEventListener('click', setResult)
        })
        ButtonSave[11].addEventListener("click", function setResult(){
            let result1 = resultsGames[22].value
            let result2 = resultsGames[23].value
            let golFora = false
            let jogo2 = []
            
            if(saveResults11 == undefined){
                console.log('Resultado do primeiro jogo não registrado')
                return
            }
            let acumuladoGols1 = Number(saveResults11[0]) + Number(result2)
            let acumuladoGols2 = Number(saveResults11[1]) + Number(result1)

            if(saveResults12 != null){
                console.log('Resultadores já registrados')
                return
            }
            
            if(!result1 || ! result2)return

            jogo2[0] = Number(result1)
            jogo2[1] = Number(result2)

            sessionStorage.setItem('Jg8-12', JSON.stringify(jogo2))
            saveResults12 = JSON.parse(sessionStorage.getItem('Jg8-12'))

            resultsGames[22].setAttribute('readonly', 'readonly')
            resultsGames[23].setAttribute('readonly', 'readonly')

            resultsUpdate(confronto6[0], saveResults11[1], saveResults12[0], saveResults11[0], saveResults12[1])
            resultsUpdate(confronto6[1], saveResults11[0], saveResults12[1], saveResults11[1], saveResults12[0])

            if(acumuladoGols1 == acumuladoGols2){
                if(resultsGames[20].value == resultsGames[22].value && resultsGames[21].value == resultsGames[23].value){
                    containerPenaltis[5].classList.add('on')    
                }else(
                    golFora = true
                )
            }

            if(containerPenaltis[5].classList.contains('on') == true){
                let penalt1 = resultPenaltis[10].value
                let penalt2 = resultPenaltis[11].value
                let Penaltis1 = []

                if(!penalt1 || !penalt2)return

                resultPenaltis[10].setAttribute('readonly', 'readonly')
                resultPenaltis[11].setAttribute('readonly', 'readonly')

                Penaltis1[0] = Number(penalt1)
                Penaltis1[1] = Number(penalt2)
                sessionStorage.setItem('Pen8-6', JSON.stringify(Penaltis1))

                if(penalt1 > penalt2 ){
                    spanTeam[20].classList.add('eliminado') 
                    spanTeam[23].classList.add('eliminado')

                    newQuartas(confronto6[0], 5)
                }else{
                    spanTeam[21].classList.add('eliminado')
                    spanTeam[22].classList.add('eliminado')

                    newQuartas(confronto6[1], 5)
                }                
            }else if(golFora){
                if(resultsGames[21].value > resultsGames[23].value){
                    spanTeam[20].classList.add('eliminado') 
                    spanTeam[23].classList.add('eliminado')

                    newQuartas(confronto6[0], 5)
                }else{
                    spanTeam[21].classList.add('eliminado')
                    spanTeam[22].classList.add('eliminado')

                    newQuartas(confronto6[1], 5)
                }
            }else{
                if(acumuladoGols1 > acumuladoGols2){
                    spanTeam[21].classList.add('eliminado')
                    spanTeam[22].classList.add('eliminado')

                    newQuartas(confronto6[1], 5)
                }else{
                    spanTeam[20].classList.add('eliminado') 
                    spanTeam[23].classList.add('eliminado')

                    newQuartas(confronto6[0], 5)
                }
            }

            this.classList.add('btn-disabled')
            this.removeEventListener('click', setResult)
        })
        ButtonSave[12].addEventListener("click", function setResult(){
            let result1 = resultsGames[24].value
            let result2 = resultsGames[25].value
            let jogo1 = []
        
            if(saveResults13 != null){
                console.log('Resultadores já registrados')
                return
            }
        
            if(!result1 || ! result2)return

            jogo1[0] = Number(result1)
            jogo1[1] = Number(result2)

            sessionStorage.setItem('Jg8-13', JSON.stringify(jogo1))
            saveResults13 = JSON.parse(sessionStorage.getItem('Jg8-13'))

            resultsGames[24].setAttribute('readonly', 'readonly')
            resultsGames[25].setAttribute('readonly', 'readonly')

            this.classList.add('btn-disabled')
            this.removeEventListener('click', setResult)
        })
        ButtonSave[13].addEventListener("click", function setResult(){
            let result1 = resultsGames[26].value
            let result2 = resultsGames[27].value
            let golFora = false
            let jogo2 = []
            
            if(saveResults13 == undefined){
                console.log('Resultado do primeiro jogo não registrado')
                return
            }
            let acumuladoGols1 = Number(saveResults13[0]) + Number(result2)
            let acumuladoGols2 = Number(saveResults13[1]) + Number(result1)

            if(saveResults14 != null){
                console.log('Resultadores já registrados')
                return
            }
            
            if(!result1 || ! result2)return

            jogo2[0] = Number(result1)
            jogo2[1] = Number(result2)

            sessionStorage.setItem('Jg8-14', JSON.stringify(jogo2))
            saveResults14 = JSON.parse(sessionStorage.getItem('Jg8-14'))

            resultsGames[26].setAttribute('readonly', 'readonly')
            resultsGames[27].setAttribute('readonly', 'readonly')

            resultsUpdate(confronto7[0], saveResults13[1], saveResults14[0], saveResults13[0], saveResults14[1])
            resultsUpdate(confronto7[1], saveResults13[0], saveResults14[1], saveResults13[1], saveResults14[0])

            if(acumuladoGols1 == acumuladoGols2){
                if(resultsGames[24].value == resultsGames[26].value && resultsGames[25].value == resultsGames[27].value){
                    containerPenaltis[6].classList.add('on')    
                }else(
                    golFora = true
                )
            }

            if(containerPenaltis[6].classList.contains('on') == true){
                let penalt1 = resultPenaltis[12].value
                let penalt2 = resultPenaltis[13].value
                let Penaltis1 = []

                if(!penalt1 || !penalt2)return

                resultPenaltis[12].setAttribute('readonly', 'readonly')
                resultPenaltis[13].setAttribute('readonly', 'readonly')

                Penaltis1[0] = Number(penalt1)
                Penaltis1[1] = Number(penalt2)
                sessionStorage.setItem('Pen8-7', JSON.stringify(Penaltis1))

                if(penalt1 > penalt2 ){
                    spanTeam[24].classList.add('eliminado') 
                    spanTeam[27].classList.add('eliminado')

                    newQuartas(confronto7[0], 6)
                }else{
                    spanTeam[25].classList.add('eliminado')
                    spanTeam[26].classList.add('eliminado')

                    newQuartas(confronto7[1], 6)
                }                
            }else if(golFora){
                if(resultsGames[25].value > resultsGames[27].value){
                    spanTeam[24].classList.add('eliminado') 
                    spanTeam[27].classList.add('eliminado')

                    newQuartas(confronto7[0], 6)
                }else{
                    spanTeam[25].classList.add('eliminado')
                    spanTeam[26].classList.add('eliminado')

                    newQuartas(confronto7[1], 6)
                }
            }else{
                if(acumuladoGols1 > acumuladoGols2){
                    spanTeam[25].classList.add('eliminado')
                    spanTeam[26].classList.add('eliminado')

                    newQuartas(confronto7[1], 6)
                }else{
                    spanTeam[24].classList.add('eliminado') 
                    spanTeam[27].classList.add('eliminado')

                    newQuartas(confronto7[0], 6)
                }
            }

            this.classList.add('btn-disabled')
            this.removeEventListener('click', setResult)
        })
        ButtonSave[14].addEventListener("click", function setResult(){
            let result1 = resultsGames[28].value
            let result2 = resultsGames[29].value
            let jogo1 = []
        
            if(saveResults15 != null){
                console.log('Resultadores já registrados')
                return
            }
        
            if(!result1 || ! result2)return

            jogo1[0] = Number(result1)
            jogo1[1] = Number(result2)

            sessionStorage.setItem('Jg8-15', JSON.stringify(jogo1))
            saveResults15 = JSON.parse(sessionStorage.getItem('Jg8-15'))

            resultsGames[28].setAttribute('readonly', 'readonly')
            resultsGames[29].setAttribute('readonly', 'readonly')

            this.classList.add('btn-disabled')
            this.removeEventListener('click', setResult)
        })
        ButtonSave[15].addEventListener("click", function setResult(){
            let result1 = resultsGames[30].value
            let result2 = resultsGames[31].value
            let golFora = false
            let jogo2 = []
            
            if(saveResults15 == undefined){
                console.log('Resultado do primeiro jogo não registrado')
                return
            }
            let acumuladoGols1 = Number(saveResults15[0]) + Number(result2)
            let acumuladoGols2 = Number(saveResults15[1]) + Number(result1)

            if(saveResults16 != null){
                console.log('Resultadores já registrados')
                return
            }
            
            if(!result1 || ! result2)return

            jogo2[0] = Number(result1)
            jogo2[1] = Number(result2)

            sessionStorage.setItem('Jg8-16', JSON.stringify(jogo2))
            saveResults16 = JSON.parse(sessionStorage.getItem('Jg8-16'))

            resultsGames[30].setAttribute('readonly', 'readonly')
            resultsGames[31].setAttribute('readonly', 'readonly')

            resultsUpdate(confronto8[0], saveResults15[1], saveResults16[0], saveResults15[0], saveResults16[1])
            resultsUpdate(confronto8[1], saveResults15[0], saveResults16[1], saveResults15[1], saveResults16[0])

            if(acumuladoGols1 == acumuladoGols2){
                if(resultsGames[28].value == resultsGames[30].value && resultsGames[29].value == resultsGames[31].value){
                    containerPenaltis[7].classList.add('on')    
                }else(
                    golFora = true
                )
            }

            if(containerPenaltis[7].classList.contains('on') == true){
                let penalt1 = resultPenaltis[14].value
                let penalt2 = resultPenaltis[15].value
                let Penaltis1 = []

                if(!penalt1 || !penalt2)return

                resultPenaltis[14].setAttribute('readonly', 'readonly')
                resultPenaltis[15].setAttribute('readonly', 'readonly')

                Penaltis1[0] = Number(penalt1)
                Penaltis1[1] = Number(penalt2)
                sessionStorage.setItem('Pen8-8', JSON.stringify(Penaltis1))

                if(penalt1 > penalt2 ){
                    spanTeam[28].classList.add('eliminado') 
                    spanTeam[31].classList.add('eliminado')

                    newQuartas(confronto8[0], 7)
                }else{
                    spanTeam[29].classList.add('eliminado')
                    spanTeam[30].classList.add('eliminado')

                    newQuartas(confronto8[1], 7)
                }                
            }else if(golFora){
                if(resultsGames[29].value > resultsGames[31].value){
                    spanTeam[28].classList.add('eliminado') 
                    spanTeam[31].classList.add('eliminado')

                    newQuartas(confronto8[0], 7)
                }else{
                    spanTeam[29].classList.add('eliminado')
                    spanTeam[30].classList.add('eliminado')

                    newQuartas(confronto8[1], 7)
                }
            }else{
                if(acumuladoGols1 > acumuladoGols2){
                    spanTeam[29].classList.add('eliminado')
                    spanTeam[30].classList.add('eliminado')

                    newQuartas(confronto8[1], 7)
                }else{
                    spanTeam[28].classList.add('eliminado') 
                    spanTeam[31].classList.add('eliminado')

                    newQuartas(confronto8[0], 7)
                }
            }

            this.classList.add('btn-disabled')
            this.removeEventListener('click', setResult)
        })
    }

    if(poteGeral.length == 16){
        poteGeral.forEach(element => {
            if(element.position == 1){
                pote1.push(element)
            }else{
                pote2.push(element)
            }
        })
    }

    if(poteGeral.length == 16){
        for(let i = 0; i < 16; i++){
            let numAleatorio = Math.floor(Math.random()*pote1.length)

            switch (i) {
                case 0:
                    confronto1.push(pote1[numAleatorio])
                    pote1.splice(numAleatorio, 1)   
                    break;
            
                case 1:
                    numAleatorio = Math.floor(Math.random()*pote2.length)

                    if(
                        pote2[numAleatorio].pais == confronto1[0].pais 
                            ||
                            pote2[numAleatorio].group == confronto1[0].group
                    ){
                        console.log(`CHAVE 1`)
                        console.log(pote2[numAleatorio].time)
                        do{
                            numAleatorio = Math.floor(Math.random()*pote2.length)
                        }while(
                            pote2[numAleatorio].pais == confronto1[0].pais
                                &&
                                pote2[numAleatorio].group == confronto1[0].group
                        )
                        confronto1.push(pote2[numAleatorio])
                        pote2.splice(numAleatorio, 1)
                    }else{
                        confronto1.push(pote2[numAleatorio])
                        pote2.splice(numAleatorio, 1)
                    }
                    console.log(confronto1)
                    break;

                case 2:
                    confronto2.push(pote1[numAleatorio])
                    pote1.splice(numAleatorio, 1)   
                    break;

                case 3:
                    numAleatorio = Math.floor(Math.random()*pote2.length)

                    if(
                        pote2[numAleatorio].pais == confronto2[0].pais 
                            ||
                            pote2[numAleatorio].group == confronto2[0].group
                    ){
                        console.log(`CHAVE 2`)
                        console.log(pote2[numAleatorio].time)
                        do{
                            numAleatorio = Math.floor(Math.random()*pote2.length)
                        }while(
                            pote2[numAleatorio].pais == confronto2[0].pais
                                &&
                                pote2[numAleatorio].group == confronto2[0].group
                        )
                        confronto2.push(pote2[numAleatorio])
                        pote2.splice(numAleatorio, 1)
                    }else{
                        confronto2.push(pote2[numAleatorio])
                        pote2.splice(numAleatorio, 1)
                    }
                    break;

                case 4:
                    confronto3.push(pote1[numAleatorio])
                    pote1.splice(numAleatorio, 1)   
                    break;

                case 5:
                    numAleatorio = Math.floor(Math.random()*pote2.length)

                    if(
                        pote2[numAleatorio].pais == confronto3[0].pais 
                            ||
                            pote2[numAleatorio].group == confronto3[0].group
                    ){
                        console.log(`CHAVE 3`)
                        console.log(pote2[numAleatorio].time)
                        do{
                            numAleatorio = Math.floor(Math.random()*pote2.length)
                        }while(
                            pote2[numAleatorio].pais == confronto3[0].pais
                                &&
                                pote2[numAleatorio].group == confronto3[0].group
                        )
                        confronto3.push(pote2[numAleatorio])
                        pote2.splice(numAleatorio, 1)
                    }else{
                        confronto3.push(pote2[numAleatorio])
                        pote2.splice(numAleatorio, 1)
                    }
                    break;

                case 6:
                    confronto4.push(pote1[numAleatorio])
                    pote1.splice(numAleatorio, 1)   
                    break;

                case 7:
                    numAleatorio = Math.floor(Math.random()*pote2.length)

                    if(
                        pote2[numAleatorio].pais == confronto4[0].pais 
                            ||
                            pote2[numAleatorio].group == confronto4[0].group
                    ){
                        console.log(`CHAVE 4`)
                        console.log(pote2[numAleatorio].time)
                        do{
                            numAleatorio = Math.floor(Math.random()*pote2.length)
                        }while(
                            pote2[numAleatorio].pais == confronto4[0].pais
                                &&
                                pote2[numAleatorio].group == confronto4[0].group
                        )
                        confronto4.push(pote2[numAleatorio])
                        pote2.splice(numAleatorio, 1)
                    }else{
                        confronto4.push(pote2[numAleatorio])
                        pote2.splice(numAleatorio, 1)
                    }
                    break;

                case 8:
                    confronto5.push(pote1[numAleatorio])
                    pote1.splice(numAleatorio, 1)   
                    break;

                case 9:
                    numAleatorio = Math.floor(Math.random()*pote2.length)

                    if(
                        pote2[numAleatorio].pais == confronto5[0].pais 
                            ||
                            pote2[numAleatorio].group == confronto5[0].group
                    ){
                        console.log(`CHAVE 5`)
                        console.log(pote2[numAleatorio].time)
                        do{
                            numAleatorio = Math.floor(Math.random()*pote2.length)
                        }while(
                            pote2[numAleatorio].pais == confronto5[0].pais
                                &&
                                pote2[numAleatorio].group == confronto5[0].group
                        )
                        confronto5.push(pote2[numAleatorio])
                        pote2.splice(numAleatorio, 1)
                    }else{
                        confronto5.push(pote2[numAleatorio])
                        pote2.splice(numAleatorio, 1)
                    }
                    break;

                case 10:
                    confronto6.push(pote1[numAleatorio])
                    pote1.splice(numAleatorio, 1)   
                    break;

                case 11:
                    numAleatorio = Math.floor(Math.random()*pote2.length)

                    if(
                        pote2[numAleatorio].pais == confronto6[0].pais 
                            ||
                            pote2[numAleatorio].group == confronto6[0].group
                    ){
                        console.log(`CHAVE 6`)
                        console.log(pote2[numAleatorio].time)
                        do{
                            numAleatorio = Math.floor(Math.random()*pote2.length)
                        }while(
                            pote2[numAleatorio].pais == confronto6[0].pais
                                &&
                                pote2[numAleatorio].group == confronto6[0].group
                        )
                        confronto6.push(pote2[numAleatorio])
                        pote2.splice(numAleatorio, 1)
                    }else{
                        confronto6.push(pote2[numAleatorio])
                        pote2.splice(numAleatorio, 1)
                    }
                    break;

                case 12:
                    confronto7.push(pote1[numAleatorio])
                    pote1.splice(numAleatorio, 1)   
                    break;

                case 13:
                    numAleatorio = Math.floor(Math.random()*pote2.length)
                    confronto7.push(pote2[numAleatorio])
                    pote2.splice(numAleatorio, 1)

                    if(
                        confronto7[1].pais == confronto7[0].pais 
                            ||
                            confronto7[1].group == confronto7[0].group
                    ){
                        console.log(`CHAVE 7`)
                        console.log(confronto7[1])
                        
                        if(
                            confronto7[1].pais != confronto6[0].pais
                                &&
                                confronto7[1].group != confronto6[0].group
                                    &&
                                    confronto6[1].pais != confronto7[0].pais
                                        &&
                                        confronto6[1].group != confronto7[0].group
                        ){
                            let time1 = confronto7[1]
                            let time2 = confronto6[1]
                            confronto6[1] = time1
                            confronto7[1] = time2
                        }else if(
                            confronto7[1].pais != confronto5[0].pais
                                &&
                                confronto7[1].group != confronto5[0].group
                                    &&
                                    confronto5[1].pais != confronto7[0].pais
                                        &&
                                        confronto5[1].group != confronto7[0].group
                        ){
                            let time1 = confronto7[1]
                            let time2 = confronto5[1]
                            confronto5[1] = time1
                            confronto7[1] = time2
                        }else if(
                            confronto7[1].pais != confronto4[0].pais
                                &&
                                confronto7[1].group != confronto4[0].group
                                    &&
                                    confronto4[1].pais != confronto7[0].pais
                                        &&
                                        confronto4[1].group != confronto7[0].group
                        ){
                            let time1 = confronto7[1]
                            let time2 = confronto4[1]
                            confronto4[1] = time1
                            confronto7[1] = time2
                        }else if(
                            confronto7[1].pais != confronto3[0].pais
                                &&
                                confronto7[1].group != confronto3[0].group
                                    &&
                                    confronto3[1].pais != confronto7[0].pais
                                        &&
                                        confronto3[1].group != confronto7[0].group
                        ){
                            let time1 = confronto7[1]
                            let time2 = confronto3[1]
                            confronto3[1] = time1
                            confronto7[1] = time2
                        }else if(
                            confronto7[1].pais != confronto2[0].pais
                                &&
                                confronto7[1].group != confronto2[0].group
                                    &&
                                    confronto2[1].pais != confronto7[0].pais
                                        &&
                                        confronto2[1].group != confronto7[0].group
                        ){
                            let time1 = confronto7[1]
                            let time2 = confronto2[1]
                            confronto2[1] = time1
                            confronto7[1] = time2
                        }else{
                            let time1 = confronto7[1]
                            let time2 = confronto1[1]
                            confronto1[1] = time1
                            confronto7[1] = time2
                        }
                    }
                    break;
                
                case 14:
                    confronto8.push(pote1[numAleatorio])
                    pote1.splice(numAleatorio, 1)   
                    break;

                case 15:
                    numAleatorio = Math.floor(Math.random()*pote2.length)
                    confronto8.push(pote2[numAleatorio])
                    pote2.splice(numAleatorio, 1)

                    if(
                        confronto8[1].pais == confronto8[0].pais 
                            ||
                            confronto8[1].group == confronto8[0].group
                    ){
                        console.log(`CHAVE 8`)
                        console.log(confronto8[1])
                        
                        if(
                            confronto8[1].pais != confronto7[0].pais
                                &&
                                confronto8[1].group != confronto7[0].group
                                    &&
                                    confronto7[1].pais != confronto8[0].pais
                                        &&
                                        confronto7[1].group != confronto8[0].group
                        ){
                            let time1 = confronto8[1]
                            let time2 = confronto7[1]
                            confronto7[1] = time1
                            confronto8[1] = time2
                        }else if(
                            confronto8[1].pais != confronto6[0].pais
                                &&
                                confronto8[1].group != confronto6[0].group
                                    &&
                                    confronto6[1].pais != confronto8[0].pais
                                        &&
                                        confronto6[1].group != confronto8[0].group
                        ){
                            let time1 = confronto8[1]
                            let time2 = confronto6[1]
                            confronto6[1] = time1
                            confronto8[1] = time2
                        }else if(
                            confronto8[1].pais != confronto5[0].pais
                                &&
                                confronto8[1].group != confronto5[0].group
                                    &&
                                    confronto5[1].pais != confronto8[0].pais
                                        &&
                                        confronto5[1].group != confronto8[0].group
                        ){
                            let time1 = confronto8[1]
                            let time2 = confronto5[1]
                            confronto5[1] = time1
                            confronto8[1] = time2
                        }else if(
                            confronto8[1].pais != confronto4[0].pais
                                &&
                                confronto8[1].group != confronto4[0].group
                                    &&
                                    confronto4[1].pais != confronto8[0].pais
                                        &&
                                        confronto4[1].group != confronto8[0].group
                        ){
                            let time1 = confronto8[1]
                            let time2 = confronto4[1]
                            confronto4[1] = time1
                            confronto8[1] = time2
                        }else if(
                            confronto8[1].pais != confronto3[0].pais
                                &&
                                confronto8[1].group != confronto3[0].group
                                    &&
                                    confronto3[1].pais != confronto8[0].pais
                                        &&
                                        confronto3[1].group != confronto8[0].group
                        ){
                            let time1 = confronto8[1]
                            let time2 = confronto3[1]
                            confronto3[1] = time1
                            confronto8[1] = time2
                        }else if(
                            confronto8[1].pais != confronto2[0].pais
                                &&
                                confronto8[1].group != confronto2[0].group
                                    &&
                                    confronto2[1].pais != confronto8[0].pais
                                        &&
                                        confronto2[1].group != confronto8[0].group
                        ){
                            let time1 = confronto8[1]
                            let time2 = confronto2[1]
                            confronto2[1] = time1
                            confronto8[1] = time2
                        }else{
                            let time1 = confronto8[1]
                            let time2 = confronto1[1]
                            confronto1[1] = time1
                            confronto8[1] = time2
                        }
                    }
                    break;
            }
        }
        newOitavas('encerrado')
        sessionStorage.setItem('oitavas1', JSON.stringify(confronto1))
        sessionStorage.setItem('oitavas2', JSON.stringify(confronto2))
        sessionStorage.setItem('oitavas3', JSON.stringify(confronto3))
        sessionStorage.setItem('oitavas4', JSON.stringify(confronto4))
        sessionStorage.setItem('oitavas5', JSON.stringify(confronto5))
        sessionStorage.setItem('oitavas6', JSON.stringify(confronto6))
        sessionStorage.setItem('oitavas7', JSON.stringify(confronto7))
        sessionStorage.setItem('oitavas8', JSON.stringify(confronto8))
    }

    confronto1 = JSON.parse(sessionStorage.getItem('oitavas1'))
    confronto2 = JSON.parse(sessionStorage.getItem('oitavas2'))
    confronto3 = JSON.parse(sessionStorage.getItem('oitavas3'))
    confronto4 = JSON.parse(sessionStorage.getItem('oitavas4'))
    confronto5 = JSON.parse(sessionStorage.getItem('oitavas5'))
    confronto6 = JSON.parse(sessionStorage.getItem('oitavas6'))
    confronto7 = JSON.parse(sessionStorage.getItem('oitavas7'))
    confronto8 = JSON.parse(sessionStorage.getItem('oitavas8'))

    console.log(confronto1)
    console.log(confronto2)
    console.log(confronto3)
    console.log(confronto4)
    console.log(confronto5)
    console.log(confronto6)
    console.log(confronto7)
    console.log(confronto8)

    setTimeout(addFunctionButton, 200)

    return(
        <>
            <Header fases='oitavas de final' previousLink='/fase-de-grupos' nextLink='/quartas-de-final'/>

            <div className="fasesEliminatorias">
                <h2>jogos</h2>

                <div className="confrontos">
                    <div className="confrontoUm">
                        <div className="ida">
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

                        <div className="volta">
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
                                    {confronto1 && <img src={confronto1[1].url} alt="" />}
                                    {confronto1 && confronto1[1].time}                                                                   
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
                                {confronto2 && confronto2[1].estadio}
                            </span> 19:30</p>
                            <p className='gameInformation'>
                                <span className='team'>
                                    {confronto2 && confronto2[1].time}                        
                                    {confronto2 && <img src={confronto2[1].url} alt="" />}    
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
                                    {confronto2 && <img src={confronto2[0].url} alt="" />}
                                    {confronto2 && confronto2[0].time}                    
                                </span>
                            </p>

                            <div className="containerBtnSalvar">
                                <button className='button btnSalvarResultado'>salvar</button>
                            </div>
                        </div>

                        <div className="volta">
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
                                    {confronto2 && <img src={confronto2[1].url} alt="" />}
                                    {confronto2 && confronto2[1].time}                    
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
                                {confronto3 && confronto3[1].estadio}
                            </span> 19:30</p>
                            <p className='gameInformation'>
                                <span className='team'>
                                    {confronto3 && confronto3[1].time}                        
                                    {confronto3 && <img src={confronto3[1].url} alt="" />}    
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
                                    {confronto3 && <img src={confronto3[0].url} alt="" />}
                                    {confronto3 && confronto3[0].time}                    
                                </span>
                            </p>

                            <div className="containerBtnSalvar">
                                <button className='button btnSalvarResultado'>salvar</button>
                            </div>
                        </div>

                        <div className="volta">
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
                                    {confronto3 && <img src={confronto3[1].url} alt="" />}
                                    {confronto3 && confronto3[1].time}                    
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
                                {confronto4 && confronto4[1].estadio}
                            </span> 19:30</p>
                            <p className='gameInformation'>
                                <span className='team'>
                                    {confronto4 && confronto4[1].time}                        
                                    {confronto4 && <img src={confronto4[1].url} alt="" />}    
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
                                    {confronto4 && <img src={confronto4[0].url} alt="" />}    
                                    {confronto4 && confronto4[0].time}                        
                                </span>
                            </p>

                            <div className="containerBtnSalvar">
                                <button className='button btnSalvarResultado'>salvar</button>
                            </div>
                        </div>

                        <div className="volta">
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
                                    {confronto4 && <img src={confronto4[1].url} alt="" />}    
                                    {confronto4 && confronto4[1].time}                        
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

                    <div className="confrontoCinco">
                        <div className="ida">
                            <p className="information-jogo">terça <span className="stadium">
                                {confronto5 && confronto5[1].estadio}    
                            </span> 19:30</p>
                            <p className='gameInformation'>
                                <span className='team'>
                                    {confronto5 && confronto5[1].time}                        
                                    {confronto5 && <img src={confronto5[1].url} alt="" />}    
                                </span>
                                <span className="containerInput">
                                    {
                                        saveResults9 != null
                                            ?
                                                <input 
                                                    type="text" 
                                                    className='input-time-resultado'
                                                    value={saveResults9[0]}
                                                    readOnly
                                                />
                                            :
                                                <input type="text" className='input-time-resultado'/>
                                    }
                                </span>
                                <span>x</span>
                                <span className="containerInput">
                                    {
                                        saveResults9 != null
                                            ?
                                                <input 
                                                    type="text" 
                                                    className='input-time-resultado'
                                                    value={saveResults9[1]}
                                                    readOnly
                                                />
                                            :
                                                <input type="text" className='input-time-resultado'/>
                                    }
                                </span>
                                <span className='team'>
                                    {confronto5 && <img src={confronto5[0].url} alt="" />}    
                                    {confronto5 && confronto5[0].time}   
                                </span>
                            </p>

                            <div className="containerBtnSalvar">
                                <button className='button btnSalvarResultado'>salvar</button>
                            </div>
                        </div>

                        <div className="volta">
                            <p className="information-jogo">terça <span className="stadium">
                                {confronto5 && confronto5[0].estadio}        
                            </span> 19:30</p>
                            <p className='gameInformation'>
                                <span className='team'>
                                    {confronto5 && confronto5[0].time}                        
                                    {confronto5 && <img src={confronto5[0].url} alt="" />}    
                                </span>
                                <span className="containerInput">
                                    {
                                        saveResults10 != null
                                            ?
                                                <input 
                                                    type="text" 
                                                    className='input-time-resultado'
                                                    value={saveResults10[0]}
                                                    readOnly
                                                />
                                            :
                                                <input type="text" className='input-time-resultado'/>
                                    }
                                </span>
                                <span>x</span>
                                <span className="containerInput">
                                    {
                                        saveResults10 != null
                                            ?
                                                <input 
                                                    type="text" 
                                                    className='input-time-resultado'
                                                    value={saveResults10[1]}
                                                    readOnly
                                                />
                                            :
                                                <input type="text" className='input-time-resultado'/>
                                    }
                                </span>
                                <span className='team'>
                                    {confronto5 && <img src={confronto5[1].url} alt="" />}    
                                    {confronto5 && confronto5[1].time}   
                                </span>
                            </p>

                            {
                                infoPenalti5 != null
                                    ?
                                        <p className="penaltis on">
                                            <span className="containerInput">
                                                <input 
                                                    type="text" 
                                                    className='input-resultado-penaltis'
                                                    value={infoPenalti5[0]}
                                                    readOnly
                                                />
                                            </span>
                                            <span className="containerInput">
                                                <input 
                                                    type="text" 
                                                    className='input-resultado-penaltis'
                                                    value={infoPenalti5[1]}
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

                    <div className="confrontoSeis">
                        <div className="ida">
                            <p className="information-jogo">terça <span className="stadium">
                                {confronto6 && confronto6[1].estadio}        
                            </span> 19:30</p>
                            <p className='gameInformation'>
                                <span className='team'>
                                    {confronto6 && confronto6[1].time}                        
                                    {confronto6 && <img src={confronto6[1].url} alt="" />}    
                                </span>
                                <span className="containerInput">
                                    {
                                        saveResults11 != null
                                            ?
                                                <input 
                                                    type="text" 
                                                    className='input-time-resultado'
                                                    value={saveResults11[0]}
                                                    readOnly
                                                />
                                            :
                                                <input type="text" className='input-time-resultado'/>
                                    }
                                </span>
                                <span>x</span>
                                <span className="containerInput">
                                    {
                                        saveResults11 != null
                                            ?
                                                <input 
                                                    type="text" 
                                                    className='input-time-resultado'
                                                    value={saveResults11[1]}
                                                    readOnly
                                                />
                                            :
                                                <input type="text" className='input-time-resultado'/>
                                    }
                                </span>
                                <span className='team'>
                                    {confronto6 && <img src={confronto6[0].url} alt="" />}    
                                    {confronto6 && confronto6[0].time}   
                                </span>
                            </p>

                            <div className="containerBtnSalvar">
                                <button className='button btnSalvarResultado'>salvar</button>
                            </div>
                        </div>

                        <div className="volta">
                            <p className="information-jogo">terça <span className="stadium">
                                {confronto6 && confronto6[0].estadio}            
                            </span> 19:30</p>
                            <p className='gameInformation'>
                                <span className='team'>
                                    {confronto6 && confronto6[0].time}                        
                                    {confronto6 && <img src={confronto6[0].url} alt="" />}    
                                </span>
                                <span className="containerInput">
                                    {
                                        saveResults12 != null
                                            ?
                                                <input 
                                                    type="text" 
                                                    className='input-time-resultado'
                                                    value={saveResults12[0]}
                                                    readOnly
                                                />
                                            :
                                                <input type="text" className='input-time-resultado'/>
                                    }
                                </span>
                                <span>x</span>
                                <span className="containerInput">
                                    {
                                        saveResults12 != null
                                            ?
                                                <input 
                                                    type="text" 
                                                    className='input-time-resultado'
                                                    value={saveResults12[1]}
                                                    readOnly
                                                />
                                            :
                                                <input type="text" className='input-time-resultado'/>
                                    }
                                </span>
                                <span className='team'>
                                    {confronto6 && <img src={confronto6[1].url} alt="" />}    
                                    {confronto6 && confronto6[1].time}   
                                </span>
                            </p>

                            {
                                infoPenalti6 != null
                                    ?
                                        <p className="penaltis on">
                                            <span className="containerInput">
                                                <input 
                                                    type="text" 
                                                    className='input-resultado-penaltis'
                                                    value={infoPenalti6[0]}
                                                    readOnly
                                                />
                                            </span>
                                            <span className="containerInput">
                                                <input 
                                                    type="text" 
                                                    className='input-resultado-penaltis'
                                                    value={infoPenalti6[1]}
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

                    <div className="confrontoSete">
                        <div className="ida">
                            <p className="information-jogo">terça <span className="stadium">
                                {confronto7 && confronto7[1].estadio}            
                            </span> 19:30</p>
                            <p className='gameInformation'>
                                <span className='team'>
                                    {confronto7 && confronto7[1].time}                        
                                    {confronto7 && <img src={confronto7[1].url} alt="" />}    
                                </span>
                                <span className="containerInput">
                                    {
                                        saveResults13 != null
                                            ?
                                                <input 
                                                    type="text" 
                                                    className='input-time-resultado'
                                                    value={saveResults13[0]}
                                                    readOnly
                                                />
                                            :
                                                <input type="text" className='input-time-resultado'/>
                                    }
                                </span>
                                <span>x</span>
                                <span className="containerInput">
                                    {
                                        saveResults13 != null
                                            ?
                                                <input 
                                                    type="text" 
                                                    className='input-time-resultado'
                                                    value={saveResults13[1]}
                                                    readOnly
                                                />
                                            :
                                                <input type="text" className='input-time-resultado'/>
                                    }
                                </span>
                                <span className='team'>
                                    {confronto7 && <img src={confronto7[0].url} alt="" />}    
                                    {confronto7 && confronto7[0].time}   
                                </span>
                            </p>

                            <div className="containerBtnSalvar">
                                <button className='button btnSalvarResultado'>salvar</button>
                            </div>
                        </div>

                        <div className="volta">
                            <p className="information-jogo">terça <span className="stadium">
                                {confronto7 && confronto7[0].estadio}                
                            </span> 19:30</p>
                            <p className='gameInformation'>
                                <span className='team'>
                                    {confronto7 && confronto7[0].time}                        
                                    {confronto7 && <img src={confronto7[0].url} alt="" />}    
                                </span>
                                <span className="containerInput">
                                    {
                                        saveResults14 != null
                                            ?
                                                <input 
                                                    type="text" 
                                                    className='input-time-resultado'
                                                    value={saveResults14[0]}
                                                    readOnly
                                                />
                                            :
                                                <input type="text" className='input-time-resultado'/>
                                    }
                                </span>
                                <span>x</span>
                                <span className="containerInput">
                                    {
                                        saveResults14 != null
                                            ?
                                                <input 
                                                    type="text" 
                                                    className='input-time-resultado'
                                                    value={saveResults14[1]}
                                                    readOnly
                                                />
                                            :
                                                <input type="text" className='input-time-resultado'/>
                                    }
                                </span>
                                <span className='team'>
                                    {confronto7 && <img src={confronto7[1].url} alt="" />}    
                                    {confronto7 && confronto7[1].time}   
                                </span>
                            </p>

                            {
                                infoPenalti7 != null
                                    ?
                                        <p className="penaltis on">
                                            <span className="containerInput">
                                                <input 
                                                    type="text" 
                                                    className='input-resultado-penaltis'
                                                    value={infoPenalti7[0]}
                                                    readOnly
                                                />
                                            </span>
                                            <span className="containerInput">
                                                <input 
                                                    type="text" 
                                                    className='input-resultado-penaltis'
                                                    value={infoPenalti7[1]}
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

                    <div className="confrontoOito">
                        <div className="ida">
                            <p className="information-jogo">terça <span className="stadium">
                                {confronto8 && confronto8[1].estadio}            
                            </span> 19:30</p>
                            <p className='gameInformation'>
                                <span className='team'>
                                    {confronto8 && confronto8[1].time}                        
                                    {confronto8 && <img src={confronto8[1].url} alt="" />}    
                                </span>
                                <span className="containerInput">
                                {
                                        saveResults15 != null
                                            ?
                                                <input 
                                                    type="text" 
                                                    className='input-time-resultado'
                                                    value={saveResults15[0]}
                                                    readOnly
                                                />
                                            :
                                                <input type="text" className='input-time-resultado'/>
                                    }
                                </span>
                                <span>x</span>
                                <span className="containerInput">
                                    {
                                        saveResults15 != null
                                            ?
                                                <input 
                                                    type="text" 
                                                    className='input-time-resultado'
                                                    value={saveResults15[1]}
                                                    readOnly
                                                />
                                            :
                                                <input type="text" className='input-time-resultado'/>
                                    }
                                </span>
                                <span className='team'>
                                    {confronto8 && <img src={confronto8[0].url} alt="" />}    
                                    {confronto8 && confronto8[0].time}   
                                </span>
                            </p>

                            <div className="containerBtnSalvar">
                                <button className='button btnSalvarResultado'>salvar</button>
                            </div>
                        </div>

                        <div className="volta">
                            <p className="information-jogo">terça <span className="stadium">
                                {confronto8 && confronto8[0].estadio}                
                            </span> 19:30</p>
                            <p className='gameInformation'>
                                <span className='team'>
                                    {confronto8 && confronto8[0].time}                        
                                    {confronto8 && <img src={confronto8[0].url} alt="" />}    
                                </span>
                                <span className="containerInput">
                                    {
                                        saveResults16 != null
                                            ?
                                                <input 
                                                    type="text" 
                                                    className='input-time-resultado'
                                                    value={saveResults16[0]}
                                                    readOnly
                                                />
                                            :
                                                <input type="text" className='input-time-resultado'/>
                                    }
                                </span>
                                <span>x</span>
                                <span className="containerInput">
                                    {
                                        saveResults16 != null
                                            ?
                                                <input 
                                                    type="text" 
                                                    className='input-time-resultado'
                                                    value={saveResults16[1]}
                                                    readOnly
                                                />
                                            :
                                                <input type="text" className='input-time-resultado'/>
                                    }
                                </span>
                                <span className='team'>
                                    {confronto8 && <img src={confronto8[1].url} alt="" />}    
                                    {confronto8 && confronto8[1].time}   
                                </span>
                            </p>

                            {
                                infoPenalti8 != null
                                    ?
                                        <p className="penaltis on">
                                            <span className="containerInput">
                                                <input 
                                                    type="text" 
                                                    className='input-resultado-penaltis'
                                                    value={infoPenalti8[0]}
                                                    readOnly
                                                />
                                            </span>
                                            <span className="containerInput">
                                                <input 
                                                    type="text" 
                                                    className='input-resultado-penaltis'
                                                    value={infoPenalti8[1]}
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