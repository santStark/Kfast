import styles from '../styles/components/ListLastPedidos.module.css';

export function ListLastPedidos() {
    
    return (
        <div className={styles.listLastPedidosContainer}>

            <div className={styles.blockLastPedido}>
                <img src="/res1.jpg" alt="Restaurente 1" />
                <div>
                    <span>10/05/2021</span>
                    <span>R$35,00</span>
                </div>
            </div>

        </div>
    );
}