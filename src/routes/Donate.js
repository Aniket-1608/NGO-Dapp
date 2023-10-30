import React, { useState } from 'react';
import './Donate.css'; // You can create a CSS file for styling

function Donate() {
  const [formData, setFormData] = useState({
    fullName: '',
    localAddress: '',
    panCard: '',
    email: '',
    mobile: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const openMetaMask = () => {
    // Add your code to open MetaMask wallet here
  };

  return (
    <div className="form-container">
      <div className="form-group">
        <label>Full Name</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Local Address</label>
        <input
          type="text"
          name="localAddress"
          value={formData.localAddress}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Pan Card</label>
        <input
          type="text"
          name="panCard"
          value={formData.panCard}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Mobile</label>
        <input
          type="text"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
        />
      </div>
      <button className="donate-button" onClick={openMetaMask}>
        Donate
      </button>
    </div>
  );
}

export default Donate;