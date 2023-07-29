
function ShowSelected({ name, values, handleClick }) {
    return (
        <>
            {values && values.map((elem) => (
                <button key={elem} name={name} value={elem} onClick={handleClick}>{elem}❌</button>
            ))}
        </>
    )
}

export default ShowSelected