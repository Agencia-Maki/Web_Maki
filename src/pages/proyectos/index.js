import React,{useState} from "react"
import Slider from 'react-slick'


// import '../../styles/style.scss'

const sliderSettings = {
  responsive: [
    {
      breakpoint: 1024,
      settings: {
       slidesToShow: 2,
      }
    },
    {
      breakpoint: 600,
      settings: {
       slidesToShow: 1,
      }
     }
  ],

  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: false,
  
  fade: true ,
  speed: 500, // ms
  autoplay: false,
  initialSlide: 2,
  lazyLoad: true,
  autoplaySpeed: 30,
}

const settings = { 
  fade: true ,
  speed: 500, // ms
  autoplay: true,
  initialSlide: 2,
  lazyLoad: true,
  autoplaySpeed: 3000,

  className: "center",
  centerMode: true,
  infinite: true,
  slidesToShow: 1,

  // dots: true,
  slidesToScroll: 1,
  cssEase: "linear"
}

const hotelCards = [
  {
    title: 'Studio Room'
  },
  {
    title: 'Deluxe Room'
  },
  {
    title: 'King Deluxe Room',
  },
  {
    title: 'Royal Suite',
  },
]

const Index = () => {

  const [sliderRef, setSliderRef] = useState(false)

  return (

  <>
    {/* <div className="caja">
      <div>
        <button onCLick={sliderRef?.slickPrev} name="prev">Prev</button>
        <button onCLick={sliderRef?.slickNext} name="next">Next</button>
      </div>
    </div> */}
    
    <div className="caja">
      <div>
      <Slider  {...settings} >
          {hotelCards.map((card, index) => (
            <div key={index}>
              <h2>{card.title}</h2>              
            </div>
          ))}
        </Slider>
      </div>
    </div>

  </>
  )
}
export default Index

/*
  {...sliderSettings}
*/