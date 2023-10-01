import { Box } from '@mui/material';
import React, { useState } from 'react';
import styles from './Styles';
import Draggable, { DraggableCore } from 'react-draggable';

export const FloatingMusicPlayer = () => {
  const [changeTo, setChangeTo] = useState(0);

  const playNextSong = () => {
    console.log('next song');
  };
  const playPreviousSong = () => {
    console.log('previous song');
  };
  const onDrag = (e, data) => {
    // console.log(e, '-> E');
    // console.log(data, '-> DATA');
    if (data?.x > 0) {
      setChangeTo(1);
    }
    if (data?.x < 0) {
      setChangeTo(-1);
    }
  };

  const onDragStop = () => {
    if (changeTo === 1) {
      playNextSong();
      setChangeTo(0);
    }
    if (changeTo === -1) {
      playPreviousSong();
      setChangeTo(0);
    }
  };

  return (
    <Box sx={{ ...styles.floatingMusicPlayerContainer }}>
      <Box sx={{ ...styles.handle }}></Box>

      <Box sx={{ ...styles.centerDragableContainer }}>
        <Draggable
          onDrag={onDrag}
          onStop={onDragStop}
          bounds={{ left: -75, top: 0, right: 75, bottom: 0 }}
          position={{ x: 0, y: 0 }}
        >
          <Box sx={{ ...styles.centerPlayer }}></Box>
        </Draggable>
      </Box>
    </Box>
  );
};
