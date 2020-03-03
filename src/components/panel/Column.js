import React, { useState, useEffect } from 'react'

const Column = ({ step, order, lights }) => {
  const [currentDeck, setCurrentDeck] = useState([0,0,0,0,0,0,0])
  
  useEffect(() => {
    lights.length !== 0 && lights && lights[step - order]
     ? setCurrentDeck(lights[step - order])
     : setCurrentDeck([0,0,0,0,0,0,0])
  
    // eslint-disable-next-line
  }, [step, lights])
  
  return (
    <div className='column'>
      <div className={`light off`}></div>
      <div className={`light ${currentDeck[6] === 1 ? 'on' : 'off'}`}></div>
      <div className={`light ${currentDeck[5] === 1 ? 'on' : 'off'}`}></div>
      <div className={`light ${currentDeck[4] === 1 ? 'on' : 'off'}`}></div>
      <div className={`light ${currentDeck[3] === 1 ? 'on' : 'off'}`}></div>
      <div className={`light ${currentDeck[2] === 1 ? 'on' : 'off'}`}></div>
      <div className={`light ${currentDeck[1] === 1 ? 'on' : 'off'}`}></div>
      <div className={`light ${currentDeck[0] === 1 ? 'on' : 'off'}`}></div>
      <div className={`light off`}></div>
    </div>
  )
}

export default Column
