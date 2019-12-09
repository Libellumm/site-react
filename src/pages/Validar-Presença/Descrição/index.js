import React from 'react';
import './descrição.css';

function Descrição() {

    return(

        <div>
            <h2>JavaScript</h2>

            <h4>Palestra de Tecnologia</h4>

            <div className="descrição">
                <h5>Descrição</h5>

                <button className="criar">
                    Editar
                </button>
            </div>

            <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> 
            sed do eiusmod tempor incididunt ut labore et dolore magna<br/>
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation<br/>
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis<br/>
            aute irure dolor in reprehenderit in voluptate velit esse<br/>
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat<br/>
            cupidatat non proident, sunt in culpa qui officia deserunt<br/>
            mollit anim id est laborum."
            </p>

        </div>
    )

}

export default Descrição;