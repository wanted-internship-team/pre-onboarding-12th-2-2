import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { PATH } from '../constants';
import ic_error from '../assets/ic_error.svg';

interface ErrorProp {
  errorMessage?: string;
}

export default function Error({ errorMessage }: ErrorProp) {
  return (
    <Container>
      <img src={ic_error} alt='에러 표시 이미지' />
      <h2>{errorMessage}</h2>
      <Link to={PATH.MAIN}>
        <button type='button'>돌아가기</button>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 200px auto 0;
  text-align: center;

  img {
    width: 260px;
    height: 260px;
    object-fit: cover;
    margin: 0 auto;
  }

  h2 {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 24px;
  }

  button {
    padding: 0 16px;
    height: 48px;
    background-color: white;
    border: 1px solid lightgray;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
  }
`;
