import React from 'react';

import styles from './styles.module.scss';


export function Categories() {
    return(
        <div className={styles.categoria}>
            <div className={styles.title}>
                <h1>Categorias</h1>
            </div>
            <div className={styles.cima}>
            <button>teste</button>
            <button>teste</button>
            <button>teste</button>
            <button>teste</button>
            </div>
            <div className={styles.baixo}>
            <button>teste</button>
            <button>teste</button>
            <button>teste</button>
            <button>teste</button>
            </div>
        </div>
    );
}