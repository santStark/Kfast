import { useContext, useEffect, useState } from 'react';
import { BlockRestauRantesContext } from '../contexts/BlockRestaurantesContext';
import styles from '../styles/components/ListRestaurante.module.css';

export function ListRestaurante() {

    const { restaurantes, goToRestaurante } = useContext(BlockRestauRantesContext);
    const [strFilter , setStrFilter] = useState('');

    function filterRes(e) {

        setStrFilter(e.currentTarget.value);

    }

    function setRestaurante(e) {

        const index = e.currentTarget.getAttribute('data-key');
        if(!index) return;      
        goToRestaurante(restaurantes[index]);  

    }

    return (
        <div className={styles.listRestauranteContainer}>
            <div>
                <input type="text" onInput={filterRes} />
            </div>
            <div className={styles.blockListRestauranteContainer}>
                {
                    restaurantes.map((item , index) => {

                        if(item.name.toLowerCase().indexOf(strFilter.toLowerCase()) < 0 ) return;

                        return <div className={styles.blockRestaurantes} key={index} data-key={index} onClick={setRestaurante}>
                            <img src={item.img} alt={item.name} />
                            <div>
                                <strong>{item.name}</strong>
                                <p>Aberto: {item.abre} às {item.fecha}</p>
                            </div>
                        </div>
                        
                    })
                }

            </div>

        </div>
    )
}