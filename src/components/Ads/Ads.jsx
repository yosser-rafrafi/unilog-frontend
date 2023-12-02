import React from 'react';

import './Ads.scss';

const Ads = () => {
  return (
    <div id='rental-ads'>
    <div className="wrapper">
      <h1>Rental Ads</h1>
      <div className="cols">
        <div className="col" onTouchStart={() => document.querySelector('.col').classList.toggle('hover')}>
          <div className="container">
            <div className="front" style={{ backgroundImage: 'url(https://unsplash.it/500/500/)' }}>
              <div className="inner">
                <p>Diligord</p>
                <span>Lorem ipsum</span>
              </div>
            </div>
            <div className="back">
              <div className="inner">
                <p>+</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col" onTouchStart={() => document.querySelector('.col').classList.toggle('hover')}>
          <div className="container">
            <div className="front" style={{ backgroundImage: 'url(https://unsplash.it/511/511/)' }}>
              <div className="inner">
                <p>Rocogged</p>
                <span>Lorem ipsum</span>
              </div>
            </div>
            <div className="back">
              <div className="inner">
                <p>+</p>
              </div>
            </div>
          </div>
        </div>




        <div className="col" onTouchStart={() => document.querySelector('.col').classList.toggle('hover')}>
          <div className="container">
            <div className="front" style={{ backgroundImage: 'url(https://unsplash.it/511/511/)' }}>
              <div className="inner">
                <p>Rocogged</p>
                <span>Lorem ipsum</span>
              </div>
            </div>
            <div className="back">
              <div className="inner">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col" onTouchStart={() => document.querySelector('.col').classList.toggle('hover')}>
          <div className="container">
            <div className="front" style={{ backgroundImage: 'url(https://unsplash.it/511/511/)' }}>
              <div className="inner">
                <p>Rocogged</p>
                <span>Lorem ipsum</span>
              </div>
            </div>
            <div className="back">
              <div className="inner">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col" onTouchStart={() => document.querySelector('.col').classList.toggle('hover')}>
          <div className="container">
            <div className="front" style={{ backgroundImage: 'url(https://unsplash.it/511/511/)' }}>
              <div className="inner">
                <p>Rocogged</p>
                <span>Lorem ipsum</span>
              </div>
            </div>
            <div className="back">
              <div className="inner">
                <p>+</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col" onTouchStart={() => document.querySelector('.col').classList.toggle('hover')}>
          <div className="container">
            <div className="front" style={{ backgroundImage: 'url(https://unsplash.it/511/511/)' }}>
              <div className="inner">
                <p>Rocogged</p>
                <span>Lorem ipsum</span>
              </div>
            </div>
            <div className="back">
              <div className="inner">
                <p>+</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col" onTouchStart={() => document.querySelector('.col').classList.toggle('hover')}>
          <div className="container">
            <div className="front" style={{ backgroundImage: 'url(https://unsplash.it/511/511/)' }}>
              <div className="inner">
                <p>Rocogged</p>
                <span>Lorem ipsum</span>
              </div>
            </div>
            <div className="back">
              <div className="inner">
                <p>+</p>
              </div>
            </div>
          </div>
        </div>
        
        
       
        {/* Ajoutez le reste des cartes avec le même modèle */}
      </div>
    </div>
    </div>
  );
};

export default Ads;