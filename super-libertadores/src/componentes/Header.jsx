export function Header({fases}){

    return(
        <div className="fases">
            <i className="fa-sharp fa-solid fa-chevron-left voltar"></i>
            <h1>{fases}</h1>
            <i className="fa-sharp fa-solid fa-chevron-right avancar"></i>
        </div>
    )
}