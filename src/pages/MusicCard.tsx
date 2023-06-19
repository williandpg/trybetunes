function MusicCard({ song }: { song: any[] }) {
  return (
    <ul>
      {song.map((index) => {
        return (
          <li key={ index.trackId }>
            <p>{index.trackName}</p>
            <section>
              <audio data-testid="audio-component" src="{previewUrl}" controls>
                <track kind="captions" />
                O seu navegador não suporta o elemento
                {' '}
                <code>audio</code>
              </audio>
            </section>
          </li>
        );
      })}
    </ul>
  );
}

export default MusicCard;
