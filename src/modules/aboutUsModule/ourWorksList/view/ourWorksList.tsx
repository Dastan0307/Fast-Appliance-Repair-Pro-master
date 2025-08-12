"use client";

import { MultiContainer } from "src/ui/multiContainer/multiContainer";
import classes from "./ourWorksList.module.scss";
import { Typography } from "@typography/typography";
import ArrowIcon from "@assets/icons/arrowIcon.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Modal } from "src/ui/modal/modal";
import { YouTubePlayer } from "src/ui/youTubePlayer/youTubePlayer";
import { WorksResponse, IWorks } from "../types/types";
import { getWorksData, getWorksDataMobile } from "../model/ourWorksModel";
import Pagination from "src/ui/pagination/pagination";
import emptyStateImage from "@assets/images/emptyStateImage.png";
import parse from "html-react-parser";
import useMediaQuery from "@utils/hooks/useMediaQuery";

const OurWorksList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<IWorks | null>(null);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(9);
  const [data, setData] = useState<WorksResponse>({
    count: 0,
    next: null,
    previous: null,
    results: [],
  });
  const [dataMobile, setDataMobile] = useState<IWorks[]>([]);
  const isMobile = useMediaQuery("(max-width: 430px)");

  useEffect(() => {
    if (!isMobile) {
      getWorksData(page, pageSize).then((response) => {
        if (response.results.length === 0 && page > 1) {
          setPage(1);
        } else {
          setData(response);
        }
      });
    }
  }, [page, pageSize, isMobile]);

  useEffect(() => {
    if (isMobile) {
      getWorksDataMobile().then((response) => setDataMobile(response));
    }
  }, [isMobile]);

  const totalPages = Math.ceil(data.count / pageSize);

  if (!data.results && !dataMobile) return null;

  const handleOpenModal = (item: IWorks) => {
    setSelectedItem(item);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedItem(null);
  };

  return (
    <section className={classes.ourWorksList}>
      <MultiContainer>
        <Typography variant="h1" weight="bold">
          Our Works
        </Typography>
        {!isMobile && (
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        )}
        <div className={classes.ourWorksListItems}>
          {(isMobile ? dataMobile : data.results.slice(0, pageSize)).map(
            (item) => (
              <div className={classes.ourWorksListItem} key={item.id}>
                <div className={classes.ourWorksListItemImage}>
                  <Image
                    src={item.image || emptyStateImage}
                    alt={item.description}
                  />
                </div>
                <div className={classes.ourWorksListItemText}>
                  <Typography variant="h4" weight="regular">
                    {item.short_description}
                  </Typography>
                </div>
                <div
                  className={classes.buttonCard}
                  onClick={() => handleOpenModal(item)}
                >
                  <Typography variant="h3" weight="bold">
                    More
                  </Typography>
                  <div className={classes.buttonIcon}>
                    <Image src={ArrowIcon} alt="arrow icon" />
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </MultiContainer>

      {selectedItem && (
        <Modal isOpen={isOpen} onClose={handleCloseModal}>
          <div className={classes.ourWorksListItemModal}>
            <div className={classes.ourWorksListItemModalTop}>
              {selectedItem.video_on_youtube ? (
                <YouTubePlayer
                  url={selectedItem.video_on_youtube}
                  className={classes.ourWorksListItemPlayer}
                />
              ) : (
                <div className={classes.ourWorksListItemPlayerImage}>
                  <Image
                    src={selectedItem.image || emptyStateImage}
                    alt={selectedItem.description}
                  />
                </div>
              )}
              <div className={classes.ourWorksListItemModalText}>
                <div>
                  <Typography variant="h3" weight="bold" truncate={50}>
                    {selectedItem.title}
                  </Typography>
                  <div className={classes.description}>
                    {parse(selectedItem.description)}
                  </div>
                </div>
                <a
                  href="#form"
                  className={classes.button}
                  onClick={handleCloseModal}
                >
                  <Typography variant="h5" weight="bold">
                    Book it online
                  </Typography>
                  <div className={classes.buttonIcon}>
                    <Image src={ArrowIcon} alt="arrow icon" />
                  </div>
                </a>
              </div>
            </div>
            <div className={classes.ourWorksListItemImages}>
              {selectedItem.images &&
                selectedItem.images.map((image) => (
                  <div key={image.id}>
                    <div className={classes.imageBlock}>
                      <Image
                        src={image.image || emptyStateImage}
                        alt="modal image"
                        width={isMobile ? 150 : 405}
                        height={isMobile ? 100 : 263}
                      />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default OurWorksList;
