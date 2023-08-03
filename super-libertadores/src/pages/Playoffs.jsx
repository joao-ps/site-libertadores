import axios from 'axios'

import { Header } from '../componentes/Header'

import '../styles/eliminatoria.sass'
import { json } from 'react-router-dom'

export function Playoffs(){
    return(
        <>
            <Header fases='playoffs' previousLink='/' nextLink='/primeira-fase'/>
        </>
    )
}