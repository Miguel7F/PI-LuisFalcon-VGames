

function DetailCard({ id, name, background_image, platformsName, description, released, rating, genresName }) {
    return (
        <section>
            <div>{id}</div>
            <div>{name}</div>
            <div>{background_image}</div>
            <div>{platformsName}</div>
            <div>{description}</div>
            <div>{released}</div>
            <div>{rating}</div>
            <div>{genresName}</div>
        </section>
    )
}

export default DetailCard