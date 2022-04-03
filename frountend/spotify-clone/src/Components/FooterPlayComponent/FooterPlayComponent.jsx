import React, { useState } from "react";
import MusicControllersComponent from "../MusicControllersComponent/MusicControllersComponent";
import SongInfoSmCartComponent from "../SongInfoSmCartComponent/SongInfoSmCartComponent";
import AudioExtraOptionComponent from "../AudioExtraOptionComponent/AudioExtraOptionComponent";
import { useSelector } from "react-redux";
import "./FooterPlayComponent.css";

function FooterPlayComponent() {
    const selector = useSelector((state) => state.userStoreData);
    const [AudioVolume, setAudioVolume] = useState(100);

    const AudioControll = function (e) {
        let value = e.target.value;
        setAudioVolume(value);
    };

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
                            volume={AudioVolume}
                        />
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 d-flex justify-content-end pe-4">
                        {selector.SelectedMusic ? (
                            <AudioExtraOptionComponent
                                data={selector.SelectedMusic}
                                audioFunction={AudioControll}
                                value={AudioVolume}
                            />
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterPlayComponent;
