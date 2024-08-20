import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z, ZodSchema } from "zod";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const schema: ZodSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  phone: z.string().regex(/^[0-9]{10}$/, "Phone number must be valid"),
  email: z
    .string()
    .email("Invalid email address")
    .nonempty("Email is required"),
  message: z.string().min(1, "Message is required"),
});

interface FormComponentProps {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
}

const ContactForm = (): React.JSX.Element => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormComponentProps>({
    resolver: zodResolver(schema),
    mode: "onSubmit",
  });

  const onSubmit: SubmitHandler<FormComponentProps> = async (data) => {
    try {
      toast.success("Form submitted successfully!", { autoClose: 4000 });
      setTimeout(() => {
        reset();
      }, 3000);
    } catch (error) {
      toast.error("Failed to submit form");
    }
  };

  const InputStyles = "border-2 border-gray-300 rounded-xl px-2 py-1 max-h-12";
  const LableStyles = "font-santoshi";

  return (
    <>
      <section className="mx-auto max-w-md">
        <h1 className="text-3xl font-bold text-[#5A5555]">Send us a message</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto mt-12 max-w-sm items-center justify-center pb-20 md:mx-0 md:max-w-full md:pb-0"
          noValidate
        >
          <div className="">
            <div className="gap-6 md:flex">
              <div className="grid gap-2 text-left">
                <label htmlFor="firstName" className={LableStyles}>
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  {...register("firstName")}
                  className={InputStyles}
                  placeholder="John"
                />
                {errors.firstName && (
                  <p className="text-xs text-red-500">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <div className="mt-4 grid gap-2 text-left md:mt-0">
                <label htmlFor="lastName" className={LableStyles}>
                  Last Name
                </label>
                <input
                  id="lastName"
                  {...register("lastName")}
                  className={InputStyles}
                  placeholder="Doe"
                />
                {errors.lastName && (
                  <p className="text-xs text-red-500">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>
            <div className="mt-6 gap-6 md:flex">
              <div className="grid gap-2 text-left">
                <label htmlFor="phone" className={LableStyles}>
                  Phone
                </label>
                <input
                  id="phone"
                  {...register("phone")}
                  className={InputStyles}
                  placeholder="+254712345678"
                />
                {errors.phone && (
                  <p className="text-xs text-red-500">{errors.phone.message}</p>
                )}
              </div>
              <div className="mt-4 grid gap-2 text-left md:mt-0">
                <label htmlFor="email" className={LableStyles}>
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email")}
                  className={InputStyles}
                  placeholder="doe@domain.com"
                />
                {errors.email && (
                  <p className="text-xs text-red-500">{errors.email.message}</p>
                )}
              </div>
            </div>
          </div>
          <div className="mt-6 grid gap-2 text-left">
            <label htmlFor="message" className={LableStyles}>
              Message
            </label>
            <textarea
              id="message"
              {...register("message")}
              className="textarea max-h-36 min-h-36 rounded-xl border-2 border-gray-300 px-2 py-3"
              placeholder="Type your message here"
            />
            {errors.message && (
              <p className="text-xs text-red-500">{errors.message.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="mt-3 w-full rounded-lg bg-background-blue py-2 text-sm font-semibold text-white"
          >
            Send message
          </button>
        </form>
        <ToastContainer />
      </section>
    </>
  );
};

export default ContactForm;
