import {FaSpinner} from 'react-icons/fa'; //para usar npm install debes sacar el VScode y nodeJs del cortafuego y poner VPN
import styles from "../css/Spinner.module.css";


export function Spinner(){
return( 
    <div className={styles.spinner}>

    <FaSpinner className={styles.spinnig} size={60}/>

    </div>
);


}