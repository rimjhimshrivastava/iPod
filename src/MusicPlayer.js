import "./MusicPlayer.css";

//musicplayer where audio is fetched and played
const MusicPlayer= (props) => {
  return (
    <div className="music-player">
        <audio id="audio" src={props.song} type="audio/mpeg" controls autoPlay loop></audio>  
    </div>
  );
};
export default MusicPlayer;
