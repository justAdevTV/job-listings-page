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

  @media ${({ theme }) => theme.devices.medium} {
    padding-left: 2.4rem;
    padding-right: 2.4rem;
  }

  @media ${({ theme }) => theme.devices.small} {
    padding-top: 4.7rem;
  }
`;

const _FilterBox = styled.div`
  position: absolute;
  transition: all 0.2s ease-in-out;
  /* Sum of left & right padding */
  width: calc(100% - 33rem);
  z-index: 999;
  padding: 7.5rem 16.5rem;
  bottom: 0.9rem;
  transform: translateY(50%);

  @media ${({ theme }) => theme.devices.medium} {
    padding-left: 2.4rem;
    padding-right: 2.4rem;
    /* Sum of left & right padding */
    width: calc(100% - 4.8rem);
  }
`;

export {
  _BannerContainer,
  _JobPageContainer,
  _HeaderSection,
  _JobsListSection,
  _FilterBox,
};
