import { useState } from 'react';
import { v4 as uuid } from "uuid"
import Header from './components/header/Header';
import Form from './components/form/Form';
import MyOrg from './components/my-org/MyOrg';
import Team from './components/team/Team';
import TeamData from './components/data/TeamData';
import Footer from './components/footer/Footer';
import collaboratorsData from './components/data/CollaboratorsData';


function App() {
  // Cambiando el estado a false no se muestra hasta que se presione el botón
  const [showForm, updateShow] = useState(false)
  const [collaborators, updateCollaborators] = useState(collaboratorsData);

  // Operador Ternario --> condicion ? seMuestra : noSeMuestra
  // Cortocircuito
  // Condición && seMuestra
  const [teamData, updateteam] = useState(TeamData);
  const changeShow = () => {
    updateShow(!showForm)
  }

  const registerCollaborator = (collaborator) => {
    console.log("Nuevo colaborador", collaborator)
    //Spread operator usa 3 puntos 
    updateCollaborators([...collaborators, collaborator])
  }

  //Eliminar colaborador
  const deleteCollaborator = (id) => {
    console.log("Eliminar colaborador", id)
    const newCollaborators = collaborators.filter(collaborator => collaborator.id !== id)
    //console.log("Nuevo arreglo de colaboradores", newCollaborators)
    updateCollaborators(newCollaborators)
  }

  //Actualizar color de equipo
  const updateColor = (color, id) => {
    console.log("Actualizar color: ", color, id)
    const updatedteam = teamData.map((team) => {
      if (team.id === id) {
        team.primaryColor = color
      }
      return team
    })
    updateteam(updatedteam)
  }

  //Crear equipo
  const createteam = (newteam) => {
    console.log("Nuevo equipo", newteam)
    updateteam([...teamData, { ...newteam, id: uuid() }])
  }

  const like = (id) => {
    console.log("Like", id)
    const collaboratorsUpdated = collaborators.map((collaborator) => {
      if (collaborator.id === id) {
        collaborator.fav = !collaborator.fav
      }
      return collaborator
    })
    updateCollaborators(collaboratorsUpdated)
  }

  return (
    <>
      <Header />
      {/*showForm ? <Form/> : <></>*/}
      {
        showForm && <Form
          teamData={teamData.map((team) => team.title)}
          registerCollaborator={registerCollaborator}
          createteam={createteam}
        />
      }
      <MyOrg changeShow={changeShow} />
      {
        teamData.map((team) => <Team
          datos={team}
          key={team.title}
          collaborators={collaborators.filter(collaborator => collaborator.team === team.title)}
          deleteCollaborator={deleteCollaborator}
          updateColor={updateColor}
          like={like}
        />
        )
      }
      <Footer />
    </>
  );
}

export default App
