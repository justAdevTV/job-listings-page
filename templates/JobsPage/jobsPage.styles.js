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
  padding: 6.75rem 16.5rem;
`;

const _FilterBox = styled.div`
  position: absolute;
  width: calc(100% - 33rem);
  z-index: 999;
  padding: 7.5rem 16.5rem;
  top: 4.5rem;
`;

export {
  _BannerContainer,
  _JobPageContainer,
  _HeaderSection,
  _JobsListSection,
  _FilterBox,
};
