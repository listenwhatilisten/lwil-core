import React from 'react';
import Header from '../../Components/Header';
import { Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { LandingPage } from '../../Pages/LandingPage';
import SearchResultPage from '../../Pages/SearchResultPage';
import Styles from './Styles';
import LoginPage from '../../Pages/LoginPage';
import ApolloProvider from '../../ApolloProvider';

export const Main = () => {
  return (
    <ApolloProvider>
      <Box>
        {/* <Box sx={Styles.headerContainer}>
        <Header />
      </Box> */}
        <Box sx={Styles.routeContainer}>
          <Router>
            <Routes>
              <Route exact path="/" element={<LandingPage />}></Route>
              <Route
                exact
                path="/search"
                element={<SearchResultPage />}
              ></Route>
              <Route exact path="/login" element={<LoginPage />}></Route>
            </Routes>
          </Router>
        </Box>
      </Box>
    </ApolloProvider>
  );
};

export default Main;
