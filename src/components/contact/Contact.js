import React from "react";
import Introduction from "../layout/Introduction";
import { PageTitle } from "../layout/PageTitle";
import ContactForm from "./ContactForm";
import FormSuccess from "./FormSuccess";

export default function Contact() {
  PageTitle("Beerio - Contact Page");
  return (
    <>
      <Introduction title="Contact page" />
      <FormSuccess />
      <ContactForm />
    </>
  );
}
