const mongoose = require('mongoose');
const musicSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please enter the music artist name'],
    },
    songArtist: {
        type: String,
        default: 'no songArtist',
    },
    musicPath: {
        type: String,
        required: [true, 'song is required'],
    },
    songType: {
        type: String,
        required: [true, 'please select the type of music'],
    },
    tags: {
        type: String,
        default: '#music',
    },
    discription: {
        type: String,
        default: 'no discription',
    },
});

const musicModel = new mongoose.model('song', musicSchema);

module.exports = musicModel;
