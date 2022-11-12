import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";



export function Search (){
    const [searchText, setSearchText] = useState('');
    let navigate = useNavigate();
   // http://localhost:3000/
 
    const handleSubmit=(e)=>{
     e.preventDefault()//despues de setear el valor de searchtext no realiza el evento.Solucion...tenia en el Form onsubmit en vez de onSubmit
     navigate('/carteleraTMDB/?search=' + searchText);

    };
         
    return(
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
                <div className={styles.searchBox}>
                    <input className={styles.searchInput} 
                           type="text"  value={searchText}
                           onChange={(e)=>setSearchText(e.target.value)} />{/*OJO:si no cierras las funciones con () la pagina se cuelga */}
                           
                    <button className={styles.searchButton} type="submit"><FaSearch size={20}/> </button>
                </div>
        </form>
    );
}