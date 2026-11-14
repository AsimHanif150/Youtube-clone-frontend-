import "./VideoCard.css";

function VideoCard (props) {
 return (
        <div className = "video-card" >
          <img className = "thumbnail" src={props.thumbnail}  alt="video thumbnail"/>


        <div className = "video-info" >
          <img className = "channel-img" src={props.channelImg}  alt="channel"/>

        <div>
            <h4 className="video-title">{props.title}</h4>
            <p className="channel-name">{props.channel}</p>
            <p className="video-stats">{props.views} • {props.time}</p>
        </div>  
        </div>
        </div>
    )
} 

export default VideoCard;