import React, { useEffect, useState } from 'react';
import './Ads.scss';
import './Search.scss'
import { annonces } from "../../apis/api"

const Advertissement = () => {
  const [annoncesList, setAnnoncesList] = useState([]);
  const [search, setSearch] = useState('');
  const fetchAnnoncesList = async (search) => {
    const { data } = await annonces.getAnnoncesList(search);
    setAnnoncesList(data);
  }
  useEffect(() => {
    fetchAnnoncesList(search);
  }, [search])
  return (<>
    <div id="research">
      <div className="search-container">
        <input
          type="text"
          placeholder="rechercher ..."
          value={search}
          name="search"
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
      </div>
    </div>

    <div id='rental-ads'>
      <div className="wrapper">
        <h1>Annonces</h1>
        <div className="cols">
          {annoncesList.map((ann, index) => (
            <div key={index} className="col" onTouchStart={() => document.querySelector('.col').classList.toggle('hover')}>
              <div className="container">
                <div className="front" style={{ backgroundImage: `url(http://localhost:4000/${ann.photos[0]})` }}>
                  <div className="inner">
                    <p>{ann.location}</p>
                    <span>{ann.description}</span>
                  </div>
                </div>
                <div className="back">
                  <div className="inner">
                    <p>+</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
  );
};

export default Advertissement;