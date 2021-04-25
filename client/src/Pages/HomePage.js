import React from 'react';
import NavBar from '../Components/NavBar';
import PageContent from '../Components/PageContent';

const HomePage = () => {
  const data = 'data';
  return (
    <div className="homepage">
      <NavBar />
      <PageContent />
    </div>
  );
};

export default HomePage;
