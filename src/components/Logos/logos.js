import React from "react";
import Masonry, {ResponsiveMasonry} from "react-masonry-component";
import "./logos.css";

import cato from '../../assets/images/inicio/Grupo 513.png'
import aural from '../../assets/images/inicio/Grupo 498.png'
import magna from '../../assets/images/inicio/Grupo 506.png'
import puertoInca from '../../assets/images/inicio/Grupo 98.png'
import gpr from '../../assets/images/inicio/Grupo 499.png'
import altoImpacto from '../../assets/images/inicio/Grupo 507.png'
import anan from '../../assets/images/inicio/Grupo 483.png'
import vapreh from '../../assets/images/inicio/Grupo 502.png'
import parisinos from '../../assets/images/inicio/Grupo 95.png'


const PHOTOS = [
  {img: cato},
  {img: aural},
  {img: magna},
  {img: puertoInca},
  {img: gpr},
  {img: altoImpacto},
  {img: anan},
  {img: vapreh},
  {img: parisinos},
];

const masonryOptions = {
  fitWidth: false,
  columnWidth: 300,
  gutter: 30,
  itemSelector: ".photo-item",
};

const Index = () => {
  return (
    <div style={{ 
      // backgroundColor: "red",
      height: "500px", 
      width: "100%",
      display: "flex" , 
      justifyContent: "center", 
      alignItems: "center"}}>
      {/* <ResponsiveMasonry 
      > */}
        <Masonry 
        // className="my-masonry-grid"
        columnCount={3}
        // columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}

        // className={"photo-list"}
        // elementType={"div"}
        // options={masonryOptions}
        // breakpointCols={3}
        // disableImagesLoaded={false}
        // updateOnEachImageLoad={false}
        > 

        {PHOTOS.map((photo) => (
            <img className="log"  src={photo.img} alt="" />
        ))}

          </Masonry>
      {/* </ResponsiveMasonry> */}
      
    </div>
  );
};

export default Index;
/*


          <img src={cato} alt="No Carga" width="250"/>
          <img src={cato} alt="No Carga" width="250"/>
          <img src={cato} alt="No Carga" width="250"/>
          <img src={cato} alt="No Carga" width="250"/>
          <img src={cato} alt="No Carga" width="250"/>
          <img src={cato} alt="No Carga" width="250"/>
          <img src={cato} alt="No Carga" width="250"/>
          <img src={cato} alt="No Carga" width="250"/>
          <img src={cato} alt="No Carga" width="250"/>
*/

