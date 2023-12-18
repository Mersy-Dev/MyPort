import React, { useState } from "react";
import {  FaGithub, FaChevronRight, FaTimes, FaArrowRight, FaHeart  } from "react-icons/fa";
import "./portfolio.css";

const Card = (props) => {
    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }

    

    if (modal) {
        document.body.classList.add("active-modal")
    } else {
        document.body.classList.remove("active-modal")
    }
    return (
        <>
            <div className='box btn_shadow '>
                <div className='img'>
                    <img src={props.image} alt='' onClick={toggleModal} />
                </div>
                <div className='category d_flex'>
                    <span onClick={toggleModal}>{props.category}</span>
                    <label>
                         <FaHeart className="pli"/>{props.totalLike}
                    </label>
                </div>
                <div className='title'>
                    <h2 onClick={toggleModal}>{props.title}</h2>
                    <a href='#popup' className='arrow' onClick={toggleModal}> 
                        <FaArrowRight />
                    </a>
                </div>
            </div>

            {/* Popup box */}
            {modal && (
                <div className='modal'>
                    <div onClick={toggleModal} className='overlay'></div>
                    <div className='modal-content d_flex'>
                        <div className='modal-img left'>
                            <img src={props.image} alt='' />
                        </div>
                        <div className='modal-text right'>
                            <span>Featured - Design</span>
                            <h1>{props.title}</h1>
                            <p>{props.desc}</p>
                            <p>{props.desc2}</p>
                            <div className='button f_flex mtop'>
                                <a href={props.github} target="_blank">
                                    <button className='btn_shadow'>
                                        GITHUB < FaGithub className="mtb" />
                                    </button>
                                </a>
                                
                               <a href={props.demo} target="_blank">
                                    <button className='btn_shadow'>
                                        VIEW PROJECT <FaChevronRight />
                                    </button>
                               </a>
                            </div>
                            <button className='close-modal btn_shadow' onClick={toggleModal}>
                                <FaTimes className="bcm"/>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Card