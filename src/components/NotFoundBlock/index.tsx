import React from 'react';
import styles from './NotFoundBlock.module.scss'

const NotFoundBlock: React.FC = () => {
    return (
        <>
            <h1 className={styles.center}>
                <span>😕</span>
                <br />
                Нечего не найдено
                <p className={styles.description}>К сожалению данная страница отсутствует в нашеминтернет магазине</p>
                </h1>
                
        </>
    )
}

export default NotFoundBlock;