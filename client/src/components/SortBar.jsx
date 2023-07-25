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
            <span >Sort by:</span><br />

            <label>
                <input type="radio"
                    key='rating'
                    name='type'
                    value='rating'
                    onChange={handleChange}
                    defaultChecked = {type==='rating'}/>Rating</label>

            <label>
                <input type="radio"
                    key='name'
                    name='type'
                    onChange={handleChange}
                    value='name'
                    defaultChecked = {type==='name'} />Name</label>

            <select name="direction"
                key="direction"
                onChange={handleChange}
                defaultValue={direction}>

                <option value="up">Ascending 🔺</option>
                <option value="down">Descending 🔻</option>
            </select>
        </div>
    )
}

export default SortBar