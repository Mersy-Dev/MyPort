import React from "react"
import "./home.css"
import hero from "../pic/hero3.jpg"
import skill1 from "../pic/skill1.png"
import skill2 from "../pic/skill2.png"
import skill3 from "../pic/skill3.png"
import { Typewriter } from "react-simple-typewriter";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";



const Home = () => {
    return (
        <>
            <section className='hero' id='home'>
                <div className='container f_flex top'>
                    <div className='left top'>
                        <h3>WELCOME TO MY WORLD</h3>
                        <h1>
                            Hi, I’m <span>Mercy</span>
                        </h1>
                        <h2>
                            a
                            <span>
                                <Typewriter words={[" Professional Coder.", " Developer."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
                            </span>
                        </h2>

                        <p>Mercy a dynamic software engineer with a rich expertise in the latest technologies and frameworks. With a robust understanding of contemporary programming languages and a keen eye on industry trends, Mercy brings a wealth of experience to the table. My proficiency spans across diverse frameworks, demonstrating an adeptness in leveraging cutting-edge tools to build innovative and efficient solutions.</p>

                        <div className='hero_btn d_flex'>
                            <div className='col_1'>
                                <h4>FIND WITH ME</h4>
                                <div className='button'>
                                    <a href="https://wa.me/2348138862185" target="_blank">
                                        <button class='btn_shadow'>
                                            <IoLogoWhatsapp className="i" />
                                        </button>
                                    </a>

                                    <a href="mailto:anuoluwafalaju@gmail.com" target="_blank">
                                        <button className='btn_shadow'>
                                            <MdEmail className="i" />
                                        </button>
                                    </a>

                                    <a href="https://www.linkedin.com/in/falaju-mercy-aa770b22b/" target="_blank">
                                        <button className='btn_shadow'>
                                            <FaLinkedinIn className="i" />
                                        </button>
                                    </a>
                                </div>
                            </div>
                            <div className='col_1'>
                                <h4>BEST SKILL ON</h4>
                                <button className='btn_shadow'>
                                    <img src={skill1} alt='' />
                                </button>
                                <button className='btn_shadow'>
                                    <img src={skill2} alt='' />
                                </button>
                                <button className='btn_shadow'>
                                    <img src={skill3} alt='' />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='right'>
                        <div className='right_img'>
                            <img src={hero} className="hero-img" alt='' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home