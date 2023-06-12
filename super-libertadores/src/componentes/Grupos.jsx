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
                    if(grupo1[0].pais == pote3[numAleatorio].pais || grupo1[1].pais == pote3[numAleatorio].pais){
                        console.log(`GRUPO A ${pote3[numAleatorio].time}`)
                        do {
                            numAleatorio = Math.floor(Math.random()*pote3.length)
                        } while (
                            grupo1[0].pais == pote3[numAleatorio].pais 
                                || grupo1[1].pais == pote3[numAleatorio].pais 
                        )
                        grupo1.push(pote3[numAleatorio])
                        pote3.splice(numAleatorio, 1)
                    }else{
                        grupo1.push(pote3[numAleatorio])
                        pote3.splice(numAleatorio, 1)
                    }
                    break;

                case 1:
                    if(grupo2[0].pais == pote3[numAleatorio].pais || grupo2[1].pais == pote3[numAleatorio].pais){
                        console.log(`GRUPO B ${pote3[numAleatorio].time}`)
                        do {
                            numAleatorio = Math.floor(Math.random()*pote3.length)
                        } while (
                            grupo2[0].pais == pote3[numAleatorio].pais 
                                || grupo2[1].pais == pote3[numAleatorio].pais 
                        )
                        grupo2.push(pote3[numAleatorio])
                        pote3.splice(numAleatorio, 1)
                    }else{
                        grupo2.push(pote3[numAleatorio])
                        pote3.splice(numAleatorio, 1)
                    }
                    break;

                case 2: 
                    if(grupo3[0].pais == pote3[numAleatorio].pais || grupo3[1].pais == pote3[numAleatorio].pais){
                        console.log(`GRUPO C ${pote3[numAleatorio].time}`)
                        do {
                            numAleatorio = Math.floor(Math.random()*pote3.length)
                        } while (
                            grupo3[0].pais == pote3[numAleatorio].pais 
                                || grupo3[1].pais == pote3[numAleatorio].pais 
                        )
                        grupo3.push(pote3[numAleatorio])
                        pote3.splice(numAleatorio, 1)
                    }else{
                        grupo3.push(pote3[numAleatorio])
                        pote3.splice(numAleatorio, 1)
                    }
                    break;

                case 3: 
                    if(grupo4[0].pais == pote3[numAleatorio].pais || grupo4[1].pais == pote3[numAleatorio].pais){
                        console.log(`GRUPO D ${pote3[numAleatorio].time}`)
                        do {
                            numAleatorio = Math.floor(Math.random()*pote3.length)
                        } while (
                            grupo4[0].pais == pote3[numAleatorio].pais 
                                || grupo4[1].pais == pote3[numAleatorio].pais 
                        )
                        grupo4.push(pote3[numAleatorio])
                        pote3.splice(numAleatorio, 1)
                    }else{
                        grupo4.push(pote3[numAleatorio])
                        pote3.splice(numAleatorio, 1)
                    }
                    break;

                case 4: 
                    if(grupo5[0].pais == pote3[numAleatorio].pais || grupo5[1].pais == pote3[numAleatorio].pais){
                        console.log(`GRUPO E ${pote3[numAleatorio].time}`)
                        do {
                            numAleatorio = Math.floor(Math.random()*pote3.length)
                        } while (
                            grupo5[0].pais == pote3[numAleatorio].pais 
                                || grupo5[1].pais == pote3[numAleatorio].pais 
                        )
                        grupo5.push(pote3[numAleatorio])
                        pote3.splice(numAleatorio, 1)
                    }else{
                        grupo5.push(pote3[numAleatorio])
                        pote3.splice(numAleatorio, 1)
                    }
                    break;

                case 5: 
                    if(grupo6[0].pais == pote3[numAleatorio].pais || grupo6[1].pais == pote3[numAleatorio].pais){
                        console.log(`GRUPO F ${pote3[numAleatorio].time}`)
                        do {
                            numAleatorio = Math.floor(Math.random()*pote3.length)
                        } while (
                            grupo6[0].pais == pote3[numAleatorio].pais 
                                || grupo6[1].pais == pote3[numAleatorio].pais 
                        )
                        grupo6.push(pote3[numAleatorio])
                        pote3.splice(numAleatorio, 1)
                    }else{
                        grupo6.push(pote3[numAleatorio])
                        pote3.splice(numAleatorio, 1)
                    }
                    break;

                case 6: 
                    if(grupo7[0].pais == pote3[numAleatorio].pais || grupo7[1].pais == pote3[numAleatorio].pais){
                        console.log(`GRUPO G ${pote3[numAleatorio].time}`)
                        grupo7.push(pote3[numAleatorio])

                        if(
                            grupo7[2].pais != grupo6[0].pais && grupo7[2].pais != grupo6[1].pais
                                &&
                                grupo6[2].pais != grupo7[0].pais && grupo6[2].pais != grupo7[1].pais
                        ){
                            let time1 = grupo6[2]
                            let time2 = grupo7[2]
                            grupo6[2] = time2
                            grupo7[2] = time1
                        }else if(
                            grupo7[2].pais != grupo5[0].pais && grupo7[2].pais != grupo5[1].pais
                                &&
                                grupo5[2].pais != grupo7[0].pais && grupo5[2].pais != grupo7[1].pais
                        ){
                            let time1 = grupo5[2]
                            let time2 = grupo7[2]
                            grupo5[2] = time2
                            grupo7[2] = time1
                        }else if(
                            grupo7[2].pais != grupo4[0].pais && grupo7[2].pais != grupo4[1].pais
                                &&
                                grupo4[2].pais != grupo7[0].pais && grupo4[2].pais != grupo7[1].pais
                        ){
                            let time1 = grupo4[2]
                            let time2 = grupo7[2]
                            grupo4[2] = time2
                            grupo7[2] = time1
                        }else if(
                            grupo7[2].pais != grupo3[0].pais && grupo7[2].pais != grupo3[1].pais
                                &&
                                grupo3[2].pais != grupo7[0].pais && grupo3[2].pais != grupo7[1].pais
                        ){
                            let time1 = grupo3[2]
                            let time2 = grupo7[2]
                            grupo3[2] = time2
                            grupo7[2] = time1
                        }else if(
                            grupo7[2].pais != grupo2[0].pais && grupo7[2].pais != grupo2[1].pais
                                &&
                                grupo2[2].pais != grupo7[0].pais && grupo2[2].pais != grupo7[1].pais
                        ){
                            let time1 = grupo2[2]
                            let time2 = grupo7[2]
                            grupo2[2] = time2
                            grupo7[2] = time1
                        }else{
                            let time1 = grupo1[2]
                            let time2 = grupo7[2]
                            grupo1[2] = time2
                            grupo7[2] = time1
                        }
                    }else{
                        grupo7.push(pote3[numAleatorio])
                        pote3.splice(numAleatorio, 1)
                    }
                    break;

                case 7: 
                    grupo8.push(pote3[numAleatorio])
                    pote3.splice(numAleatorio, 1)

                    if(grupo8[0].pais == grupo8[2].pais || grupo8[1].pais == grupo8[2].pais){
                        console.log(`GRUPO H ${grupo8[2].time}`)
                        if(
                            grupo8[2].pais != grupo7[0].pais && grupo8[2].pais != grupo7[1].pais
                                &&
                                grupo7[2].pais != grupo8[0].pais && grupo7[2].pais != grupo8[1].pais
                        ){
                            let time1 = grupo7[2]
                            let time2 = grupo8[2]
                            grupo7[2] = time2
                            grupo8[2] = time1
                        }else if(
                            grupo8[2].pais != grupo6[0].pais && grupo8[2].pais != grupo6[1].pais
                                &&
                                grupo6[2].pais != grupo8[0].pais && grupo6[2].pais != grupo8[1].pais
                        ){
                            let time1 = grupo6[2]
                            let time2 = grupo8[2]
                            grupo6[2] = time2
                            grupo8[2] = time1
                        }else if(
                            grupo8[2].pais != grupo5[0].pais && grupo8[2].pais != grupo5[1].pais
                                &&
                                grupo5[2].pais != grupo8[0].pais && grupo5[2].pais != grupo8[1].pais
                        ){
                            let time1 = grupo5[2]
                            let time2 = grupo8[2]
                            grupo5[2] = time2
                            grupo8[2] = time1
                        }else if(
                            grupo8[2].pais != grupo4[0].pais && grupo8[2].pais != grupo4[1].pais
                                &&
                                grupo4[2].pais != grupo8[0].pais && grupo4[2].pais != grupo8[1].pais
                        ){
                            let time1 = grupo4[2]
                            let time2 = grupo8[2]
                            grupo4[2] = time2
                            grupo8[2] = time1
                        }else if(
                            grupo8[2].pais != grupo3[0].pais && grupo8[2].pais != grupo3[1].pais
                                &&
                                grupo3[2].pais != grupo8[0].pais && grupo3[2].pais != grupo8[1].pais
                        ){
                            let time1 = grupo3[2]
                            let time2 = grupo8[2]
                            grupo3[2] = time2
                            grupo8[2] = time1
                        }else if(
                            grupo8[2].pais != grupo2[0].pais && grupo8[2].pais != grupo2[1].pais
                                &&
                                grupo2[2].pais != grupo8[0].pais && grupo2[2].pais != grupo8[1].pais
                        ){
                            let time1 = grupo2[2]
                            let time2 = grupo8[2]
                            grupo2[2] = time2
                            grupo8[2] = time1
                        }else{
                            let time1 = grupo1[2]
                            let time2 = grupo8[2]
                            grupo1[2] = time2
                            grupo8[2] = time1
                        }
                    }
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
                    if(grupo1[0].pais == pote2[numAleatorio].pais){
                        console.log(`GRUPO A ${pote2[numAleatorio].time}`)
                        do {
                            numAleatorio = Math.floor(Math.random()*pote2.length)
                        } while (grupo1[0].pais == pote2[numAleatorio].pais)
                        grupo1.push(pote2[numAleatorio])
                        pote2.splice(numAleatorio, 1)
                    }else{
                        grupo1.push(pote2[numAleatorio])
                        pote2.splice(numAleatorio, 1)
                    }
                    break;
            
                case 1:
                    if(grupo2[0].pais == pote2[numAleatorio].pais){
                        console.log(`GRUPO B ${pote2[numAleatorio].time}`)
                        do {
                            numAleatorio = Math.floor(Math.random()*pote2.length)
                        } while (grupo2[0].pais == pote2[numAleatorio].pais)
                        grupo2.push(pote2[numAleatorio])
                        pote2.splice(numAleatorio, 1)
                    }else{
                        grupo2.push(pote2[numAleatorio])
                        pote2.splice(numAleatorio, 1)
                    }
                    break;

                case 2:
                    if(grupo3[0].pais == pote2[numAleatorio].pais){
                        console.log(`GRUPO C ${pote2[numAleatorio].time}`)
                        do {
                            numAleatorio = Math.floor(Math.random()*pote2.length)
                        } while (grupo3[0].pais == pote2[numAleatorio].pais)
                        grupo3.push(pote2[numAleatorio])
                        pote2.splice(numAleatorio, 1)
                    }else{
                        grupo3.push(pote2[numAleatorio])
                        pote2.splice(numAleatorio, 1)
                    }
                    break;

                case 3:
                    if(grupo4[0].pais == pote2[numAleatorio].pais){
                        console.log(`GRUPO D ${pote2[numAleatorio].time}`)
                        do {
                            numAleatorio = Math.floor(Math.random()*pote2.length)
                        } while (grupo4[0].pais == pote2[numAleatorio].pais)
                        grupo4.push(pote2[numAleatorio])
                        pote2.splice(numAleatorio, 1)
                    }else{
                        grupo4.push(pote2[numAleatorio])
                        pote2.splice(numAleatorio, 1)
                    }
                    break;

                case 4:
                    if(grupo5[0].pais == pote2[numAleatorio].pais){
                        console.log(`GRUPO E ${pote2[numAleatorio].time}`)
                        console.log(`GRUPO E ATENÇÃO!!!`)
                        if(
                            grupo5[0].pais == pote2[0].pais
                                &&
                                grupo5[0].pais == pote2[1].pais
                                    &&
                                    grupo5[0].pais == pote2[2].pais
                                        &&
                                        grupo5[0].pais == pote2[3].pais
                        ){
                            grupo5.push(pote2[numAleatorio])

                            if(grupo5[1].pais != grupo4[0].pais && grupo5[0].pais != grupo4[1].pais){
                                let time1 = grupo4[1]
                                let time2 = grupo5[1]
                                grupo4[1] = time2
                                grupo5[1] = time1
                            }else if(grupo5[1].pais != grupo3[0].pais && grupo5[0].pais != grupo3[1].pais){
                                let time1 = grupo3[1]
                                let time2 = grupo5[1]
                                grupo3[1] = time2
                                grupo5[1] = time1
                            }else if(grupo5[1].pais != grupo2[0].pais && grupo5[0].pais != grupo2[1].pais){
                                let time1 = grupo2[1]
                                let time2 = grupo5[1]
                                grupo2[1] = time2
                                grupo5[1] = time1
                            }else{
                                let time1 = grupo1[1]
                                let time2 = grupo5[1]
                                grupo1[1] = time2
                                grupo5[1] = time1
                            }
                        }else{
                            do {
                                numAleatorio = Math.floor(Math.random()*pote2.length)
                            } while (grupo5[0].pais == pote2[numAleatorio].pais)
                            grupo5.push(pote2[numAleatorio])
                            pote2.splice(numAleatorio, 1)
                        }
                    }else{
                        grupo5.push(pote2[numAleatorio])
                        pote2.splice(numAleatorio, 1)
                    }
                    break;

                case 5:
                    if(grupo6[0].pais == pote2[numAleatorio].pais){
                        console.log(`GRUPO F ${pote2[numAleatorio].time}`)
                        if(
                            grupo6[0].pais == pote2[0].pais
                                &&
                                grupo6[0].pais == pote2[1].pais
                                    &&
                                    grupo6[0].pais == pote2[2].pais
                        ){
                            grupo6.push(pote2[numAleatorio])

                            if(grupo6[1].pais != grupo5[0].pais && grupo6[0].pais != grupo5[1].pais){
                                let time1 = grupo5[1]
                                let time2 = grupo6[1]
                                grupo5[1] = time2
                                grupo6[1] = time1
                            }else if(grupo6[1].pais != grupo4[0].pais && grupo6[0].pais != grupo4[1].pais){
                                let time1 = grupo4[1]
                                let time2 = grupo6[1]
                                grupo4[1] = time2
                                grupo6[1] = time1
                            }else if(grupo6[1].pais != grupo3[0].pais && grupo6[0].pais != grupo3[1].pais){
                                let time1 = grupo3[1]
                                let time2 = grupo6[1]
                                grupo3[1] = time2
                                grupo6[1] = time1
                            }else if(grupo6[1].pais != grupo2[0].pais && grupo6[0].pais != grupo2[1].pais){
                                let time1 = grupo2[1]
                                let time2 = grupo6[1]
                                grupo2[1] = time2
                                grupo6[1] = time1
                            }else{
                                let time1 = grupo1[1]
                                let time2 = grupo6[1]
                                grupo1[1] = time2
                                grupo6[1] = time1
                            }
                        }else{
                            do {
                                numAleatorio = Math.floor(Math.random()*pote2.length)
                            } while (grupo6[0].pais == pote2[numAleatorio].pais)
                            grupo6.push(pote2[numAleatorio])
                            pote2.splice(numAleatorio, 1)
                        }
                    }else{
                        grupo6.push(pote2[numAleatorio])
                        pote2.splice(numAleatorio, 1)
                    }
                    break;

                case 6:
                    if(grupo7[0].pais == pote2[numAleatorio].pais){
                        console.log(`GRUPO G ${pote2[numAleatorio].time}`)
                        if(
                            grupo7[0].pais == pote2[0].pais
                                &&
                                grupo7[0].pais == pote2[1].pais
                        ){
                            grupo7.push(pote2[numAleatorio])

                            if(grupo7[1].pais != grupo6[0].pais && grupo7[0].pais != grupo6[1].pais){
                                let time1 = grupo6[1]
                                let time2 = grupo7[1]
                                grupo6[1] = time2
                                grupo7[1] = time1
                            }else if(grupo7[1].pais != grupo5[0].pais && grupo7[0].pais != grupo5[1].pais){
                                let time1 = grupo5[1]
                                let time2 = grupo7[1]
                                grupo5[1] = time2
                                grupo7[1] = time1
                            }else if(grupo7[1].pais != grupo4[0].pais && grupo7[0].pais != grupo4[1].pais){
                                let time1 = grupo4[1]
                                let time2 = grupo7[1]
                                grupo4[1] = time2
                                grupo7[1] = time1
                            }else if(grupo7[1].pais != grupo3[0].pais && grupo7[0].pais != grupo3[1].pais){
                                let time1 = grupo3[1]
                                let time2 = grupo7[1]
                                grupo3[1] = time2
                                grupo7[1] = time1
                            }else if(grupo7[1].pais != grupo2[0].pais && grupo7[0].pais != grupo2[1].pais){
                                let time1 = grupo2[1]
                                let time2 = grupo7[1]
                                grupo2[1] = time2
                                grupo7[1] = time1
                            }else{
                                let time1 = grupo1[1]
                                let time2 = grupo7[1]
                                grupo1[1] = time2
                                grupo7[1] = time1
                            }
                        }else{
                            do {
                                numAleatorio = Math.floor(Math.random()*pote2.length)
                            } while (grupo7[0].pais == pote2[numAleatorio].pais)
                            grupo7.push(pote2[numAleatorio])
                            pote2.splice(numAleatorio, 1)
                        }
                    }else{
                        grupo7.push(pote2[numAleatorio])
                        pote2.splice(numAleatorio, 1)
                    }
                    break;

                case 7:
                    grupo8.push(pote2[numAleatorio])
                    pote2.splice(numAleatorio, 1)

                    if(grupo8[0].pais == grupo8[1].pais){
                        console.log(`GRUPO H ${grupo8[1].time}`)
                        if(grupo8[1].pais != grupo7[0].pais && grupo8[0].pais != grupo7[1].pais){
                            let time1 = grupo7[1]
                            let time2 = grupo8[1]
                            grupo7[1] = time2
                            grupo8[1] = time1
                        }else if(grupo8[1].pais != grupo6[0].pais && grupo8[0].pais != grupo6[1].pais){
                            let time1 = grupo6[1]
                            let time2 = grupo8[1]
                            grupo6[1] = time2
                            grupo8[1] = time1
                        }else if(grupo8[1].pais != grupo5[0].pais && grupo8[0].pais != grupo5[1].pais){
                            let time1 = grupo5[1]
                            let time2 = grupo8[1]
                            grupo5[1] = time2
                            grupo8[1] = time1
                        }else if(grupo8[1].pais != grupo4[0].pais && grupo8[0].pais != grupo4[1].pais){
                            let time1 = grupo4[1]
                            let time2 = grupo8[1]
                            grupo4[1] = time2
                            grupo8[1] = time1
                        }else if(grupo8[1].pais != grupo3[0].pais && grupo8[0].pais != grupo3[1].pais){
                            let time1 = grupo3[1]
                            let time2 = grupo8[1]
                            grupo3[1] = time2
                            grupo8[1] = time1
                        }else if(grupo8[1].pais != grupo2[0].pais && grupo8[0].pais != grupo2[1].pais){
                            let time1 = grupo2[1]
                            let time2 = grupo8[1]
                            grupo2[1] = time2
                            grupo8[1] = time1
                        }else{
                            let time1 = grupo1[1]
                            let time2 = grupo8[1]
                            grupo1[1] = time2
                            grupo8[1] = time1
                        }
                    }
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