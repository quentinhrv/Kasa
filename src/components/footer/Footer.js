import React from 'react';

import footer from '../../assets/logo_footer.png'

import './_footer.scss';


function Footer() {
  return (
    <div className='footer'>
      <div className='footer_logo' >
            <img src={footer} alt='Logo footer' />
      </div>
      <p className='footer_text'>© 2020 Kasa. All rights reserved</p>
    </div>
  )
}

export default Footer