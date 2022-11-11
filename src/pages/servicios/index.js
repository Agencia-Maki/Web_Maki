import React from 'react'

import Card from '../../components/Card/Card'

const Index = () => {
  return (
    <body>
      <div>
        <text>Lo que<br/>sabemos<br/> hacer bien</text>
        <text>Calidad Optimizada</text>
        <text>
          Somos una agencia que trabaja con procesos optimizados,<br/>
          garantizando un trabajo con calidad y en los tiempos previstos.
        </text>
      </div>

      <div>
        <Card>
          <text>Social Media</text>
        </Card>
        <Card>
          <text>Diseño Gráfico</text>
        </Card>
        <Card>  
          <text>Web</text>
        </Card>
        <Card>  
          <text>Foto y Video</text>
        </Card>
      </div>

    </body>
  )
}
 export default Index