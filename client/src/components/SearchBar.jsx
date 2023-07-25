import { useDispatch, useSelector } from 'react-redux'
import styles from '../styles/searchBar.module.css'
import changeBar from '../redux/actions/changeBar';

function SearchBar() {
  const dispatch = useDispatch()
  const nameGame = useSelector(state => state.nameGame)

  function handleChange(event) {
    const { name, value } = event.target
    dispatch(changeBar({ name, value }))
  }
  return (
    <div className={styles.container}>
      <input type="text"
        name='nameGame'
        id='nameGame'
        value={nameGame}
        onChange={handleChange}
        placeholder='Find your game' />
    </div>
  )
}

export default SearchBar