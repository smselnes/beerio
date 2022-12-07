import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormError from "../login/FormError";
import FormSuccess from "../utils/FormSuccess";

const schema = yup.object().shape({
  firstName: yup
    .string()
    .required("Required field")
    .min(2, "Minimum 2 characters"),
  lastName: yup
    .string()
    .required("Required field")
    .min(2, "Minimum 2 characters"),
  email: yup.string().required("Required field"),
  subject: yup.string(),
  content: yup.string().required("Required field"),
});

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
    setSubmitted(true);
    setTimeout(() => {
      window.location.reload();
      navigate("/");
    }, 5000);
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        {submitted && (
          <FormSuccess>
            Thank you for testing out this form! You will be redirected in a few
            seconds.
          </FormSuccess>
        )}

        <div className="form__input--firstName">
          <label htmlFor="firstName">First name</label>
          <input
            id="firstName"
            placeholder="first name..."
            aria-invalid={errors.name ? "true" : "false"}
            {...register("firstName", { required: true, minLength: 3 })}
          />
          {errors.firstName && (
            <FormError>{errors.firstName.message}</FormError>
          )}
        </div>

        <div className="form__input--lastName">
          <label htmlFor="lastName">Last name</label>
          <input
            id="lastName"
            placeholder="last name..."
            {...register("lastName", { required: true, minLength: 4 })}
          />
          {errors.lastName && <FormError>{errors.lastName.message}</FormError>}
        </div>

        <div className="form__input--email">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            placeholder="email..."
            type="email"
            {...register("email", { required: true })}
          ></input>{" "}
          {errors.email && <FormError>{errors.email.message}</FormError>}
        </div>

        <div className="form__input--subject">
          <label htmlFor="subject">Subject</label>
          <select id="subject" {...register("subject")}>
            <option value="guidedTour">Select one</option>
            <option value="guidedTour">Guided tours</option>
            <option value="questions">Questions</option>
            <option value="sales">Sales</option>
          </select>{" "}
          {errors.subject && <FormError>{errors.subject.message}</FormError>}
        </div>

        <div className="form__input--message">
          <label htmlFor="content"></label>
          <textarea id="content" {...register("content")} />{" "}
          {errors.content && <FormError>{errors.content.message}</FormError>}
        </div>
        <input type="submit" value="Send" className="form__submit" />
      </form>
    </>
  );
}
export default ContactForm;
