import { useState } from 'react';
import Header from './components/header/Header';
import Form from './components/form/Form';
import MyOrg from './components/my-org/MyOrg';


function App() {

  const [showForm, updateShow] = useState(true)

  // Operador Ternario --> condicion ? seMuestra : noSeMuestra
  // Cortocircuito
  // Condición && seMuestra
  const changeShow = () => {
    updateShow(!showForm)
  } 

    return (
      <>
      <Header/>
      {/*showForm ? <Form/> : <></>*/}
      {showForm && <Form/>}
      <MyOrg changeShow={changeShow} />
      </>
    );
}

export default App
