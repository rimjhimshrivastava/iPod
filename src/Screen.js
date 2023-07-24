import './Screen.css';
import Header from './Header';
import ScreenMenu from './ScreenMenu';
function Screen(){
    return(
        <div className="screen">
            < Header />
            <ScreenMenu />
        </div>
    )
}

export default Screen;