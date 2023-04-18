import { withLayout } from "../layout/Layout";
import { AboutPage } from "../page-components/AboutPage/aboutPage";
import { layoutForPagesContent } from "../page-components/layoutPages";

export default withLayout(layoutForPagesContent(AboutPage));
