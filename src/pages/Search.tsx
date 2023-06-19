import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import { AlbumType } from '../types';

function Search() {
  const [band, setBand] = useState('');
  const [load, setLoad] = useState(false);
  const [albums, setAlbums] = useState < AlbumType[]>([]);
  const [index, setIndex] = useState('');

  const handleSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setBand(value);
  };

  const handleLoading = async () => {
    setLoad(true);
    setIndex(band);
    setBand('');
    const response = await searchAlbumsAPI(band);
    setAlbums(response);
    setLoad(false);
  };

  if (load) return <p>Carregando...</p>;

  return (
    <>
      <h1> Pesquisa </h1>
      <form>
        <label htmlFor="name">
          <input
            type="text"
            id="name"
            data-testid="search-artist-input"
            value={ band }
            onChange={ handleSubmit }
            placeholder="Nome do Artista"
          />
        </label>
        <button
          type="button"
          data-testid="search-artist-button"
          onClick={ handleLoading }
          disabled={ band.length <= 1 }
        >
          Pesquisar
        </button>
      </form>
      <section>
        {albums.length > 0
          ? (
            <div>
              <p>{`Resultado de álbuns de: ${index}`}</p>
              <ul>
                {albums.map((albumDisco) => (
                  <li key={ albumDisco.collectionId }>
                    <NavLink
                      data-testid={ `link-to-album-${albumDisco.collectionId}` }
                      to={ `/album/${albumDisco.collectionId}` }
                    >
                      {albumDisco.collectionName}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>)
          : <h1>Nenhum álbum foi encontrado</h1>}
      </section>
    </>
  );
}

export default Search;
