import { useContext } from 'react'
import { GetTimes } from './api/getTeams'

import { GrupoA } from '../grupos/GrupoA'
import { GrupoB } from '../grupos/GrupoB'
import { GrupoC } from '../grupos/GrupoC'
import { GrupoD } from '../grupos/GrupoD'
import { GrupoE } from '../grupos/GrupoE'
import { GrupoF } from '../grupos/GrupoF'
import { GrupoG } from '../grupos/GrupoG'
import { GrupoH } from '../grupos/GrupoH'
import { Header } from './Header'

let grupoA = [
    {
        time: '',
        p: 0,
        j: 0,
        v: 0,
        e: 0,
        d: 0,
        gp: 0,
        gc: 0,
        sg: 0,
        placar: ''
    },
    {
        time: '',
        p: 0,
        j: 0,
        v: 0,
        e: 0,
        d: 0,
        gp: 0,
        gc: 0,
        sg: 0,
        placar: ''
    },
    {
        time: '',
        p: 0,
        j: 0,
        v: 0,
        e: 0,
        d: 0,
        gp: 0,
        gc: 0,
        sg: 0,
        placar: ''
    },
    {
        time: '',
        p: 0,
        j: 0,
        v: 0,
        e: 0,
        d: 0,
        gp: 0,
        gc: 0,
        sg: 0,
        placar: ''
    }
];
let grupoB = [
    {
        time: '',
        p: 0,
        j: 0,
        v: 0,
        e: 0,
        d: 0,
        gp: 0,
        gc: 0,
        sg: 0,
        placar: ''
    },
    {
        time: '',
        p: 0,
        j: 0,
        v: 0,
        e: 0,
        d: 0,
        gp: 0,
        gc: 0,
        sg: 0,
        placar: ''
    },
    {
        time: '',
        p: 0,
        j: 0,
        v: 0,
        e: 0,
        d: 0,
        gp: 0,
        gc: 0,
        sg: 0,
        placar: ''
    },
    {
        time: '',
        p: 0,
        j: 0,
        v: 0,
        e: 0,
        d: 0,
        gp: 0,
        gc: 0,
        sg: 0,
        placar: ''
    }
];
let grupoC = [
    {
        time: '',
        p: 0,
        j: 0,
        v: 0,
        e: 0,
        d: 0,
        gp: 0,
        gc: 0,
        sg: 0,
        placar: ''
    },
    {
        time: '',
        p: 0,
        j: 0,
        v: 0,
        e: 0,
        d: 0,
        gp: 0,
        gc: 0,
        sg: 0,
        placar: ''
    },
    {
        time: '',
        p: 0,
        j: 0,
        v: 0,
        e: 0,
        d: 0,
        gp: 0,
        gc: 0,
        sg: 0,
        placar: ''
    },
    {
        time: '',
        p: 0,
        j: 0,
        v: 0,
        e: 0,
        d: 0,
        gp: 0,
        gc: 0,
        sg: 0,
        placar: ''
    }
];
let grupoD = [
    {
        time: '',
        p: 0,
        j: 0,
        v: 0,
        e: 0,
        d: 0,
        gp: 0,
        gc: 0,
        sg: 0,
        placar: ''
    },
    {
        time: '',
        p: 0,
        j: 0,
        v: 0,
        e: 0,
        d: 0,
        gp: 0,
        gc: 0,
        sg: 0,
        placar: ''
    },
    {
        time: '',
        p: 0,
        j: 0,
        v: 0,
        e: 0,
        d: 0,
        gp: 0,
        gc: 0,
        sg: 0,
        placar: ''
    },
    {
        time: '',
        p: 0,
        j: 0,
        v: 0,
        e: 0,
        d: 0,
        gp: 0,
        gc: 0,
        sg: 0,
        placar: ''
    }
];
let grupoE = [
    {
        time: '',
        p: 0,
        j: 0,
        v: 0,
        e: 0,
        d: 0,
        gp: 0,
        gc: 0,
        sg: 0,
        placar: ''
    },
    {
        time: '',
        p: 0,
        j: 0,
        v: 0,
        e: 0,
        d: 0,
        gp: 0,
        gc: 0,
        sg: 0,
        placar: ''
    },
    {
        time: '',
        p: 0,
        j: 0,
        v: 0,
        e: 0,
        d: 0,
        gp: 0,
        gc: 0,
        sg: 0,
        placar: ''
    },
    {
        time: '',
        p: 0,
        j: 0,
        v: 0,
        e: 0,
        d: 0,
        gp: 0,
        gc: 0,
        sg: 0,
        placar: ''
    }
];
let grupoF = [
    {
        time: '',
        p: 0,
        j: 0,
        v: 0,
        e: 0,
        d: 0,
        gp: 0,
        gc: 0,
        sg: 0,
        placar: ''
    },
    {
        time: '',
        p: 0,
        j: 0,
        v: 0,
        e: 0,
        d: 0,
        gp: 0,
        gc: 0,
        sg: 0,
        placar: ''
    },
    {
        time: '',
        p: 0,
        j: 0,
        v: 0,
        e: 0,
        d: 0,
        gp: 0,
        gc: 0,
        sg: 0,
        placar: ''
    },
    {
        time: '',
        p: 0,
        j: 0,
        v: 0,
        e: 0,
        d: 0,
        gp: 0,
        gc: 0,
        sg: 0,
        placar: ''
    }
];
let grupoG = [
    {
        time: '',
        p: 0,
        j: 0,
        v: 0,
        e: 0,
        d: 0,
        gp: 0,
        gc: 0,
        sg: 0,
        placar: ''
    },
    {
        time: '',
        p: 0,
        j: 0,
        v: 0,
        e: 0,
        d: 0,
        gp: 0,
        gc: 0,
        sg: 0,
        placar: ''
    },
    {
        time: '',
        p: 0,
        j: 0,
        v: 0,
        e: 0,
        d: 0,
        gp: 0,
        gc: 0,
        sg: 0,
        placar: ''
    },
    {
        time: '',
        p: 0,
        j: 0,
        v: 0,
        e: 0,
        d: 0,
        gp: 0,
        gc: 0,
        sg: 0,
        placar: ''
    }
];
let grupoH = [
    {
        time: '',
        p: 0,
        j: 0,
        v: 0,
        e: 0,
        d: 0,
        gp: 0,
        gc: 0,
        sg: 0,
        placar: ''
    },
    {
        time: '',
        p: 0,
        j: 0,
        v: 0,
        e: 0,
        d: 0,
        gp: 0,
        gc: 0,
        sg: 0,
        placar: ''
    },
    {
        time: '',
        p: 0,
        j: 0,
        v: 0,
        e: 0,
        d: 0,
        gp: 0,
        gc: 0,
        sg: 0,
        placar: ''
    },
    {
        time: '',
        p: 0,
        j: 0,
        v: 0,
        e: 0,
        d: 0,
        gp: 0,
        gc: 0,
        sg: 0,
        placar: ''
    }
]

let tdTimes1 = document.querySelectorAll('td.cedula-time1 > abbr.cedula-time')
let tdTimes2 = document.querySelectorAll('td.cedula-time2 > abbr.cedula-time')
let tdTimes3 = document.querySelectorAll('td.cedula-time3 > abbr.cedula-time')
let tdTimes4 = document.querySelectorAll('td.cedula-time4 > abbr.cedula-time')
const divJogos = document.querySelectorAll('.jogos')
const divRodadas =  document.querySelectorAll('.container-translate-rodada')
const stadium = document.querySelectorAll('span.stadium')
const btnVoltarRodada = document.querySelectorAll('.voltar-rodada')
const btnAvancarRodada = document.querySelectorAll('.avancar-rodada')
const btnSalvarResultJogos = document.querySelectorAll('.btn-result-jogos')
const inputResultJogos = document.querySelectorAll('.input-time-resultado')
const tdTime = document.querySelectorAll('.cedula-time')
const tdPontos = document.querySelectorAll('.cedula-pontos')
const tdJogos = document.querySelectorAll('.cedula-jogos')
const tdVitorias = document.querySelectorAll('.cedula-vitorias')
const tdEmpates = document.querySelectorAll('.cedula-empates')
const tdDerrotas = document.querySelectorAll('.cedula-derrotas')
const tdGolsPro = document.querySelectorAll('.cedula-gols-pro')
const tdGolsContra = document.querySelectorAll('.cedula-gols-contra')
const tdSaldoGols  = document.querySelectorAll('.cedula-saldo-gols')
const timeJogos = document.querySelectorAll('.jogo')

export function Grupos(){
    let [
        newPrevSegundaFase,
        previaSegundaFase,
        newPrevTerceiraFaseFase,
        previaTerceiraFase,
        newPrevFaseDeGrupos,
        previaFaseDeGrupos
    ] = useContext(GetTimes)

    let pote1 = []
    let pote2 = []
    let pote3 = []
    let pote4 = []
    let poteGeral = previaFaseDeGrupos.length == 32 ? previaFaseDeGrupos : null
    
    let grupo1 = []
    let grupo2 = []
    let grupo3 = []
    let grupo4 = []
    let grupo5 = []
    let grupo6 = []
    let grupo7 = []
    let grupo8 = []

    if(poteGeral != null){
        let campeoes = []

        pote1.push(poteGeral[0])
        pote1.push(poteGeral[1])
        pote4.push(poteGeral[31])
        pote4.push(poteGeral[30])
        pote4.push(poteGeral[29])
        pote4.push(poteGeral[28])

        poteGeral.shift()
        poteGeral.shift()
        poteGeral.pop()
        poteGeral.pop()
        poteGeral.pop()
        poteGeral.pop()

        poteGeral.forEach((element,index,array) => {
            if(element.pos == 1){
                campeoes.push(element)
                poteGeral.splice(index, 1)
            }
        })
        campeoes.forEach((element,index,array) => {
            if(
                element.pais != "venezuela"
                    &&
                    element.pais != 'equador'
                        &&
                        element.pais != "peru"
                            &&
                            element.pais != 'bolivia'
            ){
                pote1.push(element)
            }else{
                pote2.push(element)
            }
        })

        poteGeral.sort((a,b) => a.ranking > b.ranking)

        if(pote1.length != 8){
            pote1.push(poteGeral[0])
            poteGeral.shift()
            if(pote1.length != 8){
                pote1.push(poteGeral[0])
                poteGeral.shift()
            }
        }

        while (poteGeral.length != 0) {
            
            if(pote2.length != 8){
                pote2.push(poteGeral[0])
                poteGeral.shift()
            }else if(pote3.length != 8){
                pote3.push(poteGeral[0])
                poteGeral.shift()
            }else{
                pote4.push(poteGeral[0])
                poteGeral.shift()
            }
        }

        console.log(pote1)
        console.log(pote2)
        console.log(pote3)
        console.log(pote4)

        //poteGeral.forEach((element,index,array) => {
        //    if(index < 6){
        //        pote1.push(element)
        //    }else if(index >= 6 && index < 14){
        //        pote2.push(element)
        //    }else if(index >= 14 && index < 22){
        //        pote3.push(element)
        //    }else{
        //        pote4.push(element)
        //    }
        //})

        addTimesPote1()
    }

    function addTimesPote4(){
        for(let i = 0; i < 8; i++){
            let numAleatorio = Math.floor(Math.random()*pote4.length)

            switch(i){
                case 0:
                    grupo1.push(pote4[numAleatorio])
                    pote4.splice(numAleatorio, 1)
                    break;

                case 1:
                    grupo2.push(pote4[numAleatorio])
                    pote4.splice(numAleatorio, 1)
                    break;

                case 2:
                    grupo3.push(pote4[numAleatorio])
                    pote4.splice(numAleatorio, 1)
                    break;

                case 3:
                    grupo4.push(pote4[numAleatorio])
                    pote4.splice(numAleatorio, 1)
                    break;

                case 4:
                    grupo5.push(pote4[numAleatorio])
                    pote4.splice(numAleatorio, 1)
                    break;

                case 5:
                    grupo6.push(pote4[numAleatorio])
                    pote4.splice(numAleatorio, 1)
                    break;

                case 6:
                    grupo7.push(pote4[numAleatorio])
                    pote4.splice(numAleatorio, 1)
                    break;

                case 7:
                    grupo8.push(pote4[numAleatorio])
                    pote4.splice(numAleatorio, 1)
                    break;
            }
        }
        sessionStorage.setItem('grupoA', JSON.stringify(grupo1))
        sessionStorage.setItem('grupoB', JSON.stringify(grupo2))
        sessionStorage.setItem('grupoC', JSON.stringify(grupo3))
        sessionStorage.setItem('grupoD', JSON.stringify(grupo4))
        sessionStorage.setItem('grupoE', JSON.stringify(grupo5))
        sessionStorage.setItem('grupoF', JSON.stringify(grupo6))
        sessionStorage.setItem('grupoG', JSON.stringify(grupo7))
        sessionStorage.setItem('grupoH', JSON.stringify(grupo8))
    }

    function addTimesPote3(){

        for(let i = 0; i < 8; i++){
            let numAleatorio = Math.floor(Math.random()*pote3.length)

            switch(i){
                case 0:
                    grupo1.push(pote3[numAleatorio])
                    pote3.splice(numAleatorio, 1)
                    break;

                case 1:
                    grupo2.push(pote3[numAleatorio])
                    pote3.splice(numAleatorio, 1)
                    break;

                case 2: 
                    grupo3.push(pote3[numAleatorio])
                    pote3.splice(numAleatorio, 1)
                    break;

                case 3: 
                    grupo4.push(pote3[numAleatorio])
                    pote3.splice(numAleatorio, 1)
                    break;

                case 4: 
                    grupo5.push(pote3[numAleatorio])
                    pote3.splice(numAleatorio, 1)
                    break;

                case 5: 
                    grupo6.push(pote3[numAleatorio])
                    pote3.splice(numAleatorio, 1)
                    break;

                case 6: 
                    grupo7.push(pote3[numAleatorio])
                    pote3.splice(numAleatorio, 1)
                    break;

                case 7: 
                    grupo8.push(pote3[numAleatorio])
                    pote3.splice(numAleatorio, 1)
                    break;
            }
        }
        addTimesPote4()
    }

    function addTimesPote2(){

        for (let i = 0; i < 8; i++) {
            let numAleatorio = Math.floor(Math.random()*pote2.length)

            switch (i) {
                case 0:
                    grupo1.push(pote2[numAleatorio])
                    pote2.splice(numAleatorio, 1)
                    break;
            
                case 1:
                    grupo2.push(pote2[numAleatorio])
                    pote2.splice(numAleatorio, 1)
                    break;

                case 2:
                    grupo3.push(pote2[numAleatorio])
                    pote2.splice(numAleatorio, 1)
                    break;

                case 3:
                    grupo4.push(pote2[numAleatorio])
                    pote2.splice(numAleatorio, 1)
                    break;

                case 4:
                    grupo5.push(pote2[numAleatorio])
                    pote2.splice(numAleatorio, 1)
                    break;

                case 5:
                    grupo6.push(pote2[numAleatorio])
                    pote2.splice(numAleatorio, 1)
                    break;

                case 6:
                    grupo7.push(pote2[numAleatorio])
                    pote2.splice(numAleatorio, 1)
                    break;

                case 7:
                    grupo8.push(pote2[numAleatorio])
                    pote2.splice(numAleatorio, 1)
                    break;
            }
        }
        addTimesPote3()
    }

    function addTimesPote1(){
        
        for(let i = 0;i<8;i++){
            let numAleatorio = Math.floor(Math.random()*pote1.length)
            
            switch (i) {
                case 0:
                    grupo1.push(pote1[numAleatorio])
                    pote1.splice(numAleatorio, 1)
                    break;
            
                case 1:
                    grupo2.push(pote1[numAleatorio])
                    pote1.splice(numAleatorio, 1)
                    break;

                case 2:
                    grupo3.push(pote1[numAleatorio])
                    pote1.splice(numAleatorio, 1)
                    break;
                
                case 3:
                    grupo4.push(pote1[numAleatorio])
                    pote1.splice(numAleatorio, 1)
                    break;

                case 4:
                    grupo5.push(pote1[numAleatorio])
                    pote1.splice(numAleatorio, 1)
                    break;

                case 5:
                    grupo6.push(pote1[numAleatorio])
                    pote1.splice(numAleatorio, 1)
                    break;

                case 6:
                    grupo7.push(pote1[numAleatorio])
                    pote1.splice(numAleatorio, 1)
                    break;

                case 7:
                    grupo8.push(pote1[numAleatorio])
                    pote1.splice(numAleatorio, 1)
                    break;
            }
        }
        addTimesPote2()
    }

    grupo1 = JSON.parse(sessionStorage.getItem('grupoA'))
    grupo2 = JSON.parse(sessionStorage.getItem('grupoB'))
    grupo3 = JSON.parse(sessionStorage.getItem('grupoC'))
    grupo4 = JSON.parse(sessionStorage.getItem('grupoD'))
    grupo5 = JSON.parse(sessionStorage.getItem('grupoE'))
    grupo6 = JSON.parse(sessionStorage.getItem('grupoF'))
    grupo7 = JSON.parse(sessionStorage.getItem('grupoG'))
    grupo8 = JSON.parse(sessionStorage.getItem('grupoH'))

    return(
        <>
            <Header fases='fase de grupos' previousLink='/terceira-fase' nextLink=''/>

            <GrupoA group={grupo1}/>

            <GrupoB group={grupo2}/>

            <GrupoC group={grupo3}/>

            <GrupoD group={grupo4}/>

            <GrupoE group={grupo5}/>

            <GrupoF group={grupo6}/>

            <GrupoG group={grupo7}/>

            <GrupoH group={grupo8}/>
        </>
    )
}