import React from "react";
import './styles.css'


const Input = ({valorPlaceholder, title}) => {
    //Pasa las props con destructuring de objetos, pasando los valores de esas props. Directamente llamas con el nombre de la prop que te interese

    // console.log(props);
    // Para llamar a las props con destructuring y obtener el valor correspondiente
    // const {valorPLaceholder} = props;

    return (
        <input 
            placeholder={valorPlaceholder + title}
            className="app-input">

        </input>
    )
}


export default Input