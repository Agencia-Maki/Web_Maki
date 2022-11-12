import React from 'react'
import Card from '../../components/Card/Card'

import font from '../../assets/images/font.png'
import web from '../../assets/images/web.png'
import socialMedia from '../../assets/images/socialMedia.png'

import '../../styles/style.scss'

const Data = [
  {
    title: "Web",
    img: "",
    description: "Desarrollamos tu página web o E-Comerce bajo los estandares de weeb responsive.",
    arr: ["Diseño Web","SEO Y SEM"],
  },
  {
    title: "Social Media",
    img: "",
    description: "Nos encargamos de gestionar tu marca en redes sociales ayudándote a llegar a tu público objetivo.",
    arr: ["Creación de contenido","Diseño gráfico y audiovisual","Facebook Ads","Community management"],
  },
  {
    title: "Diseño Grafico",
    img: "",
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

const Index = () => {
  return (
  <>
  <body>

    <div className='caja'>
      <img className='imagen' src={font} alt="No Cargo Imagen" />
    </div>

    <div className='gris caja' 
    >
      <Card>
        <text className='title' style={{color: '#1D1D1B'}}>
          <strong>ESTILO MAKI<text style={{color: "#6500FE"}} >.</text></strong>
        </text><br/>
        <text><strong>Dualismo entre la inovación y lo <br/>tradicional</strong></text><br/>
        <text className='parrafo'>Entendemos lo que tu empresa necesita y optimizamos la manera de obtener<br/> resultados</text><br/>
        <text style={{color: "#6500FE"}}>Conoce nuestros servicios</text>
      </Card>
      <Card color="white">
        <img className='imagenCard' src={web} alt="No Cargo Imagen" />
        <text><strong>Web</strong></text>
      </Card>
      <Card color="white">
        <img className='imagenCard' src={socialMedia} alt="No Cargo Imagen" />
        <text><strong>Social Media</strong></text>
      </Card>
    </div>

    <div className='caja'>
        {Data.map((card, index) => (
          <Card key={index} color="white">
            <div>imagen</div>
            <div className='content'><strong>{card.title}</strong></div>
            {/* <img alt={card.title} src={card.imageSrc} width="100" height="100" /> */}
            <div className='parrafo'>{card.description}</div>
            <ul>
              {card.arr.map((item, index) => (
                <li 
                  className='content'
                  key={index}
                ><text>
                  {item}
                </text>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

    <div className='caja'>
      <Card>
        <text className="titleSecondary">
          <strong>Ayudamos a empresas a llegar <br/><text style={{color: "#6500FE"}} >al siguiente nivel.</text></strong>
        </text><br/>
        <text className='parrafo'>
          Algunas de las empresas que confiaron en nosotros
          para empujarlos a seguir.
        </text><br/>
        <text style={{color: "#6500FE"}}>Conoce más</text>
      </Card>
      <Card>
        <div className='grilla'>
            <text className='logos'>img 1</text>
            <text className='logos'>img 2</text>
            <text className='logos'>img 3</text>
            <text className='logos'>img 4</text>
            <text className='logos'>img 5</text>
            <text className='logos'>img 6</text>
            <text className='logos'>img 7</text>
            <text className='logos'>img 8</text>
            <text className='logos'>img 9</text>
          </div>
      </Card>
    </div>

  </body>
  </>
  )
}
export default Index