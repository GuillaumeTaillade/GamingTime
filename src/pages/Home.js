import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div>
            {/* Composant Logo a importer sur chaque page */}
            <Logo />
            {/* Composant Navigation a importer sur chaque page */}
            <Navigation />
        </div>
    );
};

export default Home;