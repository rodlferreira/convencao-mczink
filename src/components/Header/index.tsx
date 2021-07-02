import React from 'react';
import testeImg from '../../assets/images/logoConvencao.jpg';
import Image from 'next/image';
import styles from './styles.module.scss';


export function Header() {
    return (
      <div className={styles.header}>

          <Image 
            width={700}
            height={492} 
            
            src={testeImg} alt="teste" />
          
      </div>
    );
}
