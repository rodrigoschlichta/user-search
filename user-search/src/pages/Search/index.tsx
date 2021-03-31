import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../core/components/Button';

import './styles.scss';

const Search = () => {
    return(
        <div className="search-conntainer">
            <div className="search-content">
                <h3 className="search-title">Encontre um perfil GitHub</h3>
                    <form action="/" method="post">
                        <div className="search-form">
                        <input type="text" id="search" placeholder="Usuário Github" className="search-text"/>
                        </div>
                    </form>
                    <Link to="/result">
                            <Button text= "Encontrar" />    
                    </Link>           
            </div>

               
            
        </div>

    );

}

export default Search;