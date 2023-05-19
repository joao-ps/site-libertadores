import { Link } from "react-router-dom"
import { FaAngleRight } from "react-icons/fa"
import { FaAngleLeft } from "react-icons/fa"

export function Header({fases, previousLink, nextLink}){

    return(
        <div className="fases">
            <Link to={previousLink}><FaAngleLeft className={previousLink != '' ? 'habilitado' : 'disabled'}/></Link>
            <h1>{fases}</h1>
            <Link to={nextLink}><FaAngleRight className={nextLink != '' ? 'habilitado' : 'disabled'}/></Link>
        </div>
    )
}