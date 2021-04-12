import { useContext } from "react";
import { BlockRestauRantesContext } from "../contexts/BlockRestaurantesContext";
import styles from "../styles/components/MenuProfile.module.css";

export function MenuProfile() {
    const { goToScenary } = useContext(BlockRestauRantesContext);

    function goToHome(){
        goToScenary(true);
    }
    
    return(
        <div className={styles.menuProfileContainer}>
            <img src="https://github.com/santStark.png" alt="Guilherme Santiago"/>

            <div className='fa fa-home' onClick={goToHome}></div>
            <div className='fa fa-utensils'></div>

            <div className='fa fa-cogs'></div>
            <div className='fa fa-power-off'></div>
        </div>
    );

}