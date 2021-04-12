import { useContext } from 'react';
import { BlockRestauRantesContext } from '../contexts/BlockRestaurantesContext';
import styles from '../styles/components/ListItensAdd.module.css';

export function ListItensAdd() {
    const { itensPedido, totPedido, removeItem, goToScenary } = useContext(BlockRestauRantesContext);

    function removeItemEl(e){

        const index = e.currentTarget.getAttribute('data-key');
        if(!index) return;      
        removeItem(index);  
    }

    function goToHome(){
        goToScenary(true);
    }

    return (
        <div className={styles.listItensAddContainer}>

            <div className={styles.blockAllItensAdd}>
                {
                    itensPedido.map((item, index) => {

                        return (
                            <div className={styles.blockItemAdd} key={index}>
                                <button className={styles.btnItemAdd + ' fa fa-times'} data-key={index} onClick={removeItemEl}></button>
                                <img src={item.img} alt={item.item} />
                                <div>
                                    <span>{item.item}</span>
                                    <span>R${item.valor}</span>
                                </div>

                            </div>
                        )

                    })
                }
            </div>

            <div className={styles.blockTotItensAdd}>
                <strong>
                    R${totPedido.toFixed(2)}
                </strong>
                <button onClick={goToHome}>Finalizar</button>
            </div>

        </div>
    );
}