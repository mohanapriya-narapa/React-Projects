import React, {useState, useEffect} from 'react'
import './memoryBoard.css'
function MemoryBoard() {
  const [gridSize, setGridSize]=new useState(4);
  const [cards,setCards]=new useState([])
  const [filpped, setFlipped]=useState([])
  const handleGridSize=(e)=>{
    const size=parseInt(e.target.value);
    if(size>=2 && size <=10)setGridSize(size);
  }
  const intializeGame=()=>{
const totalCards=gridSize*gridSize;
const pairCount=Math.floor(totalCards/2);
const numbers=[...Array(pairCount).keys()].map((n)=>n+1);
const shuffleCards=[...numbers, ...numbers].sort(()=>Math.random()-0.5).map((number,index)=>({id:index, number}));
setCards(shuffleCards);
  }
  useEffect(()=>{
intializeGame();
  },[gridSize])
const handleClick=(id)=>{

}
  return (
    <div className='memory-board'>
<h1 className='title'>Memory Game</h1>
<div className='inputGroup'>
  <label>Grid Size(Max 10)</label>
  <input type="number" value={gridSize} onChange={handleGridSize} min="2" max="10">
  </input>
</div>
<div className='game-board'>
   {
    cards.map(card=>(
      <div key={card.id} onClick={()=>handleClick(card.id)}  className='card'>
{filpped?card.number:""}
      </div>
    ))
   }
</div>
<button onClick={intializeGame}></button>
    </div>
  );
}

export default MemoryBoard;
