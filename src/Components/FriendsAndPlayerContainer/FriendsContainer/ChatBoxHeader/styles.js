// eslint-disable-next-line import/no-anonymous-default-export
export default {
  chatBoxHeader: ({ expand }) => ({
    borderBottom: expand ? '1px solid white' : '0px',
    height: '50px',
    display: 'flex',
    width: '100%',
  }),
  friendItemDp: {
    width: '20%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dp: {
    width: '30px',
    height: '30px',
    border: 'solid 1px white',
    borderRadius: '50%',
  },
  friendItemName: {
    width: '70%',
    display: 'table-cell',
    verticalAlign: 'middle',
    display: 'flex',
    alignItems: 'center',
  },
  friendItemOptions: { width: '10%', display: 'flex', alignItems: 'center' },
};
