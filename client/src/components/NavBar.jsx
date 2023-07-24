import styles from '../styles/navbar.module.css'
import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <div className={styles.container}>
            <NavLink to='/home' className={styles.link} name="home">Home</NavLink>
            <NavLink to='/createGameForm' className={styles.link} name="form">Create Game</NavLink>
            <NavLink to='/about' className={styles.link} name="detail">About us</NavLink>
            <NavLink to='/' className={styles.link} name="logout">Logout</NavLink>
        </div>
    )
}

export default NavBar