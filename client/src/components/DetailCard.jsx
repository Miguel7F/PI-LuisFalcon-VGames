import styles from '../styles/detailCard.module.css'

function DetailCard({ id, name, background_image, platformsName, description, released, rating, genresName }) {

    return (
        <section className={styles.container}>
            <div className={styles.card}>
                <img src={background_image} alt={name} />
                <div className={styles.content}>
                    <div className={styles.title}>{name}</div>
                    <div className={styles.description}>
                        <div>ID: {id}</div>
                        <div>Platforms: {platformsName?.join(", ")}</div>
                        <div>Released: {released}</div>
                        <div>Average Rating: {rating}</div>
                        <div>Genres: {genresName?.join(", ")}</div>
                        <span>Description:
                        <label dangerouslySetInnerHTML={{ __html: description }} /></span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DetailCard