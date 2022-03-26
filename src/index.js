import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  return (
    <div style={{
      margin: 'auto',
      width: 768,
      backgroundColor: '#EEE',
      padding: 12,
      borderRadius: 8
    }}>
      <label htmlFor='nome' style={{
        display: 'block',
        marginBottom: '.25rem'
      }}>
        Nome
      </label>
      <input id='nome' type='text' style={{
        paddingTop: '.5rem',
        paddingBottom: '.5rem',
        borderStyle: 'hidden',
        outline: 'none',
        borderRadius: '.5rem',
        width: '100%'
      }} />

      <button style={{
        marginTop: '.75rem',
        paddingTop: '.5rem',
        paddingBottom: '.5rem',
        backgroundColor: 'blueviolet',
        color: 'white',
        border: 'none',
        width: '100%',
        borderRadius: '.5rem',
        cursor: 'pointer',
        boxSizing: 'border-box'
      }}>
        Enviar
      </button>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
