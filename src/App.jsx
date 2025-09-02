// src/App.jsx
import React from 'react';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      {/* Contenido de ejemplo para ver el footer */}
      <div style={{ minHeight: '100dvh', backgroundColor: '#222', color: '#fff', padding: '20px' }}>
        <h1 style={{ color: '#f8953e' }}> DEVMusic</h1>
        <p>Contenido principal de la página para probar el footer.</p>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
