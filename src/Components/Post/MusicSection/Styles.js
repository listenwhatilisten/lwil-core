export const styles = {
  musicPostContainer: {
    display: 'flex',
    flexDirection: 'column',
    border: 'solid',
    borderWidth: '2px',
    borderRadius: '10px',
    borderColor: 'black',
    width: '100%',
  },
  postBox: {
    height: '150px',
    background: 'grey',
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
};
