import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AlbumType, SongType } from '../types';
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
      const resultsType = response as unknown as { kind: string }[];
      const results = resultsType.filter((index) => index.kind === 'song');
      setMusicSong(results);
      setLoad(false);
    };
    fetchMusic();
  }, [id]);

  if (load) return <p>Carregando...</p>;

  return (
    <>
      <h2 data-testid="album-name">Collection Name</h2>
      <h3 data-testid="artist-name">Artist Name</h3>
      { musicSong.length > 0 ? (
        <MusicCard song={ musicSong } />
      ) : (
        <p>Erro</p>
      )}
    </>
  );
}

export default Album;
