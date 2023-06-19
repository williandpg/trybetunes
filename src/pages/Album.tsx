import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getMusics from '../services/musicsAPI';
import MusicCard from './MusicCard';

function Album() {
  const [musicSong, setMusicSong] = useState<any[]>([]);
  const { id } = useParams();
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const fetchMusic = async () => {
      setLoad(true);
      const response = await getMusics(id as string);
      const results = response.filter((index) => index.kind === 'track');
      setMusicSong(results);
      setLoad(false);
    };
    fetchMusic();
  }, [id]);

  if (load) return <p>Carregando...</p>;

  return (
    <>
      <h2 data-testid="album-name">Titulo do Album</h2>
      <h3 data-testid="artist-name">Nome do Artista</h3>
      { musicSong.length > 0 ? (

        <MusicCard musicSong={ musicSong } />
      ) : (
        <p>Não há músicas disponíveis</p>
      )}
    </>
  );
}

export default Album;
