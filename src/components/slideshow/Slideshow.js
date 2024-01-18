import React, { useState } from "react";

import './_slideshow.scss';

function Slideshow ({ slides }) {
    const [current, setCurrent] = useState(0); // Index de l'image actuellement affichée dans le carrousel.
    const length = slides.length; // Nombre d'images dans le carrousel.

    const nextImage = () => {
        setCurrent(current === length - 1 ? 0 : current + 1); // Passe à l'image suivante dans le carrousel.
    };
    const previousImage = () => {
        setCurrent(current === 0 ? length - 1 : current - 1); // Passe à l'image précédente dans le carrousel.
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null; // Si le tableau slides est vide ou non défini, on ne rend rien.
    }

    return (
        <section className="slide">
            {length > 1 && (
                <p className="left-Arrow" onClick={previousImage}>
                    <i className="fa-solid fa-chevron-left"></i> {/* Affiche une flèche gauche pour passer à l'image précédente */}
                </p>
            )}
            {length > 1 && (
                <p className="right-Arrow" onClick={nextImage}>
                    <i className="fa-solid fa-chevron-right"></i> {/* Affiche une flèche droite pour passer à l'image suivante */}
                </p>
            )}
          
            {slides.map((image, index) => {
                return (
                    <div key={index} className={index === current ? "slider active" : "slider"}>
                        {index === current && (
                            <img src={image} alt="Photos du logement" className="slide_image" /> // Affiche l'image correspondant à l'index courant
                        )}
                        {index === current && length > 1 && (
                            <span className="slider_number">
                                {current + 1}/{length} {/* Affiche le numéro de l'image courante et le nombre total d'images */}
                            </span>
                        )}
                    </div>
                );
            })}
        </section>
    );
};

export default Slideshow;