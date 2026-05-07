 import { useState } from 'react'
import Track from './Track.jsx'
import TrackLabels from './TrackLabels.jsx';
import d from '../assets/default.png'

// need to import photos / videos

function Playlist({tracks}) {
    const styleMap = {
        'Project': { bg: 'blue', dot: 'lightblue' },
        'Design Team': { bg: 'red', dot: 'lightred' },
        'Teaching Assistant': { bg: 'green', dot: 'lightgreen' }
    };

    const [hoveredTrack, setHoveredTrack] = useState(null);
    // const [hoveredIndex, setHoveredIndex] = useState(null);

    const tracklist = tracks.map((track, index) => {
        const albumType = track.album;
        const colors = styleMap[albumType] || { bg: 'grey', dot: 'lightgray' };

        return (
            <Track
                key={index}
                id={index + 1}
                name={track.name}
                type={track.type}
                organization={track.organization}
                position={track.position}
                startDate={track.startDate}
                endDate={track.endDate}
                onHover={() => setHoveredTrack(track)}
                onLeave={() => setHoveredTrack(null)}
                bgColor={colors.bg}   // Pass background color
                dotColor={colors.dot}
                isHovered={hoveredTrack === track}
            />
        );
    });

    return (
        <div className='playlist'>
                <h1 className='exp'>Experience</h1>
                <TrackLabels/>
                
                <div className='side-by-side'>
                    <div className="tracks">
                        {tracklist}
                    </div>

                    {hoveredTrack ? (
                        <div className='now-playing'>
                            <p className='proj-desc'>{hoveredTrack?.description}</p>
                        </div>
                    ) :
                    (
                    <div className="now-playing">
                        <img src={d} style={{
                            height: '300px'
                        }}/>
                    </div>)
                    }

                
            </div>


            {hoveredTrack && (


                <div className='now-playing-bar' style={{ 
                backgroundColor: styleMap[hoveredTrack.album]?.bg || 'grey' }}>
                    <div className="now-playing-content">
                        <ul>
                            <li>
                                {/* <span class='hover-now'>Now Playing:</span> */}
                                <span className='hover-name'>{hoveredTrack.name}</span>
                                <span class='hover-name'>{hoveredTrack.type}</span>
                                <span class='hover-name'>{hoveredTrack.position}</span>
                            </li>
                            <li>
                                Currently Playing:
                            </li>
                        </ul>
                        <ul>
                            <li>
                                {/* <span class='hover-now'>Now Playing:</span> */}
                                <span className='hover-name'>{hoveredTrack.name}</span>
                                <span class='hover-name'>{hoveredTrack.type}</span>
                                <span class='hover-name'>{hoveredTrack.position}</span>
                            </li>
                            <li>
                                <span>Currently Playing:</span>
                            </li>
                        </ul>
                    </div>

                    
                </div>
            )}



            
        </div>
    );
}

export default Playlist;