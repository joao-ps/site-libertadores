import { Link } from "react-router-dom"

export function Header({fases, previousLink, nextLink}){

    return(
        <div className="fases">
            <Link to={previousLink}><i className="fa-sharp fa-solid fa-chevron-left"></i></Link>
            <h1>{fases}</h1>
            <Link to={nextLink}><i className="fa-sharp fa-solid fa-chevron-right"></i></Link>
        </div>
    )
}