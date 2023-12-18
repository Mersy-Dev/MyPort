
import React, { useState, useRef } from "react"
import contact1 from "./contact1.png"
import "./contact.css";
import { FaFacebookF, FaInstagram, FaGithub, } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa6";
import emailjs from 'emailjs-com'



const Contact = () => {
    const [data, setData] = useState({
        fullname: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
    })

    const InputEvent = (event) => {
        const { name, value } = event.target

        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            }
        })
    }

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_5i01s7t', 'template_6jz39kq', form.current, 'LAyY4wL1gVmcwsuMK')
            .then((result) => {
                console.log(result.text);
                alert("Message Sent, I will get back to you shortly", result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset()
    };

    return (
        <>
            <section className='Contact' id='contact'>
                <div className='container top'>
                    <div className='heading text-center'>
                        <h4>CONTACT</h4>
                        <h1>Contact With Me</h1>
                    </div>

                    <div className='content d_flex'>
                        <div className='left'>
                            <div className='box box_shodow'>
                                <div className='img'>
                                    <img src={contact1} className='imgcon' alt='' />
                                </div>
                                <div className='details'>
                                    <h1>FALAJU MERCY</h1>
                                    <p className="cbig">Software Engineer</p>
                                    <p>I'm a recent graduate from SQI College of ICT, specializing in Software Engineering/Data Structures. Eager to dive into the tech world, I'm seeking remote or hybrid internships to apply my skills and gain hands-on experience.</p> <br />
                                    <p>Phone: (+234) 813 8862 185</p>
                                    <p>Email: anuoluwafalaju@gmail.com</p> <br />
                                    <span>FIND WITH ME</span>
                                    <div className='button f_flex'>
                                        <a href="https://www.linkedin.com/in/falaju-mercy-aa770b22b/" target="_blank">
                                            <button className='btn_shadow'>
                                                <FaLinkedinIn className="i" />
                                            </button>
                                        </a>
                                        <a href="https://github.com/Mersy-Dev/" target="_blank">
                                            <button className='btn_shadow'>
                                                <FaGithub className="i" />
                                            </button>
                                        </a>
                                        <a href="mailto:anuoluwafalaju@gmail.com" target="_blank">
                                            <button className='btn_shadow'>
                                                <MdEmail className="i" />
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='right box_shodow'>
                            <form ref={form} onSubmit={sendEmail}>
                                <div className='f_flex'>
                                    <div className='input row'>
                                        <span>YOUR NAME</span>
                                        <input type='text' name='fullname' />
                                    </div>
                                    <div className='input row'>
                                        <span>PHONE NUMBER </span>
                                        <input type='number' name='phone' />
                                    </div>
                                </div>
                                <div className='input'>
                                    <span>EMAIL </span>
                                    <input type='email' name='email'  />
                                </div>
                                <div className='input'>
                                    <span>SUBJECT </span>
                                    <input type='text' name='subject' />
                                </div>
                                <div className='input'>
                                    <span>YOUR MESSAGE </span>
                                    <textarea cols='30' rows='10' name='message' ></textarea>
                                </div>
                                <button className='btn_shadow'>
                                    SEND MESSAGE <i className='fa fa-long-arrow-right'></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact