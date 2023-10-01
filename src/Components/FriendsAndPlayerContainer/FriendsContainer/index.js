import React from 'react';
import { Box, IconButton } from '@mui/material';
import { styles } from './Styles';
import { friendsList } from './Mock';
export const FriendsContainer = () => {
  return (
    <Box sx={styles.friendsContainer}>
      <Box sx={styles.friendsList}>
        {friendsList.map((friendItem) => {
          return (
            <Box sx={styles.friendItem}>
              <Box sx={styles.friendItemDp}>
                <Box sx={styles.dp}></Box>
              </Box>
              <Box sx={styles.friendItemName}>{friendItem.name}</Box>
              <Box sx={styles.friendItemOptions}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-three-dots"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                </svg>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
export default FriendsContainer;
