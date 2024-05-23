import React, { useState } from 'react';
import '../comp/UserForm.css';

const UserForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedData(formData);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
      {submittedData && (
        <div>
          <p>{submittedData.name}</p>
          <p>{submittedData.email}</p>
        </div>
      )}
    </div>
  );
};

export default UserForm;
