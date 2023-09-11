import { useEffect , useState } from "react";
import { MovieCard } from "../movieCard/MovieCard";        // de un jsx se importa CON {}
/* import movies from "./movies.json";   */           // de un JSON se importa SIN {}
import styles from "../../css/MoviesGrid.module.css";   // de un .CSS se importa SIN {}
import { get } from "../../helpers/get";
import { useLocation } from "react-router-dom";
import { Spinner } from "../../helpers/Spinner";


function useQuery(){
return   new URLSearchParams((useLocation().search));//no se esta activando el useLocation jajaja ...(useLocation).search en vez de useLocation().search


}
// http://localhost:3000/
export function MoviesGrid() 
{ 
    var [movies,setMovies]= useState([]);//OJO.si declaras la variable movies como CONST no se va a renderizar las imagenes que se obtienen del RESPONSE
                                         //esto puede deberse a que movies es una variable de estado que cambia su estado cada vez que se realiza un fetch al API server  
    const [isLoading, setIsLoading] = useState(true);
                                        
     const url=          "https://api.themoviedb.org/3/discover/movie?api_key=648c0bc5936fe85ad1941f98df070fdf";
     const searchURL =   "https://api.themoviedb.org/3/search/movie?api_key=648c0bc5936fe85ad1941f98df070fdf&query=";//**es necesario capturar la excepcion en el que TMDB no  encuentra resultados */
    
   const query = useQuery();
   const search = query.get("search");

    useEffect(()=>{
    setIsLoading(true); 
    const searchUrl = search 
      ? searchURL+search
      : url;
    get(searchUrl).then(data=>{

                       // movies=data.results;
                        setMovies(data.results);
                        setIsLoading(false);});
       //                 if(movies.length == 0){  searchUrl = url }
                  },[search]);
     if(isLoading){return <Spinner/>}    
    
    return(       
    <ul className = {styles.moviesGrid}>
    {movies.map((movie)=>(
    <MovieCard key={movie.id} movieProp={movie} /> //llamada de la funcion 'export function MovieCard({movie})'

    ))}
    </ul>
    )
} 
//map es un metodo de los archivos JSON con el que puedes manejar todos los elementos de un array
//map puede declararse 

/*
jsonElement.map(funtion(any)
{  
     return ({any.elemento del jsonElement}.)    
                )
}
*/

/* 
jsonElement.map((any)=>({any.elemento del jsonElement}.)) //el pto. al final del corchete es para diferenciar 
                                                          //los corchetes de las funciones de las expresiones de javascript
*/

/*
<li key={movie.id}> {movie.title}. </li>))} //el atributo key = "modo estatico" ó {modo.dinamico}
*/                                          // el pto . en la expresion javascript no en el atributo dinamico html