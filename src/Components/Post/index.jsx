import React from 'react';
import { Box } from '@mui/material';
import { styles } from './Styles';
import Grid2 from '@mui/material/Unstable_Grid2';
import MusicSection from './MusicSection';
import AddMusicOptions from '../AddMusicOptions';
import { Chip } from '@mui/material';
import Images from '../../Images';
export const Post = ({ data: post }) => {
  return (
    <Box sx={styles.postContainer}>
      <Box sx={styles.postBox}>
        <Grid2 container sx={styles.originArtistInfo}>
          <Grid2 xs={4}>
            <Chip label="OA: Diljit" variant="outlined" color="info" />
          </Grid2>
        </Grid2>
        <Grid2 container>
          <Grid2 xs={2}>
            <Box sx={styles.profilePicture}>
              <img
                src={Images.UserDpImage}
                width="100px"
                height="100px"
                alt="User Profile DP"
              />
            </Box>
          </Grid2>
          <Grid2 xs={8}>
            <Box sx={styles.profileName}>{post.userName}</Box>
            <Box sx={styles.userPostComment}>{post.userPostComment}</Box>
          </Grid2>
          <Grid2 xs={2}>
            <Box sx={styles.profilePicture}>dp</Box>
          </Grid2>
        </Grid2>
        <Grid2 container sx={styles.musicPost}>
          <Grid2 xs={1}></Grid2>
          <Grid2 xs={11}>
            <MusicPost />
          </Grid2>
        </Grid2>
        <Grid2 container>
          <Grid2 xs={8}>
            <AddMusicOptions />
          </Grid2>
          <Grid2 xs={1}></Grid2>
          <Grid2 xs={3}>
            <Box sx={styles.likesBox}>
              <Box sx={styles.likesIcon}>O</Box>
              <Box sx={styles.likesNumber}>{post.likesCount}</Box>
              <Box sx={styles.likesLabel}>Likes</Box>
            </Box>
          </Grid2>
        </Grid2>
      </Box>
      <Box>Comments</Box>
    </Box>
  );
};

export default Post;
