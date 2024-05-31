import { v4 as uuid } from "uuid"

const collaboratorsData = [
    {
        id: uuid(),
        name: "Harland Lohora",
        position: "Instructor",
        photo: "https://github.com/harlandlohora.png",
        team: "Front End",
        fav: true
    },
    {
        id: uuid(),
        name: "Genesys Rondón",
        position: "Desarrolladora de software e instructora",
        photo: "https://github.com/genesysR-dev.png",
        team: "Programación",
        fav: false
    },
    {
        id: uuid(),
        name: "Jeanmarie Quijada",
        position: "Instructora en Alura Latam",
        photo: "https://github.com/JeanmarieAluraLatam.png",
        team: "UX y Diseño",
        fav: false
    },
    {
        id: uuid(),
        name: "Christian Velasco",
        position: "Head de Alura e Instructor",
        photo: "https://github.com/christianpva.png",
        team: "Programación",
        fav: false
    },
    {
        id: uuid(),
        name: "Jose Gonzalez",
        position: "Dev FullStack",
        photo: "https://github.com/JoseDarioGonzalezCha.png",
        team: "Innovación y Gestión",
        fav: false
    }
];

export default collaboratorsData;
