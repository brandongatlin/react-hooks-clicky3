import React, {useState} from 'react';
import glyphs from './glyphs.json';
import ScoreBoard from './components/ScoreBoard';
import Card from './components/Card';

const App = ()=> {
  let [score, setScore] = useState(0);
  const [clicked, setClicked] = useState([]);

  const randomizer = (data) => {
    let i = data.length - 1;
    while (i > 0) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = data[i];
      data[i] = data[j];
      data[j] = temp;
      i--;
    }
    return data;
  }; //end randomizer

  const clickHandler = (e)=> {
    const id = e.target.id;

    if(clicked.includes(id)) {
      setScore(0);
    } else {
      setClicked([...clicked, id])
      setScore(score += 1);
    }
  }

  return (
    <div className="App">
      <ScoreBoard score={score}/>
      <div className="board">
        {randomizer(glyphs).map((pic)=> {
        return (
        <Card id={pic.id} name={pic.name} image={pic.image} key={pic.id} click={(e)=> {
          clickHandler(e)}}/>
        )
      })}
      </div>
    </div>
  );
}

export default App;
