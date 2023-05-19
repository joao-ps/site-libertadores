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

    function newPrevSegundaFase(newTeam, posArray){

      if(posArray == undefined){
        previaSegundaFase.push(newTeam)
      }else{
        previaSegundaFase[posArray] = newTeam
      }
    }
    function newPrevTerceiraFaseFase(newTeam){
      console.log(newTeam)
      previaTerceiraFase.push(newTeam)
    }

  return (
    <BrowserRouter>
      <GetTimes.Provider value={[
        newPrevSegundaFase,
        previaSegundaFase,
        newPrevTerceiraFaseFase,
        previaTerceiraFase
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
