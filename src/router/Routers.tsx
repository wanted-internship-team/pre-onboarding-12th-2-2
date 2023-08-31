import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../pages/Main';
import IssueList from '../pages/IssueList';
import Error from '../pages/Error';
import IssueDetail from '../pages/IssueDetail';
import Header from '../components/common/Header';
import { RepoProvider } from '../contexts/repoContext';
import { PATH } from '../constants';

export default function Routers() {
  return (
    <BrowserRouter>
      <RepoProvider>
        <Routes>
          <Route path={PATH.MAIN} element={<Main />} />
          <Route element={<Header />}>
            <Route path={PATH.ISSUES} element={<IssueList />} />
            <Route path={PATH.ISSUEDETAIL} element={<IssueDetail />} />
          </Route>
          <Route path={PATH.ERROR} element={<Error />} />
        </Routes>
      </RepoProvider>
    </BrowserRouter>
  );
}
