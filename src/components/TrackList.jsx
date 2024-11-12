const TrackList = ({ trackList, updateSelected, handleFormView, handleEditTrack, handleDeleteTrack, isFormOpen }) => {
    const tracks = trackList.map((track) => (
      <div key={track._id}>
        <a onClick={() => updateSelected(track)}>
          <li>{track.title} by {track.artist}</li>
        </a>
        <button onClick={() => handleEditTrack(track)}>Edit</button>
        <button onClick={() => handleDeleteTrack(track._id)}>Delete</button>
      </div>
    ));
  
    return (
      <>
        <div>
          <h1>Track Name</h1>
          {!trackList.length ? <h2>No Tracks Yet!</h2> : <ul>{tracks}</ul>}
        </div>
        <button onClick={handleFormView}>
          {isFormOpen ? 'Close Form' : 'New Track'}
        </button>
      </>
    );
  };
  
  export default TrackList;
  