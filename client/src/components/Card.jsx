import styles from '../styles/card.module.css'
import { NavLink } from 'react-router-dom'

function Card({ id, background_image, name, genresName, rating }) {



  return (
    <NavLink to={`/detail/${id}`} className={styles.card}>
      <div className={styles.text}>{name}</div>
      <div className={styles.imagen}>
        <img src={background_image} alt={name} loading="lazy" />
      </div>
      <div className={styles.text}>{rating}⭐</div>
      <div className={styles.text}>{genresName}</div>
    </NavLink>


  )
}

export default Card