import react, {useState} from 'react'
import './App.css';
import {Data} from './components/Data'
import Header from './components/header/Header';
import Main from './components/Main'

function App() {
  const [movies, setMovies] = useState (Data)
  const [myInput, setMyInput] = useState ("")
  const [myRate, setMyRate] = useState(0)

  const AddNew = (f) => {
    setMovies ([...movies, f])
  }

  console.log (Data)
  return (
    <div className="App">
      <Header myRate={myRate} setMyRate={setMyRate} setMyInput={setMyInput}/>
      
      <Main movies={movies.filter((el)=>el.name.toUpperCase().includes(myInput.toUpperCase().trim())&& el.rating>=myRate)} AddNew={AddNew}/>
    </div>
  );
}

export default App;
