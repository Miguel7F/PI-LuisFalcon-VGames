import { useDispatch, useSelector } from 'react-redux'
import styles from '../styles/sortBar.module.css'
import changeBar from '../redux/actions/changeBar'

function SortBar() {
    const dispatch = useDispatch()
    const direction = useSelector(state => state.direction)
    const type = useSelector(state => state.type)

    function handleChange(event) {
        const { name, value } = event.target
        dispatch(changeBar({ name, value }))
    }

    return (
        <div className={styles.container}>
            <select name="type"
                key="type"
                onChange={handleChange}
                defaultValue={type}
                className={styles.select}>
                <option value="rating">Sort by Rating</option>
                <option value="name">Sort by Name</option>
            </select>

            <select name="direction"
                key="direction"
                onChange={handleChange}
                defaultValue={direction}
                className={styles.select}>
                <option value="up">🔺Ascending</option>
                <option value="down">🔻Descending</option>
            </select>
        </div>
    )
}

export default SortBar