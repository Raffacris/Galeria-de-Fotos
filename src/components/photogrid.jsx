import React from 'react';

// Dados estáticos de exemplo (Mínimo 10 como pedido)
const photos = [
  { id: 1, title: "Montanha", url: "https://picsum.photos/id/10/400/300" },
  { id: 2, title: "Lago Azul", url: "https://picsum.photos/id/11/400/300" },
  { id: 3, title: "Floresta", url: "https://picsum.photos/id/12/400/300" },
  { id: 4, title: "Praia", url: "https://picsum.photos/id/13/400/300" },
  { id: 5, title: "Cidade", url: "https://picsum.photos/id/14/400/300" },
  { id: 6, title: "Cascata", url: "https://picsum.photos/id/15/400/300" },
  { id: 7, title: "Deserto", url: "https://picsum.photos/id/16/400/300" },
  { id: 8, title: "Céu", url: "https://picsum.photos/id/17/400/300" },
  { id: 9, title: "Gramado", url: "https://picsum.photos/id/18/400/300" },
  { id: 10, title: "Estrada", url: "https://picsum.photos/id/19/400/300" },
];

export function PhotoGrid({ searchTerm }) {
  // Lógica de filtro: apenas fotos que contenham o texto da busca no título
  const filteredPhotos = photos.filter(photo =>
    photo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="grid-wrapper">
      {filteredPhotos.length > 0 ? (
        <div className="photo-grid">
          {filteredPhotos.map(photo => (
            <div key={photo.id} className="photo-item">
              <img src={photo.url} alt={photo.title} />
              <p>{photo.title}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-results">Nenhuma foto encontrada</p>
      )}
    </div>
  );
}