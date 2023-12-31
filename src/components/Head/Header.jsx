import React, { useState } from "react"
import "./header.css"
import logo from "../pic/lg.png";
import { FaTimes, FaBars } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";


const Header = () => {
    // fixed Header
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header")
        header.classList.toggle("active", window.scrollY > 100)
    })
    // Toogle Menu
    const [Mobile, setMobile] = useState(false)
    return (
        <>
            <header className='header'>
                <div className='container d_flex'>
                    <div className='logo'>
                        <img src={logo} width={150} alt='' />
                    </div>

                    <div className='navlink'>
                        <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
                            {/*<ul className='link f_flex uppercase {Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}'>*/}
                            <li>
                                <a href='#home'>home</a>
                            </li>
                            <li>
                                <a href='#features'>features</a>
                            </li>
                            <li>
                                <a href='#portfolio'>portfolio</a>
                            </li>
                            <li>
                                <a href='#resume'>resume</a>
                            </li>
                            <li>
                                <a href='#clients'>clients</a>
                            </li>
                            {/* <li>
                                <a href='#blog'>blog</a>
                            </li> */}
                            <li>
                                <a href='#contact'>contact</a>
                            </li>
                            <a href="https://wa.me/2348138862185" target="_blank">
                                <button class='home-btn'>
                                    <IoLogoWhatsapp className="i" />
                                    Hello there
                                </button>
                            </a>
                        </ul>

                        <button className='toggle' onClick={() => setMobile(!Mobile)}>
                            {Mobile ? <FaTimes className="close home-btn" /> : < FaBars className="open" />}
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header