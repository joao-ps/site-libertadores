import { Header } from './componentes/Header'
import { Grupos } from './componentes/Grupos'
import { PrimeiraFase } from './pages/primeiraFase'

import './styles/app.sass'

function App() {

  return (
    <div className="container">
      <div className="fases-da-competicao">
        <Header />

        <PrimeiraFase />

        {/* <Grupos /> */}
      </div>
    </div>
  )
}

export default App
