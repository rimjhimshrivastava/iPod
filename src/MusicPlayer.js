import "./MusicPlayer.css";

const MusicPlayer= (props) => {
  return (
    <div className="music-player">
        <audio id="audio" src={props.song} type="audio/mpeg" controls autoPlay loop></audio>  
    </div>
  );
};
export default MusicPlayer;
