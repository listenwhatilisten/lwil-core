import Images from '../../../Images';
export const styles = {
  musicPostContainer: {
    display: 'flex',
    flexDirection: 'column',
    border: 'solid',
    borderWidth: '5px 1px 0px 1px',
    borderRadius: '10px',
    borderColor: '#40E0D0',
    padding: '10px',
    width: '100%',
  },
  postBox: {
    height: '150px',
    backgroundImage: `url(${Images.CloserMusicCover})`,
    backgroundPosition: 'center',
    border: 'solid',
    borderWidth: '1px',
    borderRadius: '10px',
  },
  seekerStyle: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    'input[type=range]': {
      width: '90%',
      webkitAppearance: 'none',
    },
  },
  songAchivementsContainer: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    left: '10px',
    width: 'fit-content',
  },
};
