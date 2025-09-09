// Ejemplo de uso del componente Details
// Este archivo muestra cómo integrar el componente Details en tu aplicación

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Details from '../pages/Details';

// Componente de ejemplo para mostrar la lista de canciones
const SongList = () => {
  const songs = [
    { id: "1", title: "WELTİTA", artist: "Bad Bunny" },
    { id: "2", title: "Blinding Lights", artist: "The Weeknd" },
    { id: "3", title: "Levitating", artist: "Dua Lipa" },
    { id: "4", title: "Good 4 U", artist: "Olivia Rodrigo" },
    { id: "5", title: "Industry Baby", artist: "Lil Nas X ft. Jack Harlow" }
  ];

  return (
    <div style={{ padding: '20px', background: '#0E020F', minHeight: '100vh', color: 'white' }}>
      <h1>Lista de Canciones</h1>
      <div style={{ display: 'grid', gap: '10px', marginTop: '20px' }}>
        {songs.map(song => (
          <Link 
            key={song.id} 
            to={`/details/${song.id}`}
            style={{ 
              display: 'block', 
              padding: '15px', 
              background: 'rgba(255,255,255,0.1)', 
              borderRadius: '10px',
              textDecoration: 'none',
              color: 'white',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(231, 108, 60, 0.3)';
              e.target.style.transform = 'translateX(10px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255,255,255,0.1)';
              e.target.style.transform = 'translateX(0)';
            }}
          >
            <strong>{song.title}</strong> - {song.artist}
          </Link>
        ))}
      </div>
    </div>
  );
};

// Componente principal de ejemplo
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SongList />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </Router>
  );
};

export default App;

/*
INSTRUCCIONES DE USO:

1. Asegúrate de que tu App.jsx principal tenga las rutas configuradas:
   - Ruta principal: "/" (página de lista de canciones)
   - Ruta de detalles: "/details/:id" (página de detalles de canción)

2. Para navegar a la página de detalles, usa:
   <Link to={`/details/${songId}`}>Ver detalles</Link>
   o
   navigate(`/details/${songId}`)

3. El componente Details automáticamente:
   - Obtiene el ID de la URL usando useParams
   - Busca la canción en los datos de ejemplo
   - Muestra la información correspondiente
   - Maneja estados de carga y error

4. Para agregar más canciones, edita el archivo src/data/songsData.js

5. Para personalizar estilos, modifica src/styles/Details.css

EJEMPLO DE RUTAS EN TU APP.JSX:
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Details from './pages/Details';
import HomePage from './pages/HomePage'; // Tu página principal

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
*/
