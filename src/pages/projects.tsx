import { withLayout } from "../layout/Layout";
import { layoutForPagesContent } from "../page-components/layoutPages";
import { ProjectPage } from "../page-components/ProjectsPage/projectPage";

export default withLayout(layoutForPagesContent(ProjectPage));
