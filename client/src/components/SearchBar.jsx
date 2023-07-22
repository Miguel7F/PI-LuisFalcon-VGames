import { useEffect } from 'react'
import styles from '../styles/search.module.css'
import Cards from './Cards'


function SearchBar() {
  const vgames = [
    { id: 1, name: 'otro', descripcion: 'another' },
    { id: 2, name: 'otro', descripcion: 'another' },
    { id: 3, name: 'otro', descripcion: 'another' },
    { id: 4, name: 'otro', descripcion: 'another' },
    { id: 5, name: 'otro', descripcion: 'another' },
    { id: 6, name: 'otro', descripcion: 'another' },
    { id: 7, name: 'otro', descripcion: 'another' }]
    
  useEffect(() => {
    console.log('Lo ejecuto al entrar');

  }, [])

  return (
    <>
      <div className={styles.container}>
        <span>SearchBar</span>
        <input type="text" placeholder='Ingresa el nombre' name="inputSearch" id='inputSearch' />
        <button key="btSearch" name="btSearch" id="btSearch">Buscar</button>
      </div>
      <div>
        <Cards vgames={vgames} />
      </div>
    </>
  )
}

export default SearchBar