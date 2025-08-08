import '../styles.css'

function TrackLabels() {
    return (
        <div className="headerRow">
            <h1>Experience</h1>
            <div className="track-labels">
                {/* <div className="track-id">#</div>
                <div className="track-name">Title</div>
                <div className="track-type">Genre</div> 
                <div className="track-date">Date</div> */}
                <div>#</div>
                <div>Title</div>
                <div>Genre</div> 
                <div>Date</div>
                
            </div>
            {/* <hr className='line'></hr> */}
            
        </div>
    );
}

export default TrackLabels;