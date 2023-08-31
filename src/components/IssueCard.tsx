import React from 'react';
import { IissueSummary, IissueDetail } from '../types/issue';
import styled from 'styled-components';
import { GoIssueOpened, GoComment } from 'react-icons/go';

interface Iprops {
  issue: IissueDetail | IissueSummary;
}

export default function IssueCard(props: Iprops) {
  const { issue } = props;

  const parts = issue.created_at.split('T');
  const createDate = parts[0];

  return (
    <CardContainer>
      <GoIssueOpened className='ic_issue' />
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
