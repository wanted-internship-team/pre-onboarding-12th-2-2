import React from 'react';
import { Link } from 'react-router-dom';
import { useRepoContext } from '../../contexts/repoContext';
import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';
import { GoListUnordered, GoHome } from 'react-icons/go';
import { PATH } from '../../constants/index';

export default function Header() {
  const { repoInfo } = useRepoContext();

  return (
    <>
      <HeaderContainer>
        <Link to={PATH.MAIN}>
          <GoHome />
        </Link>
        {repoInfo.owner} / {repoInfo.repo}
        <Link to={PATH.ISSUES}>
          <GoListUnordered />
        </Link>
      </HeaderContainer>
      <Outlet />
    </>
  );
}

const HeaderContainer = styled.header`
  margin: 20px 20px 28px;
  font-size: 24px;
  font-weight: 700;
  line-height: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
