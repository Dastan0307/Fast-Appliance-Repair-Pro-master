import Image from "next/image";
import classes from "./pagination.module.scss";
import arrow from "@assets/icons/arrowPagination.svg";
import { Typography } from "@typography/typography";
import useMediaQuery from "@utils/hooks/useMediaQuery";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const isMobile = useMediaQuery("(max-width: 430px)");
  const maxPages = isMobile ? 3 : 8; 

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  let startPage: number;
  let endPage: number;

  if (totalPages <= maxPages) {
    startPage = 1;
    endPage = totalPages;
  } else {
    const maxPagesBeforeCurrent = Math.floor((maxPages - 1) / 2);
    const maxPagesAfterCurrent = Math.ceil((maxPages - 1) / 2);

    startPage = Math.max(1, currentPage - maxPagesBeforeCurrent);
    endPage = Math.min(totalPages, currentPage + maxPagesAfterCurrent);

    if (endPage - startPage + 1 < maxPages) {
      if (startPage === 1) {
        endPage = Math.min(totalPages, startPage + maxPages - 1);
      } else if (endPage === totalPages) {
        startPage = Math.max(1, endPage - maxPages + 1);
      }
    }
  }

  const displayedPages = pages.slice(startPage - 1, endPage);
  const showLeftEllipsis = startPage > 1;
  const showRightEllipsis = endPage < totalPages;

  const handlePageChange = (page: number) => {
    if (onPageChange && page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const renderPageLink = (page: number, index: number) => {
    return (
      <div key={index + 1}>
        <button
          className={`${classes.page} ${
            page === currentPage ? classes.active : ""
          }`}
          onClick={() => handlePageChange(page)}
        >
          <Typography variant="h3" weight="semibold">
            {page}
          </Typography>
        </button>
      </div>
    );
  };

  const renderEllipsis = (key: string) => {
    return (
      <button key={key} className={classes.page} disabled>
        <Typography variant="h3" weight="semibold">
          ...
        </Typography>
      </button>
    );
  };

  return (
    <div className={classes.pagination}>
      <button
        className={`${classes.arrow} ${isFirstPage ? classes.disabled : ""} ${
          classes.leftArrow
        }`}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={isFirstPage}
      >
        <Image src={arrow} alt="arrow" />
      </button>

      {showLeftEllipsis && renderEllipsis("left-ellipsis")}
      {displayedPages.map((page, index) => renderPageLink(page, index))}
      {showRightEllipsis && renderEllipsis("right-ellipsis")}

      <button
        className={`${classes.arrow} ${isLastPage ? classes.disabled : ""}`}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={isLastPage}
      >
        <Image src={arrow} alt="arrow" />
      </button>
    </div>
  );
}