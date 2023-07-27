import styles from '../styles/home.module.css';
import getGenres from '../redux/actions/getGenreAction';
import getGames from '../redux/actions/getGamesAction';
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Pages from './Pages'
import SearchBar from './SearchBar';
import SortBar from './SortBar';
import FilterBar from './FilterBar';

function Home() {
  console.log('ingresa a home');
  const dispatch = useDispatch()
  const genres = useSelector(state => state.genres)
  const games = useSelector(state => state.games)
  
  useEffect(() => {
    try {
      !genres.length && dispatch(getGenres())
      !games.length && dispatch(getGames())
    } catch (error) {
      alert(error.message)
    }
  }, [])

  return (
    <section className={styles.body}>
      <div className={styles.bar}>
        <FilterBar />
        <SearchBar />
        <SortBar />
      </div>
      <div className={styles.viewCards}>
        <Pages/>
      </div>
    </section>
  )
}

export default Home