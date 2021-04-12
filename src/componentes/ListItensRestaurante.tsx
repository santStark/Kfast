import { useContext, useEffect, useState } from 'react';
import { BlockRestauRantesContext } from '../contexts/BlockRestaurantesContext';
import styles from '../styles/components/ListItensRestaurante.module.css';

export function ListItensRestaurante(){
    const { resItens, addItem } = useContext(BlockRestauRantesContext);
    const [strFilter , setStrFilter] = useState('');

    function filterRes(e) {

        setStrFilter(e.currentTarget.value);

    }

    function getItem(e){
        
        const index = e.currentTarget.getAttribute('data-key');
        if(!index) return;      
        addItem(resItens.itens[index]);  


    }

    useEffect(()=>{
      
    },[strFilter]);

    return (
        <div className={styles.listItensRestauranteContainer}>
            <div>
                <input type="search" onInput={filterRes} />
            </div>
            <div className={styles.blocklistItensRestauranteContainer}>
                {
                    resItens.itens.map((item , index) => {

                        if(item.item.indexOf(strFilter) < 0 ) return;

                        return <div className={styles.blockItensRestaurantes} key={index} data-key={index} onClick={getItem}  >
                            <img src={item.img} alt={item.item} />
                            <div>
                                <strong>{item.item}</strong>
                                <p>{item.desc} </p>
                                <p>R$: {item.valor} </p>
                            </div>
                        </div>
                        
                    })
                }

            </div>

        </div>
    )
}