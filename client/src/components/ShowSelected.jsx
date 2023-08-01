import styles from '../styles/showSelected.module.css'
function ShowSelected({ name, values, handleClick }) {
    return (
        <section className={styles.container}>
            {values && values.map((elem) => (
                <button key={elem} name={name} value={elem} onClick={handleClick} className={styles.button}>{elem}❌</button>
            ))}
        </section>
    )
}

export default ShowSelected