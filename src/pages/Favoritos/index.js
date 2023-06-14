import styles from './Favoritos.module.css';
import Banner from "components/Banner";
import Card from "components/Card";
import Titulo from "components/Titulo";
import { FavoritosContext } from 'contextos/Favoritos';
import { useContext } from 'react';


function Favoritos() {
    const { favorito} = useContext(FavoritosContext)

    return (
        <>
        <Banner imagem="favoritos" />
        <Titulo>
            <h1>Meus Favoritos</h1>
        </Titulo>

        <section className={styles.container}>
            {favorito.map(favorito => {
                return (
                <Card {...favorito} key={favorito.id} />
                )
            })}
      </section>


        </>
    )
}

export default Favoritos;