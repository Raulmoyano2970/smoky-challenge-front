import React from 'react'
import BackToTopButton from '../components/BackToTopButton/BackToTopButton'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Layout(props) {
    return (
        <>
            <div className="bg-black">
                <Navbar />
                <div className='main-full '>
                    {props.children}
                </div>
                <BackToTopButton/>
                <Footer />
            </div>
        </>
    )
}
