import './Wheel.css';

function Wheel(){
    return(
        <div className="wheel">
            <span className="menu-button">MENU</span>
            <button className="select-button">SELECT</button>
            <span className="material-symbols-outlined play-pause">play_pause</span>
            <span className="material-symbols-outlined fast-forward">fast_forward</span>
            <span className="material-symbols-outlined fast-rewind">fast_rewind</span>
        </div>
    )
}

export default Wheel;