import React, { useState } from 'react';
import ObjectCard from '../components/ObjectCard';
import '../css/Mieten.css';
import test from '../assets/test-photo.jpg';
import miami from '../assets/miami-villa.jpg';
import sweden from '../assets/sweden-chalet.jpg';

import '@mobiscroll/react/dist/css/mobiscroll.min.css';


const Mieten = () => {
  return (
    <div className='Mieten-Container'>
      <h1>Mieten</h1>
      <div className='Object-Board'>
        <ObjectCard img={sweden} shortname="swedenhouse" title="Swedisch Dream" adress="Sweden, Alps" price="90" stripeID="price_1Oc62yKQgZyuYHaeLSG9Zzf1" />
        <ObjectCard img={miami} shortname="miamihome" title="Palm Villa Miami" adress="Miami, Florida" price="100" stripeID="price_1Oc5cKKQgZyuYHaelpzzsm3y" />
      </div>
    </div>
  );
};

export default Mieten;
