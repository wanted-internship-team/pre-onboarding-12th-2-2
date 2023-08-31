import React, { ChangeEvent, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { getRepo } from '../apis/requests';
import { IrepoResponse, IrepoInfo } from '../types/issue';
import { useRepoContext } from '../contexts/repoContext';
import Spinner from '../components/common/Spinner';
import { STATUS, PATH } from '../constants';

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
    <div>
      <input type='text' placeholder='organization' name='owner' onChange={setInputValue} />
      <input type='text' placeholder='repository' name='repo' onChange={setInputValue} />

      <button type='button' onClick={validateRepo}>
        {status === STATUS.LOADING ? <Spinner type='button' /> : '이슈 보러가기'}
      </button>
      {errorMessage && <p>{errorMessage}</p>}

      <button type='button' onClick={navigateDefaultPage}>
        Default Repo로 이동
      </button>
    </div>
  );
}
