import React from 'react';
import styles from "./Pagination.module.scss";

type PaginationProps = {
   limit: number;
   count: number;
   current: number;
   onChangePagination: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({limit, count, current, onChangePagination }) => {
   const totalPages = Math.ceil(count / limit)

   return (
      <div>
         <ul className={styles.root}>
            {[...new Array(totalPages)].map((_, index) => {
               return <li
               className={(index + 1) === current ? styles.active : styles.button}
               key={index}
               onClick={() => onChangePagination(index + 1)}>{index + 1}</li>
            }
            )}
         </ul>
      </div>
   )
}

export default Pagination;