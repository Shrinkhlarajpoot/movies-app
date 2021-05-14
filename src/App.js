import React, {useEffect,useState} from 'react'
  import Movie from './components/Movie';

  

 const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const TREANDING_API = 'https://api.themoviedb.org/3/trending/tv/week?api_key=a8d9c7d817d58819c1b33ef4192ca3be';
const SEARCH_API ="https://api.themoviedb.org/3/search/movie?api_key=a8d9c7d817d58819c1b33ef4192ca3be&language=en-US&query=";

//const GENRE_API ="https://api.themoviedb.org/3/genre/movie/list?api_key=a8d9c7d817d58819c1b33ef4192ca3be&language=en-US";
//const TVSHOWS_API="https://api.themoviedb.org/3/genre/movie/list?api_key=a8d9c7d817d58819c1b33ef4192ca3be&language=en-US"
function App() {

const[movies, setMovies] = useState([]);
const[searchTerm, setSearchTerm] = useState(' ');
useEffect(() => {
   fetch(FEATURED_API)
   .then((res) =>res.json()) 
    .then((data) =>{
       console.log(data);
       setMovies(data.results);
     });
  
 }, []);
 const handleOnSubmit = async(e) => {
     e.preventDefault();
      await fetch(SEARCH_API + searchTerm)
      
   .then((res) =>res.json()) 
    .then((data) =>{
       console.log(data);
       setMovies(data.results);
     });
     setSearchTerm('');
 };
 const handleOnChange = (e) => {
   setSearchTerm(e.target.value);
  

 }
 const treanding = async(e) =>{  
  e.preventDefault();
  await fetch( TREANDING_API )
.then((res) =>res.json()) 
.then((data) =>{
   console.log(data);
   setMovies(data.results);
  });}





 
 
 

  return (
   <>


    <header>
    
   <h3 className="logo">@MOVIESFLIX!</h3>
    <button className="btn" onClick={treanding}>Trending</button>
    
    
    <form onSubmit={handleOnSubmit}>
      <input  className="search" type="search"
      
       value={searchTerm}  placeholder ="Search..." onChange={handleOnChange}></input>

   </form>
   
    </header>
    <div className="movie_container">
         { movies.length > 0 &&
      movies.map((movie) =>
              <Movie key={movie.id} {...movie}/>
              )
              };
               
             
    </div>
    
  
     
    </>
  
     );
}

export default App
