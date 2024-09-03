import { Box } from '@mui/material';
import React from 'react';
import styles from './styles';
import { ThreeDotsHorizontal } from '../../../../Icons';

export const ChatBoxHeader = ({ friendItem, expand }) => {
  return (
    <Box sx={styles.chatBoxHeader({ expand })}>
      <Box sx={styles.friendItemDp}>
        <Box sx={styles.dp}></Box>
      </Box>
      <Box sx={styles.friendItemName}>{friendItem.name}</Box>
      <Box sx={styles.friendItemOptions}>
        <ThreeDotsHorizontal />
      </Box>
    </Box>
  );
};
