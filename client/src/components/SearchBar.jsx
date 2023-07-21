import styles from '../styles/search.module.css'
import Cards from './Cards'

function SearchBar() {
  return (
    <>
      <div className={styles.container}>
        <span>SearchBar</span>
        <input type="text" placeholder='Ingresa el nombre' />
        <button key="btSearch" name="search" id="search">Buscar</button>
      </div>
      <div>
        <Cards/>
      </div>
    </>
  )
}

export default SearchBar