import React, { ChangeEvent, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Spinner from '../components/common/Spinner';

import { useRepoContext } from '../contexts/repoContext';
import useFetch from '../hooks/useFetch';
import { getRepo } from '../apis/requests';

import { IrepoResponse } from '../types/issue';
import { STATUS, PATH } from '../constants';

import styled from 'styled-components';

export default function Main() {
  const navigate = useNavigate();
  const [values, setValues] = useState({ owner: '', repo: '' });
  const { setRepoInfo } = useRepoContext();

  const setInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const { data, status, errorMessage, fetch } = useFetch<IrepoResponse>();

  const validateRepo = () => {
    fetch({
      callback: () => getRepo(values.owner, values.repo),
    });
  };

  useEffect(() => {
    if (data && status === STATUS.SUCCESS) {
      setRepoInfo({
        owner: data.owner.login,
        repo: data.name,
      });
      navigate(PATH.ISSUES);
    }
  }, [data, status]);

  const navigateDefaultPage = () => {
    setRepoInfo({
      owner: 'facebook',
      repo: 'react',
    });
    navigate(PATH.ISSUES);
  };

  return (
    <MainContainer>
      <h2>Github Issue 조회</h2>
      <h4>Issue를 조회할 Repository의 정보를 모두 입력해 주세요.</h4>
      <InputBox
        type='text'
        placeholder='organization or username'
        name='owner'
        onChange={setInputValue}
      />
      <InputBox type='text' placeholder='repository' name='repo' onChange={setInputValue} />

      <SubmitButton type='button' onClick={validateRepo}>
        {status === STATUS.LOADING ? <Spinner type='button' /> : '이슈 보러가기'}
      </SubmitButton>
      {errorMessage && <ErrorText>{errorMessage}</ErrorText>}

      <RedirectionText>※ Facebook/React의 이슈를 보고 싶다면?</RedirectionText>
      <RedirectButton type='button' onClick={navigateDefaultPage}>
        React Issue로 바로 가기
      </RedirectButton>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  padding-top: 25%;
  width: 50%;
  min-width: 80px;
  max-width: 800px;
`;

const InputBox = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  width: 100%;
  height: 1.5rem;
`;

const SubmitButton = styled.button`
  width: 100%;
  background-color: #3fb950;
  border: 1px solid black;
  margin: 5px auto;
  cursor: pointer;
  height: 2rem;
  color: white;
`;

const ErrorText = styled.p`
  color: red;
`;

const RedirectionText = styled.p`
  margin-bottom: 2px;
`;

const RedirectButton = styled.button`
  background: none;
  border: none;
  color: #3fb950;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  text-decoration: underline;
`;
