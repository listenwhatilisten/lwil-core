import React, { useState } from 'react';
import { Box } from '@mui/material';
import { Styles } from './Styles';

const TabPanel = ({ value, index, children }) => {
  return <div>{value === index && children}</div>;
};

export const TabTheme = (props) => {
  const [tabSelected, setTabSelected] = useState(2);
  const [leftIcon, setLeftIcon] = useState('logo1');
  const [focusIcon, setFocusIcon] = useState('logo2');
  const [rightIcon, setRightIcon] = useState('logo3');

  const switchTabs = (event) => {
    let i1 = leftIcon;
    let i2 = focusIcon;
    let i3 = rightIcon;
    const temp = i3;
    if (event === 'rotateRight') {
      i3 = i2;
      i2 = i1;
      i1 = temp;
      setLeftIcon(i1);
      setFocusIcon(i2);
      setRightIcon(i3);
    } else if (event === 'rotateLeft') {
      i3 = i1;
      i1 = i2;
      i2 = temp;
      setLeftIcon(i1);
      setFocusIcon(i2);
      setRightIcon(i3);
    }
  };
  return (
    <Box sx={Styles.theBox}>
      <Box sx={Styles.iconSection}>
        <Box sx={Styles.tabLeft} onClick={() => switchTabs('rotateRight')}>
          {leftIcon}
        </Box>
        <Box sx={Styles.iconBox1}></Box>
        <Box sx={Styles.tabFocus}>{focusIcon}</Box>
        <Box sx={Styles.iconBox3}></Box>
        <Box sx={Styles.tabRight} onClick={() => switchTabs('rotateLeft')}>
          {rightIcon}
        </Box>
      </Box>
      <Box sx={Styles.contentSection}>
        <Box sx={Styles.transperantBoxSection}>
          <Box sx={Styles.contentSectionTransperantBox1}></Box>
          <Box sx={Styles.contentSectionTransperantBox2}></Box>
          <Box sx={Styles.contentSectionTransperantBox3}></Box>
        </Box>
        <Box sx={Styles.contentBox}>
          <TabPanel index={1} value={tabSelected}>
            hi1
            {props.children}
          </TabPanel>
          <TabPanel index={2} value={tabSelected}>
            hi2
            {props.children}
          </TabPanel>
          <TabPanel index={3} value={tabSelected}>
            hi3
            {props.children}
          </TabPanel>
        </Box>
      </Box>
    </Box>
  );
};

export default TabTheme;
