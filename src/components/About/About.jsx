import React from 'react';

import './About.scss';
const About = () => {
  return (
    <div id="about">
    <section className="about-section">
  <div className="container">
    <div className="row-clearfix">

     
      <div className="content-column col-md-6 col-sm-12 col-xs-12">
        <div className="inner-column">
          <div className="sec-title">
            <div className="title">About Us</div>
            <h2>We Are The Leader In Rentals  </h2>
            <h2>The Interiores</h2>
          </div>
          <div className="text">Bienvenue sur notre plateforme ! Nous sommes dédiés à fournir des solutions innovantes
            pour répondre à vos besoins. Découvrez ce que nous avons à offrir et rejoignez-nous dans
            cette aventure passionnante.</div>
          <div className="email">Request Quote: <span className="theme_color">UniLog@gmail.com</span></div>
          <a href="" className="theme-btn btn-style-three">Read More</a>
        </div>
      </div>

      
      <div className="image-column col-md-6 col-sm-12 col-xs-12">
        <div className="inner-column " data-wow-delay="0ms" data-wow-duration="1500ms">
          <div className="image">
          <img src="https://i.ibb.co/vQbkKj7/about.jpg" alt="" />
            
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
</div>
  );
};

export default About;