import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const PlayingControl = ({currentSong}) => {
    return (
        <div className='w-full mt-8'>
            <AudioPlayer className='bg-main rounded-md' src={currentSong.url} />
        </div>
    );
};

export default PlayingControl;