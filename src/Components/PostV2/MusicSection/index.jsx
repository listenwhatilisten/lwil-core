import React, { useState, useRef, useEffect } from 'react';
import { Box, Button } from '@mui/material';
import { styles } from './Styles';
import Grid2 from '@mui/material/Unstable_Grid2';
import IconAndNumber from '../../ui/IconAndNumber';
import { FaBeer } from 'react-icons/fa';
import Images from '../../../Images';

export const MusicSection = () => {
  const [isPlaying, setPlayPause] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const audioPlayer = useRef();
  const progressBar = useRef();
  const animationRef = useRef();

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returedMinutes}:${returnedSeconds}`;
  };

  const togglePlayPause = () => {
    setPlayPause(!isPlaying);
    if (!isPlaying) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  };

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty(
      '--seek-before-width',
      `${(progressBar.current.value / duration) * 100}%`
    );
    setCurrentTime(progressBar.current.value);
  };

  return (
    <Grid2 container>
      <Grid2 xs={9.5}>
        <Box sx={styles.musicPostContainer}>
          <Box sx={styles.postBox} onClick={togglePlayPause}>
            <audio
              ref={audioPlayer}
              src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
            />
          </Box>
          <Grid2 container>
            <Grid2 xs={1}>
              <Box>{calculateTime(currentTime)}</Box>
            </Grid2>
            <Grid2 xs={10}>
              <Box sx={styles.seekerStyle}>
                <input
                  ref={progressBar}
                  type="range"
                  defaultValue={0}
                  onChange={changeRange}
                />
              </Box>
            </Grid2>
            <Grid2 xs={1}>
              <Box>
                {duration && !isNaN(duration) && calculateTime(duration)}
              </Box>
            </Grid2>
          </Grid2>
        </Box>
      </Grid2>
      <Grid2 xs={2.5}>
        <Box sx={styles.songAchivementsContainer}>
          <IconAndNumber number={367} tooltipMessage="Song of the Day">
            <img
              width={30}
              height={30}
              src={Images.YellowStar}
              alt="React Logo"
            />
          </IconAndNumber>
          <IconAndNumber number={367} tooltipMessage="Song of the Week">
            <img
              width={30}
              height={30}
              src={Images.BlueStar}
              alt="React Logo"
            />
          </IconAndNumber>
          <IconAndNumber number={367} tooltipMessage="Song of the Year">
            <img
              width={30}
              height={30}
              src={Images.BlackStar}
              alt="React Logo"
            />
          </IconAndNumber>
        </Box>
      </Grid2>
    </Grid2>
  );
};
export default MusicSection;
