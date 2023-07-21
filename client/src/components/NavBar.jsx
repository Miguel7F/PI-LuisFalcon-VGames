import styles from '../styles/navbar.module.css'
import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <>
            <div className={styles.container}>
                <NavLink to='/home' className={styles.link}>Home</NavLink>
                <NavLink to='/detail' className={styles.link}>Detail</NavLink>
                <NavLink to='/form' className={styles.link}>Form</NavLink>
                <NavLink to='/' className={styles.link}>Logout</NavLink>
            </div>
        </>
    )
}

export default NavBar