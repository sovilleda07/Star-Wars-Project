import styled from 'styled-components';

export default function Paginator({
  previous = false,
  next = false,
  page = 1,
  handlePrev,
  handleNext,
}) {
  return (
    <StyledPaginator>
      <Button disabled={!previous} onClick={handlePrev}>
        Prev
      </Button>
      <CurrentPage>Current page: {page}</CurrentPage>
      <Button disabled={!next} onClick={handleNext}>
        Next
      </Button>
    </StyledPaginator>
  );
}

const StyledPaginator = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 16px;
`;

const CurrentPage = styled.span`
  font-sizeL 14px;
`;

const Button = styled.button`
  padding: 8px 16px;
  border: 0;
  outline: 0 none;
`;