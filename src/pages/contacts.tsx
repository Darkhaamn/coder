import { withLayout } from "../layout/Layout";
import { ContactsPage } from "../page-components/ContactsPage/contactsPage";

import { layoutForPagesContent } from "../page-components/layoutPages";

export default withLayout(layoutForPagesContent(ContactsPage));
