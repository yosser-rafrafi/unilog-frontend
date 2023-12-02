import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate  } from 'react-router-dom';
import './Formulaire.scss'; // Assurez-vous de créer ce fichier CSS

const Formulaire = ({ addFormData }) => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    location: '',
    numberOfRooms: '',
    rent: '',
    date: '',
    description: '',
    photos: '',
    availability: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/api/annonces', formData);
      console.log('Data sent successfully:', response.data);
      addFormData(response.data);
      
      navigate('/list-annonces');
      // Vous pouvez rediriger l'utilisateur ou gérer le succès selon les besoins
    } catch (error) {
      console.error('Error sending data:', error.message);
      // Gérer l'erreur, afficher un message à l'utilisateur, etc.
    }
  };

  return (
    <div className="form-container">
      <h2>Créer une nouvelle annonce</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Location:</label>
          <input type="text" name="location" value={formData.location} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Number of Rooms:</label>
          <input type="number" name="numberOfRooms" value={formData.numberOfRooms} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Rent:</label>
          <input type="number" name="rent" value={formData.rent} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Date:</label>
          <input type="date" name="date" value={formData.date} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea name="description" value={formData.description} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Photos (comma-separated URLs):</label>
          <input type="text" name="photos" value={formData.photos} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Availability:</label>
          <input type="checkbox" name="availability" checked={formData.availability} onChange={() => setFormData({ ...formData, availability: !formData.availability })} />
        </div>
        <button type="submit">Enregistrer</button>
      </form>
    </div>
  );
};

export default Formulaire;