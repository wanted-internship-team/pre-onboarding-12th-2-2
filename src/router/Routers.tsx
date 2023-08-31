import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PATH } from '../constants';
import Main from '../pages/Main';

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATH.MAIN} element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}
