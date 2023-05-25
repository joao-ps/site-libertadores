import axios from 'axios'
import { BrowserRouter } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { Grupos } from './componentes/Grupos'
import { PrimeiraFase } from './pages/primeiraFase'

import { GetTimes } from './componentes/api/getTeams'
import { Rotas } from './componentes/routes/Routes'

import './styles/app.sass'

function App() {
    let previaSegundaFase = []
    let previaTerceiraFase = []
    let previaFaseDeGrupos = []

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
        <div className="container">
          <div className="fases-da-competicao">

            <Rotas />

          </div>
        </div>
      </GetTimes.Provider>
    </BrowserRouter>
  )
}

export default App
