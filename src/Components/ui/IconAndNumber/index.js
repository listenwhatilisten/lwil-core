import { Box, Tooltip } from '@mui/material';
import React from 'react';
import { styles } from './Styles';
export const IconAndNumber = ({ number, tooltipMessage, ...props }) => {
  return (
    <Box sx={styles.iconAndNumberContainer}>
      <Tooltip sx={styles.tooltip} title={tooltipMessage} placement="right">
        <div>
          <Box sx={styles.iconContainer}>{props.children}</Box>
          <Box sx={styles.numberContainer}>{number}</Box>
        </div>
      </Tooltip>
    </Box>
  );
};

export default IconAndNumber;
