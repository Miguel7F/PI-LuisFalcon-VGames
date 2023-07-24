import Genre from './Genre'
import styles from '../styles/filterBar.module.css'

function FilterBar({ genres }) {
    return (
        <section className={styles.container}>
            <span>Filter by:</span><br />
            <span>Source: </span> <br />

            <label>
                <input type="checkbox"
                    name='source'
                    key='db'
                    id='db'
                    value='db' />DataBase</label>

            <label> <input type="checkbox"
                name='source'
                key='api'
                id='api'
                value='api' />API RAWG</label><br />

            <span>Genre: </span><br />

            <select name="genre" id="genre" defaultValue="all">
                <option value="all">All</option>
                {genres?.map(({ id, name }) => {
                    return (<Genre key={name} name={name} />)
                })}
            </select>
        </section>
    )
}

export default FilterBar