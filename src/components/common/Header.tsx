import React from 'react';
import { useRepoContext } from '../../contexts/repoContext';
import { Outlet } from 'react-router-dom';

export default function Header() {
  const { repoInfo } = useRepoContext();

  return (
    <>
      <header>
        <h2>
          {repoInfo.owner}-{repoInfo.repo}
        </h2>
        <hr />
      </header>
      <Outlet />
    </>
  );
}
