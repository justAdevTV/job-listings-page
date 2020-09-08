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

  @media ${({ theme }) => theme.devices.large} {
    flex-direction: column;
  }

  @media ${({ theme }) => theme.devices.small} {
    padding: 3.2rem 2.25rem;
    padding-bottom: 2.2rem;
  }
`;

const _Logo = styled.img`
  display: block;
  border-radius: 50%;

  @media ${({ theme }) => theme.devices.large} {
    position: absolute;
    top: 0;
    transform: translateY(-50%);
    flex-direction: column;
  }

  @media ${({ theme }) => theme.devices.smallest} {
    width: 4.9rem;
    left: 0;
    margin-left: 2.25rem;
  }
`;

const _InfoContainer = styled.div`
  margin-left: 2.4rem;

  & > h2 {
    position: relative;
    margin-top: 1px;
    font-size: 0.95em;
    line-height: 1.6em;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};

    & > span {
      position: absolute;
      top: -1px;
      display: inline-block;
      margin-left: 1.55rem;

      /* Round tags */
      & > span:first-child {
        margin-right: 2px;
        @media ${({ theme }) => theme.devices.smallest} {
          margin-right: 4px;
        }
      }
    }

    @media ${({ theme }) => theme.devices.smallest} {
      font-size: 0.89em;
      letter-spacing: 0.05px;
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

    @media ${({ theme }) => theme.devices.smallest} {
      margin-top: 1rem;
      font-size: 1em;
      letter-spacing: 0.1px;
    }
  }

  & > h4 {
    margin-top: 0.5rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.primary};
    @media ${({ theme }) => theme.devices.smallest} {
      margin-top: 1rem;
      font-size: 0.9em;
    }
  }

  @media ${({ theme }) => theme.devices.large} {
    margin-left: 0;
    margin-top: 2.5rem;
    margin-bottom: 2rem;
  }

  @media ${({ theme }) => theme.devices.smallest} {
    margin-top: 0;
    margin-bottom: 1.8rem;
  }
`;

const _Spacer = styled.span`
  margin-left: 1.45rem;
  margin-right: 1.45rem;
  font-size: 0.9em;
  color: ${({ theme }) => theme.colors.primary};
  @media ${({ theme }) => theme.devices.smallest} {
    margin-left: 0.75rem;
    margin-right: 0.75rem;
  }
`;

const _Tags = styled.div`
  margin: auto 0;
  margin-left: auto;

  /* Rectangle tags */
  & > span {
    @media ${({ theme }) => theme.devices.large} {
      margin-top: 1.6rem;
    }
    @media ${({ theme }) => theme.devices.smallest} {
      margin-top: 1.5rem;
    }
    &:not(:last-child) {
      margin-right: 1.85rem;
      @media ${({ theme }) => theme.devices.smallest} {
        margin-right: 1.9rem;
      }
    }
  }

  @media ${({ theme }) => theme.devices.large} {
    margin-left: 0;
    border-top: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

export { _JobCardContainer, _Logo, _InfoContainer, _Spacer, _Tags };
