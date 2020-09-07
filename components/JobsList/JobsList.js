import PropTypes from "prop-types";
import { _JobsList } from "./jobsLists.styles";
import { JobCard } from "../";

function JobsList({ jobs, onClick }) {
  // Takes jobs prop and maps out to JobCards
  const generateJobsListCards = (jobs) =>
    jobs.map((jobProps) => {
      // Build array for tags that are searchable
      // In this order [role, level, languages, tools]
      let filterableTags = [];
      filterableTags.push(jobProps.role);
      filterableTags.push(jobProps.level);
      filterableTags = filterableTags.concat(jobProps.languages);
      filterableTags = filterableTags.concat(jobProps.tools);
      // Remove empty entries
      filterableTags = filterableTags.filter((value) => value.length > 0);
      return (
        <JobCard
          {...jobProps}
          filterableTags={filterableTags}
          key={jobProps.id}
          isNew={jobProps.new}
          onClick={onClick}
        />
      );
    });

  return <_JobsList>{generateJobsListCards(jobs)}</_JobsList>;
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
      role: PropTypes.string.isRequired,
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
