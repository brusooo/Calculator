import React, { useEffect, useState } from 'react'

import "./App.css"
import Container from './components/Container'


const App = () => {

  const [fade, setFade] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFade(true);
    }, 3000)
  })


  return (
    <div>

      <div className={`loader ${fade ? 'fadeOut' : 'noFade'} `}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div>
        <div className='title'>
          <h1>Do and Get it</h1>
        </div>

        <Container />

        <div className='footer'>
          <h1>Brusooo</h1>
        </div>
      </div>

    </div>
  )
}

export default App