import { Box, Fab } from '@mui/material';
import Reat from 'react';
import styles from './Styles';
import { FloatingMusicPlayer } from '../FloatingMusicPlayer';

export const MusicPlayer = () => {
  return (
    <>
      <Box sx={styles.playerContainer('200px')}>
        <FloatingMusicPlayer />
      </Box>
    </>
  );
};
