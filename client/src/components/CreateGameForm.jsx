import styles from '../styles/createGame.module.css'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import getGenres from '../redux/actions/getGenreAction'
import getGames from '../redux/actions/getGamesAction';
import validation from '../services/validation';
import AllOption from './AllOption';
import ShowSelected from './ShowSelected';

function CreateGameForm() {
  const dispatch = useDispatch()
  const genres = useSelector(state => state.genres)
  const games = useSelector(state => state.games)
  const platforms = useSelector(state => state.platforms)
  const arrRatings = [{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }, { name: 5 }]
  const [info, setInfo] = useState({
    nameGame: '',
    image: '',
    description: '',
    released: '',
    rating: '',
    platform: [],
    genre: [],
  })

  const [error, setError] = useState({
    nameGame: '',
    image: '',
    description: '',
    released: '',
    rating: '',
    platform: '',
    genre: '',
  })

  const disabledSubmit = Object.values(error).every(value => value === 'ok')

  const filterPlatforms = platforms.filter(({ name }) => {
    return !info.platform.some(el => el === name)
  })

  const filterGenres = genres.filter(({ name }) => {
    return !info.genre.some(el => el === name)
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
    const answer = validation(name, value)
    setError({ ...error, [name]: answer })
    setInfo({ ...info, [name]: value.trimLeft() })
  }

  function handleSelectChange(event) {
    const { name, value } = event.target
    setError({ ...error, [name]: 'ok' })

    if (name === "rating") setInfo({ ...info, [name]: value })
    else setInfo({ ...info, [name]: [...info[name], value] })
  }

  function handleClick(event) {
    event.preventDefault()
    const { name, value } = event.target
    if (info[name].length <= 1) setError({ ...error, [name]: 'You must select an option' })
    setInfo({ ...info, [name]: [...info[name].filter(elem => elem !== value)] })
  }

  function handleBlur(event) {
    const { name } = event.target
    if (info[name].length === 0) setError({ ...error, [name]: 'You must select an option' })
    else setError({ ...error, [name]: 'ok' })
  }
  function handleSubmit(event) {
    event.preventDefault()

    const createGame = {
      game: {
        name: info.nameGame,
        description: info.description,
        platforms: [],
        background_image: info.image,
        released: info.released,
        rating: info.rating,
        GenreId: []
      }
    }
  }

  return (
    <div className={styles.container}>
      <form className={styles.getData} onSubmit={handleSubmit}>
        <h2>Video Game Information</h2>
        <small>Fields marked with "<strong>*</strong>" are required</small>
        <label> <input type='text' key='nameGame' name='nameGame'
          value={info.nameGame} onChange={handleChange} placeholder="Game's name" />  *</label>
        <small>{error.nameGame}</small>

        <label> <input type='text' key='image' name='image'
          value={info.image} onChange={handleChange} placeholder="URL to image" />  * </label>
        <small>{error.image}</small>

        <label> <textarea type='text' key='description' name='description'
          value={info.description} onChange={handleChange} placeholder="A short description" />  * </label>
        <small>{error.description}</small>

        <label> <input type='text' key='released' name='released'
          value={info.released} onChange={handleChange} placeholder="Released... YYYY-MM-DD" />  * </label>
        <small>{error.released}</small>

        <label>
          <select name="rating" onChange={handleSelectChange} defaultValue={'select'} onBlur={handleBlur}>
            <option value="select" disabled>Give a score</option>
            <AllOption options={arrRatings} />
          </select>  *</label>
        <small>{error.rating}</small>

        <label>
          <select name="platform" onChange={handleSelectChange} value={'select'} onBlur={handleBlur} disabled={info.platform.length >= 5} >
            <option value="select" disabled>Select up to 5 platforms</option>
            <AllOption options={filterPlatforms} />
          </select>  *</label>
        <ShowSelected name='platform' values={info.platform} handleClick={handleClick} />
        <small>{error.platform}</small>

        <label>
          <select name="genre" onChange={handleSelectChange} value={'select'} onBlur={handleBlur} disabled={info.genre.length >= 5} >
            <option value="select" disabled>Select up to 5 genres</option>
            <AllOption options={filterGenres} />
          </select>  *</label>
        <ShowSelected name='genre' values={info.genre} handleClick={handleClick} />
        <small>{error.genre}</small>

        <button type='submit' disabled={!disabledSubmit}>Send video game info</button>
      </form>
      <section className={styles.viewData}>
        <h2>Video Game Card</h2>
        <div>{info.nameGame ? info.nameGame : "You haven't placed a video game name yet."}</div>
        <img src={info.image} />
        <div>{info.description ? info.description : "You haven't posted a video game description yet"}</div>
        <div>{info.released ? info.released : "You haven't set a video game release date yet."}</div>
        <div>{info.rating ? info.rating : "You have not placed a rating yet."}</div>
        <div>{info.platform.length ? info.platform : "You haven't chosen a platform yet."}</div>
        <div>{info.genre.length ? info.genre : "You haven't chosen a genre yet."}</div>
      </section>
    </div >
  )
}

export default CreateGameForm