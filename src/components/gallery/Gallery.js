import React from 'react';

import Cards from '../cards/Cards';
import datas from '../../datas/datas.json';

import './_gallery.scss';


function Gallery() {
  return (
    <div className='home_gallery'>
      {datas.map(datas => {
        return (
          <Cards
            key={datas.id} 
            id={datas.id} 
            title={datas.title} 
            cover={datas.cover} 
          />
        )
      })}
    </div>
  );
};

export default Gallery