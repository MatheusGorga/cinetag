
import Banner from "components/Banner";
import Titulo from "components/Titulo";
import Card from "components/Card";
import styles from './Inicio.module.css';
import { useEffect, useState } from "react";

//https://my-json-server.typicode.com/MatheusGorga/cinetag-api/videos
function Inicio() {

  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/MatheusGorga/cinetag-api/videos')
    .then(rs => rs.json())
    .then((dados) => {
      return setVideos(dados)
    })

  }, [])

  return (
    <>
      <Banner imagem="home" />
      <Titulo>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Titulo>

      <section className={styles.container}>
      {videos.map(video => {
        return (
          <Card {...video} key={video.id} />
        )
      })}
      </section>

    </>
  );
}

export default Inicio;
