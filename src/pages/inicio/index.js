import React from 'react'
import Card from '../../components/Card/Card'

import { Container, Row, Col } from 'react-bootstrap';

import font from '../../assets/images/inicio/font.png'
import web from '../../assets/images/inicio/web.png'
import socialMedia from '../../assets/images/inicio/socialMedia.png'
import cato from '../../assets/images/inicio/Grupo 513.png'
import aural from '../../assets/images/inicio/Grupo 498.png'
import magna from '../../assets/images/inicio/Grupo 506.png'
import puertoInca from '../../assets/images/inicio/Grupo 98.png'
import gpr from '../../assets/images/inicio/Grupo 499.png'
import altoImpacto from '../../assets/images/inicio/Grupo 507.png'
import anan from '../../assets/images/inicio/Grupo 483.png'
import vapreh from '../../assets/images/inicio/Grupo 502.png'
import parisinos from '../../assets/images/inicio/Grupo 95.png'

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
      <div>
        <text style={{color: '#1D1D1B'}}>
          <p className='title' style={{lineHeight: "1"}}><strong>ESTILO MAKI<text style={{color: "#6500FE"}} >.</text></strong></p>
          <p><strong>Dualismo entre la inovación y lo<br/>tradicional</strong></p>
          <p className='parrafo'>
            Entendemos lo que tu empresa necesita y optimizamos la manera de obtener<br/> resultados
          </p>
          <p style={{color: "#6500FE"}}>Conoce nuestros servicios</p>
        </text>
      </div>

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
                >
                  <text>
                    {item}
                  </text>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

    <div className='caja'>
      <div style={{}}>
        <text className="titleSecondary">
          <strong>
            <p style={{lineHeight: "1"}}>Ayudamos a </p>
            <p style={{lineHeight: "1"}}>empresas a llegar </p>
            <p style={{color: "#6500FE"}} >al siguiente nivel.</p>
          </strong>
        </text>
        <text className='parrafo'>
          <p>
            Algunas de las empresas que confiaron<br/> 
            en nosotros para empujarlos a seguir.
          </p>
          <p style={{color: "#6500FE"}}>Conoce más</p>
        </text>
      </div>
        
        <Container>
          <Row>
            <Col>
              <img className='logos' src={cato} alt="No Cargo Imagen" />
              <img className='logos' src={aural} alt="No Cargo Imagen" />
              <img className='logos' src={magna} alt="No Cargo Imagen" />
            </Col>
            <Col>
              <img className='logos' src={puertoInca} alt="No Cargo Imagen" />
              <img className='logos' src={gpr} alt="No Cargo Imagen" />
              <img className='logos' src={altoImpacto} alt="No Cargo Imagen" />
            </Col>
            <Col>
              <img className='logos' src={anan} alt="No Cargo Imagen" />
              <img className='logos' src={vapreh} alt="No Cargo Imagen" />
              <img className='logos' src={parisinos} alt="No Cargo Imagen" />
            </Col>
          </Row>
        </Container>
    </div>

  </body>
  </>
  )
}
export default Index