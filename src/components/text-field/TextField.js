import '../../index.css';

const TextField = (props) => {

    const placeholderModified = `${props.placeholder}...`

    const handleChange = (event) => {
        props.setWorth(event.target.value);
    }
    return (
        <div className="global-field">
            <label>{props.title}</label>
            <input 
            placeholder={placeholderModified} 
            required={props.required}
            value={props.worth}
            onChange={handleChange}
            />
        </div>
    );
};

export default TextField;
