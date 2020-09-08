import styled from "styled-components";

const _JobsList = styled.div`
  & > div:not(:first-child) {
    margin-top: 2.35rem;
    @media ${({ theme }) => theme.devices.large} {
      margin-top: 8rem;
    }

    @media ${({ theme }) => theme.devices.smallest} {
      margin-top: 3.9rem;
    }
  }
`;

export { _JobsList };
