import "./media.scss";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import CollectionsIcon from "@mui/icons-material/Collections";
import MicIcon from "@mui/icons-material/Mic";

function Media() {
    return (
        <div className="media">
            <CameraAltIcon className="media__icon" />
            <CollectionsIcon className="media__icon" />
            <MicIcon className="media__icon" />
        </div>
    );
}

export default Media;
