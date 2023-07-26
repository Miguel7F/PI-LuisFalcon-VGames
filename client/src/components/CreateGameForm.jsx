import styles from '../styles/createGame.module.css'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import getGenres from '../redux/actions/getGenreAction'
import GenreOption from './GenreOption'

function Formulario() {
  const dispatch = useDispatch()
  const genres = useSelector(state => state.genres)
  
  const [info, setInfo] = useState({
    genre:'select',
    error:{}
  })

  useEffect(() => {
    try {
      !genres.length && dispatch(getGenres())
    } catch (error) {
      alert(error.message)
    }
  }, [])

  function handleChange(event) {
    const { name, value } = event.target

    setInfo({ ...info, [name]: value })
  }

  return (
    <div className={styles.container}>
      <form className={styles.getData}>
        <h2>Video Game Information</h2>
        <label><input type="text"
          key='nameGame'
          name='nameGame'
          onChange={handleChange}
          placeholder="Game's name" /> </label>
        <label><input type='text'
          key='image'
          name='image'
          onChange={handleChange}
          placeholder='URL to image'></input></label>
        <label><input type="text"
          key='description'
          name='description'
          onChange={handleChange}
          placeholder='A short description' /></label>
        <label><input type="text"
          key='plataforms'
          name='plataforms'
          onChange={handleChange}
          placeholder='Plataforms' /></label>
        <label><input type="text"
          key='released'
          name='released'
          onChange={handleChange}
          placeholder='Released...' /></label>
        <label><input type="text"
          key='rating'
          name='rating'
          onChange={handleChange}
          placeholder='Give a score' /></label>
        <select name="genre" onChange={handleChange} value={info.genre} >
          <option value="select" disabled>Select up to 5 genres</option>
          <GenreOption genres={genres} />
        </select>
      </form>
      <section className={styles.viewData}>
        <div>{info.nameGame}</div>
        <img src={info.image} alt={info.nameGame} />
        <div>{info.description}</div>
        <div>{info.plataforms}</div>
        <div>{info.released}</div>
        <div>{info.rating}</div>
        <div>{info.genre}</div>
      </section>
    </div>
  )
}

export default Formulario