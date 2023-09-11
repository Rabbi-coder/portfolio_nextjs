"use client"
import React from 'react'
import { Montserrat, DM_Sans, Open_Sans } from 'next/font/google'
import { BiSolidSend } from 'react-icons/bi';


const montserrat = Montserrat({
    subsets: ['latin'],
})
const dmSans = DM_Sans({
    subsets: ['latin'],
})
const openSans = Open_Sans({
    subsets: ['latin'],
})

const Subscription = () => {
    return (
        <div className='subscription'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="sub_main">
                            <div className="sub_inner align-items-center d-flex justify-content-between">
                                <div className="sub_left">
                                    <h2 className={montserrat.className}>Subscribe to Our Newsletter</h2>
                                </div>
                                <div className="sub_right">
                                    <div className="sub_input">
                                        <input type="email" placeholder='email' />
                                        <button><BiSolidSend /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscription