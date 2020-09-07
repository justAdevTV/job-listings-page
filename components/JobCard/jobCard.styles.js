import styled from "styled-components";

const _JobCardContainer = styled.div`
  position: relative;
  display: flex;
  padding: 3.2rem 4rem;

  ${({ featured, theme }) =>
    featured &&
    `&:before {
        content: '';
        position: absolute;
        height: 100%;
        border-bottom-left-radius: 0.5rem;
        border-top-left-radius: 0.5rem;
        width: .5rem;
        top: 0;
        left: 0;
        background-color: ${theme.colors.primary};
    }`}
`;

const _Logo = styled.img`
  display: block;
  border-radius: 50%;
`;

const _InfoContainer = styled.div`
  margin-left: 2.4rem;

  & > h2 {
    position: relative;
    margin-top: 1px;
    font-size: 0.95em;
    line-height: 1.6em;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.primary};

    & > span {
      position: absolute;
      top: -1px;
      display: inline-block;
      margin-left: 1.6rem;

      /* Round tags */
      & > div:first-child {
        margin-right: 2px;
      }
    }
  }

  & > h3 {
    margin-left: 1px;
    margin-top: 0.85rem;
    letter-spacing: 0.2px;
    cursor: pointer;
    transition: color 0.2s ease-in;
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
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

const _Tags = styled.div`
  margin: auto 0;
  margin-left: auto;

  /* Rectangle tags */
  & > span:not(:last-child) {
    margin-right: 1.85rem;
  }
`;

export { _JobCardContainer, _Logo, _InfoContainer, _Spacer, _Tags };
