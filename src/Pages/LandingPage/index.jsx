import React, { useState } from 'react';
import { Box, Button, Tab, Tabs } from '@mui/material';

import styles from './Styles';
import Grid2 from '@mui/material/Unstable_Grid2';
import { Post as Postv2 } from '../../Components/PostV2';
import FriendsAndPlayerContainer from '../../Components/FriendsAndPlayerContainer';
import { mockLandingPageData } from './mock';
import TabTheme from '../../Template/TabTheme';
import { TabPanel } from '@mui/lab';
import UserProfile from '../../Container/UserProfile';
import { TrailErrorContainer } from '../../Container/TrailErrorContainer';

export const LandingPage = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, tabIndex) => {
    setSelectedTab(tabIndex);
  };
  return (
    <div>
      <Box sx={styles.landingPageContainier(window.innerHeight)}>
        <Grid2 container>
          <Grid2 xs={2} sx={styles.friendsContainer(window.innerHeight)}>
            <FriendsAndPlayerContainer />
          </Grid2>

          <Grid2 xs={8}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs
                value={selectedTab}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Explore" />
                <Tab label="Feed" />
                <Tab label="Profile" />
                <Tab label="My Music" />
                <Tab label="Trail Error" />
              </Tabs>
            </Box>
            <Box>
              {selectedTab === 0 && (
                <Box sx={styles.feedContainer(window.innerHeight)}>
                  {mockLandingPageData.posts.map((post) => {
                    return <Postv2 data={post} />;
                  })}
                </Box>
              )}
              {selectedTab === 1 && (
                <Box sx={styles.feedContainer(window.innerHeight)}>
                  {mockLandingPageData.posts.map((post) => {
                    return <Postv2 data={post} />;
                  })}
                </Box>
              )}
              {selectedTab === 2 && (
                <Box sx={styles.feedContainer(window.innerHeight)}>
                  <UserProfile />
                </Box>
              )}
              {selectedTab === 3 && (
                <Box sx={styles.feedContainer(window.innerHeight)}>
                  <UserProfile />
                </Box>
              )}
              {selectedTab === 4 && (
                <Box sx={styles.trailErrorContainer(window.innerHeight)}>
                  <TrailErrorContainer />
                </Box>
              )}
            </Box>
          </Grid2>
          <Grid2 xs={2} sx={styles.optionsContainer(window.innerHeight)}>
            Options
          </Grid2>
        </Grid2>
      </Box>
    </div>
  );
};

export default LandingPage;
