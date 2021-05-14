import React from 'react';

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const setVoteClass = (vote) => {
    
    if(vote>=8){
        return"green";
    }else if(vote >=6){
        return"orange";
    }else{
        return "red";
    }
 };
 

const Movie = ({title,poster_path,overview,vote_average}) => {

    return(
    <div className="movie">
    <div className="header">
    <img src ={ poster_path ? (IMG_API + poster_path) :
        "https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW92aWVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" } 
    
    alt = {title}/>
    <div className="movie_info">
        <h1>{title}</h1>
        
        <span className ={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
    </div>
    <div className="movie_overview">
        <h2>Overview..</h2>
        <p>{overview}</p>
    </div>

    

    </div>
        
    </div>
    )
  
};
 
export default Movie ;