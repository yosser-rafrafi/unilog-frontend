import React from 'react';

import './Destinations.scss';
const Destinations = () => {
  return (
   <div id='location'>
    <div className="main">
     

      <section className="card-sm__container">
        <section className="card-sm" style={{ backgroundImage: 'url("https://th.bing.com/th/id/OIP.nm-Iwch29ZYcfu9SaIa92AHaFj?rs=1&pid=ImgDetMain")' }}>
          <p className="card__text-sm">Mahia - Tunisie</p>
          <h1 className="card__text-lg">Mahia</h1>
        </section>
        <section className="card-sm" style={{ backgroundImage: 'url("https://imgc.artprintimages.com/img/print/place-du-7-novembre-1987-clocktower-avenue-habib-bourguiba-tunis-tunisia_u-l-pfhof80.jpg?h=550&p=0&w=550&background=fbfbfb")' }}>
          <p className="card__text-sm">CentreVille - Tunis</p>
          <h1 className="card__text-lg">CentreVille</h1>
        </section>


        <section className="card-sm" style={{ backgroundImage: 'url("https://th.bing.com/th/id/OIP.0ruxwPCxE0CWBx-dr0ChpQHaEC?rs=1&pid=ImgDetMain")', backgroundPosition: 'center right' }}>
          <p className="card__text-sm">Bizerte - Tunisie</p>
          <h1 className="card__text-lg">Bizerte</h1>
        </section>

        <section className="card-sm" style={{ backgroundImage: 'url("https://th.bing.com/th/id/R.64f4f3652a1462015126fc00eff72b43?rik=uzahLIDS%2fuUmTg&riu=http%3a%2f%2fkapitalis.com%2ftunisie%2fwp-content%2fuploads%2f2018%2f10%2fLac-de-Tunis.jpg&ehk=7RVT55x6ZQyiW9eXHNp27%2f3t2fmIVt6D4F7ntrx0MaU%3d&risl=&pid=ImgRaw&r=0")' }}>
          <p className="card__text-sm">Lac - Tunis</p>
          <h1 className="card__text-lg">Lac</h1>
        </section>
        <section className="card-sm" style={{ backgroundImage: 'url("https://www.mirandawashburn.com/media/projects/travelHomepage/cappadociaTurkey.jpeg")' }}>
          <p className="card__text-sm">Cappadocia - Turkey</p>
          <h1 className="card__text-lg">Goreme &nbsp; Valley</h1>
        </section>

        

       

        
      </section>
    </div>
    </div>
  );
};

export default Destinations;