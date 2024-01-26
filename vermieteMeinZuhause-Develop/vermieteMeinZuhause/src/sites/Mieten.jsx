import React, { useState } from 'react';
import ObjectCard from '../components/ObjectCard';
import '../css/Mieten.css';
import miami from '../assets/miami-villa.jpg';
import sweden from '../assets/sweden-chalet.jpg';
import africa from '../assets/african-hut.jpg'
import montpellier from '../assets/montpellier.jpg'
import boat from '../assets/boat.jpg'
import zermatt from '../assets/zermatt.jpg'


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
      
                <iframe
                
                    width={"25%"}
                    style={{
                        aspectRatio: "16 / 9",
                    }}
                    src={"https://maps.google.com/maps?q=Hemavan House&t=&z=13&ie=UTF8&&output=embed"}
                />
                 <iframe
          width={"25%"}
          style={{
              aspectRatio: "16 / 9",
          }}
          src={"https://maps.google.com/maps?q=Villa, Miami&t=&z=13&ie=UTF8&&output=embed"}
          
      />
        <iframe
          width={"25%"}
          style={{
              aspectRatio: "16 / 9",
          }}
          src={"https://maps.google.com/maps?q=Haus Mopanie&t=&z=13&ie=UTF8&&output=embed"}
      />
      <br />
      <br />
      <br />
      <br /><br />
      <br /><br />
      <br /><br />
     
      <br />
       <div className='Object-Board'>
        <ObjectCard img={montpellier} shortname="montpellier" title="Arc de Triomphe Montpellier" adress="Montpellier, France" price="2500" stripeID="price_1OcnygKQgZyuYHae1HmntJKb" />
        <ObjectCard img={zermatt} shortname="zermatt" title="Winter Chalet" adress="Zermatt, Switzerland" price="80" stripeID="price_1OcnzWKQgZyuYHaefWcsP0by" />
        <ObjectCard img={boat} shortname="greeceboat" title="Boat House in Greece" adress="Mediterian Sea, Greece" price="45" stripeID="price_1OcnxTKQgZyuYHaey0LG6U91" />
        </div>
        <br />
        <br />

      
                <iframe
                
                    width={"25%"}
                    style={{
                        aspectRatio: "16 / 9",
                    }}
                    src={"https://maps.google.com/maps?q=Montpellier Arc de Triomphe&t=&z=13&ie=UTF8&&output=embed"}
                />
                 <iframe
          width={"25%"}
          style={{
              aspectRatio: "16 / 9",
          }}
          src={"https://maps.google.com/maps?q=Chalet Arnold, Zermatt&t=&z=13&ie=UTF8&&output=embed"}
          
      />
        <iframe
          width={"25%"}
          style={{
              aspectRatio: "16 / 9",
          }}
          src={"https://maps.google.com/maps?q=Rhodos Faliraki&t=&z=13&ie=UTF8&&output=embed"}
      />
      
    </div>
   
    
  );
};

export default Mieten;
