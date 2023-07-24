import axios from 'axios'
import { BrowserRouter } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { Grupos } from './componentes/Grupos'
import { PrimeiraFase } from './pages/primeiraFase'

import { GetTimes } from './componentes/api/getTeams'
import { FaseFinal } from './componentes/api/getTeams'
import { Rotas } from './componentes/routes/Routes'

import './styles/app.sass'

function App() {
    function teste(){
      console.log('Teste deu certo')
    }

    window.onresize = teste

    let previaSegundaFase = []
    let previaTerceiraFase = []
    let previaFaseDeGrupos = []
    let previaOitavas = []
    let previaQuartas = []
    let previaSemi = []
    let previaFinal = []

    function newPrevSegundaFase(newTeam, posArray){
      if(posArray == undefined){
        previaSegundaFase.push(newTeam)
      }else{
        previaSegundaFase[posArray] = newTeam
      }
    }
    function newPrevTerceiraFaseFase(newTeam, posArray){
      if(posArray == undefined){
        previaTerceiraFase.push(newTeam)
        console.log(newTeam)
      }else{
        previaTerceiraFase[posArray] = newTeam
      }
      console.log(previaTerceiraFase)
    }
    function newPrevFaseDeGrupos(newTeam, posArray){
      if(posArray == undefined){
        previaFaseDeGrupos.push(newTeam)
        console.log(newTeam)
      }else{
        previaFaseDeGrupos[posArray] = newTeam
      }
      console.log(previaFaseDeGrupos)
    }
    function newOitavas(newTeam, posArray){
      if(posArray == undefined){
        previaOitavas.push(newTeam)
      }else{
        previaOitavas[posArray] = newTeam
      }
      console.log(previaOitavas)
    }
    function newQuartas(newTeam, posArray){
      if(posArray == undefined){
        previaQuartas.push(newTeam)
      }else{
        previaQuartas[posArray] = newTeam
      }
      console.log(previaQuartas)
    }
    function newSemi(newTeam, posArray){
      if(posArray == undefined){
        previaSemi.push(newTeam)
      }else{
        previaSemi[posArray] = newTeam
      }
      console.log(previaSemi)
    }
    function newFinal(newTeam, posArray){
      if(posArray == undefined){
        previaFinal.push(newTeam)
      }else{
        previaFinal[posArray] = newTeam
      }
      console.log(previaFinal)
    }

  return (
    <BrowserRouter>
      <GetTimes.Provider value={[
        newPrevSegundaFase,
        previaSegundaFase,
        newPrevTerceiraFaseFase,
        previaTerceiraFase,
        newPrevFaseDeGrupos,
        previaFaseDeGrupos
    ]}>
      <FaseFinal.Provider value={[
        newOitavas,
        previaOitavas,
        newQuartas,
        previaQuartas,
        newSemi,
        previaSemi,
        newFinal,
        previaFinal
      ]}>
        <div className="container">
          <div className="fases-da-competicao">

            <Rotas />

          </div>
        </div>
        </FaseFinal.Provider>
      </GetTimes.Provider>
    </BrowserRouter>
  )
}

export default App
