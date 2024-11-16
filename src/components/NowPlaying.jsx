const NowPlaying = ({ track, stopPlaying }) => {
    return (
      <div className="now-playing">
        <h2>Now Playing</h2>
        <p>
          <strong>{track.title}</strong> by <strong>{track.artist}</strong>
        </p>
        <button onClick={stopPlaying}>Stop Playing</button> {/* Stop button */}
      </div>
    );
  };
  
  export default NowPlaying;
  