import React from 'react';
import { Box } from '@mui/material';
import { styles } from './Styles';
import FriendsContainer from './FriendsContainer';
export const FriendsAndPlayerContainer = () => {
  return (
    <Box sx={styles.friendsAndPlayerContainer}>
      <Box sx={styles.friendsContainer}>
        <FriendsContainer />
      </Box>
      <Box sx={styles.playerContainer}></Box>
    </Box>
  );
};
export default FriendsAndPlayerContainer;
