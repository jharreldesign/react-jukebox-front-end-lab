const TrackDetail = (props) => {
    if (!props.selected)
      return (
        <div>
          <h1>No track details</h1>
        </div>
      );
  
    return (
      <>
        <h1>Track Details</h1>
        <div>
          <h1>{props.selected.title} by {props.selected.artist}</h1>
        </div>
      </>
    );
  };
  
  export default TrackDetail;
  