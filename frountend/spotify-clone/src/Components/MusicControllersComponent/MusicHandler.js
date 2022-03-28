const autoPlay = function (audio, state, btn) {
    const playPromise = audio.play();

    // auto play music
    if (playPromise !== undefined) {
        playPromise
            .then((result) => {
                audio.play();

                if (state && btn) {
                    state(true);
                    btn.classList.replace('fa-play', 'fa-pause');
                }
            })
            .catch((err) => {
                console.log(err);

                if (state && btn) {
                    state(false);
                    btn.classList.replace('fa-pause', 'fa-play');
                }
            });
    }
};

// // auto play music when the user click on the prev and the next button
const autoPlayMusic = function (audio, state, btn) {
    const src = audio.getAttribute('src');

    const newAudio = new Audio(src);
    newAudio.load();

    autoPlay(audio, state, btn);
};

// set the current time and current song duration
// calculate the current time and the song duration and convert into the the minutes and seconds.
// if the song length ( duration ) is more then 60 minutes above then convert the songs duration like 1:00:00;
const dataAboutAudio = function (elem, target, state, musicCrtState) {
    const currentTime = elem.target.currentTime;
    const durationTime = elem.target.duration;

    target.value = currentTime;
    target.max = durationTime;

    let crProgress = Math.floor((currentTime / durationTime) * 100);
    let crData = musicInfoData(currentTime);

    if (currentTime === durationTime) {
        // when the song end then jump to next song.
        state((prev) => prev + 1);
    }

    musicCrtState(crData);
};

// get the audio element duation and current time
// and convert the element current time and duration into the minutes and seconds.
const musicInfoData = function (elem) {
    let currentMinutes = Math.floor(elem / 60);
    let currentSeconds = Math.floor(elem % 60);

    // when the audio current time is less then 10 seconds then show the current time like 01,02,03....10
    if (currentSeconds < 10) {
        currentSeconds = `0${currentSeconds}`;
    }

    // return the converted data
    return `${currentMinutes}:${currentSeconds}`;
};

// play music funtion
const playMusic = function (elm, state, audio) {
    const playPromise = audio.play();

    if (playPromise !== undefined) {
        playPromise
            .then((result) => {
                state(true);
                if (elm) {
                    elm.classList.replace('fa-play', 'fa-pause');
                }
                audio.play();
            })
            .catch((err) => {
                console.log(err);
                if (state && elm) {
                    state(false);
                    elm.classList.replace('fa-pause', 'fa-play');
                }
            });
    }
};

// pause music funtion
const pauseMusic = function (elm, state, audio) {
    state(false);
    elm.classList.replace('fa-pause', 'fa-play');
    audio.pause();
};

// change song to prev current song - prev
const ChangePrev = function (target, allData, state) {
    if (target === allData.length - 1) {
        state(0);
    } else {
        state((prev) => prev + 1);
    }
};

// change songe to next current song + next
const ChangeToNext = function (target, allData, state) {
    if (target === 0) {
        state(allData.length - 1);
    } else {
        state((prev) => prev - 1);
    }
};

export {
    musicInfoData,
    playMusic,
    pauseMusic,
    ChangePrev,
    ChangeToNext,
    autoPlayMusic,
    dataAboutAudio,
};
