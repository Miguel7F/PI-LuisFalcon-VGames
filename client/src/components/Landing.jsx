import styles from '../styles/landing.module.css'
import { NavLink } from 'react-router-dom'

function Landing() {
    return (
        <div className={styles.window}>
            <NavLink to="/home" className={styles.link}>
                <h1 className={styles.neonText}>Press Start</h1>
            </NavLink>
        </div>
    )
}
export default Landing


