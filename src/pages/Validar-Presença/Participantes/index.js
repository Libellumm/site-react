import React from 'react';
import './participantes.css';

function Participantes() {

    return(

        <div>

            <table>

                <tr>
                    <th>Confirmação de Presença</th>
                    <th>Participante</th>
                </tr>
                
                <tr>
                    <td><input type="checkbox" name="João" value="Presente"/></td>
                    <td>João</td>
                </tr>
                
                <tr>
                    <td><input type="checkbox" name="Fernanda" value="Presente"/></td>
                    <td>Fernanda</td>
                </tr>
                    
                <tr>
                    <td><input type="checkbox" name="Mariana" value="Presente"/></td>
                    <td>Mariana</td>
                </tr>
                
                <tr>
                    <td><input type="checkbox" name="Rogério" value="Presente"/></td>
                    <td>Rogério</td>
                </tr>

            </table>

        </div>
    )

}

export default Participantes;