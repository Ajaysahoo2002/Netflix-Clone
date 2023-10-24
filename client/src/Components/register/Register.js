import React, { useState } from 'react'
import $ from "jquery";
import "./register.css";
import logo from "../../Media/logo.png"
import backImage from "../../Media/background1.jpg";
import tv from "../../Media/tv.png";
import mobile from "../../Media/mobile.jpg";
import kid from "../../Media/img.png";
import device from "../../Media/device.png";
import video1 from "../../Media/video2.m4v";
import video2 from "../../Media/video3.m4v";
import { AiOutlinePlus } from "react-icons/ai"

import { NavLink, useNavigate } from 'react-router-dom';
import Footer from "../footer/Footer";

const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const userLogin = async (e) => {
        e.preventDefault();
        if (email === "" || password === "") {
            alert("Please fill all the fields");
        }
        else {

            if (password.length > 6 && password.length <= 32) {
                if ((password.search(/[a-z]/g)) !== -1) {
                    if ((password.search(/[A-Z]/g)) !== -1) {
                        if ((password.search(/[0-1]/g)) !== -1) {
                            if ((password.search(/[!,@,#,$,%,^,&,*,_,?]/g)) !== -1) {
                                const res = await fetch("/register", {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify({
                                        email: email,
                                        password: password
                                    })
                                });
                                const details = await res.json();
                                if (!details || details.status === 422) {
                                    window.alert("Invalid Registration!");
                                } else {
                                    window.alert("Registration Successfull");
                                    navigate("/login");
                                }
                            }
                            else {
                                window.alert("Password should have atleast one Symbol!");
                            }
                        }
                        else {
                            window.alert("Password should have atleast one Number!");
                        }
                    }
                    else {
                        window.alert("Password should have atleast one uppercase letter!");
                    }
                }
                else {
                    window.alert("Password should have atleast one lowercase letter!");
                }
            } else {
                window.alert("Password must contain characters between 6 and 32")
            }

        }
    }
        return(
            <div>
                <div className='registerPage'>
                    <div className="registerPage-container">
                        <div className="child-registerpage-container">
                            <div className="back-image">
                                <img src={backImage} alt="Not Found!" />
                            </div>
                            <div className="header">
                                <div className="logo">
                                    <NavLink to="#"><img src={logo} alt="Logo" /></NavLink>
                                </div>
                                <div className="right-header">
                                    <div className="language">
                                        <select name="language" id="lan">
                                            <option value="English">English</option>
                                            <option value="Hindi">Hindi</option>
                                        </select>
                                    </div>
                                    <NavLink to="/login"><button>Sign In</button></NavLink>
                                </div>
                            </div>
                            {/* body part */}
                            <div className="register-container">
                                <h1>Enjoy big movies, hit series and more from $ 149.</h1>
                                <p>Join today. Cancel anytime.</p>
                                <p>Ready to watch? Enter your email to create or restart you membership.</p>
                                <form method='POST'>
                                    <div className="form-control">
                                        <input type="email" name='email' value={email} onChange={(e) => { setEmail(e.target.value) }} required />
                                        <label>Email or Phone number</label><br />
                                        {email === "" ? <p>Please enter a valid email address or phone number.</p> : ""}
                                    </div>
                                    <div className="form-control">
                                        <input type="password" name='password' value={password} onChange={(e) => { setPassword(e.target.value) }} required />
                                        <label>Add a password</label>
                                        <br />
                                        {password === "" ? <p>Your password must contain between 4 and 12 characters.</p> : ""}
                                    </div>
                                    <NavLink to="login"><button type="submit" onClick={userLogin}>NEXT</button></NavLink>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Section Part */}
                    <div className="section-part">
                        <div className='section'>
                            <div class="wrapper media-right">
                                <div class="content">
                                    <h1 class="title">Enjoy on your Tv</h1>
                                    <p class="subtitle">Watch on smart TVs, PlayStation, Xbox,
                                        Chromecast, Apple TV, Blu-ray players and
                                        more.</p>
                                </div>
                                <div className="content-media">
                                    <img class="media" src={tv} alt='a' />
                                    <video src={video1} autoPlay loop muted />
                                </div>
                            </div>
                        </div>

                        <div className='section'>
                            <div class="wrapper media-left">
                                <img class="media" src={mobile} alt='a' />
                                <div class="content">
                                    <h1 class="title">Download your shows to watch offline</h1>
                                    <p class="subtitle">Save your favorites easily and always have something to watch.</p>
                                </div>
                            </div>
                        </div>

                        <div className='section'>
                            <div class="wrapper media-right">
                                <div class="content">
                                    <h1 class="title">Watch everywhere</h1>
                                    <p class="subtitle">Stream unlimited movies and TV shows on your phone,tablet,laptop and TV.</p>
                                </div>
                                <div className="content-media">
                                    <img class="media" src={device} alt='a' />
                                    <video src={video2} autoPlay loop muted />
                                </div>

                            </div>
                        </div>

                        <div className='section'>
                            <div class="wrapper media-left">
                                <img class="media" src={kid} alt='a' />
                                <div class="content">
                                    <h1 class="title">Create progiles for kids</h1>
                                    <p class="subtitle">Send children on adventures wuth their favorite characters in a space made just for them---free with your membership.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <section class="faqs">
                        <h1 style={{fontSize:"2.5em",marginBottom:"1rem"}}>Frequently Asked Questions</h1>
                        <div class="accordion">
                            <div class="accordion__item accordion--open">
                                <div class="accordion__head" onClick={()=>{$("#accordion-part-1").slideToggle()}}>
                                    <h1 class="accordion__title">What is Netflix?</h1>
                                    <AiOutlinePlus />
                                </div>
                                <div class="accordion__body" id='accordion-part-1'>
                                    <p class="accordion__line">
                                        Netflix is a streaming service that offers a wide variety of
                                        award-winning TV shows, movies, anime, documentaries and more – on
                                        thousands of internet-connected devices.
                                    </p>
                                    <p class="accordion__line">
                                        You can watch as much as you want, whenever you want, without a
                                        single ad – all for one low monthly price. There's always
                                        something new to discover, and new TV shows and movies are added
                                        every week!
                                    </p>
                                </div>
                            </div>

                            <div class="accordion__item">
                                <div class="accordion__head" onClick={()=>{$("#accordion-part-2").slideToggle()}}>
                                    <h1 class="accordion__title">How much does Netflix cost?</h1>
                                    <AiOutlinePlus />
                                </div>
                                <div class="accordion__body" id='accordion-part-2'>
                                    <p class="accordion__line">
                                        Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                                        streaming device, all for one fixed monthly fee. Plans range from
                                        ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
                                    </p>
                                </div>
                            </div>
                            <div class="accordion__item">
                                <div class="accordion__head" onClick={()=>{$("#accordion-part-3").slideToggle()}}>
                                    <h1 class="accordion__title">Where can I watch?</h1>
                                    <AiOutlinePlus />
                                </div>
                                <div class="accordion__body" id='accordion-part-3'>
                                    <p class="accordion__line">
                                    Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
                                    </p>
                                    <p class="accordion__line">
                                    You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
                                    </p>
                                </div>
                            </div>
                            <div class="accordion__item">
                                <div class="accordion__head" onClick={()=>{$("#accordion-part-4").slideToggle()}}>
                                    <h1 class="accordion__title">How do I cancel?</h1>
                                    <AiOutlinePlus />
                                </div>
                                <div class="accordion__body" id='accordion-part-4'>
                                    <p class="accordion__line">
                                    Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
                                    </p>
                                </div>
                            </div>
                            <div class="accordion__item">
                                <div class="accordion__head" onClick={()=>{$("#accordion-part-5").slideToggle()}}>
                                    <h1 class="accordion__title">What can I watch on Netflix?</h1>
                                    <AiOutlinePlus />
                                </div>
                                <div class="accordion__body" id='accordion-part-5'>
                                    <p class="accordion__line">
                                    Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
                                    </p>
                                </div>
                            </div>
                            <div class="accordion__item">
                                <div class="accordion__head" onClick={()=>{$("#accordion-part-6").slideToggle()}}>
                                    <h1 class="accordion__title">Is Netflix good for kids?</h1>
                                    <AiOutlinePlus />
                                </div>
                                <div class="accordion__body" id='accordion-part-6'>
                                    <p class="accordion__line">
                                    The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.
                                    </p>
                                    <p class="accordion__line">
                                    Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* <!-- <footer> --> */}
                    <Footer />
                </div>
            </div >
        )
}

export default Register
