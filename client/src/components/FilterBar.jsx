import changeBar from '../redux/actions/changeBar'
import styles from '../styles/filterBar.module.css'
import { useDispatch, useSelector } from 'react-redux'
import AllOption from './AllOption'

function FilterBar() {
    const dispatch = useDispatch()
    const genres = useSelector(state => state.genres)
    const genre = useSelector(state => state.genre)
    const source = useSelector(state => state.source)

    function handleChange(event) {
        const { name, value } = event.target
        dispatch(changeBar({ name, value }))
    }

    return (
        <section className={styles.container}>
            <select name="source" onChange={handleChange} value={source} className={styles.select} >
                <option value="All">Get from All Sources</option>
                <option value="Data Base">Get from Data Base</option>
                <option value="API RAWG">Get from API RAWG</option>
            </select>
            <select name="genre" onChange={handleChange} value={genre} className={styles.select}>
                <option value="All">Show all Genres</option>
                <AllOption options={genres} />
            </select>
        </section>
    )
}

export default FilterBar