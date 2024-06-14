import { useState, useEffect } from 'react'
import './App.css'
// Array of objects - The upgrades
const upgrade [{ upgradeName, description, Cost }] = [
  {
    upgradeName: "Sir Can I Have Some More!",
    description: "Cookies Per Second Increases by 2",
    Cost: 100
  },
  {
    upgradeName: "I have the High Ground!",
    description: "Cookies Per Second Increases by 10",
    Cost: 1000
  },
]


export default function App() {
  const [cookies, setCookies] = useState(0)
  const [cps, setCps] = useState(1);

  useEffect(() => {
    const myInterval = setInterval(() => {
      setCookies((currentCookies) => currentCookies + cps);
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  }, [cps]);

  function increaseCookies() {
    setCookies(cookies + 1);
  }

  // upgrades:
  function buyUpgrade1() {
    setCps(cps + 1)
    setCookies(cookies - 100)
  }

  return (
    <div>
      <h1>Cookie Clicker Game</h1>
      <button onClick={increaseCookies}> I am a cookie</button>
      <p>Cookies: {cookies}</p>
      <p>Cookies Per Second: {cps}</p>
      <h3>Upgrades:</h3>
      <button onClick={buyUpgrade1}></button>
      <button></button>
    </div>
  )
}