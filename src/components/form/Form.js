import React, { useState } from "react";
import "./Form.css";
import TextField from "../text-field/TextField";
import OptionsList from "../options-list/OptionsList";
import Button from "../button/Button";

const Form = () => {

    const [name, setName] = useState("")
    const [position, setPosition] = useState("")
    const [photo, setPhoto] = useState("")
    const [equipment, setEquipment] = useState("")

    const handleShipping = (event) => {
        event.preventDefault();
        console.log("Enviando", event);
        let dataSet = {
            name,
            position,
            photo,
            equipment
        }
        console.log(dataSet)
    }

    return (
        <section className="form">
            <form onSubmit={handleShipping}>
                <h2>Rellena el formulario para crear colaborador</h2>
                <TextField 
                title="Nombre" 
                placeholder="Ingresar nombre" 
                required 
                worth={name}
                setWorth={setName} 
                />
                <TextField 
                title="Puesto" 
                placeholder="Ingresar puesto" 
                required
                worth={position}
                setWorth={setPosition}
                />
                <TextField 
                title="Foto" 
                placeholder="Ingresar enlace de foto" 
                required
                worth={photo}
                setWorth={setPhoto}
                />
                <OptionsList 
                worth={equipment} 
                setEquipment={setEquipment} />
                <Button>
                    Crear
                </Button>
            </form>
        </section>
    );
};

export default Form