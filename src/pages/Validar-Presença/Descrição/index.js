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
            "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto <br/>nível com tipagem dinâmica fraca e multi-paradigma. Juntamente com HTML e CSS, o <br/>JavaScript é uma das três principais tecnologias da World Wide Web."
            </p>

        </div>
    )

}

export default Descrição;