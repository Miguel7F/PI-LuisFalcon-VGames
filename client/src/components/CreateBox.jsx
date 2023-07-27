

function CreateBox({ iType, iName,iValue, handleChange, pholder }) {
    return (
        <label>
            <input
                type={iType}
                key={iName}
                name={iName}
                value={iValue}
                onChange={handleChange}
                placeholder={pholder} />* </label>
    )
}

export default CreateBox