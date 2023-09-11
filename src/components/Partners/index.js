"use client"
import React from 'react'
import { Montserrat, DM_Sans, Open_Sans } from 'next/font/google'
import Slider from "react-slick";

import partOne from "../../assets/partone.png"
import partTwo from "../../assets/parttwo.png"
import partThree from "../../assets/partthree.png"
import partFour from "../../assets/partfour.png"
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




const Partners = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrows: false,
    }


    return (
        <div>
            <div className="partners">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mx-auto text-center">
                            <div className="partner_head">
                                <h2 className={montserrat.className}>Reputed <span>Partners</span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="parner_slider">
                        <Slider {...settings}>
                            <div className='item'>
                                <Image src={partOne} height={500} width={500} alt='img' />
                            </div>
                            <div className='item'>
                                <Image src={partTwo} height={500} width={500} alt='img' />
                            </div>
                            <div className='item'>
                                <Image src={partThree} height={500} width={500} alt='img' />
                            </div>
                            <div className='item'>
                                <Image src={partFour} height={500} width={500} alt='img' />
                            </div>
                            <div className='item'>
                                <Image src={partOne} height={500} width={500} alt='img' />
                            </div>

                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Partners