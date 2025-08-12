"use client";

import { useState, useEffect } from "react";
import { MultiContainer } from "src/ui/multiContainer/multiContainer";
import classes from "./vacanciesBlock.module.scss";
import { Typography } from "@typography/typography";
import ArrowIcon from "@assets/icons/arrowIcon.svg";
import Image from "next/image";
import { Vacancy } from "../types/types";
import Pagination from "src/ui/pagination/pagination";
import { getVacanciesData } from "../model/vacancyModel";

interface VacanciesResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Vacancy[];
}

const VacanciesBlock: React.FC = () => {
  const [page, setPage] = useState(1);
  const [pageSize] = useState(8);
  const [data, setData] = useState<VacanciesResponse>({
    count: 0,
    next: null,
    previous: null,
    results: [],
  });

  useEffect(() => {
    getVacanciesData(page, pageSize).then((response) => {
      if (response.results.length === 0 && page > 1) {
        setPage(1);
      } else {
        setData(response);
      }
    });
  }, [page, pageSize]);

  const totalPages = Math.ceil(data.count / pageSize);

  if (data.results.length === 0) return null;

  return (
    <section className={classes.vacanciesBlock}>
      <MultiContainer>
        <Typography variant="h1" weight="bold">
          Vacancies
        </Typography>
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
        <div className={classes.vacanciesItems}>
          {data.results &&
            data.results.slice(0, pageSize).map((item: Vacancy) => (
              <div className={classes.vacanciesItem} key={item.id}>
                <Typography variant="span" weight="semibold">
                  {item.is_active ? "Relevant" : "Not relevant"}
                </Typography>
                <div className={classes.vacanciesItemContent}>
                  <Typography variant="h3" weight="bold">
                    {item.title}
                  </Typography>
                  <div className={classes.vacanciesItemContentText}>
                    <Typography variant="p" weight="regular">
                      <b>Location:</b> {item.location}
                    </Typography>
                    <Typography variant="p" weight="regular">
                      <b>Requirements:</b> {item.requirements}
                    </Typography>
                    <Typography variant="p" weight="regular">
                      <b>Conditions:</b> {item.conditions}
                    </Typography>
                  </div>
                  <a className={classes.button} href="#form">
                    <Typography variant="h4" weight="bold">
                      Reply
                    </Typography>
                    <div className={classes.buttonIcon}>
                      <Image src={ArrowIcon} alt="arrow icon" width={50} height={50}/>
                    </div>
                  </a>
                </div>
              </div>
            ))}
        </div>
      </MultiContainer>
    </section>
  );
};

export default VacanciesBlock;
