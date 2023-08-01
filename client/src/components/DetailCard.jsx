import styles from '../styles/detailCard.module.css'

function DetailCard({ id, name, background_image, platformsName, description, released, rating, genresName }) {

    // <div>{description}</div>

    return (
        <section className={styles.container}>
            <div className={styles.card}>
                <img src={background_image} alt={name} />
                <div className={styles.card__content}>
                    <div className={styles.card__title}>{name}</div>
                    <div className={styles.card__description}>
                        <div>{id}</div>
                        <div>{platformsName}</div>
                        <div>{released}</div>
                        <div>{rating}</div>
                        <div>{genresName}</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DetailCard