import React from 'react';
import logo from "./../../images/logo.png"
import motion from "./../../images/motion.png"
import {media} from "../media";

const Footer = () => {
    return (
        <footer id="footer">
            <div className="container">
                <div className="footer-general">

                    <div>
                        <img src={logo} alt=""/>
                        <div className="footer-general__contact" style={{paddingTop: media(10, 40)}}>
                            <span><i className="fa-solid fa-phone"/></span>
                            <a href="tel:0779105240">0 (777) 854 375</a>
                        </div>
                    </div>
                    <div className="footer-general__center">
                        <a href="https://kulcumektebi@gmail.com">kulcumektebi@gmail.com</a>
                        {/*<div>*/}
                        {/*    <h1>Developed at</h1>*/}
                        {/*    <img src={motion} alt=""/>*/}
                        {/*    <h1>MOTION WEB LLC</h1>*/}
                        {/*</div>*/}
                    </div>
                    <div className="footer-general__seti">
                        <h1>Соц тармактар</h1>
                        <a href="https://www.facebook.com/%D0%9A%D1%83%D1%80%D1%81%D0%B0%D0%BD%D0%B1%D0%B0%D0%B9-%D0%96%D0%B0%D0%BF%D0%B0%D1%80%D0%BE%D0%B2-%D0%B0%D1%82%D1%8B%D0%BD%D0%B4%D0%B0%D0%B3%D1%8B-%D0%BE%D1%80%D1%82%D0%BE-%D0%BC%D0%B5%D0%BA%D1%82%D0%B5%D0%B1%D0%B8-109761044854498/?ti=as">
                            <span><i className="fab fa-facebook"/></span>
                        </a>
                        <a href="https://t.me/996770300022">
                            <span><i className="fab fa-telegram"/></span>
                        </a>
                    </div>
                </div>

                <div className="footer-general2">
                    <div className="footer-general2__width"/>
                    <div className="footer-general2__gen">
                    <div>
                        <p>Все права защищены - 2022</p>
                    </div>
                    <div className="footer-general2__gen__general">
                        <img src={motion} alt=""/>
                        <a href="https://motion-web.io"><h1>MOTION WEB LLC</h1></a>
                    </div>
                  </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;