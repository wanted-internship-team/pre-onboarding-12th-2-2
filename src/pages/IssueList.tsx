import React, { useEffect, useState } from 'react';
import { useRepoContext } from '../contexts/repoContext';
import useFetch from '../hooks/useFetch';
import { getRepoIssueList } from '../apis/requests';
import { IissueList, IissueSummary } from '../types/issue';
import { STATUS } from '../constants';
import Spinner from '../components/common/Spinner';
import IssueCard from '../components/IssueCard';

export default function IssueList() {
  const [page, setPage] = useState(1);
  const { repoInfo } = useRepoContext();
  const { data, status, errorMessage, fetch } = useFetch<IissueList>(() =>
    getRepoIssueList(repoInfo.owner, repoInfo.repo, page),
  );

  return (
    <div>
      {status === STATUS.LOADING && <Spinner type='page' />}
      {status === STATUS.ERROR && <p>에러!</p>}
      {status === STATUS.SUCCESS &&
        data &&
        data.map((issue: IissueSummary) => (
          <React.Fragment key={issue.id}>
            <IssueCard issue={issue} />
            <hr />
          </React.Fragment>
        ))}

      <div>이곳은 무한 스크롤 ref 만들 곳 </div>
    </div>
  );
}
