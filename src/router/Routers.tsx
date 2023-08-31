import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PATH } from '../constants';
import { RepoProvider } from '../contexts/repoContext';
import Main from '../pages/Main';

export default function Routers() {
  return (
    <BrowserRouter>
      <RepoProvider>
        <Routes>
          <Route path={PATH.MAIN} element={<Main />} />
          <Route path={PATH.ISSUES} element={<Main />} />
        </Routes>
      </RepoProvider>
    </BrowserRouter>
  );
}
