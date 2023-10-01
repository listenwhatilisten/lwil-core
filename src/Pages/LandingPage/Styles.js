export default {
  landingPageContainier: (height) => ({
    height: height,
  }),
  feedContainer: (height) => ({
    display: 'flex',
    height: height,
    alignItems: 'center',
    flexDirection: 'column',
    overflowY: 'auto',
    background: 'black',
  }),
  optionsContainer: (height) => ({
    border: 'solid',
    borderWidth: '0px 1px 0px 0px',
    borderColor: 'black',
    height: height,
    background: 'black',
  }),
  friendsContainer: (height) => ({
    border: 'solid',
    borderWidth: '0px 0px 0px 1px',
    borderColor: 'black',
    height: height,
    background: 'black',
  }),
  trailErrorContainer: (height) => ({
    border: 'solid',
    borderWidth: '0px 0px 0px 1px',
    borderColor: 'black',
    height: height,
    background: 'black',
  }),
};
