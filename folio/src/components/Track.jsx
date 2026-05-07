import { useNavigate } from 'react-router-dom';

function Track(props) {
  return (
    <div
      className="track"
      onMouseEnter={props.onHover}
      onMouseLeave={props.onLeave}
    >
      <div className="track-id">{props.isHovered ? '▶' : props.id}</div>
      <div className="track-name">{props.name}</div>
      <div className="track-organization">{props.organization}</div>
      <div className="track-type">
        <span className="track-badge" style={{ backgroundColor: props.bgColor }}>
          <span className="track-dot" style={{ backgroundColor: props.dotColor }}></span>
          {props.type}
        </span>
      </div>
      <div className="track-start-date">{props.startDate}</div>
      <div className="track-end-date">{props.endDate}</div>
    </div>
  );
}

export default Track;