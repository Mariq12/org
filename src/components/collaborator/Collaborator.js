import PropTypes from 'prop-types'
import "./Collaborator.css"
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai"

const Collaborator = (props) => {
    const { name, position, photo, id, fav } = props.datos
    const { primaryColor, deleteCollaborator, like } = props

    // condición ? verdadero : false
    // condición ?  true : false
    return (
        <div className="collaborator">
            <AiFillCloseCircle className="delete"  onClick={() => deleteCollaborator(id)} />
            <figure className="collaborator__header" style={{ backgroundColor: primaryColor }}>
                <img src={photo} alt={name} />
                <figcaption className="info">
                    <h4>{name}</h4>
                    <h5>{position}</h5>
                    {fav ? <AiFillHeart color="red" onClick={() => like(id)} /> : <AiOutlineHeart onClick={() => like(id)} />}
                </figcaption>
            </figure>
        </div>
    )
}

Collaborator.propTypes = {
    primaryColor: PropTypes.string.isRequired,
    deleteCollaborator: PropTypes.func.isRequired,
    like: PropTypes.func.isRequired,
    datos: PropTypes.shape({
        photo: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        position: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        fav: PropTypes.bool.isRequired,
    }).isRequired,
}

export default Collaborator