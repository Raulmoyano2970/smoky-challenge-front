import React from 'react'
import { Fade } from "react-awesome-reveal";

export default function Footer() {
    return (
        <Fade>


            <footer className="footer-container">
                <div className="footer-warning">
                    <p className="">
                        These products are intended only for people of legal age. Use not allowed in minors and pregnant women.
                    </p>
                </div>

                <div className="footer pt-1">
                    <div className="logo-footer-container">
                        <img className="logo-footer" src="img/smoky-logo-png.png" alt="logo Smoky" />
                        <h4 className="map-text text-white">Follow us:</h4>
                        <div className="socialmedia-container ">
                            <a href="https://web.whatsapp.com/"><img className="redes-img" src="img/whatsapp.png"
                                alt="whatsapp logo" /></a>
                            <a href="https://www.instagram.com/"><img className="redes-img" src="img/instagram.png"
                                alt="instagram logo" /></a>
                            <a href="https://www.facebook.com/"><img className="redes-img" src="img/facebook.png"
                                alt="facebook logo" /></a>
                        </div>
                    </div>

                    <div className="map-text ">
                        <h3 className="text-white">Contact us:</h3>
                        <div className='div-icon'>
                            <img className='img-icon' src="img/tienda.png" alt="" />
                            <p className='pt'>Monday-Friday: 7:00 a.m. a 6:00 p.m.</p>
                        </div>
                        <div className='div-icon'>
                            <img className='img-icon' src="img/llamada.png" alt="" />
                            <p className='pt'>Phone number: +57 321 984 8497</p>
                        </div >
                        <div className='div-icon'>
                            <img className='img-icon' src="img/marcador-de-posicion.png" alt="" />
                            <p className='pt'>Adress: Bogotá, Colombia</p>
                        </div>
                        <div className='div-icon'>
                            <img className='img-icon' src="img/email.png" alt="" />
                            <p className='pt'>smoky.vaping@gmail.com</p>
                        </div>
                    </div>

                    <div className="text-location">
                        <h3 className="text-white">Location:</h3>
                        <iframe class="map-img"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3977.1004259840356!2d-74.13734962540892!3d4.575979886435537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1671167599751!5m2!1ses!2sco"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                        <img class="payment-container" src="https://cdn.shopify.com/s/files/1/0166/9493/5652/files/Payment_6ca1a29f-0fb4-4fbe-a624-35dfe7ae119f.png?v=1663159128&width=720" alt="payment photo" />
                    </div>
                </div>

                <div className="footer-warning">
                    <h6>Smoky Vape Shop® 2022 | Find us on Github</h6>
                </div>

            </footer>
        </Fade>
    )
}