import React from 'react';
import './styles.scss';

type Props ={
    text: string;
}

const Button = ( {text} :Props) => (
   <div>
       <button className="btn-start btn-text">
          <h4>{text}</h4>  
       </button>
   </div>
);

export default Button;