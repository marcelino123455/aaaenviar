import React from 'react';
import "./cards-perfil.css"

function MangaPerfilCard({ title, imageURL, description, seasonButtonText, favoriteButtonText }) {
  return (
    <div className="manga-card">
      <div className="manga-card-image">
        <img src={imageURL} alt={`Imagen de la Card ${title}`} />
      </div>
      <div className="manga-card-description">
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="advanced-button">{seasonButtonText}</button>
        <button className="advanced-button">{favoriteButtonText}</button>
      </div>
    </div>
  );
}

function MangaPerfilCards() {
  return (
    <div className="manga-perfil-cards">
      <MangaPerfilCard
        title="Iron Man"
        imageURL={process.env.PUBLIC_URL + '/imagenes/inicio3.jpg'}
        description="La trama de Iron Man 2020 se desarrolla en un futuro distópico en el que Arno Stark, el hermano de Tony Stark (el Iron Man original), asume el manto de Iron Man. A medida que asume el papel de Iron Man en este futuro, Arno enfrenta desafíos únicos y amenazas tecnológicas avanzadas. La serie explora temas relacionados con la tecnología, la inteligencia artificial y el legado de Iron Man en un mundo en constante cambio. La historia plantea preguntas sobre la ética de la tecnología y cómo puede ser utilizada para el bien o el mal."
        seasonButtonText=">"
        favoriteButtonText="Pronto"
      />

      <MangaPerfilCard
        title="Wolverine"
        imageURL={process.env.PUBLIC_URL + '/imagenes/inicio4.jpg'}
        description="La serie se desarrolla en un ambiente oscuro y misterioso, lo que le confiere un tono de thriller y horror. A medida que avanza la investigación, se exploran las complejas motivaciones y la historia de Wolverine, lo que agrega profundidad al personaje. Wolverine: La Larga Noche ha sido elogiada por su narración inmersiva, sus actuaciones de voz y su capacidad para capturar la esencia del personaje de Wolverine. Esta serie de podcast representa un enfoque innovador para contar historias de superhéroes y ha atraído tanto a fanáticos de los cómics como a amantes de los podcasts y del suspense."
        seasonButtonText=">"
        favoriteButtonText="Pronto"
      />
    </div>
  );
}

export default MangaPerfilCards;
