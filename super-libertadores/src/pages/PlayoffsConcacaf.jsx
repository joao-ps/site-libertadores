import { useEffect, useContext } from 'react'
import axios from 'axios'

import { Header } from '../componentes/Header'

import '../styles/eliminatoria.sass'
import { GetTimes } from '../componentes/api/getTeams'
import { json } from 'react-router-dom'

export function PlayoffsConcacaf(){
    function bigScreen(newTeam, num, localizacao){
        let confronto = document.querySelectorAll('.Concacaf')
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
        let confronto = document.querySelectorAll('.Concacaf')
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
        let chave1 = JSON.parse(sessionStorage.getItem('concacaf-1'))
        let chave2 = JSON.parse(sessionStorage.getItem('concacaf-2'))
        let chave3 = JSON.parse(sessionStorage.getItem('concacaf-3'))

        if(JSON.parse(sessionStorage.getItem('concacaf-1')) != null){
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
            }
        }
    }

    window.onresize = updateResponsiveConcacaf

    function updateResponsiveConcacaf(){
        let confronto = document.querySelectorAll('.Concacaf')
        
        if(confronto.length > 1){
            responsivePage()    
        }
    }

    setTimeout(() => {
        updateResponsiveConcacaf()    
    }, 100)

    let [
        newPrevConcacaf,
        previaConcacaf,
        newPrevPlayoffs,
        previaPlayoffs,
        newPrevPrimeiraFase,
        previaPrimeiraFase,
        newPrevSegundaFase,
        previaSegundaFase,
        newPrevTerceiraFaseFase,
        previaTerceiraFase,
        newPrevFaseDeGrupos,
        pote1,
        pote2,
        pote3,
        pote4
    ] = useContext(GetTimes)

    let confronto1 = []
    let confronto2 = []
    let confronto3 = []

    let campeao = []
    let sulCampeao = []
    let brasil = []
    let argentina = []
    let colombia = []
    let uruguai = []
    let chile = []
    let paraguai = []
    let equador = []
    let venezuela = []
    let bolivia = []
    let peru = []
    let mexico = []
    let eua = []
    let costaRica = []
    let panama = []
    let honduras = []
    let elSalvador = []
    let nicaragua = []
    let caribe = []
    let copaBrasil = []
    let copaArgentina = []
    let copaColombia = []
    let copaChile = []
    let copaMexico = []
    let campeoesCopas = []

    let infoPenalti1
    let infoPenalti2
    let infoPenalti3

    let saveResults1
    let saveResults2
    let saveResults3
    let saveResults4
    let saveResults5
    let saveResults6

    saveResults1 = JSON.parse(sessionStorage.getItem('JgConcacaf-1'))
    saveResults2 = JSON.parse(sessionStorage.getItem('JgConcacaf-2'))
    saveResults3 = JSON.parse(sessionStorage.getItem('JgConcacaf-3'))
    saveResults4 = JSON.parse(sessionStorage.getItem('JgConcacaf-4'))
    saveResults5 = JSON.parse(sessionStorage.getItem('JgConcacaf-5'))
    saveResults6 = JSON.parse(sessionStorage.getItem('JgConcacaf-6'))

    infoPenalti1 = JSON.parse(sessionStorage.getItem('Pen1Concacaf'))
    infoPenalti2 = JSON.parse(sessionStorage.getItem('Pen2Concacaf'))
    infoPenalti3 = JSON.parse(sessionStorage.getItem('Pen3Concacaf'))

    async function carregarTimesConcacaf(){
        if(previaConcacaf.length > 0)return
        
        await axios.get('http://localhost:2020/campeao-libertadores')
            .then((response) => {
                campeao = response.data
            })
            .catch((error) => {
                console.log(error)
        })
        await axios.get('http://localhost:2020/campeao-sul')
            .then((response) => {
                sulCampeao = response.data
            })
            .catch((error) => {
                console.log(error)
            })

        let resCostaRica = await axios.get('http://localhost:2020/costa-rica')
        let resPanama = await axios.get('http://localhost:2020/panama')
        let resHonduras = await axios.get('http://localhost:2020/honduras')
        let resElSalvador = await axios.get('http://localhost:2020/el-salvador')
        let resNicaragua = await axios.get('http://localhost:2020/nicaragua')
        let resCaribe = await axios.get('http://localhost:2020/caribe')

        costaRica = resCostaRica.data
        panama = resPanama.data
        honduras = resHonduras.data
        elSalvador = resElSalvador.data
        nicaragua = resNicaragua.data
        caribe = resCaribe.data

        newPrevFaseDeGrupos(campeao, 0, 1)
        newPrevFaseDeGrupos(sulCampeao, 1, 1)
        addTeamsConcacaf(costaRica, 0)
        addTeamsConcacaf(panama, 1)
        addTeamsConcacaf(honduras, 2)
        addTeamsConcacaf(elSalvador, 3)
        addTeamsConcacaf(nicaragua, 4)
        addTeamsConcacaf(caribe, 5)
    }
    
    async function carregarTimes(){
        let resBrasil = await axios.get('http://localhost:2020/brasil')
        let resArgentina = await axios.get('http://localhost:2020/argentina')
        let resColombia = await axios.get('http://localhost:2020/colombia')
        let resChile = await axios.get('http://localhost:2020/chile')
        let resUruguai = await axios.get('http://localhost:2020/uruguai')
        let resParaguai = await axios.get('http://localhost:2020/paraguai')
        let resPeru = await axios.get('http://localhost:2020/peru')
        let resBolivia = await axios.get('http://localhost:2020/bolivia')
        let resEquador = await axios.get('http://localhost:2020/equador')
        let resVenezuela = await axios.get('http://localhost:2020/venezuela')
        let resMexico = await axios.get('http://localhost:2020/mexico')
        let resEua = await axios.get('http://localhost:2020/eua')    
        let resCopaBrasil = await axios.get('http://localhost:2020/brasil-copa')
        let resCopaArgentina = await axios.get('http://localhost:2020/argentina-copa')
        let resCopaColombia = await axios.get('http://localhost:2020/colombia-copa')
        let resCopaChile = await axios.get('http://localhost:2020/chile-copa')
        let resCopaMexico = await axios.get('http://localhost:2020/mexico-copa')

        brasil = resBrasil.data
        argentina = resArgentina.data
        colombia = resColombia.data
        chile = resChile.data
        uruguai = resUruguai.data
        paraguai = resParaguai.data
        peru = resPeru.data
        bolivia = resBolivia.data
        equador = resEquador.data
        venezuela = resVenezuela.data
        mexico = resMexico.data
        eua = resEua.data
        copaBrasil = resCopaBrasil.data
        copaArgentina = resCopaArgentina.data
        copaColombia = resCopaColombia.data
        copaChile = resCopaChile.data
        copaMexico = resCopaMexico.data

        //newPrevFaseDeGrupos(copaBrasil, 0, 2)
        //newPrevFaseDeGrupos(copaArgentina, 1, 2)
        //newPrevFaseDeGrupos(copaColombia, 0, 3)
        //newPrevFaseDeGrupos(copaChile, 1, 3)
        //newPrevFaseDeGrupos(copaMexico, 0)

        campeoesCopas[0] = copaBrasil
        campeoesCopas[1] = copaArgentina
        campeoesCopas[2] = copaColombia 
        campeoesCopas[3] = copaChile
        campeoesCopas[4] = copaMexico
    }     
    
    function addMoreTeam(liga, qtVagas, vagasDiretas, faseDois, faseUm, playoffs,copa, p1,p2,p3,p4,numPoteCopa,camCopa,copaTeam){
        //venezuela, 3, 1, 1, false, true, false, false,false,true,false
        let campeonato = liga
        let totalVagas = qtVagas
        let faseGrupos = vagasDiretas
        let segundaFase = faseDois
        let primeiraFase = faseUm
        let qtVagasFaseUm = faseUm != false ? 1 : 0
        let preFaseUm = playoffs
        let copaNacional = copa
        let potes = []
        let algumCampeao = false
        let teamPotes = []
        let poteCopa = numPoteCopa
        let teamCopa = camCopa
        let infoTeamCopa = copaTeam
        sulCampeao = pote1[0]
        campeao = pote1[0]

        potes.push(p1)
        potes.push(p2)
        potes.push(p3)
        potes.push(p4)

        if(sulCampeao.pais == campeonato[0].pais || campeao.pais == campeonato[0].pais){
            algumCampeao = true
        }

        if(preFaseUm){
            if(algumCampeao){
                campeonato.forEach((element) => {
                    if(element.pos <= totalVagas){
                        if(element.pos <= faseGrupos){
                            if(element.time == sulCampeao.time || element.time == campeao.time){
                                totalVagas++
                                faseGrupos++                                
                            }else{
                                teamPotes.push(element)    

                                if(element.pos == faseGrupos){
                                    for (let index=0; index < potes.length; index++) {
                                        switch (index) {
                                            case 0:    
                                                if(potes[index]){
                                                    newPrevFaseDeGrupos(teamPotes[0], undefined, 1)                          
                                                    teamPotes.splice(0, 1)
                                                }
                                                break;
                                            case 1:
                                                if(potes[index]){    
                                                    newPrevFaseDeGrupos(teamPotes[0], undefined, 2)
                                                    teamPotes.splice(0, 1)
                                                }
                                                break;
                                            case 2:
                                                if(potes[index]){
                                                    newPrevFaseDeGrupos(teamPotes[0], undefined, 3)
                                                    teamPotes.splice(0, 1)
                                                }
                                                break;
                                            case 3:
                                                if(potes[index]){
                                                    newPrevFaseDeGrupos(teamPotes[0], undefined, 4)
                                                    teamPotes.splice(0, 1)
                                                }
                                                break;
                                        }   
                                    }    

                                }
                            }
                        }else if(element.pos <= faseGrupos + segundaFase){
                            if(element.time == sulCampeao.time || element.time == campeao.time){
                                totalVagas++
                                segundaFase++
                            }else{
                                newPrevSegundaFase(element)    
                            }
                        }else if(primeiraFase){
                            if(element.pos <= faseGrupos + segundaFase + qtVagasFaseUm){
                                if(element.time == sulCampeao.time || element.time == campeao.time){
                                    totalVagas++
                                    qtVagasFaseUm++
                                }else{
                                    newPrevPrimeiraFase(element)
                                }
                            }
                        }else{
                            if(element.time == sulCampeao.time || element.time == campeao.time){
                                totalVagas++
                            }else{
                                newPrevPlayoffs(element)        
                            }
                        }
                    }  
                })
            }else{
                campeonato.forEach((element) => {
                    if(element.pos <= totalVagas){
                        if(element.pos <= faseGrupos){
                            teamPotes.push(element)
                            
                            if(element.pos == faseGrupos){
                                
                                for (let index=0; index < potes.length; index++) {
                                    switch (index) {
                                        case 0:    
                                            if(potes[index]){
                                                newPrevFaseDeGrupos(teamPotes[0], undefined, 1)                          
                                                teamPotes.splice(0, 1)
                                            }
                                            break;
                                        case 1:
                                            if(potes[index]){    
                                                newPrevFaseDeGrupos(teamPotes[0], undefined, 2)
                                                teamPotes.splice(0, 1)
                                            }
                                            break;
                                        case 2:
                                            if(potes[index]){
                                                newPrevFaseDeGrupos(teamPotes[0], undefined, 3)
                                                teamPotes.splice(0, 1)
                                            }
                                            break;
                                        case 3:
                                            if(potes[index]){
                                                newPrevFaseDeGrupos(teamPotes[0], undefined, 4)
                                                teamPotes.splice(0, 1)
                                            }
                                            break;
                                    }   
                                }
                            }
                        }else if(element.pos <= faseGrupos + segundaFase){
                            newPrevSegundaFase(element)
                        }else if(primeiraFase){
                            if(element.pos <= faseGrupos + segundaFase + qtVagasFaseUm){
                                newPrevPrimeiraFase(element)
                            }
                        }else{
                            newPrevPlayoffs(element)
                        }
                    }
                })
            }
        }else if(primeiraFase){
            if(algumCampeao){

                campeonato.forEach((element) => {
                    if(element.pos <= totalVagas){
                        if(element.pos <= faseGrupos){
                            if(element.time == sulCampeao.time || element.time == campeao.time){
                                totalVagas++
                                faseGrupos++                                
                            }else{
                                teamPotes.push(element)    

                                if(element.pos == faseGrupos){
                                    for (let index=0; index < potes.length; index++) {
                                        switch (index) {
                                            case 0:    
                                                if(potes[index]){
                                                    newPrevFaseDeGrupos(teamPotes[0], undefined, 1)                          
                                                    teamPotes.splice(0, 1)
                                                }
                                                break;
                                            case 1:
                                                if(potes[index]){    
                                                    newPrevFaseDeGrupos(teamPotes[0], undefined, 2)
                                                    teamPotes.splice(0, 1)
                                                }
                                                break;
                                            case 2:
                                                if(potes[index]){
                                                    newPrevFaseDeGrupos(teamPotes[0], undefined, 3)
                                                    teamPotes.splice(0, 1)
                                                }
                                                break;
                                            case 3:
                                                if(potes[index]){
                                                    newPrevFaseDeGrupos(teamPotes[0], undefined, 4)
                                                    teamPotes.splice(0, 1)
                                                }
                                                break;
                                        }   
                                    }    
                                }
                            }
                        }else if(element.pos <= faseGrupos + segundaFase){
                            if(element.time == sulCampeao.time || element.time == campeao.time){
                                totalVagas++
                                segundaFase++
                            }else{
                                newPrevSegundaFase(element)    
                            }
                        }else{
                            if(element.pos <= faseGrupos + segundaFase + qtVagasFaseUm){
                                if(element.time == sulCampeao.time || element.time == campeao.time){
                                    totalVagas++
                                    qtVagasFaseUm++
                                }else{
                                    newPrevPrimeiraFase(element)
                                }
                            }
                        }
                    }
                })

            }else{
                campeonato.forEach((element) => {
                    if(element.pos <= totalVagas){
                        if(element.pos <= faseGrupos){
                            teamPotes.push(element)

                            if(element.pos == faseGrupos){
                                for (let index=0; index < potes.length; index++) {
                                    switch (index) {
                                        case 0:    
                                            if(potes[index]){
                                                newPrevFaseDeGrupos(teamPotes[0], undefined, 1)                          
                                                teamPotes.splice(0, 1)
                                            }
                                            break;
                                        case 1:
                                            if(potes[index]){    
                                                newPrevFaseDeGrupos(teamPotes[0], undefined, 2)
                                                teamPotes.splice(0, 1)
                                            }
                                            break;
                                        case 2:
                                            if(potes[index]){
                                                newPrevFaseDeGrupos(teamPotes[0], undefined, 3)
                                                teamPotes.splice(0, 1)
                                            }
                                            break;
                                        case 3:
                                            if(potes[index]){
                                                newPrevFaseDeGrupos(teamPotes[0], undefined, 4)
                                                teamPotes.splice(0, 1)
                                            }
                                            break;
                                    }   
                                }
                            }

                        }else if(element.pos <= faseGrupos + segundaFase){
                            newPrevSegundaFase(element)
                        }else{
                            newPrevPrimeiraFase(element)
                        }
                    }
                })
            }
        }else{
            if(algumCampeao){
                if(campeonato[0].pais == 'brasil'){
                    let FSG = 4
                    let CopaDoBrasil = []
                    CopaDoBrasil.push(infoTeamCopa)
                    let Brasileirao = campeonato
                    let PT1 = true
                    let PT2 = true
                    let PT3 = true
                    let FS2 = 1

                    for(let index = 0; index < 10; index++){
                        if(index < FSG){
                            if(Brasileirao[0].time == campeao.time || Brasileirao[0].time == sulCampeao.time){
                                if(PT1){
                                    if(Brasileirao[0].time == teamCopa){  
                                        //newPrevFaseDeGrupos(CopaDoBrasil[0], undefined, 1)
                                        CopaDoBrasil.pop()
                                        Brasileirao.shift()
                                        FSG += 2
                                    }else{
                                        //newPrevFaseDeGrupos(Brasileirao[0], undefined, 1)
                                        Brasileirao.shift()
                                        FSG += 1
                                        PT1 = true
                                    }
                                }else if(PT2){
                                    if(Brasileirao[0].time == teamCopa){  
                                        //newPrevFaseDeGrupos(CopaDoBrasil[0], undefined, 1)
                                        CopaDoBrasil.pop()
                                        Brasileirao.shift()
                                        FSG += 1
                                    }else{
                                        //newPrevFaseDeGrupos(Brasileirao[0], undefined, 2)
                                        Brasileirao.shift()
                                        FSG += 1
                                        PT2 = true
                                    }
                                }else if(PT3){
                                    if(Brasileirao[0].time == teamCopa){  
                                        //newPrevFaseDeGrupos(CopaDoBrasil[0], undefined, 1)
                                        CopaDoBrasil.pop()
                                        Brasileirao.shift()
                                        FSG += 1
                                    }else{
                                        //newPrevFaseDeGrupos(Brasileirao[0], undefined, 1)
                                        Brasileirao.shift()
                                        FSG += 1
                                        PT3 = true
                                    }
                                }else{
                                    if(Brasileirao[0].time == teamCopa){  
                                        //newPrevFaseDeGrupos(CopaDoBrasil[0], undefined, 1)
                                        CopaDoBrasil.pop()
                                        Brasileirao.shift()
                                        FSG += 1
                                    }else{
                                        //newPrevFaseDeGrupos(Brasileirao[0], undefined, 1)
                                        FSG += 1
                                        Brasileirao.shift()
                                    }
                                }
                            }else{
                                if(PT1){
                                    if(Brasileirao[0].time == teamCopa){  
                                        newPrevFaseDeGrupos(CopaDoBrasil[0], undefined, 1)
                                        CopaDoBrasil.pop()
                                        Brasileirao.shift()
                                        FSG += 1
                                    }else{
                                        newPrevFaseDeGrupos(Brasileirao[0], undefined, 1)
                                        Brasileirao.shift()
                                        PT1 = false
                                    }
                                }else if(PT2){
                                    if(Brasileirao[0].time == teamCopa){  
                                        newPrevFaseDeGrupos(CopaDoBrasil[0], undefined, 2)
                                        CopaDoBrasil.pop()
                                        Brasileirao.shift()
                                        FSG += 1
                                    }else{
                                        newPrevFaseDeGrupos(Brasileirao[0], undefined, 2)
                                        Brasileirao.shift()
                                        PT2 = false
                                    }
                                }else if(PT3){
                                    if(Brasileirao[0].time == teamCopa){  
                                        newPrevFaseDeGrupos(CopaDoBrasil[0], undefined, 2)
                                        CopaDoBrasil.pop()
                                        Brasileirao.shift()
                                        FSG += 1
                                    }else{
                                        newPrevFaseDeGrupos(Brasileirao[0], undefined, 3)
                                        Brasileirao.shift()
                                        PT3 = false
                                    }
                                }else{
                                    if(Brasileirao[0].time == teamCopa){  
                                        newPrevFaseDeGrupos(CopaDoBrasil[0], undefined, 2)
                                        CopaDoBrasil.pop()
                                        Brasileirao.shift()
                                        FSG += 1
                                    }else{
                                        newPrevFaseDeGrupos(Brasileirao[0], undefined, 4)
                                        Brasileirao.shift()
                                    }
                                }
                            }

                        }else{

                            if(index < FS2 + FSG){
                                if(Brasileirao[0].time == campeao.time || Brasileirao[0].time == sulCampeao.time){
                                    if(Brasileirao[0].time == teamCopa){  
                                        //newPrevFaseDeGrupos(CopaDoBrasil[0], undefined, 1)
                                        CopaDoBrasil.pop()
                                        Brasileirao.shift()
                                        FS2 += 1
                                    }else{
                                        //newPrevFaseDeGrupos(Brasileirao[0], undefined, 1)
                                        Brasileirao.shift()
                                        FS2 += 1
                                    }
                                }else{
                                    if(Brasileirao[0].time == teamCopa){  
                                        newPrevFaseDeGrupos(CopaDoBrasil[0], undefined, 2)
                                        CopaDoBrasil.pop()
                                        Brasileirao.shift()
                                        FS2 += 1
                                    }else{
                                        newPrevSegundaFase(Brasileirao[0])
                                        Brasileirao.shift()
                                    }
                                }
                            }else{
                                if(CopaDoBrasil.length == 1){
                                    newPrevFaseDeGrupos(CopaDoBrasil[0], undefined, 2)
                                    CopaDoBrasil.pop()
                                }
                            }
                        }

                    }

                }else{}

            }else{
                let CopaTeamClassificado = false
                let pt1 = []
                let pt2 = []
                let pt3 = []
                let pt4 = []
                let sgfase = []
                let situacao = 'indefinido'

                for (let index = 0; index < campeonato.length; index++) {
                    switch (index) {
                        case 0:
                            if(potes[index]){
                                if(campeonato[index].time == teamCopa){
                                    if(campeonato[index].pais == 'colombia'){
                                        newPrevFaseDeGrupos(campeonato[index], undefined, 1)    
                                        newPrevFaseDeGrupos(campeonato[index + 1], undefined, 3)    
                                        newPrevSegundaFase(campeonato[index + 2])
                                    }else{
                                        newPrevFaseDeGrupos(campeonato[index], undefined, 1)
                                    }
                                }else{
                                    if(campeonato[index].pais == 'colombia'){
                                        newPrevFaseDeGrupos(campeonato[index], undefined, 1)    
                                        if(campeonato[index + 1].time == teamCopa){
                                            newPrevFaseDeGrupos(campeonato[index + 1], undefined, 3)        
                                            newPrevSegundaFase(campeonato[index + 2])
                                        }else{
                                            newPrevFaseDeGrupos(infoTeamCopa, undefined, 3)                                                
                                            newPrevSegundaFase(campeonato[index + 1])
                                        }
                                    }else{
                                        if(campeonato[index].pais != 'bolivia' || campeonato[index].pais != 'chile'){
                                            newPrevFaseDeGrupos(campeonato[index], undefined, 1)
                                        }
                                    }
                                }    
                            }
                            break;
                        case 1:
                            if(potes[index]){
                                if(campeonato[index].time == teamCopa){
                                    if(campeonato[index].pais == 'méxico'){
                                        newPrevFaseDeGrupos(campeonato[index], undefined, 2)
                                        newPrevFaseDeGrupos(campeonato[index + 1], undefined, 4)
                                        newPrevSegundaFase(campeonato[index + 2])
                                        CopaTeamClassificado = true
                                        situacao = 'definido'
                                    }else if(campeonato[index].pais == 'chile'){
                                        newPrevFaseDeGrupos(campeonato[index - 1], undefined, 2)    
                                        newPrevFaseDeGrupos(campeonato[index], undefined, 3)        
                                        newPrevSegundaFase(campeonato[index + 1])
                                    }else{
                                        newPrevFaseDeGrupos(campeonato[index], undefined, 2)
                                        CopaTeamClassificado = true
                                    }
                                }else if(CopaTeamClassificado){

                                    if(campeonato[index].pais == 'brasil'){
                                        newPrevFaseDeGrupos(campeonato[index], undefined, 2)
                                        newPrevFaseDeGrupos(campeonato[index + 1], undefined, 2)
                                        newPrevFaseDeGrupos(campeonato[index + 2], undefined, 3)
                                        newPrevFaseDeGrupos(campeonato[index + 3], undefined, 4)
                                        newPrevSegundaFase(campeonato[index + 4])
                                        situacao = 'definido'
                                    }else if(campeonato[index].pais == 'argentina'){
                                        newPrevFaseDeGrupos(campeonato[index], undefined, 2)
                                        newPrevFaseDeGrupos(campeonato[index + 1], undefined, 2)
                                        newPrevFaseDeGrupos(campeonato[index + 2], undefined, 3)
                                        newPrevSegundaFase(campeonato[index + 3])
                                        situacao = 'definido'
                                    }else if(campeonato[index].pais == 'méxico'){
                                        newPrevFaseDeGrupos(campeonato[index], undefined, 2)
                                        newPrevFaseDeGrupos(campeonato[index + 1], undefined, 4)
                                        newPrevSegundaFase(campeonato[index + 2])
                                        situacao = 'definido'
                                    }
                                    
                                }else{

                                    if(campeonato[index].pais == 'brasil'){
                                        newPrevFaseDeGrupos(campeonato[index], undefined, 2)
                                    }else if(campeonato[index].pais == 'argentina'){
                                        newPrevFaseDeGrupos(campeonato[index], undefined, 2)
                                    }else if(campeonato[index].pais == 'méxico'){
                                        newPrevFaseDeGrupos(campeonato[index], undefined, 2)
                                        if(campeonato[index + 1].time == teamCopa){
                                            newPrevFaseDeGrupos(campeonato[index + 1], undefined, 4)
                                            newPrevSegundaFase(campeonato[index + 2])
                                        }else{
                                            newPrevFaseDeGrupos(infoTeamCopa, undefined, 4)
                                            newPrevSegundaFase(campeonato[index + 1])
                                        }
                                    }else{ //chile
                                        if(campeonato[index - 1].time == teamCopa){
                                            newPrevFaseDeGrupos(campeonato[index - 1], undefined, 2)    
                                            newPrevFaseDeGrupos(campeonato[index], undefined, 3)    
                                            newPrevSegundaFase(campeonato[index + 1])
                                        }else{    
                                            newPrevFaseDeGrupos(campeonato[index - 1], undefined, 2)
                                            newPrevFaseDeGrupos(infoTeamCopa, undefined, 3)                                                
                                            newPrevSegundaFase(campeonato[index])
                                        }
                                    }

                                }    
                            }
                            break;
                        case 2:
                            if(potes[index]){
                                if(campeonato[index].time == teamCopa){

                                    if(campeonato[index].pais == 'brasil'){
                                        newPrevFaseDeGrupos(campeonato[index], undefined, 2)
                                        newPrevFaseDeGrupos(campeonato[index + 1], undefined, 3)
                                        newPrevFaseDeGrupos(campeonato[index + 2], undefined, 4)
                                        newPrevSegundaFase(campeonato[index + 3])
                                        CopaTeamClassificado = true
                                        situacao = 'definido'
                                    }else if(campeonato[index].pais == 'argentina'){
                                        newPrevFaseDeGrupos(campeonato[index], undefined, 2)
                                        newPrevFaseDeGrupos(campeonato[index + 1], undefined, 3)
                                        newPrevSegundaFase(campeonato[index + 2])
                                        CopaTeamClassificado = true
                                        situacao = 'definido'
                                    }

                                }else if(CopaTeamClassificado && situacao != 'definido'){

                                    if(campeonato[index].pais == 'brasil'){
                                        newPrevFaseDeGrupos(campeonato[index], undefined, 2)
                                        newPrevFaseDeGrupos(campeonato[index + 1], undefined, 3)
                                        newPrevFaseDeGrupos(campeonato[index + 2], undefined, 4)
                                        newPrevSegundaFase(campeonato[index + 3])
                                        situacao = 'definido'
                                    }else if(campeonato[index].pais == 'argentina'){
                                        newPrevFaseDeGrupos(campeonato[index], undefined, 2)
                                        newPrevFaseDeGrupos(campeonato[index + 1], undefined, 3)
                                        newPrevSegundaFase(campeonato[index + 2])
                                        situacao = 'definido'
                                    }

                                }else{
                                    if(CopaTeamClassificado == false){
                                        if(campeonato[index].pais == 'brasil'){
                                            newPrevFaseDeGrupos(campeonato[index], undefined, 3)
                                        }else if(campeonato[index].pais == 'bolivia'){
                                            newPrevFaseDeGrupos(campeonato[index - 2], undefined, 3)
                                            newPrevSegundaFase(campeonato[index - 1])
                                            newPrevSegundaFase(campeonato[index])
                                        }else if(campeonato[index].pais == 'argentina'){
                                            newPrevFaseDeGrupos(campeonato[index], undefined, 3)
                                        }else{
                                            newPrevFaseDeGrupos(campeonato[index - 2], undefined, 3)  
                                        }
                                    }
                                }
                            }
                            break;
                        case 3:
                            if(campeonato[index].pais == 'brasil'){
                                if(CopaTeamClassificado != true){
                                    if(campeonato[index].time == teamCopa){
                                        newPrevFaseDeGrupos(campeonato[index], undefined, 2)
                                        newPrevFaseDeGrupos(campeonato[index + 1], undefined, 4)
                                        newPrevSegundaFase(campeonato[index + 2])
                                    }else if(campeonato[index + 1].time == teamCopa){
                                        newPrevFaseDeGrupos(campeonato[index], undefined, 4)
                                        newPrevFaseDeGrupos(campeonato[index + 1], undefined, 2)
                                        newPrevSegundaFase(campeonato[index + 2])
                                    }else{
                                        newPrevFaseDeGrupos(infoTeamCopa, undefined, 2)
                                        newPrevFaseDeGrupos(campeonato[index], undefined, 4)
                                        newPrevSegundaFase(campeonato[index + 1])
                                    }
                                }
                            }else if(campeonato[index].pais == 'argentina'){

                                if(CopaTeamClassificado != true){
                                    if(campeonato[index].time == teamCopa){
                                        newPrevFaseDeGrupos(campeonato[index], undefined, 2)
                                        newPrevSegundaFase(campeonato[index + 1])
                                    }else{
                                        newPrevFaseDeGrupos(infoTeamCopa, undefined, 2)
                                        newPrevSegundaFase(campeonato[index])
                                    }   
                                }

                            }
                            break;
                    
                        case 4:
                            console.log('SEGUNDA FASE')
                            break;
                    }
                }
                console.log('||||||||||||||||||||||||||||||||| POTES |||||||||||||||||||||||||||||||||')
                //if(pt1[0].pais == 'brasil'){
                //    //console.log(pt1)
                //    //console.log(pt2)
                //    //console.log(pt3)
                //    //console.log(pt4)
                //    //console.log(sgfase)
                //}else{
                //    console.log(pt1[0].pais)
                //}
                console.log('||||||||||||||||||||||||||||||||| POTES |||||||||||||||||||||||||||||||||')
            }
        }
    }       


    function addTeamsConcacaf(liga, pos){
        let campeonato = liga
        let posArray = pos
        let algumCampeao = false

        if(sulCampeao.pais == campeonato[0].pais || campeao.pais == campeonato[0].pais){
            algumCampeao = true
        }

        if(algumCampeao){
            if(sulCampeao.time == campeonato[0].time || campeao.time == campeonato[0].time){
                if(sulCampeao.time == campeonato[1].time || campeao.time == campeonato[1].time){
                    newPrevConcacaf(campeonato[2], posArray)    
                }else{
                    newPrevConcacaf(campeonato[1], posArray)    
                }
            }else{
                newPrevConcacaf(campeonato[0], posArray)
            }
        }else{
            newPrevConcacaf(campeonato[0], posArray)
        }
    }

    async function sortClashes(){
        let stadium = document.querySelectorAll('.stadium')
        let PlayoffsConcacaf = previaConcacaf
        let jogo1 = []
        let jogo2 = []
        let jogo3 = []
      
        if(previaConcacaf.length != 6){
            alert('Sorteio dos confrontos já concluido')
            return
        }

        for(let v = 0; v < 6; v++){
            let numAleatorio = Math.floor(Math.random() * PlayoffsConcacaf.length)

            switch (v) {
                case 0:
                    jogo1.push(PlayoffsConcacaf[numAleatorio])
                    stadium[0].innerText = jogo1[0].estadio
                    PlayoffsConcacaf.splice(numAleatorio, 1)   
                    break;

                case 1:
                    jogo1.push(PlayoffsConcacaf[numAleatorio])
                    stadium[1].innerText = jogo1[1].estadio
                    PlayoffsConcacaf.splice(numAleatorio, 1)       
                    sessionStorage.setItem('concacaf-1', JSON.stringify(jogo1)) 
                    break;

                case 2:
                    jogo2.push(PlayoffsConcacaf[numAleatorio])
                    stadium[2].innerText = jogo2[0].estadio
                    PlayoffsConcacaf.splice(numAleatorio, 1)        
                    break;

                case 3:
                    jogo2.push(PlayoffsConcacaf[numAleatorio])
                    stadium[3].innerText = jogo2[1].estadio
                    PlayoffsConcacaf.splice(numAleatorio, 1)       
                    sessionStorage.setItem('concacaf-2', JSON.stringify(jogo2)) 
                    break;

                case 4:
                    jogo3.push(PlayoffsConcacaf[numAleatorio])
                    stadium[4].innerText = jogo3[0].estadio
                    PlayoffsConcacaf.splice(numAleatorio, 1)        
                    break;

                case 5:
                    jogo3.push(PlayoffsConcacaf[numAleatorio])
                    stadium[5].innerText = jogo3[1].estadio
                    PlayoffsConcacaf.splice(numAleatorio, 1)       
                    sessionStorage.setItem('concacaf-3', JSON.stringify(jogo3)) 
                    break;
            }
        }

        addMoreTeam(brasil, 5, 4, 1, false, false, true,true,true,true,true,2,copaBrasil.time,copaBrasil)
        addMoreTeam(argentina, 4, 3, 1, false, false, true,true,true,true,false,2,copaArgentina.time,copaArgentina)
        addMoreTeam(colombia, 2, 1, 1, false, false, true,true,false,false,false,3,copaColombia.time,copaColombia)
        addMoreTeam(chile, 2, 1, 1, false, false, true,false,true,false,false,3,copaChile.time,copaChile)
        addMoreTeam(uruguai, 4, 2, 1, true, false, false,true,false,true,false,false,false,false)
        addMoreTeam(paraguai, 4, 2, 1, true, false, false,true,false,false,true,false,false,false)
        addMoreTeam(peru, 3, 1, 1, true, false, false,false,false,true,false,false,false,false)
        addMoreTeam(bolivia, 3, 1, 2, false, false, false,false,false,true,false,false,false,false)
        addMoreTeam(equador, 3, 1, 1, false, true, false, false,true,false,false,false,false,false)
        addMoreTeam(venezuela, 3, 1, 1, false, true, false, false,false,true,false,false,false,false)
        addMoreTeam(mexico, 3, 2, 1, false, false, true,true,true,false,false,4,copaMexico.time,copaMexico)
        addMoreTeam(eua, 4, 2, 1, false, true, false, false,true,false,true,false,false,false)
        //liga, qtVagas, vagasDiretas, faseDois, faseUm, playoffs,copa, pote1,pote2,pote3,pote4,poteCopa,camCopa,teamCampeao
        responsivePage()
        newPrevConcacaf('concluido', 6)
    }


    function addEventButton(){
        let spanTeam = document.querySelectorAll('span.team')
        let resultsGames = document.querySelectorAll('.input-time-resultado')
        let containerPenaltis = document.querySelectorAll('.penaltis')
        let resultPenaltis = document.querySelectorAll('.input-resultado-penaltis')
        let buttonSaveResult = document.querySelectorAll('.btnSalvarResultado')

        buttonSaveResult[0].addEventListener('click', function setResult(){
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

            sessionStorage.setItem('JgConcacaf-1', JSON.stringify(jogo1))
            saveResults1 = JSON.parse(sessionStorage.getItem('JgConcacaf-1'))

            resultsGames[0].setAttribute('readonly', 'readonly')
            resultsGames[1].setAttribute('readonly', 'readonly')

            this.classList.add('btn-disabled')
            this.removeEventListener('click', setResult)
        })
        buttonSaveResult[1].addEventListener('click', function setResult(){
            confronto1 = JSON.parse(sessionStorage.getItem('concacaf-1'))
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

            sessionStorage.setItem('JgConcacaf-2', JSON.stringify(jogo2))

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
                sessionStorage.setItem('Pen1Concacaf', JSON.stringify(Penaltis1))

                if(penalt1 > penalt2 ){
                    spanTeam[0].classList.add('eliminado') 
                    spanTeam[3].classList.add('eliminado')

                    newPrevPlayoffs(confronto1[1], 0)
                }else{
                    spanTeam[1].classList.add('eliminado')
                    spanTeam[2].classList.add('eliminado')

                    newPrevPlayoffs(confronto1[0], 0)
                }                
            }else if(golFora){
                if(resultsGames[1].value > resultsGames[3].value){
                    spanTeam[0].classList.add('eliminado') 
                    spanTeam[3].classList.add('eliminado')

                    newPrevPlayoffs(confronto1[1], 0)    
                }else{
                    spanTeam[1].classList.add('eliminado')
                    spanTeam[2].classList.add('eliminado')
    
                    newPrevPlayoffs(confronto1[0], 0)                    
                }
            }else{
                if(acumuladoGols1 > acumuladoGols2){
                    spanTeam[1].classList.add('eliminado')
                    spanTeam[2].classList.add('eliminado')
    
                    newPrevPlayoffs(confronto1[0], 0)
                }else{
                    spanTeam[0].classList.add('eliminado') 
                    spanTeam[3].classList.add('eliminado')

                    newPrevPlayoffs(confronto1[1], 0)
                }
            }

            this.classList.add('btn-disabled')
            this.removeEventListener('click', setResult)
        })
        buttonSaveResult[2].addEventListener('click', function setResult(){
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

            sessionStorage.setItem('JgConcacaf-3', JSON.stringify(jogo1))
            saveResults3 = JSON.parse(sessionStorage.getItem('JgConcacaf-3'))

            resultsGames[4].setAttribute('readonly', 'readonly')
            resultsGames[5].setAttribute('readonly', 'readonly')

            this.classList.add('btn-disabled')
            this.removeEventListener('click', setResult)
        })
        buttonSaveResult[3].addEventListener('click', function setResult(){
            confronto2 = JSON.parse(sessionStorage.getItem('concacaf-2'))
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

            sessionStorage.setItem('JgConcacaf-4', JSON.stringify(jogo2))

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
                let Penaltis2 = []

                if(!penalt1 || !penalt2)return

                resultPenaltis[2].setAttribute('readonly', 'readonly')
                resultPenaltis[3].setAttribute('readonly', 'readonly')

                Penaltis2[0] = Number(penalt1)
                Penaltis2[1] = Number(penalt2)
                sessionStorage.setItem('Pen2Concacaf', JSON.stringify(Penaltis2))

                if(penalt1 > penalt2 ){
                    spanTeam[4].classList.add('eliminado') 
                    spanTeam[7].classList.add('eliminado')
    
                    newPrevPlayoffs(confronto2[1], 1)                    
                }else{
                    spanTeam[5].classList.add('eliminado')
                    spanTeam[6].classList.add('eliminado')

                    newPrevPlayoffs(confronto2[0], 1)
                }                
            }else if(golFora){
                if(resultsGames[5].value > resultsGames[7].value){
                    spanTeam[4].classList.add('eliminado') 
                    spanTeam[7].classList.add('eliminado')
    
                    newPrevPlayoffs(confronto2[1], 1)                    
                }else{
                    spanTeam[5].classList.add('eliminado')
                    spanTeam[6].classList.add('eliminado')

                    newPrevPlayoffs(confronto2[0], 1)    
                }
            }else{
                if(acumuladoGols1 > acumuladoGols2){
                    spanTeam[5].classList.add('eliminado')
                    spanTeam[6].classList.add('eliminado')

                    newPrevPlayoffs(confronto2[0], 1)
                }else{
                    spanTeam[4].classList.add('eliminado') 
                    spanTeam[7].classList.add('eliminado')

                    newPrevPlayoffs(confronto2[1], 1)    
                }
            }

            this.classList.add('btn-disabled')
            this.removeEventListener('click', setResult)
        })
        buttonSaveResult[4].addEventListener('click', function setResult(){
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

            sessionStorage.setItem('JgConcacaf-5', JSON.stringify(jogo1))
            saveResults5 = JSON.parse(sessionStorage.getItem('JgConcacaf-5'))

            resultsGames[8].setAttribute('readonly', 'readonly')
            resultsGames[9].setAttribute('readonly', 'readonly')

            this.classList.add('btn-disabled')
            this.removeEventListener('click', setResult)
        })
        buttonSaveResult[5].addEventListener('click', function setResult(){
            confronto2 = JSON.parse(sessionStorage.getItem('concacaf-3'))
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

            sessionStorage.setItem('JgConcacaf-6', JSON.stringify(jogo2))

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
                let Penaltis3 = []

                if(!penalt1 || !penalt2)return

                resultPenaltis[4].setAttribute('readonly', 'readonly')
                resultPenaltis[5].setAttribute('readonly', 'readonly')

                Penaltis3[0] = Number(penalt1)
                Penaltis3[1] = Number(penalt2)
                sessionStorage.setItem('Pen3Concacaf', JSON.stringify(Penaltis3))

                if(penalt1 > penalt2 ){
                    spanTeam[8].classList.add('eliminado') 
                    spanTeam[11].classList.add('eliminado')

                    newPrevPlayoffs(confronto3[1], 2)    
                }else{
                    spanTeam[9].classList.add('eliminado')
                    spanTeam[10].classList.add('eliminado')

                    newPrevPlayoffs(confronto3[0], 2)
                }                
            }else if(golFora){
                if(resultsGames[9].value > resultsGames[11].value){
                    spanTeam[8].classList.add('eliminado') 
                    spanTeam[11].classList.add('eliminado')

                    newPrevPlayoffs(confronto3[1], 2)    
                }else{
                    spanTeam[9].classList.add('eliminado')
                    spanTeam[10].classList.add('eliminado')
                    
                    newPrevPlayoffs(confronto3[0], 2)    
                }
            }else{
                if(acumuladoGols1 > acumuladoGols2){
                    spanTeam[9].classList.add('eliminado')
                    spanTeam[10].classList.add('eliminado')
                    
                    newPrevPlayoffs(confronto3[0], 2)    
                }else{
                    spanTeam[8].classList.add('eliminado') 
                    spanTeam[11].classList.add('eliminado')

                    newPrevPlayoffs(confronto3[1], 2)
                }
            }

            this.classList.add('btn-disabled')
            this.removeEventListener('click', setResult)
        })
    }

    setTimeout(addEventButton, 200)

    function addTeams(liga, vagasT, vagasD, vagasS, faseUm){
        let campeonato = liga
        let totalVagas = vagasT
        let vagasDiretas = vagasD
        let vagasSegundaFase = vagasS
        let FaseUm = faseUm
        let algumCampeao = false

        if(sulCampeao.pais == campeonato[0].pais || campeao.pais == campeonato[0].pais){
            algumCampeao = true
        }

        if(FaseUm){
            if(algumCampeao){
                campeonato.forEach(element => {
                    if(element.pos <= totalVagas){
                        if(element.time == campeao.time
                             && element.pais == campeao.pais
                                || element.time == sulCampeao.time
                                    && element.pais == sulCampeao.pais){
                                        totalVagas += 1                                                        
                                        if(element.pos <= vagasDiretas){
                                            vagasDiretas += 1
                                        }
                        }else if(element.pos <= vagasDiretas){
                            newPrevFaseDeGrupos(element)
                        }else if(element.pos <= vagasDiretas + vagasSegundaFase){
                            newPrevSegundaFase(element)
                        }else{
                            primeiraFase.push(element)
                        }
                    }
                });
            }else{
                campeonato.forEach(element => {
                    if(element.pos <= totalVagas){
                        if(element.pos <= vagasDiretas){
                            newPrevFaseDeGrupos(element)
                        }else if(element.pos <= totalVagas - 1){
                            newPrevSegundaFase(element)
                        }else{
                            primeiraFase.push(element)
                        }
                    }
                })
            }
        }else{
            if(algumCampeao){
                campeonato.forEach(element => {
                    if(element.pos <= totalVagas){
                        if(element.time == campeao.time
                             && element.pais == campeao.pais
                                || element.time == sulCampeao.time
                                    && element.pais == sulCampeao.pais){
                                        totalVagas += 1                                                        
                                        if(element.pos <= vagasDiretas){
                                            vagasDiretas += 1
                                        }
                        }else if(element.pos <= vagasDiretas){
                            newPrevFaseDeGrupos(element)
                        }else if(element.pos <= vagasDiretas + vagasSegundaFase){
                            newPrevSegundaFase(element)
                        }
                    }
                });
            }else{
                campeonato.forEach(element => {
                    if(element.pos <= totalVagas){
                        if(element.pos <= vagasDiretas){
                            newPrevFaseDeGrupos(element)
                        }else{
                            newPrevSegundaFase(element)
                        }
                    }
                })
            }
        }
    }

    carregarTimesConcacaf()
    carregarTimes()

    confronto1 = JSON.parse(sessionStorage.getItem('concacaf-1'))
    confronto2 = JSON.parse(sessionStorage.getItem('concacaf-2'))
    confronto3 = JSON.parse(sessionStorage.getItem('concacaf-3'))

    console.log(JSON.parse(sessionStorage.getItem('concacaf-1')))

    return(
        <>
            <Header fases='playoffs da concacaf' previousLink='' nextLink='/playoffs'/>

            <div className="fasesEliminatorias">
                <h2>jogos</h2>

                <div className="confrontos">
                    <div className="confrontoUm">
                        <div className="ida">
                            <p className="information-jogo">terça <span className="stadium">{confronto1 && confronto1[0].estadio}</span> 19:30</p>
                            <p className='gameInformation'>
                                <span className='team Concacaf'>
                                    
                                </span>
                                <span className="containerInput">
                                    {saveResults1 ? 
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
                                    {saveResults1 ? 
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
                                <span className='team Concacaf'>
                                    
                                </span> 
                            </p>                                
                            
                            <div className="containerBtnSalvar">
                                <button className='button btnSalvarResultado'>salvar</button>
                            </div>
                        </div>

                        <div className="volta">
                            <p className="information-jogo">quarta <span className="stadium">{confronto1 && confronto1[1].estadio}</span> 21:00</p>
                            <p className='gameInformation'>
                                <span className='team Concacaf'>
                                    
                                </span>
                                <span className="containerInput">
                                    {saveResults2 ? 
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
                                    {saveResults2 ? 
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
                                <span className='team Concacaf'>
                                    
                                </span>
                            </p> 

                            {infoPenalti1 != null ? 
                                <p className='penaltis on'>
                                    <span className="containerInput">
                                        <input type="text" className='input-resultado-penaltis' value={infoPenalti1[0]} readOnly/>
                                    </span>
                                    <span className="containerInput">
                                        <input type="text" className='input-resultado-penaltis' value={infoPenalti1[1]} readOnly/>
                                    </span>
                                </p>
                                :
                                <p className='penaltis'>
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
                                <span className='team Concacaf'>
                                    
                                </span>
                                <span className="containerInput">
                                    {saveResults3 ? 
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
                                    {saveResults3 ? 
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
                                <span className='team Concacaf'>
                                    
                                </span> 
                            </p>     

                            <div className="containerBtnSalvar">
                                <button className='button btnSalvarResultado'>salvar</button>
                            </div>
                        </div>

                        <div className="volta">
                            <p className="information-jogo">quinta <span className="stadium">{confronto2 && confronto2[1].estadio}</span> 20:00</p>
                            <p className='gameInformation'>
                                <span className='team Concacaf'>
                                    
                                </span>
                                <span className="containerInput">
                                    {saveResults4 ? 
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
                                    {saveResults4 ? 
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
                                <span className='team Concacaf'>
                                    
                                </span> 
                            </p>  

                            {infoPenalti2 != null ?
                                <p className="penaltis on">
                                    <span className="containerInput">
                                        <input type="text" className='input-resultado-penaltis' value={infoPenalti2[0]} readOnly/>
                                    </span>
                                    <span className="containerInput">
                                        <input type="text" className='input-resultado-penaltis' value={infoPenalti2[1]} readOnly/>
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
                                <span className='team Concacaf'>
                                    
                                </span>
                                <span className="containerInput">
                                    {saveResults5 ? 
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
                                    {saveResults5 ? 
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
                                <span className='team Concacaf'>
                                    
                                </span> 
                            </p>

                            <div className="containerBtnSalvar">
                                <button className='button btnSalvarResultado'>salvar</button>
                            </div>     
                        </div>

                        <div className="volta">
                            <p className="information-jogo">quinta <span className="stadium">{confronto3 && confronto3[1].estadio}</span> 20:30</p>
                            <p className='gameInformation'>
                                <span className='team Concacaf'>
                                    
                                </span>
                                <span className="containerInput">
                                    {saveResults6 ? 
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
                                    {saveResults6 ? 
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
                                <span className='team Concacaf'>
                                    
                                </span> 
                            </p>

                            {infoPenalti3 != null ?
                                <p className="penaltis on">
                                    <span className="containerInput">
                                        <input type="text" className='input-resultado-penaltis' value={infoPenalti3[0]} readOnly/>
                                    </span>
                                    <span className="containerInput">
                                        <input type="text" className='input-resultado-penaltis' value={infoPenalti3[1]} readOnly/>
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

            <div className='containerButton'>
                <button className='button' onClick={sortClashes}>
                    sortear
                </button>
            </div>
        </>
        
    )                        
}