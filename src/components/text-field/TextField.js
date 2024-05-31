import '../../index.css';
import './TextField.css';

const TextField = (props) => {

    const placeholderModified = `${props.placeholder}...`

    //Destructuración
    const { type = "text" } = props;

    const handleChange = (event) => {
        props.setWorth(event.target.value);
    }
    return (
        <div className="global-field" id={`field-${type}`}>
            <label>{props.title}</label>
            {type === "color" ? (
                <div className="text__container global__color__container">
                    <span>Seleccionar color: </span>
                    <input 
                        value={props.worth}
                        onChange={handleChange}
                        type={type}
                    />
                </div>
            ) : (
                <input 
                    placeholder={placeholderModified} 
                    required={props.required}
                    value={props.worth}
                    onChange={handleChange}
                    type={type}
                />
            )}
        </div>
    );
};

export default TextField;
