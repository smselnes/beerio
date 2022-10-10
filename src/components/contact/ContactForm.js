import { useForm } from "react-hook-form";

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  console.log(errors);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* First name validation */}
        <div className="form__input--firstName">
          <label htmlFor="firstName">First name</label>
          <input
            id="firstName"
            aria-invalid={errors.name ? "true" : "false"}
            {...register("firstName", { required: true, minLength: 3 })}
          />
          {errors.firstName && errors.firstName.type === "required" && (
            <span>Required field</span>
          )}
          {errors.firstName && errors.firstName.type === "minLength" && (
            <span>Minimum 3 characters.</span>
          )}
        </div>
        {/* Last name validation */}
        <div className="form__input--lastName">
          <label htmlFor="lastName">Last name</label>
          <input
            id="lastName"
            {...register("lastName", { required: true, minLength: 4 })}
          />
          {errors.lastName && errors.lastName.type === "required" && (
            <span>Required</span>
          )}
          {errors.lastName && errors.lastName.type === "minLength" && (
            <span>Minimum 4 characters.</span>
          )}
        </div>
        {/* Email validation */}
        <div className="form__input--email">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            {...register("email", { required: true })}
          ></input>
          {errors.email && errors.email.type === "required" && (
            <span>Required</span>
          )}
        </div>
        {/* Subject validation */}

        <div className="form__input--subject">
          <label htmlFor="subject">Subject</label>
          <select id="subject">
            <option value="guidedTour">Guided tours</option>
            <option value="questions">Questions</option>
            <option value="sales">Sales</option>
          </select>
        </div>
        {/* Textarea validation */}
        <div className="form__input--message">
          <label htmlFor="message"></label>
          <textarea
            {...register("message", { required: true, minLength: 10 })}
          />
          {errors.message && errors.message.type === "required" && (
            <span>Required</span>
          )}
          {errors.message && errors.message.type === "minLength" && (
            <span>Minimum 10 characters.</span>
          )}
        </div>
        <input type="submit" />
      </form>
    </>
  );
}
export default ContactForm;
