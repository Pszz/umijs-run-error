import 'react-toastify/dist/ReactToastify.css';

import { client } from '@/services/graphql';
import { ApolloProvider } from '@apollo/client';
import { createTheme, StyledEngineProvider, ThemeProvider } from '@mui/material';
import { Web3ReactProvider } from '@web3-react/core';
import hello from 'hellojs';
import React, { useEffect, useMemo } from 'react';
import { Outlet } from 'umi';
import Web3 from 'web3';

import { ToastContainer } from 'react-toastify';

const BasicLayout: React.FC = (props) => {
  
  const themes = useMemo(() => {
    return createTheme({});
  }, []);

  useEffect(() => {
    hello.init({
      google: '',
    });
  }, []);

  return (
    <Web3ReactProvider getLibrary={(provider) => new Web3(provider)}>
      <ApolloProvider client={client}>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={themes}>
            <Outlet />
            <ToastContainer />
          </ThemeProvider>
        </StyledEngineProvider>
      </ApolloProvider>
    </Web3ReactProvider>
  );
};

export default BasicLayout;
