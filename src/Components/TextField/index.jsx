import React from 'react';
import { TextField as MuiTextField, Box, Typography } from '@mui/material';

export const TextField = (props) => {
  const { helperText, error } = props;

  return (
    <Box>
      <MuiTextField {...props} />
    </Box>
  );
};
