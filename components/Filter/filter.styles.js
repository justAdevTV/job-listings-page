import styled from "styled-components";

const _FilterContainer = styled.div`
  display: flex;
  padding: 2rem 4rem;
`;

const _Clear = styled.a`
  margin: auto 0;
  margin-left: auto;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  text-decoration: underline;
`;

const _Tags = styled.div`
  & > div:not(:last-child) {
    margin-right: 1.7rem;
  }
`;

export { _Clear, _FilterContainer, _Tags };
