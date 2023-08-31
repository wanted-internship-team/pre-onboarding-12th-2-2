import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { IissueSummary, IissueDetail } from '../types/issue';
import { GoIssueOpened, GoComment } from 'react-icons/go';

interface Iprops {
  issue: IissueDetail | IissueSummary;
}

export default function IssueCard(props: Iprops) {
  const { issue } = props;

  const parts = issue.created_at.split('T');
  const createDate = parts[0];

  const location = useLocation();
  const pathNumber = location.pathname.substr(8);

  return (
    <CardContainer>
      {pathNumber ? (
        <IMAGE src={issue.user.avatar_url} alt='프로필' />
      ) : (
        <GoIssueOpened className='ic_issue' />
      )}
      <InfoContainer>
        <CardInfo>
          <h1>
            #{issue.number} {issue.title}
          </h1>
          <span>
            opened on {createDate} by {issue.user.login}
          </span>
        </CardInfo>
        <Comments>
          <GoComment className='ic_comments' />
          <span>{issue.comments}</span>
        </Comments>
      </InfoContainer>
    </CardContainer>
  );
}

const CardContainer = styled.section`
  padding: 0 20px 20px;
  margin-bottom: 20px;
  display: flex;
  gap: 12px;
  align-items: flex-start;
  border-bottom: 1px solid lightgray;
  width: 100%;

  .ic_issue {
    margin-top: 2px;
    color: #3fb950;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const IMAGE = styled.img`
  width: 48px;
  height: 48px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  h1 {
    font-size: 16px;
    font-weight: 700;
  }

  span {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.5);
  }
`;

const Comments = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  color: rgba(0, 0, 0, 0.5);

  span {
    font-size: 12px;
  }
`;
