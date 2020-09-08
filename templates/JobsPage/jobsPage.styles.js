import styled from "styled-components";

const _BannerContainer = styled.div``;

const _JobPageContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const _HeaderSection = styled.header`
  position: relative;
`;

const _JobsListSection = styled.section`
  transition: padding 0.2s ease-in-out;
  padding: 6.75rem 16.5rem;

  ${({ hasFilterActive, theme }) =>
    hasFilterActive &&
    `
      @media ${theme.devices.large} {
        padding-top: 11rem;          
      }
    `}
`;

const _FilterBox = styled.div`
  position: absolute;
  width: calc(100% - 33rem);
  z-index: 999;
  padding: 7.5rem 16.5rem;
  bottom: 0.9rem;
  transform: translateY(50%);
`;

export {
  _BannerContainer,
  _JobPageContainer,
  _HeaderSection,
  _JobsListSection,
  _FilterBox,
};
