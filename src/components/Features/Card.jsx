import React from "react";
import { FaArrowRight  } from "react-icons/fa";
import "./features.css";

const Card = (props) => {
  return (
    <>
      <div className='box btn_shadow'>
        <img src={props.image} alt='' />
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <a href='/'>
          <FaArrowRight />
        </a>
      </div>
    </>
  )
}

export default Card