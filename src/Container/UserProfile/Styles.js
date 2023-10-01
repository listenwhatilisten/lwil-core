import { appColors } from '../../Theme/colours';
import styled from 'styled-components';

export const styles = {
  userProfileContainer: {
    border: '1px solid',
    width: '98%',
  },
  originalsGridItem: {
    border: '0.5px solid',
    height: '200px',
    padding: '10px',
  },
};

export const TabButton = styled.button`
  width: 18%;
  margin: 5px;
  margin-x: 1%;
  background: ${(props) => (props.selected ? appColors.primary : 'none')};
  &:hover {
    background: white;
    color: black;
  }
  color: ${(props) => (props.selected ? 'black' : 'white')};
  border: 0;
  border-radius: 10px;
  height: 40px;
`;
