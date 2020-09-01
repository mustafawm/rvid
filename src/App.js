import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ReactQueryConfigProvider } from 'react-query';
import { RQConfig } from 'utils/consts';
import NavBar from 'components/NavBar';
import HomePage from 'pages/Home';
import VideosPage from 'pages/Videos'
import SportsPage from 'pages/Sports'
import url from 'utils/url';
import 'styles/tw.output.css';

function App() {
  return (
    <ReactQueryConfigProvider config={RQConfig}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={url.web.home.link} element={<HomePage />}/>
          <Route path={url.web.videos.link} element={<VideosPage />}/>
          <Route path={url.web.sports.link} element={<SportsPage />}/>
        </Routes>
      </BrowserRouter>
    </ReactQueryConfigProvider>
  );
}

export default App;
