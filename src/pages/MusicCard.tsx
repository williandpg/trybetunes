import React, { useState } from 'react';

function MusicCard({ song }: { song: any[] }) {
  const [favoriteMusic, setFavoriteMusic] = useState<boolean>(false);

  const handleFavoriteMusic = (event:
  { target: { checked: boolean |
  ((prevState: boolean) => boolean); }; }) => {
    setFavoriteMusic(event.target.checked);
  };

  return (
    <ul>
      {song.map((index) => {
        return (
          <li key={ index.trackId }>
            <p>{index.trackName}</p>
            <section>
              <audio data-testid="audio-component" src={ index.previewUrl } controls>
                <track kind="captions" />
                O seu navegador não suporta o elemento
                {' '}
                <code>audio</code>
              </audio>
              <label
                htmlFor="favorite"
                data-testid={ `checkbox-music-${index.trackId}` }
              >
                { favoriteMusic
                  ? <img src="/src/images/checked_heart.png" alt="favorite" />
                  : <img src="/src/images/empty_heart.png" alt="favorite" /> }
              </label>
              <input
                type="checkbox"
                id="favorite"
                name="favorite"
                onChange={ handleFavoriteMusic }
              />
            </section>
          </li>
        );
      })}
    </ul>
  );
}

export default MusicCard;
