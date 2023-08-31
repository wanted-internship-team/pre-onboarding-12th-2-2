import React, { useEffect, useState } from 'react';
import { ERROR_MESSAGE, STATUS } from '../constants';
import { OctokitResponse } from '@octokit/types';

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
      // FIXME: Error code 상수화! (not 'NOT FOUND')
      if (error instanceof Error) {
        if (error.message === 'Not Found') {
          // 에러코드 400
          setErrorMessage(ERROR_MESSAGE.USER[404]);
          console.error(ERROR_MESSAGE.DEV[404]);
        }
        if (error.message === 'Unprocessable Entity') {
          // 에러코드 422
          setErrorMessage(ERROR_MESSAGE.USER[422]);
          console.error(ERROR_MESSAGE.DEV[422]);
        }
      }
    }
  };

  useEffect(() => {
    fetch({ callback });
  }, []);

  return { data, status, errorMessage, fetch };
}
