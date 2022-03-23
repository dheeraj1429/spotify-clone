import React, { useState } from 'react';
import HeadingComponent from '../HeadingComponent/HeadingComponent';
import SongUploadInputComponent from '../SongUploadInputComponent/SongUploadInputComponent';
import MusicUploadSelectOptionComponet from '../MusicUploadSelectOptionComponet/MusicUploadSelectOptionComponet';
import CustomButtonComponent from '../CustomButtonComponent/CustomButtonComponent';
import MusicTextAriaComponent from '../MusicTextAriaComponent/MusicTextAriaComponent';
import MusicSelectCartComponent from '../MusicSelectCartComponent/MusicSelectCartComponent';
import { useDispatch } from 'react-redux';
import { uploadMusic } from '../../Redux/Action/action';

import './MusicUploadComponent.css';

function MusicUploadComponent() {
    const dispatch = useDispatch();
    const [MusicFile, setMusicFile] = useState({
        file: '',
    });
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
        setMusicFile({ file: data });
    };

    const sendData = function (e) {
        e.preventDefault();

        const { songArtist, songName, songType, tags, discription } = MusicUpload;
        const file = MusicFile.file;

        const formData = new FormData();
        formData.append('file', file);
        formData.append('songArtist', songArtist);
        formData.append('songName', songName);
        formData.append('songType', songType);
        formData.append('tags', tags);
        formData.append('discription', discription);

        if (file && songArtist && songName && songType) {
            dispatch(uploadMusic(formData));
        }
    };

    return (
        <div className="music_upload_div">
            <div className="music_upload_div_inner">
                <HeadingComponent icon={'fas fa-headphones-alt'} innerText={'Upload Your Music'} />
                <form action="" onSubmit={sendData}>
                    <div className="music_upload_div_cl mt-4 px-5">
                        <MusicSelectCartComponent
                            name={'file'}
                            change={changeMusicFileHandler}
                            value={MusicFile.file}
                        />
                        <div className="music_upload_elm">
                            <SongUploadInputComponent
                                placeHolder={'Song Lable'}
                                type={'text'}
                                value={MusicUpload.songArtist}
                                change={changeHandler}
                                name={'songArtist'}
                            />
                            <div className="d-flex align-items-center">
                                <SongUploadInputComponent
                                    placeHolder={'Song Name'}
                                    type={'text'}
                                    cl={'me-3'}
                                    value={MusicUpload.songName}
                                    name={'songName'}
                                    change={changeHandler}
                                />
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
                                            { el: 'futer bass' },
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
                            <SongUploadInputComponent
                                placeHolder={'Add Tags'}
                                type={'text'}
                                value={MusicUpload.tags}
                                change={changeHandler}
                                name={'tags'}
                            />
                            <MusicTextAriaComponent
                                placeHolder={'Song Discription'}
                                value={MusicUpload.discription}
                                change={changeHandler}
                                name={'discription'}
                            />
                            <CustomButtonComponent
                                innerText={'Upload'}
                                elmClass={'uploadMusic'}
                                type={'sumbit'}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default MusicUploadComponent;
