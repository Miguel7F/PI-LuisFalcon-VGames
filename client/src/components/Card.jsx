import styles from '../styles/card.module.css'
import { NavLink } from 'react-router-dom'

function Card({ id, background_image, name, genreName, rating }) {
  return (
    <section>
      <NavLink to={`/detail/${id}`} className={styles.container}>
        <div>{name}</div>
        <div className={styles.imagen}>
          <img src={background_image} alt={name} />
        </div>
        <div>{rating}⭐</div>
        <div>{genreName}</div>
      </NavLink>
    </section>
  )
}

export default Card