import changeBar from '../redux/actions/changeBar'
import styles from '../styles/filterBar.module.css'
import { useDispatch, useSelector } from 'react-redux'
import GenreOption from './GenreOption'

function FilterBar() {
    const dispatch = useDispatch()
    const genres = useSelector(state => state.genres)
    const genre = useSelector(state => state.genre)
    const source = useSelector(state=>state.source)
    
    function handleChange(event) {
        const { name, value } = event.target
        dispatch(changeBar({ name, value }))
    }

    return (
        <section className={styles.container}>
            <span>Filter by:</span><br />
            <span>Source: </span> <br />

            <select name="source" onChange={handleChange} value={source} >
                <option value="All">All</option>
                <option value="Data Base">Data Base</option>
                <option value="API RAWG">API RAWG</option>
            </select>

            <br />
            <span>Genre: </span><br />

            <select name="genre" onChange={handleChange} value={genre} >
                <option value="All">All</option>
                <GenreOption genres={genres}/>
            </select>
        </section>
    )
}

export default FilterBar