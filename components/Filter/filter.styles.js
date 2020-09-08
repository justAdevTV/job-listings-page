import styled from "styled-components";

const _FilterContainer = styled.div`
  display: flex;
  align-items: baseline;
  padding: 2rem 4rem;
  padding-top: 0.4rem;
  @media ${({ theme }) => theme.devices.small} {
    padding-left: 2.25rem;
    padding-right: 2.25rem;
  }
`;

const _Clear = styled.a`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary};
  padding-top: 1.6rem;
  margin: auto 0;
  margin-left: auto;
  font-weight: 500;
  font-size: 0.85em;
  transition: text-decoration 0.2s ease-in;
  &:hover {
    text-decoration: underline;
  }
`;

const _Tags = styled.div`
  & > div {
    margin-top: 1.6rem;
    &:not(:last-child) {
      margin-right: 1.7rem;
    }
  }
`;

export { _Clear, _FilterContainer, _Tags };
