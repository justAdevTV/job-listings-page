import styled from "styled-components";

const _FilterTag = styled.div`
  display: inline-block;

  & > span {
    vertical-align: top;
    display: inline-block;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 0.82em;
    font-weight: 700;
    padding: 0.65rem 0.75rem;
    padding-top: 0.75rem;
    letter-spacing: 0.4px;
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
    background-color: ${({ theme }) => theme.colors.lightGrayBackground};
    cursor: default;
    user-select: none;
  }
`;

const _Remove = styled.img`
  vertical-align: top;
  display: inline-block;
  padding: 0.95rem;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  background-color: ${({ theme }) => theme.colors.primary};
  transition: all 0.15s ease-in;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.darkGray2};
  }
`;

export { _FilterTag, _Remove };
