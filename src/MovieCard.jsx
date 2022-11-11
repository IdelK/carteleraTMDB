import styles from "./MovieCard.module.css";
import {Link} from "react-router-dom";



export function MovieCard({movieProp})//***ojo LOS PARAMETROS SE PASA CON {} 
{ 
    const imageURL= "https://image.tmdb.org/t/p/w300" + movieProp.poster_path;
    return <li className = {styles.movieCard}>
        <Link to={"movies/" + movieProp.id}> {/*esta ruta le da paso al route que ejecuta MovieDetails*/}
        <img  
        width={230}
        height={345}
        className = {styles.movieImage} src={imageURL} alt={movieProp.title} 
         />
       <div> {movieProp.title}</div>  
       </Link>
 
        </li>
}
