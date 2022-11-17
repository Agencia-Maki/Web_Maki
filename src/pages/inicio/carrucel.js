import React from 'react';
// import Card from '../../components/Card/Card';
import Flickity from 'react-flickity-component'

import '../../styles/flipCard.css'

import web from '../../assets/images/inicio/web.png'
import socialMedia from '../../assets/images/inicio/socialMedia.png'
import diseñoGrafico from '../../assets/images/inicio/diseñoGrafico.png'

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
    img: "",
    description: "Desarrolamos y producimos fotografía y video publicitario.",
    arr: ["Fotografia de producto","Reels y Tiktok","Spots publicitarios","Videos institucionales"],
  },
]

const flickityOptions = {
  initialIndex: 1,
  freeScroll: true,
  contain: true,
  prevNextButtons: false,
  pageDots: false,
  wrapAround: true,
  autoPlay: true
}

const Carrucel = () => {
  return (
    <>
    <div>
      <Flickity
        className={'carousel'}
        elementType={'Card'}
        options={flickityOptions} 
      >
        {Data.map((card, index) => (
          // <Card key={index} color="white">
            <div className='flip-card' style={{margin: "20px"}}>
            <div className='flip-card-inner'>
              <div className='flip-card-front'>
                <div>
                  <img img src={card.img} alt="No Carga" height="250px"/>
                </div>
                <text>
                  <p className='content'><strong>{card.title}</strong></p>
                </text>
              </div>
            
              <div className='flip-card-back'>
                <div className='content'><strong>{card.title}</strong></div>
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
          // </Card>
        ))}
        
      </Flickity>
    </div>
    </>
  )
}

export default Carrucel



