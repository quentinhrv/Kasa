import React from 'react';
import { Link } from 'react-router-dom';

import './_cards.scss';

function Cards({ id, title, cover}) {
  return (
    <Link to={`/accommodations/${id}`}>
      <div className='cards'>
        <img src={cover} alt={title} className='cards_image'/>
        <h2 className='cards_title'>{title}</h2>
      </div>
    </Link>
  );
};

export default Cards;