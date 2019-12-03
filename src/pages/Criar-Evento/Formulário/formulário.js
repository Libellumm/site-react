import React from 'react';
import './formulario.css';

function Formulário() {

    return(
       
        <main>
            
            <h2>Criar Evento</h2>

            <form>
                <label for="nome">Nome</label>
                <input type="text" id="nome" placeholder="Nome" required/>
                
                <label for="tema">Tema</label>
                <input type="text" id="tema" placeholder="Tema" required/>

                <label for="descrição">Descrição do Evento</label>
                <textarea id="descrição" placeholder="Descrição"></textarea>

                <div>
                    <label for="data">Data</label>
                    <input type="date" id="data" placeholder="Data" required/> 
                </div>

                <div>
                    <label for="horário">Horário</label>
                    <input type="time" id="horário" placeholder="Horário" required/>
                </div>

                <label for="local">Local</label>
                <input type="text" id="local" placeholder="Local" required/>

                <input type="submit" value="Criar"/>
            </form>

        </main>

    );

}

export default Formulário;