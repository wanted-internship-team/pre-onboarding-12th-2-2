import React, { useEffect, useState } from 'react';
import { ERROR_MESSAGE, STATUS } from '../constants';
import { OctokitResponse } from '@octokit/types';
import { RequestError } from '@octokit/request-error';

type status = keyof typeof STATUS;

interface Icallback<R> {
  callback?: () => Promise<OctokitResponse<R>>;
}

export default function useFetch<R>(callback?: () => Promise<OctokitResponse<R>>) {
  const [data, setData] = useState<R>();
  const [status, setStatus] = useState<status>(STATUS.IDLE);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const fetch = async ({ callback }: Icallback<R>) => {
    try {
      if (!callback) return;
      setStatus(STATUS.LOADING);

      const res = await callback();

      if (res.data) {
        const { data } = res;
        setData(data);
      }

      setStatus(STATUS.SUCCESS);
    } catch (error) {
      setStatus(STATUS.ERROR);
      if (error instanceof RequestError) {
        if (error.status === 404) {
          setErrorMessage(ERROR_MESSAGE.USER[404]);
          console.error(ERROR_MESSAGE.DEV[404]);
        }
        if (error.status === 422) {
          setErrorMessage(ERROR_MESSAGE.USER[422]);
          console.error(ERROR_MESSAGE.DEV[422]);
        }
      } else {
        // 500 에러 혹은 알 수 없는 에러
        setErrorMessage(ERROR_MESSAGE.USER.DEFAULT);
        console.error(ERROR_MESSAGE.DEV.DEFAULT);
      }
    }
  };

  useEffect(() => {
    fetch({ callback });
  }, []);

  return { data, status, errorMessage, fetch };
}
