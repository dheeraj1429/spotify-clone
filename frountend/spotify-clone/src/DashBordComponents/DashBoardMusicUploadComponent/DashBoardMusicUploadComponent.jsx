import React, { useState } from 'react';
import DashBoardHeadingComponent from '../DashBoardHeadingComponent/DashBoardHeadingComponent';
import SongUploadInputComponent from '../SongUploadInputComponent/SongUploadInputComponent';
import MusicUploadSelectOptionComponet from '../MusicUploadSelectOptionComponet/MusicUploadSelectOptionComponet';
import MusicTextAriaComponent from '../MusicTextAriaComponent/MusicTextAriaComponent';
import { useDispatch } from 'react-redux';
import MusicSelectCartComponent from '../MusicSelectCartComponent/MusicSelectCartComponent';
import axios from 'axios';
import CustomButtonComponent from '../../Components/CustomButtonComponent/CustomButtonComponent';

import './DashBoardMusicUploadComponent.css';

function DashBoardMusicUploadComponent() {
    const dispatch = useDispatch();
    const [MusicFile, setMusicFile] = useState({
        file: '',
        coverImage: '',
    });
    const [FileUploadValue, setFileUploadValue] = useState(0);
    const [MusicUpload, setMusicUpload] = useState({
        songArtist: '',
        songName: '',
        songType: '',
        tags: '',
        discription: '',
    });

    const changeHandler = function (e) {
        const name = e.target.name;
        const value = e.target.value;

        setMusicUpload({ ...MusicUpload, [name]: value });
    };

    const changeMusicFileHandler = function (e) {
        const data = e.target.files[0];
        const name = e.target.name;

        setMusicFile({ ...MusicFile, [name]: data });
    };

    const sendData = function (e) {
        e.preventDefault();

        const { songArtist, songName, songType, tags, discription } = MusicUpload;
        const file = MusicFile.file;
        const image = MusicFile.coverImage;

        const formData = new FormData();
        formData.append('file', file);
        formData.append('image', image);
        formData.append('songArtist', songArtist);
        formData.append('songName', songName);
        formData.append('songType', songType);
        formData.append('tags', tags);
        formData.append('discription', discription);

        const config = {
            onUploadProgress: (data) => {
                let uplodedValue = Math.round((100 * data.loaded) / data.total);
                setFileUploadValue(uplodedValue);
            },
        };

        const musicRef = axios.post('/music/upload', formData, config);
    };

    const resetSettings = function () {
        setMusicUpload({
            songArtist: '',
            songName: '',
            songType: '',
            tags: '',
            discription: '',
        });
        setMusicFile({ file: '' });
        setFileUploadValue(0);
    };

    return (
        <div className="dashboard_music_upload_div">
            <DashBoardHeadingComponent
                heading={'Upload Music'}
                ic={'fas fa-home-alt'}
                subHeading={'dashboard / upload music'}
            />

            <div className="upload_section_div">
                <form action="" onSubmit={sendData}>
                    <div className="d-flex">
                        <div className="w-75">
                            <MusicSelectCartComponent
                                name={'file'}
                                change={changeMusicFileHandler}
                                value={MusicFile.file}
                                ic={'fas fa-music'}
                            />
                            {MusicFile.file ? <p className="mt-2">{MusicFile.file.name}</p> : null}
                        </div>
                        <div className="w-25 ps-3">
                            <MusicSelectCartComponent
                                name={'coverImage'}
                                change={changeMusicFileHandler}
                                value={MusicFile.coverImage}
                                ic={'fas fa-image'}
                            />
                            {MusicFile.coverImage ? (
                                <p className="mt-2">{MusicFile.coverImage.name}</p>
                            ) : null}
                        </div>
                    </div>

                    {FileUploadValue !== 0 ? (
                        <div className="d-flex align-items-center mt-3 mb-2">
                            <div className="upload_bar_div">
                                <div
                                    className="upload_inner_div"
                                    style={{
                                        width: `${FileUploadValue}%`,
                                    }}
                                ></div>
                            </div>
                            <p className="mb-0 ms-3">{FileUploadValue}%</p>
                        </div>
                    ) : null}

                    <SongUploadInputComponent
                        placeHolder={'Artist Name'}
                        type={'text'}
                        name={'songArtist'}
                        label={'Song Artist Name'}
                        value={MusicUpload.songArtist}
                        change={changeHandler}
                    />

                    <div className="d-flex align-items-center">
                        <div className="w-75">
                            <SongUploadInputComponent
                                placeHolder={'Song Name'}
                                type={'text'}
                                cl={'me-3'}
                                name={'songName'}
                                label={'Song Name'}
                                value={MusicUpload.songName}
                                change={changeHandler}
                            />
                        </div>
                        <div className="mt-4 ms-2 w-25">
                            <MusicUploadSelectOptionComponet
                                value={MusicUpload.songType}
                                name={'songType'}
                                change={changeHandler}
                                data={{
                                    elm: [
                                        { el: 'Rock' },
                                        { el: 'Hip Hop music' },
                                        { el: 'Singing' },
                                        { el: 'Funk' },
                                        { el: 'Pop Music' },
                                        { el: 'Trap' },
                                        { el: 'future bass' },
                                        { el: 'Chill' },
                                        { el: 'Dance music' },
                                        { el: 'Jazz' },
                                        { el: 'Blue music' },
                                        { el: 'Soul music' },
                                        { el: 'Pop rock' },
                                        { el: 'Ska' },
                                        { el: 'lofy' },
                                        { el: 'Dupstep' },
                                    ],
                                }}
                            />
                        </div>
                    </div>

                    <SongUploadInputComponent
                        placeHolder={'Add Tags'}
                        type={'text'}
                        name={'tags'}
                        label={'Song tags'}
                        value={MusicUpload.tags}
                        change={changeHandler}
                    />

                    <MusicTextAriaComponent
                        placeHolder={'Song Discription'}
                        name={'discription'}
                        label={'Song discription'}
                        value={MusicUpload.discription}
                        change={changeHandler}
                    />

                    <CustomButtonComponent
                        innerText={'Upload'}
                        elmClass={'uploadMusic'}
                        type={'sumbit'}
                    />
                    <CustomButtonComponent
                        innerText={'Reset'}
                        elmClass={'reset_button ms-2'}
                        type={'button'}
                        onClick={resetSettings}
                    />
                </form>
            </div>
        </div>
    );
}

export default DashBoardMusicUploadComponent;
