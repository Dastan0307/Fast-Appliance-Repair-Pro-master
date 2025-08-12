"use client";

import BlogCard from "src/ui/blogCard/blogCard";
import { MultiContainer } from "src/ui/multiContainer/multiContainer";
import classes from "./articlesModule.module.scss";
import { Typography } from "@typography/typography";
import { getArticlesData } from "../model/articlesModel";
import { Article, ArticleResponse } from "../types/types";
import { useEffect, useState } from "react";
import Pagination from "src/ui/pagination/pagination";

const ArticlesModule = () => {
  const [page, setPage] = useState(1);
  const [pageSize] = useState(8);
  const [data, setData] = useState<ArticleResponse>({
    count: 0,
    next: null,
    previous: null,
    results: [],
  });

  useEffect(() => {
    getArticlesData(page, pageSize).then((response) => {
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
    <section className={classes.articlesModule}>
      <MultiContainer>
        <Typography variant="h1" weight="bold">
          Articles
        </Typography>
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
        <div className={classes.articlesModuleContent}>
          {data.results &&
            data.results
              .slice(0, pageSize)
              .map((item: Article) => (
                <BlogCard
                  key={item.id}
                  title={item.title}
                  description={item.text_for_cover}
                  image={item.images[0].image}
                  href={item.slug}
                />
              ))}
        </div>
      </MultiContainer>
    </section>
  );
};

export default ArticlesModule;
