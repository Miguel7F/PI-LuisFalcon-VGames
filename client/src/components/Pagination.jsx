import styles from '../styles/pagination.module.css'
import React from 'react'

function Pagination({ arrPages, currentPage, totalPages, handleClick }) {
    return (
        <section className={styles.container}>
            <button key='back' id='back' disabled={currentPage === 1} onClick={() => handleClick('back')}>Back</button>
            {arrPages?.map((page) => (
                <button key={`page${page}`} onClick={() => handleClick(page)} className={page === currentPage ? styles.currentPage : null}> {page} </button>
            ))}
            <button key='next' id='next' disabled={currentPage === totalPages} onClick={() => handleClick('next')}> Next</button >
        </section >
    )
}

export default Pagination