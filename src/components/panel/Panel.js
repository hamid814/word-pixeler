import React, { useState, useEffect, useContext } from 'react'

import { GlobalContext } from '../../context/GlobalState';

import Column from './Column';

import { getWordLights } from '../../utils/getLights';

import './panel.scss';

const Panel = () => {
  const { word } = useContext(GlobalContext)

  const [step, setStep] = useState(0)
  const [lights, setLights] = useState([])

  useEffect(() => {
    setLights(getWordLights(word))
    
    // eslint-disable-next-line
  }, [])
  
  return (
    <div className='panel'>
      <Column step={step} order='1' lights={lights} />
    </div>
  )
}

export default Panel
