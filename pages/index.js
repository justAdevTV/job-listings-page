import { JobsPage as JobsPageTemplate } from "../templates";
import { Banner } from "../components";

function Home() {
  return (
    <JobsPageTemplate
      bannerComponent={<Banner />}
      filterComponent={"hi"}
      jobsListComponent={"hi"}
    />
  );
}

export default Home;
