import './MyOrg.css';
import Add from '../../assets/icons/add.png';

const MyOrg = (props) => {
    console.log(props)
    // Estado - hooks
    // useState
    // useState ()
    //const [nombreVariable, funcionActualiza] = useState(valorInicial)
    //const [name, setName] = useState("Harland")

    //const [show, updateShow] = useState(true)

    //const handleClick = () => {
        //console.log('Mostrar / ocultar elemento', !show);
        //updateShow(!show)
    //}


    return <section className="orgSection">
                <h3 className="title">Mi organización</h3>
                <figure className='orgSection__img'>
                    <img src={Add} alt="add" onClick={props.changeShow} />
                </figure>
            </section>
}

export default MyOrg
