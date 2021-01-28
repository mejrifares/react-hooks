import MovieList from '../components/MovieList'
import AddMovie from './addMovie/AddMovie'


const Main = ({movies, AddNew}) => {
    return (
        <div>
            <MovieList movies={movies} />
            <AddMovie AddNew={AddNew}/>
        </div>
    )
}

export default Main
