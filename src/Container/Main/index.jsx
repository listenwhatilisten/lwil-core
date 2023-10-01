import React from 'react';
import Header from '../../Components/Header';
import { Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { LandingPage } from '../../Pages/LandingPage';
import SearchResultPage from '../../Pages/SearchResultPage';
import Styles from './Styles';

export const Main = () => {
  return (
    <Box>
      <Box sx={Styles.headerContainer}>
        <Header />
      </Box>
      <Box sx={Styles.routeContainer}>
        <Router>
          <Routes>
            <Route exact path="/" element={<LandingPage />}></Route>
            <Route exact path="/search" element={<SearchResultPage />}></Route>
          </Routes>
        </Router>
      </Box>
    </Box>
  );
};

export default Main;
