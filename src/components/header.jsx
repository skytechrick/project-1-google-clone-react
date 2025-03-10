import "../css/header.css";
import rickImg from "../img/rickImg.jpg";
import appsIconHead from "../img/appsIconHead.png";
import filterImg from "../img/filterImg.svg";

export default function Header() {
    return (
        <header>
            <div className="head-left">
                <a href="/#">About</a>
                <a href="/#">Store</a>
            </div>
            <div className="head-right">
                <div className="mail-image">
                    <a href="/#" style={{marginRight: "5px"}}>Gmail</a>
                    <a href="/#">Images</a>
                </div>
                <div className="head-icon-div filter-head">
                    <img src={filterImg} alt="Filter icon"/>
                </div>
                <div className="head-icon-div apps-head">
                    <img src={appsIconHead} alt="Apps icon" className="head-icon" />
                </div>
                <div className="profile-logo">
                    <img src={rickImg} alt="Profile logo" />
                </div>

            </div>
            
        </header>
    );
};