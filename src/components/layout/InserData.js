import React, { useState, useContext } from 'react'

import {GlobalContext} from '../../context/GlobalState';

import './form.scss';

const InserData = () => {
  const { word, speed, setWord, setSpeed } = useContext(GlobalContext)

  const [wordText, setWordText] = useState(word)
  const [speedValue, setSpeedValue] = useState(speed)

  const onWordChange = e => {
    setWordText(e.target.value)
  }

  const onSpeedChange = e => {
    setSpeedValue(e.target.value)
  }

  const onSubmit = e => {
    e.preventDefault();
    setWord(wordText)
    setSpeed(speedValue)
  }
  
  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <div className="form-group">
          <label>name:</label>
          <input type="text" placeholder={word} value={wordText} onChange={onWordChange}/>
        </div>

        <div className="form-group">
          <label>speed:</label>
          <input type="range" step='1' min='1' max='5' value={speedValue} onChange={onSpeedChange}/>
        </div>

        <input type="submit" value="set word" />
      </form>
    </div>
  )
}

export default InserData
