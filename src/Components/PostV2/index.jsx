import React from 'react';
import { Box } from '@mui/material';
import { styles } from './Styles';
import Grid2 from '@mui/material/Unstable_Grid2';
import MusicSection from './MusicSection';
import AddMusicOptions from '../AddMusicOptions';
import { Chip } from '@mui/material';
import Images from '../../Images';
import { BiLike } from 'react-icons/bi';
export const Post = ({ data: post }) => {
  return (
    <Box sx={styles.fullPostContainer}>
      <Box sx={styles.musicPostContainer}>
        <Grid2 container sx={styles.musicPost}>
          <Grid2 xs={2}></Grid2>
          <Grid2 xs={10}>
            <MusicSection />
          </Grid2>
        </Grid2>
      </Box>
      <Box sx={styles.postContainer}>
        <Grid2 container sx={styles.userPostContainer}>
          <Grid2 xs={2}>
            <Box sx={styles.profilePicture}>
              <div>
                <img
                  src={Images.UserDpImage}
                  width="105px"
                  height="105px"
                  alt="User Profile DP"
                  style={{}}
                />
              </div>
            </Box>
          </Grid2>
          <Grid2 xs={8}>
            <Box sx={styles.profileName}>{post.userName}</Box>
            <Box sx={styles.userPostComment}>{post.userPostComment}</Box>
          </Grid2>
          <Grid2 xs={2}>
            <Box>
              <Grid2 container sx={styles.originArtistInfo}>
                <Grid2 xs={12}>
                  <Chip label="OA: Diljit" variant="outlined" color="info" />
                </Grid2>
              </Grid2>
            </Box>
          </Grid2>
        </Grid2>

        <Grid2 container>
          <Grid2 xs={8}>
            <AddMusicOptions />
          </Grid2>
          <Grid2 xs={2.5}></Grid2>
          <Grid2 xs={1.5}>
            <Box sx={styles.likesBox}>
              <Box sx={styles.likesIcon}>
                <BiLike size={25} />
              </Box>
              <Box sx={styles.likesNumber}>{post.likesCount}</Box>
            </Box>
          </Grid2>
        </Grid2>
        <Box>Comments</Box>
      </Box>
    </Box>
  );
};

export default Post;
