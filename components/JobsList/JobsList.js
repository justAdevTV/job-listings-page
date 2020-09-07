import PropTypes from "prop-types";
import { _JobsList } from "./jobsLists.styles";

function JobsList({ jobs, onClick }) {
  return <_JobsList>JobsList</_JobsList>;
}

JobsList.defaultProps = {
  jobs: [],
  onClick: () => {},
};

JobsList.propTypes = {
  jobs: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * Needs for mapping
       */
      id: PropTypes.number.isRequired,
      /**
       * Name of poster
       */
      company: PropTypes.string.isRequired,
      /**
       * Path/to/image.link
       */
      logo: PropTypes.string.isRequired,
      /**
       * Shows tag - new
       */
      new: PropTypes.bool.isRequired,
      /**
       * Shows tag - featured
       */
      featured: PropTypes.bool.isRequired,
      /**
       * Name of position
       */
      position: PropTypes.string.isRequired,
      /**
       * ["Frontend", "Backend", "Fullstack"]
       */
      role: PropTypes.oneOf(["Frontend", "Backend", "Fullstack"]).isRequired,
      /**
       * ["Contract", "Full Time", "Part Time"]
       */
      level: PropTypes.oneOf(["Senior", "Midweight", "Junior"]).isRequired,
      /**
       * Time since posting ex. 2d ago
       */
      postedAt: PropTypes.string.isRequired,
      /**
       * ["Contract", "Full Time", "Part Time"]
       */
      contract: PropTypes.oneOf(["Contract", "Full Time", "Part Time"])
        .isRequired,
      /**
       * Ex. Worldwide
       */
      location: PropTypes.string.isRequired,
      /**
       * Ex. Ruby, JS
       */
      languages: PropTypes.array.isRequired,
      /**
       * Ex. React
       */
      tools: PropTypes.array.isRequired,
    })
  ),
  /**
   * Uplifts ({tagName})
   */
  onClick: PropTypes.func,
};

export default JobsList;
