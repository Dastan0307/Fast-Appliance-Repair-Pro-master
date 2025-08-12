"use client";

import { useRef, useState, useEffect } from "react";
import classes from "./questionsItems.module.scss";
import { FaqItem } from "../../types/types";
import { Typography } from "@typography/typography";
import QuestionIsOpen from "../../questionIsOpen/questionIsOpen";
import QuestionIcon from "../../questionIcon/questionIcon";
import { MultiContainer } from "src/ui/multiContainer/multiContainer";
import { getFaqsData } from "../model/questionsModel";
import parse from "html-react-parser";
export const QuestionsItems = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [faqs, setFaqs] = useState<FaqItem[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await getFaqsData();
        setFaqs(response.results || []);
      } catch (error) {
        console.error("Failed to fetch FAQs:", error);
        setFaqs([]);
      }
    };

    fetchFaqs();
  }, []);
  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  useEffect(() => {
    contentRefs.current.forEach((ref, index) => {
      if (!ref) return;

      if (openIndex === index) {
        const scrollHeight = ref.scrollHeight;
        ref.style.maxHeight = scrollHeight + "px";
        ref.style.opacity = "1";
      } else {
        ref.style.maxHeight = "0px";
        ref.style.opacity = "0";
      }
    });
  }, [openIndex]);
  if (faqs.length === 0 || !faqs) return;

  return (
    <section className={classes.faq}>
      <MultiContainer>
        <Typography variant="h2" weight="bold">
          <Typography variant="span" weight="bold">
            FAQ/
          </Typography>
          Frequently Asked Questions
        </Typography>
        <div className={classes.questions}>
          {faqs &&
            faqs.map((item) => (
              <div
                key={item.id}
                className={`${classes.questionsItem} ${
                  openIndex === item.id ? classes.active : ""
                }`}
              >
                <div className={classes.button} onClick={() => toggle(item.id)}>
                  <div className={classes.buttonText}>
                    <div>
                      <QuestionIcon isOpen={openIndex === item.id} />
                    </div>
                    <Typography variant="h3">{item.question}</Typography>
                  </div>
                  <div>
                    <QuestionIsOpen isOpen={openIndex === item.id} />
                  </div>
                </div>
                <div
                  ref={(el) => {
                    contentRefs.current[item.id] = el;
                  }}
                  className={classes.answerWrapper}
                >
                  <div className={classes.answer}>
                    <Typography variant="h4" weight="regular">
                      {parse(item.answer)}
                    </Typography>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </MultiContainer>
    </section>
  );
};
