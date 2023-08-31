import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PATH } from '../constants';
import { RepoProvider } from '../contexts/repoContext';
import Main from '../pages/Main';
import IssueList from '../pages/IssueList';
import Header from '../components/common/Header';
import Error from '../pages/Error';

export default function Routers() {
  return (
    <BrowserRouter>
      <RepoProvider>
        <Routes>
          <Route path={PATH.MAIN} element={<Main />} />
          <Route element={<Header />}>
            <Route path={PATH.ISSUES} element={<IssueList />} />
          </Route>
          <Route path='/*' element={<Error />} />
        </Routes>
      </RepoProvider>
    </BrowserRouter>
  );
}
