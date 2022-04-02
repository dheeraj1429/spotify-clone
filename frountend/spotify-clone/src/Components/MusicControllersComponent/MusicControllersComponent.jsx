import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectedMusic, playButtonCartELm } from "../../Redux/Action/action";
import { musicInfoData, playMusic, pauseMusic, ChangePrev, ChangeToNext, dataAboutAudio } from "./MusicHandler";
import SeekBarComponent from "../SeekBarComponent/SeekBarComponent";
import { backEndUrl } from "../../Util/Info";
import { isPlayHandler, prevImageInfoHandler, librarySong } from "../../Redux/Action/action";
import { useLocation } from "react-router";

import "./MusicControllersComponent.css";

function MusicControllersComponent({ data, musicAllData }) {
    const dispatch = useDispatch();
    const location = useLocation();

    const selector = useSelector((state) => state.userStoreData.SelectedMusic);
    const IsPlay = useSelector((state) => state.userStoreData.IsPlay);

    const [AllMusic, setAllMusic] = useState(null);
    const [MusicDuration, setMusicDuration] = useState(0);
    const [MusicCurrentTime, setMusicCurrentTime] = useState(0);
    const [CurrentMusicElm, setCurrentMusicElm] = useState(0);
    const [BackEndUrl, setBackEndUrl] = useState(null);

    // grab the aduio element
    const audioElmDiv = document.querySelector(".audio_div_elm");
    const audioDurationControll = document.querySelector(".audio_controlle_elm");
    const playButton = document.querySelector(".playButton");

    // set the current time and current song duration
    const getDataAboutMusic = function (elem) {
        dataAboutAudio(elem, audioDurationControll, setCurrentMusicElm, setMusicCurrentTime);
        // when the playlist is over the restart the playlist
        if (audioElmDiv.currentTime === audioElmDiv.duration && CurrentMusicElm === musicAllData.length - 1) {
            setCurrentMusicElm(0);
        }
    };

    const handleLoadMetadata = function (elment) {
        const { duration } = elment.target;
        let crTotal = musicInfoData(duration);

        setMusicDuration(crTotal);
    };

    // song play and pause function
    const PlaySongHandler = function (e) {
        const target = e.currentTarget;

        if (IsPlay === false) {
            playMusic(target, IsPlay, audioElmDiv);
            dispatch(isPlayHandler(true));
        } else {
            pauseMusic(target, IsPlay, audioElmDiv);
            dispatch(isPlayHandler(false));
        }
    };

    // change song to prev current song - prev
    const ChangeToNextHandler = function () {
        // if the user click on the next button then change song to next and auto play the music
        ChangePrev(CurrentMusicElm, AllMusic, setCurrentMusicElm);
        // autoPlayMusic(audioElmDiv, IsPlay, playButton, dispatch, isPlayHandler);
        playMusic(playButton, IsPlay, audioElmDiv, dispatch, isPlayHandler);
        // if the user change the music then store the next music id. for handling the current music card
        dispatch(
            playButtonCartELm(musicAllData[CurrentMusicElm === musicAllData.length - 1 ? 0 : CurrentMusicElm + 1]._id)
        );
        // set the prev image by clicking on the next button
        dispatch(
            prevImageInfoHandler(
                `${BackEndUrl ? BackEndUrl : null}/CoverImage/${
                    musicAllData[CurrentMusicElm === musicAllData.length - 1 ? 0 : CurrentMusicElm + 1].songCover
                }`
            )
        );
    };

    // change songe to next current song + next
    const ChangeToPrevHandler = function () {
        // if the user click on the prev button then change song to next and auto play the music
        ChangeToNext(CurrentMusicElm, AllMusic, setCurrentMusicElm);
        // autoPlayMusic(audioElmDiv, IsPlay, playButton, dispatch, isPlayHandler);
        playMusic(playButton, IsPlay, audioElmDiv, dispatch, isPlayHandler);
        dispatch(
            playButtonCartELm(musicAllData[CurrentMusicElm === 0 ? musicAllData.length - 1 : CurrentMusicElm - 1]._id)
        );
        dispatch(
            prevImageInfoHandler(
                `${BackEndUrl ? BackEndUrl : null}/CoverImage/${
                    musicAllData[CurrentMusicElm === 0 ? musicAllData.length - 1 : CurrentMusicElm - 1].songCover
                }`
            )
        );
    };

    // songs duration handler
    const ChangeRangeHandler = function (e) {
        // set the range value to audio duration then controll the aduio aurrent time with the range value.
        e.target.max = audioElmDiv.duration;
        const value = e.target.value;
        audioElmDiv.currentTime = value;
    };

    // checking the audio is playing or note
    const CheckAudioPlaying = function () {
        playMusic(playButton, IsPlay, audioElmDiv, dispatch, isPlayHandler);
        dispatch(isPlayHandler(true));

        if (location.pathname === "/Your-Library") {
            dispatch(librarySong(true));
        } else if (location.pathname === "/") {
            dispatch(librarySong(false));
        }
    };

    const CheckAudioPause = function () {
        pauseMusic(playButton, IsPlay, audioElmDiv, dispatch, isPlayHandler);
        dispatch(isPlayHandler(false));

        if (location.pathname === "/Your-Library") {
            dispatch(librarySong(false));
        }
    };

    useEffect(() => {
        if (musicAllData) {
            dispatch(selectedMusic(musicAllData[CurrentMusicElm]));
        }
    }, [CurrentMusicElm]);

    useEffect(() => {
        if (selector) {
            const selectedMusicCard = musicAllData.findIndex((el) => el._id === selector._id);
            setCurrentMusicElm(selectedMusicCard);
            dispatch(isPlayHandler(true));
        }
    }, [selector]);

    useEffect(() => {
        if (audioElmDiv) {
            if (IsPlay === true) {
                playMusic(playButton, IsPlay, audioElmDiv);
            } else {
                pauseMusic(playButton, IsPlay, audioElmDiv);
            }
        }
    }, [IsPlay]);

    useEffect(() => {
        if (data || musicAllData) {
            setAllMusic(musicAllData);
        }
    }, [data]);

    useEffect(() => {
        setBackEndUrl(backEndUrl);
    }, []);

    return (
        <>
            <div className="music_controoles_div show_music_controlles">
                <div className="d-flex justify-content-center">
                    {selector && musicAllData ? (
                        <audio
                            src={`${BackEndUrl ? BackEndUrl : null}/music/${selector.musicPath}`}
                            controls
                            className="audio_div_elm"
                            onLoadedData={handleLoadMetadata}
                            onTimeUpdate={getDataAboutMusic}
                            onPlaying={CheckAudioPlaying}
                            onPause={CheckAudioPause}
                            allow="autoplay"
                            preload="none"
                            webkit-playsinline="true"
                            playsinline="true"
                        ></audio>
                    ) : musicAllData ? (
                        <audio
                            src={`${BackEndUrl ? BackEndUrl : null}/music/${musicAllData[0].musicPath}`}
                            controls
                            className="audio_div_elm"
                            onLoadedData={handleLoadMetadata}
                            onTimeUpdate={getDataAboutMusic}
                        ></audio>
                    ) : null}

                    <div className="controlles_buttons_div d-flex align-items-center">
                        {/* <i class="fas fa-random"></i> */}
                        <i
                            class="fas fa-angle-left"
                            onClick={(e) => {
                                ChangeToPrevHandler(e);
                            }}
                            data-target="prevButton"
                        ></i>
                        <div>
                            <i
                                class="fas fa-play playButton"
                                onClick={(e) => {
                                    PlaySongHandler(e);
                                }}
                                data-target="play"
                            ></i>
                        </div>
                        <i
                            class="fas fa-angle-right"
                            onClick={(e) => {
                                ChangeToNextHandler(e);
                            }}
                            data-target="nextButton"
                        ></i>
                        {/* <i class="fas fa-repeat"></i> */}
                    </div>
                </div>
                <div className="music_info_div">
                    <p>{MusicCurrentTime}</p>
                    <SeekBarComponent change={ChangeRangeHandler} />
                    <p>{MusicDuration}</p>
                </div>
            </div>
        </>
    );
}

export default MusicControllersComponent;
