import styles from '../styles/pagination.module.css';


function Pagination({ totalPages, onClickPage }) {
    const arr = [1] * totalPages
    return (
        <section className={styles.container}>
            <div onClick={() => onClickPage()}>🔙</div>
            {arr.forEach(element => {
                console.log("hola");
            })}
            <div onClick={() => onClickPage()}>🔜</div>
        </section>
    )
}

export default Pagination