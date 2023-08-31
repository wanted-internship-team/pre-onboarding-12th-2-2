import React, { useEffect, useState } from 'react';
import Spinner from '../components/common/Spinner';
import IssueCard from '../components/IssueCard';
import AdCard from '../components/common/AdCard';

import { useRepoContext } from '../contexts/repoContext';
import { getRepoIssueList } from '../apis/requests';

import useFetch from '../hooks/useFetch';
import useObserver from '../hooks/useObserver';

import { IissueList, IissueSummary } from '../types/issue';
import { STATUS } from '../constants';

export default function IssueList() {
  const [page, setPage] = useState(1);
  const [issueList, setIssueList] = useState<IissueList>([]);
  const { repoInfo } = useRepoContext();
  const { data, status, errorMessage, fetch } = useFetch<IissueList>();

  const updatePage = () => {
    setPage((prev) => prev + 1);
  };

  const refScroll = useObserver(updatePage, status);

  useEffect(() => {
    fetch({
      callback: () => getRepoIssueList(repoInfo.owner, repoInfo.repo, page),
    });
  }, [page]);

  useEffect(() => {
    if (data) {
      setIssueList((prev) => [...prev, ...data]);
    }
  }, [data]);

  return (
    <div>
      {status === STATUS.LOADING && <Spinner type='page' />}
      {status === STATUS.ERROR && <p>{errorMessage}</p>}
      {issueList &&
        issueList.map((issue: IissueSummary, index: number) => (
          <React.Fragment key={issue.id}>
            <IssueCard issue={issue} />
            {(index + 1) % 4 === 0 && <AdCard />}
          </React.Fragment>
        ))}
      <div ref={refScroll} />
    </div>
  );
}
