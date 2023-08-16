import styles from '../styles/createGame.module.css'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import getGenres from '../redux/actions/getGenreAction'
import getGames from '../redux/actions/getGamesAction';
import validation from '../services/validation';
import postGame from '../redux/actions/postGameAction';
import ViewCreate from './ViewCreate';
import FormContainer from './FormContainer';
import notFoundImage from '../assets/ImageNotFound.svg'

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
    const answer = validation(name, value,games)
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
  async function handleSubmit(event) {
    event.preventDefault()

    const createGame = {
      name: info.nameGame,
      description: info.description,
      background_image: info.image,
      released: info.released,
      rating: info.rating,
      PlatformId: info.platform.map(elememt => platforms?.find(({ name }) => name === elememt).id),
      GenreId: info.genre.map(elememt => genres?.find(({ name }) => name === elememt).id)
    }

    try {
      await postGame(createGame)
      dispatch(getGames())
      alert('The video game was successfully created')
      setInfo({
        nameGame: '',
        image: '',
        description: '',
        released: '',
        rating: '',
        platform: [],
        genre: [],
      })

      setError({
        nameGame: '',
        image: '',
        description: '',
        released: '',
        rating: '',
        platform: '',
        genre: '',
      })
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div className={styles.container}>
      <FormContainer
        info={info}
        error={error}
        arrRatings={arrRatings}
        disabledSubmit={disabledSubmit}
        filterPlatforms={filterPlatforms}
        filterGenres={filterGenres}
        handleChange={handleChange}
        handleSelectChange={handleSelectChange}
        handleClick={handleClick}
        handleBlur={handleBlur}
        handleSubmit={handleSubmit}
      />
      <ViewCreate info={info} notFoundImage={notFoundImage} />
    </div >
  )
}

export default CreateGameForm