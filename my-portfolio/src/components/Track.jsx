import { useNavigate } from 'react-router-dom';

function Track(props) {
  // const navigate = useNavigate();

  // const styleMap = {
  //   Certificate: { bg: 'blue', dot: 'lightblue' },
  //   Program: { bg: 'green', dot: 'lightgreen' },
  //   Project: { bg: 'purple', dot: 'lavender' },
  //   Leadership: { bg: 'pink', dot: 'lightpink' },
  // };

  // const albumType = props.album;
  // const colors = styleMap[albumType] || { bg: 'grey', dot: 'lightgray' };

  return (
    <div
      className="track"
      onMouseEnter={props.onHover}
      onMouseLeave={props.onLeave}
      // onClick={handleClick}
    >
      <div className="track-id">{props.isHovered ? '▶' : props.id}</div>
      <div className="track-name">{props.name}</div>
      <div className="track-type">
        <span className="track-badge" style={{ backgroundColor: props.bgColor }}>
          <span className="track-dot" style={{ backgroundColor: props.dotColor }}></span>
          {props.album}
        </span>
      </div>
      <div className="track-date">{props.date}</div>
    </div>
  );
}

export default Track;