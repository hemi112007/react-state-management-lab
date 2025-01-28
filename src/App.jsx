//App.jsx

// src/App.jsx
import { useState } from "react";
import './App.css';



const App = () => {
  
const initialState = [
  {
    id: 1,
    name: 'Survivor',
    price: 12,
    strength: 6,
    agility: 4,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
  },
  {
    id: 2,
    name: 'Scavenger',
    price: 10,
    strength: 5,
    agility: 5,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
  },
  {
    id: 3,
    name: 'Shadow',
    price: 18,
    strength: 7,
    agility: 8,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
  },
  {
    id: 4,
    name: 'Tracker',
    price: 14,
    strength: 7,
    agility: 6,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
  },
  {
    id: 5,
    name: 'Sharpshooter',
    price: 20,
    strength: 6,
    agility: 8,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
  },
  {
    id: 6,
    name: 'Medic',
    price: 15,
    strength: 5,
    agility: 7,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
  },
  {
    id: 7,
    name: 'Engineer',
    price: 16,
    strength: 6,
    agility: 5,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
  },
  {
    id: 8,
    name: 'Brawler',
    price: 11,
    strength: 8,
    agility: 3,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
  },
  {
    id: 9,
    name: 'Infiltrator',
    price: 17,
    strength: 5,
    agility: 9,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
  },
  {
    id: 10,
    name: 'Leader',
    price: 22,
    strength: 7,
    agility: 6,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
  },
]



  const [team, setTeam] = useState([])
  const [money, setMoney] = useState(100)
  const [zombieFighters, setZombieFighters] = useState(initialState)
  const totalStrength = team.reduce((sum, fighter) => sum + fighter.strength, 0);
  const totalAgility = team.reduce((sum, fighter) => sum + fighter.agility, 0);
  function handleAddFighter (fighter) {

    if (money < fighter.price){
      console.log('Not enough money')
      return
    }
    //make a copy
    //modify the copy if required
    const newTeam = [...team, fighter]
    const newZombieFighters = zombieFighters.filter(zombieFighter => (
      zombieFighter.id !== fighter.id
    ))
    //update the state
    setTeam (newTeam, fighter);
    setZombieFighters(newZombieFighters)
    const newMoney = money - fighter.price
    setMoney (newMoney)
    const TotalStrength = 0 
    
  }
  function handleRemoveFighter(fighter) {
    setTeam(team.filter((member) => member.id !== fighter.id));
    setZombieFighters([...zombieFighters, fighter]);
    setMoney(money + fighter.price);
  }
  function resetGame (){}

  return (
    <>
      <h1>Hello Boss </h1>
      <h3>Money: {money}</h3>
      <h3>Team Strenght: {totalStrength}</h3>
      <h3>Agility: {totalAgility}</h3>
      <h3>My Team</h3>
      <ul>
        {team.map(fighter => (
          <li>
            <img src={fighter.img} alt={fighter.name} /> 
            <h3>{fighter.name}</h3>
            <p>price: {fighter.price}</p>
            <p>strength: {fighter.strength}</p>
            <p>agility: {fighter.agility}</p>
            <button onClick={() => handleRemoveFighter (fighter)} >Remove</button>
          </li>
        ))}
      </ul>
      <h2>Fighters</h2>
      <ul>
        {zombieFighters.map(fighter => (
          <li>
            <img src={fighter.img} alt={fighter.name} /> 
            <h3>{fighter.name}</h3>
            <p>price: {fighter.price}</p>
            <p>strength: {fighter.strength}</p>
            <p>agility: {fighter.agility}</p>
            <button onClick={() => handleAddFighter (fighter)} >Add</button>
          </li>
        ))}
      </ul>
      <button onClick={resetGame} style={{ marginTop: "20px" }}>
        Reset Game
      </button>
    </>
  );
}
export default App