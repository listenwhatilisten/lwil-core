import { Box } from '@mui/material';
import React from 'react';
import { styles } from './styles';

export const UserProfilePost = ({ title }) => {
  return (
    <Box sx={styles.flexBox}>
      <Box sx={styles.postDisplayPicture}>ch</Box>
      <Box>{title}</Box>
    </Box>
  );
};

export default UserProfilePost;
