let pote1 = ['palmeiras', 'flamengo', 'river plate', 'boca juniors', 'peñarol', 'grêmio', 'pachuca'];
let pote2 = ['américa', 'cruz azul', 'ldu', 'cerro porteño', 'colo-colo', 'junior barranquillha', 'lafc', 'cruzeiro'];
let pote3 = ['austin', 'olimpia', 'tolima', 'toluca', 'Defensa y Justicia', 'san lorenzo', 'santa fé', 'union española'];
let pote4 = ['monarcas', 'bragantino', 'estudiantes', 'club léon', 'santos laguna','independiente del valle','Sporting Cristal', 'zamora'];
let grupoA = ['chivas'];
let grupoB = [];
let grupoC = [];
let grupoD = [];
let grupoE = [];
let grupoF = [];
let grupoG = [];
let grupoH = [];
let uniaoGrupos = []

let tdTimes = document.querySelectorAll('td.time');

//const divJogos = document.querySelector('.jogos');
//const btnVoltarRodada = document.querySelector('.voltar-rodada');
//const btnAvancarRodada = document.querySelector('.avancar-rodada');
//let valorTranslate = 0;
//
////EVENTOS
//btnVoltarRodada.addEventListener('click', function(){
//    valorTranslate += 530;
//    divJogos.style.transform = `TranslateX(${valorTranslate}px)`;
//});
//btnAvancarRodada.addEventListener('click', function(){
//    valorTranslate += -530;
//    divJogos.style.transform = `TranslateX(${valorTranslate}px)`;
//});

//FUNÇÕES SORTEIO DOS GRUPOS E ADD TIMES NA TABELA
function innerHtmlGruposA(){
    uniaoGrupos = uniaoGrupos.concat(grupoA).concat(grupoB)
        .concat(grupoC).concat(grupoD).concat(grupoE).concat(grupoF)
            .concat(grupoG).concat(grupoH);

    uniaoGrupos.forEach((element, index) => {
        tdTimes[index].innerText = element;
    });
}
function addTimesPote4(pote){
    let timesPotes = pote;

    for(let i = 8; i >= 0; i--){
        let numAleatorio = Math.floor(Math.random()*i);
        
        switch(i){
            case 0:
                innerHtmlGruposA()
            case 1:
                grupoH.push(timesPotes[numAleatorio]);
                pote4.splice(numAleatorio, 1);
                break     
            case 2:
                grupoG.push(timesPotes[numAleatorio]);
                pote4.splice(numAleatorio, 1);
                break     
            case 3:
                grupoF.push(timesPotes[numAleatorio]);
                pote4.splice(numAleatorio, 1);
                break  
            case 4:
                grupoE.push(timesPotes[numAleatorio]);
                pote4.splice(numAleatorio, 1);
                break  
            case 5:
                grupoD.push(timesPotes[numAleatorio]);
                pote4.splice(numAleatorio, 1);
                break  
            case 6:
                grupoC.push(timesPotes[numAleatorio]);
                pote4.splice(numAleatorio, 1);
                break  
            case 7:
                grupoB.push(timesPotes[numAleatorio]);
                pote4.splice(numAleatorio, 1);
                break  
            case 8:
              grupoA.push(timesPotes[numAleatorio]);
              pote4.splice(numAleatorio, 1);
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
                grupoH.push(timesPotes[numAleatorio]);
                pote3.splice(numAleatorio, 1);
                break     
            case 2:
                grupoG.push(timesPotes[numAleatorio]);
                pote3.splice(numAleatorio, 1);
                break     
            case 3:
                grupoF.push(timesPotes[numAleatorio]);
                pote3.splice(numAleatorio, 1);
                break  
            case 4:
                grupoE.push(timesPotes[numAleatorio]);
                pote3.splice(numAleatorio, 1);
                break  
            case 5:
                grupoD.push(timesPotes[numAleatorio]);
                pote3.splice(numAleatorio, 1);
                break  
            case 6:
                grupoC.push(timesPotes[numAleatorio]);
                pote3.splice(numAleatorio, 1);
                break  
            case 7:
                grupoB.push(timesPotes[numAleatorio]);
                pote3.splice(numAleatorio, 1);
                break  
            case 8:
              grupoA.push(timesPotes[numAleatorio]);
              pote3.splice(numAleatorio, 1);
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
                grupoH.push(timesPotes[numAleatorio]);
                pote2.splice(numAleatorio, 1);
                break     
            case 2:
                grupoG.push(timesPotes[numAleatorio]);
                pote2.splice(numAleatorio, 1);
                break     
            case 3:
                grupoF.push(timesPotes[numAleatorio]);
                pote2.splice(numAleatorio, 1);
                break  
            case 4:
                grupoE.push(timesPotes[numAleatorio]);
                pote2.splice(numAleatorio, 1);
                break  
            case 5:
                grupoD.push(timesPotes[numAleatorio]);
                pote2.splice(numAleatorio, 1);
                break  
            case 6:
                grupoC.push(timesPotes[numAleatorio]);
                pote2.splice(numAleatorio, 1);
                break  
            case 7:
                grupoB.push(timesPotes[numAleatorio]);
                pote2.splice(numAleatorio, 1);
                break  
            case 8:
              grupoA.push(timesPotes[numAleatorio]);
              pote2.splice(numAleatorio, 1);
              break  
        }
    }    
}
function addTimesPote1(){
    for(let i = 7; i >= 0; i--){
        let numAleatorio = Math.floor(Math.random()*i);
        
        switch(i){
            case 0:
                addTimesPote2(pote2);
            case 1:
                grupoH.push(pote1[numAleatorio]);
                pote1.splice(numAleatorio, 1);
                break     
            case 2:
                grupoG.push(pote1[numAleatorio]);
                pote1.splice(numAleatorio, 1);
                break  
            case 3:
                grupoF.push(pote1[numAleatorio]);
                pote1.splice(numAleatorio, 1);
                break  
            case 4:
                grupoE.push(pote1[numAleatorio]);
                pote1.splice(numAleatorio, 1);
                break  
            case 5:
                grupoD.push(pote1[numAleatorio]);
                pote1.splice(numAleatorio, 1);
                break  
            case 6:
                grupoC.push(pote1[numAleatorio]);
                pote1.splice(numAleatorio, 1);
                break  
            case 7:
              grupoB.push(pote1[numAleatorio]);
              pote1.splice(numAleatorio, 1);
              break  
        }
    }
}

//addTimesPote1();