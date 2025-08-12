import OurWorksList from "@modules/aboutUsModule/ourWorksList/view/ourWorksList";
import OurWorksStartBlock from "@modules/aboutUsModule/ourWorksStartBlock/ourWorksStartBlock";
import MapBlock from "@modules/map/map";
import { QuestionsItems } from "@modules/questions/questionsItems/view/questionsItems";
import Form from "@modules/sendForm/form";
import { Breadcrumbs } from "src/ui/Breadcrumbs/Breadcrumbs";

export default function OurWorksPage() {
  return (
    <main>
      <Breadcrumbs />
      <OurWorksStartBlock />
      <OurWorksList />
      <MapBlock />
      <QuestionsItems />
      <Form />
    </main>
  );
}
