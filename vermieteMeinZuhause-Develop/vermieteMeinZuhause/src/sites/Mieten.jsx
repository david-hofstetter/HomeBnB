import React, { useState } from 'react';
import ObjectCard from '../components/ObjectCard';
import '../css/Mieten.css';
import miami from '../assets/miami-villa.jpg';
import sweden from '../assets/sweden-chalet.jpg';
import africa from '../assets/african-hut.jpg'


import '@mobiscroll/react/dist/css/mobiscroll.min.css';


const Mieten = () => {
  return (
    <div className='Mieten-Container'>
      <br />
      <br />

      <h1 className='RentTitle'>Houses and Appartments for Rent</h1>
      <br />
      <br />

      <div className='Object-Board'>
        <ObjectCard img={sweden} shortname="swedenhouse" title="Swedish Dream" adress="Sweden, Europe" price="90" stripeID="price_1Oc62yKQgZyuYHaeLSG9Zzf1" />
        <ObjectCard img={miami} shortname="miamihome" title="Palm Villa Miami" adress="Miami, Florida" price="100" stripeID="price_1Oc5cKKQgZyuYHaelpzzsm3y" />
        <ObjectCard img={africa} shortname="africanhut" title="African Straw Hut" adress="Namibia, Africa" price="5" stripeID="price_1Oc6AxKQgZyuYHaeoPGoefbF" />
        </div>
        
     <div>
    

     </div>
      
    </div>
  );
};

export default Mieten;
