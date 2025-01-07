import React, { useState } from 'react';
import './CustomerForm.css';

const CustomerForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    numPets: '',
    hairColor: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      newErrors.name = 'Name should only contain letters and spaces';
    }

    // Number of pets validation
    if (formData.numPets === '') {
      newErrors.numPets = 'Number of pets is required';
    } else if (parseInt(formData.numPets) < 0) {
      newErrors.numPets = 'Number of pets cannot be negative';
    }

    // Hair color validation
    if (!formData.hairColor.trim()) {
      newErrors.hairColor = 'Hair color is required';
    } else if (!/^[A-Za-z]+$/.test(formData.hairColor)) {
      newErrors.hairColor = 'Hair color should only contain letters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="form-container">
      <h1>Customer Information</h1>
      
      {!isSubmitted ? (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="numPets">Number of Pets:</label>
            <input
              type="number"
              id="numPets"
              name="numPets"
              value={formData.numPets}
              onChange={handleChange}
            />
            {errors.numPets && <span className="error">{errors.numPets}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="hairColor">Hair Color:</label>
            <input
              type="text"
              id="hairColor"
              name="hairColor"
              value={formData.hairColor}
              onChange={handleChange}
            />
            {errors.hairColor && <span className="error">{errors.hairColor}</span>}
          </div>

          <button type="submit">Continue</button>
        </form>
      ) : (
        <div className="summary">
          <h2>Summary</h2>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Number of Pets:</strong> {formData.numPets}</p>
          <p><strong>Hair Color:</strong> {formData.hairColor}</p>
        </div>
      )}
    </div>
  );
};

export default CustomerForm; 