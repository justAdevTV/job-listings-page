import PropTypes from "prop-types";
import { Card } from "../";
import { _JobCardContainer } from "./jobCard.styles";

function JobCard({
  company,
  logo,
  isNew,
  featured,
  position,
  role,
  level,
  postedAt,
  contract,
  locaiton,
  languages,
  tools,
}) {
  return (
    <Card>
      <_JobCardContainer>hi</_JobCardContainer>
    </Card>
  );
}

JobCard.defaultProps = {
  onClick: () => {},
};

JobCard.propTypes = {
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
  isNew: PropTypes.bool.isRequired,
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
  contract: PropTypes.oneOf(["Contract", "Full Time", "Part Time"]).isRequired,
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
  /**
   * Uplifts ({tagName})
   */
  onClick: PropTypes.func,
};

export default JobCard;
