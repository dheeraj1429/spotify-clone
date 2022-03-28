import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectedMusic } from '../../Redux/Action/action';
import {
    musicInfoData,
    playMusic,
    pauseMusic,
    ChangePrev,
    ChangeToNext,
    autoPlayMusic,
    dataAboutAudio,
} from './MusicHandler';
import SeekBarComponent from '../SeekBarComponent/SeekBarComponent';

import './MusicControllersComponent.css';

function MusicControllersComponent({ data, musicAllData }) {
    const dispatch = useDispatch();
    const selector = useSelector((state) => state.userStoreData.SelectedMusic);

    const [AllMusic, setAllMusic] = useState(null);
    const [IsPlay, setIsPlay] = useState(false);
    const [MusicDuration, setMusicDuration] = useState(0);
    const [MusicCurrentTime, setMusicCurrentTime] = useState(0);
    const [CurrentMusicElm, setCurrentMusicElm] = useState(0);

    // grab the aduio element
    const audioElmDiv = document.querySelector('.audio_div_elm');
    const audioDurationControll = document.querySelector('.audio_controlle_elm');
    const playButton = document.querySelector('.playButton');

    // set the current time and current song duration
    const getDataAboutMusic = function (elem) {
        dataAboutAudio(elem, audioDurationControll, setCurrentMusicElm, setMusicCurrentTime);
        // when the playlist is over the restart the playlist
        if (
            audioElmDiv.currentTime === audioElmDiv.duration &&
            CurrentMusicElm === musicAllData.length - 1
        ) {
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
        if (!IsPlay) {
            playMusic(target, setIsPlay, audioElmDiv);
        } else {
            pauseMusic(target, setIsPlay, audioElmDiv);
        }
    };

    // change song to prev current song - prev
    const ChangeToNextHandler = function () {
        // if the user click on the next button then change song to next and auto play the music
        ChangePrev(CurrentMusicElm, AllMusic, setCurrentMusicElm);
        autoPlayMusic(audioElmDiv, setIsPlay, playButton);
    };

    // change songe to next current song + next
    const ChangeToPrevHandler = function () {
        // if the user click on the prev button then change song to next and auto play the music
        ChangeToNext(CurrentMusicElm, AllMusic, setCurrentMusicElm);
        autoPlayMusic(audioElmDiv, setIsPlay, playButton);
    };

    // songs duration handler
    const ChangeRangeHandler = function (e) {
        e.target.max = audioElmDiv.duration;
        const value = e.target.value;
        audioElmDiv.currentTime = value;
    };

    useEffect(() => {
        if (musicAllData) {
            dispatch(selectedMusic(musicAllData[CurrentMusicElm]));
        }
    }, [CurrentMusicElm]);

    useEffect(() => {
        if (audioElmDiv) {
            playMusic(playButton, setIsPlay, audioElmDiv);
        }

        if (selector) {
            const selectedMusicCard = musicAllData.findIndex((el) => el._id === selector._id);
            setCurrentMusicElm(selectedMusicCard);
        }
    }, [selector]);

    useEffect(() => {
        if (data || musicAllData) {
            setAllMusic(musicAllData);
        }
    }, [data]);

    return (
        <>
            <div className="music_controoles_div show_music_controlles">
                <div className="d-flex justify-content-center">
                    {selector ? (
                        <audio
                            src={`http://localhost:8000//music/${selector.musicPath}`}
                            controls
                            className="audio_div_elm"
                            onLoadedData={handleLoadMetadata}
                            onTimeUpdate={getDataAboutMusic}
                        ></audio>
                    ) : musicAllData ? (
                        <audio
                            src={`http://localhost:8000//music/${musicAllData[0].musicPath}`}
                            controls
                            className="audio_div_elm"
                            onLoadedData={handleLoadMetadata}
                            onTimeUpdate={getDataAboutMusic}
                        ></audio>
                    ) : null}

                    <div className="controlles_buttons_div d-flex align-items-center">
                        <i class="fas fa-random"></i>
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
                        <i class="fas fa-repeat"></i>
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
