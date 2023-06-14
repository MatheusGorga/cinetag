import styles from './Banner.module.css';
import logo from '../../imagens/banner-home.png'
 
function Banner({ imagem }) {
    return (
        <div className={styles.capa}
            style={{ backgroundImage: `url(${logo})`}}>

            </div>
    )
}

export default Banner;