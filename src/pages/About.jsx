import React from 'react'

function About() {
  return (
    <div>
      <h3 className="name-hotels"> About Us </h3>
        <br/>
        <div id="index-bg-about">
        <article className="index-articles">
            <h2>Carolina López</h2>
            <img className="imgAbout" src="https://res.cloudinary.com/dm5zetu40/image/upload/v1654792690/Imagen%20hoteles/20220113_101211_c3mxju.jpg" alt="Carolina López" />
      
        <p class="text">Mi nombre es Carolina y soy almeriense. María y yo compartimos la pasión de viajar, y decidimos gestionar hoteles.</p>
          </article>

          <article className="index-articles">
            <h2>María Diez</h2>
       
            <img className="imgAboutMaria" src="https://res.cloudinary.com/dm5zetu40/image/upload/v1654797483/Imagen%20hoteles/Mar%C3%ADa_Diez_foto_4_pr1cwz.png" alt="María Diez"  />
        
        <p class="text">Soy Maria, aspense viviendo en Bilbao. No cabía duda de que nuestra pasión por los hoteles nos uniría en crear esta plataforma.</p>
          </article>
        </div>
      </div>
   )
}

export default About