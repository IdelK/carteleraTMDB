
import { useEffect,useState } from "react";
import { useParams } from 'react-router-dom';// en la V5 useParams se importa desde "react" junto con useEffect,useState,en la V6 from 'react-router-dom' 
                                             //si por error usas el metodo de la V5 import from "react" el programa compila pero no captura el parametro movieId desde el browser 
import styles from "./MovieDetails.module.css";
import { Spinner } from "./Spinner";
import {get} from "./get"
//import movie from "./movie.json";

export function MovieDetails(){
 
    
    const [isLoading, setIsLoading] = useState(true);
    const  {movieId}= useParams();//useParams usa los parametros dinamicos que captura el Route.El componente o funcion que invoca el useParams debe ser el mismo que 
                                  // usa Route como element. p.e: 
                                  //MovieDetails() es una funcion que se invoca el Route cada vez que aparece una direccion en el browser cuya ruta tiene un valor 
                                  //dinamico movieId.Con useParams se pude capturar (cada vez que cambia) dicho valor dentro del componente MovieDetails()
    var [movie,setMovie] = useState(null);
    const url= "https://api.themoviedb.org/3/movie/" + movieId + "?api_key=648c0bc5936fe85ad1941f98df070fdf";
   

    useEffect(()=>{
        setIsLoading(true);
        get(url).then(data=>{ 
                            setIsLoading(false);
                            setMovie(data);
                            });
},[movieId]);
if(isLoading){return <Spinner/>}    
if(! movie){return null}; 

    
    
    const imageURL= "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return(   
        
    <div className = {styles.detailesContainer} >  
        <img className= {`${styles.col} ${styles.movieImage}`} src= {imageURL} alt= {movie.title} />{/*debuging la direccion url: copie image location en 
                                                    el navegador,si sale incompleta entonces revisar codigo */}
        <div className={`${styles.col} ${styles.movieDetails}`}>
         <p className={styles.firtsItem}> <strong>Title:{movie.title} </ strong></p>
         <p className={styles.pAlign}>{movie.release_date}</p>
         <p> {movie.genres.map((genre)=>genre.name).join(", ")} </p>
         <p  className={styles.pAlign}> <strong>Description:</strong> {movie.overview}</p>
        </div>
    </div>
    );
 }