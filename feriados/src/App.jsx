// App.jsx
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MiApi from './assets/components/Miapi';
import Header from './assets/components/Header';
import Footer from './assets/components/Footer';

function App() {
  const [feriados, setFeriados] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Lógica para cargar los datos iniciales
    consultarApi();
  }, []);

  const consultarApi = async () => {
    try {
      const url = 'https://api.victorsanmartin.com/feriados/en.json';
      const response = await fetch(url);
      const data = await response.json();
      setFeriados(data.data);
    } catch (error) {
      console.error('Error al cargar los datos:', error);
    }
  };

  const handleOrderByDate = () => {
    // Ordenar feriados por fecha de manera ascendente
    setFeriados([...feriados].sort((a, b) => new Date(a.date) - new Date(b.date)));
  };

  const handleOrderByType = () => {
    // Ordenar feriados por tipo de manera ascendente
    setFeriados([...feriados].sort((a, b) => a.type.localeCompare(b.type)));
  };

  return (
    <div className='app-container'>
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleOrderByDate={handleOrderByDate}
        handleOrderByType={handleOrderByType}
      />
      <MiApi setFeriados={setFeriados} feriados={feriados} searchTerm={searchTerm} />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;

