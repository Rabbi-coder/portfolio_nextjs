"use client"
import Image from 'next/image'
import React from 'react'
import teamImage from "../../assets/team.png"
import { Montserrat, DM_Sans, Open_Sans } from 'next/font/google'
import { motion } from "framer-motion"

const montserrat = Montserrat({
    subsets: ['latin'],
})
const dmSans = DM_Sans({
    subsets: ['latin'],
})
const openSans = Open_Sans({
    subsets: ['latin'],
})

const Team = () => {
    return (
        <>
            <div className="team">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mx-auto text-center">
                            <div className="team_head ">
                                <h2 className={montserrat.className}>Run Agency Smartly with Our <span>Team Member.</span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="team_img">
                                <Image src={teamImage} height={500} width={500} alt='image' />
                            </div>
                        </div>
                        <div className="col-lg-6 ">
                            <div className="team_right">
                                <div className="provide_part">
                                    <h4 className={montserrat.className}>What provide to <span>our client</span></h4>
                                    <div className="provide_des">
                                        <p className={montserrat.className}>There are many variations of passages of Lorem Ipsum availabl , but the majority have suffered alteration in some for by injected humour, or randomised words which dont look.There are many variations of passages.</p>
                                    </div>

                                </div>
                                <div className="optimize_part">
                                    <h4 className={montserrat.className}>Optimize for quickly<span>display.</span>
                                    </h4>
                                    <div className="optimize_des">
                                        <p>
                                            There are many variations of passages of Lorem Ipsum availabl but the major.There are many variations of passages of.
                                        </p>
                                    </div>
                                </div>
                                <div className="right_button">
                                    <motion.button whileHover={{ scale: 1.05, }} transition={{
                                        type: "spring",
                                        stiffness: 300,
                                    }} className={dmSans.className}>Contact Now</motion.button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Team