import { Box, Button, ButtonGroup, Tab, Tabs } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import React, { useState } from 'react';
import { styles, TabButton } from './Styles';
import UserDetails from './UserDetails';
import UserProfilePost from './UserProfilePost';
import UserProfileFriendsList from './UserProfileFriendsList';

export const UserProfile = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const handleChange = (tabIndex) => {
    setSelectedTab(tabIndex);
  };

  const originalPostsData = Array(29).fill({
    songTitle: 'Welcome to the East - VIP Mix',
  });

  const postsPostsData = Array(7).fill({
    songTitle: 'Take it',
  });

  const friendsListData = Array(37).fill({
    friendName: 'Friend Name',
  });

  return (
    <Box sx={styles.userProfileContainer}>
      <UserDetails />
      <Box sx={{ border: 'solid', borderWidth: '0px 0px 1px 0px' }}>
        <TabButton selected={selectedTab === 0} onClick={() => handleChange(0)}>
          Originals
        </TabButton>
        <TabButton selected={selectedTab === 1} onClick={() => handleChange(1)}>
          Posts
        </TabButton>
        <TabButton selected={selectedTab === 2} onClick={() => handleChange(2)}>
          Friends
        </TabButton>
        <TabButton selected={selectedTab === 3} onClick={() => handleChange(3)}>
          Followers
        </TabButton>
        <TabButton selected={selectedTab === 4} onClick={() => handleChange(4)}>
          Following
        </TabButton>
      </Box>
      <Box>
        {selectedTab === 0 && (
          <Grid2 container>
            {originalPostsData.map((post) => (
              <Grid2 item xs={4} sx={styles.originalsGridItem}>
                <UserProfilePost title={post.songTitle} />
              </Grid2>
            ))}
          </Grid2>
        )}
        {selectedTab === 1 && (
          <Grid2 container>
            {postsPostsData.map((post) => (
              <Grid2 item xs={4} sx={styles.originalsGridItem}>
                <UserProfilePost title={post.songTitle} />
              </Grid2>
            ))}
          </Grid2>
        )}
        {selectedTab === 2 && (
          <Grid2 container>
            <UserProfileFriendsList friendsList={friendsListData} />
          </Grid2>
        )}
      </Box>
    </Box>
  );
};
export default UserProfile;
