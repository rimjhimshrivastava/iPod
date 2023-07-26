import "./ScreenMenu.css";

// list of items in screen menu
const ScreenMenu = () => {
  return (
    <div className="screen-menu">
      <ul>
        <li id="li-1" className="active">
          Games
        </li>
        <li id="li-2">Music</li>
        <li id="li-3">Videos</li>
        <li id="li-4">Photos</li>
        <li id="li-5">Podcast</li>
        <li id="li-6">Settings</li>
      </ul>
    </div>
  );
};
export default ScreenMenu;
