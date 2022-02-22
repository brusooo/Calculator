import React, { useEffect, useState } from 'react'

import "./App.css"
import Container from './components/Container'


const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 3000)
  })

  return (
    <div>
      {!loading ? 
      
      <div className="loader">
        <span></span>
        <span></span>
        <span></span>
      </div>
      
      :

        <div>
          <div className='title'>
            <h1>Do and Get it</h1>
          </div>

          <Container />

          <div className='footer'>
            <h1>Brusooo</h1>
          </div>
        </div>
      }
    </div>
  )
}

export default App