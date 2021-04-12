import Head from 'next/head';
import { BlockRestaurantes } from '../componentes/BlockRestaurantes';
import { MenuProfile } from '../componentes/MenuProfile';
import { BlockRestauRantesProvider } from '../contexts/BlockRestaurantesContext';

import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <BlockRestauRantesProvider>
      <div className={styles.container}>
        <Head>
          <title>kfast</title>
        </Head>

        <MenuProfile />
        <BlockRestaurantes />
      </div>
    </BlockRestauRantesProvider>
  )
}
