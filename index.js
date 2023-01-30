let pote1 = [
    {time: 'river plate', pais: 'argentina', namePlacar: 'riv'}, 
    {time: 'boca juniors', pais: 'argentina', namePlacar: 'boc'},
    {time: 'flamengo', pais: 'brasil', namePlacar: 'fla'}, 
    {time: 'nacional-URU', pais: 'uruguai', namePlacar: 'nac'}, 
    {time: 'peñarol', pais: 'uruguai', namePlacar: 'pen'}, 
    {time: 'atletico MG', pais: 'brasil', namePlacar: 'cam'}, 
    {time: 'atletico PR', pais: 'brasil', namePlacar: 'cap'}
];
let pote2 = [
    {time: 'cerro porteño', pais: 'paraguai', namePlacar: 'ccp'},
    {time: 'libertad', pais: 'paraguai', namePlacar: 'lib'},
    {time: 'independiente del valle', pais: 'equador', namePlacar: 'idv'}, 
    {time: 'universidad católica', pais: 'chile', namePlacar: 'cat'},   
    {time: 'emelec', pais: 'equador', namePlacar: 'eme'}, 
    {time: 'corinthians', pais: 'brasil', namePlacar: 'cor'}, 
    {time: 'colo-colo', pais:'chile', namePlacar: 'col'}, 
    {time: 'vélez', pais: 'argentina', namePlacar: 'vel'}
];
let pote3 = [
    {time: 'sporting cristal', pais: 'peru', namePlacar: 'scl'}, 
    {time: 'deportivo cali', pais: 'colômbia', namePlacar: 'cal'}, 
    {time: 'bragantino', pais: 'brasil', namePlacar: 'bra'}, 
    {time: 'dep. táchira', pais: 'venezuela', namePlacar: 'tac'},
    {time: 'alianza lima', pais: 'peru', namePlacar: 'ali'},
    {time: 'tolima', pais: 'colômbia', namePlacar: 'tol'}, 
    {time: 'colón', pais: 'argentina', namePlacar: 'col'}, 
    {time: 'caracas', pais: 'venezuela', namePlacar: 'car'}
];
let pote4 = [
    {time: 'always ready', pais: 'bolivia', namePlacar: 'alw'},
    {time: 'talleres', pais: 'argentina', namePlacar: 'tal'},
    {time: 'independiente petrolero', pais: 'bolivia', namePlacar: 'pet'},
    {time: 'fortaleza', pais: 'brasil', namePlacar: 'for'},
    {time: 'olimpia', pais: 'paraguai', namePlacar: 'oli'},
    {time: 'estudiantes', pais: 'argentina', namePlacar: 'est'},
    {time: 'the strongest', pais: 'bolivia', namePlacar: 'str'},
    {time: 'américa MG', pais: 'brasil', namePlacar: 'ame'}
];

export let grupoA = [{time: 'palmeiras', pais: 'brasil', namePlacar: 'pal'}];
export let grupoB = [];
export let grupoC = [];
export let grupoD = [];
export let grupoE = [];
export let grupoF = [];
export let grupoG = [];
export let grupoH = [];

let tdTimes1 = document.querySelectorAll('td.cedula-time1 > abbr.cedula-time')
let tdTimes2 = document.querySelectorAll('td.cedula-time2 > abbr.cedula-time')
let tdTimes3 = document.querySelectorAll('td.cedula-time3 > abbr.cedula-time')
let tdTimes4 = document.querySelectorAll('td.cedula-time4 > abbr.cedula-time')

function setTeamWidthOnPage(time, largura){
    let team = time
    let widthPage = largura

    if(window.innerWidth > 700){
        return team.time
    }else{
        return team.namePlacar
    }
}

//FUNÇÕES SORTEIO DOS GRUPOS E ADD TIMES NA TABELA
function addTimesPote4(pote){
    let timesPotes = pote;

    for(let i = 8; i >= 0; i--){
        let numAleatorio = Math.floor(Math.random()*i);
        
        switch(i){
            case 0:
                
            case 1:
                grupoH.push(timesPotes[numAleatorio])
                pote4.splice(numAleatorio, 1)
                tdTimes4[7].innerText = setTeamWidthOnPage(grupoH[3], window.innerWidth)
                tdTimes4[7].setAttribute('title', grupoH[3].time.toUpperCase())
                break     
            case 2:
                grupoG.push(timesPotes[numAleatorio])
                pote4.splice(numAleatorio, 1)
                tdTimes4[6].innerText = setTeamWidthOnPage(grupoG[3], window.innerWidth)
                tdTimes4[6].setAttribute('title', grupoG[3].time.toUpperCase())
                break     
            case 3:
                grupoF.push(timesPotes[numAleatorio])
                pote4.splice(numAleatorio, 1)
                tdTimes4[5].innerText = setTeamWidthOnPage(grupoF[3], window.innerWidth)
                tdTimes4[5].setAttribute('title', grupoF[3].time.toUpperCase())
                break  
            case 4:
                grupoE.push(timesPotes[numAleatorio])
                pote4.splice(numAleatorio, 1)
                tdTimes4[4].innerText = setTeamWidthOnPage(grupoE[3], window.innerWidth)
                tdTimes4[4].setAttribute('title', grupoE[3].time.toUpperCase())
                break  
            case 5:
                grupoD.push(timesPotes[numAleatorio])
                pote4.splice(numAleatorio, 1)
                tdTimes4[3].innerText = setTeamWidthOnPage(grupoD[3], window.innerWidth)
                tdTimes4[3].setAttribute('title', grupoD[3].time.toUpperCase())
                break  
            case 6:
                grupoC.push(timesPotes[numAleatorio])
                pote4.splice(numAleatorio, 1)
                tdTimes4[2].innerText = setTeamWidthOnPage(grupoC[3], window.innerWidth)
                tdTimes4[2].setAttribute('title', grupoC[3].time.toUpperCase())
                break  
            case 7:
                grupoB.push(timesPotes[numAleatorio])
                pote4.splice(numAleatorio, 1)
                tdTimes4[1].innerText = setTeamWidthOnPage(grupoB[3], window.innerWidth)
                tdTimes4[1].setAttribute('title', grupoB[3].time.toUpperCase())
                break  
            case 8:
              grupoA.push(timesPotes[numAleatorio])
              pote4.splice(numAleatorio, 1)
              tdTimes4[0].innerText = setTeamWidthOnPage(grupoA[3], window.innerWidth)
              tdTimes4[0].setAttribute('title', grupoA[3].time.toUpperCase())
              break  
        }
    }    
}
function addTimesPote3(pote){
    let timesPotes = pote

    for(let i = 8; i >= 0; i--){
        let numAleatorio = Math.floor(Math.random()*i)
        
        switch(i){
            case 0:
                addTimesPote4(pote4)
            case 1:
                grupoH.push(timesPotes[numAleatorio])
                pote3.splice(numAleatorio, 1)
                if(grupoH[2].pais == grupoH[0].pais || grupoH[2].pais == grupoH[1].pais){
                    if(
                        grupoH[2].pais != grupoG[0].pais 
                            && grupoH[2].pais != grupoG[1].pais
                                && grupoG[2].pais !=  grupoH[0].pais
                                    && grupoG[2].pais != grupoH[1].pais
                        ){
                            let time1 = grupoH[2]
                            let time2 = grupoG[2]
                            grupoG[2] = time1
                            grupoH[2] = time2
                            tdTimes3[6].innerText = setTeamWidthOnPage(grupoG[2], window.innerWidth)
                            tdTimes3[6].setAttribute('title', grupoG[2].time.toUpperCase())
                    }else if(
                        grupoH[2].pais != grupoF[0].pais 
                            && grupoH[2].pais != grupoF[1].pais
                                && grupoF[2].pais !=  grupoH[0].pais
                                    && grupoF[2].pais != grupoH[1].pais
                        ){
                            let time1 = grupoH[2]
                            let time2 = grupoF[2]
                            grupoF[2] = time1
                            grupoH[2] = time2
                            tdTimes3[5].innerText = setTeamWidthOnPage(grupoF[2], window.innerWidth)
                            tdTimes3[5].setAttribute('title', grupoF[2].time.toUpperCase())
                    }else if(
                        grupoH[2].pais != grupoE[0].pais 
                            && grupoH[2].pais != grupoE[1].pais
                                && grupoE[2].pais !=  grupoH[0].pais
                                    && grupoE[2].pais != grupoH[1].pais
                        ){
                            let time1 = grupoH[2]
                            let time2 = grupoE[2]
                            grupoE[2] = time1
                            grupoH[2] = time2
                            tdTimes3[4].innerText = setTeamWidthOnPage(grupoE[2], window.innerWidth)
                            tdTimes3[4].setAttribute('title', grupoE[2].time.toUpperCase())
                    }else if(
                        grupoH[2].pais != grupoD[0].pais 
                            && grupoH[2].pais != grupoD[1].pais
                                && grupoD[2].pais !=  grupoH[0].pais
                                    && grupoD[2].pais != grupoH[1].pais
                    ){
                        let time1 = grupoH[2]
                        let time2 = grupoD[2]
                        grupoD[2] = time1
                        grupoH[2] = time2
                        tdTimes3[3].innerText = setTeamWidthOnPage(grupoD[2], window.innerWidth)
                        tdTimes3[3].setAttribute('title', grupoD[2].time.toUpperCase())
                    }else if(
                        grupoH[2].pais != grupoC[0].pais 
                            && grupoH[2].pais != grupoC[1].pais
                                && grupoC[2].pais !=  grupoH[0].pais
                                    && grupoC[2].pais != grupoH[1].pais
                    ){
                        let time1 = grupoH[2]
                        let time2 = grupoC[2]
                        grupoC[2] = time1
                        grupoH[2] = time2
                        tdTimes3[2].innerText = setTeamWidthOnPage(grupoC[2], window.innerWidth)
                        tdTimes3[2].setAttribute('title', grupoC[2].time.toUpperCase())
                    }else if(
                        grupoH[2].pais != grupoB[0].pais 
                            && grupoH[2].pais != grupoB[1].pais
                                && grupoB[2].pais !=  grupoH[0].pais
                                    && grupoB[2].pais != grupoH[1].pais
                    ){
                        let time1 = grupoH[2]
                        let time2 = grupoB[2]
                        grupoB[2] = time1
                        grupoH[2] = time2
                        tdTimes3[1].innerText = setTeamWidthOnPage(grupoB[2], window.innerWidth)
                        tdTimes3[1].setAttribute('title', grupoB[2].time.toUpperCase())
                    }else if(
                        grupoH[2].pais != grupoA[0].pais 
                            && grupoH[2].pais != grupoA[1].pais
                                && grupoA[2].pais !=  grupoH[0].pais
                                    && grupoA[2].pais != grupoH[1].pais
                    ){
                        let time1 = grupoH[2]
                        let time2 = grupoA[2]
                        grupoA[2] = time1
                        grupoH[2] = time2
                        tdTimes3[0].innerText = setTeamWidthOnPage(grupoA[2], window.innerWidth)
                        tdTimes3[0].setAttribute('title', grupoA[2].time.toUpperCase())
                    }
                }
                tdTimes3[7].innerText = setTeamWidthOnPage(grupoH[2], window.innerWidth)
                tdTimes3[7].setAttribute('title', grupoH[2].time.toUpperCase())
                break     
            case 2:
                grupoG.push(timesPotes[numAleatorio])
                pote3.splice(numAleatorio, 1)
                if(grupoG[2].pais == grupoG[0].pais || grupoG[2].pais == grupoG[1].pais){
                    if(
                        grupoG[2].pais != grupoF[0].pais 
                            && grupoG[2].pais != grupoF[1].pais
                                && grupoF[2].pais !=  grupoG[0].pais
                                    && grupoF[2].pais != grupoG[1].pais
                        ){
                            let time1 = grupoG[2]
                            let time2 = grupoF[2]
                            grupoF[2] = time1
                            grupoG[2] = time2
                            tdTimes3[5].innerText = setTeamWidthOnPage(grupoF[2], window.innerWidth)
                            tdTimes3[5].setAttribute('title', grupoF[2].time.toUpperCase())
                    }else if(
                        grupoG[2].pais != grupoE[0].pais 
                            && grupoG[2].pais != grupoE[1].pais
                                && grupoE[2].pais !=  grupoG[0].pais
                                    && grupoE[2].pais != grupoG[1].pais
                        ){
                            let time1 = grupoG[2]
                            let time2 = grupoE[2]
                            grupoE[2] = time1
                            grupoG[2] = time2
                            tdTimes3[4].innerText = setTeamWidthOnPage(grupoE[2], window.innerWidth)
                            tdTimes3[4].setAttribute('title', grupoE[2].time.toUpperCase())
                    }else if(
                        grupoG[2].pais != grupoD[0].pais 
                            && grupoG[2].pais != grupoD[1].pais
                                && grupoD[2].pais !=  grupoG[0].pais
                                    && grupoD[2].pais != grupoG[1].pais
                    ){
                        let time1 = grupoG[2]
                        let time2 = grupoD[2]
                        grupoD[2] = time1
                        grupoG[2] = time2
                        tdTimes3[3].innerText = setTeamWidthOnPage(grupoD[2], window.innerWidth)
                        tdTimes3[3].setAttribute('title', grupoD[2].time.toUpperCase())
                    }else if(
                        grupoG[2].pais != grupoC[0].pais 
                            && grupoG[2].pais != grupoC[1].pais
                                && grupoC[2].pais !=  grupoG[0].pais
                                    && grupoC[2].pais != grupoG[1].pais
                    ){
                        let time1 = grupoG[2]
                        let time2 = grupoC[2]
                        grupoC[2] = time1
                        grupoG[2] = time2
                        tdTimes3[2].innerText = setTeamWidthOnPage(grupoC[2], window.innerWidth)
                        tdTimes3[2].setAttribute('title', grupoC[2].time.toUpperCase())
                    }else if(
                        grupoG[2].pais != grupoB[0].pais 
                            && grupoG[2].pais != grupoB[1].pais
                                && grupoB[2].pais !=  grupoG[0].pais
                                    && grupoB[2].pais != grupoG[1].pais
                    ){
                        let time1 = grupoG[2]
                        let time2 = grupoB[2]
                        grupoB[2] = time1
                        grupoG[2] = time2
                        tdTimes3[1].innerText = setTeamWidthOnPage(grupoB[2], window.innerWidth)
                        tdTimes3[1].setAttribute('title', grupoB[2].time.toUpperCase())
                    }else if(
                        grupoG[2].pais != grupoA[0].pais 
                            && grupoG[2].pais != grupoA[1].pais
                                && grupoA[2].pais !=  grupoG[0].pais
                                    && grupoA[2].pais != grupoG[1].pais
                    ){
                        let time1 = grupoG[2]
                        let time2 = grupoA[2]
                        grupoA[2] = time1
                        grupoG[2] = time2
                        tdTimes3[0].innerText = setTeamWidthOnPage(grupoA[2], window.innerWidth)
                        tdTimes3[0].setAttribute('title', grupoA[2].time.toUpperCase())
                    }
                }
                tdTimes3[6].innerText = setTeamWidthOnPage(grupoG[2], window.innerWidth)
                tdTimes3[6].setAttribute('title', grupoG[2].time.toUpperCase())
                break     
            case 3:
                if(timesPotes[numAleatorio].pais == grupoF[0].pais || timesPotes[numAleatorio].pais == grupoF[1].pais){
                    do{
                        numAleatorio = Math.floor(Math.random()*i)
                    }while(timesPotes[numAleatorio].pais == grupoF[0].pais || timesPotes[numAleatorio].pais == grupoF[1].pais);
                    grupoF.push(timesPotes[numAleatorio])
                    pote3.splice(numAleatorio, 1)
                }else{
                    grupoF.push(timesPotes[numAleatorio])
                    pote3.splice(numAleatorio, 1)
                }
                tdTimes3[5].innerText = setTeamWidthOnPage(grupoF[2], window.innerWidth)
                tdTimes3[5].setAttribute('title', grupoF[2].time.toUpperCase())
                break
            case 4:
                if(timesPotes[numAleatorio].pais == grupoE[0].pais || timesPotes[numAleatorio].pais == grupoE[1].pais){
                    do{
                        numAleatorio = Math.floor(Math.random()*i)
                    }while(timesPotes[numAleatorio].pais == grupoE[0].pais || timesPotes[numAleatorio].pais == grupoE[1].pais);
                    grupoE.push(timesPotes[numAleatorio])
                    pote3.splice(numAleatorio, 1)
                }else{
                    grupoE.push(timesPotes[numAleatorio])
                    pote3.splice(numAleatorio, 1)
                }
                tdTimes3[4].innerText = setTeamWidthOnPage(grupoE[2], window.innerWidth)
                tdTimes3[4].setAttribute('title', grupoE[2].time.toUpperCase())
                break
            case 5:
                if(timesPotes[numAleatorio].pais == grupoD[0].pais || timesPotes[numAleatorio].pais == grupoD[1].pais){
                    do{
                        numAleatorio = Math.floor(Math.random()*i)
                    }while(timesPotes[numAleatorio].pais == grupoD[0].pais || timesPotes[numAleatorio].pais == grupoD[1].pais);
                    grupoD.push(timesPotes[numAleatorio])
                    pote3.splice(numAleatorio, 1)
                }else{
                    grupoD.push(timesPotes[numAleatorio])
                    pote3.splice(numAleatorio, 1)
                }
                tdTimes3[3].innerText = setTeamWidthOnPage(grupoD[2], window.innerWidth)
                tdTimes3[3].setAttribute('title', grupoD[2].time.toUpperCase())
                break
            case 6:    
            if(timesPotes[numAleatorio].pais == grupoC[0].pais || timesPotes[numAleatorio].pais == grupoC[1].pais){
                do{
                    numAleatorio = Math.floor(Math.random()*i)
                }while(timesPotes[numAleatorio].pais == grupoC[0].pais || timesPotes[numAleatorio].pais == grupoC[1].pais);
                grupoC.push(timesPotes[numAleatorio])
                pote3.splice(numAleatorio, 1)
            }else{
                grupoC.push(timesPotes[numAleatorio])
                pote3.splice(numAleatorio, 1)
            }
            tdTimes3[2].innerText = setTeamWidthOnPage(grupoC[2], window.innerWidth)
            tdTimes3[2].setAttribute('title', grupoC[2].time.toUpperCase())
              break  
            case 7:
                if(timesPotes[numAleatorio].pais == grupoB[0].pais || timesPotes[numAleatorio].pais == grupoB[1].pais){
                    do{
                        numAleatorio = Math.floor(Math.random()*i)
                    }while(timesPotes[numAleatorio].pais == grupoB[0].pais || timesPotes[numAleatorio].pais == grupoB[1].pais);
                    grupoB.push(timesPotes[numAleatorio])
                    pote3.splice(numAleatorio, 1)
                }else{
                    grupoB.push(timesPotes[numAleatorio])
                    pote3.splice(numAleatorio, 1)
                }
                tdTimes3[1].innerText = setTeamWidthOnPage(grupoB[2], window.innerWidth)
                tdTimes3[1].setAttribute('title', grupoB[2].time.toUpperCase())
              break  
            case 8:
              if(timesPotes[numAleatorio].pais == grupoA[0].pais || timesPotes[numAleatorio].pais == grupoA[1].pais){
                do{
                    numAleatorio = Math.floor(Math.random()*i)
                }while(timesPotes[numAleatorio].pais == grupoA[0].pais || timesPotes[numAleatorio].pais == grupoA[1].pais);
                grupoA.push(timesPotes[numAleatorio])
                pote3.splice(numAleatorio, 1)
            }else{
                grupoA.push(timesPotes[numAleatorio])
                pote3.splice(numAleatorio, 1)
            }
            tdTimes3[0].innerText = setTeamWidthOnPage(grupoA[2], window.innerWidth)
            tdTimes3[0].setAttribute('title', grupoA[2].time.toUpperCase())
          break  
        }
    }    
}
function addTimesPote2(pote){
    let timesPotes = pote

    for(let i = 8; i >= 0; i--){
        let numAleatorio = Math.floor(Math.random()*i)
        
        switch(i){
            case 0:
                addTimesPote3(pote3)
            case 1:
                grupoH.push(timesPotes[0])
                pote2.splice(0, 1)
                tdTimes2[7].innerText = setTeamWidthOnPage(grupoH[1], window.innerWidth) 
                tdTimes2[7].setAttribute('title', grupoH[1].time.toUpperCase())
                if(grupoH[1].pais == grupoH[0].pais){
                    if(grupoH[1].pais != grupoG[0].pais && grupoH[0].pais != grupoG[1].pais){
                        let time1 = grupoH[1]
                        let time2 = grupoG[1]
                        grupoH[1] = time2
                        grupoG[1] = time1
                        tdTimes2[6].innerText = setTeamWidthOnPage(grupoG[1], window.innerWidth)
                        tdTimes2[6].setAttribute('title', grupoG[1].time.toUpperCase())
                        tdTimes2[7].innerText = setTeamWidthOnPage(grupoH[1], window.innerWidth) 
                        tdTimes2[7].setAttribute('title', grupoH[1].time.toUpperCase())
                    }else if(grupoH[1].pais != grupoF[0].pais && grupoH[0].pais != grupoF[1].pais){
                        let time1 = grupoH[1]
                        let time2 = grupoF[1]
                        grupoH[1] = time2
                        grupoF[1] = time1
                        tdTimes2[5].innerText = setTeamWidthOnPage(grupoF[1], window.innerWidth)
                        tdTimes2[5].setAttribute('title', grupoF[1].time.toUpperCase())
                        tdTimes2[7].innerText = setTeamWidthOnPage(grupoH[1], window.innerWidth)
                        tdTimes2[7].setAttribute('title', grupoH[1].time.toUpperCase())
                    }else if(grupoH[1].pais != grupoE[0].pais && grupoH[0].pais != grupoE[1].pais){
                        let time1 = grupoH[1]
                        let time2 = grupoE[1]
                        grupoH[1] = time2
                        grupoE[1] = time1
                        tdTimes2[4].innerText = setTeamWidthOnPage(grupoE[1], window.innerWidth)
                        tdTimes2[4].setAttribute('title', grupoE[1].time.toUpperCase())
                        tdTimes2[7].innerText = setTeamWidthOnPage(grupoH[1], window.innerWidth)
                        tdTimes2[7].setAttribute('title', grupoH[1].time.toUpperCase())
                    }else if(grupoH[1].pais != grupoD[0].pais && grupoH[0].pais != grupoD[1].pais){
                        let time1 = grupoH[1]
                        let time2 = grupoD[1]
                        grupoH[1] = time2
                        grupoD[1] = time1
                        tdTimes2[3].innerText = setTeamWidthOnPage(grupoD[1], window.innerWidth)
                        tdTimes2[7].innerText = setTeamWidthOnPage(grupoH[1], window.innerWidth) 
                    }else if(grupoH[1].pais != grupoC[0].pais && grupoH[0].pais != grupoC[1].pais){
                        let time1 = grupoH[1]
                        let time2 = grupoC[1]
                        grupoH[1] = time2
                        grupoC[1] = time1
                        tdTimes2[2].innerText = setTeamWidthOnPage(grupoC[1], window.innerWidth)
                        tdTimes2[2].setAttribute('title', grupoC[1].time.toUpperCase())
                        tdTimes2[7].innerText = setTeamWidthOnPage(grupoH[1], window.innerWidth) 
                        tdTimes2[7].setAttribute('title', grupoH[1].time.toUpperCase())

                    }else{
                        let time1 = grupoH[1]
                        let time2 = grupoB[1]
                        grupoH[1] = time2
                        grupoB[1] = time1
                        tdTimes2[1].innerText = setTeamWidthOnPage(grupoB[1], window.innerWidth)
                        tdTimes2[1].setAttribute('title', grupoB[1].time.toUpperCase())
                        tdTimes2[7].innerText = setTeamWidthOnPage(grupoH[1], window.innerWidth)
                        tdTimes2[7].setAttribute('title', grupoH[1].time.toUpperCase())
                    }
                }
                break     
            case 2:
                grupoG.push(timesPotes[numAleatorio])
                pote2.splice(numAleatorio, 1)
                tdTimes2[6].innerText = setTeamWidthOnPage(grupoG[1], window.innerWidth)
                tdTimes2[6].setAttribute('title', grupoG[1].time.toUpperCase())
                if(grupoG[1].pais == grupoG[0].pais){
                    if(grupoG[1].pais != grupoF[0].pais && grupoF[1].pais != grupoG[0].pais){
                        let time1 = grupoG[1]
                        let time2 = grupoF[1]
                        grupoG[1] = time2
                        grupoF[1] = time1
                        tdTimes2[5].innerText = setTeamWidthOnPage(grupoF[1], window.innerWidth)
                        tdTimes2[5].setAttribute('title', grupoF[1].time.toUpperCase())
                        tdTimes2[6].innerText = setTeamWidthOnPage(grupoG[1], window.innerWidth)
                        tdTimes2[6].setAttribute('title', grupoG[1].time.toUpperCase())
                    }else if(grupoG[1].pais != grupoE[0].pais && grupoE[1].pais != grupoG[0].pais){
                        let time1 = grupoG[1]
                        let time2 = grupoE[1]
                        grupoG[1] = time2
                        grupoE[1] = time1
                        tdTimes2[4].innerText = setTeamWidthOnPage(grupoE[1], window.innerWidth)
                        tdTimes2[4].setAttribute('title', grupoE[1].time.toUpperCase())
                        tdTimes2[6].innerText = setTeamWidthOnPage(grupoG[1], window.innerWidth)
                        tdTimes2[6].setAttribute('title', grupoG[1].time.toUpperCase())
                    }else if(grupoG[1].pais != grupoD[0].pais && grupoD[1].pais != grupoG[0].pais){
                        let time1 = grupoG[1]
                        let time2 = grupoD[1]
                        grupoG[1] = time2
                        grupoD[1] = time1
                        tdTimes2[3].innerText = setTeamWidthOnPage(grupoD[1], window.innerWidth)
                        tdTimes2[3].setAttribute('title', grupoD[1].time.toUpperCase())
                        tdTimes2[6].innerText = setTeamWidthOnPage(grupoG[1], window.innerWidth)
                        tdTimes2[6].setAttribute('title', grupoG[1].time.toUpperCase())
                    }else if(grupoG[1].pais != grupoC[0].pais && grupoC[1].pais != grupoG[0].pais){
                        let time1 = grupoG[1]
                        let time2 = grupoC[1]
                        grupoG[1] = time2
                        grupoC[1] = time1
                        tdTimes2[2].innerText = setTeamWidthOnPage(grupoC[1], window.innerWidth)
                        tdTimes2[2].setAttribute('title', grupoC[1].time.toUpperCase())
                        tdTimes2[6].innerText = setTeamWidthOnPage(grupoG[1], window.innerWidth)
                        tdTimes2[6].setAttribute('title', grupoG[1].time.toUpperCase())
                    }else if(grupoG[1].pais != grupoB[0].pais && grupoB[1].pais != grupoG[0].pais){
                        let time1 = grupoG[1]
                        let time2 = grupoB[1]
                        grupoG[1] = time2
                        grupoB[1] = time1
                        tdTimes2[1].innerText = setTeamWidthOnPage(grupoB[1], window.innerWidth)
                        tdTimes2[1].setAttribute('title', grupoB[1].time.toUpperCase())
                        tdTimes2[6].innerText = setTeamWidthOnPage(grupoG[1], window.innerWidth)
                        tdTimes2[6].setAttribute('title', grupoG[1].time.toUpperCase())
                    }else{
                        let time1 = grupoG[1]
                        let time2 = grupoB[1]
                        grupoG[1] = time2
                        grupoA[1] = time1
                        tdTimes2[0].innerText = setTeamWidthOnPage(grupoA[1], window.innerWidth)
                        tdTimes2[0].setAttribute('title', grupoA[1].time.toUpperCase())
                        tdTimes2[6].innerText = setTeamWidthOnPage(grupoG[1], window.innerWidth)
                        tdTimes2[6].setAttribute('title', grupoG[1].time.toUpperCase())
                    }
                }
                break     
            case 3:
                if(grupoF[0].pais == timesPotes[numAleatorio].pais){
                    do{
                        numAleatorio = Math.floor(Math.random()*i)
                    }while(grupoF[0].pais == timesPotes[numAleatorio].pais)
                    grupoF.push(timesPotes[numAleatorio])
                    pote2.splice(numAleatorio, 1)
                }else{
                    grupoF.push(timesPotes[numAleatorio])
                    pote2.splice(numAleatorio, 1)
                }
                tdTimes2[5].innerText = setTeamWidthOnPage(grupoF[1], window.innerWidth)
                tdTimes2[5].setAttribute('title', grupoF[1].time.toUpperCase())
                break
            case 4:
                if(grupoE[0].pais == timesPotes[numAleatorio].pais){
                    do{
                        numAleatorio = Math.floor(Math.random()*i)
                    }while(grupoE[0].pais == timesPotes[numAleatorio].pais)
                    grupoE.push(timesPotes[numAleatorio])
                    pote2.splice(numAleatorio, 1)
                }else{
                    grupoE.push(timesPotes[numAleatorio])
                    pote2.splice(numAleatorio, 1)
                }
                tdTimes2[4].innerText = setTeamWidthOnPage(grupoE[1], window.innerWidth)
                tdTimes2[4].setAttribute('title', grupoE[1].time.toUpperCase())
                break  
            case 5:
                if(grupoD[0].pais == timesPotes[numAleatorio].pais){
                    do{
                        numAleatorio = Math.floor(Math.random()*i)
                    }while(grupoD[0].pais == timesPotes[numAleatorio].pais)
                    grupoD.push(timesPotes[numAleatorio])
                    pote2.splice(numAleatorio, 1)
                }else{
                    grupoD.push(timesPotes[numAleatorio])
                    pote2.splice(numAleatorio, 1)
                }
                tdTimes2[3].innerText = setTeamWidthOnPage(grupoD[1], window.innerWidth)
                tdTimes2[3].setAttribute('title', grupoD[1].time.toUpperCase())
                break  
            case 6:
                if(grupoC[0].pais == timesPotes[numAleatorio].pais){
                    do{
                        numAleatorio = Math.floor(Math.random()*i)
                    }while(grupoC[0].pais == timesPotes[numAleatorio].pais)
                    grupoC.push(timesPotes[numAleatorio])
                    pote2.splice(numAleatorio, 1)
                }else{
                    grupoC.push(timesPotes[numAleatorio])
                    pote2.splice(numAleatorio, 1)
                }
                tdTimes2[2].innerText = setTeamWidthOnPage(grupoC[1], window.innerWidth)
                tdTimes2[2].setAttribute('title', grupoC[1].time.toUpperCase())
                break
            case 7:
                if(grupoB[0].pais == timesPotes[numAleatorio].pais){
                    do{
                        numAleatorio = Math.floor(Math.random()*i)
                    }while(grupoB[0].pais == timesPotes[numAleatorio].pais)
                    grupoB.push(timesPotes[numAleatorio])
                    pote2.splice(numAleatorio, 1)
                }else{
                    grupoB.push(timesPotes[numAleatorio])
                    pote2.splice(numAleatorio, 1)
                }
                tdTimes2[1].innerText = setTeamWidthOnPage(grupoB[1], window.innerWidth)
                tdTimes2[1].setAttribute('title', grupoB[1].time.toUpperCase())
                break
            case 8:
                if(grupoA[0].pais == timesPotes[numAleatorio].pais){
                    do{
                        numAleatorio = Math.floor(Math.random()*i)
                    }while(grupoA[0].pais == timesPotes[numAleatorio].pais)
                    grupoA.push(timesPotes[numAleatorio])
                    pote2.splice(numAleatorio, 1)
                }else{
                    grupoA.push(timesPotes[numAleatorio])
                    pote2.splice(numAleatorio, 1)
                }
                tdTimes2[0].innerText = setTeamWidthOnPage(grupoA[1], window.innerWidth)
                tdTimes2[0].setAttribute('title', grupoA[1].time.toUpperCase())
              break  
        }
    }    
}
function addTimesPote1(){
    for(let i = 7; i >= 0; i--){
        let numAleatorio = Math.floor(Math.random()*i)
        
        switch(i){
            case 0:
                tdTimes1[0].innerText = setTeamWidthOnPage(grupoA[0], window.innerWidth)
                tdTimes1[0].setAttribute('title', grupoA[0].time.toUpperCase())
                addTimesPote2(pote2)
            case 7:
                grupoH.push(pote1[numAleatorio])
                tdTimes1[7].innerText = setTeamWidthOnPage(grupoH[0], window.innerWidth)
                tdTimes1[7].setAttribute('title', grupoH[0].time.toUpperCase())
                pote1.splice(numAleatorio, 1)
                break     
            case 6:
                grupoG.push(pote1[numAleatorio])
                tdTimes1[6].innerText = setTeamWidthOnPage(grupoG[0], window.innerWidth)
                tdTimes1[6].setAttribute('title', grupoG[0].time.toUpperCase())
                pote1.splice(numAleatorio, 1)
                break  
            case 5:
                grupoF.push(pote1[numAleatorio])
                tdTimes1[5].innerText = setTeamWidthOnPage(grupoF[0], window.innerWidth)
                tdTimes1[5].setAttribute('title', grupoF[0].time.toUpperCase())
                pote1.splice(numAleatorio, 1)
                break  
            case 4:
                grupoE.push(pote1[numAleatorio])
                tdTimes1[4].innerText = setTeamWidthOnPage(grupoE[0], window.innerWidth)
                tdTimes1[4].setAttribute('title', grupoE[0].time.toUpperCase())
                pote1.splice(numAleatorio, 1)
                break  
            case 3:
                grupoD.push(pote1[numAleatorio])
                tdTimes1[3].innerText = setTeamWidthOnPage(grupoD[0], window.innerWidth)
                tdTimes1[3].setAttribute('title', grupoD[0].time.toUpperCase())
                pote1.splice(numAleatorio, 1)
                break  
            case 2:
                grupoC.push(pote1[numAleatorio])
                tdTimes1[2].innerText = setTeamWidthOnPage(grupoC[0], window.innerWidth)
                tdTimes1[2].setAttribute('title', grupoC[0].time.toUpperCase())
                pote1.splice(numAleatorio, 1)
                break  
            case 1:
                grupoB.push(pote1[numAleatorio])
                tdTimes1[1].innerText = setTeamWidthOnPage(grupoB[0], window.innerWidth)
                tdTimes1[1].setAttribute('title', grupoB[0].time.toUpperCase())
                pote1.splice(numAleatorio, 1)
              break  
        }
    }
}

addTimesPote1()