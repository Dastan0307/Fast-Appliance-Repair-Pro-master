import { MultiContainer } from "src/ui/multiContainer/multiContainer";
import classes from "./repairDetails.module.scss";
import { Typography } from "@typography/typography";
import RepairDetail from "@assets/icons/RepairDetail.svg";
import Image from "next/image";

const data = [
  { image: RepairDetail, title: "RepairDetailRepairDetail" },
  { image: RepairDetail, title: "RepairDetail" },
  { image: RepairDetail, title: "RepairDetail" },
  { image: RepairDetail, title: "RepairDetail" },
  { image: RepairDetail, title: "RepairDetail" },
  { image: RepairDetail, title: "RepairDetail" },
  { image: RepairDetail, title: "RepairDetail" },
];
const RepairDetails = () => {
  return (
    <section className={classes.repairDetails}>
      <MultiContainer>
        <div className={classes.repairDetailsItems}>
          {data &&
            data.map((item, index) => (
              <div key={index} className={classes.repairDetailsItem}>
                <div className={classes.imageBlock}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={100}
                    height={100}
                  />
                </div>
                <div className={classes.textBlock}>
                  <Typography variant="h2" weight="semibold" truncate={18}>
                    {item.title}
                  </Typography>
                </div>
              </div>
            ))}
        </div>
      </MultiContainer>
    </section>
  );
};

export default RepairDetails;
