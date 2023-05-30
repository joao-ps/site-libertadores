import {Route, Routes} from 'react-router-dom'

import { PrimeiraFase } from '../../pages/primeiraFase'
import { SegundaFase } from '../../pages/segundaFase'
import { TerceiraFase } from '../../pages/terceiraFase'
import { Grupos } from '../Grupos'

export function Rotas(){
    return(
        <Routes>
            <Route path='/' element={ <PrimeiraFase />}/>
            <Route path='/segunda-fase' element={ <SegundaFase />}/>
            <Route path='/terceira-fase' element={ <TerceiraFase/>}/>
            <Route path='/fase-de-grupos' element={ <Grupos/>}/>
        </Routes>
    )
}