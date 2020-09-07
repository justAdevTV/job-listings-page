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

  @media ${({ theme }) => theme.devices.tablet} {
    flex-direction: column;
  }
`;

const _Logo = styled.img`
  display: block;
  border-radius: 50%;

  @media ${({ theme }) => theme.devices.tablet} {
    position: absolute;
    top: 0;
    transform: translateY(-50%);
    flex-direction: column;
  }
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
    color: ${({ theme }) => theme.colors.darkGray2};

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  & > h4 {
    margin-top: 0.5rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.primary};
  }

  @media ${({ theme }) => theme.devices.tablet} {
    margin-left: 0;
    margin-top: 2.5rem;
    margin-bottom: 2rem;
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
    @media ${({ theme }) => theme.devices.tablet} {
      margin-top: 1.6rem;
    }
  }

  @media ${({ theme }) => theme.devices.tablet} {
    margin-left: 0;
    border-top: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

export { _JobCardContainer, _Logo, _InfoContainer, _Spacer, _Tags };
