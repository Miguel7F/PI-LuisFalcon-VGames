import Card from './Card'
import styles from '../styles/cards.module.css'


function Cards({showGames}) {
    
    return (
        <section className={styles.container}>{showGames?.map(({ id, background_image, name, genreName, rating }) => {
            return (<Card key={id} id={id} background_image={background_image} name={name} genreName={genreName.join(" /")} rating={rating} />)
        })}
        </section>
    )
}
export default Cards