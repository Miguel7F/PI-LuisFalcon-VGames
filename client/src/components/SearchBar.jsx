import styles from '../styles/searchBar.module.css'

function SearchBar() {
  return (
    <div className={styles.container}>
        <input type="text" name='inputSearch' id='inputSearch' placeholder='Find your game' />
        <button name='btnSearch'>Search</button>
    </div>
  )
}

export default SearchBar