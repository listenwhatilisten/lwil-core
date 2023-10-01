import { Box, InputAdornment, TextField } from '@mui/material';
import React from 'react';
import { SearchBarContainer } from './styles';
import SearchIcon from '@mui/icons-material/Search';
export const SearchBar = () => {
  return (
    <SearchBarContainer width={'40%'}>
      <TextField
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </SearchBarContainer>
  );
};

export default SearchBar;
