import { useSelector } from 'react-redux';
import { PAGE_SIZE } from '../constants/constants';
import { useEffect, useState } from 'react';
import Pagination from './Pagination';
import Cards from './Cards';

function Pages() {
    const modificated = useSelector(state => state.modificated)
    const totalPages = Math.ceil(modificated.length / PAGE_SIZE)
    const arrPages = Array.from({ length: totalPages }, (_, i) => i + 1)

    const [actualPage, setActualPage] = useState(1)
    const showGames = modificated.slice((actualPage - 1) * PAGE_SIZE, actualPage * PAGE_SIZE)

    function handleClick(page) {
        switch (page) {
            case 'back':
                setActualPage(actualPage - 1)
                break;
            case 'next':
                setActualPage(actualPage + 1)
                break;
            default:
                setActualPage(page)
                break;
        }
    }
    useEffect(() => {
        setActualPage(1)
    }, [modificated])


    return (
        <section>
            <Pagination arrPages={arrPages} actualPage={actualPage} totalPages={totalPages} handleClick={handleClick} />
            <Cards showGames={showGames} />
            <Pagination arrPages={arrPages} actualPage={actualPage} totalPages={totalPages} handleClick={handleClick} />
        </section>
    )
}

export default Pages