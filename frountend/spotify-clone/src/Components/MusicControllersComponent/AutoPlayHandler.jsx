// auto play music when the user click on the prev and the next button
const autoPlayMusic = function (audio, state, btn) {
    const src = audio.getAttribute('src');

    const newAudio = new Audio(src);
    newAudio.load();

    const playPromise = audio.play();

    // auto play music
    if (playPromise !== undefined) {
        playPromise
            .then((result) => {
                audio.play();
                state(true);
                btn.classList.replace('fa-play', 'fa-pause');
            })
            .catch((err) => {
                console.log(err);
                state(false);
                btn.classList.replace('fa-pause', 'fa-play');
            });
    }
};

export default autoPlayMusic;
