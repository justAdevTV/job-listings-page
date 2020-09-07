import styled from "styled-components";

const _Card = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0.5rem;
  box-shadow: ${({ theme }) => theme.shadows.shadow1};
`;

export { _Card };
