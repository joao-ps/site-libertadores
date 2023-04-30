import {Route, Routes} from 'react-router-dom'

import { PrimeiraFase } from '../../pages/primeiraFase'
import { SegundaFase } from '../../pages/segundaFase'

export function Rotas(){
    return(
        <Routes>
            <Route path='/' element={ <PrimeiraFase />}/>
            <Route path='/segunda-fase' element={ <SegundaFase />}/>
        </Routes>
    )
}