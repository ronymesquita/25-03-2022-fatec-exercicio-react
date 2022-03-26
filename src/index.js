import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'

const App = () => {
  const obterTextoBotao = () => 'Enviar'

  const textoRotulo = 'Nome'

  const estiloBotao = {
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
  }

  return (
    <div style={{
      margin: 'auto',
      width: 768,
      backgroundColor: '#EEE',
      padding: 12,
      borderRadius: 8
    }}>
      <label className='rotulo'>
        {textoRotulo}
      </label>
      <input id='nome' type='text' style={{
        paddingTop: '.5rem',
        paddingBottom: '.5rem',
        borderStyle: 'hidden',
        outline: 'none',
        borderRadius: '.5rem',
        width: '100%'
      }} />

      <button style={estiloBotao}>
        {obterTextoBotao()}
      </button>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
