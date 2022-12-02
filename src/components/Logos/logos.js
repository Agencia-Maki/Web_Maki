import React from "react";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import "./logos.css";

import cato from '../../assets/images/logos/Grupo 513.png'
import aural from '../../assets/images/logos/Grupo 498.png'
import magna from '../../assets/images/logos/Grupo 506.png'
import puertoInca from '../../assets/images/logos/Grupo 98.png'
import gpr from '../../assets/images/logos/Grupo 499.png'
import altoImpacto from '../../assets/images/logos/Grupo 507.png'
import anan from '../../assets/images/logos/Grupo 483.png'
import vapreh from '../../assets/images/logos/Grupo 502.png'
import parisinos from '../../assets/images/logos/Grupo 95.png'


const PHOTOS = [
  {img: aural},
  {img: altoImpacto},
  {img: puertoInca},
  {img: vapreh},
  {img: magna},
  {img: gpr},
  {img: anan},
  {img: cato},
  {img: parisinos},
];

const Index = () => {
  return (

      <ResponsiveMasonry 
        columnsCountBreakPoints={{ 350: 1, 700:2, 1100: 3}}
      >
        <Masonry 
        style={{ 
          // backgroundColor: "red",
          height: "500px", 
          width: "100%",
          display: "flex" , 
          justifyContent: "center", 
          alignItems: "center"}}
          > 

        {PHOTOS.map((image, index) => (
          <div key={index}>
            <img
                style={{margin: "10px", width: "150px", height: "65px" ,display: "block" }}
                src={image.img}
                alt=""
            />
          </div>
        ))}

        </Masonry>
    </ResponsiveMasonry>

  );
};

export default Index;

