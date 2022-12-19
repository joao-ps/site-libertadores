let pote1 = [
    {time: 'boca juniors', pais: 'argentina'},
    {time: 'flamengo', pais: 'brasil'}, 
    {time: 'são paulo', pais: 'brasil'}, 
    {time: 'peñarol', pais: 'uruguai'}, 
    {time: 'palmeiras', pais: 'brasil'}, 
    {time: 'nacional', pais: 'uruguai'}, 
    {time: 'olimpia', pais: 'paraguai'}
];
let pote2 = [
    {time: 'independiente del valle', pais: 'equador'}, 
    {time: 'racing', pais: 'argentina'}, 
    {time: 'universidad católica', pais: 'chile'}, 
    {time: 'tigres', pais: 'méxico'}, 
    {time: 'cerro porteño', pais: 'paraguai'}, 
    {time: 'junior', pais: 'colômbia'}, 
    {time: 'internacional', pais: 'brasil'},
    {time: 'pachuca', pais: 'méxico'},
];
let pote3 = [
    {time: 'bolivar', pais: 'bolivia'}, 
    {time: 'atletico nacional', pais: 'colômbia'}, 
    {time: 'san lorenzo', pais: 'argentina'}, 
    {time: 'colo-colo', pais:'chile'}, 
    {time: 'Defensa y Justicia', pais: 'argentina'},  
    {time: 'the strongest', pais: 'bolivia'}, 
    {time: 'caracas', pais: 'venezuela'},
    {time: 'barcelona', pais: 'equador'}
];
let pote4 = [
    {time: 'fluminense', pais: 'brasil'}, 
    {time: 'portland ', pais: 'eua' },
    {time: 'talleres', pais: 'argentina'},
    {time: 'monterrey', pais: 'méxico'},
    {time: 'zamora', pais: 'venezuela'},
    {time: 'atlanta united', pais: 'eua'},
    {time: 'nacional', pais: 'paraguai'},
    {time: 'sporting cristal', pais: 'peru'}
];
let grupoA = [{time: 'river plate', pais: 'argentina'}];
let grupoB = [];
let grupoC = [];
let grupoD = [];
let grupoE = [];
let grupoF = [];
let grupoG = [];
let grupoH = [];
let uniaoGrupos = [];

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
                //innerHtmlGruposA()
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
                console.log('H - ' + grupoH[2].time)
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
                console.log('G - ' + grupoG[2].time)
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