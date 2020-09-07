import PropTypes from "prop-types";
import {
  _JobPageContainer,
  _HeaderSection,
  _JobsListSection,
  _FilterBox,
} from "./jobsPage.styles";

function JobsPage({ bannerComponent, filterComponent, jobsListComponent }) {
  return (
    <_JobPageContainer>
      <_HeaderSection>{bannerComponent}</_HeaderSection>
      <_FilterBox>{filterComponent}</_FilterBox>
      <_JobsListSection>{jobsListComponent}</_JobsListSection>
    </_JobPageContainer>
  );
}

JobsPage.propTypes = {
  bannerComponent: PropTypes.node.isRequired,
  filterComponent: PropTypes.node.isRequired,
  jobsListComponent: PropTypes.node.isRequired,
};

export default JobsPage;
