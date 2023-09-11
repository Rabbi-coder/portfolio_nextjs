"use client"
import React from 'react'
import { Montserrat, DM_Sans, Open_Sans } from 'next/font/google'
import Slider from 'react-slick'
import PrevArrow from './PrevArrow'
import NextArrow from './NextArrow'
import Image from 'next/image'
import blogOne from "../../assets/blog1.png"
import Link from 'next/link'

const montserrat = Montserrat({
    subsets: ['latin'],
})
const dmSans = DM_Sans({
    subsets: ['latin'],
})
const openSans = Open_Sans({
    subsets: ['latin'],
})

const Blog = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,

    }
    return (
        <>
            <div className="blog">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mx-auto text-center">
                            <div className="blog_head">
                                <h2 className={montserrat.className}>Our Popular Project <span>And Blog</span></h2>
                                <div className="blog_head_p">
                                    <p>
                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blog_slider">
                        <Slider {...settings}>
                            <div className='item'>
                                <div className="item_img">
                                    <Image src={blogOne} height={500} width={500} alt='img' />
                                </div>
                                <div className="blog_title">
                                    <h4 className={montserrat.className}>Bitcoin and Economic Freedom</h4>
                                </div>
                                <div className="blog_details d-flex justify-content-between">
                                    <div className="read_more">
                                        <Link className={montserrat.className} href="/">Read More</Link>
                                    </div>
                                    <div className="date">
                                        <span className={montserrat.className}>10 January 2023</span>
                                    </div>
                                </div>
                            </div>
                            <div className='item'>
                                <div className="item_img">
                                    <Image src={blogOne} height={500} width={500} alt='img' />
                                </div>
                                <div className="blog_title">
                                    <h4 className={montserrat.className}>Bitcoin and Economic Freedom</h4>
                                </div>
                                <div className="blog_details d-flex justify-content-between">
                                    <div className="read_more">
                                        <Link className={montserrat.className} href="/">Read More</Link>
                                    </div>
                                    <div className="date">
                                        <span className={montserrat.className}>10 January 2023</span>
                                    </div>
                                </div>
                            </div>
                            <div className='item'>
                                <div className="item_img">
                                    <Image src={blogOne} height={500} width={500} alt='img' />
                                </div>
                                <div className="blog_title">
                                    <h4 className={montserrat.className}>Bitcoin and Economic Freedom</h4>
                                </div>
                                <div className="blog_details d-flex justify-content-between">
                                    <div className="read_more">
                                        <Link className={montserrat.className} href="/">Read More</Link>
                                    </div>
                                    <div className="date">
                                        <span className={montserrat.className}>10 January 2023</span>
                                    </div>
                                </div>
                            </div>
                            <div className='item'>
                                <div className="item_img">
                                    <Image src={blogOne} height={500} width={500} alt='img' />
                                </div>
                                <div className="blog_title">
                                    <h4 className={montserrat.className}>Bitcoin and Economic Freedom</h4>
                                </div>
                                <div className="blog_details d-flex justify-content-between">
                                    <div className="read_more">
                                        <Link className={montserrat.className} href="/">Read More</Link>
                                    </div>
                                    <div className="date">
                                        <span className={montserrat.className}>10 January 2023</span>
                                    </div>
                                </div>
                            </div>

                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog