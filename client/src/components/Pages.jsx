import { useSelector } from 'react-redux';
import { PAGE_SIZE } from '../constants/constants';
import { useEffect, useState } from 'react';
import Pagination from './Pagination';
import Cards from './Cards';

function Pages() {
    const modificated = useSelector(state => state.modificated)
    const totalPages = Math.ceil(modificated.length / PAGE_SIZE)
    const arrPages = Array.from({ length: totalPages }, (_, i) => i + 1)

    const [currentPage, setCurrentPage] = useState(1)
    const showGames = modificated.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)

    function handleClick(page) {
        window.scrollTo({ top: 0, behavior: 'auto' });
        switch (page) {
            case 'back':
                setCurrentPage(currentPage - 1)
                break;
            case 'next':
                setCurrentPage(currentPage + 1)
                break;
            default:
                setCurrentPage(page)
                break;
        }
    }
    useEffect(() => {
        setCurrentPage(1)
    }, [modificated])

    return (
        <section>
            <Pagination arrPages={arrPages} currentPage={currentPage} totalPages={totalPages} handleClick={handleClick} />
            <Cards showGames={showGames} />
            <Pagination arrPages={arrPages} currentPage={currentPage} totalPages={totalPages} handleClick={handleClick} />
        </section>
    )
}

export default Pages