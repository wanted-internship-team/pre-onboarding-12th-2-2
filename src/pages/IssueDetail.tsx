import React from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { styled } from 'styled-components';

import Spinner from '../components/common/Spinner';
import IssueCard from '../components/IssueCard';
import Error from './Error';

import { getIssueDetail } from '../apis/requests';
import { useRepoContext } from '../contexts/repoContext';
import useFetch from '../hooks/useFetch';

import { IissueDetail } from '../types/issue';
import { STATUS } from '../constants';

export default function IssueDetail() {
  const { issueNumber } = useParams<string>();
  const { repoInfo } = useRepoContext();
  const { data, status, errorMessage } = useFetch<IissueDetail>(() =>
    getIssueDetail(repoInfo.owner, repoInfo.repo, Number(issueNumber)),
  );

  return (
    <>
      {status === STATUS.LOADING && <Spinner type='page' />}
      {status === STATUS.ERROR && <Error errorMessage={errorMessage} />}
      {data && (
        <DetailContainer>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <IssueCard issue={data} />
          </div>
          <div style={{ margin: '20px' }}>
            <ReactMarkdown
              components={{
                img: ({ ...props }) => <img style={{ maxWidth: '100%' }} {...props} alt='' />,
              }}
            >
              {String(data.body)}
            </ReactMarkdown>
          </div>
        </DetailContainer>
      )}
    </>
  );
}

const DetailContainer = styled.div`
  pre {
    background-color: #f6f8fa;
    border-radius: 20px;
    padding: 20px;

    code {
      font-family:
        ui-monospace,
        SFMono-Regular,
        SF Mono,
        Menlo,
        Consolas,
        Liberation Mono,
        monospace;
      font-size: 14px;
      line-height: 1.6em;
    }
  }

  div p code {
    background: rgba(135, 131, 120, 0.15);
    color: #eb5757;
    border-radius: 3px;
    padding: 0.3em 0.4em;
  }
`;
