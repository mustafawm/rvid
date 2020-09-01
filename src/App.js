import React from 'react';
import { ReactQueryConfigProvider } from 'react-query';
import { RQConfig } from 'utils/consts';
import Playlist from 'components/Playlist';
import 'styles/tw.output.css';

function App() {
  return (
    <ReactQueryConfigProvider config={RQConfig}>
      <div className="App">
        <Playlist />
      </div>
    </ReactQueryConfigProvider>
  );
}

export default App;
