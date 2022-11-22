import React from 'react';
import Flickity from 'react-flickity-component'

import '../../styles/flipCard.css'

import web from '../../assets/images/inicio/web.png'
import socialMedia from '../../assets/images/inicio/socialMedia.png'
import diseñoGrafico from '../../assets/images/inicio/diseñoGrafico.png'
import fotoVideo from '../../assets/images/inicio/fotoVideo.png'

const Data = [
  {
    title: "Web",
    img: web,
    description: "Desarrollamos tu página web o E-Comerce bajo los estandares de weeb responsive.",
    arr: ["Diseño Web","SEO Y SEM"],
  },
  {
    title: "Social Media",
    img: socialMedia,
    description: "Nos encargamos de gestionar tu marca en redes sociales ayudándote a llegar a tu público objetivo.",
    arr: ["Creación de contenido","Diseño gráfico y audiovisual","Facebook Ads","Community management"],
  },
  {
    title: "Diseño Grafico",
    img: diseñoGrafico,
    description: "Elaboramos piezas gráficas que plasmen la personalidad de tu marca.",
    arr: ["Identidad de marca","Diseño de volantes","Diseño de piezas gráficas para plataformas virtuales e impresas"],
  },
  {
    title: "Foto y Video",
    img: fotoVideo,
    description: "Desarrolamos y producimos fotografía y video publicitario.",
    arr: ["Fotografia de producto","Reels y Tiktok","Spots publicitarios","Videos institucionales"],
  },
]

const flickityOptions = {
  // initialIndex: 0,
  freeScroll: true,
  contain: true,

  autoPlay: true,
  prevNextButtons: false,
  pageDots: false,
  draggable: true,
  wrapAround: true,
  selectedAttraction: 0.015,
  friction: 0.25
}

const Carrucel = () => {
  return (
    <>
    <div style={{ width: "600px", overflow: "hidden"}}>
      <Flickity
        options={flickityOptions}
        style={{
          width: "100%"
        }}
      >
        {Data.map((card, index) => (
          <div key={index} color="white" className="slide">
            <div className='flip-card'>
            <div className='flip-card-inner'>
              <div className='flip-card-front'>
                <div>
                  <img img src={card.img} alt="No Carga" height="250px"/>
                </div>
                <text>
                  <p className='content' style={{display: "flex", justifyContent: "center"}}>
                    <strong>{card.title}</strong></p>
                </text>
              </div>
            
              <div className='flip-card-back'>
                <p className='content' style={{display: "flex", justifyContent: "center"}} >
                  <strong>{card.title}</strong>
                </p>
                <div className='parrafo'>{card.description}</div>
                <ul>
                  {card.arr.map((item, index) => (
                    <li 
                      className='content'
                      key={index}
                    >
                      <text>
                        {item}
                      </text>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            </div>
          </div>
        ))}
        
      </Flickity>
    </div>
    </>
  )
}

export default Carrucel



