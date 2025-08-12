import AboutUsStartBlock from "@modules/aboutUsModule/aboutUsStartBlock/aboutUsStartBlock";
import Form from "@modules/sendForm/form";
import VacanciesBlock from "@modules/vacanciesBlock/view/vacanciesBlock";
import { Metadata } from "next";
import { Breadcrumbs } from "src/ui/Breadcrumbs/Breadcrumbs";


export const metadata: Metadata = {
  title: "Careers | Appliance Technician Jobs Across Canada",
  description: "Join Fast Appliance Repair Pro’s national team! Hiring licensed appliance techs, dispatchers & service staff. Grow your career with a top Canadian employer.",
};
export default function VacanciesPage() {
  return (
    <main>
      <Breadcrumbs />
      <AboutUsStartBlock isVacancies={true} />
      <VacanciesBlock />
      <Form isVacancy={true} />
    </main>
  );
}
