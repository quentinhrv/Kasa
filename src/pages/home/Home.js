import React from 'react';

import Banner from '../../components/banner/Banner';
import Gallery from '../../components/gallery/Gallery';
import banner_home from '../../assets/banner_home.png';

function Home() {
  return (
    <div className='home'>
      <main>
        <Banner text="Chez vous, partout et ailleurs" image={banner_home} />
        <Gallery />
      </main>
    </div>
  );
};

export default Home;