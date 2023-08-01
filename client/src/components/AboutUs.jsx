import perfil from '../assets/Perfil.jpg'
import styles from '../styles/aboutUs.module.css'

function AboutUs() {
  return (
    <div className={styles.container}>
      <div className={styles.containerText}>
        <p>Mi nombre es Luis Falcón. Natural de Perú. Siempre me atrajo la programación y estoy en proceso de lograr esa meta.</p>
        <p>Este proyecto se establece como una integración de todos los conocimientos adquiridos en Henry en la carrera Full Stack Developer</p>
        <p>Para este proyecto se están aplicando las tecnologías de HTML, CSS, JS, REACT, REACT-REDUX, NODE JS, SEQUELIZE, POSTGRESQL .</p>
        <p>La API consumida para este proyecto se encuentra en <a href="https://rawg.io/apidocs" target="_blank" rel="noreferrer">RAWG API</a></p>
      </div>

      <div className={styles.containerImg}>
        <a target="_blank" rel="noreferrer">
          <img className={styles.image} src={perfil} alt="Logo de Henry" />
        </a>
      </div>
    </div>
  )
}

export default AboutUs