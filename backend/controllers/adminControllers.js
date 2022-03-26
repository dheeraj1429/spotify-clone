const songs = require('../model/music');

// upload music
const uploadMusic = async function (req, res, next) {
    try {
        const file = req.files;
        console.log(req.body);

        const songPath = file[0].path;
        const coverImagePath = file[1].path;

        const { songArtist, songName, songType, tags, discription } = req.body;

        if (file) {
            const insertSongs = await new songs({
                name: songName,
                songArtist: songArtist,
                musicPath: songPath,
                songCover: coverImagePath,
                songType: songType,
                tags: tags,
                discription: discription,
            });

            const musicRef = await insertSongs.save();

            if (musicRef) {
                return res.status(200).json({
                    success: true,
                    message: 'music upload successful',
                });
            } else {
                return res.status(200).json({
                    success: false,
                    message: 'somthing worng!!!',
                });
            }
        } else {
            console.log('there is no file!!!');
        }
    } catch (err) {
        console.log(err);
    }
};

// get all music
const getAllMusic = async function (req, res, next) {
    try {
        const songsList = await songs.find();

        if (songsList) {
            return res.status(200).json(songsList);
        } else {
            return res.status(200).json({
                success: false,
                message: 'somthing worng',
            });
        }
    } catch (err) {
        console.log(err);
    }
};

module.exports = {
    uploadMusic,
    getAllMusic,
};
