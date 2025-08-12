"use client";

import { useState, FC } from "react";
import { Typography } from "@typography/typography";
import Image from "next/image";
import CallingImage from "@assets/images/CallingImage.png";
import ArrowIcon from "@assets/icons/arrowIcon.svg";
import { MultiContainer } from "src/ui/multiContainer/multiContainer";
import classes from "./form.module.scss";

interface FormProps {
  isVacancy?: boolean;
  isModal?: boolean;
}

const Form: FC<FormProps> = ({ isVacancy = false, isModal = false }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    vacancy: "",
    description: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    vacancy: "",
    description: "",
  });

  const validate = () => {
    const nameRegex = /^[A-Za-z]+ [A-Za-z]+$/;
    const phoneRegex = /^\+1\d{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const newErrors = {
      fullName: !formData.fullName.trim()
        ? "Required field"
        : nameRegex.test(formData.fullName)
          ? ""
          : "Enter your first and last name separated by a space.",

      phone: !formData.phone.trim()
        ? "Required field"
        : phoneRegex.test(formData.phone)
          ? ""
          : "Enter your phone number starting with +1",

      email: !formData.email.trim()
        ? "Required field"
        : emailRegex.test(formData.email)
          ? ""
          : "Enter a correct email.",

      address: !formData.address.trim() ? "Required field" : "",

      vacancy: !formData.vacancy.trim() ? "Required field" : "",

      description: !formData.description.trim() ? "Required field" : "",
    };

    setErrors(newErrors);

    return !Object.values(newErrors).some((msg) => msg !== "");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    const payload = {
      name: formData.fullName,
      phone: formData.phone,
      email: formData.email,
      address: formData.address,
      vacancy: formData.vacancy,
      description: formData.description,
    };

    try {
      const response = await fetch("http://38.244.178.216/api/contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Error submitting form");
      }

      setFormData({
        fullName: "",
        phone: "",
        email: "",
        address: "",
        vacancy: "",
        description: "",
      });

      setErrors({
        fullName: "",
        phone: "",
        email: "",
        address: "",
        vacancy: "",
        description: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section
      id="form"
      className={classes.formSection}
      style={{ padding: isModal ? "20px 0 20px 20px" : "150px 0" }}
    >
      <MultiContainer>
        <Typography variant="h2" weight="bold">
          {isVacancy ? "Form to reply" : "Do you need reliable services?"}
        </Typography>

        <div
          className={`${classes.formWrapper} ${isModal ? classes.modal : ""}`}
        >
          <form
            onSubmit={handleSubmit}
            className={`${classes.form} ${isModal ? classes.modal : ""}`}
          >
            <input
              type="text"
              name="fullName"
              placeholder="Full name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            {errors.fullName && (
              <span className={classes.error}>{errors.fullName}</span>
            )}

            <input
              type="tel"
              name="phone"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            {errors.phone && (
              <span className={classes.error}>{errors.phone}</span>
            )}

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && (
              <span className={classes.error}>{errors.email}</span>
            )}
            {!isVacancy && (
              <>
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                />
                {errors.address && (
                  <span className={classes.error}>{errors.address}</span>
                )}
              </>
            )}
            <input
              type="text"
              name="vacancy"
              placeholder="Please indicate the vacancy you are applying for"
              value={formData.vacancy}
              onChange={handleChange}
            />
            {errors.vacancy && (
              <span className={classes.error}>{errors.vacancy}</span>
            )}

            <textarea
              name="description"
              placeholder="Brief description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
            />
            {errors.description && (
              <span className={classes.error}>{errors.description}</span>
            )}

            <button type="submit">
              <Typography variant="h3" weight="bold">
                Send
              </Typography>
              <div className={classes.arrow}>
                <Image src={ArrowIcon} alt="arrow icon" />
              </div>
            </button>
          </form>

          <div className={isModal ? classes.imageWrapper : classes.image}>
            <Image
              src={CallingImage}
              alt="Calling image"
              width={isModal ? 350 : 450}
              height={isModal ? 550 : 750}
            />
          </div>
        </div>
      </MultiContainer>
    </section>
  );
};

export default Form;
