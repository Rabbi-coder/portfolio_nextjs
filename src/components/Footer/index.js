import React from 'react'
import Link from 'next/link'
import Logo from "../../assets/logo.svg"
import Image from 'next/image'
import { Montserrat, DM_Sans } from 'next/font/google'
import { FooterAfterList, FooterBeforeList, FooterSocial } from '@/data/commonData'
import { BiSolidSend } from 'react-icons/bi';
import Facebook from '@/assets/svg/Facebook'
import Instagram from '@/assets/svg/Instagram'
import Twitter from '@/assets/svg/Twitter'
import Pinterest from '@/assets/svg/Pinterest'

const montserrat = Montserrat({
  subsets: ['latin'],
})
const dmSans = DM_Sans({
  subsets: ['latin'],
})

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="footer-logo">
                <Link href="/">
                  <Image src={Logo} loading='lazy' alt='logos' />
                </Link>
              </div>
              <div className="footer_left_content">
                <div className="short_text">
                  <p className={montserrat.className}>
                    There are many variations of passages of available, but the majority have suffered.
                  </p>
                </div>

              </div>
            </div>
            <div className="col-lg-3">
              <div className="footer_before_list">
                <h4 className={montserrat.className}>Services</h4>
                <div className="before_list">
                  {
                    FooterBeforeList.map((item, i) => (
                      <Link className={dmSans.className} href={item.link} key={i}>{item.title}</Link>
                    ))
                  }
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footer_after_list">
                <h4 className={montserrat.className}>Resources</h4>
                <div className="after_list">
                  {
                    FooterAfterList.map((item, i) => (
                      <Link className={dmSans.className} href={item.link} key={i}>{item.title}</Link>
                    ))
                  }
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footer_newsletter">
                <h4 className={montserrat.className}>Newsletter</h4>
                <div className="newsletter_body">
                  <p className={dmSans.className}>
                    Subscribe for our upcoming latest
                    address and resources
                  </p>
                  <div className="newsletter_input">
                    <input type="email" placeholder='email' />
                    <button><BiSolidSend /></button>
                  </div>
                  <div className="footer_social">


                    <>
                      <div className='footer_logos'>
                        <Facebook />
                      </div>
                      <div className='footer_logos'>
                        <Instagram />
                      </div>
                      <div className='footer_logos'>
                        <Twitter />
                      </div>
                      <div className='footer_logos'>
                        <Pinterest />
                      </div>
                    </>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer