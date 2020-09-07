import PropTypes from "prop-types";
import { Card, Tag } from "../";
import {
  _InfoContainer,
  _Logo,
  _JobCardContainer,
  _Tags,
  _Spacer,
} from "./jobCard.styles";

// TODO: have data for right-hand tags already parsed
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
  location,
  languages,
  tools,
}) {
  // TODO: Write logic for generate tags
  const generateTags = () => {
    return [];
  };

  return (
    <Card>
      <_JobCardContainer>
        <_Logo src={logo} alt={`logo for ${company}`} />
        <_InfoContainer>
          <h2>
            {company}
            <span>
              {isNew && <Tag round>NEW!</Tag>}{" "}
              {featured && (
                <Tag dark round>
                  FEATURED
                </Tag>
              )}
            </span>
          </h2>
          <h3>{position}</h3>
          <h4>
            {postedAt}
            <_Spacer>&#8226;</_Spacer>
            {contract}
            <_Spacer>&#8226;</_Spacer>
            {location}
          </h4>
        </_InfoContainer>
        <_Tags>{generateTags()}</_Tags>
      </_JobCardContainer>
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
