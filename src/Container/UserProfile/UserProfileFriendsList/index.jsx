import { Box } from '@mui/material';
import React from 'react';
import SearchBar from '../../../Components/SearchBar';
import { styles } from './styles';

export const UserProfileFriendsList = ({ friendsList }) => {
  return (
    <Box sx={styles.friendListBox}>
      <SearchBar />
      {friendsList.map((friend) => (
        <Box sx={styles.friendListItem}>
          <Box sx={styles.friendDp}></Box>
          <Box sx={styles.friendNameBox}> {friend.friendName}</Box>
          <Box sx={styles.addFriendDropDown}>Add Friend</Box>
          <Box sx={styles.friendshipSinceBox}>3w</Box>
        </Box>
      ))}
    </Box>
  );
};

export default UserProfileFriendsList;
