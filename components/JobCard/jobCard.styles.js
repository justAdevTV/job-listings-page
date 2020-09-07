import styled from "styled-components";

const _JobCardContainer = styled.div`
  display: flex;
  padding: 3.2rem 4rem;
`;

const _Logo = styled.img`
  display: block;
  border-radius: 50%;
`;

const _InfoContainer = styled.div`
  margin-left: 2.4rem;

  & > h2 {
    margin-top: 1px;
    font-size: 0.95em;
    line-height: 1.6em;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.primary};
  }

  & > h3 {
    margin-left: 1px;
    margin-top: 0.9rem;
    letter-spacing: 0.2px;
  }

  & > h4 {
    margin-top: 0.5rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const _Spacer = styled.span`
  margin-left: 1.45rem;
  margin-right: 1.45rem;
  font-size: 0.9em;
  color: ${({ theme }) => theme.colors.primary};
`;

const _Tags = styled.div``;

export { _JobCardContainer, _Logo, _InfoContainer, _Spacer, _Tags };
