import React from 'react';


function Contato() {
    return (
        <div>
            <section id="formulario">
                    <div class="content">
                        <h2 class="section-title">Ficou interessado?</h2>
                        <h4>Realize sua pré-inscrição para acompanhar o nosso lançamento.</h4>
                        <form action="">
                            <input type="email" name="email" placeholder="Digite seu melhor e-mail"/>
                            <input type="submit" value="Inscreva-se"/>
                        </form> 
                    </div>
            </section>
        </div>
    );
}

export default Contato;