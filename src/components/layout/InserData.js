import React, { useState, useEffect, useContext } from 'react'

import {GlobalContext} from '../../context/GlobalState';

import './form.scss';

const InserData = (props) => {
  const { word, speed, setWord, setSpeed } = useContext(GlobalContext)

  const [wordText, setWordText] = useState(word)
  const [speedValue, setSpeedValue] = useState(speed)

  useEffect(() => {
    const params = window.location.search && window.location.search.slice(1).split('&')
    const name = window.location.search && params[0] && params[0].split('=')[1]
    const color = window.location.search && params[1] && params[1].split('=')[1]

    name !== '' && name && setWord(name)
    color !== '' && color && document.body.style.setProperty('--on-color', `#${color}`)

    if(name === 'special') {
      setWord('♥ kimia ♥')
      document.body.style.setProperty('--on-color', `#d22338`)
    }
    // eslint-disable-next-line
  }, [])

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
