import React from 'react';
import "../../../styles/Services/services.scss"
import {media} from "../../media";


const Services = () => {
    return (
        <section id="services">
            <div className="container">
                <h3>Байланышуу учун</h3>
                <div className="services__general">
                    <div className="services__general--contact">
                        <a href="https://kulcumektebi@gmail.com"><span style={{fontSize: media(15, 20)}}><i className="fa-solid fa-envelope"/>kulcumektebi@gmail.com</span></a>
                        <a href="https://t.me/99777854375"><span style={{fontSize: media(15, 20)}}><i className="fa-brands fa-telegram"/>0 777 854 375</span></a>
                        <a href="tel:996777854375"><span style={{fontSize: media(15, 20)}}><i className="fa-solid fa-phone"/>0 777 854 375</span></a>
                        <a href="#"><span style={{fontSize: media(15, 20)}}><i className="fa-solid fa-location-dot"/>Чоң-Алай району,
                            <br/> Кулчу айылы<br/>Суу-Жылга көчөсү 8</span></a>
                    </div>
                    <div className="services__general--map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d976949.1857321962!2d71.90033683570921!3d39.62759002617166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bef6a2deb6dd0f%3A0x1dca74df919e538c!2z0KfQvtC9LdCQ0LvQsNC50YHQutC40Lkg0YDQsNC50L7QvQ!5e0!3m2!1sru!2skg!4v1654090178085!5m2!1sru!2skg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                            style={{border: "none", height: media(280, 450), width: media(300, 600)}} allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;