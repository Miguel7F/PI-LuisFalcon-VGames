import styles from '../styles/createGame.module.css'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import getGenres from '../redux/actions/getGenreAction'
import getGames from '../redux/actions/getGamesAction';
import validation from '../services/validation';
import AllOption from './AllOption'
import CreateBox from './CreateBox';

function CreateGameForm() {
  const dispatch = useDispatch()
  const genres = useSelector(state => state.genres)
  const games = useSelector(state => state.games)
  const platforms = useSelector(state => state.platforms)

  const [info, setInfo] = useState({
    genre: 'select',
    platforms: 'select',
  })
  const [error, setError] = useState({

    // error: {
    //   nameGame: 'ok',
    //   image: 'ok',
    //   description: 'ok',
    //   released: 'ok',
    //   rating: 'ok',
    //   platforms:'ok',
    //   genre:'ok'
    // }
  })

  useEffect(() => {
    try {
      !genres.length && dispatch(getGenres())
      !games.length && dispatch(getGames())
    } catch (error) {
      alert(error.message)
    }
  }, [])

  function handleChange(event) {
    const { name, value } = event.target
    const err = validation(name, value)
    setInfo({ ...info, [name]: value })
    setError({ ...error, [name]: err })
  }

  return (
    <div className={styles.container}>
      <form className={styles.getData}>
        <h2>Video Game Information</h2>
        <CreateBox iType="text" iValue={info.nameGame} iName="nameGame" handleChange={handleChange} pholder="Game's name" />
        <CreateBox iType="text" iValue={info.image} iName="image" handleChange={handleChange} pholder="URL to image" />
        <CreateBox iType="text" iValue={info.description} iName="description" handleChange={handleChange} pholder="A short description" />
        <CreateBox iType="text" iValue={info.released} iName="released" handleChange={handleChange} pholder="Released..." />
        <CreateBox iType="text" iValue={info.rating} iName="rating" handleChange={handleChange} pholder="Give a score" />

        <label>
          <select name="platforms" onChange={handleChange} value={info.platforms} >
            <option value="select" disabled>Select up to 5 platforms</option>
            <AllOption options={platforms} />
          </select>*</label>

        <label>
          <select name="genre" onChange={handleChange} value={info.genre}>
            <option value="select" disabled>Select up to 5 genres</option>
            <AllOption options={genres} />
          </select>*</label>

        <button type='submit' >Send video game info</button>
        <small>Los campos marcados con "<strong>*</strong>" son obligatorios</small>
      </form>
      <section className={styles.viewData}>
        <h2>Video Game Card</h2>
        <div>{info.nameGame ? info.nameGame : 'Yo can see here the name'}</div>
        <img src={info.image} />
        <div>{info.description}</div>
        <div>{info.platforms}</div>
        <div>{info.released}</div>
        <div>{info.rating}</div>
        <div>{info.genre}</div>
      </section>
    </div >
  )
}

export default CreateGameForm