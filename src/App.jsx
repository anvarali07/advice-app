import { useEffect,useState } from 'react'
import './App.css'

function App() {

  const [advice, setAdvice] = useState("Please Click Button to Get Free Advice");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res=await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
      setCount((cur) => cur + 1);
  }

  useEffect( () => {
    getAdvice();
  },[]);

  return (
    <div>
    <h3>{advice}</h3>
    <button onClick={getAdvice}>Get Advice</button>
    <p>Total get <b className='bold'>{count} </b> you watched free advive.!</p>
    </div>
  )
}

export default App
