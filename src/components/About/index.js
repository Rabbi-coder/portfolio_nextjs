"use client"
import React from 'react'
import { Montserrat, DM_Sans, Open_Sans } from 'next/font/google'
import Slider from "react-slick";
import aboutElemen from "../../assets/about_ele.png"
import abouPp from "../../assets/about_pp.png"
import Image from 'next/image';



const montserrat = Montserrat({
    subsets: ['latin'],
})
const dmSans = DM_Sans({
    subsets: ['latin'],
})
const openSans = Open_Sans({
    subsets: ['latin'],
})

const About = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        arrows: false,
        responsive: [
            
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    }
    return (
        <div className='about'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mx-auto text-center">
                        <div className="about_head">
                            <h2 className={montserrat.className}>What People Say <span>About Us</span></h2>
                        </div>
                    </div>
                </div>
                <div className="about_slider">
                    <Slider {...settings}>
                        <div className='item'>
                            <Image src={aboutElemen} height={300} width={300} alt='img' />
                            <div className="about_comment">
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some.</p>
                            </div>
                            <div className="about_pp d-flex align-items-center">
                                <Image src={abouPp} height={70} width={70} alt='img' />
                                <div className="pp_detail">
                                    <h5>James Willy</h5>
                                    <span>CEO GTEX</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='item'>
                                <Image src={aboutElemen} height={300} width={300} alt='img' />
                                <div className="about_comment">
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some.</p>
                                </div>
                                <div className="about_pp d-flex align-items-center">
                                    <Image src={abouPp} height={70} width={70} alt='img' />
                                    <div className="pp_detail">
                                        <h5>James Willy</h5>
                                        <span>CEO GTEX</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='item'>
                                <Image src={aboutElemen} height={300} width={300} alt='img' />
                                <div className="about_comment">
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some.</p>
                                </div>
                                <div className="about_pp d-flex align-items-center">
                                    <Image src={abouPp} height={70} width={70} alt='img' />
                                    <div className="pp_detail">
                                        <h5>James Willy</h5>
                                        <span>CEO GTEX</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='item'>
                                <Image src={aboutElemen} height={300} width={300} alt='img' />
                                <div className="about_comment">
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some.</p>
                                </div>
                                <div className="about_pp d-flex align-items-center">
                                    <Image src={abouPp} height={70} width={70} alt='img' />
                                    <div className="pp_detail">
                                        <h5>James Willy</h5>
                                        <span>CEO GTEX</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='item'>
                                <Image src={aboutElemen} height={300} width={300} alt='img' />
                                <div className="about_comment">
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some.</p>
                                </div>
                                <div className="about_pp d-flex align-items-center">
                                    <Image src={abouPp} height={70} width={70} alt='img' />
                                    <div className="pp_detail">
                                        <h5>James Willy</h5>
                                        <span>CEO GTEX</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='item'>
                                <Image src={aboutElemen} height={300} width={300} alt='img' />
                                <div className="about_comment">
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some.</p>
                                </div>
                                <div className="about_pp d-flex align-items-center">
                                    <Image src={abouPp} height={70} width={70} alt='img' />
                                    <div className="pp_detail">
                                        <h5>James Willy</h5>
                                        <span>CEO GTEX</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default About