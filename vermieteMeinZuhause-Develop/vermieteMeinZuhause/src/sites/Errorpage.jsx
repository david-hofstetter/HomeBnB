import React from 'react'
import { useRouteError } from 'react-router-dom'
import '../css/Errorpage.css'

const Errorpage = () => {

    const error = useRouteError();


  return (
    <div id='Errorpage'>
        <h1>OMG bisch du blöd</h1>
        <p>Es het en Fehler geh</p>
        <h2>{error.statusText || error.message}</h2>
        <p>Reparier schnell!</p>
    </div>
  )
}

export default Errorpage