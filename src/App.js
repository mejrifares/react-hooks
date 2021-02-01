import react, {useState} from 'react'
import './App.css';
import {Data} from './components/Data'
import Header from './components/header/Header';
import Main from './components/Main'
import {Router, Route, Switch} from 'react-router-dom'
import Details from './components/Details';
import MovieCard from './components/MovieCard';

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
<div>
        <Switch >
        <Route exact path="/">
       <Main movies={movies.filter((el)=>el.name.toUpperCase().includes(myInput.toUpperCase().trim())&& el.rating>=myRate)} AddNew={AddNew}/>
       </Route>
      <Route exact path="/moviesCard" render={()=> (<MovieCard movies={movies}/>)} />
      <Route exact path="/details/:id" component={(mov) =>(<Details {...mov} movies={movies}/>)} />
      </Switch>
      </div>

     
    </div>
  );
}

export default App;
