import React, { useState } from 'react';
import { annonces } from "../../apis/api"
import './Formulaire.scss'; // Assurez-vous de créer ce fichier CSS

const Formulaire = ({cb, setcb}) => {
  const [formData, setFormData] = useState({
    location: '',
    numberOfRooms: 0,
    rent: 0,
    description: '',
    availability: false
  });
  const [files, setFiles] = useState([])
  const formDataToSend = new FormData()

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev, [name]:value
    }))
  };
  const handleFileChange = (e) => {
    const filesPhotos = e.target.files;
    setFiles(filesPhotos)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    formDataToSend.append("location", formData.location);
    formDataToSend.append("numberOfRooms", formData.numberOfRooms);
    formDataToSend.append("rent", formData.rent);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("availability", formData.availability);
  
    // Append each file individually to the 'photos' field
    for (let i = 0; i < files.length; i++) {
      formDataToSend.append("photos", files[i]);
    }
  
    try {
      await annonces.createAnnonces(formDataToSend);
      setcb(!cb)
      // location.reload();
    } catch (error) {
      console.error('Error sending data:', error.message);
      // Handle the error, display a message to the user, etc.
    }
  };

  return (
    <div className="form-container">
      <h2>Créer une nouvelle annonce</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
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
          <label>Description:</label>
          <textarea name="description" value={formData.description} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Photos:</label>
          <input type="file" name="photos" onChange={handleFileChange} multiple />
        </div>
        <div className="form-group">
          <label>Available:<input type="checkbox" name="availability" checked={formData.availability} onChange={() => setFormData({ ...formData, availability: !formData.availability })} />
          </label>
        </div>
        <button type="submit">Enregistrer</button>
      </form>
    </div>
  );
};

export default Formulaire;