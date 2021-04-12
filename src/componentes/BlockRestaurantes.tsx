import { useContext } from 'react';
import { BlockRestauRantesContext } from '../contexts/BlockRestaurantesContext';
import styles from '../styles/components/BlockRestaurantes.module.css';
import { ListItensAdd } from './ListItensAdd';
import { ListItensRestaurante } from './ListItensRestaurante';
import { ListLastPedidos } from './ListLastPedidos';
import { ListRestaurante } from './ListRestaurante';

export function BlockRestaurantes() {

    const { scenaryRes } = useContext(BlockRestauRantesContext);

    return (

        <div className={styles.blockRestaurantesContainer}>

            {
                scenaryRes ? (
                    <>
                        <ListRestaurante />
                        <ListLastPedidos />
                    </>
                ) : (
                    <>
                        <ListItensRestaurante/>
                        <ListItensAdd />
                    </>
                )
            }


        </div>

    );
}