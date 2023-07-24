import styles from '../styles/home.module.css';
import getGenres from '../redux/actions/getGenreAction';
import getGames from '../redux/actions/getGamesAction';
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { PAGE_SIZE } from '../redux/actions/constants';
import Cards from './Cards';
import SearchBar from './SearchBar';
import SortBar from './SortBar';
import FilterBar from './FilterBar';
import Pagination from './Pagination';

function Home() {
  const dispatch = useDispatch()
  const genres = useSelector(state => state.genres)
  const games = useSelector(state => state.games)
  const pagination = useSelector(state => state.pagination)
  const totalPages = games.length ? Math.ceil(games.length / PAGE_SIZE) : 0;

  useEffect(() => {
    !genres.length && dispatch(getGenres())
    !games.length && dispatch(getGames())
  }, [])

  function onClickPage(event) {
    console.log("clickeado");
  }

  return (
    <section className={styles.body}>
      <div className={styles.bar}>
        <FilterBar genres={genres} />
        <SortBar />
        <SearchBar />
      </div>
      <div className={styles.viewCards}>
        {totalPages && <Pagination totalPages={totalPages} onClickPage={onClickPage} />}
        <Cards games={pagination} />
        {totalPages && <Pagination totalPages={totalPages} onClickPage={onClickPage} />}
      </div>
    </section>
  )
}

export default Home