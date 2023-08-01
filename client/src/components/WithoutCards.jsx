import styles from '../styles/withoutCards.module.css'
function WithoutCards() {
    return (
        <section className={styles.container}>
            <div className={styles.text}>Without cards to show  </div>
            <img className={styles.imagen} src="https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700342706.jpg" alt="Game Over" />
        </section>
    )
}

export default WithoutCards