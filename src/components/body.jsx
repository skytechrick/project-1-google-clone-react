import "../css/body.css";

import googleTextBigImage from "../img/googleTextBigImage.png";
import searchIcon from "../img/searchIcon.svg";
import searchClose from "../img/close.svg";
import micIcon from "../img/micIcon.svg";
import cameraPhotoIcon from "../img/cameraPhotoIcon.svg";

export default function Body() {
    return (
        <div className="body-container">
            <div className="google-text-big-image">
                <img src={googleTextBigImage} alt="Google big image" />
            </div>

            <div className="search-bar">
                <div className="search-bar-container">
                    <div className="search-icon">
                        <img src={searchIcon} alt="Search icon" />
                    </div>
                    <div className="search-input">
                        <input autoFocus type="text" placeholder=" " autoComplete="off" spellCheck="false"  />
                    </div>

                    <div className="search-close">
                        <img src={searchClose} alt="close image" />
                    </div>

                    <div className="search-mic">
                        <img src={micIcon} alt="Mic icon" />
                    </div>

                    <div className="search-camera-photo">
                        <img src={cameraPhotoIcon} alt="Camera photo" />
                    </div>


                </div>

            </div>

            
            <div>

            </div>

            <div>
                
            </div>
            
        </div>
    );
};