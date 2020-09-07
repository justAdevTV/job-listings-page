import styled from "styled-components";

const _JobsList = styled.div`
  & > div:not(:first-child) {
    margin-top: 2.35rem;
    @media ${({ theme }) => theme.devices.tablet} {
      margin-top: 8rem;
    }
  }
`;

export { _JobsList };
