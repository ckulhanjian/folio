 import { useState } from 'react'
import Track from './Track.jsx'
import TrackLabels from './TrackLabels.jsx';
// import reactLogo from './assets/react.svg'

function Playlist({tracks}) {
    const styleMap = {
        Certificate: { bg: 'blue', dot: 'lightblue' },
        Program: { bg: 'green', dot: 'lightgreen' },
        Project: { bg: 'purple', dot: 'lavender' },
        'Design Team': { bg: 'hotPink', dot: 'lightpink' },
        'Teaching Assistant': { bg: 'indianred', dot: 'red' }
    };

    
    
    // console.log('Playlist props:', { album, tracks }); // Debug log
    // console.log('creating tracklist...')
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
                album={track.album}
                date={track.date}
                onHover={() => setHoveredTrack(track)}
                onLeave={() => setHoveredTrack(null)}
                bgColor={colors.bg}   // Pass background color
                dotColor={colors.dot}
                isHovered={hoveredTrack === track}
            />
        );
    });
    

    

    // console.log('Tracklist: ', { tracklist })

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
                            <video
                                src= {hoveredTrack?.link}
                                autoPlay
                                loop
                                muted
                                playsInline
                                style={{ width: '75%', height: 'auto', 
                                    borderRadius: '5px'
                             }}
                                />
                            <p className='proj-desc'>{hoveredTrack?.description}</p>
                        </div>
                    ) :
                    (
                    <div className="now-playing">
                        <img src="default2.png" style={{
                            height: '300px'
                        }}/>
                    </div>)
                    }

                
            </div>


            {hoveredTrack && (
                // console.log(hoveredTrack.bgColor)

                <div className='now-playing-bar' style={{ 
                backgroundColor: styleMap[hoveredTrack.album]?.bg || 'grey' }}>
                    {/* <div className="now-playing-buttons">
                        <span>⏮︎</span>
                        <span className='pause'>⏸︎</span>
                        <span>⏭︎</span>
                    </div> */}
                    <div className="now-playing-content">
                        <ul>
                            <li>
                                {/* <span class='hover-now'>Now Playing:</span> */}
                                <span className='hover-name'>{hoveredTrack.name}</span>
                                <span class='hover-name'>{hoveredTrack.album}</span>
                                <span class='hover-name'>{hoveredTrack.date}</span>
                            </li>
                            <li>
                                Currently Playing:
                            </li>
                        </ul>
                        <ul>
                            <li>
                                {/* <span class='hover-now'>Now Playing:</span> */}
                                <span className='hover-name'>{hoveredTrack.name}</span>
                                <span class='hover-name'>{hoveredTrack.album}</span>
                                <span class='hover-name'>{hoveredTrack.date}</span>
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