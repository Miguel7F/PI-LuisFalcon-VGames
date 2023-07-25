import styles from '../styles/pagination.module.css'
import React from 'react'

function Pagination({ arrPages, actualPage, totalPages, handleClick }) {
    return (
        <section className={styles.container}>
            <button key='back' id='back' disabled={actualPage === 1} onClick={() => handleClick('back')}>Back</button>
            {arrPages?.map((page) => (
                <button key={`page${page}`} onClick={() => handleClick(page)} className={page === actualPage ? styles.currentPage : null}> {page} </button>
            ))}
            <button key='next' id='next' disabled={actualPage === totalPages} onClick={() => handleClick('next')}> Next</button >
        </section >
    )
}

export default Pagination