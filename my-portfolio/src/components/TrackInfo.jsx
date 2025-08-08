import './styles.css'

function TrackInfo(props) {
    return (
        <div class="flex-col">
            <video 
            src='video.mp4'
            autoPlay
            loop
            muted/>
            <p>{props.description}</p>
        </div> 
    );
}

export default TrackInfo;