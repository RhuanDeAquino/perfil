import React from 'react';
import  './style.css';

function perfil() {
    return (
        <div className="conteiner">
            <div>

            </div>
            <div className="caixa-foto">
                <img className="foto" src="https://scontent.fsdu19-1.fna.fbcdn.net/v/t1.0-9/p960x960/61366759_364743164392874_2847552382261264384_o.jpg?_nc_cat=106&_nc_ohc=O1MpncZDO1UAQkHDyTLoZj5cThIvw5vGmxzVTWLuWvfkmyI6kRqcID9Hg&_nc_ht=scontent.fsdu19-1.fna&oh=298aa4dfb47aeee0a309d35c66160432&oe=5E736B6B"/>
                <h1>Rhuan De Aquino Barbosa</h1>
                <h2></h2>
            </div>
            <div>
            {/* <img className="stitch" src="https://pa1.narvii.com/6516/f9038318425a86994162e7ed38d364d522626930_hq.gif"/>
            <img className="megaman" src="https://producaodejogos.com/wp-content/uploads/2018/05/animacao_megaman_-running.gif"/> */}
            <span className="caixa-texto">
            <p>Meu nome é Rhuan, nasci e cresci em Santa Teresa - RJ, onde passei minha infancia tanto aqui em Santa Teresa, quanto no morro do Fallet tenho atualmente 20 anos </p>
            </span>
            </div>
    
        </div>
    )
}

export default perfil;