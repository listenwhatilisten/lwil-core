import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import { styles } from './Styles';
import { friendsList } from './Mock';
import { ChatBoxHeader } from './ChatBoxHeader';
import { ChatBox } from './ChatBox';
export const FriendsContainer = () => {
  const [expandChatIndex, setExpandChatIndex] = useState(0);
  return (
    <Box sx={styles.friendsContainer}>
      <Box sx={styles.friendsList}>
        {friendsList.map((friendItem, index) => {
          const isExpanded = index === expandChatIndex;
          return (
            <Box
              sx={styles.friendItem({ expand: isExpanded })}
              onClick={() => setExpandChatIndex(index)}
            >
              <ChatBoxHeader
                friendItem={friendItem}
                expand={index === expandChatIndex}
              />
              {isExpanded && <ChatBox />}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
export default FriendsContainer;
