import React from 'react';
import { useRepoContext } from '../../contexts/repoContext';
import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';

export default function Header() {
  const { repoInfo } = useRepoContext();

  return (
    <>
      <HeaderContainer>
        {repoInfo.owner} / {repoInfo.repo}
      </HeaderContainer>
      <Outlet />
    </>
  );
}

const HeaderContainer = styled.header`
  margin: 20px;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
`;
