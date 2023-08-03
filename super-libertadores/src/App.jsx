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
    let previaConcacaf = []
    let previaPlayoffs = []
    let previaPrimeiraFase = []
    let previaSegundaFase = []
    let previaTerceiraFase = []
    //let previaFaseDeGrupos = []
    let pote1 = []
    let pote2 = []
    let pote3 = []
    let pote4 = []    
    let previaOitavas = []
    let previaQuartas = []
    let previaSemi = []
    let previaFinal = []

    function newPrevConcacaf(newTeam, posArray){
      if(posArray == undefined){
        previaConcacaf.push(newTeam)
      }else{
        previaConcacaf[posArray] = newTeam
      }
      console.log(previaConcacaf)
    }
    function newPrevPlayoffs(newTeam, posArray){
      if(posArray == undefined){
        previaPlayoffs.push(newTeam)
      }else{
        previaPlayoffs[posArray] = newTeam
      }
      console.log(previaPlayoffs)
    }
    function newPrevPrimeiraFase(newTeam, posArray){
      if(posArray == undefined){
        previaPrimeiraFase.push(newTeam)
      }else{
        previaPrimeiraFase[posArray] = newTeam
      }
      console.log('PRIMEIRA FASE')
      console.log(previaPrimeiraFase)
    }
    function newPrevSegundaFase(newTeam, posArray){
      if(posArray == undefined){
        previaSegundaFase.push(newTeam)
      }else{
        previaSegundaFase[posArray] = newTeam
      }
      console.log(previaSegundaFase)
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
    function newPrevFaseDeGrupos(newTeam, posArray, pote){
      if(pote == 1){
        if(posArray == undefined){
          pote1.push(newTeam)
        }else{
          pote1[posArray] = newTeam
        }
      }else if(pote == 2){
        if(posArray == undefined){
          pote2.push(newTeam)
        }else{
          pote2[posArray] = newTeam
        }
      }else if(pote == 3){
        if(posArray == undefined){
          pote3.push(newTeam)
        }else{
          pote3[posArray] = newTeam
        }
      }else{
        if(posArray == undefined){
          pote4.push(newTeam)
        }else{
          pote4[posArray] = newTeam
        }
      }
      console.log('pote1')
      console.log(pote1)
      console.log('pote2')
      console.log(pote2)
      console.log('pote3')
      console.log(pote3)
      console.log('pote4')
      console.log(pote4)
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
        newPrevConcacaf,
        previaConcacaf,
        newPrevPlayoffs,
        previaPlayoffs,
        newPrevPrimeiraFase,
        previaPrimeiraFase,
        newPrevSegundaFase,
        previaSegundaFase,
        newPrevTerceiraFaseFase,
        previaTerceiraFase,
        newPrevFaseDeGrupos,
        pote1,
        pote2,
        pote3,
        pote4
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
