import styles from '../styles/navbar.module.css'
import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <>
            <div className={styles.header}>
                <div className={styles.container}>
                    <NavLink to='/home' className={styles.link} name="home">Home</NavLink>
                    <NavLink to='/detail' className={styles.link} name="detail">Detail</NavLink>
                    <NavLink to='/form' className={styles.link} name="form">Form</NavLink>
                    <NavLink to='/' className={styles.link} name="logout">Logout</NavLink>
                </div>
            </div>
        </>
    )
}

export default NavBar