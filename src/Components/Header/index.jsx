import React, { useEffect, useState, useRef } from 'react';
import { Amplify, Storage } from 'aws-amplify';
import Grid2 from '@mui/material/Unstable_Grid2';
import { appColors } from '../../Theme/colours';

export const Header = () => {
  const [files, setFiles] = useState(null);
  const [logo, setLogo] = useState(null);
  const [loading, setLoading] = useState(true);
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

  const getLogo = async () => {
    try {
      const filesList = await Storage.list('AmazonLogo');

      setFiles(filesList.results);

      const logoKey = await Storage.get(files?.[0]?.key);
      if (logoKey.length > 0) {
        setLogo(logoKey);
        setLoading(false);
      } else {
        getLogo();
      }
    } catch {
      console.log('Error in getting storage list');
    }
  };
  useEffect(() => {
    setLoading(true);
    getLogo();
  }, []);

  return (
    <>
      {!loading && logo ? (
        <Grid2 container sx={{ background: appColors.primary }}>
          <Grid2
            xs={1}
            sx={{
              height: '50px',
            }}
          >
            <img src={logo && logo} alt="Logo" width="100%" height="100%" />
          </Grid2>
        </Grid2>
      ) : (
        <> Loading ...</>
      )}
    </>
  );
};

export default Header;
