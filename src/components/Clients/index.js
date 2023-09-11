"use client"

import { Montserrat, DM_Sans, Open_Sans } from 'next/font/google'
import Image from 'next/image'
import ClientImage from "../../assets/client.jpg"
import CountUp from 'react-countup'
import { ClientData } from '@/data/commonData'
import Link from 'next/link'
import { AiOutlineRight } from 'react-icons/ai';


const montserrat = Montserrat({
    subsets: ['latin'],
})
const dmSans = DM_Sans({
    subsets: ['latin'],
})
const openSans = Open_Sans({
    subsets: ['latin'],
})





const Clients = () => {
    return (

        <>
            <div className="clients">
                <div className="container">
                    <div className="row align-items-end justify-content-between">
                        <div className="col-lg-5">
                            <div className="client_left">
                                <h2 className={montserrat.className}>What we provide to <span>our Client</span></h2>
                                <p className={montserrat.className}>There are many variations of passages of Lorem Ipsum available, but the majority have.</p>
                                <div className="clients_image">
                                    <Image src={ClientImage} alt='image' width={500} height={500} />
                                    <div className="experience text-center">
                                        <h4 className={openSans.className}>{<CountUp start={0} end={10} duration={3} delay={0} />}+</h4>
                                        <p className={openSans.className}>Years of experience</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="client_right">
                                <div className="row row-gap-4">
                                    {
                                        ClientData.map((item, i) => (
                                            <>
                                                <div className="col-lg-6">
                                                    <div className="client_data" key={i}>
                                                        {item.icons}
                                                        <h4>{item.title}</h4>
                                                        <p>{item.description}</p>
                                                        <div className="read_more">
                                                            <Link href="/">{item.readMore}</Link>
                                                            <AiOutlineRight />
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        ))
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Clients