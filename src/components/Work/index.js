"use client"
import React from 'react'
import { Montserrat, DM_Sans, Open_Sans } from 'next/font/google'
import Image from 'next/image'
import workImage from "../../assets/work1.jpg"
import workTwo from "../../assets/work2.png"
import workThree from "../../assets/work3.png"


const montserrat = Montserrat({
    subsets: ['latin'],
})
const dmSans = DM_Sans({
    subsets: ['latin'],
})
const openSans = Open_Sans({
    subsets: ['latin'],
})

const Work = () => {
    return (
        <div className='work'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mx-auto text-center">
                        <div className="work_head">
                            <h2 className={montserrat.className}>How it <span>Work</span></h2>
                            <p className={montserrat.className}>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-7">
                        <div className="work_video">
                            <div className="work_img">
                                <Image src={workImage} height={800} width={800} alt='img' />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="work_des_main">
                            <div className="work_des">
                                <div className="des_head">
                                    <h4 className={montserrat.className}>What provide to <span>our clint</span></h4>
                                </div>
                                <div className="des_details">
                                    <p className={montserrat.className}>
                                        There are many variations of passages of Lorem Ipsum availabl , but the majority have suffered alteration in some for by.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-between ">

                            <div className="col-lg-5">
                                <div className="work_two">
                                    <Image src={workTwo} height={350} width={300} alt='img' />
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="work_three">
                                    <Image src={workThree} height={350} width={200} alt='img' />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Work