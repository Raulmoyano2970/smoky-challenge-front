import React from 'react'
import { Slide, Fade } from "react-awesome-reveal";

export default function Home() {
    return (
        <div className='w-100'>
            <Fade>
                <div className='video'>
                    <p className="text-video">
                        Smoky offers the widest variety and longest lasting vaping products on the market. Check out our complete
                        lineup of vape devices for every type of vaping experience.
                    </p>
                    <video className='videoHome' src="img/video/headerBackground.mp4" autoPlay muted loop></video>
                </div>
            </Fade>
            <main className='home-main-container pb-4'>
                <Fade>
                    <h2 className="text-white categories-text fs-1">Visit the Smoky experience</h2>
                </Fade>
                <Slide cascade={1}>
                    <div className='section2'>
                        <div className="img-category-1">Equipments</div>
                        <div className="img-category-2">Liquids</div>
                        <div className="img-category-3">Disposables</div>
                        <div className="img-category-4">Flavors</div>
                    </div>
                </Slide>
                <Fade>
                    <div className="aboutus-container">
                        <div className="text-container">
                            <h2 className="text-white">What do we do?</h2>
                            <p className="text-lx fs-5">
                                At Smooky, we strive to develop and bring to the market patented electronic cigarette devices of
                                the
                                highest quality, best flavors, and under numerous brands that have been distributed all over the
                                globe.

                                Each of these brands have been highly successful because of its extensive market research and
                                development before a product ever sees the market. Smoky continues to develop the best flavored,
                                best
                                devices, and most popular brands, as we focus on what our customers want, and what we know how
                                to do
                                best, listen to them and create the best products in the market.
                            </p>
                        </div>
                        <div className="img-container">
                            <img className="main-img" src="img/main-home-img.jpg" alt="man vaping" />
                        </div>
                    </div>
                </Fade>
            </main>
        </div>
    )
}