
function filterSortGames(state) {
    const { games, genre, direction, type, source, nameGame } = state

    //Filtrando por origen (API o DATABASE)
    const filterBySource = source === 'All' ? games : games.filter((element) => element.source === source)

    //Filtramos por nombre evitando considerar espacios a los costados
    const nameFormated = nameGame.trim().toLowerCase()
    const filterByName = filterBySource.filter(({ name }) => name.toLowerCase().includes(nameFormated))

    //Filtrando por género: (19 géneros)
    const filterByGenre = genre === 'All' ? filterByName : filterByName.filter(({ genreName }) => genreName.includes(genre))

    //Ordenando direction (up -down) y por tipo (Rating o Name)
    const sortByType = filterByGenre.sort((a, b) => {
        if (type === 'rating') {
            return direction === 'up' ? a[type] - b[type] : b[type] - a[type]
        }
        else {
            return direction === 'up' ? a[type].localeCompare(b[type]) : b[type].localeCompare(a[type])
        }
    })
    return sortByType
}

export default filterSortGames;