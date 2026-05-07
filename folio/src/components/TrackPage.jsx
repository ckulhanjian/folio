import { useParams } from 'react-router-dom';
// import '../styles.css'

function TrackPage(props) {
  const { id } = useParams();

  return (
    <div className='track-details'>
      <h2>{props.track-name}</h2>
      <p>Showing details for track ID: {id}</p>
      {/* Render more info here */}
    </div>
  );
}

export default TrackPage;