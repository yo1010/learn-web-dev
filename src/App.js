import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/partials/Header/Header';
import HomeView from './components/views/HomeView/HomeView';
import Footer from './components/partials/Footer/Footer';

import './App.scss';


function App() {
  return (
    <div className="app">
      <Header />
      <HomeView />
      <Footer />
    </div>
  );
}

export default App;
