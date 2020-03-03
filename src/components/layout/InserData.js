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
    setSpeed(speedValue)
  }

  const onSubmit = e => {
    e.preventDefault();
    setWord(wordText)
    setSpeed(speedValue)
  }

  const onChangeColor = e => {
    document.body.style.setProperty('--on-color', `#${e.target.id}`)
  }
  
  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <div className="form-group">
          <label>name:</label>
          <input type="text" placeholder={word} value={wordText} onChange={onWordChange}/>
        </div>

        <input type="submit" value="set word" />

        <div className="form-group">
          <label>speed:</label>
          <input type="range" step='0.1' min='1' max='4' value={speedValue} onChange={onSpeedChange}/>
        </div>

        <input type="button" className='red' id='ff545c' onClick={onChangeColor} />
        <input type="button" className='green' id='66cc99' onClick={onChangeColor} />
        <input type="button" className='blue' id='2785ff' onClick={onChangeColor} />
        <input type="button" className='white' id='dfdfdf' onClick={onChangeColor} />
      </form>
    </div>
  )
}

export default InserData
