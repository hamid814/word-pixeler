import React, { useState, useEffect, useContext } from 'react'

import { GlobalContext } from '../../context/GlobalState';

import Column from './Column';

import { getWordLights, getAnimationSteps } from '../../utils/functions';

import './panel.scss';

const Panel = () => {
  const { word, speed } = useContext(GlobalContext)

  const [step, setStep] = useState(0)
  const [lights, setLights] = useState([])
  const [columns] = useState([
    {order: 1},
    {order: 2},
    {order: 3},
    {order: 4},
    {order: 5},
    {order: 6},
    {order: 7},
    {order: 8},
    {order: 9},
    {order: 10},
    {order: 11},
    {order: 12},
    {order: 13},
    {order: 14},
    {order: 15},
    {order: 16},
    {order: 17},
  ])
  const [animationSteps] = useState(getAnimationSteps(columns.length, word))

  useEffect(() => {
    setLights(getWordLights(word))

    // eslint-disable-next-line
  }, [word])

  useEffect(() => {
    addStep(step)
    // eslint-disable-next-line
  }, [step])

  const addStep = () => {
    setTimeout(() => {
      if(step > animationSteps) {
        setStep(0)
      } else {
        setStep(step+1)
      }

    }, 300 * Number(speed));
  }
  
  return (
    <div className='panel'>
      {
        columns.map(column => (
          <Column key={column.order} step={step} order={column.order} lights={lights} />
        ))
      }
    </div>
  )
}

export default Panel
