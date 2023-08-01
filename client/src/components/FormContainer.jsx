import AllOption from './AllOption';
import ShowSelected from './ShowSelected';
import styles from '../styles/formContainer.module.css'

function FormContainer({ info, error, arrRatings, disabledSubmit, filterPlatforms, filterGenres, handleChange, handleSelectChange, handleClick, handleBlur, handleSubmit }) {
  return (
    <form className={styles.getData} onSubmit={handleSubmit}>
      <h2>Video Game Information</h2>
      <section className={styles.fields}>
        <label> <input type='text' key='nameGame' name='nameGame'
          value={info.nameGame} onChange={handleChange} placeholder="Game's name" />  *</label>
        <small>{error.nameGame==='ok'?null:error.nameGame}</small>

        <label> <input type='text' key='image' name='image'
          value={info.image} onChange={handleChange} placeholder="URL to image" />  * </label>
        <small>{error.image==='ok'?null:error.image}</small>

        <label> <textarea type='text' key='description' name='description'
          value={info.description} onChange={handleChange} placeholder="A short description" />  * </label>
        <small>{error.description==='ok'?null:error.description}</small>

        <label> <input type='text' key='released' name='released'
          value={info.released} onChange={handleChange} placeholder="Released... YYYY-MM-DD" />  * </label>
        <small>{error.released==='ok'?null:error.released}</small>

        <label>
          <select name="rating" onChange={handleSelectChange} defaultValue={'select'} onBlur={handleBlur}>
            <option value="select" disabled>Give a score</option>
            <AllOption options={arrRatings} />
          </select>  *</label>
        <small>{error.rating==='ok'?null:error.rating}</small>

        <label>
          <select name="platform" onChange={handleSelectChange} value={'select'} onBlur={handleBlur} disabled={info.platform.length >= 5} >
            <option value="select" disabled>Select up to 5 platforms</option>
            <AllOption options={filterPlatforms} />
          </select>  *</label>
        <ShowSelected name='platform' values={info.platform} handleClick={handleClick}/>
        <small>{error.platform==='ok'?null:error.platform}</small>

        <label>
          <select name="genre" onChange={handleSelectChange} value={'select'} onBlur={handleBlur} disabled={info.genre.length >= 5} >
            <option value="select" disabled>Select up to 5 genres</option>
            <AllOption options={filterGenres} />
          </select>  *</label>
        <ShowSelected name='genre' values={info.genre} handleClick={handleClick} />
        <small>{error.genre==='ok'?null:error.genre}</small>
        <small>Fields marked with <strong>*</strong> are required</small>
      </section>
      <button type='submit' disabled={!disabledSubmit} className={styles.button}>Send video game info</button>
    </form>
  )
}

export default FormContainer