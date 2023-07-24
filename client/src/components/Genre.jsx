import styles from '../styles/genre.module.css'

function Genre({ id, name }) {
    return (
        <option key={name} value={name}>{name}</option>
    )
}

export default Genre