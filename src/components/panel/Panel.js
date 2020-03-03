import React, { useState, useEffect, useContext } from 'react'

import { GlobalContext } from '../../context/GlobalState';

import Column from './Column';

import { getWordLights, getAnimationSteps } from '../../utils/functions';

import './panel.scss';

const Panel = () => {
  const { word } = useContext(GlobalContext)

  const [step, setStep] = useState(27)
  const [animationSteps, setAnimationSteps] = useState(0)
  const [lights, setLights] = useState([])

  useEffect(() => {
    setLights(getWordLights(word))

    setAnimationSteps(getAnimationSteps(17, word))

    addStep()
    // eslint-disable-next-line
  }, [word])

  const addStep = () => {
    console.log(step)
    
    setTimeout(() => {
      if(step > animationSteps) {
        setStep(0)
      } else {
        setStep(step + 1)
      }
      
      setStep(step + 1)

      // addStep()
    }, 1000);
  }
  
  return (
    <div className='panel'>
      <Column step={step} order={1} lights={lights} />
      <Column step={step} order={2} lights={lights} />
      <Column step={step} order={3} lights={lights} />
      <Column step={step} order={4} lights={lights} />
      <Column step={step} order={5} lights={lights} />
      <Column step={step} order={6} lights={lights} />
      <Column step={step} order={7} lights={lights} />
      <Column step={step} order={8} lights={lights} />
      <Column step={step} order={9} lights={lights} />
      <Column step={step} order={10} lights={lights} />
      <Column step={step} order={11} lights={lights} />
      <Column step={step} order={12} lights={lights} />
      <Column step={step} order={13} lights={lights} />
      <Column step={step} order={14} lights={lights} />
      <Column step={step} order={15} lights={lights} />
      <Column step={step} order={16} lights={lights} />
      <Column step={step} order={17} lights={lights} />
    </div>
  )
}

export default Panel
