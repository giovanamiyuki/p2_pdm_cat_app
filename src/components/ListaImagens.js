// src/components/ListaImagens.js
import React from 'react';
import './ListaImagens.css'; // Adicione um arquivo CSS para os estilos

const ListaImagens = ({ photos }) => {
  return (
    <div className="image-grid">
      {photos.slice(0, 12).map((photo) => (
        <div key={photo.id} className="image-item">
          <img src={photo.url} alt="Gato" className="image" />
        </div>
      ))}
    </div>
  );
};

export default ListaImagens;
