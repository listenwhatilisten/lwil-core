import logo from './logo.svg';
import './App.css';
import { Amplify, Storage } from 'aws-amplify';
import { useEffect, useRef, useState } from 'react';
import Main from './Container/Main';

function App() {
  useEffect(() => {
    Amplify.configure({
      Auth: {
        identityPoolId: 'ap-northeast-1:783f2092-00d5-40ed-a983-f58bdd2d1bf9',
        region: 'ap-northeast-1',
      },
      Storage: {
        AWSS3: {
          bucket: 'vamsi-portfolio',
          region: 'ap-northeast-1',
        },
      },
    });
  }, []);

  return <Main />;
}

export default App;
