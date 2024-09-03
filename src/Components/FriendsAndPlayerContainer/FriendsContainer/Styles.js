export const styles = {
  friendsContainer: {},
  friendsList: {
    color: 'white',
  },
  friendItem: ({ expand }) => ({
    height: expand ? '450px' : '50px',
    transition: 'height 0.4s',
    display: 'flex',
    flexDirection: 'column',
    margin: '5px',
    border: 'solid 1px white',
    borderRadius: '10px',
  }),
};
