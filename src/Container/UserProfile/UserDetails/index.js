import { Box } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import React from 'react';
import { styles } from './Styles';

export const UserDetails = () => {
  return (
    <Grid2 container sx={styles.userDetailsContainer}>
      <Grid2 xs={3} sx={styles.userProfilePictureGrid}>
        <Box sx={styles.userProfilePictureBox}></Box>
      </Grid2>
      <Grid2 xs={6} sx={styles.userNameAndBioGrid}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box sx={styles.userRealName}>Name</Box>
          <Box sx={styles.userId}>@userName</Box>
          <Box sx={styles.userBio}>
            I love Techno more than any thing. you can find some cool playlists
            in my profile go checkout and let's just listen together sometime
          </Box>
        </Box>
      </Grid2>
      <Grid2 xs={3}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box sx={styles.userPostSummary}>30 Originals</Box>
          <Box sx={styles.userPostSummary}>144 Posts</Box>
          <Box sx={styles.userPostSummary}>376 Frineds</Box>
          <Box sx={styles.userPostSummary}>30.1k Followers</Box>
          <Box sx={styles.userPostSummary}>498 Following</Box>
        </Box>
      </Grid2>
    </Grid2>
  );
};

export default UserDetails;
