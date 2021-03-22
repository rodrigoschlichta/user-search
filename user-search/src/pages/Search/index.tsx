import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../core/components/Button';

import './styles.scss';

const Search = () => {
    return (
        <div className="search-conntainer">
            <div className="search-content">
                <h3 className="search-title">Encontre um perfil GitHub</h3>
                <div>
                    <form action="/" method="post">
                        <input type="text" id="search" className="search-text" />
                        <Link to="/result">
                            <Button text= "Encontrar" />    
                        </Link> 
                    </form>
                </div>

            </div>  

        </div>
    );
}

export default Search;