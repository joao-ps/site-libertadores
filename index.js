let pote1 = [
    {time: 'river plate', pais: 'argentina', namePlacar: 'riv'}, 
    {time: 'boca juniors', pais: 'argentina', namePlacar: 'boc'},
    {time: 'flamengo', pais: 'brasil', namePlacar: 'fla'}, 
    {time: 'nacional-URU', pais: 'uruguai', namePlacar: 'nac'}, 
    {time: 'peñarol', pais: 'uruguai', namePlacar: 'pen'}, 
    {time: 'atletico mg', pais: 'brasil', namePlacar: 'cam'}, 
    {time: 'atletico pr', pais: 'brasil', namePlacar: 'cap'}
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
    {time: 'américa mg', pais: 'brasil', namePlacar: 'ame'}
];

export let grupoA = [{time: 'palmeiras', pais: 'brasil', namePlacar: 'pal'}];
export let grupoB = [];
export let grupoC = [];
export let grupoD = [];
export let grupoE = [];
export let grupoF = [];
export let grupoG = [];
export let grupoH = [];

let tdTimes = document.querySelectorAll('td.cedula-time');
let tdTimes1 = document.querySelectorAll('td.cedula-time1');
let tdTimes2 = document.querySelectorAll('td.cedula-time2');
let tdTimes3 = document.querySelectorAll('td.cedula-time3');
let tdTimes4 = document.querySelectorAll('td.cedula-time4');

//FUNÇÕES SORTEIO DOS GRUPOS E ADD TIMES NA TABELA
function addTimesPote4(pote){
    let timesPotes = pote;

    for(let i = 8; i >= 0; i--){
        let numAleatorio = Math.floor(Math.random()*i);
        
        switch(i){
            case 0:
                
            case 1:
                grupoH.push(timesPotes[numAleatorio]);
                pote4.splice(numAleatorio, 1);
                tdTimes4[7].innerText = grupoH[3].time;
                break     
            case 2:
                grupoG.push(timesPotes[numAleatorio]);
                pote4.splice(numAleatorio, 1);
                tdTimes4[6].innerText = grupoG[3].time;
                break     
            case 3:
                grupoF.push(timesPotes[numAleatorio]);
                pote4.splice(numAleatorio, 1);
                tdTimes4[5].innerText = grupoF[3].time;
                break  
            case 4:
                grupoE.push(timesPotes[numAleatorio]);
                pote4.splice(numAleatorio, 1);
                tdTimes4[4].innerText = grupoE[3].time;
                break  
            case 5:
                grupoD.push(timesPotes[numAleatorio]);
                pote4.splice(numAleatorio, 1);
                tdTimes4[3].innerText = grupoD[3].time;
                break  
            case 6:
                grupoC.push(timesPotes[numAleatorio]);
                pote4.splice(numAleatorio, 1);
                tdTimes4[2].innerText = grupoC[3].time;
                break  
            case 7:
                grupoB.push(timesPotes[numAleatorio]);
                pote4.splice(numAleatorio, 1);
                tdTimes4[1].innerText = grupoB[3].time;
                break  
            case 8:
              grupoA.push(timesPotes[numAleatorio]);
              pote4.splice(numAleatorio, 1);
              tdTimes4[0].innerText = grupoA[3].time;
              break  
        }
    }    
}
function addTimesPote3(pote){
    let timesPotes = pote;

    for(let i = 8; i >= 0; i--){
        let numAleatorio = Math.floor(Math.random()*i);
        
        switch(i){
            case 0:
                addTimesPote4(pote4);
            case 1:
                grupoH.push(timesPotes[numAleatorio])
                pote3.splice(numAleatorio, 1);
                if(grupoH[2].pais == grupoH[0].pais || grupoH[2].pais == grupoH[1].pais){
                    if(
                        grupoH[2].pais != grupoG[0].pais 
                            && grupoH[2].pais != grupoG[1].pais
                                && grupoG[2].pais !=  grupoH[0].pais
                                    && grupoG[2].pais != grupoH[1].pais
                        ){
                            let time1 = grupoH[2];
                            let time2 = grupoG[2];
                            grupoG[2] = time1;
                            grupoH[2] = time2;
                            tdTimes3[6].innerText = grupoG[2].time;
                    }else if(
                        grupoH[2].pais != grupoF[0].pais 
                            && grupoH[2].pais != grupoF[1].pais
                                && grupoF[2].pais !=  grupoH[0].pais
                                    && grupoF[2].pais != grupoH[1].pais
                        ){
                            let time1 = grupoH[2];
                            let time2 = grupoF[2];
                            grupoF[2] = time1;
                            grupoH[2] = time2;
                            tdTimes3[5].innerText = grupoF[2].time;
                    }else if(
                        grupoH[2].pais != grupoE[0].pais 
                            && grupoH[2].pais != grupoE[1].pais
                                && grupoE[2].pais !=  grupoH[0].pais
                                    && grupoE[2].pais != grupoH[1].pais
                        ){
                            let time1 = grupoH[2];
                            let time2 = grupoE[2];
                            grupoE[2] = time1;
                            grupoH[2] = time2;
                            tdTimes3[4].innerText = grupoE[2].time;
                    }else if(
                        grupoH[2].pais != grupoD[0].pais 
                            && grupoH[2].pais != grupoD[1].pais
                                && grupoD[2].pais !=  grupoH[0].pais
                                    && grupoD[2].pais != grupoH[1].pais
                    ){
                        let time1 = grupoH[2];
                        let time2 = grupoD[2];
                        grupoD[2] = time1;
                        grupoH[2] = time2;
                        tdTimes3[3].innerText = grupoD[2].time;
                    }else if(
                        grupoH[2].pais != grupoC[0].pais 
                            && grupoH[2].pais != grupoC[1].pais
                                && grupoC[2].pais !=  grupoH[0].pais
                                    && grupoC[2].pais != grupoH[1].pais
                    ){
                        let time1 = grupoH[2];
                        let time2 = grupoC[2];
                        grupoC[2] = time1;
                        grupoH[2] = time2;
                        tdTimes3[2].innerText = grupoC[2].time;
                    }else if(
                        grupoH[2].pais != grupoB[0].pais 
                            && grupoH[2].pais != grupoB[1].pais
                                && grupoB[2].pais !=  grupoH[0].pais
                                    && grupoB[2].pais != grupoH[1].pais
                    ){
                        let time1 = grupoH[2];
                        let time2 = grupoB[2];
                        grupoB[2] = time1;
                        grupoH[2] = time2;
                        tdTimes3[1].innerText = grupoB[2].time;
                    }else if(
                        grupoH[2].pais != grupoA[0].pais 
                            && grupoH[2].pais != grupoA[1].pais
                                && grupoA[2].pais !=  grupoH[0].pais
                                    && grupoA[2].pais != grupoH[1].pais
                    ){
                        let time1 = grupoH[2];
                        let time2 = grupoA[2];
                        grupoA[2] = time1;
                        grupoH[2] = time2;
                        tdTimes3[0].innerText = grupoA[2].time;
                    }
                }
                tdTimes3[7].innerText = grupoH[2].time;
                break     
            case 2:
                grupoG.push(timesPotes[numAleatorio])
                pote3.splice(numAleatorio, 1);
                if(grupoG[2].pais == grupoG[0].pais || grupoG[2].pais == grupoG[1].pais){
                    if(
                        grupoG[2].pais != grupoF[0].pais 
                            && grupoG[2].pais != grupoF[1].pais
                                && grupoF[2].pais !=  grupoG[0].pais
                                    && grupoF[2].pais != grupoG[1].pais
                        ){
                            let time1 = grupoG[2];
                            let time2 = grupoF[2];
                            grupoF[2] = time1;
                            grupoG[2] = time2;
                            tdTimes3[5].innerText = grupoF[2].time;
                    }else if(
                        grupoG[2].pais != grupoE[0].pais 
                            && grupoG[2].pais != grupoE[1].pais
                                && grupoE[2].pais !=  grupoG[0].pais
                                    && grupoE[2].pais != grupoG[1].pais
                        ){
                            let time1 = grupoG[2];
                            let time2 = grupoE[2];
                            grupoE[2] = time1;
                            grupoG[2] = time2;
                            tdTimes3[4].innerText = grupoE[2].time;
                    }else if(
                        grupoG[2].pais != grupoD[0].pais 
                            && grupoG[2].pais != grupoD[1].pais
                                && grupoD[2].pais !=  grupoG[0].pais
                                    && grupoD[2].pais != grupoG[1].pais
                    ){
                        let time1 = grupoG[2];
                        let time2 = grupoD[2];
                        grupoD[2] = time1;
                        grupoG[2] = time2;
                        tdTimes3[3].innerText = grupoD[2].time;
                    }else if(
                        grupoG[2].pais != grupoC[0].pais 
                            && grupoG[2].pais != grupoC[1].pais
                                && grupoC[2].pais !=  grupoG[0].pais
                                    && grupoC[2].pais != grupoG[1].pais
                    ){
                        let time1 = grupoG[2];
                        let time2 = grupoC[2];
                        grupoC[2] = time1;
                        grupoG[2] = time2;
                        tdTimes3[2].innerText = grupoC[2].time;
                    }else if(
                        grupoG[2].pais != grupoB[0].pais 
                            && grupoG[2].pais != grupoB[1].pais
                                && grupoB[2].pais !=  grupoG[0].pais
                                    && grupoB[2].pais != grupoG[1].pais
                    ){
                        let time1 = grupoG[2];
                        let time2 = grupoB[2];
                        grupoB[2] = time1;
                        grupoG[2] = time2;
                        tdTimes3[1].innerText = grupoB[2].time;
                    }else if(
                        grupoG[2].pais != grupoA[0].pais 
                            && grupoG[2].pais != grupoA[1].pais
                                && grupoA[2].pais !=  grupoG[0].pais
                                    && grupoA[2].pais != grupoG[1].pais
                    ){
                        let time1 = grupoG[2];
                        let time2 = grupoA[2];
                        grupoA[2] = time1;
                        grupoG[2] = time2;
                        tdTimes3[0].innerText = grupoA[2].time;
                    }
                }
                tdTimes3[6].innerText = grupoG[2].time;
                break     
            case 3:
                if(timesPotes[numAleatorio].pais == grupoF[0].pais || timesPotes[numAleatorio].pais == grupoF[1].pais){
                    do{
                        numAleatorio = Math.floor(Math.random()*i);
                    }while(timesPotes[numAleatorio].pais == grupoF[0].pais || timesPotes[numAleatorio].pais == grupoF[1].pais);
                    grupoF.push(timesPotes[numAleatorio])
                    pote3.splice(numAleatorio, 1);
                }else{
                    grupoF.push(timesPotes[numAleatorio])
                    pote3.splice(numAleatorio, 1);
                }
                tdTimes3[5].innerText = grupoF[2].time;
                break
            case 4:
                if(timesPotes[numAleatorio].pais == grupoE[0].pais || timesPotes[numAleatorio].pais == grupoE[1].pais){
                    do{
                        numAleatorio = Math.floor(Math.random()*i);
                    }while(timesPotes[numAleatorio].pais == grupoE[0].pais || timesPotes[numAleatorio].pais == grupoE[1].pais);
                    grupoE.push(timesPotes[numAleatorio]);
                    pote3.splice(numAleatorio, 1);
                }else{
                    grupoE.push(timesPotes[numAleatorio]);
                    pote3.splice(numAleatorio, 1);
                }
                tdTimes3[4].innerText = grupoE[2].time;
                break
            case 5:
                if(timesPotes[numAleatorio].pais == grupoD[0].pais || timesPotes[numAleatorio].pais == grupoD[1].pais){
                    do{
                        numAleatorio = Math.floor(Math.random()*i);
                    }while(timesPotes[numAleatorio].pais == grupoD[0].pais || timesPotes[numAleatorio].pais == grupoD[1].pais);
                    grupoD.push(timesPotes[numAleatorio]);
                    pote3.splice(numAleatorio, 1);
                }else{
                    grupoD.push(timesPotes[numAleatorio]);
                    pote3.splice(numAleatorio, 1);
                }
                tdTimes3[3].innerText = grupoD[2].time;
                break
            case 6:    
            if(timesPotes[numAleatorio].pais == grupoC[0].pais || timesPotes[numAleatorio].pais == grupoC[1].pais){
                do{
                    numAleatorio = Math.floor(Math.random()*i);
                }while(timesPotes[numAleatorio].pais == grupoC[0].pais || timesPotes[numAleatorio].pais == grupoC[1].pais);
                grupoC.push(timesPotes[numAleatorio]);
                pote3.splice(numAleatorio, 1);
            }else{
                grupoC.push(timesPotes[numAleatorio]);
                pote3.splice(numAleatorio, 1);
            }
            tdTimes3[2].innerText = grupoC[2].time;
              break  
            case 7:
                if(timesPotes[numAleatorio].pais == grupoB[0].pais || timesPotes[numAleatorio].pais == grupoB[1].pais){
                    do{
                        numAleatorio = Math.floor(Math.random()*i);
                    }while(timesPotes[numAleatorio].pais == grupoB[0].pais || timesPotes[numAleatorio].pais == grupoB[1].pais);
                    grupoB.push(timesPotes[numAleatorio])
                    pote3.splice(numAleatorio, 1);
                }else{
                    grupoB.push(timesPotes[numAleatorio])
                    pote3.splice(numAleatorio, 1);
                }
                tdTimes3[1].innerText = grupoB[2].time;
              break  
            case 8:
              if(timesPotes[numAleatorio].pais == grupoA[0].pais || timesPotes[numAleatorio].pais == grupoA[1].pais){
                do{
                    numAleatorio = Math.floor(Math.random()*i);
                }while(timesPotes[numAleatorio].pais == grupoA[0].pais || timesPotes[numAleatorio].pais == grupoA[1].pais);
                grupoA.push(timesPotes[numAleatorio])
                pote3.splice(numAleatorio, 1);
            }else{
                grupoA.push(timesPotes[numAleatorio])
                pote3.splice(numAleatorio, 1);
            }
            tdTimes3[0].innerText = grupoA[2].time;
          break  
        }
    }    
}
function addTimesPote2(pote){
    let timesPotes = pote;

    for(let i = 8; i >= 0; i--){
        let numAleatorio = Math.floor(Math.random()*i);
        
        switch(i){
            case 0:
                addTimesPote3(pote3);
            case 1:
                grupoH.push(timesPotes[0]);
                pote2.splice(0, 1);
                tdTimes2[7].innerText = grupoH[1].time;
                if(grupoH[1].pais == grupoH[0].pais){
                    if(grupoH[1].pais != grupoG[0].pais && grupoH[0].pais != grupoG[1].pais){
                        let time1 = grupoH[1]
                        let time2 = grupoG[1]
                        grupoH[1] = time2
                        grupoG[1] = time1
                        tdTimes2[6].innerText = grupoG[1].time;
                        tdTimes2[7].innerText = grupoH[1].time;
                    }else if(grupoH[1].pais != grupoF[0].pais && grupoH[0].pais != grupoF[1].pais){
                        let time1 = grupoH[1]
                        let time2 = grupoF[1]
                        grupoH[1] = time2
                        grupoF[1] = time1
                        tdTimes2[5].innerText = grupoF[1].time;
                        tdTimes2[7].innerText = grupoH[1].time;
                    }else if(grupoH[1].pais != grupoE[0].pais && grupoH[0].pais != grupoE[1].pais){
                        let time1 = grupoH[1]
                        let time2 = grupoE[1]
                        grupoH[1] = time2
                        grupoE[1] = time1
                        tdTimes2[4].innerText = grupoE[1].time;
                        tdTimes2[7].innerText = grupoH[1].time;
                    }else if(grupoH[1].pais != grupoD[0].pais && grupoH[0].pais != grupoD[1].pais){
                        let time1 = grupoH[1]
                        let time2 = grupoD[1]
                        grupoH[1] = time2
                        grupoD[1] = time1
                        tdTimes2[3].innerText = grupoD[1].time;
                        tdTimes2[7].innerText = grupoH[1].time;
                    }else if(grupoH[1].pais != grupoC[0].pais && grupoH[0].pais != grupoC[1].pais){
                        let time1 = grupoH[1]
                        let time2 = grupoC[1]
                        grupoH[1] = time2
                        grupoC[1] = time1
                        tdTimes2[2].innerText = grupoC[1].time;
                        tdTimes2[7].innerText = grupoH[1].time;
                    }else{
                        let time1 = grupoH[1]
                        let time2 = grupoB[1]
                        grupoH[1] = time2
                        grupoB[1] = time1
                        tdTimes2[1].innerText = grupoB[1].time;
                        tdTimes2[7].innerText = grupoH[1].time;
                    }
                }
                break     
            case 2:
                grupoG.push(timesPotes[numAleatorio])
                pote2.splice(numAleatorio, 1);
                tdTimes2[6].innerText = grupoG[1].time;
                if(grupoG[1].pais == grupoG[0].pais){
                    if(grupoG[1].pais != grupoF[0].pais && grupoF[1].pais != grupoG[0].pais){
                        let time1 = grupoG[1]
                        let time2 = grupoF[1]
                        grupoG[1] = time2;
                        grupoF[1] = time1;
                        tdTimes2[5].innerText = grupoF[1].time;
                        tdTimes2[6].innerText = grupoG[1].time;
                    }else if(grupoG[1].pais != grupoE[0].pais && grupoE[1].pais != grupoG[0].pais){
                        let time1 = grupoG[1]
                        let time2 = grupoE[1]
                        grupoG[1] = time2;
                        grupoE[1] = time1;
                        tdTimes2[4].innerText = grupoE[1].time;
                        tdTimes2[6].innerText = grupoG[1].time;
                    }else if(grupoG[1].pais != grupoD[0].pais && grupoD[1].pais != grupoG[0].pais){
                        let time1 = grupoG[1]
                        let time2 = grupoD[1]
                        grupoG[1] = time2;
                        grupoD[1] = time1;
                        tdTimes2[3].innerText = grupoD[1].time;
                        tdTimes2[6].innerText = grupoG[1].time;
                    }else if(grupoG[1].pais != grupoC[0].pais && grupoC[1].pais != grupoG[0].pais){
                        let time1 = grupoG[1]
                        let time2 = grupoC[1]
                        grupoG[1] = time2;
                        grupoC[1] = time1;
                        tdTimes2[2].innerText = grupoC[1].time;
                        tdTimes2[6].innerText = grupoG[1].time;
                    }else if(grupoG[1].pais != grupoB[0].pais && grupoB[1].pais != grupoG[0].pais){
                        let time1 = grupoG[1]
                        let time2 = grupoB[1]
                        grupoG[1] = time2;
                        grupoB[1] = time1;
                        tdTimes2[1].innerText = grupoB[1].time;
                        tdTimes2[6].innerText = grupoG[1].time;
                    }else{
                        let time1 = grupoG[1]
                        let time2 = grupoB[1]
                        grupoG[1] = time2;
                        grupoA[1] = time1;
                        tdTimes2[0].innerText = grupoA[1].time;
                        tdTimes2[6].innerText = grupoG[1].time;
                    }
                }
                break     
            case 3:
                if(grupoF[0].pais == timesPotes[numAleatorio].pais){
                    do{
                        numAleatorio = Math.floor(Math.random()*i);
                    }while(grupoF[0].pais == timesPotes[numAleatorio].pais);
                    grupoF.push(timesPotes[numAleatorio]);
                    pote2.splice(numAleatorio, 1);
                }else{
                    grupoF.push(timesPotes[numAleatorio]);
                    pote2.splice(numAleatorio, 1);
                }
                tdTimes2[5].innerText = grupoF[1].time;
                break
            case 4:
                if(grupoE[0].pais == timesPotes[numAleatorio].pais){
                    do{
                        numAleatorio = Math.floor(Math.random()*i);
                    }while(grupoE[0].pais == timesPotes[numAleatorio].pais);
                    grupoE.push(timesPotes[numAleatorio])
                    pote2.splice(numAleatorio, 1);
                }else{
                    grupoE.push(timesPotes[numAleatorio])
                    pote2.splice(numAleatorio, 1);
                }
                tdTimes2[4].innerText = grupoE[1].time;
                break  
            case 5:
                if(grupoD[0].pais == timesPotes[numAleatorio].pais){
                    do{
                        numAleatorio = Math.floor(Math.random()*i);
                    }while(grupoD[0].pais == timesPotes[numAleatorio].pais);
                    grupoD.push(timesPotes[numAleatorio]);
                    pote2.splice(numAleatorio, 1);
                }else{
                    grupoD.push(timesPotes[numAleatorio]);
                    pote2.splice(numAleatorio, 1);
                }
                tdTimes2[3].innerText = grupoD[1].time;
                break  
            case 6:
                if(grupoC[0].pais == timesPotes[numAleatorio].pais){
                    do{
                        numAleatorio = Math.floor(Math.random()*i);
                    }while(grupoC[0].pais == timesPotes[numAleatorio].pais);
                    grupoC.push(timesPotes[numAleatorio]);
                    pote2.splice(numAleatorio, 1); 
                }else{
                    grupoC.push(timesPotes[numAleatorio]);
                    pote2.splice(numAleatorio, 1); 
                }
                tdTimes2[2].innerText = grupoC[1].time;
                break
            case 7:
                if(grupoB[0].pais == timesPotes[numAleatorio].pais){
                    do{
                        numAleatorio = Math.floor(Math.random()*i);
                    }while(grupoB[0].pais == timesPotes[numAleatorio].pais);
                    grupoB.push(timesPotes[numAleatorio]);
                    pote2.splice(numAleatorio, 1); 
                }else{
                    grupoB.push(timesPotes[numAleatorio]);
                    pote2.splice(numAleatorio, 1); 
                }
                tdTimes2[1].innerText = grupoB[1].time;
                break
            case 8:
                if(grupoA[0].pais == timesPotes[numAleatorio].pais){
                    do{
                        numAleatorio = Math.floor(Math.random()*i);
                    }while(grupoA[0].pais == timesPotes[numAleatorio].pais);
                    grupoA.push(timesPotes[numAleatorio]);
                    pote2.splice(numAleatorio, 1); 
                }else{
                    grupoA.push(timesPotes[numAleatorio]);
                    pote2.splice(numAleatorio, 1); 
                }
                tdTimes2[0].innerText = grupoA[1].time;
              break  
        }
    }    
}
function addTimesPote1(){
    for(let i = 7; i >= 0; i--){
        let numAleatorio = Math.floor(Math.random()*i);
        
        switch(i){
            case 0:
                tdTimes1[0].innerText = grupoA[0].time;
                addTimesPote2(pote2);    
            case 7:
                grupoH.push(pote1[numAleatorio]);
                tdTimes1[7].innerText = grupoH[0].time;
                pote1.splice(numAleatorio, 1);
                break     
            case 6:
                grupoG.push(pote1[numAleatorio]);
                tdTimes1[6].innerText = grupoG[0].time;
                pote1.splice(numAleatorio, 1);
                break  
            case 5:
                grupoF.push(pote1[numAleatorio]);
                tdTimes1[5].innerText = grupoF[0].time;
                pote1.splice(numAleatorio, 1);
                break  
            case 4:
                grupoE.push(pote1[numAleatorio]);
                tdTimes1[4].innerText = grupoE[0].time;
                pote1.splice(numAleatorio, 1);
                break  
            case 3:
                grupoD.push(pote1[numAleatorio]);
                tdTimes1[3].innerText = grupoD[0].time;
                pote1.splice(numAleatorio, 1);
                break  
            case 2:
                grupoC.push(pote1[numAleatorio]);
                tdTimes1[2].innerText = grupoC[0].time;
                pote1.splice(numAleatorio, 1);
                break  
            case 1:
                grupoB.push(pote1[numAleatorio]);
                tdTimes1[1].innerText = grupoB[0].time;
                pote1.splice(numAleatorio, 1);
              break  
        }
    }
}

addTimesPote1();