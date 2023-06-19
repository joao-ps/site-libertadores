import {Route, Routes} from 'react-router-dom'

import { PrimeiraFase } from '../../pages/primeiraFase'
import { SegundaFase } from '../../pages/segundaFase'
import { TerceiraFase } from '../../pages/terceiraFase'
import { Grupos } from '../Grupos'
import { Oitavas } from '../../pages/Oitavas'
import { Quartas } from '../../pages/Quartas'
import { Semifinal } from '../../pages/Semifinal'
import { Final } from '../../pages/Final'

export function Rotas(){
    return(
        <Routes>
            <Route path='/' element={ <PrimeiraFase />}/>
            <Route path='/segunda-fase' element={ <SegundaFase />}/>
            <Route path='/terceira-fase' element={ <TerceiraFase/>}/>
            <Route path='/fase-de-grupos' element={ <Grupos/>}/>
            <Route path='/oitavas-de-final' element={ <Oitavas/>}/>
            <Route path='/quartas-de-final' element={ <Quartas/>}/>
            <Route path='/semifinal' element={ <Semifinal/>}/>
            <Route path='/final' element={ <Final/>}/>
        </Routes>
    )
}