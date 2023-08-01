import styles from '../styles/loading.module.css'
function Loading() {
    return (
        <div className={styles.container}>
            <div className={styles.loader}>
                <div className={styles.packman}></div>
                <div className={styles.dots}>
                    <div className={styles.dot}></div>
                    <div className={styles.dot}></div>
                    <div className={styles.dot}></div>
                    <div className={styles.dot}></div>
                </div>
            </div>
        </div>
    )
}

export default Loading