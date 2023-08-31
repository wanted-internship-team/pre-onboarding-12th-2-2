import React from 'react';
import styled from 'styled-components';
import { AD } from '../../constants';

export default function AdCard() {
  return (
    <AdImageContainer>
      <AdImageWrapper href={AD.URL}>
        <AdText>[AD]</AdText>
        <img src={AD.IMG} alt='ad-image' />
      </AdImageWrapper>
      <hr />
    </AdImageContainer>
  );
}

const AdImageContainer = styled.div`
  position: relative;
`;

const AdText = styled.p`
  text-decoration: none;
  font-size: 0.7rem;
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
`;

const AdImageWrapper = styled.a`
  display: flex;
  justify-content: center;
  background-color: white;
`;
