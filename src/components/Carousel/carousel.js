import React from "react"
import Slider from "react-slick"

import './carousel.scss'

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import web from '../../assets/images/inicio/web.png'
import socialMedia from '../../assets/images/inicio/socialMedia.png'
import diseñoGrafico from '../../assets/images/inicio/diseñoGrafico.png'
import fotoVideo from '../../assets/images/inicio/fotoVideo.png'

const Data = [
  {
    title: "Web",
    img: web,
    description: "Desarrollamos tu página web o E-Comerce bajo los estandares de web responsive.",
    arr: ["Diseño Web", "SEO Y SEM"],
  },
  {
    title: "Social Media",
    img: socialMedia,
    description: "Nos encargamos de gestionar tu marca en redes sociales ayudándote a llegar a tu público objetivo.",
    arr: ["Creación de contenido", "Diseño gráfico y audiovisual", "Facebook Ads", "Community management"],
  },
  {
    title: "Diseño Gráfico",
    img: diseñoGrafico,
    description: "Elaboramos piezas gráficas que plasmen la personalidad de tu marca.",
    arr: ["Identidad de marca", "Diseño de volantes", "Diseño de piezas gráficas para plataformas virtuales e impresas"],
  },
  {
    title: "Foto y Video",
    img: fotoVideo,
    description: "Desarrolamos y producimos fotografía y video publicitario.",
    arr: ["Fotografía de producto", "Reels y Tiktok", "Spots publicitarios", "Videos institucionales"],
  },
]

const SimpleSlider = () => {
  const settings = {
    // centerPadding: "60px",
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "-50px",
    slidesToShow: 2,

    autoplay: true,
    speed: 1500,
    autoplaySpeed: 2500,
    swipeToSlide: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          //centerPadding: "25px",
          slidesToShow: 1,
        }
      }
    ]
  };
  return (
    <Slider {...settings} style={{ width: "100%" }} >
      {Data.map((card, index) => (
        <div key={index} color="white" className="slide">
          <div className='flip-card'>
            <div className='flip-card-inner'>
              <div className='flip-card-front'
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center"
                }}>
                <div>
                  <img src={card.img} alt="No Carga" height="175px" />
                </div>
                <h1 style={{ paddingTop: "30px", fontWeight: "600" }}>
                  {card.title}
                </h1>
              </div>

              <div className='flip-card-back'>
                <div style={{
                  margin: "auto",
                  height: "100%",
                  width: "250px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  // alignItems: "center",
                }}>
                  <h3 className="card-title-carousel">
                    {card.title}
                  </h3>
                  <p className="card-description-carousel">
                    {card.description}
                  </p>
                  <ul className="list-item-carousel">
                    {card.arr.map((item, index) => (
                      <li
                        key={index}
                      >
                        <p style={{ color: "#000" }}>
                          {item}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default SimpleSlider