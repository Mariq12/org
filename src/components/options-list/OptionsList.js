import './OptionsList.css';

const OptionsList = (props) => {
    //  Método map para mostrar el listado de equipos
    // Método map -> arreglo.map( (equipo, index) => {
    // return <option>}</option>;
    //})

    const manageChange = (event) => {
        console.log("cambio", event.target.value)
        props.setteam(event.target.value)
    }

    return <div className="global-field" id='options-list'>
        <label>Equipos</label>
        <select value={props.worth} onChange={manageChange}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            {props.teamData.map((team, index) => <option key={index} value={team}>{team}</option>
            )}    
        </select>
    </div>
}

export default OptionsList;
