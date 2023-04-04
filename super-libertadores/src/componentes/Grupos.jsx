import { useEffect } from 'react'
import axios, {Axios} from 'axios'

import { GrupoA } from '../grupos/GrupoA'
import { GrupoB } from '../grupos/GrupoB'
import { GrupoC } from '../grupos/GrupoC'
import { GrupoD } from '../grupos/GrupoD'
import { GrupoE } from '../grupos/GrupoE'
import { GrupoF } from '../grupos/GrupoF'
import { GrupoG } from '../grupos/GrupoG'
import { GrupoH } from '../grupos/GrupoH'

let pote1 = [];
let pote2 = [];
let pote3 = [];
let pote4 = [];
let poteGeral = []

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

let grupo1 = []
let grupo2 = []
let grupo3 = []
let grupo4 = []
let grupo5 = []
let grupo6 = []
let grupo7 = []
let grupo8 = []

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

    //const getDadosCampeaoLibertadores = async() => {
    //    let response = await Axios.get('http://localhost:2020/campeao-libertadores')
    //    let dados = response.data
    //
    //    grupoA.push(dados)
    //    GrupoA[0].time = grupoA[0].time
    //    GrupoA[0].placar = grupoA[0].namePlacar
//
    //    console.log(dados)
    //}


    useEffect(() => {

        const getDadosCampeaoLibertadores = async() => {
            let json = await fetch('http://localhost:2020/campeao-libertadores')
            let response = await json.json()

            grupo1.push(response)
        }

        getDadosCampeaoLibertadores()
        
    }, [])

    return(
        <>
            <GrupoA />

            <GrupoB />

            <GrupoC />

            <GrupoD />

            <GrupoE />

            <GrupoF />

            <GrupoG />

            <GrupoH />
        </>
    )
}