import './OptionsList.css';

const OptionsList = (props) => {
    //  Método map para mostrar el listado de equipos
    // Método map -> arreglo.map( (equipo, index) => {
    // return <option>}</option>;
    //})
    const equipos = [
        'Programación', 
        'Front End', 
        'Data Science', 
        'Devops', 
        'UX y Diseño', 
        'Móvil', 
        'Innovación y Gestión'
    ]

    const manageChange = (event) => {
        console.log("cambio", event.target.value)
        props.setEquipment(event.target.value)
    }

    return <div className="global-field" id='options-list'>
        <label>Equipos</label>
        <select value={props.worth} onChange={manageChange}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            {equipos.map((equipo, index) => <option key={index} value={equipo}>{equipo}</option>
            )}    
        </select>
    </div>
}

export default OptionsList;
