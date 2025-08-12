import { QuestionsItems } from "@modules/questions/questionsItems/view/questionsItems";
import Form from "@modules/sendForm/form";
import WarrantyData from "@modules/warrantyModules/warrantyData/warrantyData";
import WarrantyStartBlock from "@modules/warrantyModules/warrantyStartBlock/warrantyStartBlock";
import { Breadcrumbs } from "src/ui/Breadcrumbs/Breadcrumbs";

export default function WarrantyAndPrivacyPolicyPage() {
  return (
    <main>
      <Breadcrumbs />
      <WarrantyStartBlock />
      <WarrantyData />
      <QuestionsItems />
      <Form />
    </main>
  );
}
