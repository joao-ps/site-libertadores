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
    function setTeamPage(newTeam, num, localizacao){
        let confronto = document.querySelectorAll('.confronto')
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

    function pageAlternatives(newTeam, num, localizacao){
        let confronto = document.querySelectorAll('.confronto')
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

    function rezise(){
        let JgGA1 = JSON.parse(sessionStorage.getItem('RoundA1'))
        let JgGA2 = JSON.parse(sessionStorage.getItem('RoundA2'))
        let JgGA3 = JSON.parse(sessionStorage.getItem('RoundA3'))
        let JgGA4 = JSON.parse(sessionStorage.getItem('RoundA4'))
        let JgGA5 = JSON.parse(sessionStorage.getItem('RoundA5'))
        let JgGA6 = JSON.parse(sessionStorage.getItem('RoundA6'))

        let JgGB1 = JSON.parse(sessionStorage.getItem('RoundB1'))
        let JgGB2 = JSON.parse(sessionStorage.getItem('RoundB2'))
        let JgGB3 = JSON.parse(sessionStorage.getItem('RoundB3'))
        let JgGB4 = JSON.parse(sessionStorage.getItem('RoundB4'))
        let JgGB5 = JSON.parse(sessionStorage.getItem('RoundB5'))
        let JgGB6 = JSON.parse(sessionStorage.getItem('RoundB6'))

        let JgGC1 = JSON.parse(sessionStorage.getItem('RoundC1'))
        let JgGC2 = JSON.parse(sessionStorage.getItem('RoundC2'))
        let JgGC3 = JSON.parse(sessionStorage.getItem('RoundC3'))
        let JgGC4 = JSON.parse(sessionStorage.getItem('RoundC4'))
        let JgGC5 = JSON.parse(sessionStorage.getItem('RoundC5'))
        let JgGC6 = JSON.parse(sessionStorage.getItem('RoundC6'))

        let JgGD1 = JSON.parse(sessionStorage.getItem('RoundD1'))
        let JgGD2 = JSON.parse(sessionStorage.getItem('RoundD2'))
        let JgGD3 = JSON.parse(sessionStorage.getItem('RoundD3'))
        let JgGD4 = JSON.parse(sessionStorage.getItem('RoundD4'))
        let JgGD5 = JSON.parse(sessionStorage.getItem('RoundD5'))
        let JgGD6 = JSON.parse(sessionStorage.getItem('RoundD6'))

        let JgGE1 = JSON.parse(sessionStorage.getItem('RoundE1'))
        let JgGE2 = JSON.parse(sessionStorage.getItem('RoundE2'))
        let JgGE3 = JSON.parse(sessionStorage.getItem('RoundE3'))
        let JgGE4 = JSON.parse(sessionStorage.getItem('RoundE4'))
        let JgGE5 = JSON.parse(sessionStorage.getItem('RoundE5'))
        let JgGE6 = JSON.parse(sessionStorage.getItem('RoundE6'))

        let JgGF1 = JSON.parse(sessionStorage.getItem('RoundF1'))
        let JgGF2 = JSON.parse(sessionStorage.getItem('RoundF2'))
        let JgGF3 = JSON.parse(sessionStorage.getItem('RoundF3'))
        let JgGF4 = JSON.parse(sessionStorage.getItem('RoundF4'))
        let JgGF5 = JSON.parse(sessionStorage.getItem('RoundF5'))
        let JgGF6 = JSON.parse(sessionStorage.getItem('RoundF6'))

        let JgGG1 = JSON.parse(sessionStorage.getItem('RoundG1'))
        let JgGG2 = JSON.parse(sessionStorage.getItem('RoundG2'))
        let JgGG3 = JSON.parse(sessionStorage.getItem('RoundG3'))
        let JgGG4 = JSON.parse(sessionStorage.getItem('RoundG4'))
        let JgGG5 = JSON.parse(sessionStorage.getItem('RoundG5'))
        let JgGG6 = JSON.parse(sessionStorage.getItem('RoundG6'))

        let JgGH1 = JSON.parse(sessionStorage.getItem('RoundH1'))
        let JgGH2 = JSON.parse(sessionStorage.getItem('RoundH2'))
        let JgGH3 = JSON.parse(sessionStorage.getItem('RoundH3'))
        let JgGH4 = JSON.parse(sessionStorage.getItem('RoundH4'))
        let JgGH5 = JSON.parse(sessionStorage.getItem('RoundH5'))
        let JgGH6 = JSON.parse(sessionStorage.getItem('RoundH6'))

        if(window.innerWidth < 1050 && window.innerWidth > 800){
            if(JgGA1 != null){
                setTeamPage(JgGA1[0], 0, 'ida')
                setTeamPage(JgGA1[1], 1, 'volta')
                setTeamPage(JgGA1[2], 2, 'ida')
                setTeamPage(JgGA1[3], 3, 'volta')
                setTeamPage(JgGA2[0], 4, 'ida')
                setTeamPage(JgGA2[1], 5, 'volta')
                setTeamPage(JgGA2[2], 6, 'ida')
                setTeamPage(JgGA2[3], 7, 'volta')
                setTeamPage(JgGA3[0], 8, 'ida')
                setTeamPage(JgGA3[1], 9, 'volta')
                setTeamPage(JgGA3[2], 10, 'ida')
                setTeamPage(JgGA3[3], 11, 'volta')
                setTeamPage(JgGA4[0], 12, 'ida')
                setTeamPage(JgGA4[1], 13, 'volta')
                setTeamPage(JgGA4[2], 14, 'ida')
                setTeamPage(JgGA4[3], 15, 'volta')
                setTeamPage(JgGA5[0], 16, 'ida')
                setTeamPage(JgGA5[1], 17, 'volta')
                setTeamPage(JgGA5[2], 18, 'ida')
                setTeamPage(JgGA5[3], 19, 'volta')
                setTeamPage(JgGA6[0], 20, 'ida')
                setTeamPage(JgGA6[1], 21, 'volta')
                setTeamPage(JgGA6[2], 22, 'ida')
                setTeamPage(JgGA6[3], 23, 'volta')

                setTeamPage(JgGB1[0], 24, 'ida')
                setTeamPage(JgGB1[1], 25, 'volta')
                setTeamPage(JgGB1[2], 26, 'ida')
                setTeamPage(JgGB1[3], 27, 'volta')
                setTeamPage(JgGB2[0], 28, 'ida')
                setTeamPage(JgGB2[1], 29, 'volta')
                setTeamPage(JgGB2[2], 30, 'ida')
                setTeamPage(JgGB2[3], 31, 'volta')
                setTeamPage(JgGB3[0], 32, 'ida')
                setTeamPage(JgGB3[1], 33, 'volta')
                setTeamPage(JgGB3[2], 34, 'ida')
                setTeamPage(JgGB3[3], 35, 'volta')
                setTeamPage(JgGB4[0], 36, 'ida')
                setTeamPage(JgGB4[1], 37, 'volta')
                setTeamPage(JgGB4[2], 38, 'ida')
                setTeamPage(JgGB4[3], 39, 'volta')
                setTeamPage(JgGB5[0], 40, 'ida')
                setTeamPage(JgGB5[1], 41, 'volta')
                setTeamPage(JgGB5[2], 42, 'ida')
                setTeamPage(JgGB5[3], 43, 'volta')
                setTeamPage(JgGB6[0], 44, 'ida')
                setTeamPage(JgGB6[1], 45, 'volta')
                setTeamPage(JgGB6[2], 46, 'ida')
                setTeamPage(JgGB6[3], 47, 'volta')

                setTeamPage(JgGC1[0], 48, 'ida')
                setTeamPage(JgGC1[1], 49, 'volta')
                setTeamPage(JgGC1[2], 50, 'ida')
                setTeamPage(JgGC1[3], 51, 'volta')
                setTeamPage(JgGC2[0], 52, 'ida')
                setTeamPage(JgGC2[1], 53, 'volta')
                setTeamPage(JgGC2[2], 54, 'ida')
                setTeamPage(JgGC2[3], 55, 'volta')
                setTeamPage(JgGC3[0], 56, 'ida')
                setTeamPage(JgGC3[1], 57, 'volta')
                setTeamPage(JgGC3[2], 58, 'ida')
                setTeamPage(JgGC3[3], 59, 'volta')
                setTeamPage(JgGC4[0], 60, 'ida')
                setTeamPage(JgGC4[1], 61, 'volta')
                setTeamPage(JgGC4[2], 62, 'ida')
                setTeamPage(JgGC4[3], 63, 'volta')
                setTeamPage(JgGC5[0], 64, 'ida')
                setTeamPage(JgGC5[1], 65, 'volta')
                setTeamPage(JgGC5[2], 66, 'ida')
                setTeamPage(JgGC5[3], 67, 'volta')
                setTeamPage(JgGC6[0], 68, 'ida')
                setTeamPage(JgGC6[1], 69, 'volta')
                setTeamPage(JgGC6[2], 70, 'ida')
                setTeamPage(JgGC6[3], 71, 'volta')
                
                setTeamPage(JgGD1[0], 72, 'ida')
                setTeamPage(JgGD1[1], 73, 'volta')
                setTeamPage(JgGD1[2], 74, 'ida')
                setTeamPage(JgGD1[3], 75, 'volta')
                setTeamPage(JgGD2[0], 76, 'ida')
                setTeamPage(JgGD2[1], 77, 'volta')
                setTeamPage(JgGD2[2], 78, 'ida')
                setTeamPage(JgGD2[3], 79, 'volta')
                setTeamPage(JgGD3[0], 80, 'ida')
                setTeamPage(JgGD3[1], 81, 'volta')
                setTeamPage(JgGD3[2], 82, 'ida')
                setTeamPage(JgGD3[3], 83, 'volta')
                setTeamPage(JgGD4[0], 84, 'ida')
                setTeamPage(JgGD4[1], 85, 'volta')
                setTeamPage(JgGD4[2], 86, 'ida')
                setTeamPage(JgGD4[3], 87, 'volta')
                setTeamPage(JgGD5[0], 88, 'ida')
                setTeamPage(JgGD5[1], 89, 'volta')
                setTeamPage(JgGD5[2], 90, 'ida')
                setTeamPage(JgGD5[3], 91, 'volta')
                setTeamPage(JgGD6[0], 92, 'ida')
                setTeamPage(JgGD6[1], 93, 'volta')
                setTeamPage(JgGD6[2], 94, 'ida')
                setTeamPage(JgGD6[3], 95, 'volta')

                setTeamPage(JgGE1[0], 96, 'ida')
                setTeamPage(JgGE1[1], 97, 'volta')
                setTeamPage(JgGE1[2], 98, 'ida')
                setTeamPage(JgGE1[3], 99, 'volta')
                setTeamPage(JgGE2[0], 100, 'ida')
                setTeamPage(JgGE2[1], 101, 'volta')
                setTeamPage(JgGE2[2], 102, 'ida')
                setTeamPage(JgGE2[3], 103, 'volta')
                setTeamPage(JgGE3[0], 104, 'ida')
                setTeamPage(JgGE3[1], 105, 'volta')
                setTeamPage(JgGE3[2], 106, 'ida')
                setTeamPage(JgGE3[3], 107, 'volta')
                setTeamPage(JgGE4[0], 108, 'ida')
                setTeamPage(JgGE4[1], 109, 'volta')
                setTeamPage(JgGE4[2], 110, 'ida')
                setTeamPage(JgGE4[3], 111, 'volta')
                setTeamPage(JgGE5[0], 112, 'ida')
                setTeamPage(JgGE5[1], 113, 'volta')
                setTeamPage(JgGE5[2], 114, 'ida')
                setTeamPage(JgGE5[3], 115, 'volta')
                setTeamPage(JgGE6[0], 116, 'ida')
                setTeamPage(JgGE6[1], 117, 'volta')
                setTeamPage(JgGE6[2], 118, 'ida')
                setTeamPage(JgGE6[3], 119, 'volta')

                setTeamPage(JgGF1[0], 120, 'ida')
                setTeamPage(JgGF1[1], 121, 'volta')
                setTeamPage(JgGF1[2], 122, 'ida')
                setTeamPage(JgGF1[3], 123, 'volta')
                setTeamPage(JgGF2[0], 124, 'ida')
                setTeamPage(JgGF2[1], 125, 'volta')
                setTeamPage(JgGF2[2], 126, 'ida')
                setTeamPage(JgGF2[3], 127, 'volta')
                setTeamPage(JgGF3[0], 128, 'ida')
                setTeamPage(JgGF3[1], 129, 'volta')
                setTeamPage(JgGF3[2], 130, 'ida')
                setTeamPage(JgGF3[3], 131, 'volta')
                setTeamPage(JgGF4[0], 132, 'ida')
                setTeamPage(JgGF4[1], 133, 'volta')
                setTeamPage(JgGF4[2], 134, 'ida')
                setTeamPage(JgGF4[3], 135, 'volta')
                setTeamPage(JgGF5[0], 136, 'ida')
                setTeamPage(JgGF5[1], 137, 'volta')
                setTeamPage(JgGF5[2], 138, 'ida')
                setTeamPage(JgGF5[3], 139, 'volta')
                setTeamPage(JgGF6[0], 140, 'ida')
                setTeamPage(JgGF6[1], 141, 'volta')
                setTeamPage(JgGF6[2], 142, 'ida')
                setTeamPage(JgGF6[3], 143, 'volta')

                setTeamPage(JgGG1[0], 144, 'ida')
                setTeamPage(JgGG1[1], 145, 'volta')
                setTeamPage(JgGG1[2], 146, 'ida')
                setTeamPage(JgGG1[3], 147, 'volta')
                setTeamPage(JgGG2[0], 148, 'ida')
                setTeamPage(JgGG2[1], 149, 'volta')
                setTeamPage(JgGG2[2], 150, 'ida')
                setTeamPage(JgGG2[3], 151, 'volta')
                setTeamPage(JgGG3[0], 152, 'ida')
                setTeamPage(JgGG3[1], 153, 'volta')
                setTeamPage(JgGG3[2], 154, 'ida')
                setTeamPage(JgGG3[3], 155, 'volta')
                setTeamPage(JgGG4[0], 156, 'ida')
                setTeamPage(JgGG4[1], 157, 'volta')
                setTeamPage(JgGG4[2], 158, 'ida')
                setTeamPage(JgGG4[3], 159, 'volta')
                setTeamPage(JgGG5[0], 160, 'ida')
                setTeamPage(JgGG5[1], 161, 'volta')
                setTeamPage(JgGG5[2], 162, 'ida')
                setTeamPage(JgGG5[3], 163, 'volta')
                setTeamPage(JgGG6[0], 164, 'ida')
                setTeamPage(JgGG6[1], 165, 'volta')
                setTeamPage(JgGG6[2], 166, 'ida')
                setTeamPage(JgGG6[3], 167, 'volta')

                setTeamPage(JgGH1[0], 168, 'ida')
                setTeamPage(JgGH1[1], 169, 'volta')
                setTeamPage(JgGH1[2], 170, 'ida')
                setTeamPage(JgGH1[3], 171, 'volta')
                setTeamPage(JgGH2[0], 172, 'ida')
                setTeamPage(JgGH2[1], 173, 'volta')
                setTeamPage(JgGH2[2], 174, 'ida')
                setTeamPage(JgGH2[3], 175, 'volta')
                setTeamPage(JgGH3[0], 176, 'ida')
                setTeamPage(JgGH3[1], 177, 'volta')
                setTeamPage(JgGH3[2], 178, 'ida')
                setTeamPage(JgGH3[3], 179, 'volta')
                setTeamPage(JgGH4[0], 180, 'ida')
                setTeamPage(JgGH4[1], 181, 'volta')
                setTeamPage(JgGH4[2], 182, 'ida')
                setTeamPage(JgGH4[3], 183, 'volta')
                setTeamPage(JgGH5[0], 184, 'ida')
                setTeamPage(JgGH5[1], 185, 'volta')
                setTeamPage(JgGH5[2], 186, 'ida')
                setTeamPage(JgGH5[3], 187, 'volta')
                setTeamPage(JgGH6[0], 188, 'ida')
                setTeamPage(JgGH6[1], 189, 'volta')
                setTeamPage(JgGH6[2], 190, 'ida')
                setTeamPage(JgGH6[3], 191, 'volta')
            }
        }else{
            if(JgGA1 != null){
                pageAlternatives(JgGA1[0], 0, 'ida')
                pageAlternatives(JgGA1[1], 1, 'volta')
                pageAlternatives(JgGA1[2], 2, 'ida')
                pageAlternatives(JgGA1[3], 3, 'volta')
                pageAlternatives(JgGA2[0], 4, 'ida')
                pageAlternatives(JgGA2[1], 5, 'volta')
                pageAlternatives(JgGA2[2], 6, 'ida')
                pageAlternatives(JgGA2[3], 7, 'volta')
                pageAlternatives(JgGA3[0], 8, 'ida')
                pageAlternatives(JgGA3[1], 9, 'volta')
                pageAlternatives(JgGA3[2], 10, 'ida')
                pageAlternatives(JgGA3[3], 11, 'volta')
                pageAlternatives(JgGA4[0], 12, 'ida')
                pageAlternatives(JgGA4[1], 13, 'volta')
                pageAlternatives(JgGA4[2], 14, 'ida')
                pageAlternatives(JgGA4[3], 15, 'volta')
                pageAlternatives(JgGA5[0], 16, 'ida')
                pageAlternatives(JgGA5[1], 17, 'volta')
                pageAlternatives(JgGA5[2], 18, 'ida')
                pageAlternatives(JgGA5[3], 19, 'volta')
                pageAlternatives(JgGA6[0], 20, 'ida')
                pageAlternatives(JgGA6[1], 21, 'volta')
                pageAlternatives(JgGA6[2], 22, 'ida')
                pageAlternatives(JgGA6[3], 23, 'volta')

                pageAlternatives(JgGB1[0], 24, 'ida')
                pageAlternatives(JgGB1[0], 24, 'ida')
                pageAlternatives(JgGB1[1], 25, 'volta')
                pageAlternatives(JgGB1[2], 26, 'ida')
                pageAlternatives(JgGB1[3], 27, 'volta')
                pageAlternatives(JgGB2[0], 28, 'ida')
                pageAlternatives(JgGB2[1], 29, 'volta')
                pageAlternatives(JgGB2[2], 30, 'ida')
                pageAlternatives(JgGB2[3], 31, 'volta')
                pageAlternatives(JgGB3[0], 32, 'ida')
                pageAlternatives(JgGB3[1], 33, 'volta')
                pageAlternatives(JgGB3[2], 34, 'ida')
                pageAlternatives(JgGB3[3], 35, 'volta')
                pageAlternatives(JgGB4[0], 36, 'ida')
                pageAlternatives(JgGB4[1], 37, 'volta')
                pageAlternatives(JgGB4[2], 38, 'ida')
                pageAlternatives(JgGB4[3], 39, 'volta')
                pageAlternatives(JgGB5[0], 40, 'ida')
                pageAlternatives(JgGB5[1], 41, 'volta')
                pageAlternatives(JgGB5[2], 42, 'ida')
                pageAlternatives(JgGB5[3], 43, 'volta')
                pageAlternatives(JgGB6[0], 44, 'ida')
                pageAlternatives(JgGB6[1], 45, 'volta')
                pageAlternatives(JgGB6[2], 46, 'ida')
                pageAlternatives(JgGB6[3], 47, 'volta')

                pageAlternatives(JgGC1[0], 48, 'ida')
                pageAlternatives(JgGC1[1], 49, 'volta')
                pageAlternatives(JgGC1[2], 50, 'ida')
                pageAlternatives(JgGC1[3], 51, 'volta')
                pageAlternatives(JgGC2[0], 52, 'ida')
                pageAlternatives(JgGC2[1], 53, 'volta')
                pageAlternatives(JgGC2[2], 54, 'ida')
                pageAlternatives(JgGC2[3], 55, 'volta')
                pageAlternatives(JgGC3[0], 56, 'ida')
                pageAlternatives(JgGC3[1], 57, 'volta')
                pageAlternatives(JgGC3[2], 58, 'ida')
                pageAlternatives(JgGC3[3], 59, 'volta')
                pageAlternatives(JgGC4[0], 60, 'ida')
                pageAlternatives(JgGC4[1], 61, 'volta')
                pageAlternatives(JgGC4[2], 62, 'ida')
                pageAlternatives(JgGC4[3], 63, 'volta')
                pageAlternatives(JgGC5[0], 64, 'ida')
                pageAlternatives(JgGC5[1], 65, 'volta')
                pageAlternatives(JgGC5[2], 66, 'ida')
                pageAlternatives(JgGC5[3], 67, 'volta')
                pageAlternatives(JgGC6[0], 68, 'ida')
                pageAlternatives(JgGC6[1], 69, 'volta')
                pageAlternatives(JgGC6[2], 70, 'ida')
                pageAlternatives(JgGC6[3], 71, 'volta')

                pageAlternatives(JgGD1[0], 72, 'ida')
                pageAlternatives(JgGD1[1], 73, 'volta')
                pageAlternatives(JgGD1[2], 74, 'ida')
                pageAlternatives(JgGD1[3], 75, 'volta')
                pageAlternatives(JgGD2[0], 76, 'ida')
                pageAlternatives(JgGD2[1], 77, 'volta')
                pageAlternatives(JgGD2[2], 78, 'ida')
                pageAlternatives(JgGD2[3], 79, 'volta')
                pageAlternatives(JgGD3[0], 80, 'ida')
                pageAlternatives(JgGD3[1], 81, 'volta')
                pageAlternatives(JgGD3[2], 82, 'ida')
                pageAlternatives(JgGD3[3], 83, 'volta')
                pageAlternatives(JgGD4[0], 84, 'ida')
                pageAlternatives(JgGD4[1], 85, 'volta')
                pageAlternatives(JgGD4[2], 86, 'ida')
                pageAlternatives(JgGD4[3], 87, 'volta')
                pageAlternatives(JgGD5[0], 88, 'ida')
                pageAlternatives(JgGD5[1], 89, 'volta')
                pageAlternatives(JgGD5[2], 90, 'ida')
                pageAlternatives(JgGD5[3], 91, 'volta')
                pageAlternatives(JgGD6[0], 92, 'ida')
                pageAlternatives(JgGD6[1], 93, 'volta')
                pageAlternatives(JgGD6[2], 94, 'ida')
                pageAlternatives(JgGD6[3], 95, 'volta')

                pageAlternatives(JgGE1[0], 96, 'ida')
                pageAlternatives(JgGE1[1], 97, 'volta')
                pageAlternatives(JgGE1[2], 98, 'ida')
                pageAlternatives(JgGE1[3], 99, 'volta')
                pageAlternatives(JgGE2[0], 100, 'ida')
                pageAlternatives(JgGE2[1], 101, 'volta')
                pageAlternatives(JgGE2[2], 102, 'ida')
                pageAlternatives(JgGE2[3], 103, 'volta')
                pageAlternatives(JgGE3[0], 104, 'ida')
                pageAlternatives(JgGE3[1], 105, 'volta')
                pageAlternatives(JgGE3[2], 106, 'ida')
                pageAlternatives(JgGE3[3], 107, 'volta')
                pageAlternatives(JgGE4[0], 108, 'ida')
                pageAlternatives(JgGE4[1], 109, 'volta')
                pageAlternatives(JgGE4[2], 110, 'ida')
                pageAlternatives(JgGE4[3], 111, 'volta')
                pageAlternatives(JgGE5[0], 112, 'ida')
                pageAlternatives(JgGE5[1], 113, 'volta')
                pageAlternatives(JgGE5[2], 114, 'ida')
                pageAlternatives(JgGE5[3], 115, 'volta')
                pageAlternatives(JgGE6[0], 116, 'ida')
                pageAlternatives(JgGE6[1], 117, 'volta')
                pageAlternatives(JgGE6[2], 118, 'ida')
                pageAlternatives(JgGE6[3], 119, 'volta')

                pageAlternatives(JgGF1[0], 120, 'ida')
                pageAlternatives(JgGF1[1], 121, 'volta')
                pageAlternatives(JgGF1[2], 122, 'ida')
                pageAlternatives(JgGF1[3], 123, 'volta')
                pageAlternatives(JgGF2[0], 124, 'ida')
                pageAlternatives(JgGF2[1], 125, 'volta')
                pageAlternatives(JgGF2[2], 126, 'ida')
                pageAlternatives(JgGF2[3], 127, 'volta')
                pageAlternatives(JgGF3[0], 128, 'ida')
                pageAlternatives(JgGF3[1], 129, 'volta')
                pageAlternatives(JgGF3[2], 130, 'ida')
                pageAlternatives(JgGF3[3], 131, 'volta')
                pageAlternatives(JgGF4[0], 132, 'ida')
                pageAlternatives(JgGF4[1], 133, 'volta')
                pageAlternatives(JgGF4[2], 134, 'ida')
                pageAlternatives(JgGF4[3], 135, 'volta')
                pageAlternatives(JgGF5[0], 136, 'ida')
                pageAlternatives(JgGF5[1], 137, 'volta')
                pageAlternatives(JgGF5[2], 138, 'ida')
                pageAlternatives(JgGF5[3], 139, 'volta')
                pageAlternatives(JgGF6[0], 140, 'ida')
                pageAlternatives(JgGF6[1], 141, 'volta')
                pageAlternatives(JgGF6[2], 142, 'ida')
                pageAlternatives(JgGF6[3], 143, 'volta')

                pageAlternatives(JgGG1[0], 144, 'ida')
                pageAlternatives(JgGG1[1], 145, 'volta')
                pageAlternatives(JgGG1[2], 146, 'ida')
                pageAlternatives(JgGG1[3], 147, 'volta')
                pageAlternatives(JgGG2[0], 148, 'ida')
                pageAlternatives(JgGG2[1], 149, 'volta')
                pageAlternatives(JgGG2[2], 150, 'ida')
                pageAlternatives(JgGG2[3], 151, 'volta')
                pageAlternatives(JgGG3[0], 152, 'ida')
                pageAlternatives(JgGG3[1], 153, 'volta')
                pageAlternatives(JgGG3[2], 154, 'ida')
                pageAlternatives(JgGG3[3], 155, 'volta')
                pageAlternatives(JgGG4[0], 156, 'ida')
                pageAlternatives(JgGG4[1], 157, 'volta')
                pageAlternatives(JgGG4[2], 158, 'ida')
                pageAlternatives(JgGG4[3], 159, 'volta')
                pageAlternatives(JgGG5[0], 160, 'ida')
                pageAlternatives(JgGG5[1], 161, 'volta')
                pageAlternatives(JgGG5[2], 162, 'ida')
                pageAlternatives(JgGG5[3], 163, 'volta')
                pageAlternatives(JgGG6[0], 164, 'ida')
                pageAlternatives(JgGG6[1], 165, 'volta')
                pageAlternatives(JgGG6[2], 166, 'ida')
                pageAlternatives(JgGG6[3], 167, 'volta')

                pageAlternatives(JgGH1[0], 168, 'ida')
                pageAlternatives(JgGH1[1], 169, 'volta')
                pageAlternatives(JgGH1[2], 170, 'ida')
                pageAlternatives(JgGH1[3], 171, 'volta')
                pageAlternatives(JgGH2[0], 172, 'ida')
                pageAlternatives(JgGH2[1], 173, 'volta')
                pageAlternatives(JgGH2[2], 174, 'ida')
                pageAlternatives(JgGH2[3], 175, 'volta')
                pageAlternatives(JgGH3[0], 176, 'ida')
                pageAlternatives(JgGH3[1], 177, 'volta')
                pageAlternatives(JgGH3[2], 178, 'ida')
                pageAlternatives(JgGH3[3], 179, 'volta')
                pageAlternatives(JgGH4[0], 180, 'ida')
                pageAlternatives(JgGH4[1], 181, 'volta')
                pageAlternatives(JgGH4[2], 182, 'ida')
                pageAlternatives(JgGH4[3], 183, 'volta')
                pageAlternatives(JgGH5[0], 184, 'ida')
                pageAlternatives(JgGH5[1], 185, 'volta')
                pageAlternatives(JgGH5[2], 186, 'ida')
                pageAlternatives(JgGH5[3], 187, 'volta')
                pageAlternatives(JgGH6[0], 188, 'ida')
                pageAlternatives(JgGH6[1], 189, 'volta')
                pageAlternatives(JgGH6[2], 190, 'ida')
                pageAlternatives(JgGH6[3], 191, 'volta')
            }
        }

    }

    window.onresize = updateRezise

    function updateRezise(){
        let confronto = document.querySelectorAll('.confronto')

        if(confronto.length > 1){
            rezise()    
        }
        
    }

    setTimeout(() => {
        updateRezise()    
    }, 100)

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
            <Header fases='fase de grupos' previousLink='/terceira-fase' nextLink='/oitavas-de-final'/>

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