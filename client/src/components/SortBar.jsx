import styles from '../styles/sortBar.module.css'

function SortBar() {
    return (
        <div className={styles.container}>
            <span >Sort by:</span><br />
            
            <label>
                <input type="radio"
                name='type'
                id='rating'
                value='rating'
                defaultChecked />Rating</label>

            <label>
                <input type="radio"
                name='type'
                id='alpha'
                value='alpha' />Alphabetical</label>
            
            <select name="direction" id="direction" defaultValue={"down"}>
                <option value="up">Ascending 🔺</option>
                <option value="down">Descending 🔻</option>
            </select>
        </div>
    )
}

export default SortBar