import Carousel from 'react-bootstrap/Carousel';
import Card from '../../components/Card/Card'


import web from '../../assets/images/inicio/web.png'
import socialMedia from '../../assets/images/inicio/socialMedia.png'

function index() {
  return (
    <div className='caja'>

    <Carousel>
      <Carousel.Item interval={5000}>
        <Card 
          style={{
            // height: "300px",
            // width: "300px",
            backgroundColor: "red",
          }}>
          hola
        </Card>

      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block"
          // src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
          style={{
            height: "300px",
            width: "300px",
            backgroundColor: "blue",
          }}
        />
        <Carousel.Caption>
          <h3>Social Media</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block"
          // src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
          style={{
            height: "300px",
            width: "300px",
            backgroundColor: "green"
          }}
        />
        <Carousel.Caption>
          <h3>Diseño Grafico</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={5000}>
        <img
          className="d-block"
          // src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
          style={{
            height: "300px",
            width: "300px",
            backgroundColor: "green"
          }}
        />
        <Carousel.Caption>
          <h3>Foto y Video</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>

  );
}

export default index;