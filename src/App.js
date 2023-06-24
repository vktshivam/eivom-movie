import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './components/header/Header';
import Home from './components/page/Home';
import MovieList from './components/movieList/movieList';
import Movie from './components/page/movie';

function App() {
  return (
    <div className="App">
     <Router>
     <Header />
     <Routes>
        <Route index element={<Home />}></Route>
        <Route path='movie/:id' element={<Movie />}></Route>
        <Route path='movies/:type' element={<MovieList />}></Route>
        <Route path='/*' element={<h1>error page</h1>} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
