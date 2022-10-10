import React from "react";
import Introduction from "../layout/Introduction";
import ContactForm from "./ContactForm";
import FormSuccess from "./FormSuccess";

export default function Contact() {
  return (
    <>
      <Introduction title="Contact page" />
      <ContactForm />
      <FormSuccess />
    </>
  );
}
