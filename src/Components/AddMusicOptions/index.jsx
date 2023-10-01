import React from 'react';
import { Box, Button } from '@mui/material';
import { styles } from './Styles';

export const AddMusicOptions = () => {
  return (
    <Box sx={styles.addMusicOptionsBox}>
      <Button>Play Now</Button>
      <Button>Add to Queue</Button>
      <Button>Add to Playlist</Button>
    </Box>
  );
};
export default AddMusicOptions;
