import React from "react";
import MusicControllersComponent from "../MusicControllersComponent/MusicControllersComponent";
import SongInfoSmCartComponent from "../SongInfoSmCartComponent/SongInfoSmCartComponent";
import AudioExtraOptionComponent from "../AudioExtraOptionComponent/AudioExtraOptionComponent";
import { useSelector } from "react-redux";
import "./FooterPlayComponent.css";

function FooterPlayComponent() {
    const selector = useSelector((state) => state.userStoreData);

    return (
        <div className="play_footer_Component_div">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-12 col-sm-12 col-md-4">
                        {selector.SelectedMusic !== null ? (
                            <SongInfoSmCartComponent
                                data={selector.SelectedMusic}
                                musicAllData={selector.SongsMusicArrayList}
                            />
                        ) : null}
                    </div>
                    <div className="col-12 col-sm-12 col-md-4">
                        <MusicControllersComponent
                            data={selector.SelectedMusic}
                            musicAllData={selector.SongsMusicArrayList}
                        />
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 d-flex justify-content-end pe-4">
                        {selector.SelectedMusic ? <AudioExtraOptionComponent data={selector.SelectedMusic} /> : null}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterPlayComponent;
