import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import Spinner from '../components/common/Spinner';
import IssueCard from '../components/IssueCard';

import { getIssueDetail } from '../apis/requests';
import { useRepoContext } from '../contexts/repoContext';
import useFetch from '../hooks/useFetch';

import { IissueDetail } from '../types/issue';
import { STATUS } from '../constants';
import ReactMarkdown from 'react-markdown';

export default function IssueDetail() {
  const { issueNumber } = useParams<string>();
  const { repoInfo } = useRepoContext();
  const { data, status, errorMessage } = useFetch<IissueDetail>(() =>
    getIssueDetail(repoInfo.owner, repoInfo.repo, Number(issueNumber)),
  );

  return (
    <>
      {status === STATUS.LOADING && <Spinner type='page' />}
      {status === STATUS.ERROR && <p>{errorMessage}</p>}
      {data && (
        <>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <IssueCard issue={data} />
          </div>
          <div style={{ margin: '20px' }}>
            <ReactMarkdown
              components={{
                img: ({ node, ...props }) => <img style={{ maxWidth: '100%' }} {...props} alt='' />,
              }}
            >
              {String(data.body)}
            </ReactMarkdown>
          </div>
        </>
      )}
    </>
  );
}
