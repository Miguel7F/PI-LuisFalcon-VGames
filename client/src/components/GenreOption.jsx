import React from 'react'

function GenreOption({genres}) {
    return (
        <>
            {genres && genres.map(({ name }) => (
                <option key={name} value={name}>{name}</option>
            ))}
        </>
    )
}

export default GenreOption