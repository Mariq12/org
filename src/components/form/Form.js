import React, { useState } from "react";
import "./Form.css";
import TextField from "../text-field/TextField";
import OptionsList from "../options-list/OptionsList";
import Button from "../button/Button";
import { v4 as uuid } from "uuid";

const Form = (props) => {
    const [name, updateName] = useState("")
    const [position, updatePosition] = useState("")
    const [photo, updatePhoto] = useState("")
    const [team, updateteam] = useState("")

    const [title, updateTitle] = useState("")
    const [color, updateColor] = useState("")
    // Destructuración : eliminar props
    const { registerCollaborator, createteam } = props;

    const handleShipping = (event) => {
        event.preventDefault();
        console.log("Enviando");
        let dataSet = {
            id: uuid(),
            name,
            position,
            photo,
            team
        };
        registerCollaborator(dataSet);
    };

    const handleNewteam = (event) => {
        event.preventDefault();
        //console.log("Enviando", title, color);
        createteam({ title, primaryColor: color });
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
                    setWorth={updateName}
                />
                <TextField
                    title="Puesto"
                    placeholder="Ingresar puesto"
                    required
                    worth={position}
                    setWorth={updatePosition}
                />
                <TextField
                    title="Foto"
                    placeholder="Ingresar enlace de foto"
                    required
                    worth={photo}
                    setWorth={updatePhoto}
                />
                <OptionsList
                    worth={team}
                    setteam={updateteam}
                    teamData={props.teamData}
                />
                <Button>
                    Crear
                </Button>
            </form>
            <form onSubmit={handleNewteam}>
                <h2>Rellena el formulario para crear el equipo</h2>
                <TextField
                    title="Título"
                    placeholder="Ingresar título"
                    required
                    worth={title}
                    setWorth={updateTitle}
                />
                <TextField
                    title="Color"
                    placeholder="Ingresar el color en Hex"
                    required
                    worth={color}
                    setWorth={updateColor}
                    type="color"
                />
                <Button>
                    Registrar equipo
                </Button>
            </form>
        </section>
    );
};

export default Form