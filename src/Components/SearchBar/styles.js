import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  width: ${(props) => props.width ?? '100%'};
  height: 40px;
  margin-top: 20px;
  margin-bottom: 10px;
  .MuiTextField-root {
    background: grey;
    width: 100%;
    height: 40px;
  }
`;
