function AllOption({options}) {
    return (
        <>
            {options && options.map(({ name }) => (
                <option key={name} value={name}>{name}</option>
            ))}
        </>
    )
}

export default AllOption