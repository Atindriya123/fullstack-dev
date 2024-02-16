import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios, { AxiosError } from 'axios'
import { useEffect } from 'react'

function App() {
  const [jokes, setjokes] = useState([])

  useEffect(()=> {
    axios.get('/api/jokes')
    .then((response)=>{
      setjokes(response.data)
    }
    )
    .catch((error)=>{
      console.log(error)  
    }
    )
  })

  return (
    <>
     <h1>code Adda with
       fullstack Atin </h1>
     <p>JOKES: {jokes.length}</p>
     {
      jokes.map((joke,index)=>(
        <div key={joke.id}>
          <h3>{jokes.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))
     }
    </>
  )
}

export default App
