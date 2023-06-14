import { useFavoritoContext } from "contextos/Favoritos";
import styles from "./Card.module.css";
import iconeFavoritar from "./favoritar.png";
import desfavoritar from "./desfavoritar.png";
import { Link } from "react-router-dom";

function Card({ id, titulo, capa }) {
  const { favorito, adicionarFavorito } = useFavoritoContext();

  const ehFavortio = favorito.some((item) => item.id === id);

  return (
    <div className={styles.container}>
      <Link className={styles.link} to={`/${id}`}>
        <img src={capa} alt={titulo} className={styles.capa} />
        <h2>{titulo}</h2>
      </Link>

      <img
        src={!ehFavortio ? iconeFavoritar : desfavoritar}
        alt="Favoritar filme"
        className={styles.favoritar}
        onClick={() => adicionarFavorito({ id, titulo, capa })}
      />
    </div>
  );
}

export default Card;
