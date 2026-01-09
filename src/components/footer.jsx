// src/components/Footer.jsx
import React from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <p>&copy; {currentYear} Galeria de Fotos. Todos os direitos reservados.</p>
    </footer>
  );
}