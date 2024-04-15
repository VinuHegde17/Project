import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  const handleAboutClick = () => {
    navigate('/about');
  };

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div>
      <h1>HomePage</h1>
      <button onClick={handleAboutClick}>Go to About Page</button>
      <button onClick={handleContactClick}>Go to Contact Page</button>
    </div>
  );
}

export default HomePage;
