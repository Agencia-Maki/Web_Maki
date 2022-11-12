import React from 'react'
import Card from '../../components/Card/Card'

import '../../styles/style.scss'

const Index = () => {
  return (
    <>
    <body 
      style={{
        backgroundColor: "#F8F8F8"
      }}>

      <div className='caja'>
        <Card 
        // style={{
        //   backgroundColor: "#6500FE"
        // }}
        >
          <text className='titleSecondary' style={{color: '#F8F8F8'}}>
            Comprometidos<br/> con hacer crecer<br/> a tu empresa
          </text>
        </Card>
        <Card>
          <text className='content'>
            <strong>
              Nuestro propósito es poder<br/>
              ayudar a nuestros clientes<br/>
              a llegar al siguiente nivel y<br/>
              <text style={{color: '#6500FE'}}>seguir creciendo juntos.</text>
            </strong>
          </text>
        </Card>
      </div>

      <div className='caja'>
        <Card>
          <text className='titleSecondary'>
            <strong>
              Llevamos la<br/>
              Innovación en<br/>
              nuestro <text style={{color: '#6500FE'}}>ADN.</text>
            </strong>
          </text>
        </Card>
        <Card>
          <text className='content'>
            Maki nace por la necesidad de brindar una<br/>
            mano a aquellas empresas que buscan<br/>
            adaptarse a los cambios constantes en el<br/>
            mundo digital.<br/><br/>
          </text>
          <text className='content'>
            Al igual que ellos buscamos reinventarnos<br/>
            constantemente para ofrecer la mejor<br/>
            calidad en nuestros servicios.
          </text>
        </Card>
      </div>

      <div className='caja'>
        <text className='titleSecondary'><strong>Nuestros Valores</strong></text>
        <div>
          <li>Profesionalismo</li>
          <li>Innovación</li>
          <li>Responsabilidad</li>
          <li>Puntualidad</li>
          <li>Trabajo en Equipo</li>
        </div>
      </div>

      <div className='caja'>
        <text className='titleSecondary'><strong>El Dream Team</strong></text><br/>
      </div>
      <div className='caja'>
        <text>
          Somos un equipo que trabaja mediante procesos y se capacita constantemente para obtimizar la relación<br/>
          de cada proyecto y lograr mejores trabajos en el menos tiempo posible, dejándonos tiempo para hacer lo<br/>
          que más nos gusta: Ser Creativos.<br/>
        
          En Maki tenemos la política de nunca caer en lo convencional y siempre buscamos proponer cosas nuevas.<br/>
        </text>
      </div>


      <div className='caja'>
        <text className='imagenCard'>imagen</text>
        <text className='imagenCard'>imagen</text>
        <text className='imagenCard'>imagen</text>
        <text className='imagenCard'>imagen</text>
      </div>
      <div className='caja'>
        <text className='imagenCard'>imagen</text>
        <text className='imagenCard'>imagen</text>
        <text className='imagenCard'>imagen</text>
        <text className='imagenCard'>imagen</text>
      </div>


      <div className='caja'>
        <Card>
          <text className='titleSecondary'>
            <strong>
              Únete al<br/><text style={{color: '#6500FE'}}>equipo</text>
            </strong>
          </text>
        </Card>
        <Card>
          <text className='content'>
            Siempre estamos en busqueda de nuevos latentos que <br/>
            quieran sumarse a nuestro equipo de especilistas.
          </text>
          <input type="submit" value="Déjanos tu CV" />
        </Card>
      </div>

    </body>
    </>
  )
}
 export default Index