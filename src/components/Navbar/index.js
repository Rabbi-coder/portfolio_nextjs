"use client"
import Link from 'next/link';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { MenuData } from '@/data/commonData';

import { DM_Sans } from 'next/font/google'
import Image from 'next/image';
import Logo from "../../assets/logo.svg"

// If loading a variable font, you don't need to specify the font weight
const dmSans = DM_Sans({
    subsets: ['latin'],
})

const Menubar = () => {
    return (
        <Navbar >
            <Container>
                <Link href="#">
                    <Image src={Logo} loading='lazy' alt='logo' />
                </Link>
                <Nav className="ms-auto">
                    {
                        MenuData.map((item, i) => (
                            <Link className={dmSans.className} href={item.link} key={i}>{item.title}</Link>
                        ))
                    }
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Menubar