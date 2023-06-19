function MusicCard({ song }: { song: any[] }) {
  return (
    <ul>
      {song.map((index) => (
        <li key={ index.trackId }>
          <p>{index.trackName}</p>
          <audio data-testid="audio-component" src="{previewUrl}" controls>
            <track kind="captions" />
            O seu navegador não suporta o elemento
            {' '}
            <code>audio</code>
          </audio>
        </li>
      ))}
    </ul>
  );
}

export default MusicCard;
