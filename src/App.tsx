import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [fosforo, setFosforo] = useState(0)
  const [ph, setPh] = useState(0)
  const [dbo, setDbo] = useState(0)
  const [nitrogenio, setNitrogenio] = useState(0)
  const [coliformes, setColiformes] = useState(0)
  const [temperatura, setTemperatura] = useState(0)
  const [turbidez, setTurbidez] = useState(0)
  const [residuos, setResiduos] = useState(0)
  const [oxigenio, setOxigenio] = useState(0)

  const [resultado, setResultado] = useState(0)

  function calculateIQA(){

    console.log(fosforo)
  }

  useEffect(() => {

    const calculo = fosforo*0.10 * ph*0.12 * dbo*0.10 * nitrogenio*0.10 * coliformes*0.15 * temperatura*0.10 * turbidez*0.08 * residuos*0.08 * oxigenio*0.17
    setResultado(calculo)

  }, [fosforo, ph, dbo, nitrogenio, coliformes, temperatura, turbidez, residuos, oxigenio])

  return (
    <div className="main">
      <h1>IQA calculator</h1>
      
      <div className="paramInput">
        <h3>Fósforo total (0.10)</h3>
        <input value={fosforo} onChange={(e) => setFosforo(parseInt(e.target.value))} type="number" placeholder='0'/>
      </div>

      <div className="paramInput">
        <h3>pH (0.12)</h3>
        <input value={ph} onChange={(e) => setPh(parseInt(e.target.value))} type="number" placeholder='0'/>
      </div>

      <div className="paramInput">
        <h3>Demanda bioquímica de oxigênio (0.10)</h3>
        <input value={dbo} onChange={(e) => setDbo(parseInt(e.target.value))} type="number" placeholder='0'/>
      </div>

      <div className="paramInput">
        <h3>Nitrogênio total (0.10)</h3>
        <input value={nitrogenio} onChange={(e) => setNitrogenio(parseInt(e.target.value))} type="number" placeholder='0'/>
      </div>

      <div className="paramInput">
        <h3>Coliformes fecais (0.15)</h3>
        <input value={coliformes} onChange={(e) => setColiformes(parseInt(e.target.value))} type="number" placeholder='0'/>
      </div>

      <div className="paramInput">
        <h3>Temperatura (0.10)</h3>
        <input value={temperatura} onChange={(e) => setTemperatura(parseInt(e.target.value))} type="number" placeholder='0'/>
      </div>

      <div className="paramInput">
        <h3>Turbidez (0.08)</h3>
        <input value={turbidez} onChange={(e) => setTurbidez(parseInt(e.target.value))} type="number" placeholder='0'/>
      </div>

      <div className="paramInput">
        <h3>Resíduo total (0.08)</h3>
        <input value={residuos} onChange={(e) => setResiduos(parseInt(e.target.value))} type="number" placeholder='0'/>
      </div>

      <div className="paramInput">
        <h3>Oxigênio dissolvido (0.17)</h3>
        <input value={oxigenio} onChange={(e) => setOxigenio(parseInt(e.target.value))} type="number" placeholder='0'/>
      </div>

      <div className="results">
        <h3>Resultado: {resultado}</h3>
      </div>
    </div>
  )
}

export default App
