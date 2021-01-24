import React from 'react';
import styled from 'styled-components/macro';

interface RowDetailsProps {
  label: string;
  content: string;
}

export function RowDetails(props: RowDetailsProps) {
  const { label, content } = props;
  return (
    <Wrapper>
      <Label>{label}</Label>
      <div>:</div>
      <Content>{content}</Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 8rem 1.25rem 1fr;
`;

const Label = styled.div`
  font-weight: 600;
`;
const Content = styled.div``;
