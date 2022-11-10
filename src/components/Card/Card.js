import React from "react"
import './scss/card.scss'

const Card = (props) => {

  // console.log(props)
  // console.log(props.color)
  // const {color, backgroundColor, title, img ,description} = props

  return(
    <>
      <div className="card" 
        style={{ 
          // color: "{props.color}",
          backgroundColor: props.color }}
      >
        {props.children}
      </div>
      
    </>
  )
}

export default  Card