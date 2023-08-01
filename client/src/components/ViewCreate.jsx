import styles from '../styles/viewCreate.module.css'

function ViewCreate({ info }) {
    return (
        <section className={styles.viewData}>
            <h2>Video Game Card</h2>
            <div>{info.nameGame ? info.nameGame : "You haven't placed a video game name yet."}</div>
            <img src={info.image} alt="Game Image" />
            <div>{info.description ? info.description : "You haven't posted a video game description yet"}</div>
            <div>{info.released ? info.released : "You haven't set a video game release date yet."}</div>
            <div>{info.rating ? info.rating : "You have not placed a rating yet."}</div>
            <div>{info.platform.length ? info.platform : "You haven't chosen a platform yet."}</div>
            <div>{info.genre.length ? info.genre : "You haven't chosen a genre yet."}</div>
        </section>
    )
}

export default ViewCreate