import { useEffect, useState } from 'react'
import { api } from './api/api'
import './App.css'

function App() {
  const [data, setData] = useState([])
  const [data2, setData2] = useState([])
  const [data3, setData3] = useState([])


  useEffect(() => {
    api.get('/').then((res) => {
      setData(res.data)
    })
  }, [])

  useEffect(() => {
    api.get('/funcionarios').then((res) => {
      setData2(res.data.items)
    })
  }, [])

  useEffect(() => {
    api.get('/imagem').then((res) => {
      setData3(res.data.items)
    })

  }, [])

  return (
    <>
      {data}
      <br /><br /><br />
      {data2.map((item) => {
        return (
          <div key={item.id}>
            <h3>{item.nome}</h3>
            <p>{item.cargo}</p>
            <p>{item.idade}</p>
            <p>{item.temLicenca ? "Habilitado 👍" : "Sem permissão 🤬"}</p>
          </div>
        )
      })}

      <br /><br /><br />
      {data3.map((item) => {
        return (
          <div key={item.id}>
            <h3>{item.nome}</h3>
            <img src={item.image} alt="fotos" />
          </div>
        )
      })}
    </>
  )
}

export default App
