import logo from './logo.svg';
import './App.css';
import { Amplify, Storage } from 'aws-amplify';
import { useEffect, useRef, useState } from 'react';

function App() {
  const ref = useRef(null);

  const [files, setFiles] = useState([]);
  const [logo, setLogo] = useState(null);
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

  useEffect(() => {
    Storage.list('')
      .then((filesList) => {
        console.log(filesList);
        setFiles(filesList.results);
      })
      .catch((err) => {
        console.log(err);
      });
    Storage.get(files?.[0])
      .then((res) => {
        setLogo(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleFileUpload = () => {
    const fileName = ref.current.files[0].name;
    console.log(fileName);
    Storage.put(fileName, ref.current.files[0])
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>AWS DEMO</div>
        <input ref={ref} type="file" onChange={handleFileUpload} />
        {files.map((file) => {
          return <div>{file.key}</div>;
        })}
      </header>
    </div>
  );
}

export default App;
