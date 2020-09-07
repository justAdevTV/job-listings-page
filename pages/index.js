import { JobsPage as JobsPageTemplate } from "../templates";
import { Banner, Filter } from "../components";

// Main Page
function Home() {
  return (
    <JobsPageTemplate
      bannerComponent={<Banner />}
      filterComponent={<Filter />}
      jobsListComponent={"hi"}
    />
  );
}

export default Home;
